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
const BUCKET_NAME = "audio-files";

// Table names used by the new save buttons (change these if your tables are named differently)
const PROFILES_TABLE = "profiles";
const DAILY_SUPPLY_TABLE = "daily_supply";
const EXCEPTIONS_TABLE = "student_exceptions";

const TOKEN_KEY = 'thabit_admin_token';
const REFRESH_KEY = 'thabit_admin_refresh';
const ACTIVITY_KEY = 'thabit_admin_last_active';

// Auto-logout ONLY after this much time with no use of the portal (48 hours)
const INACTIVITY_LIMIT_MS = 48 * 60 * 60 * 1000;
// How often the admin counters (reports / voices) refresh while the panel is open
const BADGE_REFRESH_MS = 30000;

// Notification (toast) position. Change this one value to move every notification:
// 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right'
const TOAST_POSITION = 'top-center';

let adminRecording = false, adminRecorder = null, adminChunks = [], adminSecTimer = null, adminSeconds = 0;
let recordedBlobForUpload = null;
let wordExistsInDb = false;
let currentConflictAction = 'replace';
let currentAuthAccessToken = null;
let selectAllState = false;
let studentsCache = [];

/* ---------------- helpers ---------------- */

function esc(v) {
    return String(v === null || v === undefined ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function applyToastPosition(pos) {
    const p = (pos || TOAST_POSITION).split('-');
    const v = p[0] === 'bottom' ? 'bottom' : 'top';
    const h = p[1] === 'left' ? 'left' : (p[1] === 'right' ? 'right' : 'center');
    const edge = 'calc(env(safe-area-inset-' + v + ', 0px) + 14px)';
    let css = '#generalToast{position:fixed !important;z-index:100000 !important;max-width:min(92vw,520px) !important;margin:0 !important;' +
        (v === 'top' ? 'top:' + edge + ' !important;bottom:auto !important;' : 'bottom:' + edge + ' !important;top:auto !important;');
    if (h === 'center') css += 'left:50% !important;right:auto !important;transform:translateX(-50%) !important;';
    else if (h === 'left') css += 'left:14px !important;right:auto !important;transform:none !important;';
    else css += 'right:14px !important;left:auto !important;transform:none !important;';
    css += '}';
    let st = document.getElementById('thaToastPosStyle');
    if (!st) { st = document.createElement('style'); st.id = 'thaToastPosStyle'; document.head.appendChild(st); }
    st.textContent = css;
}
applyToastPosition();

function showToast(message, isError = false) {
    const toast = document.getElementById('generalToast');
    const msg = document.getElementById('generalToastMsg');
    const icon = document.getElementById('generalToastIcon');
    if (!toast || !msg) {
        alert(message);
        return;
    }
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

function goToPortal() {
    window.location.href = 'portal/portal.html';
}

/* ---------------- auth ---------------- */

function jwtExpired(token) {
    try {
        const p = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
        return !p.exp || p.exp * 1000 < Date.now() + 30000;
    } catch (e) {
        return true;
    }
}

function storeSession(data) {
    currentAuthAccessToken = data.access_token;
    try {
        localStorage.setItem(TOKEN_KEY, data.access_token);
        if (data.refresh_token) localStorage.setItem(REFRESH_KEY, data.refresh_token);
    } catch (e) {}
}

function clearSession() {
    currentAuthAccessToken = null;
    try {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(ACTIVITY_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
    } catch (e) {}
}

/* ---- inactivity tracking: the session never ends by itself unless 48h pass with no use ---- */
let lastActivityWrite = 0;
function touchActivity(force) {
    const now = Date.now();
    if (!force && now - lastActivityWrite < 15000) return;
    lastActivityWrite = now;
    try { localStorage.setItem(ACTIVITY_KEY, String(now)); } catch (e) {}
}
function inactiveTooLong() {
    try {
        const last = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0', 10);
        return !!last && (Date.now() - last) > INACTIVITY_LIMIT_MS;
    } catch (e) { return false; }
}
['click', 'keydown', 'touchstart', 'pointerdown', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, function () { if (currentAuthAccessToken) touchActivity(); }, { passive: true, capture: true });
});
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && currentAuthAccessToken) {
        if (inactiveTooLong()) forceRelogin('انتهت الجلسة بسبب عدم الاستخدام لأكثر من 48 ساعة.');
        else touchActivity(true);
    }
});

