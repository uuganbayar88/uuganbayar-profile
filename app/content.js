// Bilingual content for the profile. Shared, non-textual values are defined
// once below. Optional assets (company logos, work images, LinkedIn) render
// only when a value is set, so nothing shows a placeholder in production.

export const EMAIL = "uuganbayar.ch@gmail.com";
export const EMAIL_HREF = "mailto:" + EMAIL;
export const PHONE_DISPLAY = "+976 9905-4359";
export const PHONE_HREF = "tel:+97699054359";
export const LINKEDIN_URL = ""; // e.g. "https://www.linkedin.com/in/…" — hidden while empty
export const SITE_YEAR = 2026;

// Assets shared by both languages. Logos: { src, h (rendered px height),
// showName } or null to fall back to a text wordmark. Work images: a path
// under /public or null to fall back to abstract card art.
export const LOGOS = {
  flynk: { src: "/logos/flynk.png", h: 40, showName: true },
  steppelink: { src: "/logos/steppelink.png", h: 18, showName: false },
  tapatrip: null,
  mobicom: { src: "/logos/mobicom.png", h: 30, showName: false },
  woovoo: null,
  ehealth: null,
};

export const WORK_IMAGES = {
  skytrip: "/work/skytrip.jpg",
  esan: "/work/esan.jpg",
  tapatrip: "/work/tapatrip.jpg",
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
      h2: ["Технологи.", "Хүмүүс. Бизнес"],
      body: "Мэдээллийн технологийн салбарт 12 гаруй жил ажиллаж, программ хангамжийн инженерээс гүйцэтгэх удирдлагын түвшинд хүрсэн. СтеппеЛинкийн гүйцэтгэх захирлаар 25–30 хүний бүрэлдэхүүнтэй байгууллагын стратеги, төсөв, ашиг алдагдал, бүтээгдэхүүн, хүний нөөцийг удирдсан. Skytrip.mn, Tapatrip.mn аяллын платформуудыг хамтран бүтээж, технологийн боломжийг бизнесийн хэрэгцээтэй холбож, бүтээгдэхүүнийг зах зээлд гаргасан.",
      pillars: [
        { icon: "strategy", title: "Стратеги ба P&L", text: "Байгууллагын стратеги, төсөв, ашиг алдагдал, өдөр тутмын удирдлага." },
        { icon: "product", title: "Бүтээгдэхүүн ба түншлэл", text: "Бизнес төлөвлөгөө, бүтээгдэхүүн хөгжүүлэлт, B2B түншлэл, гэрээ хэлэлцээр." },
        { icon: "teams", title: "Баг ба архитектур", text: "Багийн удирдлага, хүний нөөц, төслийн менежмент, технологийн стратеги." },
      ],
    },
    work: {
      eyebrow: "Сонгосон ажлууд",
      h2: "Сонгосон ажлууд",
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
          href: "https://esan.mn",
          artLabel: "ESAN",
        },
        {
          key: "tapatrip",
          title: "Tapatrip",
          subtitle: "Аялал жуулчлалын OTA",
          text: "OTA-ийн бүтээгдэхүүний стратеги, олон улсын түншлэл, 40 хүртэлх хүнтэй хөндлөн чиг үүргийн багуудыг удирдсан.",
          tags: ["Бүтээгдэхүүний стратеги", "Түншлэл"],
          href: "https://tapatrip.com",
          artLabel: "TAPA",
        },
      ],
    },
    experience: {
      eyebrow: "Туршлага",
      h2: "Карьерын замнал",
      rows: [
        { key: "flynk", org: "Flynk Tech", orgSub: "Skytrip", role: "Үүсгэн байгуулагч, зөвлөх", roleNote: "Хагас цагийн", when: "2024 – одоо", outcome: "Skytrip аяллын платформын бүтээгдэхүүн, технологи, бизнесийн чиглэлийг тодорхойлж, системийн архитектур, түншлэлийн хэлэлцээр, ашигт ажиллагааг хариуцаж байна." },
        { key: "steppelink", org: "SteppeLink", orgSub: null, role: "Гүйцэтгэх захирал", roleNote: "Технологи хариуцсан захирал / Зөвлөх, СтеппеЛинк холдинг · 2024.04 – 2025.01 (давхар үүрэг)", when: "2024.05 – 2026.07", outcome: "25–30 хүнтэй байгууллагын стратеги, төсөв, ашиг алдагдал, бүтээгдэхүүн, хүний нөөцийг удирдаж; AI, AWS үүлэн технологи, кибер аюулгүй байдлын ажлуудыг хэрэгжүүлсэн." },
        { key: "tapatrip", org: "tapatrip", orgSub: null, role: "Бүтээгдэхүүн, бизнес хөгжүүлэлт хариуцсан захирал", roleNote: null, when: "2021.04 – 2023.10", outcome: "Бүтээгдэхүүний чиглэл, бизнес төлөвлөгөө, олон улсын түншлэл, гэрээ хэлэлцээрийг хариуцаж, 40 хүртэлх хүнтэй багуудтай ажилласан." },
        { key: "mobicom", org: "Мобиком Корпораци", orgSub: null, role: "Программ хөгжүүлэгч → Менежер", roleNote: null, when: "2018.06 – 2021.04", outcome: "Хөгжүүлэгчээс менежерийн үүрэгт дэвшиж, багийн үйл ажиллагааг корпорацийн төлөвлөгөөтэй уялдуулан удирдсан." },
        { key: "woovoo", org: "Woovoo LLC", orgSub: null, role: "Ахлах программ хангамжийн инженер", roleNote: null, when: "2017.06 – 2018.06", outcome: "Бүтээгдэхүүний хөгжүүлэлт, системийн архитектур." },
        { key: "ehealth", org: "Цахим эрүүл мэнд төсөл / ШУГТЭ", orgSub: null, role: "Эрүүл мэндийн IT ба инженерийн удирдлага", roleNote: null, when: "2014.02 – 2017.06", outcome: "Ахлах инженер (2014 – 2015) · МТ албаны дарга (2015 – 2016) · Цахим эрүүл мэндийн ахлах инженер (2016 – 2017)." },
      ],
    },
    education: {
      eyebrow: "Боловсрол",
      h2: "Тасралтгүй суралцах",
      items: [
        { title: "Бизнесийн удирдлагын магистр (MBA)", org: "Санхүү Эдийн Засгийн Их Сургууль", when: "2023 – одоо · Суралцаж байгаа" },
        { title: "Мэдээллийн технологийн бакалавр", org: "Шинжлэх Ухаан Технологийн Их Сургууль", when: "2006 – 2011" },
      ],
      certsLabel: "Сургалт, гэрчилгээ",
      certs: [
        ["Agile Project Management", "Google"],
        ["Software Architecture", "Sparx Systems"],
        ["Мэдээллийн аюулгүй байдал: Next-Gen Firewalls", "МУИС"],
        ["CCNA", "Cisco"],
      ],
      languages: [
        ["Монгол", "Төрөлх"],
        ["Англи", "Ахисан түвшин"],
      ],
    },
    contact: {
      eyebrow: "Холбоо барих",
      h2: "Дараагийн зүйлийг хамтдаа бүтээе",
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
      h2: ["Technology.", "People. Business"],
      body: "12+ years in technology, from software engineer to executive leadership. As CEO of SteppeLink I led strategy, budget, P&L, product and people for a 25–30-person organization. I co-built the Skytrip.mn and Tapatrip.mn travel platforms, connecting technology capability with business needs and taking products to market.",
      pillars: [
        { icon: "strategy", title: "Strategy & P&L", text: "Organizational strategy, budgeting, P&L and day-to-day management." },
        { icon: "product", title: "Product & partnerships", text: "Business planning, product development, B2B sales, partnerships and negotiation." },
        { icon: "teams", title: "Teams & architecture", text: "Team leadership, people, project management and technology strategy." },
      ],
    },
    work: {
      eyebrow: "Selected work",
      h2: "Selected work",
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
          href: "https://esan.mn",
          artLabel: "ESAN",
        },
        {
          key: "tapatrip",
          title: "Tapatrip",
          subtitle: "Online travel agency",
          text: "Led OTA product strategy, international partnerships and cross-functional teams of up to 40.",
          tags: ["Product strategy", "Partnerships"],
          href: "https://tapatrip.com",
          artLabel: "TAPA",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      h2: "A career of building",
      rows: [
        { key: "flynk", org: "Flynk Tech", orgSub: "Skytrip", role: "Founder & Advisor", roleNote: "Part-time", when: "2024 – Present", outcome: "Set product, technology and business direction for the Skytrip travel platform; own system architecture, partnership negotiations and profitability." },
        { key: "steppelink", org: "SteppeLink", orgSub: null, role: "Chief Executive Officer", roleNote: "CTO / Advisor, SteppeLink Holding · Apr 2024 – Jan 2025 (overlapping role)", when: "May 2024 – Jul 2026", outcome: "Led strategy, budget, P&L, product and people for a 25–30-person organization; delivered AI, AWS cloud and cybersecurity programs." },
        { key: "tapatrip", org: "tapatrip", orgSub: null, role: "Director of Product & Business Development", roleNote: null, when: "Apr 2021 – Oct 2023", outcome: "Owned product direction, business planning, international partnerships and contract negotiations; worked with teams of up to 40." },
        { key: "mobicom", org: "Mobicom Corporation", orgSub: null, role: "Software Developer → Manager", roleNote: null, when: "Jun 2018 – Apr 2021", outcome: "Progressed from developer to manager, leading team operations aligned with corporate short- and mid-term plans." },
        { key: "woovoo", org: "Woovoo LLC", orgSub: null, role: "Senior Software Engineer", roleNote: null, when: "Jun 2017 – Jun 2018", outcome: "Delivered product development and system architecture." },
        { key: "ehealth", org: "National E-Health Project / State Central Hospital", orgSub: null, role: "Healthcare IT & Engineering Leadership", roleNote: null, when: "Feb 2014 – Jun 2017", outcome: "Senior Engineer (2014 – 2015) · Head of IT (2015 – 2016) · E-Health Senior Software Engineer (2016 – 2017)." },
      ],
    },
    education: {
      eyebrow: "Education",
      h2: "Always learning",
      items: [
        { title: "MBA, Business Administration", org: "University of Finance and Economics", when: "2023 – Present · In progress" },
        { title: "BSc, Information Technology", org: "Mongolian University of Science and Technology", when: "2006 – 2011" },
      ],
      certsLabel: "Training & certificates",
      certs: [
        ["Agile Project Management", "Google"],
        ["Software Architecture", "Sparx Systems"],
        ["Information Security: Next-Gen Firewalls", "National University of Mongolia"],
        ["CCNA", "Cisco"],
      ],
      languages: [
        ["Mongolian", "Native"],
        ["English", "Advanced"],
      ],
    },
    contact: {
      eyebrow: "Contact",
      h2: "Let's build what's next",
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
