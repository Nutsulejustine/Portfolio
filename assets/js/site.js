(function(){
// ============================================================
//  FICHIER À PERSONNALISER : tout ce qui est "à toi" est ici.
//  Tu n'as presque jamais besoin de toucher aux autres fichiers.
// ============================================================

const CONFIG = {
  // Ton pseudo GitHub et le nom du dépôt qui contient ce site
  githubUser: "Nutsulejustine",
  portfolioRepo: "portfolio",

  // E-mail coupé en deux : il n'apparaît jamais en clair dans le HTML
  emailUser: "nutsuleayawavijustine",
  emailDomain: "gmail.com",

  // Colle ici ton lien LinkedIn complet (https://www.linkedin.com/in/...).
  // Tant que c'est vide, le bouton LinkedIn n'est pas affiché.
  linkedin: "https://www.linkedin.com/in/ayawavi-justine-n-192686405",

  // CV téléchargeable (français)
  cvPath: "assets/cv/CV_Justine_Nutsule_FR.pdf",

  // Topic GitHub à ajouter sur un dépôt pour qu'il apparaisse sur le site
  topicPortfolio: "portfolio",
};
// Compétences affichées en pastilles
const SKILLS = [
  {
    key: "skills.cyber.t",
    items: {
      fr: ["Analyse de vulnérabilités", "Tests d'intrusion en laboratoire", "Kali Linux", "Metasploit", "Nessus"],
      en: ["Vulnerability analysis", "Lab penetration testing", "Kali Linux", "Metasploit", "Nessus"],
    },
  },
  {
    key: "skills.net.t",
    items: {
      fr: ["TCP/IP", "LAN/WAN", "VLAN", "Contrôle d'accès réseau", "IEEE 802.1X", "NAC"],
      en: ["TCP/IP", "LAN/WAN", "VLAN", "Network access control", "IEEE 802.1X", "NAC"],
    },
  },
  {
    key: "skills.sys.t",
    items: {
      fr: ["Linux", "Python", "SQL", "HTML/PHP"],
      en: ["Linux", "Python", "SQL", "HTML/PHP"],
    },
  },
];

// Les 3 catégories de projets. Les "topics" sont les mots à ajouter sur le dépôt GitHub.
const CATEGORIES = [
  { id: "grc", topics: ["grc"], fr: "GRC", en: "GRC" },
  { id: "cyber-reseau", topics: ["cybersecurite", "reseau"], fr: "Cybersécurité et réseau", en: "Cybersecurity and networking" },
  { id: "site-web", topics: ["site-web"], fr: "Sites web", en: "Web" },
];
const FEATURED = [];
// Parcours (du plus récent au plus ancien). kind : "work" ou "edu"
const PATH = [
  {
    kind: "work",
    date: { fr: "20 juillet – 20 novembre 2026", en: "July 20 – November 20, 2026" },
    title: {
      fr: "Stagiaire technicienne réseaux et sécurité informatique",
      en: "Network and IT security technician intern",
    },
    org: { fr: "Lotié Télécom, Lomé (sur site)", en: "Lotié Télécom, Lomé (on site)" },
    points: {
      fr: [
        "Installation et configuration de matériel informatique et réseau.",
        "Stage de fin d'études, en appui du projet de recherche sur le contrôle d'accès réseau (NAC) basé sur IEEE 802.1X.",
      ],
      en: [
        "Installing and configuring IT and network equipment.",
        "End-of-studies internship supporting the research project on network access control (NAC) based on IEEE 802.1X.",
      ],
    },
  },
  {
    kind: "edu",
    date: { fr: "Avril 2026", en: "April 2026" },
    title: { fr: "Formation CompTIA Security+ (cybersécurité)", en: "CompTIA Security+ training (cybersecurity)" },
    org: { fr: "Agence Nationale de la Cybersécurité (ANCy), Togo", en: "National Cybersecurity Agency (ANCy), Togo" },
    points: { fr: [], en: [] },
  },
  {
    kind: "edu",
    date: { fr: "Septembre 2025 – août 2026", en: "September 2025 – August 2026" },
    title: { fr: "Licence en cybersécurité", en: "Bachelor's degree in cybersecurity" },
    org: { fr: "École Supérieure des Affaires (ESA-TG), Lomé", en: "École Supérieure des Affaires (ESA-TG), Lomé" },
    points: { fr: [], en: [] },
  },
  {
    kind: "edu",
    date: { fr: "Septembre 2025 – mars 2026", en: "September 2025 – March 2026" },
    title: { fr: "Formation CCNA", en: "CCNA training" },
    org: { fr: "Lotié Télécom", en: "Lotié Télécom" },
    points: { fr: [], en: [] },
  },
  {
    kind: "work",
    date: { fr: "Juillet – septembre 2025", en: "July – September 2025" },
    title: { fr: "Chef de projet digital", en: "Digital project manager" },
    org: { fr: "Esseyi, entreprise EdTech internationale (à distance)", en: "Esseyi, international EdTech company (remote)" },
    points: {
      fr: [
        "Conception et production de contenus visuels et vidéos pour les supports de communication.",
        "Contribution à l'amélioration de l'expérience utilisateur du site web.",
      ],
      en: [
        "Designing and producing visual and video content for the company's communication materials.",
        "Contributing to improving the website's user experience.",
      ],
    },
  },
  {
    kind: "edu",
    date: { fr: "Janvier – mars 2025", en: "January – March 2025" },
    title: {
      fr: "Formation en art oratoire et prise de parole publique",
      en: "Public speaking and oratory training",
    },
    org: { fr: "Orator'Ship Academy", en: "Orator'Ship Academy" },
    points: { fr: [], en: [] },
  },
  {
    kind: "work",
    date: { fr: "Septembre 2022 – septembre 2023", en: "September 2022 – September 2023" },
    title: { fr: "Responsable des ventes", en: "Sales manager" },
    org: { fr: "Établissement Fafali, marché d'Adawlato, Lomé", en: "Établissement Fafali, Adawlato market, Lomé" },
    points: {
      fr: [
        "Prospection clientèle et gestion de compte client.",
        "Supervision des ventes en magasin.",
      ],
      en: [
        "Customer prospecting and account management.",
        "Supervising in-store sales.",
      ],
    },
  },
];

// Certifications (une carte par certification)
const CERTS = [
  {
    title: { fr: "CompTIA Security+ (SY0-701)", en: "CompTIA Security+ (SY0-701)" },
    issuer: "CompTIA",
    date: { fr: "Mai 2026", en: "May 2026" },
    verify: "https://cp.certmetrics.com/comptia/en/public/verify/credential/42aa623a582b4fbcbe58e060f4850278",
    note: {
      fr: "Vérifiable en ligne sur le portail CompTIA.",
      en: "Verifiable online on the CompTIA portal.",
    },
  },
  {
    title: { fr: "Junior GRC Analyst (JGA)", en: "Junior GRC Analyst (JGA)" },
    issuer: "Vibe Security",
    date: { fr: "7 octobre 2026", en: "October 7, 2026" },
    verify: "https://vibsecurity.com/verify-certificate?id=VS-JGRC-CERT337193",
    note: {
      fr: "Bases des méthodologies et principes GRC (gouvernance, risques, conformité), validées par une évaluation pratique.",
      en: "Foundations of GRC methodologies and principles (governance, risk, compliance), validated by a hands-on assessment.",
    },
  },
];

// "Ma voix" : l'oral et l'écrit
const VOICE = {
  speak: {
    fr: [
      "Gagnante, rubrique Art oratoire, Intelo Innovation Talent, Lomé (mai 2025)",
      "Formation en art oratoire et prise de parole publique, Orator'Ship Academy (début 2025)",
    ],
    en: [
      "Winner, public speaking category, Intelo Innovation Talent, Lomé (May 2025)",
      "Public speaking and oratory training, Orator'Ship Academy (early 2025)",
    ],
  },
  write: {
    fr: [
      "2e prix scénariste, SCAF Togo (octobre 2025)",
      "Lauréate du concours national d'écriture AWOUDY (2019)",
    ],
    en: [
      "2nd prize, screenwriting, SCAF Togo (October 2025)",
      "Laureate, AWOUDY national writing competition (2019)",
    ],
  },
};

// Textes de l'interface
const I18N = {
  fr: {
    "skip": "Aller au contenu",
    "nav.about": "À propos",
    "nav.path": "Parcours",
    "nav.projects": "Projets",
    "nav.voice": "Ma voix",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.role": "Licenciée en cybersécurité, tournée vers la GRC",
    "hero.lead":
      "Je me spécialise en cybersécurité, des réseaux à la gouvernance des risques, et j'aime expliquer clairement ce que je fais.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.cv": "Télécharger mon CV",
    "hero.now": "Stage de technicienne réseau, Lotié Télécom (2026)",
    "hero.badge": "Certifiée CompTIA Security+ (mai 2026)",
    "hero.live": "Dernière activité sur GitHub : {when}",
    "hero.photo": "Portrait de Justine Nutsule",
    "goal.title": "Mon objectif",
    "goal.p1": "Devenir analyste GRC : mettre ma base en cybersécurité au service de la gouvernance, des normes et de l'analyse des risques.",
    "goal.p2": "Cybersécurité, normes, audits, matrices de risques : je construis les deux moitiés du métier, la technique et la gouvernance.",
    "goal.l1.t": "Cybersécurité",
    "goal.l1.d": "Tests d'intrusion, analyse de vulnérabilités, Security+ : protéger les systèmes.",
    "goal.l2.t": "Réseaux",
    "goal.l2.d": "Schémas, VLAN, contrôle d'accès 802.1X : le terrain où je m'entraîne.",
    "goal.l3.t": "Normes",
    "goal.l3.d": "ISO, NIST : les cadres qui structurent la sécurité.",
    "goal.l4.t": "Audit",
    "goal.l4.d": "Checklists et contrôles : vérifier que les règles sont vraiment appliquées.",
    "goal.l5.t": "Risques",
    "goal.l5.d": "Matrices de risques : décider quoi traiter en premier.",
    "about.photo.alt": "Portrait de Justine, souriante, en chemise bleue claire, accoudée à une table en bois.",
    "voice.photo.alt": "Justine prenant la parole derrière un pupitre, devant la bannière du Concours national d'art oratoire Ô féminin.",
    "voice.caption": "Au Concours national d'art oratoire Ô féminin",
    "goal.alt": "Justine assise en tailleur avec un ordinateur portable, devant un mur de schémas réseau, de normes et de matrices de risques reliés à sa tête par des câbles colorés. Légende : « sudo make me analyst GRC ».",
    "about.title": "Qui suis-je ?",
    "stat.cert": "certifications : CompTIA Security+ et Junior GRC Analyst",
    "stat.prizes": "distinctions en écriture et en art oratoire",
    "stat.langs": "langues de travail : français et anglais",
    "langs.l1": "Français (langue maternelle)",
    "langs.l2": "Anglais (courant)",
    "about.p1":
      "Je suis licenciée en cybersécurité (École Supérieure des Affaires, ESA-TG, à Lomé) et titulaire de la certification CompTIA Security+. Mon terrain d'entraînement : les tests d'intrusion en laboratoire, l'analyse de vulnérabilités, les réseaux et le contrôle d'accès, avec un projet de recherche sur le NAC et l'authentification 802.1X.",
    "about.p2":
      "Ce qui m'attire maintenant, c'est le point de rencontre entre la technique, l'analyse des risques et la GRC (gouvernance, risques et conformité). J'ai aussi une vie en dehors des terminaux : je prends la parole en public et j'écris.",
    "skills.title": "Compétences",
    "skills.cyber.t": "Cybersécurité",
    "skills.cyber.d": "Analyse de vulnérabilités, tests d'intrusion en laboratoire, Kali Linux, Metasploit, Nessus",
    "skills.sys.t": "Systèmes et programmation",
    "skills.sys.d": "Linux, Python, SQL, HTML/PHP",
    "skills.net.t": "Réseaux et sécurité",
    "skills.net.d": "TCP/IP, LAN/WAN, VLAN, contrôle d'accès réseau, IEEE 802.1X, NAC",
    "langs.title": "Langues",
    "langs.d": "Français (langue maternelle), anglais (courant)",
    "path.title": "Parcours",
    "path.work": "Expérience",
    "path.edu": "Formation",
    "cert.title": "Certifications",
    "cert.verify": "Vérifier le certificat",
    "projects.title": "Projets",
    "projects.intro":
      "Mes projets viennent directement de mon GitHub : quand j'en publie un, il apparaît ici.",
    "filter.all": "Tous",
    "filter.label": "Filtrer les projets par catégorie",
    "projects.loading": "Chargement depuis GitHub…",
    "projects.offline": "GitHub ne répond pas pour le moment. Voici mes projets principaux.",
    "projects.empty.grc": "Pas encore de projet GRC publié. Le premier arrive.",
    "projects.empty": "Pas encore de projet dans cette catégorie.",
    "projects.repo": "Voir sur GitHub",
    "projects.soon": "Dépôt GitHub à venir",
    "projects.site": "Voir le site",
    "voice.title": "Ma voix",
    "voice.intro": "La cybersécurité demande de bien expliquer. J'ai appris à le faire à l'oral comme à l'écrit.",
    "voice.speak": "À l'oral",
    "voice.write": "À l'écrit",
    "blog.title": "Blog",
    "blog.intro": "Notes sur la cybersécurité, la GRC et ce que j'apprends en route.",
    "blog.loading": "Chargement des articles…",
    "blog.empty": "Le premier article arrive bientôt.",
    "blog.read": "Lire l'article",
    "blog.close": "Fermer",
    "contact.title": "Contact",
    "contact.intro": "Un stage, une question, une collaboration ? Écris-moi.",
    "contact.mail": "Écrire un e-mail",
    "contact.copy": "Copier l'adresse",
    "contact.copied": "Adresse copiée",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.cv": "Télécharger mon CV (PDF)",
    "footer.note": "Site statique, sans cookies ni traceurs.",
    "footer.security": "Contact sécurité",
    "time.now": "à l'instant",
  },
  en: {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.path": "Journey",
    "nav.projects": "Projects",
    "nav.voice": "My voice",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.role": "Cybersecurity graduate, heading into GRC",
    "hero.lead":
      "I'm specialising in cybersecurity, from networks to risk governance, and I like explaining clearly what I do.",
    "hero.cta.projects": "See my projects",
    "hero.cta.cv": "Download my CV",
    "hero.now": "Network technician internship, Lotié Télécom (2026)",
    "hero.badge": "CompTIA Security+ certified (May 2026)",
    "hero.live": "Last GitHub activity: {when}",
    "hero.photo": "Portrait of Justine Nutsule",
    "goal.title": "My goal",
    "goal.p1": "Becoming a GRC analyst: putting my cybersecurity foundation to work for governance, standards and risk analysis.",
    "goal.p2": "Cybersecurity, standards, audits, risk matrices: I'm building both halves of the job, the technical and the governance.",
    "goal.l1.t": "Cybersecurity",
    "goal.l1.d": "Penetration testing, vulnerability analysis, Security+: protecting systems.",
    "goal.l2.t": "Networking",
    "goal.l2.d": "Diagrams, VLANs, 802.1X access control: where I train.",
    "goal.l3.t": "Standards",
    "goal.l3.d": "ISO, NIST: the frameworks that structure security.",
    "goal.l4.t": "Audit",
    "goal.l4.d": "Checklists and controls: checking that the rules are actually applied.",
    "goal.l5.t": "Risk",
    "goal.l5.d": "Risk matrices: deciding what to tackle first.",
    "about.photo.alt": "Portrait of Justine, smiling, in a light blue shirt, leaning on a wooden table.",
    "voice.photo.alt": "Justine speaking at a lectern, in front of the banner of the national women's public speaking contest (Concours national d'art oratoire Ô féminin).",
    "voice.caption": "At the “Ô féminin” national public speaking contest",
    "goal.alt": "Justine sitting cross-legged with a laptop in front of a wall of network diagrams, standards and risk matrices connected to her head by colourful cables. Caption: sudo make me analyst GRC.",
    "about.title": "About me",
    "stat.cert": "certifications: CompTIA Security+ and Junior GRC Analyst",
    "stat.prizes": "awards in writing and public speaking",
    "stat.langs": "working languages: French and English",
    "langs.l1": "French (native)",
    "langs.l2": "English (fluent)",
    "about.p1":
      "I hold a bachelor's degree in cybersecurity (École Supérieure des Affaires, ESA-TG, in Lomé) and the CompTIA Security+ certification. My training ground: lab penetration testing, vulnerability analysis, networks and access control, with a research project on NAC and 802.1X authentication.",
    "about.p2":
      "What draws me now is where technology meets risk analysis and GRC (governance, risk and compliance). I also have a life outside the terminal: I speak in public and I write.",
    "skills.title": "Skills",
    "skills.cyber.t": "Cybersecurity",
    "skills.cyber.d": "Vulnerability analysis, lab penetration testing, Kali Linux, Metasploit, Nessus",
    "skills.sys.t": "Systems and programming",
    "skills.sys.d": "Linux, Python, SQL, HTML/PHP",
    "skills.net.t": "Networking and security",
    "skills.net.d": "TCP/IP, LAN/WAN, VLAN, network access control, IEEE 802.1X, NAC",
    "langs.title": "Languages",
    "langs.d": "French (native), English (fluent)",
    "path.title": "Journey",
    "path.work": "Work",
    "path.edu": "Education",
    "cert.title": "Certifications",
    "cert.verify": "Verify the certificate",
    "projects.title": "Projects",
    "projects.intro":
      "My projects come straight from my GitHub: when I publish one, it shows up here.",
    "filter.all": "All",
    "filter.label": "Filter projects by category",
    "projects.loading": "Loading from GitHub…",
    "projects.offline": "GitHub isn't responding right now. Here are my main projects.",
    "projects.empty.grc": "No GRC project published yet. The first one is coming.",
    "projects.empty": "No project in this category yet.",
    "projects.repo": "View on GitHub",
    "projects.soon": "GitHub repository coming soon",
    "projects.site": "Visit the site",
    "voice.title": "My voice",
    "voice.intro": "Cybersecurity needs good explanations. I learned to give them out loud and on the page.",
    "voice.speak": "Spoken",
    "voice.write": "Written",
    "blog.title": "Blog",
    "blog.intro": "Notes on cybersecurity, GRC and what I'm learning along the way.",
    "blog.loading": "Loading articles…",
    "blog.empty": "The first article is coming soon.",
    "blog.read": "Read the article",
    "blog.close": "Close",
    "contact.title": "Contact",
    "contact.intro": "An internship, a question, a collaboration? Write to me.",
    "contact.mail": "Send an email",
    "contact.copy": "Copy the address",
    "contact.copied": "Address copied",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.cv": "Download my CV (PDF, French)",
    "footer.note": "Static site, no cookies, no trackers.",
    "footer.security": "Security contact",
    "time.now": "just now",
  },
};

// Mini lecteur Markdown SÛR : il construit des éléments DOM avec textContent,
// il n'utilise jamais innerHTML, donc aucun HTML ou script écrit dans un article ne peut s'exécuter.

const INLINE = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|\[[^\]\n]+\]\([^)\s]+\))/g;

