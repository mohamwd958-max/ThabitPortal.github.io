/* ==========================================================
   THABIT SYSTEM - ADMIN PANEL DASHBOARD & SUPABASE SCRIPT
   ================================================          */

(function () {
    var LOGO = '<g transform="translate(2.00 4.12) scale(0.10237) translate(-49.5 -12.5)"><path d="M322.8 24.2L317.2 21.0L312.3 19.8L307.5 19.8L301.5 21.0L292.8 24.5L281.8 31.8L273.3 39.7L258.0 55.3L243.5 68.2L235.8 72.8L231.3 74.5L223.0 76.2L216.3 76.0L209.8 74.2L204.7 71.3L200.2 67.0L197.5 62.7L195.8 58.7L194.7 52.3L194.7 47.0L195.8 40.8L197.0 39.0L199.0 33.0L203.3 27.0L211.2 19.8L219.7 15.2L223.3 14.2L224.7 12.5L216.8 13.0L208.3 15.0L207.2 16.0L199.0 19.7L193.0 24.2L188.0 29.0L183.7 34.7L178.7 44.0L175.7 55.3L176.0 65.8L178.8 75.5L180.5 78.8L183.8 83.2L188.8 87.8L194.5 91.3L198.0 93.0L204.5 94.5L211.7 95.2L221.7 94.5L228.7 92.8L239.2 87.8L252.0 79.0L262.8 68.2L274.0 55.3L282.3 47.2L288.0 42.7L296.5 38.0L302.8 37.3L305.3 38.7L307.3 42.7L307.3 49.7L302.7 64.2L293.5 82.5L291.2 85.7L290.3 88.0L286.7 93.3L284.2 98.3L281.8 101.3L279.8 105.5L277.2 108.8L275.2 113.0L272.5 116.3L262.7 132.7L259.8 135.8L220.2 139.0L210.8 139.2L203.7 140.3L194.3 140.7L186.8 141.8L152.0 143.7L144.0 145.0L102.3 148.0L100.2 148.8L96.3 153.2L95.5 155.2L93.2 157.7L91.0 161.3L82.5 171.5L81.8 173.2L68.5 190.2L66.5 193.5L64.0 196.0L63.3 197.7L59.3 202.3L59.5 203.8L74.8 203.3L81.0 202.2L89.2 201.8L97.8 200.7L134.5 198.7L141.2 197.5L150.0 197.3L155.7 196.5L156.8 196.8L156.8 198.2L144.8 214.8L142.3 217.5L137.2 225.3L128.7 236.0L128.0 237.7L125.3 240.7L114.0 256.8L82.0 299.3L72.2 308.8L67.2 312.3L57.3 316.7L50.5 318.5L49.5 319.7L49.7 321.2L51.8 321.5L59.5 320.5L101.0 318.5L114.2 317.0L127.5 313.8L132.2 310.7L136.7 306.0L175.8 243.2L178.3 240.2L180.7 235.7L208.0 193.3L210.3 192.3L220.2 191.3L223.3 191.5L224.3 193.0L222.0 196.0L219.3 201.2L211.5 213.0L201.5 230.2L188.2 251.2L187.5 253.2L180.5 263.8L173.8 276.2L169.8 282.0L160.5 298.5L158.7 304.0L158.7 310.2L160.7 315.5L165.2 319.7L170.2 321.5L175.5 321.3L179.2 320.0L182.5 318.0L187.8 313.5L215.8 283.8L234.7 265.3L251.8 251.5L259.0 248.0L261.0 248.0L262.8 249.2L263.8 254.0L263.0 259.7L258.7 272.5L255.7 285.2L254.8 299.0L255.7 305.3L258.7 312.7L263.3 318.2L269.8 321.3L275.3 322.5L279.3 322.7L286.0 321.5L294.5 318.2L301.5 313.5L308.8 307.0L317.8 296.3L327.2 281.5L330.7 273.0L332.0 271.0L334.0 264.3L335.0 263.0L335.3 260.7L336.5 258.5L337.0 253.3L335.7 252.7L333.8 254.2L330.0 262.5L325.7 270.2L323.2 273.3L321.3 277.2L315.0 285.8L306.7 294.8L300.0 300.0L293.8 303.0L286.5 303.0L283.5 300.5L282.0 297.2L282.0 286.5L284.7 274.7L286.0 272.2L287.8 263.8L290.5 257.0L293.7 242.0L294.0 234.3L293.7 229.8L290.3 223.3L287.2 220.8L282.7 218.8L275.8 218.8L270.0 220.5L265.5 222.3L254.3 229.5L235.8 245.2L226.5 254.5L224.7 257.2L205.8 277.3L204.8 277.7L204.5 276.5L218.7 252.3L221.2 249.0L228.0 236.7L235.2 225.7L235.7 224.0L249.0 203.2L249.5 201.5L255.5 191.7L257.7 189.0L259.8 188.2L266.8 188.2L274.5 186.8L295.7 185.3L308.8 185.0L316.5 183.7L324.0 183.5L332.0 182.3L341.5 182.0L347.7 181.2L368.2 180.3L373.2 179.3L374.8 178.2L376.8 173.7L377.8 172.7L379.8 167.7L381.2 166.2L396.3 135.7L398.3 130.7L401.0 126.5L401.0 124.8L385.3 125.5L379.8 126.5L370.7 126.8L362.7 128.0L328.8 130.0L322.2 131.2L314.5 131.3L304.2 132.7L293.5 133.2L292.2 132.3L292.5 130.8L295.2 127.8L297.2 123.7L299.5 120.7L313.5 97.3L322.7 79.2L326.2 69.5L327.3 67.8L330.5 55.2L331.3 47.2L330.7 39.0L327.2 28.8Z" fill="currentColor" stroke="none"/></g>';
    var mandala = [0,45,90,135,180,225,270,315].map(function (a) {
        return '<ellipse cx="20" cy="10.5" rx="2.8" ry="6.5" transform="rotate(' + a + ' 20 20)"/>';
    }).join('') + '<circle cx="20" cy="20" r="2.2"/>';
    var icons = {
        th: LOGO,
        sun: '<circle cx="20" cy="20" r="6"/><path d="M20 4v4M20 32v4M4 20h4M32 20h4M8.7 8.7l2.8 2.8M28.5 28.5l2.8 2.8M8.7 31.3l2.8-2.8M28.5 11.5l2.8-2.8"/>',
        moon: '<path transform="translate(3 3) scale(1.4)" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
        eye: '<path d="M3 20c5-8 11-12 17-12s12 4 17 12c-5 8-11 12-17 12S8 28 3 20z"/><circle cx="20" cy="20" r="5.5"/><circle cx="20" cy="20" r="1.8"/>',
        bolt: '<path d="M23 4L9 22h9l-2 14 15-19h-9z"/>',
        T: '<text x="20" y="31" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="900" font-size="32" stroke-width="1.4">T</text>',
        small: '<text x="20" y="28" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="900" font-size="22" stroke-width="1.3">th</text>',
        ain: '<text x="20" y="29" text-anchor="middle" font-family="Cairo,sans-serif" font-weight="700" font-size="30" stroke-width="1.2">\u0639</text>',
        tha: '<text x="20" y="29" text-anchor="middle" font-family="Cairo,sans-serif" font-weight="700" font-size="30" stroke-width="1.2">\u062b</text>',
        note: '<path d="M14 29V9l16-4v20"/><ellipse cx="10.5" cy="29" rx="4.5" ry="3.5"/><ellipse cx="26.5" cy="25" rx="4.5" ry="3.5"/>',
        mic: '<rect x="15.5" y="5" width="9" height="17" rx="4.5"/><path d="M10 19a10 10 0 0 0 20 0M20 29v6M14 35h12"/>',
        doc: '<rect x="9" y="5" width="22" height="30" rx="3"/><path d="M14 14h12M14 20h12M14 26h7"/>',
        bulb: '<path d="M15 29h10M17 34h6M20 5a10 10 0 0 0-6 18c1.2 1 2 2.6 2 4.5v1.5h8v-1.5c0-1.9.8-3.5 2-4.5A10 10 0 0 0 20 5z"/>',
        mandala: mandala,
        book: '<path d="M20 11c-4-3-9-4-14-3v22c5-1 10 0 14 3 4-3 9-4 14-3V8c-5-1-10 0-14 3zM20 11v22"/>',
        target: '<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="8"/><circle cx="20" cy="20" r="3"/>'
    };
    var names = Object.keys(icons);
    var STEP = 60, N = 6, TILE = STEP * N, SCALE = 0.72;
    var angles = [-14, -6, 0, 7, 13, -9, 4];
    var defs = '';
    names.forEach(function (n) {
        defs += '<g id="thi-' + n + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + icons[n] + '</g>';
    });
    var uses = '';
    for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
            var id = names[(r * 5 + c * 3) % names.length];
            var x = (r % 2 ? 45 : 15) + c * STEP;
            var y = 30 + r * STEP;
            var a = angles[(r * 3 + c * 5) % angles.length];
            uses += '<use href="#thi-' + id + '" transform="translate(' + x + ' ' + y + ') rotate(' + a + ') scale(' + SCALE + ') translate(-20 -20)"/>';
        }
    }
    var svg = '<svg id="thabitBg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<defs>' + defs + '<pattern id="thabitTile" width="' + TILE + '" height="' + TILE + '" patternUnits="userSpaceOnUse">' + uses + '</pattern></defs>' +
        '<rect width="100%" height="100%" fill="url(#thabitTile)"/></svg>';
    document.body.insertAdjacentHTML('afterbegin', svg);
})();