/* ---- explicit logout: the ONLY manual way out of the session ---- */
async function adminLogout() {
    const tokenToRevoke = currentAuthAccessToken;
    stopBadgePolling();
    clearSession();
    const overlay = document.getElementById('adminModalOverlay');
    if (overlay) overlay.classList.remove('open');
    const passInput = document.getElementById('thaPass');
    if (passInput) passInput.value = '';
    const errEl = document.getElementById('thaAuthErr');
    if (errEl) errEl.textContent = '';
    showAuthModal(true);
    // best effort: revoke the session on the server too
    if (tokenToRevoke) {
        try {
            await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
                method: 'POST',
                headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${tokenToRevoke}` }
            });
        } catch (e) {}
    }
}

async function refreshSession() {
    let rt = null;
    try { rt = localStorage.getItem(REFRESH_KEY); } catch (e) {}
    if (!rt) return false;
    try {
        const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
            body: JSON.stringify({ refresh_token: rt })
        });
        const data = await res.json();
        if (res.status >= 500) return 'network';
        if (!res.ok || !data.access_token) return false;
        storeSession(data);
        return true;
    } catch (e) {
        // offline / server unreachable: do NOT log the user out for that
        return 'network';
    }
}

function forceRelogin(message) {
    stopBadgePolling();
    clearSession();
    const overlay = document.getElementById('adminModalOverlay');
    if (overlay) overlay.classList.remove('open');
    showAuthModal(true);
    const errEl = document.getElementById('thaAuthErr');
    if (errEl) errEl.textContent = message || 'انتهت الجلسة، سجّل الدخول من جديد.';
}

// Authenticated fetch: refreshes an expired token and sends the user back to login on 401
async function apiFetch(url, options = {}, retried = false) {
    if (currentAuthAccessToken && jwtExpired(currentAuthAccessToken)) {
        const ok = await refreshSession();
        if (ok === false) { forceRelogin(); throw new Error('Session expired'); }
        if (ok === 'network') throw new Error('Network unavailable');
    }
    const headers = Object.assign({}, options.headers || {}, {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${currentAuthAccessToken || SUPABASE_ANON_KEY}`
    });
    const res = await fetch(url, Object.assign({}, options, { headers }));
    if (res.status === 401 && !retried) {
        const r2 = await refreshSession();
        if (r2 === true) return apiFetch(url, options, true);
        if (r2 === 'network') throw new Error('Network unavailable');
        forceRelogin();
        throw new Error('Session expired');
    }
    return res;
}

async function errorText(res) {
    try {
        const j = await res.json();
        return j.message || j.error_description || j.hint || JSON.stringify(j);
    } catch (e) {
        return 'HTTP ' + res.status;
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    // Portal buttons: go to the portal page
    const authHome = document.getElementById('thaAuthHome');
    if (authHome) authHome.onclick = goToPortal;
    const homeBtn = document.querySelector('#adminPanel button[title="Portal Home"]');
    if (homeBtn) homeBtn.onclick = goToPortal;

    let savedToken = null;
    try { savedToken = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY); } catch (e) {}

    if (savedToken) {
        if (inactiveTooLong()) {
            forceRelogin('انتهت الجلسة بسبب عدم الاستخدام لأكثر من 48 ساعة.');
            return;
        }
        currentAuthAccessToken = savedToken;
        if (jwtExpired(savedToken)) {
            const ok = await refreshSession();
            if (ok === false) { forceRelogin('انتهت الجلسة، سجّل الدخول من جديد.'); return; }
        }
        touchActivity(true);
        showAuthModal(false);
        openAdminMainPanel();
    } else {
        currentAuthAccessToken = null;
        showAuthModal(true);
    }
});

function showAuthModal(show) {
    const authBox = document.getElementById('thaAuth');
    if (authBox) authBox.classList.toggle('open', show);
}

function handleLoginEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAdminLogin();
    }
}

function handleAdminInputEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const val = e.target.value ? e.target.value.trim() : '';
        if (!val) {
            showToast('اكتب النص أولاً قبل الضغط على Enter!', true);
            return;
        }
        if (recordedBlobForUpload) {
            uploadAndSaveToSupabase();
        } else {
            showToast('تم تسجيل الكلمة: (' + val + ')، يمكنك تسجيل الصوت الآن لرفعها.');
        }
    }
}

