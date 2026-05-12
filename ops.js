/* ═══════════════════════════════════════
   Regore Claim page stylesheet
═══════════════════════════════════════ */


:root {
  --bg:#020908; --bg-1:#030F0A; --bg-2:#051408; --bg-3:#071A0D;
  --ink:#FFFFFF; --ink-dim:#C8E8E8; --ink-muted:#8ABFBF; --ink-faint:#4A8080;
  --line:rgba(14,129,129,.09); --line-2:rgba(14,129,129,.16); --line-3:rgba(14,129,129,.26);
  --accent:#0E8181; --accent-dim:#0A6060; --accent-bright:#18A8A8;
  --green:#22D98A; --amber:#F0B050; --red:#E97070; --sol:#0CB8B8;
  --r-sm:4px; --r-md:8px;
  --mono:'JetBrains Mono','Fira Code',monospace;
  --sans:'Barlow Condensed','DIN Condensed',system-ui,sans-serif;
  --serif:'Syne',system-ui,sans-serif;
}

*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
html, body { height:100%; overflow:hidden; }

body {
  background:var(--bg);
  color:var(--ink);
  font-family:var(--sans);
  display:flex;
  flex-direction:column;
  height:100vh;
}

/* ── keyframes ── */
@keyframes fade-up {from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse-dot {0%,100%{opacity:1}50%{opacity:.4}}
@keyframes orb-drift-1 {0%,100%{transform:translate(0,0)}33%{transform:translate(40px,-30px)}66%{transform:translate(-20px,40px)}}
@keyframes orb-drift-2 {0%,100%{transform:translate(0,0)}33%{transform:translate(-30px,20px)}66%{transform:translate(25px,-35px)}}
@keyframes orb-drift-3 {0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,-20px)}}
@keyframes geo-rotate {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes ring-spin-1 {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes ring-spin-2 {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes flow-dash {from{stroke-dashoffset:0}to{stroke-dashoffset:-22}}

/* ── background (fixed, behind everything) ── */
#bg-base {
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background:linear-gradient(125deg,#010504 0%,#020908 35%,#030F07 60%,#062A18 85%,#083D2A 100%);
}
#bg-scene {
  position:fixed; inset:0; z-index:1; pointer-events:none; overflow:hidden;
}
.bg-orb { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; }
.bg-orb-a { width:60vw; height:60vw; max-width:700px; max-height:700px; top:-15%; left:-10%;
  background:radial-gradient(circle,rgba(10,100,55,.10) 0%,rgba(10,100,55,.03) 40%,transparent 70%);
  animation:orb-drift-1 24s ease-in-out infinite; }
.bg-orb-b { width:50vw; height:50vw; max-width:600px; max-height:600px; bottom:-15%; right:-8%;
  background:radial-gradient(circle,rgba(8,90,60,.12) 0%,rgba(8,90,60,.04) 40%,transparent 70%);
  animation:orb-drift-2 30s ease-in-out infinite; }
.bg-orb-c { width:40vw; height:40vw; max-width:500px; max-height:500px; top:30%; left:25%;
  background:radial-gradient(circle,rgba(40,160,90,.08) 0%,rgba(40,160,90,.02) 40%,transparent 70%);
  animation:orb-drift-3 20s ease-in-out infinite; }
.bg-geo { position:absolute; inset:0; width:100%; height:100%; opacity:.7; }
.geo-poly { fill:none; stroke:rgba(14,129,129,.15); stroke-width:.7; vector-effect:non-scaling-stroke; }
.geo-poly-1 { stroke:rgba(14,129,129,.20); }
.geo-line { stroke:rgba(14,129,129,.12); stroke-width:.5; vector-effect:non-scaling-stroke; }
.geo-connector { stroke:rgba(14,129,129,.08); stroke-width:.4; stroke-dasharray:3 4; vector-effect:non-scaling-stroke; }
.geo-ring { fill:none; stroke-width:.5; vector-effect:non-scaling-stroke; }
.geo-ring-1 { stroke:rgba(14,129,129,.16); animation:ring-spin-1 28s linear infinite; }
.geo-ring-2 { stroke:rgba(34,217,138,.10); stroke-dasharray:8 6; animation:ring-spin-2 40s linear infinite reverse; }
.geo-ring-3 { stroke:rgba(14,129,129,.07); stroke-dasharray:12 8; animation:ring-spin-1 55s linear infinite; }
.geo-central { transform-origin:500px 420px; animation:geo-rotate 60s linear infinite; }
.geo-stars circle { fill:rgba(200,255,230,.5); }
.geo-flow-line { stroke:rgba(34,217,138,.15); stroke-width:.6; stroke-dasharray:5 5; vector-effect:non-scaling-stroke; animation:flow-dash 3s linear infinite; }

/* ── NAV (fixed height, z:200) ── */
.nav {
  height:54px; flex-shrink:0;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 clamp(16px,3vw,48px);
  background:rgba(2,9,5,.88); border-bottom:1px solid var(--line);
  backdrop-filter:blur(12px);
  position:relative; z-index:200;
}
.nav-logo { display:flex; align-items:center; gap:9px; text-decoration:none; }
.nav-logo img { width:26px; height:26px; object-fit:contain; flex-shrink:0; }
.nav-logo-name { font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:.14em; color:#FFFFFF; }
.nav-logo-tag { font-family:var(--mono); font-size:8.5px; color:#7ABFBF; letter-spacing:.12em; }
.nav-back { font-family:var(--mono); font-size:9.5px; color:#A0C8C8; letter-spacing:.08em; text-decoration:none; border:1px solid rgba(14,129,129,.25); padding:6px 12px; border-radius:var(--r-sm); transition:all .2s; }
.nav-back:hover { color:#fff; border-color:rgba(14,129,129,.5); }

/* ── MAIN LAYOUT (fills remaining viewport height) ── */
.app {
  flex:1;
  display:grid;
  grid-template-columns:320px 1fr 340px;
  gap:0;
  overflow:hidden;
  position:relative; z-index:3;
  min-height:0;
}

/* ── LEFT PANEL — claim info + steps ── */
.left-panel {
  border-right:1px solid var(--line);
  padding:28px 24px;
  display:flex; flex-direction:column; gap:0;
  overflow-y:auto; overflow-x:hidden;
  background:rgba(2,9,5,.4);
}
.left-panel::-webkit-scrollbar { width:3px; }
.left-panel::-webkit-scrollbar-thumb { background:var(--line-2); border-radius:2px; }

.claim-eyebrow { font-family:var(--mono); font-size:9px; color:var(--accent); letter-spacing:.2em; text-transform:uppercase; margin-bottom:8px; }
.claim-title { font-family:var(--serif); font-size:22px; font-weight:500; line-height:1.2; color:var(--ink); margin-bottom:8px; }
.claim-title em { font-style:italic; background:linear-gradient(160deg,#FFFFFF 0%,#E8FFF5 30%,#7DFFC7 60%,#22D98A 85%,#0E8181 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.claim-sub { font-size:12px; color:#B0D0D0; font-weight:300; line-height:1.55; margin-bottom:20px; }

.info-chips { display:flex; flex-direction:column; gap:6px; margin-bottom:24px; }
.info-chip { font-family:var(--mono); font-size:9px; color:#90B8B8; letter-spacing:.08em; padding:6px 10px; border:1px solid rgba(14,129,129,.2); border-radius:var(--r-sm); display:flex; justify-content:space-between; }
.info-chip span { color:var(--accent-bright); font-weight:600; }

/* Steps sidebar */
.steps-list { display:flex; flex-direction:column; gap:0; margin-bottom:24px; }
.step-item { display:flex; gap:12px; padding:10px 0; border-bottom:1px solid var(--line); cursor:pointer; transition:all .2s; }
.step-item:last-child { border-bottom:none; }
.step-item.active .step-num { background:var(--accent); border-color:var(--accent); color:var(--bg); }
.step-item.done .step-num { background:rgba(34,217,138,.1); border-color:rgba(34,217,138,.3); color:var(--green); }
.step-num { width:22px; height:22px; border-radius:2px; border:1px solid var(--line-2); display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-size:9.5px; font-weight:600; flex-shrink:0; transition:all .25s; margin-top:1px; }
.step-label { font-family:var(--mono); font-size:10px; letter-spacing:.06em; color:#A0C8C8; line-height:1.4; }
.step-item.active .step-label { color:#7DFFC7; }
.step-item.done .step-label { color:var(--green); }
.step-desc { font-family:var(--mono); font-size:9px; color:#4A7070; margin-top:2px; }

.left-footer { margin-top:auto; padding-top:16px; border-top:1px solid var(--line); font-family:var(--mono); font-size:9px; color:#608080; letter-spacing:.06em; line-height:1.6; }

/* ── CENTER PANEL — form steps ── */
.center-panel {
  padding:28px 32px;
  overflow-y:auto; overflow-x:hidden;
  display:flex; flex-direction:column;
  min-height:0;
}
.center-panel::-webkit-scrollbar { width:3px; }
.center-panel::-webkit-scrollbar-thumb { background:var(--line-2); border-radius:2px; }

.step-panel { display:none; flex:1; flex-direction:column; animation:fade-up .25s both; }
.step-panel.active { display:flex; }

.panel-head { font-family:var(--mono); font-size:9px; color:#90C8C8; letter-spacing:.16em; text-transform:uppercase; margin-bottom:22px; padding-bottom:10px; border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; }
.panel-head-badge { display:flex; align-items:center; gap:5px; color:var(--green); }
.pulse { width:5px; height:5px; border-radius:50%; background:var(--green); animation:pulse-dot 2s ease-in-out infinite; }

/* form elements */
.cf-label { font-family:var(--mono); font-size:9.5px; color:#B0D8D8; letter-spacing:.14em; text-transform:uppercase; display:block; margin-bottom:6px; font-weight:500; }
.cf-input, .cf-textarea, .cf-select {
  width:100%; background:rgba(5,15,10,.7); border:1px solid rgba(14,129,129,.25);
  border-radius:var(--r-sm); color:#fff; font-family:var(--mono); font-size:12px;
  padding:9px 12px; transition:border-color .2s,background .2s; outline:none; letter-spacing:.02em;
}
.cf-input::placeholder, .cf-textarea::placeholder { color:#4A7070; }
.cf-input:focus, .cf-textarea:focus, .cf-select:focus { border-color:var(--accent); background:rgba(14,129,129,.04); }
.cf-textarea { resize:vertical; min-height:80px; line-height:1.5; }
.cf-select { appearance:none; cursor:pointer; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235C607E' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 12px center; padding-right:30px; }
.cf-field { margin-bottom:16px; }
.cf-err { font-family:var(--mono); font-size:9.5px; color:var(--red); letter-spacing:.06em; margin-top:4px; display:none; }
.cf-err.show { display:block; }
.cf-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

/* claim type pills */
.ctype-grid { display:flex; flex-direction:column; gap:6px; }
.ctype-pill { display:flex; align-items:center; gap:10px; padding:10px 13px; border:1px solid var(--line-2); border-radius:var(--r-sm); cursor:pointer; transition:all .18s; background:rgba(5,10,8,.4); }
.ctype-pill:hover { border-color:var(--line-3); background:rgba(14,129,129,.03); }
.ctype-pill.selected { border-color:var(--accent); background:rgba(14,129,129,.07); }
.ctype-pill-icon { width:26px; height:26px; border-radius:var(--r-sm); background:rgba(14,129,129,.08); border:1px solid rgba(14,129,129,.15); display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; transition:all .2s; }
.ctype-pill.selected .ctype-pill-icon { background:rgba(14,129,129,.18); border-color:rgba(14,129,129,.4); }
.ctype-pill-name { font-family:var(--mono); font-size:10px; color:#FFFFFF; letter-spacing:.06em; font-weight:600; text-transform:uppercase; }
.ctype-pill-desc { font-family:var(--sans); font-size:11px; color:#90B8B8; margin-top:1px; line-height:1.3; }
.ctype-pill-badge { font-family:var(--mono); font-size:8px; letter-spacing:.1em; text-transform:uppercase; padding:2px 6px; border-radius:2px; flex-shrink:0; }
.badge-auto { color:var(--accent); background:rgba(14,129,129,.1); border:1px solid rgba(14,129,129,.2); }
.badge-hybrid { color:var(--sol); background:rgba(12,184,184,.1); border:1px solid rgba(12,184,184,.2); }

/* evidence rows */
.ev-list { display:flex; flex-direction:column; gap:5px; margin-bottom:10px; }
.ev-row { display:flex; align-items:center; gap:8px; padding:7px 10px; background:rgba(14,129,129,.04); border:1px solid rgba(14,129,129,.12); border-radius:var(--r-sm); font-family:var(--mono); font-size:10px; color:var(--ink-dim); }
.ev-row-type { color:var(--accent); text-transform:uppercase; letter-spacing:.1em; font-size:9px; min-width:72px; }
.ev-row-val { flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.ev-rm { background:none; border:none; color:var(--ink-faint); cursor:pointer; padding:1px 5px; font-size:13px; line-height:1; transition:color .2s; flex-shrink:0; }
.ev-rm:hover { color:var(--red); }

/* review table */
.review-table { width:100%; border-collapse:collapse; font-family:var(--mono); font-size:10.5px; }
.review-table tr { border-bottom:1px solid var(--line); }
.review-table tr:last-child { border-bottom:none; }
.review-table td { padding:7px 0; vertical-align:top; line-height:1.45; }
.review-table td:first-child { color:#80B0B0; width:100px; letter-spacing:.08em; text-transform:uppercase; font-size:9px; padding-right:10px; }
.review-table td:last-child { color:#FFFFFF; word-break:break-all; }

/* nav buttons */
.panel-nav { margin-top:auto; padding-top:16px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--line); }
.btn-back { font-family:var(--mono); font-size:11px; color:var(--ink-dim); letter-spacing:.06em; background:rgba(14,129,129,.06); border:1px solid var(--line-2); border-radius:6px; padding:10px 18px; cursor:pointer; transition:all .2s; }
.btn-back:hover { color:#fff; border-color:var(--line-3); background:rgba(14,129,129,.12); }
.btn-next { font-family:var(--mono); font-size:11px; color:#fff; letter-spacing:.08em; background:linear-gradient(135deg,#12B890,#0E8181,#0A6B5E); border:1px solid rgba(18,184,144,.45); border-radius:6px; padding:10px 22px; cursor:pointer; font-weight:600; transition:all .2s; display:inline-flex; align-items:center; gap:7px; box-shadow:0 2px 12px rgba(14,129,129,.25); }
.btn-next:hover { opacity:.88; transform:translateY(-1px); box-shadow:0 4px 18px rgba(14,129,129,.35); }
.btn-submit { font-family:var(--mono); font-size:11px; letter-spacing:.08em; background:linear-gradient(135deg,#22D98A,#0FA882,#0E8181); color:#fff; border:1px solid rgba(34,217,138,.4); border-radius:6px; padding:10px 26px; cursor:pointer; font-weight:700; transition:all .2s; display:inline-flex; align-items:center; gap:7px; box-shadow:0 2px 16px rgba(34,217,138,.22); }
.btn-submit:hover { opacity:.88; transform:translateY(-1px); box-shadow:0 4px 22px rgba(34,217,138,.32); }

/* success state */
.claim-success { display:none; text-align:center; padding:28px 20px; flex-direction:column; align-items:center; gap:10px; }
.claim-success.show { display:flex; animation:fade-up .28s both; }
.success-check { width:44px; height:44px; border-radius:50%; background:rgba(34,217,138,.1); border:1px solid rgba(34,217,138,.3); display:flex; align-items:center; justify-content:center; color:var(--green); }
.success-title { font-family:var(--serif); font-size:20px; font-weight:500; color:var(--ink); }
.success-id { font-family:var(--mono); font-size:10px; color:var(--accent); letter-spacing:.12em; }
.success-note { font-size:12px; color:var(--ink-dim); font-weight:300; line-height:1.6; max-width:340px; }
.success-actions { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }

/* ── RIGHT PANEL — terminal ── */
.right-panel {
  border-left:1px solid var(--line);
  background:rgba(3,12,12,.7);
  display:flex; flex-direction:column;
  overflow:hidden;
}
.term-head { padding:10px 16px; border-bottom:1px solid var(--line); display:flex; align-items:center; gap:8px; background:rgba(3,10,8,.6); flex-shrink:0; }
.term-dots { display:flex; gap:5px; }
.term-dot { width:7px; height:7px; border-radius:50%; }
.term-title { font-family:var(--mono); font-size:9px; color:var(--ink-muted); letter-spacing:.18em; text-transform:uppercase; margin-left:4px; }
.term-body { flex:1; padding:16px; font-family:var(--mono); font-size:11px; line-height:1.75; color:var(--ink-dim); overflow-y:auto; overflow-x:auto; min-height:0; }
.term-body::-webkit-scrollbar { width:3px; }
.term-body::-webkit-scrollbar-thumb { background:var(--line-2); }
.term-body pre { margin:0; white-space:pre-wrap; word-break:break-all; }
.term-comment { color:var(--ink-faint); }
.term-key { color:var(--accent-bright); }
.term-str { color:var(--green); }
.term-num { color:var(--amber); }
.term-null { color:var(--ink-muted); font-style:italic; }
.term-footer { padding:10px 16px; border-top:1px solid var(--line); display:flex; align-items:center; gap:10px; flex-wrap:wrap; flex-shrink:0; }
.term-copy-btn { font-family:var(--mono); font-size:9px; letter-spacing:.12em; text-transform:uppercase; background:rgba(14,129,129,.08); border:1px solid rgba(14,129,129,.2); color:var(--accent); border-radius:var(--r-sm); padding:6px 12px; cursor:pointer; transition:all .2s; flex-shrink:0; }
.term-copy-btn:hover { background:rgba(14,129,90,.16); }
.term-route { font-family:var(--mono); font-size:9.5px; color:var(--ink-faint); letter-spacing:.04em; display:flex; align-items:center; gap:6px; }
.term-method { color:var(--accent); font-weight:700; }
.term-path { color:var(--ink-dim); }

/* ── responsive ── */
@media(max-width:900px) {
  html, body { overflow:auto; }
  .app { grid-template-columns:1fr; overflow:visible; height:auto; }
  .left-panel, .center-panel, .right-panel { overflow:visible; max-height:none; height:auto; border:none; border-bottom:1px solid var(--line); }
  .right-panel { min-height:300px; }
  .step-panel { animation:none; }
}
