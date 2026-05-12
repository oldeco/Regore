/* ═══════════════════════════════════════
   Regore Ops dashboard stylesheet
═══════════════════════════════════════ */


/* ── DARK THEME (default) ── */
:root {
  --bg:        #141618;
  --bg-1:      #1A1D20;
  --bg-2:      #1F2326;
  --bg-3:      #252A2E;
  --bg-4:      #2C3338;
  --surface:   #1F2326;
  --surface-2: #252A2E;
  --accent:    #0E8F8F;
  --accent-b:  #12ADAD;
  --accent-s:  rgba(14,143,143,.12);
  --green:     #3DD68C;
  --green-b:   #7DFFC7;
  --amber:     #F0B050;
  --red:       #E07070;
  --purple:    #A78BFA;
  --ink:       #E8EAED;
  --ink-d:     #B0BEC5;
  --ink-m:     #6B7A82;
  --ink-f:     #404D55;
  --line:      rgba(255,255,255,.055);
  --line-2:    rgba(255,255,255,.09);
  --line-3:    rgba(255,255,255,.15);
  --shadow:    rgba(0,0,0,.35);
  --r:         7px;
  --r-lg:      11px;
  --mono:      'JetBrains Mono', 'Fira Code', monospace;
  --sans:      'Barlow Condensed', 'DIN Condensed', system-ui, sans-serif;
  --nav-w:     224px;
}

/* ── LIGHT THEME ── */
html.light {
  --bg:        #F2F4F6;
  --bg-1:      #FFFFFF;
  --bg-2:      #F7F9FA;
  --bg-3:      #EEF1F4;
  --bg-4:      #E4E9EE;
  --surface:   #FFFFFF;
  --surface-2: #F7F9FA;
  --accent:    #0A7A7A;
  --accent-b:  #0E9090;
  --accent-s:  rgba(10,122,122,.08);
  --green:     #1FAD6A;
  --green-b:   #16C97A;
  --amber:     #C87D10;
  --red:       #C04040;
  --purple:    #7C3AED;
  --ink:       #1A2025;
  --ink-d:     #374550;
  --ink-m:     #64757F;
  --ink-f:     #A0ADB5;
  --line:      rgba(0,0,0,.07);
  --line-2:    rgba(0,0,0,.11);
  --line-3:    rgba(0,0,0,.18);
  --shadow:    rgba(0,0,0,.10);
}

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html, body { height: 100%; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  overflow: hidden;
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--line-2); border-radius: 4px; }

/* ─────────────────────────────────────
   SIDEBAR NAV
───────────────────────────────────── */
.sidebar {
  width: var(--nav-w);
  flex-shrink: 0;
  background: var(--bg-1);
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
}

.sidebar-logo {
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-logo-mark {
  width: 28px; height: 28px;
  background: linear-gradient(135deg, #0FA882, #0E8181);
  border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.sidebar-logo-mark svg { width: 16px; height: 16px; }
.sidebar-logo-text { font-family: var(--mono); font-size: 12px; font-weight: 600; letter-spacing: .12em; color: var(--ink); }
.sidebar-logo-sub { font-family: var(--mono); font-size: 9px; color: var(--ink-m); letter-spacing: .14em; text-transform: uppercase; margin-top: 1px; }

.sidebar-section { padding: 12px 12px 4px; }
.sidebar-section-label {
  font-family: var(--mono); font-size: 9px; color: var(--ink-f);
  letter-spacing: .2em; text-transform: uppercase; padding: 0 8px 6px;
}

.nav-item {
  display: flex; align-items: center; gap: 9px;
  padding: 8px 10px; border-radius: var(--r);
  cursor: pointer; transition: all .18s;
  font-family: var(--mono); font-size: 11px; color: var(--ink-m);
  letter-spacing: .04em; border: none; background: none;
  width: 100%; text-align: left;
}
.nav-item:hover { background: var(--accent-s); color: var(--ink-d); }
.nav-item.active { background: var(--accent-s); color: var(--accent-b); border: 1px solid var(--accent); }
.nav-item svg { width: 14px; height: 14px; flex-shrink: 0; opacity: .7; }
.nav-item.active svg { opacity: 1; }
.nav-badge {
  margin-left: auto; font-size: 9px; padding: 2px 6px;
  background: var(--accent-s); border: 1px solid var(--line-2);
  border-radius: 10px; color: var(--accent-b); font-weight: 600;
}
.nav-badge.red { background: rgba(233,112,112,.12); border-color: rgba(233,112,112,.25); color: var(--red); }
.nav-badge.amber { background: rgba(240,176,80,.12); border-color: rgba(240,176,80,.25); color: var(--amber); }

.sidebar-footer {
  margin-top: auto;
  padding: 14px 12px;
  border-top: 1px solid var(--line);
}
.sidebar-status {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--mono); font-size: 10px; color: var(--ink-m);
}
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; animation: pulse-dot 2s ease-in-out infinite; }
@keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.4} }

