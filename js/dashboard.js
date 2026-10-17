/* Thabit trainee dashboard: token -> Supabase RPC. No sheet, no direct table reads. */
const SB = "https://vkfexceitwjmxncwceqb.supabase.co";
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZmV4Y2VpdHdqbXhuY3djZXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMzY5MTEsImV4cCI6MjEwNTkxMjkxMX0.6ArXtykrZhdNInphpg_LQTIvULkpwnnlzHA3dKhrNoI";
const TOKEN_KEY = 'thabit_trainee_token', PORTAL = 'index.html';
const T = {
  en: { hi: 'Welcome, ', today: 'Today', week: '7 days', month: '30 days', all: 'Since start', last: 'Last session', info: 'My info', req: 'Send a request', hist: 'Sessions', send: 'Send', sessions: 'Sessions',
        performance: 'Performance', attitude: 'Attitude', soft_skills: 'Soft skills', tefl: 'TEFL', qol: 'QOL', none: 'No data yet', ph: 'Write your request...', overall: 'Overall progress', avg: 'Average', tap: 'Tap a dot to see why', subs: 'Sessions & sub titles', notes: 'Notes' },
  ar: { hi: 'أهلاً ', today: 'اليوم', week: '٧ أيام', month: '٣٠ يوم', all: 'منذ البداية', last: 'آخر جلسة', info: 'بياناتي', req: 'إرسال طلب', hist: 'الجلسات', send: 'إرسال', sessions: 'الجلسات',
        performance: 'الأداء', attitude: 'السلوك', soft_skills: 'المهارات الشخصية', tefl: 'TEFL', qol: 'QOL', none: 'لا توجد بيانات بعد', ph: 'اكتب طلبك...', overall: 'التقدم العام', avg: 'المتوسط', tap: 'اضغط على نقطة لمعرفة السبب', subs: 'الجلسات والعناوين', notes: 'ملاحظات' },
};
T.eg = Object.assign({}, T.ar, { hi: 'أهلاً يا ', last: 'آخر جلسة ليك' });
let D = null, range = 'all', lang = 'en', CUR = [];
const $ = id => document.getElementById(id);
const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tok = () => { try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; } };
const rpc = (fn, body) => fetch(`${SB}/rest/v1/rpc/${fn}`, { method: 'POST', headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(r => r.json());

function setLanguage(l) {
  lang = l; try { localStorage.setItem('thabit_lang', l); } catch (e) {}
  ['Ar', 'En', 'Eg'].forEach(x => $('floatBtn' + x).classList.toggle('active', x.toLowerCase() === l));
  const r = $('htmlRoot'); r.lang = l; r.dir = l === 'en' ? 'ltr' : 'rtl';
  if (D) render();
}
function toggleTheme() {
  const light = $('bodyRoot').classList.toggle('light-theme');
  $('themeIcon').className = 'fa-solid text-sm ' + (light ? 'fa-sun' : 'fa-moon');
  try { localStorage.setItem('thabit_theme', light ? 'light' : 'dark'); } catch (e) {}
}
async function logout() {
  const t = tok(); try { localStorage.removeItem(TOKEN_KEY); localStorage.removeItem('currentTrainee'); } catch (e) {}
  if (t) { try { await rpc('trainee_logout', { p_token: t }); } catch (e) {} }
  location.href = PORTAL;
}

function inRange(r) {
  if (range === 'all') return true;
  const d = new Date(r.supply_date + 'T00:00:00'), n = new Date(); n.setHours(0, 0, 0, 0);
  const days = Math.round((n - d) / 864e5);
  return range === 'today' ? days === 0 : days >= 0 && days < (range === 'week' ? 7 : 30);
}
function spark(vals) {
  if (vals.length < 2) return '';
  const mn = Math.min(...vals), mx = Math.max(...vals), sp = (mx - mn) || 1;
  const pts = vals.map((v, i) => `${(i / (vals.length - 1)) * 300},${60 - ((v - mn) / sp) * 50}`).join(' ');
  return `<svg class="ch" viewBox="0 0 300 70" preserveAspectRatio="none"><polyline points="${pts}" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
const MET = ['performance', 'attitude', 'soft_skills'];
function val(r, k) {
  if (k === 'avg') { const v = MET.map(m => r[m]).filter(x => x != null).map(Number); return v.length ? +(v.reduce((a, b) => a + b, 0) / v.length).toFixed(1) : null; }
  return r[k] == null ? null : Number(r[k]);
}
function chart(rows, keys, o) {
  const W = o.W, H = o.H, L = o.L, R = 22, Tp = 12, B = o.f + 10, n = rows.length;
  const x = i => n < 2 ? L + (W - L - R) / 2 : L + i * (W - L - R) / (n - 1), y = v => Tp + (10 - v) / 9 * (H - Tp - B);
  let s = `<svg class="c2" viewBox="0 0 ${W} ${H}">`;
  [1, 5, 10].forEach(g => s += `<line class="gl" x1="${L}" x2="${W - R}" y1="${y(g)}" y2="${y(g)}"/><text class="tx" x="${L - 6}" y="${y(g) + o.f / 3}" text-anchor="end" font-size="${o.f}">${g}</text>`);
  rows.forEach((r, i) => s += `<text class="tx" x="${x(i)}" y="${H - 3}" text-anchor="middle" font-size="${o.f}">${r.supply_date.slice(5)}</text>`);
  keys.forEach(k => {
    const pts = []; rows.forEach((r, i) => { const v = val(r, k); if (v != null) pts.push([x(i), y(v), i]); });
    s += `<polyline class="ln ${k}" fill="none" stroke-width="${o.w}" points="${pts.map(p => p[0] + ',' + p[1]).join(' ')}"/>`;
    if (k !== 'avg') pts.forEach(p => s += `<circle class="dot ${k}" cx="${p[0]}" cy="${p[1]}" r="${o.r}" data-k="${k}" data-i="${p[2]}"/>`);
  });
  return s + '</svg>';
}
const delta = d => `<div class="${d > 0 ? 'up' : d < 0 ? 'down' : 'flat'}">${d > 0 ? '▲ +' : d < 0 ? '▼ ' : '■ '}${d}</div>`;
function kpi(key, rows, all) {
  const t = T[lang], vals = rows.map(r => val(r, key)).filter(v => v != null);
  let h = `<div class="thabit-card dcard"><h4>${t[key]}</h4>`;
  if (!vals.length) return h + `<div class="sm">${t.none}</div></div>`;
  const cur = vals[vals.length - 1];
  const before = all.filter(r => r[key] != null && !rows.includes(r)).map(r => Number(r[key]));
  const base = before.length ? before[before.length - 1] : vals[0];
  return h + `<div class="big">${cur} <span class="sm">/ 10</span></div>${delta(+(cur - base).toFixed(2))}${chart(rows, [key], { W: 300, H: 150, L: 22, f: 9, w: 2, r: 4 })}<div class="sm" id="why_${key}">${t.tap}</div></div>`;
}
function overall(rows, all) {
  const t = T[lang], vals = rows.map(r => val(r, 'avg')).filter(v => v != null);
  if (!vals.length) return `<h4>${t.overall}</h4><div class="sm">${t.none}</div>`;
  const cur = vals[vals.length - 1], base = vals.length > 1 ? vals[vals.length - 2] : cur;
  const col = { performance: '#3b82f6', attitude: '#e8683a', soft_skills: '#10b981', avg: 'var(--avg)' };
  return `<h4>${t.overall}</h4><div class="big">${cur} <span class="sm">/ 10</span></div>${delta(+(cur - base).toFixed(1))}` +
    `<div class="lg">${[...MET, 'avg'].map(k => `<span><i style="background:${col[k]}"></i>${k === 'avg' ? t.avg : t[k]}</span>`).join('')}</div>` +
    chart(rows, [...MET, 'avg'], { W: 700, H: 300, L: 34, f: 13, w: 4, r: 7 });
}
const listCard = (title, rows, fn) => { const it = rows.slice().reverse().map(fn).filter(Boolean).join('');
  return `<div class="thabit-card dcard"><h4>${title}</h4><div class="lst">${it || `<div class="sm">${T[lang].none}</div>`}</div></div>`; };
const item = (r, body) => `<div class="it"><div class="dt">${r.supply_date}</div>${body}</div>`;

function render() {
  const t = T[lang], all = D.rows, rows = CUR = all.filter(inRange), p = D.profile || {};
  $('hello').textContent = t.hi + (p.trainee || '');
  $('rng').innerHTML = ['today', 'week', 'month', 'all'].map(k => `<button class="${k === range ? 'on' : ''}" onclick="range='${k}';render()">${t[k]}</button>`).join('');
  $('kpis').innerHTML = `<div class="thabit-card dcard"><h4>${t.sessions}</h4><div class="big">${rows.length}</div>${spark(rows.map((r, i) => i + 1))}</div>` + MET.map(k => kpi(k, rows, all)).join('');
  $('overall').innerHTML = overall(rows, all);
  $('lists').innerHTML =
    listCard(t.subs, rows, r => item(r, `<div dir="auto"><b>#${esc(r.session_number)} ${esc(r.session_title)}</b></div><div class="sm" dir="auto">${esc(r.sub_title)}</div>`)) +
    listCard(t.notes, rows, r => r.notes ? item(r, `<div dir="auto" style="white-space:pre-line">${esc(r.notes)}</div>`) : '') +
    listCard('TEFL', rows, r => r.tefl ? item(r, `<div dir="auto">${esc(r.tefl)}</div>`) : '') +
    listCard('QOL', rows, r => r.qol ? item(r, `<div dir="auto">${esc(r.qol)}</div>`) : '');
  ['Last', 'Info', 'Req', 'Hist'].forEach(k => $('t' + k).textContent = t[k.toLowerCase()]);
  $('rqBtn').textContent = t.send; $('rqMsg').placeholder = t.ph;
  const L = all[all.length - 1], line = (a, b) => b ? `<div class="row"><span class="sm">${a}</span><b>${esc(b)}</b></div>` : '';
  const LF = [['supply_date','Date'],['session_number','Session #'],['group_name','Group'],['session_title','Title'],['sub_title','Sub title'],['start_time','Start'],['end_time','End'],
    ['revision','Revision'],['revision_details','Revision details'],['notes','Notes'],['tefl','TEFL'],['qol','QOL'],['attitude','Attitude'],['attitude_details','Attitude details'],
    ['soft_skills','Soft skills'],['soft_skills_details','Soft skills details'],['performance','Performance'],['why','Why'],['performance_details','Performance details'],
    ['weak_points','Weak points'],['tasks','Tasks'],['left_overs','Left overs'],['plans','Plans']];
  $('last').innerHTML = L ? LF.map(f => line(f[1], L[f[0]])).join('') : `<div class="sm">${t.none}</div>`;
  const IF = [['status_as_of_today','Status'],['current_plan','Current plan'],['days_a_week','Days / week'],['session_time','Session time'],['place','Place'],['subscription','Subscription'],['due_date','Due date'],
    ['joining_date','Joined'],['first_session','First session'],['birth_date','Birth date'],['education_on_joining','Education on joining'],['schooling','Schooling'],['location','Location'],['residence_mostly','Residence'],
    ['first_thabit_scoring','First Thabit scoring'],['first_approved_english_test','First English test'],['first_psychological_approved_test','First psychological test'],['preferred_phone','Phone'],['preferred_email','Email']];
  $('info').innerHTML = line('Group', L && L.group_name) + IF.map(f => line(f[1], p[f[0]])).join('');
  $('rqList').innerHTML = (D.requests || []).map(r => `<div class="row"><span>${esc(r.message)}<br><span class="sm">${esc(r.type)} · ${esc(r.status)}</span></span><b>${esc(r.admin_reply || '')}</b></div>`).join('');
  $('hist').innerHTML = rows.length ? '<table><tr><th>Date</th><th>#</th><th>Title</th><th>Perf.</th><th>Att.</th><th>Soft</th><th>TEFL</th><th>QOL</th></tr>' +
    rows.slice().reverse().map(r => `<tr><td>${r.supply_date}</td><td>${r.session_number}</td><td>${esc(r.session_title)}</td><td>${r.performance ?? ''}</td><td>${r.attitude ?? ''}</td><td>${r.soft_skills ?? ''}</td><td>${esc(r.tefl)}</td><td>${esc(r.qol)}</td></tr>`).join('') + '</table>' : `<div class="sm">${t.none}</div>`;
}
async function load() {
  const d = tok() ? await rpc('trainee_dashboard', { p_token: tok() }).catch(() => null) : null;
  if (!d || !d.profile) { try { localStorage.removeItem(TOKEN_KEY); } catch (e) {}
    $('hello').innerHTML = `<a href="${PORTAL}" style="color:#fbbf24">${tok() === null ? 'Please log in from the portal first →' : 'Session not valid, log in again →'}</a>`;
    console.warn('Thabit dashboard: no valid session', d);
    if (location.protocol !== 'file:') setTimeout(() => { location.href = PORTAL; }, 2500);
    return; }
  d.rows = (d.rows || []).slice().sort((a, b) => (a.supply_date + String(a.session_number).padStart(5, '0')).localeCompare(b.supply_date + String(b.session_number).padStart(5, '0'))); D = d; render();
}
async function sendReq() {
  const m = $('rqMsg').value.trim(); if (!m) return;
  const ok = await rpc('trainee_send_request', { p_token: tok(), p_type: $('rqType').value, p_message: m });
  if (ok === true) { $('rqMsg').value = ''; load(); }
}
window.addEventListener('DOMContentLoaded', () => {
  try { if (localStorage.getItem('thabit_theme') === 'light') { $('bodyRoot').classList.add('light-theme'); $('themeIcon').className = 'fa-solid fa-sun text-sm'; } } catch (e) {}
  let l = 'en'; try { l = localStorage.getItem('thabit_lang') || 'en'; } catch (e) {}
  setLanguage(l); load();
});

document.addEventListener('click', e => {
  const tip = $('barTip'), d = e.target.closest && e.target.closest('.dot');
  if (!d) { tip.classList.remove('show'); return; }
  const r = CUR[+d.dataset.i], k = d.dataset.k, v = val(r, k);
  tip.textContent = `${r.supply_date} · ${T[lang][k]} ${v}/10`;
  const b = d.getBoundingClientRect(); tip.style.left = (b.left + b.width / 2) + 'px'; tip.style.top = (b.top - 8) + 'px'; tip.classList.add('show');
  const w = $('why_' + k), why = k === 'performance' ? (r.why || r.performance_details) : r[k + '_details'];
  if (w) w.innerHTML = `${r.supply_date} · ${v}/10` + (why ? `<br><span dir="auto">${esc(why)}</span>` : '');
});