function safeUrl(raw) {
  try {
    const u = new URL(raw, window.location.href);
    return u.protocol === "https:" || u.protocol === "http:" ? u.href : null;
  } catch {
    return null;
  }
}

function inline(text, parent) {
  text.split(INLINE).forEach((part) => {
    if (!part) return;
    let m;
    if ((m = part.match(/^\*\*([^*]+)\*\*$/))) {
      const el = document.createElement("strong");
      el.textContent = m[1];
      parent.append(el);
    } else if ((m = part.match(/^\*([^*]+)\*$/))) {
      const el = document.createElement("em");
      el.textContent = m[1];
      parent.append(el);
    } else if ((m = part.match(/^`([^`]+)`$/))) {
      const el = document.createElement("code");
      el.textContent = m[1];
      parent.append(el);
    } else if ((m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/))) {
      const href = safeUrl(m[2]);
      if (href) {
        const a = document.createElement("a");
        a.textContent = m[1];
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer nofollow";
        parent.append(a);
      } else {
        parent.append(document.createTextNode(m[1]));
      }
    } else {
      parent.append(document.createTextNode(part));
    }
  });
}

function parseFrontMatter(raw) {
  const meta = {};
  let body = raw.replace(/\r\n/g, "\n");
  const m = body.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) {
    m[1].split("\n").forEach((line) => {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
    });
    body = body.slice(m[0].length);
  }
  return { meta, body };
}

function renderMarkdown(src) {
  const frag = document.createDocumentFragment();
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (line.startsWith("```")) {
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
      i++;
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = buf.join("\n");
      pre.append(code);
      frag.append(pre);
      continue;
    }

    let m;
    if ((m = line.match(/^(#{1,3})\s+(.*)$/))) {
      const el = document.createElement("h" + (m[1].length + 1));
      inline(m[2], el);
      frag.append(el);
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ""));
      const bq = document.createElement("blockquote");
      inline(buf.join(" "), bq);
      frag.append(bq);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const list = document.createElement(ordered ? "ol" : "ul");
      const re = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      while (i < lines.length && re.test(lines[i])) {
        const li = document.createElement("li");
        inline(lines[i].replace(re, ""), li);
        list.append(li);
        i++;
      }
      frag.append(list);
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,3}\s|>\s?|```|\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i])
    ) buf.push(lines[i++]);
    const p = document.createElement("p");
    inline(buf.join(" "), p);
    frag.append(p);
  }
  return frag;
}

// Animations au défilement. Rien ici ne touche au contenu : seulement des classes
// et des variables CSS. Si l'utilisateur a demandé "moins d'animations", tout est affiché d'un coup.

const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
let io = null;

function observe(scope = document) {
  const els = scope.querySelectorAll("[data-reveal]:not(.in)");
  els.forEach((el) => {
    const i = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.setProperty("--i", String(i % 6));
  });
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  if (!io) {
    io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
  }
  els.forEach((el) => io.observe(el));
}

function onScroll() {
  const y = window.scrollY || 0;
  const max = Math.max(1, root.scrollHeight - window.innerHeight);
  root.style.setProperty("--progress", Math.min(1, y / max).toFixed(4));
  root.style.setProperty("--scroll-y", y.toFixed(1));
  const tl = document.getElementById("path-list");
  if (tl) {
    const r = tl.getBoundingClientRect();
    const p = (window.innerHeight * 0.65 - r.top) / Math.max(1, r.height);
    tl.style.setProperty("--tl", Math.min(1, Math.max(0, p)).toFixed(3));
  }
}

function initFx() {
  window.__fxReady = true;
  if (reduce) {
    root.style.setProperty("--tl", "1");
    return;
  }
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => { onScroll(); ticking = false; });
    },
    { passive: true }
  );
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  // Lien de navigation actif selon la section visible
  if ("IntersectionObserver" in window) {
    const links = new Map();
    document.querySelectorAll("#site-nav a").forEach((a) => links.set(a.getAttribute("href"), a));
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((a) => a.removeAttribute("aria-current"));
          const a = links.get("#" + en.target.id);
          if (a) a.setAttribute("aria-current", "true");
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
  }
}




const API = "https://api.github.com";
const $ = (sel, root = document) => root.querySelector(sel);

// ---------- Utilitaires sûrs (jamais d'innerHTML avec des données externes) ----------
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === "class") el.className = v;
    else if (k === "text") el.textContent = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  children.flat().forEach((c) => c != null && el.append(c.nodeType ? c : document.createTextNode(c)));
  return el;
}

function store(kind, key, value) {
  try {
    const s = kind === "local" ? window.localStorage : window.sessionStorage;
    if (value === undefined) return s.getItem(key);
    s.setItem(key, value);
  } catch {
    return null;
  }
  return null;
}

function httpsUrl(raw, prefix) {
  try {
    const u = new URL(raw);
    if (u.protocol !== "https:") return null;
    if (prefix && !u.href.startsWith(prefix)) return null;
    return u.href;
  } catch {
    return null;
  }
}

// ---------- Langue ----------
let lang = store("local", "lang") === "en" ? "en" : "fr";
const t = (key) => I18N[lang][key] ?? I18N.fr[key] ?? key;
const tr = (obj) => (obj ? obj[lang] ?? obj.fr : "");

function applyStaticText() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-label]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nLabel)));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.title =
    lang === "fr"
      ? "Justine Nutsule · Cybersécurité et GRC"
      : "Justine Nutsule · Cybersecurity and GRC";
}

// ---------- Compétences en pastilles ----------
function renderSkills() {
  const group = (title, items) =>
    h("div", { class: "skill-group", "data-reveal": "" }, h("h3", { text: title }), h("ul", { class: "pills" }, items.map((x) => h("li", { text: x }))));
  $("#skills").replaceChildren(
    ...SKILLS.map((g) => group(t(g.key), g.items[lang])),
    group(t("langs.title"), [t("langs.l1"), t("langs.l2")])
  );
}

// ---------- Certifications ----------
function shieldIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "cert-icon");
  svg.setAttribute("viewBox", "0 0 48 48");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  ["M24 4 L40 10 V22 C40 33 33 41 24 44 C15 41 8 33 8 22 V10 Z", "M16 24 L22 30 L33 18"].forEach((d) => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    p.setAttribute("pathLength", "1");
    svg.append(p);
  });
  return svg;
}
function renderCerts() {
  $("#certs").replaceChildren(
    ...CERTS.map((c) =>
      h(
        "article",
        { class: "cert", "data-reveal": "pop" },
        shieldIcon(),
        h(
          "div",
          {},
          h("h3", { text: tr(c.title) }),
          h("p", { class: "cert-meta", text: c.issuer + " · " + tr(c.date) }),
          c.note ? h("p", { class: "cert-note", text: tr(c.note) }) : null,
          c.verify && httpsUrl(c.verify)
            ? h("p", { class: "cert-link" }, h("a", { href: httpsUrl(c.verify), target: "_blank", rel: "noopener noreferrer", text: t("cert.verify") }))
            : null
        )
      )
    )
  );
}

// ---------- Parcours, compétences, voix ----------
function renderPath() {
  const list = $("#path-list");
  list.replaceChildren(
    ...PATH.map((item) =>
      h(
        "li",
        { class: "step step-" + item.kind + (item.featured ? " step-featured" : ""), "data-reveal": "" },
        h("p", { class: "step-date", text: tr(item.date) }),
        h(
          "div",
          { class: "step-body" },
          h("p", { class: "step-kind", text: t(item.kind === "work" ? "path.work" : "path.edu") }, null),
          h("h3", { text: tr(item.title) }),
          h("p", { class: "step-org", text: tr(item.org) }),
          item.points[lang]?.length ? h("ul", {}, item.points[lang].map((p) => h("li", { text: p }))) : null
        )
      )
    )
  );
}

function renderVoice() {
  $("#voice-speak").replaceChildren(...VOICE.speak[lang].map((x) => h("li", { text: x, "data-reveal": "" })));
  $("#voice-write").replaceChildren(...VOICE.write[lang].map((x) => h("li", { text: x, "data-reveal": "" })));
}

// ---------- Projets (GitHub = base de données) ----------
let repos = null; // null = chargement, [] = aucun, false = erreur
let activeCat = "all";

async function fetchRepos() {
  const cacheKey = "repos:" + CONFIG.githubUser;
  const cached = store("session", cacheKey);
  if (cached) {
    try {
      const { at, data } = JSON.parse(cached);
      if (Date.now() - at < 10 * 60 * 1000) return data;
    } catch { /* cache illisible, on l'ignore */ }
  }
  const res = await fetch(
    `${API}/users/${encodeURIComponent(CONFIG.githubUser)}/repos?per_page=100&sort=pushed`,
    { headers: { Accept: "application/vnd.github+json" } }
  );
  if (!res.ok) throw new Error("GitHub " + res.status);
  const data = await res.json();
  store("session", cacheKey, JSON.stringify({ at: Date.now(), data }));
  return data;
}

function relativeTime(iso) {
  const diff = (new Date(iso).getTime() - Date.now()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
  const steps = [
    ["year", 31536000], ["month", 2592000], ["week", 604800],
    ["day", 86400], ["hour", 3600], ["minute", 60],
  ];
  for (const [unit, secs] of steps) {
    if (Math.abs(diff) >= secs) return rtf.format(Math.round(diff / secs), unit);
  }
  return t("time.now");
}

function renderLive() {
  const el = $("#live");
  if (!Array.isArray(repos) || !repos.length) { el.hidden = true; return; }
  const latest = repos.map((r) => r.pushed_at).filter(Boolean).sort().pop();
  if (!latest) { el.hidden = true; return; }
  el.textContent = t("hero.live").replace("{when}", relativeTime(latest));
  el.hidden = false;
}

function githubProjects() {
  if (!Array.isArray(repos)) return [];
  return repos
    .filter((r) => !r.fork && !r.archived && (r.topics || []).includes(CONFIG.topicPortfolio))
    .map((r) => {
      const topics = r.topics || [];
      const cat = CATEGORIES.find((c) => c.topics.some((x) => topics.includes(x)));
      const hidden = new Set([CONFIG.topicPortfolio, ...CATEGORIES.flatMap((c) => c.topics)]);
      return {
        cat: cat ? cat.id : null,
        title: r.name.replace(/[-_]+/g, " "),
        text: (r.description || "").slice(0, 240),
        tags: [r.language, ...topics.filter((x) => !hidden.has(x))].filter(Boolean).slice(0, 5),
        url: httpsUrl(r.html_url, "https://github.com/"),
        site: r.homepage ? httpsUrl(r.homepage) : null,
      };
    });
}

function renderFilters() {
  const bar = $("#filters");
  const make = (id, label) =>
    h("button", { type: "button", class: "chip", "aria-pressed": String(activeCat === id), "data-cat": id, text: label });
  bar.replaceChildren(make("all", t("filter.all")), ...CATEGORIES.map((c) => make(c.id, tr(c))));
}

function renderProjects() {
  const grid = $("#projects-grid");
  const note = $("#projects-note");
  note.hidden = true;

  if (repos === null) {
    note.textContent = t("projects.loading");
    note.hidden = false;
  } else if (repos === false) {
    note.textContent = t("projects.offline");
    note.hidden = false;
  }

  const all = [
    ...FEATURED.map((f) => ({
      cat: f.cat,
      title: tr(f.title),
      text: tr(f.text),
      tags: f.tags,
      url: f.url ? httpsUrl(f.url, "https://github.com/") : null,
      site: null,
    })),
    ...githubProjects(),
  ];
  const shown = all.filter((p) => activeCat === "all" || p.cat === activeCat);

  if (!shown.length) {
    const key = activeCat === "grc" ? "projects.empty.grc" : "projects.empty";
    grid.replaceChildren(h("p", { class: "empty", text: t(key) }));
    return;
  }

  grid.replaceChildren(
    ...shown.map((p) => {
      const cat = CATEGORIES.find((c) => c.id === p.cat);
      return h(
        "article",
        { class: "project cat-" + (p.cat || "none"), "data-reveal": "pop" },
        cat ? h("p", { class: "project-cat", text: tr(cat) }) : null,
        h("h3", { text: p.title }),
        p.text ? h("p", { class: "project-text", text: p.text }) : null,
        p.tags.length ? h("p", { class: "project-tags", text: p.tags.join(", ") }) : null,
        h(
          "p",
          { class: "project-links" },
          p.url
            ? h("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", text: t("projects.repo") })
            : h("span", { class: "soon", text: t("projects.soon") }),
          p.site ? h("a", { href: p.site, target: "_blank", rel: "noopener noreferrer", text: t("projects.site") }) : null
        )
      );
    })
  );
}

// ---------- Blog (les articles sont des fichiers .md dans le dossier blog/ du dépôt) ----------
let posts = null;
const SAFE_NAME = /^[a-z0-9][a-z0-9-]*\.md$/i;

async function listPostFiles() {
  try {
    const res = await fetch(
      `${API}/repos/${encodeURIComponent(CONFIG.githubUser)}/${encodeURIComponent(CONFIG.portfolioRepo)}/contents/blog`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (res.ok) {
      const files = await res.json();
      return files.filter((f) => f.type === "file" && SAFE_NAME.test(f.name)).map((f) => f.name);
    }
  } catch { /* on tente la liste de secours */ }
  const res = await fetch("blog/index.json");
  if (!res.ok) return [];
  const list = await res.json();
  return list.filter((n) => typeof n === "string" && SAFE_NAME.test(n));
}

async function loadPosts() {
  const names = (await listPostFiles()).slice(0, 40);
  const loaded = await Promise.all(
    names.map(async (name) => {
      try {
        const res = await fetch("blog/" + name);
        if (!res.ok) return null;
        const { meta, body } = parseFrontMatter(await res.text());
        return {
          slug: name.replace(/\.md$/i, ""),
          title: meta.title || name,
          date: /^\d{4}-\d{2}-\d{2}$/.test(meta.date || "") ? meta.date : "",
          summary: meta.summary || "",
          body,
        };
      } catch {
        return null;
      }
    })
  );
  return loaded.filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));
}

function formatDate(iso) {
  if (!iso) return "";
  return new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso + "T12:00:00"));
}

function renderBlog() {
  const list = $("#blog-list");
  if (posts === null) {
    list.replaceChildren(h("p", { class: "empty", text: t("blog.loading") }));
    return;
  }
  if (!posts.length) {
    list.replaceChildren(h("p", { class: "empty", text: t("blog.empty") }));
    return;
  }
  list.replaceChildren(
    ...posts.map((p) =>
      h(
        "article",
        { class: "post", "data-reveal": "" },
        h("p", { class: "post-date", text: formatDate(p.date) }),
        h(
          "div",
          { class: "post-main" },
          h("h3", { text: p.title }),
          p.summary ? h("p", { text: p.summary }) : null,
          h("button", { type: "button", class: "link-button", "data-slug": p.slug, text: t("blog.read") })
        )
      )
    )
  );
}

function openPost(slug) {
  const post = posts && posts.find((p) => p.slug === slug);
  if (!post) return;
  const dlg = $("#reader");
  $("#reader-title").textContent = post.title;
  $("#reader-date").textContent = formatDate(post.date);
  $("#reader-body").replaceChildren(renderMarkdown(post.body));
  if (typeof dlg.showModal === "function") dlg.showModal();
}

// ---------- Contact ----------
function setupContact() {
  const address = `${CONFIG.emailUser}@${CONFIG.emailDomain}`;
  const mail = $("#mail-link");
  mail.href = "mailto:" + address;
  $("#mail-address").textContent = address;

  const copy = $("#copy-mail");
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address);
      const status = $("#copy-status");
      status.textContent = t("contact.copied");
      setTimeout(() => (status.textContent = ""), 2500);
    } catch { /* presse-papiers indisponible : l'adresse reste visible à côté */ }
  });

  const li = httpsUrl(CONFIG.linkedin, "https://www.linkedin.com/");
  const liEl = $("#linkedin-link");
  if (li) { liEl.href = li; liEl.hidden = false; }

  $("#github-link").href = "https://github.com/" + encodeURIComponent(CONFIG.githubUser);
  document.querySelectorAll("[data-cv]").forEach((a) => (a.href = CONFIG.cvPath));
  $("#year").textContent = String(new Date().getFullYear());
}

// ---------- Démarrage ----------
function renderAll() {
  applyStaticText();
  renderSkills();
  renderCerts();
  renderPath();
  renderVoice();
  renderFilters();
  renderProjects();
  renderBlog();
  renderLive();
  observe();
}

// Les repères sur la photo « objectif » s'allument avec la légende (et inversement)
document.addEventListener("mouseover", (e) => {
  const el = e.target.closest("[data-pin]");
  document.querySelectorAll("[data-pin].on").forEach((x) => x.classList.remove("on"));
  if (el && /^[1-5]$/.test(el.dataset.pin)) {
    document.querySelectorAll('[data-pin="' + el.dataset.pin + '"]').forEach((x) => x.classList.add("on"));
  }
});

document.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) { activeCat = chip.dataset.cat; renderFilters(); renderProjects(); observe(); return; }

  const read = e.target.closest("[data-slug]");
  if (read) { openPost(read.dataset.slug); return; }

  const langBtn = e.target.closest(".lang button");
  if (langBtn) { lang = langBtn.dataset.lang === "en" ? "en" : "fr"; store("local", "lang", lang); renderAll(); return; }

  if (e.target.closest("#reader-close")) { $("#reader").close(); return; }

  const dlg = $("#reader");
  if (e.target === dlg) dlg.close(); // clic sur le fond

  const toggle = e.target.closest("#menu-toggle");
  if (toggle) {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    $("#site-nav").classList.toggle("open", !open);
    return;
  }
  if (e.target.closest("#site-nav a")) {
    $("#menu-toggle").setAttribute("aria-expanded", "false");
    $("#site-nav").classList.remove("open");
  }
});

setupContact();
renderAll();
initFx();

fetchRepos()
  .then((data) => { repos = data; })
  .catch(() => { repos = false; })
  .finally(() => { renderProjects(); renderLive(); observe(); });

loadPosts()
  .then((p) => { posts = p; })
  .catch(() => { posts = []; })
  .finally(() => { renderBlog(); observe(); });

})();
