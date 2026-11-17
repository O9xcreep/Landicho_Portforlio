const CONFIG = {
  name: "Vincent Landicho P.",
  yearLevel: "4th Year",
  githubUsername: "O9xcreep",
  email: "landichovincent11@gmail.com",
  phone: "09932295360",
  linkedin: "https://www.linkedin.com/in/vincent-landicho-9638a4381",
  credly: "https://www.credly.com/users/vincent-landicho",
  credentials: [
    { title: "IT Specialist – Artificial Intelligence", issuer: "Certiport, a Pearson VUE business", date: "2026-11-12",
      credlyId: "1f6f8cbc-202e-49ae-9c49-1c3153935d00",
      desc: "Industry certification exam — prepared for the professional use of AI and how AI can be used to solve problems." },
    { title: "Data Fundamentals", issuer: "IBM SkillsBuild", date: "2026-05-22",
      credlyId: "7bb598ff-ddb4-4a41-8220-b7b08dd6029d",
      desc: "Data analytics concepts and data science tools; cleaning, refining and visualizing data in IBM Watson Studio." },
    { title: "JavaScript Essentials 1", issuer: "Cisco · OpenEDG JS Institute", date: "2024-09-29",
      credlyId: "1491346a-790f-49bc-9c35-8e40bb5d685e", image: "https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/image.png",
      desc: "Core JavaScript syntax, variables, operators, flow control, functions and data types — designing, writing and improving JavaScript programs." },
    { title: "Cloud Computing Fundamentals", issuer: "IBM SkillsBuild", date: "2024-09-26",
      credlyId: "8559209a-f7d3-4792-ae32-a11ba928c7ea", image: "https://images.credly.com/images/5624b38a-5471-4d5c-a2bd-f4575babaa61/image.png",
      desc: "Cloud services and deployment models, virtualization, containers, deploying a web app to the cloud and cloud security." },
    { title: "User Experience Design Fundamentals", issuer: "IBM SkillsBuild", date: "2026-05-27",
      credlyId: "1a040035-a738-4113-a49a-69e182b5b6b7", image: "https://images.credly.com/images/255f1178-a3ba-4738-a494-02b046fbec10/image.png",
      desc: "User personas, wireframes, prototypes, usability testing and collaborating with a UX team on a website redesign case study." },
    { title: "Operating Systems Basics", issuer: "Cisco", date: "2026-04-29",
      credlyId: "6adaa802-8846-4d61-821c-127434e102c4", image: "https://images.credly.com/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png",
      desc: "Purpose and characteristics of operating systems, basic OS security, and mobile device network and email configuration." },
    { title: "Introduction to Modern AI", issuer: "Cisco", date: "2025-11-30",
      credlyId: "19512458-9ffe-45a4-8595-fece6b51296a", image: "https://images.credly.com/images/e2d12302-10f9-40d4-8ff1-066a7008b61d/blob",
      desc: "How modern AI models work and how to prompt chatbots effectively." },
    { title: "Agile Explorer", issuer: "IBM SkillsBuild", date: "2025-10-30",
      credlyId: "d73f051c-8ce1-4a66-b086-f142bb373234", image: "https://images.credly.com/images/3b7846e2-bdbd-4ed6-8543-182f47502190/image.png",
      desc: "Agile values, principles and practices for working in teams." },
    { title: "AI Fundamentals with IBM SkillsBuild", issuer: "Cisco · IBM SkillsBuild", date: "2024-11-05",
      credlyId: "f5eadabf-5354-4524-b061-d4401e8a4a62", image: "https://images.credly.com/images/26c21273-c0ab-485b-98a7-f1212dcb82b8/image.png",
      desc: "NLP, computer vision, deep learning and AI ethics." },
    { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", date: "2024-10-13",
      credlyId: "bab5e707-36cd-4068-aee3-c00394269cbc", image: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
      desc: "Machine learning, neural networks, chatbots and running an AI model in IBM Watson Studio." },
    { title: "Fundamentals of Sustainability and Technology", issuer: "IBM SkillsBuild", date: "2024-09-21",
      credlyId: "f1191b4f-8e7f-4960-9b7c-4c4669642192", image: "https://images.credly.com/images/cef0e894-8024-4a89-8337-c7ee295aef19/image.png",
      desc: "Applying data analytics, AI and hybrid cloud to sustainability problems." },
  ],
  status: "open for OJT",
  about:
    "4th-year BS Computer Science student at Laguna State Polytechnic University – San Pablo City Campus, " +
    "looking for an OJT placement where I can contribute to real projects while learning from experienced developers. " +
    "Through coursework and projects I've worked mainly in Python and Java — from a Java desktop app " +
    "to team projects managed on GitHub — and I pick up new tools quickly.",
  strengths: [
    "Built and deployed a full-stack web app (Flask + React) with machine learning and OCR features",
    "IT Specialist – Artificial Intelligence certified (Certiport / Pearson VUE)",
    "10 more credentials from Cisco and IBM SkillsBuild — JavaScript, cloud, data, UX and operating systems",
    "Hands-on project experience in Python and Java",
    "Team player — built group projects together using Git and GitHub",
    "Strong foundation in OOP and data structures",
    "Used to deadline-driven work from academic projects",
    "Eager to learn your team's tools and take on assigned tasks",
  ],
  lookingFor: "OJT / internship in software development, web development or IT",
  skills: [
    { id: "python", name: "Python", mark: "py", ext: ".py", level: 50,
      text: "Built the Flask backend of EcoScholar — MongoDB, Tesseract OCR and an XGBoost + Random Forest model for eligibility scoring.",
      snippet: 'projects = ["EcoScholar", "Bank Queueing System"]\nfor name in projects:\n    print(f"Built: {name}")' },
    { id: "java", name: "Java", mark: "java", ext: ".java", level: 45,
      text: "Built a desktop GUI app (JFrame/Swing) that simulates a bank queue. Solid grounding in OOP, classes and data structures.",
      snippet: 'Queue<Customer> line = new LinkedList<>();\nline.add(new Customer("A-001"));\nCustomer next = line.poll(); // first come, first served' },
  ],
  projectNotes: {
    "Banking-system-Queueing-group-1": {
      title: "Bank Queueing System",
      desc: "A Java desktop application (JFrame) that simulates how a bank serves customers in line — first come, first served.",
      points: ["Applies the queue data structure (FIFO) to a real-world scenario", "GUI built with Java Swing / JFrame", "Group project, collaborated through GitHub"],
    },
    "hangmath": {
      title: "HangMath",
      desc: "Final exam project — planned, built and delivered within the semester deadline.",
      points: ["Completed under a fixed academic deadline", "Version-controlled on GitHub"],
    },
  },
  extraProjects: [
    { name: "ECOSCHOLAR", title: "EcoScholar", lang: "Python · Flask · React", url: "",
      desc: "Centralized Scholarship Allocation & Automated Disbursement System — a scholarship application portal " +
            "for students and administrators, with ML-assisted eligibility scoring and OCR-based document verification. " +
            "Team project with Del Rio and Magpantay; source code is private.",
      points: [
        "Backend: Flask (Python) with MongoDB Atlas (pymongo + GridFS for uploaded documents)",
        "Machine learning: combined XGBoost classifier + Random Forest regressor for eligibility scoring",
        "Tesseract OCR to verify uploaded documents and autofill forms",
        "Frontend: React + Vite",
        "Deployed: backend on Render (Docker), frontend on Vercel",
      ] },
  ],
  fallbackProjects: [
    { name: "Banking-system-Queueing-group-1", lang: "Java", url: "https://github.com/O9xcreep/Banking-system-Queueing-group-1" },
    { name: "hangmath", lang: "", url: "https://github.com/O9xcreep/hangmath" },
  ],
};

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function fmtDate(d) {
  const [y, m] = d.split("-").map(Number);
  return new Date(y, m - 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
const credLink = (c) => c.url || (c.credlyId ? `https://www.credly.com/badges/${c.credlyId}` : "");
const outLink = (href, label, cls = "") =>
  `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
const dashList = (arr) => arr.map((x) => `<li>${esc(x)}</li>`).join("");
const facts = (rows) => rows.filter(Boolean).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${v}</dd>`).join("");

function nameHTML() {
  const parts = CONFIG.name.split(" ");
  const last = parts.pop();
  return `${esc(parts.join(" "))} <em>${esc(last)}</em>`;
}

function renderStatic() {
  const year = new Date().getFullYear();
  const status = CONFIG.status.replace(/^./, (c) => c.toUpperCase());
  $("navName").innerHTML = nameHTML();
  $("heroName").textContent = CONFIG.name;
  $("footName").textContent = CONFIG.name;
  $("heroStatus").textContent = status;
  $("year").textContent = year;
  $("footYear").textContent = year;

  $("heroLede").textContent =
    `${CONFIG.yearLevel} BS Computer Science student at LSPU San Pablo. I work mainly in Python and Java — ` +
    `most recently on EcoScholar, a full-stack scholarship portal with machine learning and OCR.`;

  $("aboutText").textContent = CONFIG.about;
  const projectCount = CONFIG.extraProjects.length + CONFIG.fallbackProjects.length;
  $("stats").innerHTML = [
    [CONFIG.yearLevel.split(" ")[0], "Year, BS Computer Science"],
    [CONFIG.credentials.length, "Credentials earned"],
    [projectCount, "Projects built"],
    [CONFIG.skills.length, "Core languages: " + CONFIG.skills.map((s) => s.name).join(" & ")],
  ].map(([n, label], i) => `
    <div class="stat reveal" style="--d:${i}"><dt>${esc(label)}</dt><dd>${esc(n)}</dd></div>`).join("");
  $("strengths").innerHTML = dashList(CONFIG.strengths);
  $("education").innerHTML = facts([
    ["Degree", "BS Computer Science"],
    ["Year", esc(CONFIG.yearLevel)],
    ["School", "Laguna State Polytechnic University"],
    ["Campus", "San Pablo City"],
  ]);
  $("lookingFor").textContent = CONFIG.lookingFor;

  $("skillList").innerHTML = CONFIG.skills.map((s, i) => `
    <div class="skill reveal" style="--d:${i}; --w:${s.level}%">
      <div class="skill-name">${esc(s.name)}</div>
      <div>
        <p class="skill-text">${esc(s.text)}</p>
        <div class="skill-track"><div class="skill-fill"></div></div>
        ${s.snippet ? `<details><summary>Show code sample</summary><pre>${esc(s.snippet)}</pre></details>` : ""}
      </div>
      <div class="skill-pct">${s.level}%</div>
    </div>`).join("");

  const creds = [...CONFIG.credentials].sort((a, b) => b.date.localeCompare(a.date));
  $("credIntro").textContent = `${creds.length} certificates and badges from Certiport, Cisco and IBM SkillsBuild, earned alongside my coursework.`;
  $("credList").innerHTML = creds.map((c, i) => `
    <li class="reveal${i === 0 ? " top" : ""}" style="--d:${Math.min(i, 6)}">
      <span class="ct">${esc(c.title)}</span>
      ${credLink(c) ? outLink(credLink(c), "Verify") : ""}
      <span class="ci">${esc(c.issuer)} · ${fmtDate(c.date)}</span>
      ${i === 0 ? `<span class="badge-note">Industry certification exam</span>` : ""}
    </li>`).join("");
  $("credlyLink").innerHTML = CONFIG.credly ? outLink(CONFIG.credly, "See all badges on Credly", "link") : "";

  $("contactFacts").innerHTML = facts([
    ["Email", `<a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>`],
    CONFIG.phone && ["Phone", `<a href="tel:${esc(CONFIG.phone)}">${esc(CONFIG.phone)}</a>`],
    CONFIG.linkedin && ["LinkedIn", outLink(CONFIG.linkedin, "vincent-landicho")],
    CONFIG.githubUsername && ["GitHub", outLink(`https://github.com/${CONFIG.githubUsername}`, CONFIG.githubUsername)],
    CONFIG.credly && ["Credly", outLink(CONFIG.credly, "vincent-landicho")],
  ]);
  $("contactActions").innerHTML = `
    <a class="btn" href="mailto:${esc(CONFIG.email)}">Send an email</a>
    ${CONFIG.phone ? `<a class="link" href="tel:${esc(CONFIG.phone)}">Call ${esc(CONFIG.phone)}</a>` : ""}`;
}

async function loadRepos() {
  if (!CONFIG.githubUsername) return CONFIG.fallbackProjects;
  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(CONFIG.githubUsername)}/repos?sort=updated&per_page=12`);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json()).filter((r) => !r.fork).map((r) => ({
      name: r.name, desc: r.description, lang: r.language, url: r.html_url,
      updated: new Date(r.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    }));
    return repos.length ? repos : CONFIG.fallbackProjects;
  } catch {
    return CONFIG.fallbackProjects;
  }
}

const withNotes = (raw) => {
  const p = { ...raw, ...(CONFIG.projectNotes[raw.name] || {}) };
  p.title = p.title || p.name;
  return p;
};
const tagsOf = (lang) => (lang || "").split("·").map((t) => t.trim()).filter(Boolean)
  .map((t) => `<span class="tag">${esc(t)}</span>`).join("");

function renderFeatured(p) {
  return `
    <article class="featured reveal">
      <div>
        <p class="kicker">Featured project</p>
        <h4>${esc(p.title)}</h4>
        <p class="p-desc">${esc(p.desc)}</p>
        <div class="tags">${tagsOf(p.lang)}</div>
        ${p.url ? `<div class="hero-actions">${outLink(p.url, "View on GitHub", "link")}</div>` : ""}
      </div>
      <div>
        <h3>Highlights</h3>
        <ul class="dash">${dashList(p.points || [])}</ul>
      </div>
    </article>`;
}

function renderProject(p, i) {
  return `
    <article class="project reveal" style="--d:${i}">
      <p class="kicker">Project</p>
      <h4>${esc(p.title)}</h4>
      <p class="p-desc">${esc(p.desc || "No description yet.")}</p>
      ${p.points?.length ? `<ul class="dash">${dashList(p.points)}</ul>` : ""}
      <div class="p-foot">
        <span>${[p.lang, p.updated && `Updated ${p.updated}`].filter(Boolean).map(esc).join(" · ")}</span>
        ${p.url ? outLink(p.url, "GitHub", "link") : ""}
      </div>
    </article>`;
}

async function renderProjects() {
  const [featured, ...extras] = CONFIG.extraProjects.map(withNotes);
  $("featured").innerHTML = featured ? renderFeatured(featured) : "";
  $("projectGrid").innerHTML = `<div class="skeleton"></div><div class="skeleton"></div>`;
  observe($("featured"));
  const repos = (await loadRepos()).map(withNotes);
  $("projectGrid").innerHTML = [...extras, ...repos].map(renderProject).join("");
  observe($("projectGrid"));
}

const revealer = "IntersectionObserver" in window && !reducedMotion
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); revealer.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
  : null;

function observe(root = document) {
  root.querySelectorAll(".reveal:not(.in)").forEach((el) => {
    if (revealer) revealer.observe(el); else el.classList.add("in");
  });
}

function setupNav() {
  const nav = document.querySelector(".nav");
  const links = [...document.querySelectorAll(".nav-links a")];
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }

  const menuBtn = $("menuBtn"), navLinks = $("navLinks");
  const setMenu = (open) => {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
  };
  menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  links.forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
}

function setupTheme() {
  const btn = $("themeBtn");
  const apply = (t) => {
    document.documentElement.dataset.theme = t;
    btn.textContent = t === "dark" ? "Light" : "Dark";
  };
  let saved;
  try { saved = localStorage.getItem("theme"); } catch {}
  apply(saved === "dark" ? "dark" : "light");
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch {}
  });
}

const GRAB = ".hero-photo, .featured, .project, .tag, .creds li, .skill";
const SPRING = 160, DAMPING = 11, ROT_SPRING = 90, ROT_DAMPING = 7;

function setupGravity() {
  if (reducedMotion) return;
  const bodies = new Map();
  let active = null, rafId = 0, last = 0, suppressClick = false;

  const bodyOf = (el) => {
    if (!bodies.has(el)) bodies.set(el, { el, x: 0, y: 0, vx: 0, vy: 0, r: 0, vr: 0, rTarget: 0 });
    return bodies.get(el);
  };

  function paint(b) {
    b.el.style.translate = `${b.x.toFixed(2)}px ${b.y.toFixed(2)}px`;
    b.el.style.rotate = `${b.r.toFixed(3)}deg`;
  }

  function step(now) {
    const dt = Math.min(1 / 30, (now - last) / 1000 || 1 / 60);
    last = now;
    bodies.forEach((b) => {
      if (b === active?.body) {
        b.vr += (ROT_SPRING * (b.rTarget - b.r) - ROT_DAMPING * b.vr) * dt;
        b.r += b.vr * dt;
        b.rTarget *= 0.9;
      } else {
        b.vx += (-SPRING * b.x - DAMPING * b.vx) * dt;
        b.vy += (-SPRING * b.y - DAMPING * b.vy) * dt;
        b.vr += (-ROT_SPRING * b.r - ROT_DAMPING * b.vr) * dt;
        b.x += b.vx * dt; b.y += b.vy * dt; b.r += b.vr * dt;
      }
      paint(b);
      const resting = b !== active?.body && Math.abs(b.x) + Math.abs(b.y) < 0.2 &&
        Math.abs(b.vx) + Math.abs(b.vy) < 2 && Math.abs(b.r) < 0.05 && Math.abs(b.vr) < 0.5;
      if (resting) {
        b.el.style.translate = b.el.style.rotate = b.el.style.transformOrigin = "";
        b.el.classList.remove("airborne");
        bodies.delete(b.el);
      }
    });
    rafId = bodies.size ? requestAnimationFrame(step) : 0;
  }
  const wake = () => { if (!rafId) { last = performance.now(); rafId = requestAnimationFrame(step); } };

  function begin(a) {
    const b = a.body;
    const rect = a.el.getBoundingClientRect();
    const ox = a.sx - (rect.left - b.x), oy = a.sy - (rect.top - b.y);
    a.el.style.transformOrigin = `${ox}px ${oy}px`;
    a.below = oy > rect.height / 2;
    a.el.classList.add("airborne");
    document.body.classList.add("grabbing");
    getSelection()?.removeAllRanges();
    a.started = true;
    a.lastX = a.sx; a.lastY = a.sy; a.lastT = performance.now();
    wake();
  }

  function onDown(e) {
    if (e.button > 0 || active) return;
    const el = e.target.closest(GRAB);
    if (!el) return;
    const body = bodyOf(el);
    active = { el, body, id: e.pointerId, type: e.pointerType, sx: e.clientX, sy: e.clientY, bx: body.x, by: body.y, started: false };
    if (e.pointerType === "touch") {
      active.timer = setTimeout(() => { if (active && !active.started) { begin(active); el.classList.add("held"); } }, 220);
    }
  }

  function onMove(e) {
    const a = active;
    if (!a || e.pointerId !== a.id) return;
    const dx = e.clientX - a.sx, dy = e.clientY - a.sy;
    if (!a.started) {
      if (a.type === "touch") { if (Math.hypot(dx, dy) > 8) cancel(); return; }
      if (Math.hypot(dx, dy) < 5) return;
      begin(a);
    }
    const now = performance.now(), t = Math.max(1, now - a.lastT);
    const vx = (e.clientX - a.lastX) / t * 1000, vy = (e.clientY - a.lastY) / t * 1000;
    a.lastX = e.clientX; a.lastY = e.clientY; a.lastT = now;
    const b = a.body;
    b.vx = b.vx * 0.6 + vx * 0.4; b.vy = b.vy * 0.6 + vy * 0.4;
    b.x = a.bx + dx; b.y = a.by + dy;
    const swing = Math.max(-16, Math.min(16, b.vx * 0.018)) * (a.below ? -1 : 1);
    b.rTarget = b.rTarget * 0.5 + swing * 0.5;
  }

  function release(e) {
    const a = active;
    if (!a || (e && e.pointerId !== a.id)) return;
    clearTimeout(a.timer);
    a.el.classList.remove("held");
    if (a.started) {
      suppressClick = true;
      setTimeout(() => (suppressClick = false), 350);
      a.body.vr += a.body.vx * 0.02 * (a.below ? -1 : 1);
    }
    document.body.classList.remove("grabbing");
    active = null;
    wake();
  }
  function cancel() { if (active) { clearTimeout(active.timer); active = null; } }

  document.addEventListener("pointerdown", onDown);
  document.addEventListener("pointermove", onMove);
  document.addEventListener("pointerup", release);
  document.addEventListener("pointercancel", release);
  document.addEventListener("touchmove", (e) => { if (active?.started) e.preventDefault(); }, { passive: false });
  document.addEventListener("click", (e) => {
    if (suppressClick) { suppressClick = false; e.preventDefault(); e.stopPropagation(); }
  }, true);
  document.addEventListener("dragstart", (e) => { if (e.target.closest?.(GRAB)) e.preventDefault(); });
}

setupTheme();
renderStatic();
setupNav();
observe();
renderProjects();
setupGravity();
