-- Run AFTER the first SQL file. Adds daily_supply + trainee_requests + the dashboard functions.

create table if not exists public.daily_supply (
  id uuid primary key default gen_random_uuid(),
  trainee_id uuid not null references public.basic_info(id) on delete cascade,
  group_name text, supply_date date not null, session_number int not null default 1,
  session_title text, sub_title text, start_time time, end_time time,
  revision text, revision_details text, notes text,
  tefl text, qol text, attitude numeric, attitude_details text,
  soft_skills numeric, soft_skills_details text,
  performance numeric, why text, performance_details text,
  weak_points text, tasks text, left_overs text, plans text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
  unique (trainee_id, supply_date, session_number)
);
drop trigger if exists trg_ds_touch on public.daily_supply;
create trigger trg_ds_touch before update on public.daily_supply for each row execute function public.touch_updated_at();

create table if not exists public.trainee_requests (
  id uuid primary key default gen_random_uuid(),
  trainee_id uuid not null references public.basic_info(id) on delete cascade,
  type text not null default 'other', message text not null,
  status text not null default 'open', admin_reply text, replied_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.daily_supply enable row level security;
alter table public.trainee_requests enable row level security;
drop policy if exists admin_all_ds on public.daily_supply;
create policy admin_all_ds on public.daily_supply for all to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists admin_all_req on public.trainee_requests;
create policy admin_all_req on public.trainee_requests for all to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.daily_supply, public.trainee_requests from anon;

-- Everything the trainee dashboard needs, in one call (token -> own data only)
create or replace function public.trainee_dashboard(p_token text)
returns jsonb language plpgsql security definer set search_path = public, extensions as $$
declare s public.trainee_sessions; b public.basic_info;
begin
  select * into s from public.trainee_sessions where token_hash = encode(digest(coalesce(p_token,''),'sha256'),'hex');
  if not found then return null; end if;
  update public.trainee_sessions set last_seen_at = now() where id = s.id;
  select * into b from public.basic_info where id = s.trainee_id;
  return jsonb_build_object(
    'profile', public.trainee_safe_profile(b),
    'rows', coalesce((select jsonb_agg(to_jsonb(d) - 'trainee_id' - 'id' order by d.supply_date, d.session_number)
                      from public.daily_supply d where d.trainee_id = s.trainee_id), '[]'::jsonb),
    'requests', coalesce((select jsonb_agg(jsonb_build_object('type',r.type,'message',r.message,'status',r.status,
                      'admin_reply',r.admin_reply,'created_at',r.created_at) order by r.created_at desc)
                      from public.trainee_requests r where r.trainee_id = s.trainee_id), '[]'::jsonb));
end $$;

create or replace function public.trainee_send_request(p_token text, p_type text, p_message text)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare s public.trainee_sessions;
begin
  select * into s from public.trainee_sessions where token_hash = encode(digest(coalesce(p_token,''),'sha256'),'hex');
  if not found or length(trim(coalesce(p_message,''))) = 0 then return false; end if;
  insert into public.trainee_requests(trainee_id, type, message) values (s.trainee_id, left(coalesce(p_type,'other'),30), left(p_message,2000));
  return true;
end $$;

revoke all on function public.trainee_dashboard(text), public.trainee_send_request(text,text,text) from public;
grant execute on function public.trainee_dashboard(text), public.trainee_send_request(text,text,text) to anon, authenticated;
