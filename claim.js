/* ═══════════════════════════════════════
   Regore — main stylesheet
   Generated from source
═══════════════════════════════════════ */


:root{
  /* ── Regore brand palette ── */
  --bg:#020908;
  --bg-1:#030F0A;
  --bg-2:#051408;
  --bg-3:#071A0D;
  --ink:#EEEEF4;
  --ink-dim:#7ABFBF;
  --ink-muted:#3D7070;
  --ink-faint:#1E4040;
  --line:rgba(14,129,129,.09);
  --line-2:rgba(14,129,129,.16);
  --line-3:rgba(14,129,129,.26);
  /* Brand accent — electric blue from the gradient */
  --accent:#0E8181;
  --accent-dim:#0A6060;
  --accent-bright:#18A8A8;
  /* Right-side gradient bright — used for glow/shimmer */
  --glow:#2DBDBD;
  --glow-white:rgba(14,129,129,.18);
  /* Legacy signal colors — kept for status indicators */
  --sol:#0CB8B8;
  --blue:#0E8181;
  --amber:#F0B050;
  --red:#E97070;
  --green:#22D98A;
  /* Typography — condensed uppercase sans for brand, mono for data */
  --mono:'JetBrains Mono',ui-monospace,monospace;
  --serif:'Barlow Condensed','Arial Narrow',sans-serif;
  --sans:'Barlow','Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  /* Radii — tighter, more geometric */
  --r-sm:2px;--r-md:4px;--r-lg:8px;
  --maxw:1320px;
  --pad:clamp(20px,4vw,56px);
}
html{scroll-behavior:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
body{-webkit-overflow-scrolling:touch;scroll-timeline-name:none}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);font-weight:400;overflow-x:hidden;line-height:1.5;font-feature-settings:"ss01","cv01"}
button,input,select,textarea{font-family:inherit;color:inherit}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
::selection{background:var(--accent);color:#fff}

/* CURSOR */
body{cursor:auto}
a,button,.faq-q{cursor:pointer}

/* ─────────────────────────────────────────────
   BACKGROUND LAYERS — brand gradient
   ───────────────────────────────────────────── */
.grid-bg{position:fixed;inset:0;z-index:1;pointer-events:none;
  background-image:
    linear-gradient(to right,rgba(14,129,129,.025) 1px,transparent 1px),
    linear-gradient(to bottom,rgba(14,129,129,.025) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 100% 100% at 70% 50%,black 0%,transparent 75%);
  -webkit-mask-image:radial-gradient(ellipse 100% 100% at 70% 50%,black 0%,transparent 75%);
  opacity:.8;
}
.vign{position:fixed;inset:0;
  background:radial-gradient(ellipse 90% 80% at 70% 50%,transparent 0%,rgba(2,10,6,.35) 50%,rgba(2,10,6,.7) 100%);
  z-index:1;pointer-events:none}

/* ─────────────────────────────────────────────
   UTILITIES
   ───────────────────────────────────────────── */
.container{max-width:var(--maxw);margin:0 auto;padding:0 var(--pad);position:relative;z-index:3}
.eyebrow{font-family:var(--mono);font-size:10px;color:var(--accent);letter-spacing:.25em;text-transform:uppercase;font-weight:500;display:inline-flex;align-items:center;gap:10px}
.eyebrow::before{content:'';display:inline-block;width:20px;height:1px;background:var(--accent);opacity:.6}
.serif{font-family:var(--serif);font-weight:400;font-style:italic;letter-spacing:-.01em}
.mono{font-family:var(--mono)}

/* ─────────────────────────────────────────────
   NAV
   ───────────────────────────────────────────── */
nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:14px var(--pad);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);background:rgba(3,10,10,.72);backdrop-filter:blur(20px) saturate(1.4);-webkit-backdrop-filter:blur(20px) saturate(1.4);transition:border-color .3s,background .3s}
nav.scrolled{border-color:var(--line-2);background:rgba(3,10,10,.88)}
.logo{display:flex;align-items:center;gap:11px;cursor:pointer}
.logo img{flex-shrink:0;}
.logo-wrap{display:flex;flex-direction:column;line-height:1}
.logo-name{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:var(--ink);letter-spacing:.14em;text-transform:uppercase}
.logo-tag{font-family:var(--mono);font-size:8.5px;color:var(--ink-muted);letter-spacing:.18em;text-transform:uppercase;margin-top:3px}
.nav-links{display:flex;gap:28px;list-style:none}
.nav-links a{font-family:var(--mono);font-size:11.5px;color:var(--ink-dim);letter-spacing:.04em;transition:color .2s;font-weight:400;position:relative;padding:4px 0}
.nav-links a:hover{color:var(--accent)}
.nav-links a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--accent);transition:width .25s ease}
.nav-links a:hover::after{width:100%}
.nav-r{display:flex;gap:10px;align-items:center}
.btn-ghost{font-family:var(--mono);font-size:11.5px;padding:11px 22px;background:transparent;border:1px solid var(--line-3);color:var(--ink-dim);border-radius:var(--r-sm);letter-spacing:.06em;transition:all .2s;font-weight:500}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent);background:rgba(14,129,129,.04)}
.btn-solid{font-family:var(--mono);font-size:11.5px;padding:11px 22px;background:linear-gradient(135deg,#0FA882 0%,#0E8181 50%,#0A6B5E 100%);color:#fff;border:1px solid rgba(14,168,130,.5);border-radius:var(--r-sm);letter-spacing:.06em;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:6px}
.btn-solid:hover{background:var(--accent-dim);border-color:var(--accent-dim);transform:translateY(-1px);box-shadow:0 8px 24px -8px rgba(14,129,129,.4)}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px}
.hamburger span{display:block;width:20px;height:1.5px;background:var(--ink-dim);border-radius:2px;transition:all .3s}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg);background:var(--accent)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg);background:var(--accent)}

/* Mobile menu */
.mob-menu{position:fixed;inset:0;top:56px;background:rgba(3,10,10,.97);backdrop-filter:blur(24px);z-index:150;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:32px 24px;opacity:0;pointer-events:none;transition:opacity .3s}
.mob-menu.open{opacity:1;pointer-events:all}
.mob-menu ul{list-style:none;width:100%;margin-bottom:28px}
.mob-menu ul li a{display:block;font-family:var(--mono);font-size:14px;letter-spacing:.08em;color:var(--ink-dim);padding:16px 0;border-bottom:1px solid var(--line);transition:color .2s}
.mob-menu ul li a:hover{color:var(--accent)}
.mob-menu-btns{display:flex;flex-direction:column;gap:10px;width:100%}
.mob-menu-btns .btn-ghost,.mob-menu-btns .btn-solid{text-align:center;padding:13px}

/* ─────────────────────────────────────────────
   PROTOCOL STATE BAR — live-feeling metrics
   ───────────────────────────────────────────── */
.state-bar{position:relative;z-index:4;padding:10px 0;background:linear-gradient(90deg,rgba(5,15,15,.7),rgba(5,18,18,.5),rgba(5,15,15,.7));border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;margin-top:61px;backdrop-filter:blur(8px)}
.state-t{display:flex;gap:0;white-space:nowrap;animation:tick 68s linear infinite;will-change:transform}
@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.state-i{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);padding:0 22px;letter-spacing:.04em;flex-shrink:0;display:inline-flex;align-items:center;gap:10px}
.state-i .k{color:var(--ink-dim);text-transform:uppercase;letter-spacing:.14em;font-size:9.5px;font-weight:500}
.state-i .v{color:var(--ink);font-weight:500}
.state-i .v.g{color:var(--accent)}
.state-i .v.a{color:var(--amber)}
.state-i .sep{width:3px;height:3px;background:var(--line-3);border-radius:50%}
.state-i .pulse{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:pulse 1.8s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}

/* ─────────────────────────────────────────────
   HERO — full viewport, two-column
   ───────────────────────────────────────────── */
.hero{
  position:relative;z-index:3;
  min-height:100vh;
  display:flex;flex-direction:column;
  padding:0 var(--pad);
}
.hero-grid{
  max-width:var(--maxw);
  margin:0 auto;
  width:100%;
  display:grid;
  grid-template-columns:1fr 420px;
  gap:80px;
  align-items:center;
  flex:1;
  padding:clamp(80px,10vh,120px) 0 clamp(48px,6vh,72px);
}
.hero-left{display:flex;flex-direction:column;align-items:flex-start}
.hero-badge{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:10.5px;color:var(--ink-dim);border:1px solid var(--line-2);padding:7px 14px;border-radius:99px;letter-spacing:.14em;text-transform:uppercase;font-weight:500;animation:fade-up .9s .1s both;background:rgba(5,18,18,.45);backdrop-filter:blur(8px);margin-bottom:32px}
.hero-badge .dot{width:6px;height:6px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent);animation:pulse 1.8s ease-in-out infinite}
@keyframes fade-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(40px,5.4vw,78px);font-weight:700;line-height:1;letter-spacing:-.015em;text-transform:uppercase;animation:fade-up 1s .2s both;margin-bottom:28px;max-width:none;word-break:normal;overflow-wrap:normal;hyphens:none;
  background:linear-gradient(160deg,#FFFFFF 0%,#E8FFF5 30%,#7DFFC7 60%,#22D98A 85%,#0E8181 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  filter:drop-shadow(0 2px 24px rgba(14,129,129,.35));
}