/* ─────────────────────────────────────
   MAIN CONTENT
───────────────────────────────────── */
.main {
  margin-left: var(--nav-w);
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.topbar {
  padding: 0 28px;
  height: 56px;
  border-bottom: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between;
  background: color-mix(in srgb, var(--bg-1) 85%, transparent);
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(12px);
  flex-shrink: 0;
}
.topbar-title { font-family: var(--mono); font-size: 11px; color: var(--ink-d); letter-spacing: .12em; text-transform: uppercase; }
.topbar-right { display: flex; align-items: center; gap: 12px; }
.api-badge {
  font-family: var(--mono); font-size: 9px; color: var(--ink-m);
  padding: 4px 10px; border: 1px solid var(--line); border-radius: 20px;
  letter-spacing: .1em;
}
.topbar-btn {
  font-family: var(--mono); font-size: 10px; padding: 6px 14px;
  background: linear-gradient(135deg, #0FA882, #0A6B5E);
  color: #fff; border: none; border-radius: var(--r); cursor: pointer;
  letter-spacing: .08em; font-weight: 600; transition: all .18s;
}
.topbar-btn:hover { opacity: .85; transform: translateY(-1px); }

.content { padding: 28px; flex: 1; }

/* ─────────────────────────────────────
   PAGES (show/hide)
───────────────────────────────────── */
.page { display: none; }
.page.active { display: block; }

/* ─────────────────────────────────────
   STAT CARDS ROW
───────────────────────────────────── */
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
.stat-card {
  background: var(--surface);
  border: 1px solid var(--line-2);
  border-radius: var(--r-lg);
  padding: 18px 20px;
  position: relative; overflow: hidden;
}
.stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--card-accent, linear-gradient(90deg, var(--accent), var(--green)));
}
.stat-label { font-family: var(--mono); font-size: 9px; color: var(--ink-m); letter-spacing: .18em; text-transform: uppercase; margin-bottom: 8px; }
.stat-val { font-family: var(--mono); font-size: 26px; font-weight: 600; color: var(--ink); line-height: 1; }
.stat-sub { font-family: var(--mono); font-size: 10px; color: var(--ink-m); margin-top: 6px; }
.stat-sub .up { color: var(--green); }
.stat-sub .dn { color: var(--red); }

/* ─────────────────────────────────────
   TABLE
───────────────────────────────────── */
.panel {
  background: var(--surface);
  border: 1px solid var(--line-2);
  border-radius: var(--r-lg);
  overflow: hidden;
  margin-bottom: 20px;
}
.panel-head {
  padding: 14px 20px;
  border-bottom: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between;
  background: var(--surface-2);
}
.panel-title { font-family: var(--mono); font-size: 10px; color: var(--ink-d); letter-spacing: .16em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
.panel-title svg { width: 12px; height: 12px; opacity: .7; }
.panel-actions { display: flex; gap: 8px; }
.panel-btn {
  font-family: var(--mono); font-size: 9px; padding: 5px 12px;
  border: 1px solid var(--line-2); border-radius: var(--r);
  background: transparent; color: var(--ink-m); cursor: pointer;
  letter-spacing: .08em; transition: all .18s;
}
.panel-btn:hover { border-color: var(--accent); color: var(--accent-b); }
.panel-btn.active { background: var(--accent-s); border-color: var(--accent); color: var(--accent-b); }

.data-table { width: 100%; border-collapse: collapse; }
.data-table th {
  font-family: var(--mono); font-size: 9px; color: var(--ink-f);
  letter-spacing: .18em; text-transform: uppercase;
  padding: 10px 20px; text-align: left;
  border-bottom: 1px solid var(--line);
  background: var(--bg-2);
}
.data-table td { padding: 12px 20px; border-bottom: 1px solid var(--line); font-family: var(--mono); font-size: 11px; }
.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: var(--accent-s); }
.data-table td.mono { font-family: var(--mono); color: var(--ink-d); }

