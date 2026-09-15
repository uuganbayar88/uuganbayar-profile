// Bilingual content for the profile. Shared, non-textual values are defined
// once below. Optional assets (company logos, work images, LinkedIn) render
// only when a value is set, so nothing shows a placeholder in production.

export const EMAIL = "uuganbayar.ch@gmail.com";
export const EMAIL_HREF = "mailto:" + EMAIL;
export const PHONE_DISPLAY = "+976 9905-4359";
export const PHONE_HREF = "tel:+97699054359";
export const LINKEDIN_URL = ""; // e.g. "https://www.linkedin.com/in/…" — hidden while empty
export const SITE_YEAR = 2026;

// Assets shared by both languages. Set a path under /public to replace the
// fallback rendering (text wordmark or abstract card art).
export const LOGOS = {
  flynk: null,
  steppelink: null,
  tapatrip: null,
  mobicom: null,
  woovoo: null,
  ehealth: null,
};

export const WORK_IMAGES = {
  skytrip: null,
  esan: null,
  cloud: null,
};

export const content = {
  mn: {
    htmlLang: "mn",
    cv: "/CV_Uuganbayar_Executive_MN.pdf",
    toggle: [
      ["/", "MN", true],
      ["/en", "EN", false],
    ],
    meta: {
      title: "Чулуунбаатар Ууганбаяр — Технологи, бизнесийн удирдагч",
      description:
        "SteppeLink-ийн өмнөх CEO, Flynk Tech-ийн үүсгэн байгуулагч. OTA платформ, эрүүл мэндийн IT, AI, cloud чиглэлээр 12+ жилийн туршлага. CTO, Технологийн захирал, Technology GM албан тушаалд нээлттэй.",
    },
    nav: [
      ["#about", "Танилцуулга"],
      ["#work", "Ажлууд"],
      ["#experience", "Туршлага"],
      ["#contact", "Холбоо барих"],
    ],
    hero: {
      name: ["Чулуунбаатар", "Ууганбаяр"],
      role: "Технологи, бизнесийн удирдагч",
      sub: "SteppeLink-ийн өмнөх CEO · Flynk Tech-ийн үүсгэн байгуулагч",
      bio: "Дижитал бүтээгдэхүүн бүтээж, технологийн багуудыг удирдаж, инженерчлэлийг бизнесийн зорилттой холбодог.",
      ctaTalk: "Ярилцъя",
      ctaCv: "CV татах",
      portraitAlt: "Чулуунбаатар Ууганбаярын хөрөг зураг",
    },
    stats: [
      ["12+", "жилийн туршлага"],
      ["2", "OTA платформ"],
      ["5+", "жил удирдлагад"],
      ["17x", "өсөлт"],
    ],
    about: {
      eyebrow: "Танилцуулга",
      h2: ["Технологи.", "Хүмүүс. Бизнес."],
      body: "Программ хангамжийн инженерээс гүйцэтгэх удирдлага хүртэл: бүтээгдэхүүн, технологи, бизнесийн шийдвэрийг нэгтгэдэг.",
      pillars: [
        { icon: "strategy", title: "Стратеги ба P&L", text: "Санааг тогтвортой өсөлт болгох." },
        { icon: "product", title: "Бүтээгдэхүүн ба түншлэл", text: "Хамтын ажиллагаагаар бүтээгдэхүүн бүтээх." },
        { icon: "teams", title: "Баг ба архитектур", text: "Өндөр гүйцэтгэлтэй инженерийн багийг өсгөх." },
      ],
    },
    work: {
      eyebrow: "Сонгосон ажлууд",
      h2: "Сонгосон ажлууд.",
      items: [
        {
          key: "skytrip",
          title: "Skytrip",
          subtitle: "B2B аяллын платформ",
          text: "Amadeus GDS, Trip.com интеграц бүхий white-label OTA платформыг бүтээсэн.",
          tags: ["Amadeus GDS", "Trip.com"],
          href: "https://skytrip.mn",
          artLabel: "SKY",
        },
        {
          key: "esan",
          title: "ESAN",
          subtitle: "AI ба боловсрол",
          text: "Монгол бичгийн OCR, хуулбар илрүүлэлт, боловсролын таблет зэрэг портфелийг удирдсан.",
          tags: ["AI / OCR", "EdTech"],
          href: null,
          artLabel: "ESAN",
        },
        {
          key: "cloud",
          title: "Үүлэн аюулгүй байдал",
          subtitle: "AWS инцидентийн хариу арга хэмжээ",
          text: "Маргаантай AWS зардлыг 100% нөхөн төлүүлж, OIDC federation-оор хандалтыг бэхжүүлсэн.",
          tags: ["AWS", "OIDC"],
          href: null,
          artLabel: "CLOUD",
        },
      ],
    },
    experience: {
      eyebrow: "Туршлага",
      h2: "Бүтээлийн замнал.",
      rows: [
        { key: "flynk", org: "Flynk Tech", orgSub: "Skytrip", role: "Үүсгэн байгуулагч, Гүйцэтгэх захирал", roleNote: "Хагас цагийн · зөвлөх", when: "2025 – одоо", outcome: "B2B аяллын платформыг зах зээлд гаргаж, бүтээгдэхүүний чиглэл, үнэ, түншлэлийг удирдаж байна." },
        { key: "steppelink", org: "SteppeLink", orgSub: null, role: "Гүйцэтгэх захирал", roleNote: "Технологи хариуцсан захирал / Зөвлөх · 2024.04 – 2025.01 (давхар үүрэг)", when: "2024.05 – 2026.07", outcome: "30 хүнтэй байгууллагын стратеги, P&L, үйл ажиллагааг удирдсан." },
        { key: "tapatrip", org: "tapatrip", orgSub: null, role: "Бүтээгдэхүүн, бизнес хөгжүүлэлт хариуцсан захирал", roleNote: null, when: "2021.04 – 2023.10", outcome: "OTA стратеги, түншлэл, 40 хүртэлх хүнтэй хөндлөн чиг үүргийн багуудыг удирдсан." },
        { key: "mobicom", org: "Мобиком Корпораци", orgSub: null, role: "Программ хөгжүүлэгч → Багийн менежер", roleNote: null, when: "2018.06 – 2021.04", outcome: "Enterprise түвшний харилцаа холбооны системүүд хөгжүүлж, багийн удирдлагад дэвшсэн." },
        { key: "woovoo", org: "Woovoo LLC", orgSub: null, role: "Ахлах программ хангамжийн инженер", roleNote: null, when: "2017.06 – 2018.06", outcome: "Бүтээгдэхүүний хөгжүүлэлт, системийн архитектур." },
        { key: "ehealth", org: "Цахим эрүүл мэнд төсөл / ШУГТЭ", orgSub: null, role: "Эрүүл мэндийн IT ба инженерийн удирдлага", roleNote: null, when: "2014.02 – 2017.06", outcome: "Ахлах инженер (2014 – 2015) · МТ албаны дарга (2015 – 2016) · Цахим эрүүл мэндийн ахлах инженер (2016 – 2017)." },
      ],
    },
    education: {
      eyebrow: "Боловсрол",
      h2: "Тасралтгүй суралцах.",
      items: [
        { title: "Бизнесийн удирдлагын магистр (MBA)", org: "Санхүү Эдийн Засгийн Их Сургууль", when: "2023 – одоо · Суралцаж байгаа" },
        { title: "Мэдээллийн технологийн бакалавр", org: "Шинжлэх Ухаан Технологийн Их Сургууль", when: "2006 – 2011" },
      ],
      languages: [
        ["Монгол", "Эх хэл"],
        ["Англи", "Ахисан түвшин, бизнесийн орчинд"],
      ],
    },
    contact: {
      eyebrow: "Холбоо барих",
      h2: "Дараагийн зүйлийг хамтдаа бүтээе.",
      note: "CTO, Технологийн захирал, Technology GM албан тушаалд нээлттэй.",
      ctaEmail: "Холбогдох",
      location: "Улаанбаатар, Монгол",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      name: "Чулуунбаатар Ууганбаяр",
      backToTop: "Дээш буцах",
    },
  },

  en: {
    htmlLang: "en",
    cv: "/CV_Uuganbayar_Executive_EN.pdf",
    toggle: [
      ["/", "MN", false],
      ["/en", "EN", true],
    ],
    meta: {
      title: "Uuganbayar Chuluunbaatar — Technology & Business Executive",
      description:
        "Former CEO of SteppeLink and founder of Flynk Tech. 12+ years across OTA platforms, healthcare IT, AI and cloud. Open to CTO, Technology Director and Technology General Manager roles.",
    },
    nav: [
      ["#about", "About"],
      ["#work", "Selected work"],
      ["#experience", "Experience"],
      ["#contact", "Contact"],
    ],
    hero: {
      name: ["Uuganbayar", "Chuluunbaatar"],
      role: "Technology & Business Executive",
      sub: "Former CEO, SteppeLink · Founder, Flynk Tech",
      bio: "I build digital products, lead technology teams and connect engineering with business priorities.",
      ctaTalk: "Let's talk",
      ctaCv: "Download CV",
      portraitAlt: "Portrait of Uuganbayar Chuluunbaatar",
    },
    stats: [
      ["12+", "years of experience"],
      ["2", "OTA platforms"],
      ["5+", "years in management"],
      ["17x", "growth"],
    ],
    about: {
      eyebrow: "About",
      h2: ["Technology.", "People. Business."],
      body: "From software engineering to executive leadership, I bring product, technology and commercial decisions together.",
      pillars: [
        { icon: "strategy", title: "Strategy & P&L", text: "Turn ideas into sustainable growth." },
        { icon: "product", title: "Product & partnerships", text: "Build products through collaboration." },
        { icon: "teams", title: "Teams & architecture", text: "Scale high-performing engineering teams." },
      ],
    },
    work: {
      eyebrow: "Selected work",
      h2: "Selected work.",
      items: [
        {
          key: "skytrip",
          title: "Skytrip",
          subtitle: "B2B travel platform",
          text: "Built a white-label OTA integrating Amadeus GDS and Trip.com.",
          tags: ["Amadeus GDS", "Trip.com"],
          href: "https://skytrip.mn",
          artLabel: "SKY",
        },
        {
          key: "esan",
          title: "ESAN",
          subtitle: "AI & education",
          text: "Led a portfolio spanning Mongolian-script OCR, plagiarism detection and educational tablets.",
          tags: ["AI / OCR", "EdTech"],
          href: null,
          artLabel: "ESAN",
        },
        {
          key: "cloud",
          title: "Cloud security",
          subtitle: "AWS incident response",
          text: "Recovered 100% of disputed AWS charges and strengthened access with OIDC federation.",
          tags: ["AWS", "OIDC"],
          href: null,
          artLabel: "CLOUD",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      h2: "A career of building.",
      rows: [
        { key: "flynk", org: "Flynk Tech", orgSub: "Skytrip", role: "Founder & CEO", roleNote: "Part-time / advisory", when: "2025 – Present", outcome: "Launched a B2B travel platform; lead product direction, pricing and partnerships." },
        { key: "steppelink", org: "SteppeLink", orgSub: null, role: "Chief Executive Officer", roleNote: "CTO / Advisor · Apr 2024 – Jan 2025 (overlapping role)", when: "May 2024 – Jul 2026", outcome: "Led a 30-person organization across strategy, P&L and operations." },
        { key: "tapatrip", org: "tapatrip", orgSub: null, role: "Director of Product & Business Development", roleNote: null, when: "Apr 2021 – Oct 2023", outcome: "Led OTA strategy, partnerships and cross-functional teams of up to 40." },
        { key: "mobicom", org: "Mobicom Corporation", orgSub: null, role: "Software Developer → Team Manager", roleNote: null, when: "Jun 2018 – Apr 2021", outcome: "Delivered enterprise telecom systems and progressed into team leadership." },
        { key: "woovoo", org: "Woovoo LLC", orgSub: null, role: "Senior Software Engineer", roleNote: null, when: "Jun 2017 – Jun 2018", outcome: "Delivered product development and system architecture." },
        { key: "ehealth", org: "National E-Health Project / State Central Hospital", orgSub: null, role: "Healthcare IT & Engineering Leadership", roleNote: null, when: "Feb 2014 – Jun 2017", outcome: "Senior Engineer (2014 – 2015) · Head of IT (2015 – 2016) · E-Health Senior Software Engineer (2016 – 2017)." },
      ],
    },
    education: {
      eyebrow: "Education",
      h2: "Always learning.",
      items: [
        { title: "MBA, Business Administration", org: "University of Finance and Economics", when: "2023 – Present · In progress" },
        { title: "BSc, Information Technology", org: "Mongolian University of Science and Technology", when: "2006 – 2011" },
      ],
      languages: [
        ["Mongolian", "Native"],
        ["English", "Advanced professional proficiency"],
      ],
    },
    contact: {
      eyebrow: "Contact",
      h2: "Let's build what's next.",
      note: "Open to CTO, Technology Director and Technology General Manager opportunities.",
      ctaEmail: "Get in touch",
      location: "Ulaanbaatar, Mongolia",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      name: "Uuganbayar Chuluunbaatar",
      backToTop: "Back to top",
    },
  },
};