async function handleAdminLogin() {
    const emailInput = document.getElementById('thaEmail');
    const passInput = document.getElementById('thaPass');
    const errEl = document.getElementById('thaAuthErr');

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passInput ? passInput.value : '';

    if (!email || !password) {
        const msg = 'من فضلك اكتب البريد الإلكتروني وكلمة المرور.';
        if (errEl) errEl.textContent = msg;
        showToast(msg, true);
        return;
    }

    if (errEl) errEl.textContent = 'جارٍ تسجيل الدخول والتحقق...';

    try {
        const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', apikey: SUPABASE_ANON_KEY },
            body: JSON.stringify({ email: email, password: password })
        });

        const data = await res.json();
        if (!res.ok || !data.access_token) throw new Error(data.error_description || data.msg || 'بيانات الدخول غير صحيحة.');

        storeSession(data);
        touchActivity(true);

        if (errEl) errEl.textContent = '';
        showAuthModal(false);
        openAdminMainPanel();
        showToast('تم تسجيل الدخول بنجاح!');
    } catch (e) {
        const errorMsg = e.message || 'فشل تسجيل الدخول.';
        if (errEl) errEl.textContent = errorMsg;
        showToast(errorMsg, true);
    }
}

function openAdminMainPanel() {
    const modalOverlay = document.getElementById('adminModalOverlay');
    if (modalOverlay) modalOverlay.classList.add('open');
    showAdminView('home');
    startBadgePolling();
}

function toggleAdminPanel() {
    const o = document.getElementById('adminModalOverlay');
    if (o) o.classList.toggle('open');
}

/* ---------------- views ---------------- */

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
  // FIX: the sub-container must be hidden on every normal view switch
  // (previously it stayed visible when going back to the Dashboard)
  if (subContainer) subContainer.style.display = 'none';

  if (v === 'home' && currentAuthAccessToken) refreshAdminBadges();

  if (v === 'voices') {
    loadDueWordsListFromSupabase();
    loadBrokenWordsListFromSupabase();
    loadTrashBinListFromSupabase();
  } else if (v === 'reports') {
    loadReportsList();
  }
}