/* Score bar */
.score-cell { display: flex; align-items: center; gap: 10px; }
.score-bar { flex: 1; height: 4px; background: var(--line-2); border-radius: 2px; overflow: hidden; max-width: 80px; }
.score-fill { height: 100%; border-radius: 2px; transition: width .6s ease; }
.score-num { font-family: var(--mono); font-size: 11px; font-weight: 600; min-width: 28px; }

/* Status pill */
.pill {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 3px 8px; border-radius: 10px;
  font-family: var(--mono); font-size: 9px; letter-spacing: .08em; font-weight: 600;
}
.pill-active   { background: rgba(34,217,138,.10); border: 1px solid rgba(34,217,138,.25); color: var(--green); }
.pill-paused   { background: rgba(240,176,80,.10); border: 1px solid rgba(240,176,80,.25); color: var(--amber); }
.pill-suspended{ background: rgba(233,112,112,.10); border: 1px solid rgba(233,112,112,.25); color: var(--red); }
.pill-pending  { background: rgba(192,132,252,.10); border: 1px solid rgba(192,132,252,.25); color: var(--purple); }
.pill-approved { background: rgba(34,217,138,.10); border: 1px solid rgba(34,217,138,.25); color: var(--green); }
.pill-denied   { background: rgba(233,112,112,.10); border: 1px solid rgba(233,112,112,.25); color: var(--red); }
.pill-partial  { background: rgba(240,176,80,.10); border: 1px solid rgba(240,176,80,.25); color: var(--amber); }
.pill-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

/* ─────────────────────────────────────
   CHART (sparkline CSS bars)
───────────────────────────────────── */
.sparkline { display: flex; align-items: flex-end; gap: 3px; height: 40px; }
.spark-bar {
  flex: 1; border-radius: 2px 2px 0 0;
  background: linear-gradient(180deg, var(--accent-b), var(--accent));
  opacity: .7; transition: opacity .2s;
  min-height: 3px;
}
.spark-bar:hover { opacity: 1; }

/* Risk score color gradient */
.risk-low    { background: var(--green); }
.risk-med    { background: var(--amber); }
.risk-high   { background: var(--red); }

/* ─────────────────────────────────────
   CLAIM DETAIL PANEL
───────────────────────────────────── */
.two-col { display: grid; grid-template-columns: 1fr 340px; gap: 20px; }
.detail-card {
  background: var(--surface);
  border: 1px solid var(--line-2);
  border-radius: var(--r-lg);
  padding: 20px;
}
.detail-row { display: flex; justify-content: space-between; align-items: flex-start; padding: 9px 0; border-bottom: 1px solid var(--line); }
.detail-row:last-child { border-bottom: none; }
.detail-key { font-family: var(--mono); font-size: 9px; color: var(--ink-m); letter-spacing: .14em; text-transform: uppercase; }
.detail-val { font-family: var(--mono); font-size: 11px; color: var(--ink); text-align: right; max-width: 200px; word-break: break-all; }

/* Agent verdict boxes */
.verdict-agents { display: flex; flex-direction: column; gap: 10px; }
.verdict-agent {
  border: 1px solid var(--line-2); border-radius: var(--r);
  padding: 12px 14px; background: var(--bg-2);
}
.verdict-agent-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
.verdict-agent-name { font-family: var(--mono); font-size: 10px; color: var(--ink-d); font-weight: 600; letter-spacing: .06em; }
.verdict-conf { font-family: var(--mono); font-size: 9px; color: var(--ink-m); }
.verdict-text { font-family: var(--mono); font-size: 10px; color: var(--ink-m); line-height: 1.5; }

/* ─────────────────────────────────────
   EMPTY STATE
───────────────────────────────────── */
.empty { text-align: center; padding: 48px 20px; }
.empty-icon { font-size: 28px; margin-bottom: 10px; opacity: .4; }
.empty-text { font-family: var(--mono); font-size: 11px; color: var(--ink-m); letter-spacing: .06em; }