const SUPABASE_URL = "https://vkfexceitwjmxncwceqb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZmV4Y2VpdHdqbXhuY3djZXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMzY5MTEsImV4cCI6MjEwNTkxMjkxMX0.6ArXtykrZhdNInphpg_LQTIvULkpwnnlzHA3dKhrNoI";

const PROFILES_TABLE = "basic_info";
const DAILY_SUPPLY_TABLE = "DailySuply";

function esc(v) {
    return String(v === null || v === undefined ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function showToast(message, isError = false) {
    const toast = document.getElementById('generalToast');
    const msg = document.getElementById('generalToastMsg');
    const icon = document.getElementById('generalToastIcon');
    if (!toast || !msg) { alert(message); return; }
    msg.textContent = message;
    if (icon) {
        icon.className = isError ? 'fa-solid fa-circle-exclamation text-rose-400' : 'fa-solid fa-circle-check text-emerald-400';
    }
    toast.style.display = 'flex';
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.style.display = 'none', 300);
    }, 3000);
}

function goToPortal() { window.location.href = 'portal/portal.html'; }

window.addEventListener('DOMContentLoaded', async () => {
    const authHome = document.getElementById('thaAuthHome');
    if (authHome) authHome.onclick = goToPortal;
    showAuthModal(false);
    openAdminMainPanel();
});