async function fetchStudentsFromSupabase() {
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${PROFILES_TABLE}?select=*`);
        if (!res.ok) {
            showToast('تعذر جلب الطلاب: ' + await errorText(res), true);
            return [];
        }
        return await res.json();
    } catch (e) {
        return [];
    }
}

async function openDashboardSubView(actionType) {
    const dashboardMainEl = document.getElementById('adminViewDashboardMain');
    const subContainer = document.getElementById('adminDynamicSubContainer');
    if (dashboardMainEl) dashboardMainEl.style.display = 'none';
    if (subContainer) subContainer.style.display = 'block';

    subContainer.innerHTML = `<div class="text-center py-6 text-amber-400">جاري جلب قائمة الطلاب الحقيقية من قاعدة البيانات...</div>`;

    studentsCache = await fetchStudentsFromSupabase();
    const backBtnHtml = `<div class="tha-btns" style="margin-bottom:12px"><button type="button" class="tha-b gray" onclick="showAdminView('dashboardMain')"><i class="fa-solid fa-arrow-left"></i></button></div>`;

    if (!studentsCache || studentsCache.length === 0) {
        subContainer.innerHTML = `${backBtnHtml}<div class="tha-note text-center py-6 text-slate-400">لا توجد بيانات طلاب مسجلة في قاعدة البيانات حالياً.</div>`;
        return;
    }

    const titleText = actionType === 'masterProfiles' ? 'اختر الطالب لعرض وتعديل ملفه الشامل (Master Profile):' : `اختر الطالب المطلوب (${actionType.toUpperCase()}):`;

    let html = `${backBtnHtml}<h4 class="text-amber-400 font-bold mb-3">${titleText}</h4><div class="flex flex-col gap-2">`;
    studentsCache.forEach((student, idx) => {
        const name = student.name || student.username || student.email || 'طالب بدون اسم';
        // FIX: pass only the list index (no JSON in the onclick attribute, which broke on quotes/apostrophes)
        html += `<button type="button" class="admin-big text-left flex justify-between items-center" onclick="handleStudentAction('${actionType}', ${idx})">
            <span><i class="fa-solid fa-user-graduate mr-2"></i> ${esc(name)}</span>
            <span class="text-xs text-amber-300 underline">اختر <i class="fa-solid fa-arrow-right"></i></span>
        </button>`;
    });
    html += `</div>`;
    subContainer.innerHTML = html;
}

function handleStudentAction(actionType, idx) {
    const student = studentsCache[idx];
    if (!student) { showToast('تعذر العثور على الطالب، حاول مرة أخرى.', true); return; }
    const studentId = student.id;
    const subContainer = document.getElementById('adminDynamicSubContainer');
    const backBtn = `openDashboardSubView('${actionType}')`;
    const backBtnHtml = `<div class="tha-btns" style="margin-bottom:12px"><button type="button" class="tha-b gray" onclick="${backBtn}"><i class="fa-solid fa-arrow-left"></i></button></div>`;
    const studentName = esc(student.name || student.username || 'طالب');
    const inputCls = 'w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white';

    if (actionType === 'masterProfiles') {
        subContainer.innerHTML = `${backBtnHtml}
            <div class="p-4 rounded-xl bg-slate-900 border border-amber-500/50 flex flex-col gap-3 text-xs">
                <h3 class="text-amber-300 font-bold text-sm mb-2"><i class="fa-solid fa-id-card"></i> Trainee Master Profile: ${studentName}</h3>

                <div class="grid grid-cols-2 gap-2">
                    <div><label class="block mb-1 text-slate-300">Name (اسم الطالب):</label><input type="text" id="mp_name" value="${esc(student.name)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Group (المجموعة):</label><input type="text" id="mp_group" value="${esc(student.group)}" class="${inputCls}"></div>
                </div>

                <div class="grid grid-cols-3 gap-2">
                    <div><label class="block mb-1 text-slate-300">Birthdate (تاريخ الميلاد):</label><input type="date" id="mp_birthdate" value="${esc(student.birthdate)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Preferred Phone#:</label><input type="text" id="mp_phone" value="${esc(student.preferred_phone || student.phone)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Preferred Email:</label><input type="email" id="mp_email" value="${esc(student.preferred_email || student.email)}" class="${inputCls}"></div>
                </div>

                <div class="grid grid-cols-3 gap-2">
                    <div><label class="block mb-1 text-slate-300">Session Time:</label><input type="text" id="mp_session_time" value="${esc(student.session_time)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Days a Week:</label><input type="text" id="mp_days" value="${esc(student.days_a_week)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Due Date:</label><input type="date" id="mp_duedate" value="${esc(student.duedate)}" class="${inputCls}"></div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div><label class="block mb-1 text-slate-300">Subscription:</label><input type="text" id="mp_subscription" value="${esc(student.subscription)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Trainee Status as of Today:</label><input type="text" id="mp_status" value="${esc(student.trainee_status_as_of_today)}" class="${inputCls}"></div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div><label class="block mb-1 text-slate-300">Linguistic Strengths:</label><textarea id="mp_ling_str" rows="2" class="${inputCls}">${esc(student.linguistic_strengths)}</textarea></div>
                    <div><label class="block mb-1 text-slate-300">Linguistic Lacking:</label><textarea id="mp_ling_lack" rows="2" class="${inputCls}">${esc(student.linguistic_lacking)}</textarea></div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div><label class="block mb-1 text-slate-300">Personal Skills Strength Points:</label><textarea id="mp_skill_str" rows="2" class="${inputCls}">${esc(student.personal_skills_strength_points)}</textarea></div>
                    <div><label class="block mb-1 text-slate-300">Weakness Points:</label><textarea id="mp_weak" rows="2" class="${inputCls}">${esc(student.weakness_points)}</textarea></div>
                </div>

                <div class="grid grid-cols-3 gap-2">
                    <div><label class="block mb-1 text-slate-300">Schooling Location:</label><input type="text" id="mp_school" value="${esc(student.schooling_location)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Residence Mostly:</label><input type="text" id="mp_residence" value="${esc(student.residence_mostly)}" class="${inputCls}"></div>
                    <div><label class="block mb-1 text-slate-300">Consistency Issues:</label><input type="text" id="mp_consistency" value="${esc(student.consistency_issues)}" class="${inputCls}"></div>
                </div>

                <button type="button" onclick="saveMasterProfileData(${idx})" class="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-xl mt-2 transition hover:bg-amber-400">حفظ وتحديث الملف الشامل (Master Reference)</button>
            </div>`;
    }
    else if (actionType === 'view') {
        subContainer.innerHTML = `${backBtnHtml}
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700">
                <h3 class="text-amber-300 font-bold text-base mb-3"><i class="fa-solid fa-eye"></i> معاينة صفحة الطالب: ${studentName} (View Only)</h3>
                <div class="space-y-3 text-sm text-slate-300">
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><b>اسم الطالب:</b> ${studentName}</div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><b>المجموعة:</b> ${esc(student.group || 'Group 1')}</div>
                    <div class="bg-slate-950 p-3 rounded-lg border border-slate-800"><b>الحالة:</b> عرض فقط بناءً على المرجع الأساسي.</div>
                </div>
            </div>`;
    }
    else if (actionType === 'modify') {
        subContainer.innerHTML = `${backBtnHtml}
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col gap-3">
                <h3 class="text-amber-300 font-bold text-base"><i class="fa-solid fa-pen-to-square"></i> تعديل بيانات الطالب: ${studentName}</h3>
                <div>
                    <label class="text-xs block mb-1">اسم الطالب:</label>
                    <input type="text" id="modName" value="${studentName}" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm">
                </div>
                <div>
                    <label class="text-xs block mb-1">المجموعة (Group Name):</label>
                    <input type="text" id="modGroup" value="${esc(student.group || 'Group 1')}" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm">
                </div>
                <div>
                    <label class="text-xs block mb-1">الأرقام والتقييمات:</label>
                    <input type="number" id="modScore" value="10" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" onchange="confirmCalculationEdit(this)">
                </div>
                <button type="button" onclick="saveStudentModifications(${idx})" class="w-full py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl mt-2">حفظ التعديلات</button>
            </div>`;
    }
    else if (actionType === 'dailySupply') {
        const todayStr = new Date().toISOString().split('T')[0];
        subContainer.innerHTML = `${backBtnHtml}
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col gap-3">
                <h3 class="text-amber-300 font-bold text-base"><i class="fa-solid fa-calendar-days"></i> إدخال Daily Supply للطالب: ${studentName}</h3>
                <div>
                    <label class="text-xs block mb-1 text-slate-300">اختر اليوم (الأسبوع الحالي من السبت للخميس، مع دعم الجمعة والسبت):</label>
                    <input type="date" id="dailySupplyDate" value="${todayStr}" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm">
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div><label class="text-xs block mb-1">Session Number:</label><input type="number" id="dsNum" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"></div>
                    <div><label class="text-xs block mb-1">Attitude (1-10):</label><input type="number" id="dsAtt" min="1" max="10" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm"></div>
                </div>
                <div><label class="text-xs block mb-1">Session Title & Headers:</label><input type="text" id="dsTitle" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm" placeholder="عنوان الجلسة..."></div>
                <button type="button" onclick="saveDailySupplyData(${idx})" class="w-full py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl mt-2">حفظ بيانات Daily Supply</button>
            </div>`;
    }
    else if (actionType === 'exception') {
        const todayStr = new Date().toISOString().split('T')[0];
        subContainer.innerHTML = `${backBtnHtml}
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col gap-3">
                <h3 class="text-amber-300 font-bold text-base"><i class="fa-solid fa-triangle-exclamation"></i> إدخال استثناء/طلب (Exception/Request) للطالب: ${studentName}</h3>
                <div>
                    <label class="text-xs block mb-1 text-slate-300">اختر يوم خلال الشهر (اليوم الحالي محدد تلقائياً):</label>
                    <input type="date" id="excDate" value="${todayStr}" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-sm">
                </div>

                <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <h4 class="text-xs font-bold text-amber-400">1. Sessions Related</h4>
                    <p class="text-[11px] text-slate-400">وقت الجلسة الافتراضي (من المرجع الأساسي): <span class="text-white font-mono">${esc(student.session_time || '06:00 PM')}</span></p>
                    <div>
                        <label class="text-[11px] block mb-1 text-slate-300">Exception Field (تعديل التوقيت كاستثناء):</label>
                        <input type="text" id="excTiming" placeholder="مثال: تأجيل الميعاد لـ 8 مساءً" class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-xs">
                    </div>
                </div>

                <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col gap-2">
                    <h4 class="text-xs font-bold text-amber-400">2. Financial Related</h4>
                    <p class="text-[11px] text-slate-400">المبلغ المفترض دفعه (من المرجع الأساسي): <span class="text-white font-mono">${esc(student.subscription || 'غير محدد')}</span></p>
                    <div>
                        <label class="text-[11px] block mb-1 text-slate-300">Exception Field (المبلغ كاستثناء أو طلب خاص):</label>
                        <input type="text" id="excFinancial" placeholder="مثال: طلب تقسيط أو تعديل المبلغ..." class="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white text-xs">
                    </div>
                </div>

                <button type="button" onclick="saveExceptionData(${idx})" class="w-full py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl mt-2">إرسال الاستثناء / الطلب</button>
            </div>`;
    }
}

/* ---------------- saving (now really talks to Supabase) ---------------- */

function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
}

async function saveMasterProfileData(idx) {
    const student = studentsCache[idx];
    if (!student) return;
    const body = {
        name: val('mp_name'),
        group: val('mp_group'),
        birthdate: val('mp_birthdate') || null,
        preferred_phone: val('mp_phone'),
        preferred_email: val('mp_email'),
        session_time: val('mp_session_time'),
        days_a_week: val('mp_days'),
        duedate: val('mp_duedate') || null,
        subscription: val('mp_subscription'),
        trainee_status_as_of_today: val('mp_status'),
        linguistic_strengths: val('mp_ling_str'),
        linguistic_lacking: val('mp_ling_lack'),
        personal_skills_strength_points: val('mp_skill_str'),
        weakness_points: val('mp_weak'),
        schooling_location: val('mp_school'),
        residence_mostly: val('mp_residence'),
        consistency_issues: val('mp_consistency')
    };
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${PROFILES_TABLE}?id=eq.${encodeURIComponent(student.id)}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(await errorText(res));
        Object.assign(student, body);
        showToast('تم تحديث الملف الشامل (Master Profile) بنجاح ✓');
    } catch (e) {
        showToast('فشل الحفظ: ' + e.message, true);
    }
}

function confirmCalculationEdit(inputElem) {
    const confirmEdit = confirm("⚠️ هذا الحقل مرتبط بحسابات ومعادلات في النظام. هل أنت متأكد من رغبتك في تعديله؟");
    if (!confirmEdit) {
        inputElem.value = inputElem.defaultValue;
    }
}

async function saveStudentModifications(idx) {
    const student = studentsCache[idx];
    if (!student) return;
    const body = { name: val('modName'), group: val('modGroup') };
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${PROFILES_TABLE}?id=eq.${encodeURIComponent(student.id)}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(await errorText(res));
        Object.assign(student, body);
        showToast('تم حفظ تعديلات بيانات الطالب بنجاح!');
    } catch (e) {
        showToast('فشل الحفظ: ' + e.message, true);
    }
}

async function saveDailySupplyData(idx) {
    const student = studentsCache[idx];
    if (!student) return;
    const body = {
        student_id: student.id,
        supply_date: val('dailySupplyDate'),
        session_number: val('dsNum') === '' ? null : Number(val('dsNum')),
        attitude: val('dsAtt') === '' ? null : Number(val('dsAtt')),
        session_title: val('dsTitle')
    };
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${DAILY_SUPPLY_TABLE}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(await errorText(res));
        showToast('تم حفظ بيانات Daily Supply بنجاح!');
    } catch (e) {
        showToast('فشل الحفظ: ' + e.message, true);
    }
}

async function saveExceptionData(idx) {
    const student = studentsCache[idx];
    if (!student) return;
    const body = {
        student_id: student.id,
        exception_date: val('excDate'),
        timing_exception: val('excTiming'),
        financial_exception: val('excFinancial')
    };
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${EXCEPTIONS_TABLE}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error(await errorText(res));
        showToast('تم إرسال الاستثناء والطلب بنجاح!');
    } catch (e) {
        showToast('فشل الإرسال: ' + e.message, true);
    }
}

/* ---------------- voices & reports ---------------- */

function cleanWordString(str) {
    if (!str) return "";
    return str.replace(/[.,\/$%\^&\*;:{}=\-_`~()]/g, "").trim().toLowerCase();
}