/* Section h2 — same gradient shading */
.sec-head h2,.prob-head-l h2,.faq-side h2{
  background:linear-gradient(155deg,#FFFFFF 0%,#E8FFF5 40%,#7DFFC7 75%,#22D98A 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  filter:drop-shadow(0 2px 16px rgba(14,129,129,.25));
}
.hero-lead{font-size:16px;color:var(--ink-dim);line-height:1.7;max-width:520px;font-weight:300;animation:fade-up 1s .35s both;text-wrap:pretty;margin-bottom:36px}
.hero-lead strong{color:var(--ink);font-weight:500}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;animation:fade-up 1s .45s both}

/* Hero right */
.hero-right{animation:fade-up 1s .55s both;display:flex;flex-direction:column;gap:16px}
.hero-card{background:linear-gradient(160deg,rgba(5,20,20,.9),rgba(5,15,15,.7));border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden;backdrop-filter:blur(16px);box-shadow:0 40px 80px -20px rgba(0,0,0,.5),0 0 0 1px rgba(14,129,129,.06)}
.hero-card-head{padding:14px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;background:rgba(5,15,15,.5)}
.hc-title{font-family:var(--mono);font-size:10px;color:var(--ink-dim);letter-spacing:.14em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hc-live{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.12em;text-transform:uppercase}
.hc-live .pulse{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse 1.8s ease-in-out infinite;box-shadow:0 0 8px var(--accent)}
.hc-body{padding:6px 20px 10px;display:flex;flex-direction:column}
.hc-row{display:grid;grid-template-columns:1fr auto;align-items:baseline;gap:16px;padding:11px 0;border-bottom:1px solid var(--line)}
.hc-row:last-child{border-bottom:none}
.hc-label{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.08em;text-transform:uppercase}
.hc-val{font-family:var(--mono);font-size:14px;color:var(--ink);font-weight:500;text-align:right;font-variant-numeric:tabular-nums}
.hc-val .u{color:var(--ink-muted);font-size:9.5px;margin-left:4px;font-weight:400}
.hc-val .g{color:var(--accent)}

/* Hero pills */
.hero-pills{display:flex;gap:8px;flex-wrap:wrap}
.hero-pill{font-family:var(--mono);font-size:10px;color:var(--ink-dim);letter-spacing:.08em;padding:6px 12px;border:1px solid var(--line-2);border-radius:99px;display:inline-flex;align-items:center;gap:7px;background:rgba(5,15,15,.5);backdrop-filter:blur(8px)}
.pill-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0}

/* CTA buttons */
.cta-p{font-family:var(--mono);font-size:13px;padding:17px 36px;background:linear-gradient(135deg,#0FA882 0%,#0E8181 50%,#0A6B5E 100%);color:#fff;border:1px solid rgba(14,168,130,.6);border-radius:var(--r-sm);letter-spacing:.08em;font-weight:600;transition:all .22s;display:inline-flex;align-items:center;gap:10px;cursor:pointer}
.cta-p:hover{background:var(--accent-dim);border-color:var(--accent-dim);transform:translateY(-2px);box-shadow:0 12px 32px -10px rgba(14,129,129,.5)}
.cta-p .arrow{transition:transform .22s}
.cta-p:hover .arrow{transform:translateX(4px)}
.cta-s{font-family:var(--mono);font-size:12px;padding:15px 28px;background:transparent;color:var(--ink);border:1px solid var(--line-3);border-radius:var(--r-sm);letter-spacing:.08em;transition:all .22s;display:inline-flex;align-items:center}
.cta-s:hover{border-color:var(--ink-dim);color:#fff;background:rgba(255,255,255,.02)}

/* Scroll nudge at bottom of hero */
.hero-scroll{max-width:var(--maxw);margin:0 auto;width:100%;padding:28px 0 32px;display:flex;align-items:center;gap:14px;animation:fade-up 1s .7s both}
.hero-scroll-line{flex:1;height:1px;background:var(--line-2)}
.hero-scroll-txt{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);letter-spacing:.2em;text-transform:uppercase;display:flex;align-items:center;gap:8px;white-space:nowrap}
.hero-scroll-arrow{animation:bounce-y 2s ease-in-out infinite}
@keyframes bounce-y{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}

/* Hero responsive */
@media(max-width:1100px){.hero-grid{grid-template-columns:1fr 360px;gap:56px}}
@media(max-width:860px){.hero-grid{grid-template-columns:1fr;gap:40px}.hero-right{max-width:480px}}

/* Hero bottom strip — logos + scroll cue */
.hero-bottom{
  border-top:1px solid var(--line);
  margin-top:auto;
  padding:20px 0;
  animation:fade-up 1s .8s both;
}
.hero-bottom-inner{
  max-width:var(--maxw);margin:0 auto;
  display:flex;align-items:center;gap:28px;flex-wrap:wrap;
}
.hero-bottom-label{
  font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);
  letter-spacing:.2em;text-transform:uppercase;white-space:nowrap;flex-shrink:0;
}
.hero-bottom-logos{
  display:flex;gap:36px;align-items:center;flex-wrap:wrap;flex:1;
}
.hero-scroll-cue{
  display:flex;align-items:center;gap:8px;margin-left:auto;flex-shrink:0;
}
.hero-scroll-arrow{
  font-family:var(--mono);font-size:13px;color:var(--ink-faint);
  animation:bounce-y 2.2s ease-in-out infinite;display:inline-block;
}
@keyframes bounce-y{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}

/* ─────────────────────────────────────────────
   LOGO / TRUST BAR
   ───────────────────────────────────────────── */
.trust-bar{position:relative;z-index:3;padding:44px var(--pad);border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:rgba(5,15,15,.4)}
.trust-inner{max-width:var(--maxw);margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap}
.trust-label{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}
.trust-logos{display:flex;gap:48px;align-items:center;flex-wrap:wrap;flex:1;justify-content:flex-end}
.trust-item{font-family:var(--mono);font-size:13px;color:var(--ink-dim);letter-spacing:.01em;font-weight:500;display:inline-flex;align-items:center;gap:8px;opacity:.7;transition:opacity .2s}
.trust-item:hover{opacity:1}
.trust-item .mark{width:8px;height:8px;border-radius:2px;display:inline-block}

/* ─────────────────────────────────────────────
   PROBLEM BAND
   ───────────────────────────────────────────── */
.prob-band{position:relative;z-index:3;padding:clamp(72px,10vw,120px) var(--pad)}
.prob-wrap{max-width:var(--maxw);margin:0 auto}
.prob-head{display:grid;grid-template-columns:1fr 1.4fr;gap:60px;align-items:end;margin-bottom:56px}
.prob-head-l .eyebrow{margin-bottom:20px}
.prob-head-l h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(36px,5vw,60px);font-weight:700;letter-spacing:-.005em;line-height:.98;text-transform:uppercase}
.prob-head-l h2 em{font-style:italic;color:var(--accent);font-weight:400}
.prob-head-r{font-size:15px;color:var(--ink-dim);line-height:1.65;font-weight:300;max-width:520px;justify-self:end}
.prob-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-2);border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden}
.pc{background:linear-gradient(180deg,rgba(5,18,18,.6),rgba(5,15,15,.4));padding:40px 36px;position:relative;transition:background .3s}
.pc:hover{background:linear-gradient(180deg,rgba(4,18,10,.8),rgba(3,12,8,.5))}
.pc-stat{font-family:var(--serif);font-size:clamp(44px,5.5vw,72px);font-weight:400;letter-spacing:-.04em;line-height:1;margin-bottom:16px;font-variant-numeric:tabular-nums}
.pc-stat.r{color:var(--red)}.pc-stat.a{color:var(--amber)}.pc-stat.g{color:var(--accent)}
.pc-stat .sign{font-size:.5em;vertical-align:super;margin-right:2px;opacity:.75}
.pc-h{font-family:var(--sans);font-size:14px;color:var(--ink);font-weight:500;margin-bottom:10px;letter-spacing:-.005em}
.pc-label{font-family:var(--sans);font-size:13px;color:var(--ink-dim);line-height:1.55;font-weight:300}
.pc-src{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);letter-spacing:.1em;margin-top:18px;padding-top:14px;border-top:1px solid var(--line)}

/* ─────────────────────────────────────────────
   SECTION HEAD (reusable)
   ───────────────────────────────────────────── */