function showAuthModal(show) {
    const authBox = document.getElementById('thaAuth');
    if (authBox) authBox.classList.toggle('open', show);
}

function openAdminMainPanel() {
    const modalOverlay = document.getElementById('adminModalOverlay');
    if (modalOverlay) modalOverlay.classList.add('open');
    showAdminView('home');
}

function toggleAdminPanel() {
    const o = document.getElementById('adminModalOverlay');
    if (o) o.classList.toggle('open');
}

function showAdminView(v) {
    const homeEl = document.getElementById('adminHome');
    const voicesEl = document.getElementById('adminViewVoices');
    const reportsEl = document.getElementById('adminViewReports');
    const modsEl = document.getElementById('adminViewMods');
    const dashboardMainEl = document.getElementById('adminViewDashboardMain');
    const subContainer = document.getElementById('adminDynamicSubContainer');

    if (homeEl) homeEl.style.display = v === 'home' ? 'flex' : 'none';
    if (voicesEl) voicesEl.style.display = v === 'voices' ? 'block' : 'none';
    if (reportsEl) reportsEl.style.display = v === 'reports' ? 'block' : 'none';
    if (modsEl) modsEl.style.display = v === 'mods' ? 'block' : 'none';
    if (dashboardMainEl) dashboardMainEl.style.display = v === 'dashboardMain' ? 'flex' : 'none';
    if (subContainer) subContainer.style.display = v === 'sub' ? 'block' : 'none';
}

async function fetchStudentsFromSupabase() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${PROFILES_TABLE}?select=*&order=trainee.asc`, {
            method: 'GET',
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Content-Type': 'application/json' }
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (e) { return []; }
}

async function fetchDailySupplyFromSupabase() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${DAILY_SUPPLY_TABLE}?select=*`, {
            method: 'GET',
            headers: { 'apikey': SUPABASE_ANON_KEY, 'Content-Type': 'application/json' }
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (e) { return []; }
}