async function checkIfWordExistsInDb(val) {
    const word = val.trim();
    const conflictBox = document.getElementById('dbWordConflictBox');
    const saveBtn = document.getElementById('saveToSupabaseBtn');
    if (!word) {
        wordExistsInDb = false;
        if (conflictBox) conflictBox.classList.add('hidden');
        if (saveBtn) saveBtn.disabled = !recordedBlobForUpload;
        return;
    }
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/words_table?select=word&word=eq.${encodeURIComponent(word)}`);
        const data = await res.json();
        wordExistsInDb = Array.isArray(data) && data.length > 0;
        if (conflictBox) conflictBox.classList.toggle('hidden', !wordExistsInDb);
        if (saveBtn) saveBtn.disabled = !recordedBlobForUpload;
    } catch (e) {}
}

function setConflictAction(action) {
    currentConflictAction = action;
    const r = document.getElementById('btnActionReplace');
    const x = document.getElementById('btnActionExplain');
    if (r) { r.classList.toggle('bg-amber-600', action === 'replace'); r.classList.toggle('bg-slate-800', action !== 'replace'); }
    if (x) { x.classList.toggle('bg-amber-600', action === 'explain'); x.classList.toggle('bg-slate-800', action !== 'explain'); }
}

function pronounceAdminGoogleTranslation() {
    const input = document.getElementById('newWordInput');
    if (!input || !input.value.trim()) return;
    const utterance = new SpeechSynthesisUtterance(input.value.trim());
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

async function toggleAdminRecording() {
    const icon = document.getElementById('adminRecordIcon');
    const timer = document.getElementById('adminTimer');
    const playback = document.getElementById('adminAudioPlayback');
    const saveBtn = document.getElementById('saveToSupabaseBtn');

    if (!adminRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            adminRecorder = new MediaRecorder(stream);
            adminChunks = [];
            adminRecorder.ondataavailable = e => { if (e.data.size > 0) adminChunks.push(e.data); };
            adminRecorder.onstop = () => {
                stream.getTracks().forEach(t => t.stop());
                recordedBlobForUpload = new Blob(adminChunks, { type: 'audio/webm' });
                if (playback) {
                    playback.src = URL.createObjectURL(recordedBlobForUpload);
                    playback.classList.remove('hidden');
                }
                if (saveBtn) saveBtn.disabled = false;
                showToast('تم التسجيل بنجاح!');
            };
            adminRecorder.start();
            adminRecording = true;
            adminSeconds = 0;
            if (timer) timer.textContent = '00:00';
            clearInterval(adminSecTimer);
            adminSecTimer = setInterval(() => {
                adminSeconds++;
                if (timer) timer.textContent = String(Math.floor(adminSeconds / 60)).padStart(2, '0') + ':' + String(adminSeconds % 60).padStart(2, '0');
            }, 1000);
            if (icon) icon.className = 'fa-solid fa-stop';
        } catch (e) {
            showToast('تعذر الوصول للميكروفون.', true);
        }
    } else {
        try { adminRecorder.stop(); } catch (e) {}
        clearInterval(adminSecTimer);
        adminRecording = false;
        if (icon) icon.className = 'fa-solid fa-microphone';
    }
}

async function uploadAndSaveToSupabase() {
    const input = document.getElementById('newWordInput');
    const word = input ? input.value.trim() : '';
    if (!word) { showToast('اكتب الكلمة أولاً.', true); return; }
    if (!recordedBlobForUpload) { showToast('سجّل الصوت أولاً.', true); return; }
    if (!currentAuthAccessToken) { forceRelogin(); return; }

    try {
        const fileName = `${cleanWordString(word) || 'word'}_${Date.now()}.webm`;
        const uploadRes = await apiFetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${encodeURIComponent(fileName)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'audio/webm' },
            body: recordedBlobForUpload
        });
        if (!uploadRes.ok) throw new Error(await errorText(uploadRes));
        const publicAudioUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${encodeURIComponent(fileName)}`;

        const isReplace = wordExistsInDb && currentConflictAction === 'replace';
        // FIX: PATCH needs a filter, otherwise it would touch every row (or be rejected)
        const url = isReplace
            ? `${SUPABASE_URL}/rest/v1/words_table?word=eq.${encodeURIComponent(word)}`
            : `${SUPABASE_URL}/rest/v1/words_table`;
        const res = await apiFetch(url, {
            method: isReplace ? 'PATCH' : 'POST',
            headers: { 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(isReplace ? { audio_url: publicAudioUrl } : { word: word, audio_url: publicAudioUrl })
        });
        if (!res.ok) throw new Error(await errorText(res));

        showToast('تم الحفظ في قاعدة البيانات بنجاح! ✓');
        input.value = '';
        recordedBlobForUpload = null;
        wordExistsInDb = false;
        const playback = document.getElementById('adminAudioPlayback');
        if (playback) playback.classList.add('hidden');
        const conflictBox = document.getElementById('dbWordConflictBox');
        if (conflictBox) conflictBox.classList.add('hidden');
        const saveBtn = document.getElementById('saveToSupabaseBtn');
        if (saveBtn) saveBtn.disabled = true;
        const timer = document.getElementById('adminTimer');
        if (timer) timer.textContent = '00:00';
        loadDueWordsListFromSupabase();
        loadBrokenWordsListFromSupabase();
    } catch (e) {
        showToast('حدث خطأ أثناء الحفظ: ' + (e.message || ''), true);
    }
}