/* ─────────────────────────────────────
   SETTINGS PAGE
───────────────────────────────────── */
.settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.setting-group { margin-bottom: 18px; }
.setting-label { font-family: var(--mono); font-size: 9px; color: var(--ink-m); letter-spacing: .16em; text-transform: uppercase; margin-bottom: 7px; display: block; }
.setting-input {
  width: 100%; background: var(--bg-2); border: 1px solid var(--line-2);
  border-radius: var(--r); color: var(--ink); font-family: var(--mono); font-size: 12px;
  padding: 9px 13px; outline: none; transition: border-color .18s;
}
.setting-input:focus { border-color: var(--accent); }
.setting-input[type="range"] { padding: 6px 0; background: transparent; border: none; cursor: pointer; }
.setting-note { font-family: var(--mono); font-size: 10px; color: var(--ink-f); margin-top: 5px; line-height: 1.5; }
.save-btn {
  font-family: var(--mono); font-size: 10px; padding: 9px 20px;
  background: linear-gradient(135deg, #0FA882, #0A6B5E);
  color: #fff; border: none; border-radius: var(--r); cursor: pointer;
  letter-spacing: .1em; font-weight: 600; transition: all .18s; margin-top: 4px;
}
.save-btn:hover { opacity: .85; }

/* ─────────────────────────────────────
   TOAST
───────────────────────────────────── */
.toast-wrap { position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; flex-direction: column; gap: 8px; }
.toast {
  font-family: var(--mono); font-size: 11px; padding: 10px 16px;
  background: var(--bg-1); border: 1px solid var(--line-2);
  border-radius: var(--r); color: var(--ink-d); letter-spacing: .04em;
  animation: toast-in .25s ease; pointer-events: none;
}
.toast.success { border-color: rgba(34,217,138,.3); color: var(--green); }
.toast.error { border-color: rgba(233,112,112,.3); color: var(--red); }
@keyframes toast-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

/* ─────────────────────────────────────
   MISC
───────────────────────────────────── */
.section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 16px; }
.section-title { font-family: var(--sans); font-size: 20px; font-weight: 600; letter-spacing: .02em; color: var(--ink); }
.section-sub { font-family: var(--mono); font-size: 10px; color: var(--ink-m); letter-spacing: .08em; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

a { color: inherit; text-decoration: none; }
button { cursor: pointer; }

/* ─────────────────────────────────────
   API KEY MODAL
───────────────────────────────────── */
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,.6);
  z-index: 200; display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(6px);
}
.modal {
  background: var(--bg-1); border: 1px solid var(--line-2);
  border-radius: var(--r-lg); padding: 32px; width: 420px; max-width: calc(100vw - 40px);
}
.modal-title { font-family: var(--mono); font-size: 12px; color: var(--ink); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px; }
.modal-sub { font-family: var(--mono); font-size: 10px; color: var(--ink-m); margin-bottom: 22px; line-height: 1.6; }
.modal-actions { display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end; }
.modal-cancel { font-family: var(--mono); font-size: 10px; padding: 8px 16px; background: transparent; border: 1px solid var(--line-2); color: var(--ink-m); border-radius: var(--r); cursor: pointer; transition: all .18s; }
.modal-cancel:hover { border-color: var(--line-3); color: var(--ink); }

/* ─────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────── */
.theme-toggle {
  display: flex; align-items: center;
  width: 100%; padding: 7px 10px;
  background: var(--bg-2); border: 1px solid var(--line-2);
  border-radius: var(--r); cursor: pointer; transition: all .2s;
  font-family: var(--mono); font-size: 10px; color: var(--ink-m);
  letter-spacing: .06em; gap: 7px;
}
.theme-toggle:hover { border-color: var(--accent); color: var(--accent-b); background: var(--accent-s); }
.theme-icon-dark, .theme-icon-light { display: flex; align-items: center; gap: 7px; }

/* Transition all theme changes smoothly */
body, .sidebar, .topbar, .panel, .stat-card, .data-table th,
.data-table td, .setting-input, .modal, .nav-item, .panel-btn {
  transition: background .22s ease, color .22s ease, border-color .22s ease;
}

/* ─────────────────────────────────────
   RESPONSIVE
───────────────────────────────────── */
@media(max-width:900px) {
  .stats-grid { grid-template-columns: repeat(2,1fr); }
  .two-col { grid-template-columns: 1fr; }
  .settings-grid { grid-template-columns: 1fr; }
}