async function openDashboardSubView(actionType) {
    const dashboardMainEl = document.getElementById('adminViewDashboardMain');
    const subContainer = document.getElementById('adminDynamicSubContainer');
    
    if (dashboardMainEl) dashboardMainEl.style.display = 'none';
    if (subContainer) subContainer.style.display = 'block';

    const backBtnHtml = `<div class="tha-btns" style="margin-bottom:12px"><button type="button" class="tha-b gray" onclick="showAdminView('dashboardMain')"><i class="fa-solid fa-arrow-left"></i> رجوع</button></div>`;

    if (actionType === 'dailySupply') {
        subContainer.innerHTML = `${backBtnHtml}<div class="text-center py-6 text-amber-400">جاري جلب أسماء الطلاب ومطابقتها مع جدول DailySuply...</div>`;
        
        const students = await fetchStudentsFromSupabase();
        const dailyRecords = await fetchDailySupplyFromSupabase();

        const todayStr = new Date().toISOString().split('T')[0];
        let tableRows = '';

        // استخدام أسماء الطلاب المسجلة في basic_info أو إنشاء قائمة افتراضية إذا تعذر الوصول
        const studentList = (students && students.length > 0) ? students : [
            { trainee: "Rawaa Hesham" }, { trainee: "Khaled Hesham" }, { trainee: "Fatma Hesham" },
            { trainee: "Arwa Mostafa" }, { trainee: "Omar Elsayed" }, { trainee: "Sherif Mohamed" },
            { trainee: "Ahmed Abdelfattah" }, { trainee: "Ahmed Morsy" }, { trainee: "Khaled Abdelbadee" },
            { trainee: "Ahmed Mohamed" }, { trainee: "Ahmed Khaled" }, { trainee: "Ahmed Fedawy" }
        ];

        studentList.forEach((st, idx) => {
            const studentName = esc(st.trainee || st.name || 'طالب');
            const studentId = st.id || '';
            
            const existing = dailyRecords.find(d => String(d.trainee_id) === String(studentId) || (d.name && d.name.trim() === studentName.trim())) || {};

            tableRows += `
                <tr class="border-b border-slate-800 hover:bg-slate-950/50 transition">
                    <td class="p-2 font-bold text-amber-300 sticky left-0 bg-slate-900">${studentName}</td>
                    <td class="p-2"><input type="text" id="ds_gn_${idx}" value="${esc(existing.group_name || st.group || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-24"></td>
                    <td class="p-2"><input type="date" id="ds_date_${idx}" value="${esc(existing.supply_date || todayStr)}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-28"></td>
                    <td class="p-2"><input type="number" id="ds_num_${idx}" value="${esc(existing.session_number || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-16"></td>
                    <td class="p-2"><input type="text" id="ds_title_${idx}" value="${esc(existing.session_title || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_subtitle_${idx}" value="${esc(existing.sub_title || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-28"></td>
                    <td class="p-2"><input type="time" id="ds_start_${idx}" value="${esc(existing.start_time || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-24"></td>
                    <td class="p-2"><input type="time" id="ds_end_${idx}" value="${esc(existing.end_time || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-24"></td>
                    <td class="p-2"><input type="text" id="ds_rev_${idx}" value="${esc(existing.revision || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-20"></td>
                    <td class="p-2"><input type="text" id="ds_revd_${idx}" value="${esc(existing.revision_details || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_notes_${idx}" value="${esc(existing.notes || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_tefl_${idx}" value="${esc(existing.tefl || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-20"></td>
                    <td class="p-2"><input type="text" id="ds_qol_${idx}" value="${esc(existing.qol || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-20"></td>
                    <td class="p-2"><input type="number" id="ds_att_${idx}" min="1" max="10" value="${esc(existing.attitude || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-16"></td>
                    <td class="p-2"><input type="text" id="ds_attd_${idx}" value="${esc(existing.attitude_details || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="number" id="ds_ss_${idx}" value="${esc(existing.soft_skills || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-16"></td>
                    <td class="p-2"><input type="text" id="ds_ssd_${idx}" value="${esc(existing.soft_skills_details || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="number" id="ds_perf_${idx}" value="${esc(existing.performance || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-16"></td>
                    <td class="p-2"><input type="text" id="ds_why_${idx}" value="${esc(existing.why || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-24"></td>
                    <td class="p-2"><input type="text" id="ds_perfd_${idx}" value="${esc(existing.performance_details || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_wp_${idx}" value="${esc(existing.weak_points || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_tasks_${idx}" value="${esc(existing.tasks || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_left_${idx}" value="${esc(existing.left_overs || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2"><input type="text" id="ds_plans_${idx}" value="${esc(existing.plans || '')}" class="bg-slate-950 border border-slate-700 rounded p-1 text-xs text-white w-32"></td>
                    <td class="p-2">
                        <button type="button" onclick="saveDailySuplyRow(${idx}, '${studentId}', '${esc(studentName)}', '${esc(existing.id || '')}')" class="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded text-xs font-bold">حفظ</button>
                    </td>
                </tr>
            `;
        });

        subContainer.innerHTML = `${backBtnHtml}
            <div class="flex flex-col gap-3">
                <div class="flex justify-between items-center">
                    <h4 class="text-amber-400 font-bold text-base"><i class="fa-solid fa-calendar-days"></i> إدارة جدول DailySuply للطلاب</h4>
                    <span class="text-xs text-slate-400">💡 يمكنك تعديل أي حقل ثم ضغط حفظ بجانب الطالب.</span>
                </div>
                <div class="overflow-x-auto border border-slate-700 rounded-xl max-h-[70vh]">
                    <table class="w-full text-left text-xs text-slate-300">
                        <thead class="bg-slate-950 text-amber-300 uppercase text-[10px] sticky top-0">
                            <tr>
                                <th class="p-2 sticky left-0 bg-slate-950">trainee name</th>
                                <th class="p-2">group_name</th>
                                <th class="p-2">supply_date</th>
                                <th class="p-2">session_number</th>
                                <th class="p-2">session_title</th>
                                <th class="p-2">sub_title</th>
                                <th class="p-2">start_time</th>
                                <th class="p-2">end_time</th>
                                <th class="p-2">revision</th>
                                <th class="p-2">revision_details</th>
                                <th class="p-2">notes</th>
                                <th class="p-2">tefl</th>
                                <th class="p-2">qol</th>
                                <th class="p-2">attitude</th>
                                <th class="p-2">attitude_details</th>
                                <th class="p-2">soft_skills</th>
                                <th class="p-2">soft_skills_details</th>
                                <th class="p-2">performance</th>
                                <th class="p-2">why</th>
                                <th class="p-2">performance_details</th>
                                <th class="p-2">weak_points</th>
                                <th class="p-2">tasks</th>
                                <th class="p-2">left_overs</th>
                                <th class="p-2">plans</th>
                                <th class="p-2">إجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </div>`;
    }
}

