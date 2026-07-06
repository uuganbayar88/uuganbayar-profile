// Bilingual content for the profile. `mn` is the original; `en` is from the
// English executive CV. Shared, non-textual values (email compose link) are
// defined once below.

export const EMAIL = "uuganbayar.ch@gmail.com";
// Opens a compose window reliably in the browser (works without a desktop mail client).
export const EMAIL_HREF =
  "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL);
export const PHONE_DISPLAY = "+976 9905-4359";
export const PHONE_HREF = "tel:+97699054359";

export const content = {
  mn: {
    htmlLang: "mn",
    cv: "/CV_Uuganbayar_Executive_MN.pdf",
    toggle: { href: "/en", label: "EN" },
    meta: {
      title: "Чулуунбаатар Ууганбаяр — Гүйцэтгэх захирал · Технологийн удирдагч",
      description:
        "Технологийн салбарт 15+ жил — инженерээс гүйцэтгэх удирдлага хүртэл. OTA платформ, эрүүл мэндийн IT, AI, кибер аюулгүй байдал.",
    },
    brand: ["Ч.", "УУГАНБАЯР"],
    nav: [
      ["#summary", "Танилцуулга"],
      ["#achievements", "Амжилтууд"],
      ["#experience", "Туршлага"],
      ["#education", "Боловсрол"],
      ["#contact", "Холбоо барих"],
    ],
    hero: {
      eyebrow: "Улаанбаатар · Технологи · Удирдлага",
      name: ["Чулуунбаатар", "Ууганбаяр"],
      role: "Гүйцэтгэх захирал · Технологийн удирдагч",
      tag: "Технологи + Бизнес: инженерээс гүйцэтгэх удирдлага хүртэл 15+ жил",
      ctaEmail: "Имэйл илгээх",
      ctaExp: "Туршлагатай танилцах",
      ctaCv: "CV татах",
    },
    stats: [
      ["15+", "жил технологид"],
      ["2", "OTA платформ"],
      ["3", "жил эрүүл мэндийн IT"],
      ["1.5", "жилийн дотор зардалаа нөхөх хэмжээнд"],
    ],
    summary: {
      eyebrow: "Товч танилцуулга",
      h2: "Инженерээс гүйцэтгэх удирдлага хүртэл",
      body:
        "Технологийн салбарт 15+ жил ажилласан, инженерээс гүйцэтгэх удирдлагын түвшинд хүрч ажилласан. Сүүлийн 2 жил 30 хүнтэй технологийн байгууллагыг Гүйцэтгэх захирлаар удирдаж, бүтээгдэхүүний стратеги, технологийн стратеги, санхүү, хууль эрх зүй, хүний нөөцийн тогтолцоог бүрэн хариуцаж байна. Аялал жуулчлалын онлайн платформ (OTA) болон эрүүл мэндийн салбарын мэдээллийн технологид гүнзгий туршлагатай: эмнэлгийн мэдээллийн систем, цахим эрүүл мэнд төслүүд дээр ажилласан. AI, Cloud (AWS), кибер аюулгүй байдлын чиглэлээр байгууллагын түвшний шийдэл хэрэгжүүлсэн. Бизнесийн удирдлагын магистрт (MBA) суралцаж байгаа.",
      langs: "ХЭЛ: МОНГОЛ (ЭХ ХЭЛ) · АНГЛИ (АХИСАН ТҮВШИН, БИЗНЕСИЙН ОРЧИНД)",
    },
    achievements: {
      eyebrow: "Гол амжилтууд",
      h2: "Юу бүтээж, юу удирдсан бэ",
      items: [
        ["Платформ бүтээсэн", "Amadeus GDS болон Trip.com интеграц бүхий онлайн аялалын платформыг (OTA) архитектураас нь эхлэн бүтээж, зах зээлд нэвтрүүлсэн — Монголд цөөхөн хэрэгжсэн түвшний систем."],
        ["Байгууллага удирдсан", "30 хүнтэй байгууллагын бүтэц, карьер ладдер, тэтгэвэр-хуримтлалын хөтөлбөр, гүйцэтгэлийн үнэлгээний тогтолцоог шинээр байгуулж, инженерийн багийн тогтвортой байдлыг хангасан."],
        ["Гэрээ хэлцэл", "B2B түвшний 200 сая – 1 тэрбум ₮-ийн хэмжээтэй технологийн гэрээ хэлцлүүдийг санаачлан удирдаж, үнийн бодлого, эрх зүйн нөхцөлийг бүрэн хариуцсан."],
        ["Кибер аюулгүй байдал", "5 физик байршил дээр аюулгүй байдлын шийдлийг нэвтрүүлж удирдан ажилладаг. AWS үүлэн дэд бүтцийн ноцтой инцидентийг удирдан шийдвэрлэж, санхүүгийн хохирлыг 100% нөхөн төлүүлж, blameless post-mortem соёл, OIDC federation архитектурыг нэвтрүүлсэн."],
        ["AI ба дижитал бүтээгдэхүүн", "Монгол бичгийн OCR болон хөрвүүлэгч, AI хуулбар шалгуурын систем, 1–12-р ангийн сурагчдад зориулсан боловсролын таблет зэрэг дижитал бүтээгдэхүүнүүдийн хөгжүүлэлтийг стратегийн түвшинд удирдсан. Бүтээгдэхүүн үйлчилгээнд тусгайлан зориулагдсан AI туслах."],
      ],
    },
    experience: {
      eyebrow: "Ажлын туршлага",
      h2: "Карьерын маршрут",
      stops: [
        { now: true, when: "2024.05 — ОДОО", title: "Гүйцэтгэх захирал", org: "СтеппеЛинк — Технологи, EdTech, System development, IT service", points: [
          "25 хүнтэй байгууллагын стратеги, санхүү, үйл ажиллагааг бүрэн хариуцаж, жилийн төсөв, хөрөнгө оруулалтын ROI-г удирдаж байна;",
          "ESAN экосистем: 1–12-р ангийн сурагчдад зориулсан боловсролын таблет, монгол бичгийн OCR/AI, хуулбар илрүүлэх систем зэрэг бүтээгдэхүүний портфелийг удирдсан;",
          "Хүний нөөцийн хөгжлийн иж бүрэн тогтолцоо (карьер ладдер, тэтгэвэр-хуримтлал, чадавхи хөгжүүлэх хөтөлбөр) байгуулсан;",
          "AWS үүлэн дэд бүтэц, кибер аюулгүй байдлын бодлогыг олон улсын стандартад нийцүүлэн сайжруулсан.",
        ] },
        { now: true, when: "[2025] — ОДОО", title: "Үүсгэн байгуулагч, Гүйцэтгэх захирал", org: "Flynk Tech — Skytrip аялалын платформ", points: [
          "Amadeus GDS, Hahn Air interline (HR-169) интеграц бүхий OTA платформыг бүтээж, white-label B2B загвараар Монголын аялалын агентлагуудад санал болгож байна;",
          "Бүтээгдэхүүний үнийн стратеги (markup/service fee загвар), борлуулалтын процессыг бүрэн хариуцдаг.",
        ] },
        { now: false, when: "2024.04 — 2025.01", title: "Технологи хариуцсан захирал / Зөвлөх", org: "СтеппеЛинк", points: [
          "Технологийн стратеги, архитектурын шийдвэр, инженерийн багийн удирдлагыг хариуцаж, Гүйцэтгэх захирлын үүрэгт шилжсэн / давхар хариуцсан.",
        ] },
        { now: false, when: "2021.04 — 2023.10", title: "Бүтээгдэхүүн, бизнес хөгжүүлэлт хариуцсан захирал", org: "Tapatrip — Аялал жуулчлалын OTA", points: [
          "Аялалын онлайн платформын бүтээгдэхүүний стратеги, бизнес хөгжүүлэлтийг удирдаж, олон улсын түншлэлүүдийг хариуцсан;",
          "40 хүртэлх хүнтэй хөндлөн чиг үүргийн багуудыг Agile/Scrum арга зүйгээр удирдсан;",
          "Технологийн архитектур, шийдэл болон ирээдүйн чиг хандлага, төслийн менежментийг хариуцаж ажилласан.",
        ] },
        { now: false, when: "2018.06 — 2021.04", title: "Программ хөгжүүлэгч → Менежер", org: "Мобиком Корпораци", points: [
          "Монголын хамгийн том харилцаа холбооны компанид хөгжүүлэгчээс багийн менежер болтлоо өссөн; enterprise түвшний системүүд дээр ажилласан.",
        ] },
        { now: false, when: "2017.06 — 2018.06", title: "Ахлах программ хангамжийн инженер", org: "Woovoo LLC", points: [
          "Бүтээгдэхүүний хөгжүүлэлт, системийн архитектур.",
        ] },
        { now: false, when: "2014.02 — 2017.06", title: "Эрүүл мэндийн салбарын мэдээллийн технологи", org: "Цахим эрүүл мэнд төсөл · Эрүүл мэндийн яам · ШУГТЭмнэлэг", points: [
          "Цахим эрүүл мэнд төсөл — Ахлах программ хангамжийн инженер: эрүүл мэндийн цахим системийн хөгжүүлэлт (2016–2017);",
          "ШУГТЭ — Мэдээллийн технологийн албаны дарга: эмнэлгийн IT дэд бүтэц, багийн удирдлага (2015–2016);",
          "ШУГТЭмнэлэг — Ахлах инженер: эмнэлгийн мэдээллийн систем, тоног төхөөрөмжийн найдвартай ажиллагаа (2014–2015).",
        ] },
      ],
    },
    education: {
      eduEyebrow: "Боловсрол",
      eduH2: "Суурь",
      items: [
        { when: "2023 — ОДОО", title: "Бизнесийн удирдлагын магистр (MBA)", org: "Санхүү Эдийн Засгийн Их Сургууль" },
        { when: "2006 — 2011", title: "Мэдээллийн технологийн бакалавр", org: "Шинжлэх Ухаан Технологийн Их Сургууль" },
      ],
      compEyebrow: "Удирдлагын ур чадвар",
      compH2: "Чадамж",
      competencies: [
        ["Стратеги ба өсөлт", "урт хугацааны стратеги, дижитал шилжилт, бүтээгдэхүүний портфелийн удирдлага"],
        ["Санхүүгийн удирдлага", "жилийн төсөв, ROI тооцоолол, SaaS/B2B ашигт ажиллагааны загвар"],
        ["B2B борлуулалт, гэрээ хэлцэл", "үнийн стратеги, гэрээний эрх зүйн нөхцөл, эрсдэлийн үнэлгээ"],
        ["Технологи", "AI/ML, Cloud (AWS), кибер аюулгүй байдал, Agile/Scrum, enterprise архитектур"],
        ["Хүний нөөц", "байгууллагын бүтэц, карьер хөгжил, гүйцэтгэлийн үнэлгээ, манлайлал"],
      ],
    },
    contact: {
      eyebrow: "Холбоо барих",
      h2: "Ярилцъя",
      location: "Улаанбаатар хот, Монгол",
      fine: "Ч. УУГАНБАЯР · ГҮЙЦЭТГЭХ ЗАХИРАЛ · ТЕХНОЛОГИЙН УДИРДАГЧ",
    },
  },

  en: {
    htmlLang: "en",
    cv: "/CV_Uuganbayar_Executive_EN.pdf",
    toggle: { href: "/", label: "МН" },
    meta: {
      title: "Uuganbayar Chuluunbaatar — Chief Executive Officer · Technology Executive",
      description:
        "Technology executive with 15+ years — from engineer to executive leadership. OTA platforms, healthcare IT, AI, and cybersecurity.",
    },
    brand: ["CH.", "UUGANBAYAR"],
    nav: [
      ["#summary", "Summary"],
      ["#achievements", "Achievements"],
      ["#experience", "Experience"],
      ["#education", "Education"],
      ["#contact", "Contact"],
    ],
    hero: {
      eyebrow: "Ulaanbaatar · Technology · Leadership",
      name: ["Uuganbayar", "Chuluunbaatar"],
      role: "Chief Executive Officer · Technology Executive",
      tag: "Technology + Business: 15+ years from engineer to executive leadership",
      ctaEmail: "Send email",
      ctaExp: "View experience",
      ctaCv: "Download CV",
    },
    stats: [
      ["15+", "years in tech"],
      ["2", "OTA platforms"],
      ["3", "yrs healthcare IT"],
      ["100%", "incident recovery"],
    ],
    summary: {
      eyebrow: "Executive summary",
      h2: "From engineer to executive leadership",
      body:
        "Technology executive with 15+ years of experience, progressing from software engineer to CEO. Currently leading a 25-person technology organization with full P&L, product strategy, and people responsibility. Deep domain expertise in online travel platforms (OTA) and healthcare IT, including 4 years building hospital information systems and national e-health projects. Hands-on record in AI, cloud infrastructure (AWS), and cybersecurity at enterprise scale. Currently completing an MBA.",
      langs: "LANGUAGES: MONGOLIAN (NATIVE) · ENGLISH (ADVANCED, WORKING PROFESSIONAL PROFICIENCY)",
    },
    achievements: {
      eyebrow: "Key achievements",
      h2: "What I've built and led",
      items: [
        ["Platform builder", "Architected and launched an online travel agency platform with Amadeus GDS and Hahn Air interline ticketing integration — one of the few systems of this class in Mongolia."],
        ["Organization builder", "Built organizational structure, career ladders, pension/savings program, and performance systems for a 25-person engineering organization, materially improving retention."],
        ["Deal leadership", "Initiated and led B2B technology contracts in the ₮200–300M range, owning pricing strategy, legal terms, and risk assessment end-to-end."],
        ["Cybersecurity", "Led response to a major AWS cloud security incident: achieved 100% financial recovery, instituted blameless post-mortem culture, and drove OIDC federation architecture to eliminate long-lived credentials."],
        ["AI & digital products", "Directed development of Mongolian-script OCR, AI-based diagnostics, and K-12 educational tablet products at portfolio level."],
      ],
    },
    experience: {
      eyebrow: "Professional experience",
      h2: "Career route",
      stops: [
        { now: true, when: "May 2024 — Present", title: "Chief Executive Officer", org: "SteppeLink — Technology & EdTech", points: [
          "Full ownership of strategy, finance, and operations for a 25-person organization; manage annual budget and technology investment ROI;",
          "Lead the ESAN product ecosystem: K-12 educational tablet, Mongolian-script OCR/AI, plagiarism detection platform;",
          "Established comprehensive people-development systems: career ladders, pension/savings program, capability programs;",
          "Upgraded AWS cloud infrastructure and cybersecurity policy toward international standards.",
        ] },
        { now: true, when: "[2025] — Present", title: "Founder & CEO", org: "Flynk Tech — Skytrip Travel Platform", points: [
          "Built an OTA platform with Amadeus GDS and Hahn Air interline (HR-169) integration; offering it as a white-label B2B product to Mongolian travel agencies;",
          "Own product pricing strategy (markup/service-fee model), Ebarimt POS 3.0 tax integration, and the full sales process.",
        ] },
        { now: false, when: "Apr 2024 — Jan 2025", title: "Chief Technology Officer / Advisor", org: "SteppeLink", points: [
          "Owned technology strategy, architecture decisions, and engineering leadership; transitioned into the CEO role.",
        ] },
        { now: false, when: "Apr 2021 — Oct 2023", title: "Director of Product & Business Development", org: "Tapatrip — Online Travel Agency", points: [
          "Led product strategy and business development for an online travel platform, including international partnerships;",
          "Managed cross-functional teams of up to 40 people using Agile/Scrum.",
        ] },
        { now: false, when: "Jun 2018 — Apr 2021", title: "Software Developer → Manager", org: "Mobicom Corporation", points: [
          "Progressed from developer to team manager at Mongolia's largest telecom; delivered enterprise-scale systems.",
        ] },
        { now: false, when: "Jun 2017 — Jun 2018", title: "Senior Software Engineer", org: "Woovoo LLC", points: [
          "Product development and system architecture.",
        ] },
        { now: false, when: "Feb 2014 — Jun 2017", title: "Healthcare IT Experience", org: "National E-Health Project · State Hospital (ШУГТЭ)", points: [
          "National E-Health Project — Senior Software Engineer: developed national digital health systems (2016–2017);",
          "State Central Hospital — Head of IT Department: hospital IT infrastructure and team leadership (2015–2016);",
          "State Central Hospital — Senior Engineer: hospital information systems and equipment reliability (2014–2015).",
        ] },
      ],
    },
    education: {
      eduEyebrow: "Education",
      eduH2: "Foundation",
      items: [
        { when: "2023 — Present", title: "MBA, Business Administration", org: "University of Finance and Economics — GPA 3.5" },
        { when: "2006 — 2011", title: "B.Sc., Information Technology", org: "Mongolian University of Science and Technology" },
      ],
      compEyebrow: "Leadership competencies",
      compH2: "Competencies",
      competencies: [
        ["Strategy & growth", "long-term strategy, digital transformation, product portfolio management"],
        ["Financial management", "annual budgeting, ROI analysis, SaaS/B2B profitability models"],
        ["B2B sales & negotiation", "pricing strategy, contract terms, risk assessment"],
        ["Technology", "AI/ML, cloud (AWS), cybersecurity, Agile/Scrum, enterprise architecture"],
        ["People", "organizational design, career development, performance systems, leadership"],
      ],
    },
    contact: {
      eyebrow: "Contact",
      h2: "Let's talk",
      location: "Ulaanbaatar, Mongolia",
      fine: "CH. UUGANBAYAR · CHIEF EXECUTIVE OFFICER · TECHNOLOGY EXECUTIVE",
    },
  },
};