async function loadWordList(path, containerId, countId, emptyMsg, numbered) {
    const container = document.getElementById(containerId);
    const countBadge = document.getElementById(countId);
    if (!container) return;
    try {
        const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${path}`);
        const data = await res.json();
        if (!res.ok || !Array.isArray(data)) throw new Error('bad response');
        if (countBadge) countBadge.textContent = data.length;
        if (!data.length) { container.innerHTML = `<span class="text-xs text-slate-500 text-center py-2">${emptyMsg}</span>`; return; }
        container.innerHTML = data.map((item, index) =>
            `<div class="flex items-center justify-between bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-xs"><span>${numbered ? '#' + (index + 1) + ' - ' : ''}<b>${esc(item.word)}</b></span></div>`
        ).join('');
    } catch (e) {}
}

function loadDueWordsListFromSupabase() {
    return loadWordList('due_words_table?status=eq.pending&order=created_at.asc', 'dueWordsContainer', 'dueWordsCount', 'لا توجد كلمات معلقة.', true);
}
function loadBrokenWordsListFromSupabase() {
    return loadWordList('broken_words_table?select=*&order=created_at.desc', 'brokenWordsContainer', 'brokenWordsCount', 'لا توجد أصوات تالفة.', true);
}
function loadTrashBinListFromSupabase() {
    return loadWordList('due_words_table?status=eq.trashed&order=created_at.desc', 'trashWordsContainer', 'trashCount', 'سلة المهملات فارغة.', false);
}

async function loadReportsList() {
  const box = document.getElementById('reportsContainer');
  if (!box) return;
  box.textContent = '...';
  try {
    const res = await apiFetch(`${SUPABASE_URL}/rest/v1/reports?select=*&order=created_at.desc&limit=200`);
    if (!res.ok) throw new Error(res.status);
    const rows = await res.json();
    setBadge('reportsBadge', rows.length);
    box.innerHTML = '';
    if (!rows.length) { box.textContent = 'لا توجد بلاغات حتى الآن.'; return; }
    rows.forEach(function (r) {
      const card = document.createElement('div');
      card.className = 'tha-row';
      card.innerHTML = `<div class="tha-lab"><span>👤 ${esc(r.name || r.user_id || '—')}</span><span class="tha-tag">${r.created_at ? esc(new Date(r.created_at).toLocaleString()) : ''}</span></div><div class="report-card" style="font-size:.85rem;line-height:1.7;">${esc(r.problem || r.report_text || '')}</div>`;
      box.appendChild(card);
    });
  } catch (e) {
    box.textContent = 'تعذر تحميل البلاغات من قاعدة البيانات.';
  }
}

/* ---------------- live counters (reports / voices) ---------------- */

async function countRows(path) {
    const res = await apiFetch(`${SUPABASE_URL}/rest/v1/${path}${path.includes('?') ? '&' : '?'}select=*&limit=1`, {
        headers: { Prefer: 'count=exact' }
    });
    if (!res.ok) throw new Error('count failed');
    const range = res.headers.get('Content-Range') || '';
    const total = parseInt(range.split('/')[1], 10);
    if (!isNaN(total)) return total;
    const rows = await res.json();
    return Array.isArray(rows) ? rows.length : 0;
}

function setBadge(id, n) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = n > 99 ? '99+' : String(n);
    el.style.display = n > 0 ? 'inline-flex' : 'none';
}

let badgeTimer = null;
async function refreshAdminBadges() {
    if (!currentAuthAccessToken) return;
    if (inactiveTooLong()) { forceRelogin('انتهت الجلسة بسبب عدم الاستخدام لأكثر من 48 ساعة.'); return; }
    try {
        const [reports, due, broken, trash] = await Promise.all([
            countRows('reports').catch(() => null),
            countRows('due_words_table?status=eq.pending').catch(() => null),
            countRows('broken_words_table').catch(() => null),
            countRows('due_words_table?status=eq.trashed').catch(() => null)
        ]);
        if (reports !== null) setBadge('reportsBadge', reports);
        const voicesTotal = (due || 0) + (broken || 0);
        setBadge('voicesBadge', voicesTotal);
        const dueEl = document.getElementById('dueWordsCount');
        if (dueEl && due !== null) dueEl.textContent = due;
        const brokenEl = document.getElementById('brokenWordsCount');
        if (brokenEl && broken !== null) brokenEl.textContent = broken;
        const trashEl = document.getElementById('trashCount');
        if (trashEl && trash !== null) trashEl.textContent = trash;

        const total = (reports || 0) + voicesTotal;
        document.title = (total > 0 ? '(' + total + ') ' : '') + 'Thabit Admin';
        try { localStorage.setItem('thabit_admin_pending', String(total)); } catch (e) {}
    } catch (e) {}
}
function startBadgePolling() {
    stopBadgePolling();
    refreshAdminBadges();
    badgeTimer = setInterval(refreshAdminBadges, BADGE_REFRESH_MS);
}
function stopBadgePolling() {
    if (badgeTimer) { clearInterval(badgeTimer); badgeTimer = null; }
}

function toggleAdminSection(sectionId, iconId) {
  const sec = document.getElementById(sectionId);
  if (!sec) return;
  sec.classList.toggle('collapsed');
  const icon = document.getElementById(iconId);
  if (icon) icon.style.transform = sec.classList.contains('collapsed') ? '' : 'rotate(180deg)';
}