window.saveDailySuplyRow = async function(idx, studentId, studentName, recordId) {
    const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? (el.value.trim() === '' ? null : el.value.trim()) : null;
    };

    const body = {
        trainee_id: studentId || null,
        group_name: getVal(`ds_gn_${idx}`),
        supply_date: getVal(`ds_date_${idx}`),
        session_number: getVal(`ds_num_${idx}`) ? Number(getVal(`ds_num_${idx}`)) : null,
        session_title: getVal(`ds_title_${idx}`),
        sub_title: getVal(`ds_subtitle_${idx}`),
        start_time: getVal(`ds_start_${idx}`),
        end_time: getVal(`ds_end_${idx}`),
        revision: getVal(`ds_rev_${idx}`),
        revision_details: getVal(`ds_revd_${idx}`),
        notes: getVal(`ds_notes_${idx}`),
        tefl: getVal(`ds_tefl_${idx}`),
        qol: getVal(`ds_qol_${idx}`),
        attitude: getVal(`ds_att_${idx}`) ? Number(getVal(`ds_att_${idx}`)) : null,
        attitude_details: getVal(`ds_attd_${idx}`),
        soft_skills: getVal(`ds_ss_${idx}`) ? Number(getVal(`ds_ss_${idx}`)) : null,
        soft_skills_details: getVal(`ds_ssd_${idx}`),
        performance: getVal(`ds_perf_${idx}`) ? Number(getVal(`ds_perf_${idx}`)) : null,
        why: getVal(`ds_why_${idx}`),
        performance_details: getVal(`ds_perfd_${idx}`),
        weak_points: getVal(`ds_wp_${idx}`),
        tasks: getVal(`ds_tasks_${idx}`),
        left_overs: getVal(`ds_left_${idx}`),
        plans: getVal(`ds_plans_${idx}`)
    };

    try {
        let res;
        if (recordId && recordId !== 'null' && recordId !== '') {
            res = await fetch(`${SUPABASE_URL}/rest/v1/${DAILY_SUPPLY_TABLE}?id=eq.${encodeURIComponent(recordId)}`, {
                method: 'PATCH',
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
                body: JSON.stringify(body)
            });
        } else {
            res = await fetch(`${SUPABASE_URL}/rest/v1/${DAILY_SUPPLY_TABLE}`, {
                method: 'POST',
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
                body: JSON.stringify(body)
            });
        }

        if (!res.ok) throw new Error(await res.text());
        showToast(`تم حفظ سجل (${studentName}) بنجاح ✓`);
    } catch (e) {
        showToast('فشل الحفظ: ' + e.message, true);
    }
};