.sec{position:relative;z-index:3;padding:clamp(72px,10vw,130px) var(--pad);max-width:var(--maxw);margin:0 auto}
.sec-full{position:relative;z-index:3;padding:clamp(72px,10vw,130px) 0;border-top:1px solid var(--line)}
.sec-full .inn{max-width:var(--maxw);margin:0 auto;padding:0 var(--pad)}
.sec-head{margin-bottom:52px}
.sec-head .eyebrow{margin-bottom:18px}
.sec-head h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(40px,5.5vw,72px);font-weight:700;letter-spacing:-.005em;line-height:.98;text-transform:uppercase;margin-bottom:20px;max-width:880px}
.sec-head h2 em{font-style:italic;font-weight:600}
.sec-head h2 .hl{color:var(--accent);font-weight:700;font-style:normal}
.sec-sub{font-size:16px;color:var(--ink-dim);line-height:1.65;max-width:600px;font-weight:300}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.reveal.in{opacity:1;transform:none}
.reveal-stagger > *{opacity:0;transform:translateY(20px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
.reveal-stagger.in > *{opacity:1;transform:none}
.reveal-stagger.in > *:nth-child(1){transition-delay:0ms}
.reveal-stagger.in > *:nth-child(2){transition-delay:90ms}
.reveal-stagger.in > *:nth-child(3){transition-delay:180ms}
.reveal-stagger.in > *:nth-child(4){transition-delay:270ms}

/* ─────────────────────────────────────────────
   PRODUCTS
   ───────────────────────────────────────────── */
.prod-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-2);border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden}
.prod-card{background:linear-gradient(180deg,rgba(12,16,32,.75),rgba(5,15,15,.55));padding:36px 32px 32px;position:relative;display:flex;flex-direction:column;transition:all .35s;min-height:480px}
.prod-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient,linear-gradient(90deg,var(--accent),var(--blue)));opacity:.7;transition:opacity .3s}
.prod-card:hover{background:linear-gradient(180deg,rgba(4,18,10,.9),rgba(3,12,8,.7))}
.prod-card:hover::before{opacity:1}
.prod-card[data-p="fin"]{--gradient:linear-gradient(90deg,var(--accent),var(--blue))}
.prod-card[data-p="tra"]{--gradient:linear-gradient(90deg,var(--amber),#F6D860)}
.prod-card[data-p="dat"]{--gradient:linear-gradient(90deg,var(--sol),#C084FC)}
.pbadge{font-family:var(--mono);font-size:9.5px;padding:4px 10px;border-radius:99px;display:inline-flex;align-items:center;gap:6px;margin-bottom:22px;letter-spacing:.1em;text-transform:uppercase;font-weight:500;width:fit-content}
.pbadge-g{background:rgba(14,129,90,.07);color:var(--accent);border:1px solid rgba(14,129,90,.22)}
.pbadge-a{background:rgba(240,176,80,.07);color:var(--amber);border:1px solid rgba(240,176,80,.22)}
.pbadge-p{background:rgba(153,69,255,.08);color:#C084FC;border:1px solid rgba(153,69,255,.22)}
.prod-card h3{font-family:var(--serif);font-size:26px;font-weight:500;letter-spacing:-.02em;margin-bottom:4px;color:var(--ink)}
.prod-subtitle{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.08em;text-transform:uppercase;margin-bottom:22px}
.prod-limit-row{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}
.prod-limit{font-family:var(--serif);font-size:40px;font-weight:400;letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.prod-limit-c{color:var(--accent)}.prod-limit-a{color:var(--amber)}.prod-limit-p{color:#C084FC}
.prod-per{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);margin-bottom:22px;letter-spacing:.04em}
.prod-desc{font-size:13.5px;color:var(--ink-dim);line-height:1.65;margin-bottom:24px;font-weight:300}
.prod-feats{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:24px;flex:1}
.prod-feats li{font-family:var(--sans);font-size:12.5px;color:var(--ink-dim);display:flex;gap:10px;line-height:1.45;font-weight:400}
.prod-feats li .ic{flex-shrink:0;margin-top:3px;width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;border-radius:3px;font-size:9px;font-weight:700}
.feat-g li .ic{background:rgba(14,129,129,.1);color:var(--accent)}
.feat-a li .ic{background:rgba(240,176,80,.1);color:var(--amber)}
.feat-p li .ic{background:rgba(153,69,255,.12);color:#C084FC}
.prod-foot{padding-top:20px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;gap:12px}
.prod-price{font-family:var(--mono);font-size:12.5px;font-weight:600;letter-spacing:.02em}
.prod-price .sm{color:var(--ink-muted);font-size:10.5px;font-weight:400;display:block;margin-top:2px;letter-spacing:.06em}
.prod-cta{font-family:var(--mono);font-size:10.5px;color:var(--ink-dim);letter-spacing:.1em;text-transform:uppercase;transition:color .2s;display:inline-flex;align-items:center;gap:6px;cursor:pointer}
.prod-cta:hover{color:var(--accent)}
.prod-cta .a{transition:transform .2s}
.prod-cta:hover .a{transform:translateX(3px)}

/* ─────────────────────────────────────────────
   ARCHITECTURE DIAGRAM / HOW IT WORKS
   ───────────────────────────────────────────── */
.arch-wrap{position:relative;margin-top:8px}
.arch-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden;background:linear-gradient(180deg,rgba(12,16,32,.4),rgba(5,15,15,.2))}
.arch-step{padding:36px 28px;position:relative;border-right:1px solid var(--line-2);display:flex;flex-direction:column}
.arch-step:last-child{border-right:none}
.arch-step::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:0;transition:opacity .4s}
.arch-step:hover::before{opacity:.4}
.arch-head{display:flex;align-items:center;gap:12px;margin-bottom:22px}
.arch-n{font-family:var(--mono);font-size:10.5px;color:var(--accent);letter-spacing:.18em;font-weight:600;padding:4px 8px;border:1px solid rgba(14,129,129,.25);border-radius:var(--r-sm);background:rgba(14,129,129,.04)}
.arch-dur{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);letter-spacing:.1em;text-transform:uppercase;margin-left:auto}
.arch-title{font-family:var(--serif);font-size:20px;font-weight:500;letter-spacing:-.015em;margin-bottom:12px;line-height:1.15}
.arch-desc{font-size:12.5px;color:var(--ink-dim);line-height:1.6;font-weight:300;margin-bottom:20px}
.arch-meta{margin-top:auto;padding-top:16px;border-top:1px dashed var(--line-2);display:flex;flex-direction:column;gap:6px}
.arch-meta-r{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px}
.arch-meta-r .k{color:var(--ink-muted);letter-spacing:.08em;text-transform:uppercase}
.arch-meta-r .v{color:var(--ink);font-weight:500}

/* ─────────────────────────────────────────────
   ORACLE / INFRASTRUCTURE
   ───────────────────────────────────────────── */
.infra-grid{display:grid;grid-template-columns:1fr;gap:48px;align-items:start;margin-top:8px}
.infra-left{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.infra-feat{padding:28px 30px;border:1px solid var(--line-2);border-radius:var(--r-md);background:linear-gradient(180deg,rgba(5,18,18,.5),rgba(5,15,15,.3));transition:border-color .3s,background .3s;position:relative;overflow:hidden}
.infra-feat::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--accent);transform:scaleY(0);transform-origin:top;transition:transform .35s ease}
.infra-feat:hover{border-color:var(--line-3);background:linear-gradient(180deg,rgba(3,16,8,.7),rgba(2,12,6,.4))}
.infra-feat:hover::before{transform:scaleY(1)}
.infra-feat-head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.infra-icon{width:36px;height:36px;border-radius:var(--r-sm);background:rgba(14,129,129,.08);border:1px solid rgba(14,129,129,.2);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0}
.infra-icon svg{width:18px;height:18px}
.infra-feat h4{font-family:var(--serif);font-size:19px;font-weight:500;letter-spacing:-.015em}
.infra-feat p{font-size:13.5px;color:var(--ink-dim);line-height:1.6;font-weight:300}

.infra-right{position:sticky;top:100px;border:1px solid var(--line-2);border-radius:var(--r-md);background:linear-gradient(160deg,rgba(5,20,20,.7),rgba(5,15,15,.5));overflow:hidden}
.infra-code-head{padding:12px 18px;border-bottom:1px solid var(--line-2);display:flex;align-items:center;justify-content:space-between;background:rgba(5,15,15,.5)}
.infra-code-dots{display:flex;gap:6px}
.infra-code-dots span{width:10px;height:10px;border-radius:50%;background:var(--line-3)}
.infra-code-dots span:nth-child(1){background:#e97070}
.infra-code-dots span:nth-child(2){background:#f0b050}
.infra-code-dots span:nth-child(3){background:var(--accent)}
.infra-code-title{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.1em;text-transform:uppercase}
.infra-code{padding:22px 24px;font-family:var(--mono);font-size:12.5px;line-height:1.85;color:var(--ink-dim);overflow-x:auto;font-weight:400}
.infra-code .c{color:var(--ink-faint)}
.infra-code .k{color:#C084FC}
.infra-code .s{color:var(--accent)}
.infra-code .v{color:var(--amber)}
.infra-code .n{color:var(--blue)}
.infra-code .f{color:#EDB4FF}

/* ─────────────────────────────────────────────
   METRICS DASHBOARD / RESERVE
   ───────────────────────────────────────────── */
.metrics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line-2);border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden;margin-top:8px}
.metric{background:linear-gradient(180deg,rgba(5,18,18,.6),rgba(5,15,15,.4));padding:28px 26px;transition:background .3s}
.metric:hover{background:linear-gradient(180deg,rgba(16,22,44,.85),rgba(5,18,18,.6))}
.metric-label{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px;font-weight:500}
.metric-val{font-family:var(--serif);font-size:clamp(30px,3.2vw,44px);font-weight:400;letter-spacing:-.035em;line-height:1;font-variant-numeric:tabular-nums;margin-bottom:8px}
.metric-val.g{color:var(--accent)}
.metric-delta{font-family:var(--mono);font-size:11px;color:var(--ink-dim);display:flex;align-items:center;gap:6px;font-weight:400}
.metric-delta .up{color:var(--accent)}
.metric-delta .down{color:var(--red)}
.metric-spark{margin-top:14px;height:28px}
.metric-spark svg{width:100%;height:100%}

/* ─────────────────────────────────────────────
   PRICING
   ───────────────────────────────────────────── */
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px}
.price-c{background:linear-gradient(180deg,rgba(12,16,32,.65),rgba(5,15,15,.45));border:1px solid var(--line-2);border-radius:var(--r-md);padding:32px 28px;position:relative;display:flex;flex-direction:column;transition:all .3s}
.price-c:hover{border-color:var(--line-3);transform:translateY(-3px)}
.price-c.feat{background:linear-gradient(180deg,rgba(5,20,20,.85),rgba(5,18,18,.6));border-color:rgba(14,129,129,.3);box-shadow:0 0 40px -20px rgba(14,129,129,.25)}
.price-c.feat:hover{border-color:rgba(14,129,129,.5);box-shadow:0 20px 60px -20px rgba(14,129,129,.35)}
.p-tier{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.16em;text-transform:uppercase;margin-bottom:4px;font-weight:500}
.p-tier-desc{font-size:12.5px;color:var(--ink-muted);margin-bottom:24px;font-weight:300;line-height:1.5}
.p-amt-wrap{display:flex;align-items:baseline;gap:6px;margin-bottom:4px}
.p-amt{font-family:var(--serif);font-size:clamp(40px,4.5vw,56px);font-weight:400;letter-spacing:-.035em;line-height:1;font-variant-numeric:tabular-nums}
.p-amt.g{background:linear-gradient(120deg,var(--accent),var(--blue));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.p-amt.a{background:linear-gradient(120deg,var(--amber),#F6D860);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.p-amt.f{background:linear-gradient(120deg,var(--sol),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.p-unit{font-family:var(--mono);font-size:14px;color:var(--ink-muted);font-weight:400}
.p-period{font-family:var(--mono);font-size:11px;color:var(--ink-muted);margin-bottom:28px;letter-spacing:.04em}
.p-list{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:28px;flex:1}
.p-list li{font-size:13px;color:var(--ink-dim);display:flex;gap:10px;align-items:flex-start;line-height:1.5;font-weight:400}
.chk{color:var(--accent);flex-shrink:0;margin-top:3px;width:14px;height:14px}
.pbtn{display:flex;align-items:center;justify-content:center;width:100%;padding:14px 20px;font-family:var(--mono);font-size:11px;letter-spacing:.05em;text-align:center;border-radius:var(--r-sm);transition:all .22s;font-weight:500;white-space:nowrap;box-sizing:border-box}
.price-c > div[style*="padding-top"]{margin-top:auto;width:100%;display:flex;justify-content:center}
.pb-out{border:1px solid var(--line-3);color:var(--ink-dim);background:transparent}
.pb-card-1{background:rgba(14,129,129,.12);border:1px solid rgba(14,129,129,.4);color:rgba(14,220,180,.9);font-weight:600}
.pb-card-1:hover{background:rgba(14,129,129,.22);border-color:rgba(14,220,180,.7);transform:translateY(-1px)}
.pb-card-2{background:rgba(240,176,80,.10);border:1px solid rgba(240,176,80,.45);color:#F0B050;font-weight:600}
.pb-card-2:hover{background:rgba(240,176,80,.18);border-color:rgba(240,176,80,.7);transform:translateY(-1px)}
.pb-out:hover{border-color:var(--accent);color:var(--accent);background:rgba(14,129,129,.04)}
.pb-fill{background:linear-gradient(135deg,#0FA882 0%,#0E8181 50%,#0A6B5E 100%);color:#fff;border:1px solid rgba(14,168,130,.5);font-weight:600}
.pb-fill:hover{background:var(--accent-dim);transform:translateY(-1px);box-shadow:0 12px 32px -10px rgba(14,129,129,.5)}
.pop-flag{position:absolute;top:18px;right:18px;font-family:var(--mono);font-size:9px;letter-spacing:.14em;color:var(--accent);padding:4px 10px;border-radius:99px;background:rgba(14,129,129,.1);border:1px solid rgba(14,129,129,.3);text-transform:uppercase;font-weight:600}

/* ─────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────── */
.faq-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:60px;align-items:start;margin-top:8px}
.faq-side{position:sticky;top:100px}
.faq-side .eyebrow{margin-bottom:20px}
.faq-side h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(36px,4.5vw,58px);font-weight:700;letter-spacing:-.005em;line-height:.98;margin-bottom:20px;text-transform:uppercase}
.faq-side h2 em{font-style:italic;font-weight:600}
.faq-side p{font-size:15px;color:var(--ink-dim);line-height:1.6;font-weight:300;max-width:360px;margin-bottom:28px}
.faq-contact{font-family:var(--mono);font-size:11.5px;color:var(--accent);letter-spacing:.08em;display:inline-flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--accent)}

.faq-list{display:flex;flex-direction:column;border-top:1px solid var(--line-2)}
.faq-item{border-bottom:1px solid var(--line-2);transition:background .2s}
.faq-item:hover{background:rgba(3,14,8,.3)}
.faq-q{padding:26px 0;font-family:var(--serif);font-size:19px;font-weight:500;letter-spacing:-.015em;display:flex;justify-content:space-between;align-items:center;transition:color .2s;user-select:none;gap:20px;line-height:1.3}
.faq-q:hover{color:var(--accent)}
.faq-ic{font-family:var(--mono);font-size:14px;color:var(--ink-muted);transition:transform .3s,color .3s;flex-shrink:0;width:24px;height:24px;border:1px solid var(--line-2);border-radius:50%;display:inline-flex;align-items:center;justify-content:center}
.faq-item.open .faq-ic{transform:rotate(45deg);color:var(--accent);border-color:var(--accent)}
.faq-a{font-size:14px;color:var(--ink-dim);line-height:1.7;max-height:0;overflow:hidden;transition:max-height .5s cubic-bezier(.16,1,.3,1),padding .3s;font-weight:300}
.faq-item.open .faq-a{max-height:400px;padding:0 0 28px}

/* ─────────────────────────────────────────────
   CTA BAND
   ───────────────────────────────────────────── */
.cta-band{position:relative;z-index:3;padding:clamp(80px,10vw,130px) var(--pad);text-align:center;border-top:1px solid var(--line);overflow:hidden}
.cta-band::before{content:'';position:absolute;inset:0;background:
  radial-gradient(ellipse 80% 50% at 50% 100%,rgba(10,100,55,.1) 0%,transparent 60%),
  radial-gradient(ellipse 60% 40% at 30% 80%,rgba(14,129,129,.07) 0%,transparent 50%);
  pointer-events:none}
.cta-inner{max-width:820px;margin:0 auto;position:relative}
.cta-band h2{font-family:var(--serif);font-size:clamp(40px,6vw,80px);font-weight:400;letter-spacing:-.032em;line-height:.98;margin-bottom:24px}
.cta-band h2 em{font-style:italic;font-weight:300;color:var(--accent)}
.cta-band p{font-size:16px;color:var(--ink-dim);max-width:500px;margin:0 auto 40px;line-height:1.6;font-weight:300}
.cta-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.cta-legal{margin-top:36px;font-family:var(--mono);font-size:10px;color:var(--ink-faint);letter-spacing:.1em;text-transform:uppercase}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */
footer{position:relative;z-index:3;border-top:1px solid var(--line);padding:64px var(--pad) 32px;background:var(--bg)}
.ft-grid{max-width:var(--maxw);margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.ft-brand{font-family:var(--mono);font-size:15px;font-weight:600;color:var(--ink);margin-bottom:14px;display:flex;align-items:center;gap:10px}
.ft-brand img{width:26px;height:26px;object-fit:contain;border-radius:5px;mix-blend-mode:screen}
.ft-tag{font-size:13px;color:var(--ink-dim);line-height:1.6;margin-bottom:22px;max-width:340px;font-weight:300}
.ft-badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}
.ft-badge{font-family:var(--mono);font-size:9.5px;padding:4px 10px;border-radius:99px;border:1px solid var(--line-2);color:var(--ink-muted);letter-spacing:.08em;text-transform:uppercase}
.ft-disc{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);line-height:1.65;letter-spacing:.02em;max-width:380px}
.ft-col h5{font-family:var(--mono);font-size:10px;color:var(--ink);letter-spacing:.18em;text-transform:uppercase;margin-bottom:20px;font-weight:600}
.ft-links{list-style:none;display:flex;flex-direction:column;gap:12px}
.ft-links a{font-family:var(--mono);font-size:12px;color:var(--ink-muted);transition:color .2s;font-weight:400}
.ft-links a:hover{color:var(--accent)}
.ft-bot{max-width:var(--maxw);margin:0 auto;padding-top:28px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.ft-copy{font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.04em}
.ft-socials{display:flex;gap:16px}
.ft-socials a{width:30px;height:30px;border:1px solid var(--line-2);border-radius:var(--r-sm);display:inline-flex;align-items:center;justify-content:center;color:var(--ink-muted);transition:all .2s;cursor:pointer}
.ft-socials a:hover{border-color:var(--accent);color:var(--accent)}
.ft-socials svg{width:14px;height:14px}

/* ─────────────────────────────────────────────
   WALLET CONNECT MODAL
   ───────────────────────────────────────────── */
.ph-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.82);backdrop-filter:blur(14px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .28s}
.ph-backdrop.open{opacity:1;pointer-events:all}
.ph-box{background:linear-gradient(180deg,rgba(5,20,20,.98),rgba(10,14,28,.95));border:1px solid var(--line-3);border-radius:var(--r-lg);padding:32px 28px;width:100%;max-width:390px;text-align:center;transform:translateY(20px) scale(.96);transition:transform .32s cubic-bezier(.16,1,.3,1);position:relative;box-shadow:0 40px 100px -20px rgba(0,0,0,.8)}
.ph-backdrop.open .ph-box{transform:none}
.ph-logo{width:54px;height:54px;object-fit:contain;border-radius:12px;mix-blend-mode:screen;margin:0 auto 20px;display:block;filter:drop-shadow(0 0 24px rgba(14,129,129,.35))}
.ph-title{font-family:var(--serif);font-size:22px;font-weight:500;letter-spacing:-.02em;margin-bottom:10px}
.ph-sub{font-size:13px;color:var(--ink-dim);line-height:1.55;margin-bottom:24px;font-weight:300}
.ph-btn{display:flex;align-items:center;gap:12px;width:100%;padding:15px 18px;background:linear-gradient(135deg,#12B890,#0E8181,#0A6060);border:none;border-radius:var(--r-md);cursor:pointer;transition:all .22s;margin-bottom:8px}
.ph-btn:hover{transform:translateY(-1px);box-shadow:0 10px 32px rgba(14,129,129,.4)}
.ph-btn.loading{opacity:.6;pointer-events:none}
.ph-btn-icon{font-size:22px;flex-shrink:0}
.ph-btn-txt{text-align:left;flex:1}
.ph-btn-label{font-size:13.5px;font-weight:600;color:#fff}
.ph-btn-sub{font-family:var(--mono);font-size:9.5px;color:rgba(255,255,255,.6);margin-top:2px;letter-spacing:.04em}
.ph-btn-arrow{color:rgba(255,255,255,.5);font-size:14px;transition:transform .2s}
.ph-btn:hover .ph-btn-arrow{transform:translateX(3px)}
.ph-err{font-family:var(--mono);font-size:10.5px;color:var(--red);min-height:14px;margin:6px 0;opacity:0;transition:opacity .2s}
.ph-err.show{opacity:1}
.ph-no-wallet{font-family:var(--mono);font-size:11px;color:var(--ink-muted);margin-top:6px;display:none}
.ph-no-wallet a{color:var(--accent)}
.ph-close{position:absolute;top:14px;right:16px;font-size:18px;color:var(--ink-muted);cursor:pointer;line-height:1;transition:color .2s}
.ph-close:hover{color:var(--ink)}
.ph-divider{display:flex;align-items:center;gap:10px;margin:16px 0 12px}
.ph-div-line{flex:1;height:1px;background:var(--line-2)}
.ph-div-txt{font-family:var(--mono);font-size:9px;color:var(--ink-muted);letter-spacing:.14em;text-transform:uppercase}
.ph-badges{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.ph-badge{font-family:var(--mono);font-size:9px;padding:4px 9px;border-radius:99px;border:1px solid var(--line-2);color:var(--ink-muted);letter-spacing:.06em}
.ph-legal{font-family:var(--mono);font-size:9px;color:var(--ink-faint);margin-top:16px;line-height:1.55;letter-spacing:.02em}

/* ─────────────────────────────────────────────
   SCROLLBAR
   ───────────────────────────────────────────── */
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--line-3);border-radius:99px}
::-webkit-scrollbar-thumb:hover{background:var(--ink-muted)}

/* ─────────────────────────────────────────────
   RESPONSIVE
   ───────────────────────────────────────────── */
@media(max-width:1100px){
  .hero-left{align-items:flex-start}
  .hero-grid{grid-template-columns:1fr 380px;gap:56px}
  .prob-head{grid-template-columns:1fr;gap:24px}
  .prob-head-r{justify-self:start;max-width:none}
  .infra-grid{grid-template-columns:1fr;gap:32px}
  .infra-left{grid-template-columns:1fr;gap:20px}
  .infra-right{position:static}
  .faq-grid{grid-template-columns:1fr;gap:32px}
  .faq-side{position:static}
  .ft-grid{grid-template-columns:1.4fr 1fr 1fr 1fr}
  .ft-brand-col{grid-column:1/-1}
}
@media(max-width:900px){
  .prod-grid,.prob-grid,.arch-flow,.metrics-grid{grid-template-columns:repeat(2,1fr)}
  .price-grid{grid-template-columns:1fr;gap:16px}
  .arch-step{border-right:none;border-bottom:1px solid var(--line-2)}
  .arch-step:nth-child(2n){border-right:none}
  .arch-step:nth-child(1),.arch-step:nth-child(2){border-right:1px solid var(--line-2)}
  .nav-links{display:none}
  .nav-r .btn-ghost,.nav-r .btn-solid{display:none}
  .hamburger{display:flex}
  .trust-inner{justify-content:center;text-align:center}
  .trust-logos{justify-content:center;gap:32px}
}
@media(max-width:640px){
  body{cursor:auto}
  a,button{cursor:pointer}
  nav{padding:12px 18px}
  .state-bar{margin-top:54px}
  .prod-grid,.prob-grid,.arch-flow,.metrics-grid{grid-template-columns:1fr}
  .arch-step{border-right:none !important;border-bottom:1px solid var(--line-2) !important}
  .arch-step:last-child{border-bottom:none !important}
  .ft-grid{grid-template-columns:1fr 1fr;gap:28px}
  .ft-brand-col{grid-column:1/-1}
  .ft-bot{flex-direction:column;text-align:center}
  .hero{padding:48px 20px 60px}
  .hero-grid{grid-template-columns:1fr;gap:32px}
  .hero-right{display:none}
  .hero-badge{margin-bottom:28px}
  h1{margin-bottom:24px}
  .hero-lead{margin-bottom:32px}
  .sec{padding:64px 20px}
  .sec-full{padding:64px 0}
  .sec-full .inn{padding:0 20px}
  .trust-bar{padding:32px 20px}
  .trust-logos{gap:22px}
  footer{padding:48px 20px 24px}
}

/* ═══════════════════════════════════════════════
   WOW LAYER — DRAMATIC EFFECTS
   ═══════════════════════════════════════════════ */

/* Custom cursor */
#cursor-dot{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .1s,width .25s,height .25s,background .25s;mix-blend-mode:screen;will-change:transform}
#cursor-ring{position:fixed;width:38px;height:38px;border:1.5px solid rgba(14,129,129,.5);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:transform .08s,width .3s,height .3s,border-color .3s,opacity .3s;will-change:transform}
body:has(a:hover) #cursor-ring,body:has(button:hover) #cursor-ring{width:56px;height:56px;border-color:rgba(14,129,129,.8)}
body:has(a:hover) #cursor-dot,body:has(button:hover) #cursor-dot{width:6px;height:6px;background:#fff}

/* ── BACKGROUND SYSTEM ── */
#bg-base{
  position:fixed;inset:0;z-index:0;pointer-events:none;
  background:linear-gradient(125deg,#010504 0%,#020908 35%,#030F07 60%,#062A18 85%,#083D2A 100%);
}
#bg-scene{
  position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;
}

/* Soft ambient glows — radial-gradient divs, NO filter:blur */
.bg-orb{
  position:absolute;border-radius:50%;pointer-events:none;
  will-change:transform;
}
.bg-orb-a{
  width:70vw;height:70vw;max-width:900px;max-height:900px;
  top:-20%;left:-15%;
  background:radial-gradient(circle,rgba(10,100,55,.10) 0%,rgba(10,100,55,.03) 40%,transparent 70%);
  animation:orb-drift-1 24s ease-in-out infinite;
}
.bg-orb-b{
  width:60vw;height:60vw;max-width:780px;max-height:780px;
  bottom:-20%;right:-10%;
  background:radial-gradient(circle,rgba(8,90,60,.12) 0%,rgba(8,90,60,.04) 40%,transparent 70%);
  animation:orb-drift-2 30s ease-in-out infinite;
}
.bg-orb-c{
  width:50vw;height:50vw;max-width:640px;max-height:640px;
  top:35%;left:28%;
  background:radial-gradient(circle,rgba(40,160,90,.08) 0%,rgba(40,160,90,.02) 40%,transparent 70%);
  animation:orb-drift-3 20s ease-in-out infinite;
}
.bg-orb-d{
  width:80vw;height:80vw;max-width:1000px;max-height:1000px;
  top:50%;right:-30%;
  background:radial-gradient(circle,rgba(6,70,40,.10) 0%,rgba(6,70,40,.03) 45%,transparent 70%);
  animation:orb-drift-2 38s ease-in-out infinite reverse;
}

/* Subtle scanlines */
.bg-scanlines{
  position:absolute;inset:0;pointer-events:none;
  background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(14,129,90,.018) 3px,rgba(14,129,90,.018) 4px);
}

/* Geometric SVG */
.bg-geo{
  position:absolute;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:100%;height:100%;
  min-width:100vw;min-height:100vh;
  opacity:1;
}

/* Polygons */
.geo-poly{
  fill:none;
  stroke:rgba(14,129,129,.18);
  stroke-width:.8;
  vector-effect:non-scaling-stroke;
}
.geo-poly-1{stroke:rgba(14,129,129,.24);}
.geo-poly-2,.geo-poly-3{stroke:rgba(14,129,129,.15);}
.geo-sat-poly{stroke:rgba(14,129,129,.18);stroke-width:.7;}
.geo-sat-poly-sm{stroke:rgba(14,129,129,.13);stroke-width:.6;}

/* Lines */
.geo-line{stroke:rgba(14,129,129,.16);stroke-width:.6;vector-effect:non-scaling-stroke;}
.geo-line-dim{stroke:rgba(14,129,129,.09);}
.geo-connector{stroke:rgba(14,129,129,.10);stroke-width:.5;stroke-dasharray:3 4;vector-effect:non-scaling-stroke;}

/* Orbital rings */
.geo-ring{fill:none;stroke-width:.6;vector-effect:non-scaling-stroke;}
.geo-ring-1{stroke:rgba(14,129,129,.20);animation:ring-spin-1 28s linear infinite;}
.geo-ring-2{stroke:rgba(34,217,138,.13);stroke-dasharray:8 6;animation:ring-spin-2 40s linear infinite reverse;}
.geo-ring-3{stroke:rgba(14,129,129,.10);stroke-dasharray:12 8;animation:ring-spin-1 55s linear infinite;}
.geo-ring-4{stroke:rgba(14,129,129,.06);stroke-dasharray:16 10;animation:ring-spin-2 80s linear infinite;}
.geo-ring-5{stroke:rgba(34,217,138,.10);stroke-dasharray:5 8;animation:ring-spin-1 35s linear infinite reverse;}

/* Stars */
.geo-stars circle{fill:rgba(200,255,230,.7);}

/* Data flow lines */
.geo-flow-line{
  stroke:rgba(34,217,138,.20);stroke-width:.7;
  stroke-dasharray:6 5;
  vector-effect:non-scaling-stroke;
  animation:flow-dash 3s linear infinite;
}
.geo-flow-slow{animation-duration:5s;}

/* Satellite/central rotations */
.geo-central{transform-origin:500px 420px;animation:geo-rotate 60s linear infinite;}
.geo-sat-a{transform-origin:760px 240px;animation:geo-rotate 80s linear infinite reverse;}
.geo-sat-b{transform-origin:200px 670px;animation:geo-rotate 70s linear infinite;}
.geo-sat-c{transform-origin:180px 260px;animation:geo-rotate 90s linear infinite reverse;}
.geo-sat-d{transform-origin:820px 676px;animation:geo-rotate 85s linear infinite;}
.geo-sat-e{transform-origin:880px 412px;animation:geo-rotate 75s linear infinite;}
.geo-sat-f{transform-origin:120px 442px;animation:geo-rotate 95s linear infinite reverse;}

@keyframes geo-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes ring-spin-1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes ring-spin-2{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes orb-drift-1{0%,100%{transform:translate(0,0)}33%{transform:translate(60px,-50px)}66%{transform:translate(-30px,60px)}}
@keyframes orb-drift-2{0%,100%{transform:translate(0,0)}33%{transform:translate(-50px,30px)}66%{transform:translate(40px,-55px)}}
@keyframes orb-drift-3{0%,100%{transform:translate(0,0)}50%{transform:translate(-60px,-30px)}}


/* Hero scramble text — target the h1 */
h1 .scramble-char{display:inline;transition:none}

/* Glitch effect on eyebrow */
.eyebrow.glitch{animation:glitch-it .5s step-end forwards}
@keyframes glitch-it{0%{clip-path:inset(0 0 100% 0)}20%{clip-path:inset(20% 0 60% 0);transform:translateX(-2px)}40%{clip-path:inset(50% 0 30% 0);transform:translateX(2px)}60%{clip-path:inset(70% 0 10% 0);transform:none}80%{clip-path:inset(90% 0 0 0)}100%{clip-path:none;transform:none}}

/* Cinematic reveals — clean fade+rise, no clipping that breaks layout */
.reveal{opacity:0;transform:translateY(32px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1) !important}
.reveal.in{opacity:1 !important;transform:translateY(0) !important}
.reveal-stagger > *{opacity:0;transform:translateY(24px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1) !important}
.reveal-stagger.in > *{opacity:1 !important;transform:translateY(0) !important}
.reveal-stagger.in > *:nth-child(1){transition-delay:0ms}
.reveal-stagger.in > *:nth-child(2){transition-delay:120ms}
.reveal-stagger.in > *:nth-child(3){transition-delay:240ms}
.reveal-stagger.in > *:nth-child(4){transition-delay:360ms}

/* Holographic card shimmer */
.prod-card,.price-c,.infra-feat,.metric,.arch-step{position:relative}
.arch-step{overflow:hidden}
.prod-card::after,.price-c::after,.metric::after{content:'';position:absolute;inset:-1px;border-radius:inherit;background:conic-gradient(from var(--shimmer-angle,0deg),transparent 20%,rgba(14,129,129,.08) 40%,rgba(14,129,129,.06) 50%,rgba(108,169,240,.08) 60%,transparent 80%);opacity:0;transition:opacity .4s;pointer-events:none;z-index:0}
.prod-card:hover::after,.price-c:hover::after,.metric:hover::after{opacity:1;animation:shimmer-spin 3s linear infinite}
@property --shimmer-angle{syntax:'<angle>';inherits:false;initial-value:0deg}
@keyframes shimmer-spin{to{--shimmer-angle:360deg}}

/* Card 3D tilt wrapper */
.tilt-card{transform-style:preserve-3d;transition:transform .1s ease}

/* Data flow animation for arch steps */
.arch-connector{position:absolute;top:50%;right:-1px;transform:translateY(-50%);width:20px;height:20px;z-index:10;overflow:visible}
.arch-flow-wrap{position:relative}
.flow-line{stroke-dasharray:6 4;stroke-dashoffset:0;animation:flow-dash 2s linear 3}
@keyframes flow-dash{to{stroke-dashoffset:-20}}

/* Metric counter */
.metric-val[data-target]{will-change:contents}

/* Particle canvas */

/* Hero CTA pulse ring on hover */
.cta-p{position:relative}
.cta-p::before{content:'';position:absolute;inset:0;border-radius:var(--r-sm);border:1px solid var(--accent);opacity:0;animation:none;pointer-events:none}
.cta-p:hover::before{animation:ring-expand .6s ease forwards}
@keyframes ring-expand{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.15)}}

/* Scanline overlay */

/* Floating badge pulse */
.hero-badge{box-shadow:0 0 0 0 rgba(14,129,129,.3);animation:badge-pulse 3s ease-in-out infinite, fade-up .9s .1s both !important}
@keyframes badge-pulse{0%,100%{box-shadow:0 0 0 0 rgba(14,129,129,.3)}50%{box-shadow:0 0 0 8px rgba(14,129,129,0)}}

/* Live number shimmer for state bar */
.state-i .v.g{text-shadow:0 0 12px rgba(14,129,129,.6)}

/* Section divider — animated gradient line */
.sec-divider{height:1px;background:linear-gradient(90deg,transparent,var(--accent),var(--accent-bright),var(--glow),transparent);background-size:200% 100%;animation:line-sweep 4s linear infinite;opacity:.3}
@keyframes line-sweep{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* Glow on primary CTAs */
.cta-p,.pb-fill{box-shadow:0 0 36px -8px rgba(15,168,130,.45),inset 0 1px 0 rgba(255,255,255,.12)}
.cta-p:hover,.pb-fill:hover{box-shadow:0 0 50px -8px rgba(14,129,129,.6),inset 0 1px 0 rgba(255,255,255,.15),0 20px 40px -15px rgba(14,129,129,.4)}

/* Code block typewriter effect */
.infra-code .line{display:block;opacity:0;animation:type-in .3s ease forwards}

/* Morphing border on featured price card */
.price-c.feat{box-shadow:0 0 0 1px rgba(14,129,129,.3),0 0 40px -10px rgba(14,129,129,.25),0 0 80px -20px rgba(14,129,129,.1)}
.price-c.feat:hover{box-shadow:0 0 0 1px rgba(14,129,129,.6),0 0 60px -8px rgba(14,129,129,.4),0 0 120px -30px rgba(14,129,129,.2)}

/* Noise + grid */
.grid-bg{background-size:60px 60px !important;opacity:.8}

/* ─────────────────────────────────────────────
   3-AGENT DAO TRIBUNAL CARDS
   Three persona cards: Philosopher, Ethicist, Risk Manager
   ───────────────────────────────────────────── */
.tri-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:8px}
.tri-card{position:relative;background:linear-gradient(180deg,rgba(5,20,20,.7),rgba(5,15,15,.5));border:1px solid var(--line-2);border-radius:var(--r-md);padding:32px 28px 28px;display:flex;flex-direction:column;transition:all .35s cubic-bezier(.16,1,.3,1);overflow:hidden}
.tri-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--tri-color,var(--accent));opacity:.45;transition:opacity .3s}
.tri-card::after{content:'';position:absolute;top:0;right:0;width:140px;height:140px;background:radial-gradient(circle at top right,var(--tri-color,var(--accent)) 0%,transparent 65%);opacity:.04;pointer-events:none;transition:opacity .35s}
.tri-card:hover{transform:translateY(-4px);border-color:var(--line-3);background:linear-gradient(180deg,rgba(5,20,20,.85),rgba(5,18,18,.6))}
.tri-card:hover::before{opacity:.85}
.tri-card:hover::after{opacity:.1}
.tri-card[data-tri="phi"]{--tri-color:#22D98A}
.tri-card[data-tri="eth"]{--tri-color:#C084FC}
.tri-card[data-tri="rsk"]{--tri-color:#22D98A}

.tri-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;padding-bottom:14px;border-bottom:1px dashed var(--line-2)}
.tri-num{font-family:var(--mono);font-size:9.5px;color:var(--ink-muted);letter-spacing:.18em;text-transform:uppercase;font-weight:600}
.tri-role{font-family:var(--serif);font-size:15px;font-style:italic;font-weight:500;color:var(--tri-color);letter-spacing:-.01em}

.tri-icon-wrap{width:64px;height:64px;border-radius:50%;background:rgba(5,15,15,.6);border:1px solid var(--tri-color);display:flex;align-items:center;justify-content:center;color:var(--tri-color);margin-bottom:24px;position:relative;transition:all .3s}
.tri-icon-wrap::before{content:'';position:absolute;inset:-6px;border-radius:50%;border:1px dashed var(--tri-color);opacity:.25;transition:opacity .3s}
.tri-card:hover .tri-icon-wrap{box-shadow:0 0 24px -4px var(--tri-color);transform:scale(1.05)}
.tri-card:hover .tri-icon-wrap::before{opacity:.55;animation:tri-pulse 2s ease-in-out infinite}
@keyframes tri-pulse{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.08);opacity:.2}}
.tri-icon-wrap svg{width:28px;height:28px}

.tri-title{font-family:var(--serif);font-size:21px;font-weight:500;letter-spacing:-.015em;color:var(--ink);margin-bottom:14px;line-height:1.2}
.tri-desc{font-size:13.5px;color:var(--ink-dim);line-height:1.65;font-weight:300;margin-bottom:22px;flex:1}
.tri-list{list-style:none;display:flex;flex-direction:column;gap:9px;padding-top:18px;border-top:1px solid var(--line)}
.tri-list li{position:relative;padding-left:18px;font-family:var(--mono);font-size:11px;color:var(--ink-dim);letter-spacing:.01em;line-height:1.5}
.tri-list li::before{content:'';position:absolute;left:0;top:8px;width:8px;height:1px;background:var(--tri-color);opacity:.7}

@media(max-width:900px){
  .tri-grid{grid-template-columns:1fr;gap:16px}
}

/* ─────────────────────────────────────────────
   WHITEPAPER MODAL — full-screen reading view
   ───────────────────────────────────────────── */
.wp-backdrop{position:fixed;inset:0;background:rgba(2,10,5,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);z-index:2500;display:flex;align-items:flex-start;justify-content:center;padding:40px 20px;opacity:0;pointer-events:none;transition:opacity .35s cubic-bezier(.16,1,.3,1);overflow-y:auto}
.wp-backdrop.open{opacity:1;pointer-events:all}
.wp-frame{width:100%;max-width:920px;background:linear-gradient(180deg,rgba(5,20,20,.98),rgba(5,15,15,.98));border:1px solid var(--line-3);border-radius:var(--r-lg);box-shadow:0 60px 140px -20px rgba(0,0,0,.85),0 0 0 1px rgba(14,129,129,.08);transform:translateY(40px) scale(.97);transition:transform .45s cubic-bezier(.16,1,.3,1);overflow:hidden;position:relative}
.wp-backdrop.open .wp-frame{transform:none}
.wp-head{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;padding:18px 28px;border-bottom:1px solid var(--line-2);background:linear-gradient(180deg,rgba(5,20,20,.98),rgba(12,16,32,.95));backdrop-filter:blur(20px);z-index:10}
.wp-head-l{display:flex;align-items:center;gap:14px;min-width:0}
.wp-head-mark{width:30px;height:34px;flex-shrink:0;filter:drop-shadow(0 0 10px rgba(14,129,90,.45))}
.wp-head-txt{display:flex;flex-direction:column;line-height:1.15;min-width:0}
.wp-head-eyebrow{font-family:var(--mono);font-size:9px;color:var(--accent);letter-spacing:.22em;text-transform:uppercase;font-weight:500;margin-bottom:3px}
.wp-head-title{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:700;color:var(--ink);letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wp-head-r{display:flex;align-items:center;gap:10px;flex-shrink:0}
.wp-version{font-family:var(--mono);font-size:9.5px;color:var(--ink-muted);letter-spacing:.12em;text-transform:uppercase;padding:5px 10px;border:1px solid var(--line-2);border-radius:var(--r-sm)}
.wp-close{width:32px;height:32px;border:1px solid var(--line-2);border-radius:50%;background:transparent;color:var(--ink-dim);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;font-size:14px;line-height:1}
.wp-close:hover{border-color:var(--accent);color:var(--accent);background:rgba(14,129,129,.06);transform:rotate(90deg)}
.wp-progress{position:absolute;left:0;right:0;bottom:0;height:1.5px;background:rgba(14,129,129,.08)}
.wp-progress-bar{height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--glow));transition:width .12s linear;box-shadow:0 0 8px var(--accent)}

.wp-body{padding:48px 64px 80px;color:var(--ink-dim);font-size:14.5px;line-height:1.78;font-weight:300;font-family:var(--sans)}
.wp-body .wp-cover{text-align:center;padding:24px 0 40px;border-bottom:1px solid var(--line-2);margin-bottom:48px}
.wp-cover-eyebrow{font-family:var(--mono);font-size:10px;color:var(--accent);letter-spacing:.3em;text-transform:uppercase;margin-bottom:18px;font-weight:500}
.wp-cover h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(40px,5.5vw,68px);font-weight:700;line-height:1;letter-spacing:-.01em;text-transform:uppercase;margin-bottom:14px;color:var(--ink);background:linear-gradient(160deg,#FFFFFF 0%,#D4F5F5 50%,#2DBDBD 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 2px 16px rgba(14,129,129,.3));max-width:none;animation:none}
.wp-cover-sub{font-family:var(--serif);font-size:clamp(18px,2vw,22px);font-weight:400;font-style:italic;color:var(--ink-dim);margin-bottom:24px;letter-spacing:-.005em}
.wp-cover-meta{display:flex;justify-content:center;gap:24px;flex-wrap:wrap;font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.14em;text-transform:uppercase}
.wp-cover-meta span{display:inline-flex;align-items:center;gap:8px}
.wp-cover-meta .sep{width:3px;height:3px;background:var(--ink-faint);border-radius:50%}

.wp-body h2{font-family:'Barlow Condensed',sans-serif;font-size:clamp(26px,3vw,36px);font-weight:700;color:var(--ink);letter-spacing:-.005em;line-height:1.05;text-transform:uppercase;margin:56px 0 18px;padding-bottom:14px;border-bottom:1px solid var(--line-2);background:linear-gradient(155deg,#FFFFFF 0%,#7EDDB0 80%,#0E8181 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.wp-body h2:first-of-type{margin-top:0}
.wp-body h2 .wp-num{font-family:var(--mono);font-size:.5em;color:var(--accent);margin-right:14px;font-weight:600;letter-spacing:.1em;-webkit-text-fill-color:var(--accent)}
.wp-body h3{font-family:var(--serif);font-size:21px;font-weight:500;color:var(--ink);letter-spacing:-.015em;margin:38px 0 12px;line-height:1.25}
.wp-body h3 .wp-num{font-family:var(--mono);font-size:13px;color:var(--accent);margin-right:10px;font-weight:600;letter-spacing:.06em}
.wp-body h4{font-family:var(--sans);font-size:14px;font-weight:600;color:var(--ink);letter-spacing:.06em;text-transform:uppercase;margin:28px 0 10px}
.wp-body p{margin:0 0 16px;text-wrap:pretty}
.wp-body p strong,.wp-body strong{color:var(--ink);font-weight:500}
.wp-body em{color:var(--ink-dim);font-style:italic}
.wp-body ul{list-style:none;padding:0;margin:0 0 22px;display:flex;flex-direction:column;gap:10px}
.wp-body ul li{position:relative;padding-left:24px;line-height:1.7}
.wp-body ul li::before{content:'';position:absolute;left:0;top:11px;width:10px;height:1px;background:var(--accent)}
.wp-body ul li strong:first-child{color:var(--ink);font-weight:500}
.wp-body blockquote{margin:30px 0;padding:22px 26px;border-left:2px solid var(--accent);background:linear-gradient(90deg,rgba(14,129,129,.06),transparent 80%);font-family:var(--serif);font-size:18px;font-style:italic;color:var(--ink);line-height:1.5;letter-spacing:-.005em;border-radius:0 var(--r-md) var(--r-md) 0}
.wp-body .wp-abstract{margin:0 0 56px;padding:24px 28px;border:1px solid var(--line-2);border-radius:var(--r-md);background:linear-gradient(135deg,rgba(14,129,129,.04),rgba(5,15,15,.4));font-size:13.5px;line-height:1.7}
.wp-body .wp-abstract-label{font-family:var(--mono);font-size:10px;color:var(--accent);letter-spacing:.22em;text-transform:uppercase;font-weight:600;margin-bottom:10px;display:block}
.wp-body .wp-abstract em{font-style:italic;color:var(--ink-dim)}

.wp-table-wrap{margin:24px 0;border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden;background:rgba(5,15,15,.4)}
.wp-table-wrap table{width:100%;border-collapse:collapse;font-size:12.5px;font-family:var(--sans)}
.wp-table-wrap th,.wp-table-wrap td{padding:12px 18px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top;line-height:1.55}
.wp-table-wrap th{font-family:var(--mono);font-size:9.5px;color:var(--accent);letter-spacing:.14em;text-transform:uppercase;font-weight:600;background:rgba(14,129,129,.04);border-bottom:1px solid var(--line-2)}
.wp-table-wrap td{color:var(--ink-dim);font-weight:400}
.wp-table-wrap td strong{color:var(--ink);font-weight:500}
.wp-table-wrap tr:last-child td{border-bottom:none}
.wp-table-wrap tr:hover td{background:rgba(14,129,90,.025)}
.wp-table-caption{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.1em;text-transform:uppercase;margin:8px 0 32px;text-align:center;font-style:normal}

.wp-formula{margin:22px 0;padding:18px 22px;border:1px dashed var(--line-3);border-radius:var(--r-md);background:rgba(5,15,15,.4);font-family:var(--mono);font-size:13px;color:var(--ink);text-align:center;line-height:1.6;letter-spacing:.01em}

.wp-foot{margin-top:64px;padding-top:32px;border-top:1px solid var(--line-2);text-align:center;font-family:var(--mono);font-size:10.5px;color:var(--ink-muted);letter-spacing:.14em;text-transform:uppercase}
.wp-foot .wp-foot-row{margin-bottom:8px}
.wp-foot a{color:var(--accent)}

/* Body scroll lock when modal open */
body.wp-open{overflow:hidden}

@media(max-width:760px){
  .wp-backdrop{padding:20px 12px}
  .wp-head{padding:14px 18px}
  .wp-head-title{font-size:14px}
  .wp-version{display:none}
  .wp-body{padding:32px 22px 60px;font-size:13.5px}
  .wp-body h2{font-size:22px;margin:40px 0 14px}
  .wp-body h3{font-size:17px;margin:28px 0 10px}
  .wp-body h2 .wp-num,.wp-body h3 .wp-num{display:block;margin:0 0 4px}
  .wp-cover{padding:16px 0 30px;margin-bottom:36px}
  .wp-cover-meta{gap:14px;font-size:9.5px}
  .wp-table-wrap{font-size:11.5px}
  .wp-table-wrap th,.wp-table-wrap td{padding:10px 12px}
  .wp-body blockquote{padding:18px 20px;font-size:16px;margin:24px 0}
  .wp-body .wp-abstract{padding:18px 20px;margin-bottom:40px}
}

/* ─────────────────────────────────────────────
   CLAIM FILING SECTION
   ───────────────────────────────────────────── */
.claim-section{position:relative;z-index:3;padding:clamp(64px,8vh,100px) var(--pad);border-top:1px solid var(--line)}
.claim-inner{max-width:var(--maxw);margin:0 auto}
.claim-steps{display:flex;align-items:center;gap:0;margin-bottom:44px;overflow:hidden}
.claim-step-item{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-muted);transition:color .3s;padding:0 20px 0 0;flex-shrink:0}
.claim-step-item:first-child{padding-left:0}
.claim-step-num{width:22px;height:22px;border-radius:2px;border:1px solid var(--line-2);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;transition:all .3s;flex-shrink:0}
.claim-step-item.active{color:var(--accent)}
.claim-step-item.active .claim-step-num{background:var(--accent);border-color:var(--accent);color:var(--bg)}
.claim-step-item.done{color:var(--green)}
.claim-step-item.done .claim-step-num{background:rgba(34,217,138,.1);border-color:rgba(34,217,138,.3);color:var(--green)}
.claim-step-sep{flex:1;height:1px;background:var(--line-2);min-width:16px;max-width:56px}
.claim-body{display:grid;grid-template-columns:1fr 360px;gap:36px;align-items:start}
@media(max-width:900px){.claim-body{grid-template-columns:1fr}}
.claim-card{background:linear-gradient(160deg,rgba(5,20,20,.9),rgba(5,15,15,.7));border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden}
.claim-card-head{padding:14px 22px;border-bottom:1px solid var(--line);background:rgba(5,15,15,.5);display:flex;align-items:center;justify-content:space-between}
.claim-card-title{font-family:var(--mono);font-size:10px;color:var(--ink-dim);letter-spacing:.18em;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.claim-step-panel{display:none;padding:26px 24px 22px;animation:fade-up .28s both}
.claim-step-panel.active{display:block}
.cf-label{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.16em;text-transform:uppercase;display:block;margin-bottom:7px;font-weight:500}
.cf-input,.cf-textarea,.cf-select{width:100%;box-sizing:border-box;background:rgba(5,15,15,.6);border:1px solid var(--line-2);border-radius:var(--r-sm);color:var(--ink);font-family:var(--mono);font-size:12px;padding:10px 13px;transition:border-color .2s,background .2s;outline:none;letter-spacing:.02em}
.cf-input::placeholder,.cf-textarea::placeholder{color:var(--ink-faint)}
.cf-input:focus,.cf-textarea:focus,.cf-select:focus{border-color:var(--accent);background:rgba(14,129,129,.04)}
.cf-textarea{resize:vertical;min-height:88px;line-height:1.55}
.cf-select{appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235C607E' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center;padding-right:32px}
.cf-field{margin-bottom:18px}
.cf-err{font-family:var(--mono);font-size:10px;color:var(--red);letter-spacing:.06em;margin-top:4px;display:none}
.cf-err.show{display:block}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:520px){.cf-row{grid-template-columns:1fr}}
.ctype-grid{display:flex;flex-direction:column;gap:7px}
.ctype-pill{display:flex;align-items:center;gap:11px;padding:11px 14px;border:1px solid var(--line-2);border-radius:var(--r-sm);cursor:pointer;transition:all .2s;background:rgba(5,15,15,.4)}
.ctype-pill:hover{border-color:var(--line-3);background:rgba(14,129,90,.03)}
.ctype-pill.selected{border-color:var(--accent);background:rgba(14,129,129,.07)}
.ctype-pill-icon{width:28px;height:28px;border-radius:var(--r-sm);background:rgba(14,129,129,.08);border:1px solid rgba(14,129,90,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;transition:all .2s}
.ctype-pill.selected .ctype-pill-icon{background:rgba(14,129,90,.18);border-color:rgba(14,129,129,.4)}
.ctype-pill-name{font-family:var(--mono);font-size:10.5px;color:var(--ink);letter-spacing:.08em;font-weight:600;text-transform:uppercase}
.ctype-pill-desc{font-family:var(--sans);font-size:11px;color:var(--ink-muted);margin-top:2px;line-height:1.35}
.ctype-pill-badge{font-family:var(--mono);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border-radius:2px;flex-shrink:0}
.badge-auto{color:var(--accent);background:rgba(14,129,129,.1);border:1px solid rgba(14,129,129,.2)}
.badge-hybrid{color:var(--sol);background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2)}
.ev-list{display:flex;flex-direction:column;gap:5px;margin-bottom:10px}
.ev-row{display:flex;align-items:center;gap:8px;padding:8px 11px;background:rgba(14,129,129,.04);border:1px solid rgba(14,129,90,.12);border-radius:var(--r-sm);font-family:var(--mono);font-size:10.5px;color:var(--ink-dim)}
.ev-row-type{color:var(--accent);text-transform:uppercase;letter-spacing:.1em;font-size:9.5px;min-width:76px}
.ev-row-val{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ev-rm{background:none;border:none;color:var(--ink-faint);cursor:pointer;padding:1px 5px;font-size:13px;line-height:1;transition:color .2s;flex-shrink:0}
.ev-rm:hover{color:var(--red)}
.claim-nav{display:flex;justify-content:space-between;align-items:center;margin-top:22px;padding-top:18px;border-top:1px solid var(--line)}
.claim-btn-back{font-family:var(--mono);font-size:10px;color:var(--ink-muted);letter-spacing:.08em;background:none;border:1px solid var(--line-2);border-radius:var(--r-sm);padding:8px 15px;cursor:pointer;transition:all .2s}
.claim-btn-back:hover{color:var(--ink);border-color:var(--line-3)}
.claim-btn-next{font-family:var(--mono);font-size:10px;color:var(--bg);letter-spacing:.1em;background:var(--accent);border:1px solid var(--accent);border-radius:var(--r-sm);padding:8px 18px;cursor:pointer;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:6px}
.claim-btn-next:hover{background:var(--accent-dim);border-color:var(--accent-dim);transform:translateY(-1px)}
.claim-btn-submit{font-family:var(--mono);font-size:10px;letter-spacing:.1em;background:var(--green);border:1px solid var(--green);color:var(--bg);border-radius:var(--r-sm);padding:8px 18px;cursor:pointer;font-weight:700;transition:all .2s;display:inline-flex;align-items:center;gap:6px}
.claim-btn-submit:hover{background:rgba(34,217,138,.85);transform:translateY(-1px)}
.claim-terminal{background:rgba(3,12,12,.92);border:1px solid var(--line-2);border-radius:var(--r-md);overflow:hidden;position:sticky;top:78px}
.term-head{padding:11px 16px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:8px;background:rgba(5,15,15,.7)}
.term-dots{display:flex;gap:5px}
.term-dot{width:7px;height:7px;border-radius:50%}
.term-title{font-family:var(--mono);font-size:9px;color:var(--ink-muted);letter-spacing:.2em;text-transform:uppercase;margin-left:4px}
.term-body{padding:18px;font-family:var(--mono);font-size:11px;line-height:1.75;color:var(--ink-dim);min-height:200px;overflow-x:auto}
.term-body pre{margin:0;white-space:pre-wrap;word-break:break-all}
.term-comment{color:var(--ink-faint)}
.term-key{color:var(--accent-bright)}
.term-str{color:var(--green)}
.term-num{color:var(--amber)}
.term-footer{padding:11px 16px;border-top:1px solid var(--line);display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.term-copy-btn{font-family:var(--mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;background:rgba(14,129,129,.08);border:1px solid rgba(14,129,129,.2);color:var(--accent);border-radius:var(--r-sm);padding:6px 12px;cursor:pointer;transition:all .2s;flex-shrink:0}
.term-copy-btn:hover{background:rgba(14,129,90,.16)}
.term-route{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);letter-spacing:.04em;display:flex;align-items:center;gap:6px}
.term-method{color:var(--accent);font-weight:700}
.term-path{color:var(--ink-dim)}
.review-table{width:100%;border-collapse:collapse;font-family:var(--mono);font-size:11px}
.review-table tr{border-bottom:1px solid var(--line)}
.review-table tr:last-child{border-bottom:none}
.review-table td{padding:8px 0;vertical-align:top;line-height:1.5}
.review-table td:first-child{color:var(--ink-muted);width:110px;letter-spacing:.08em;text-transform:uppercase;font-size:9.5px;padding-right:12px}
.review-table td:last-child{color:var(--ink);word-break:break-all}
.claim-success{display:none;text-align:center;padding:30px 24px}
.claim-success.show{display:block}
.success-check{width:44px;height:44px;border-radius:50%;background:rgba(34,217,138,.1);border:1px solid rgba(34,217,138,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:var(--green)}
.success-title{font-family:var(--serif);font-size:20px;font-weight:500;color:var(--ink);margin-bottom:6px}
.success-id{font-family:var(--mono);font-size:10.5px;color:var(--accent);letter-spacing:.12em;margin-bottom:14px}
.success-note{font-size:13px;color:var(--ink-dim);font-weight:300;line-height:1.6;margin-bottom:18px;max-width:400px;margin-left:auto;margin-right:auto}
.success-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
