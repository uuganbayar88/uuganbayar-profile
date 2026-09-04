// Bilingual content for the profile. `mn` is the original; `en` is from the
// English executive CV. Shared, non-textual values (email compose link) are
// defined once below.

export const EMAIL = "uuganbayar.ch@gmail.com";
export const EMAIL_HREF = "mailto:" + EMAIL;
export const PHONE_DISPLAY = "+976 9905-4359";
export const PHONE_HREF = "tel:+97699054359";

export const content = {
  mn: {
    htmlLang: "mn",
    cv: "/CV_Uuganbayar_Executive_MN.pdf",
    toggle: { href: "/en", label: "EN" },
    meta: {
      title: "Чулуунбаатар Ууганбаяр — Технологийн удирдагч · SteppeLink-ийн өмнөх CEO",
      description:
        "Технологийн салбарт 12+ жил — инженерээс гүйцэтгэх удирдлага хүртэл. OTA платформ, эрүүл мэндийн IT, AI, кибер аюулгүй байдал.",
    },
    brand: ["Ч.", "УУГАНБАЯР"],
    nav: [
      ["#summary", "Танилцуулга"],
      ["#case-studies", "Кейсүүд"],
      ["#experience", "Туршлага"],
      ["#education", "Боловсрол"],
      ["#contact", "Холбоо барих"],
    ],
    hero: {
      eyebrow: "Улаанбаатар · Технологи · Удирдлага",
      name: ["Чулуунбаатар", "Ууганбаяр"],
      role: "Технологийн удирдагч · SteppeLink-ийн өмнөх CEO",
      tag: "Технологи + Бизнес: инженерээс гүйцэтгэх удирдлага хүртэл 12+ жил",
      briefLabel: "Удирдлагын чиглэл",
      briefTitle: "Систем бүтээнэ. Баг өсгөнө. Бизнесийн үр дүн гаргана.",
      briefItems: [
        ["Өмнөх үүрэг", "CEO · SteppeLink"],
        ["Гол салбар", "Технологийн удирдлага · AI · Төсөлийн удирдлага · OTA"],
        ["Үндсэн чиглэл", "Strategy · Product · Technology"],
      ],
      ctaEmail: "Имэйл илгээх",
      ctaExp: "Туршлагатай танилцах",
      ctaCv: "CV татах",
    },
    stats: [
      ["12+", "жилийн технологийн салбарын туршлага"],
      ["2", "OTA платформ бүтээсэн"],
      ["6+", "Удирдах албан тушаалд"],
      ["1M", "хэрэглэгчитэй 3-н платформ бүтээлцэсэн"],
    ],
    summary: {
      eyebrow: "Товч танилцуулга",
      h2: "Инженерээс гүйцэтгэх удирдлага хүртэл",
      body:
        "Технологийн салбарт 12+ жил ажилласан, инженерээс гүйцэтгэх удирдлагын түвшинд хүрч ажилласан. 2 жилийн турш 30 хүнтэй технологийн байгууллагыг Гүйцэтгэх захирлаар удирдаж, бүтээгдэхүүний стратеги, технологийн стратеги, санхүү, хууль эрх зүй, хүний нөөцийн тогтолцоог бүрэн хариуцсан. Аялал жуулчлалын онлайн платформ (OTA) болон эрүүл мэндийн салбарын мэдээллийн технологид гүнзгий туршлагатай: эмнэлгийн мэдээллийн систем, цахим эрүүл мэнд төслүүд дээр ажилласан. AI, Cloud (AWS), кибер аюулгүй байдлын чиглэлээр байгууллагын түвшний шийдэл хэрэгжүүлсэн. Бизнесийн удирдлагын магистрт (MBA) суралцаж байгаа бөгөөд одоо шинэ удирдах үүрэгт ажиллах боломжтой.",
      signals: ["Бүтээгдэхүүний стратеги", "P&L ба ROI", "Байгууллагын дизайн", "AI · Cloud · Cybersecurity"],
      langs: "ХЭЛ: МОНГОЛ (ЭХ ХЭЛ) · АНГЛИ (АХИСАН ТҮВШИН, БИЗНЕСИЙН ОРЧИНД)",
    },
    achievements: {
      eyebrow: "Гол амжилтууд",
      h2: "Юу бүтээж, юу удирдсан бэ",
      items: [
        ["Платформ бүтээсэн", "Amadeus GDS болон Trip.com интеграц бүхий онлайн аялалын платформыг (OTA) архитектураас нь эхлэн бүтээж, зах зээлд нэвтрүүлсэн — Монголд цөөхөн хэрэгжсэн түвшний систем."],
        ["Байгууллага удирдсан", "30 хүнтэй байгууллагын бүтэц, карьер ладдер, тэтгэвэр-хуримтлалын хөтөлбөр, гүйцэтгэлийн үнэлгээний тогтолцоог шинээр байгуулж, инженерийн багийн тогтвортой байдлыг хангасан."],
        ["Гэрээ хэлцэл", "Өндөр дүнтэй B2B технологийн гэрээ хэлцлүүдийг санаачлан удирдаж, үнийн бодлого, эрх зүйн нөхцөл, эрсдэлийн үнэлгээг бүрэн хариуцсан."],
        ["Кибер аюулгүй байдал", "5 физик байршил дээр аюулгүй байдлын шийдлийг нэвтрүүлж удирдан ажилладаг. AWS үүлэн дэд бүтцийн ноцтой инцидентийг удирдан шийдвэрлэж, санхүүгийн хохирлыг 100% нөхөн төлүүлж, blameless post-mortem соёл, OIDC federation архитектурыг нэвтрүүлсэн."],
        ["AI ба дижитал бүтээгдэхүүн", "Монгол бичгийн OCR болон хөрвүүлэгч, AI хуулбар шалгуурын систем, 1–12-р ангийн сурагчдад зориулсан боловсролын таблет зэрэг дижитал бүтээгдэхүүнүүдийн хөгжүүлэлтийг стратегийн түвшинд удирдсан. Бүтээгдэхүүн үйлчилгээнд тусгайлан зориулагдсан AI туслах."],
      ],
    },
    caseStudies: {
      eyebrow: "Сонгосон кейсүүд",
      h2: "Шийдвэрээс бодит үр дүн хүртэл",
      intro:
        "Технологийн шийдлийг бизнесийн үр дүн, эрсдэлийн удирдлага, байгууллагын чадавхтай холбосон гурван жишээ.",
      labels: {
        challenge: "Сорилт",
        leadership: "Миний оролцоо",
        outcome: "Үр дүн",
      },
      items: [
        {
          number: "01",
          title: "OTA платформыг зах зээлд гаргасан нь",
          challenge:
            "Монголын аялалын агентлагуудад олон улсын нислэгийн контент, захиалга, үнийн удирдлагыг нэг дор шийдэх B2B платформ шаардлагатай байсан.",
          leadership:
            "Amadeus GDS болон Trip.com интеграцтай архитектур, white-label бүтээгдэхүүний загвар, markup/service-fee үнийн бодлого, борлуулалтын процессыг удирдсан.",
          outcome:
            "Монголын агентлагуудад санал болгох боломжтой, орлого үүсгэх B2B OTA бүтээгдэхүүнийг архитектураас нь эхлэн зах зээлд нэвтрүүлсэн.",
          metric: "2 OTA",
          metricLabel: "платформын туршлага",
        },
        {
          number: "02",
          title: "AWS инцидентээс тогтолцооны шинэчлэл рүү",
          challenge:
            "Үүлэн дэд бүтцийн ноцтой аюулгүй байдлын инцидент санхүү, үйл ажиллагаа, итгэлцлийн эрсдэл үүсгэсэн.",
          leadership:
            "Инцидентийн хариу арга хэмжээг удирдаж, үйлчилгээ үзүүлэгчтэй нөхөн төлбөрийн хэлцэл хийж, blameless post-mortem болон OIDC federation архитектурыг нэвтрүүлсэн.",
          outcome:
            "Санхүүгийн хохирлыг 100% нөхөн төлүүлж, урт хугацааны credential ашиглалтыг бууруулсан илүү найдвартай хамгаалалтын суурь бүрдүүлсэн.",
          metric: "100%",
          metricLabel: "санхүүгийн нөхөн төлбөр",
        },
        {
          number: "03",
          title: "Бүтээгдэхүүн ба байгууллагыг зэрэг өсгөсөн нь",
          challenge:
            "AI, EdTech бүтээгдэхүүний портфелийг хөгжүүлэхийн зэрэгцээ инженерийн багийг тогтвортой өсгөх бүтэц, процесс шаардлагатай байсан.",
          leadership:
            "30 хүнтэй байгууллагын стратеги, төсөв, бүтээгдэхүүний портфелийг удирдаж, карьерын шатлал, гүйцэтгэлийн үнэлгээ, тэтгэвэр-хуримтлалын тогтолцоог байгуулсан.",
          outcome:
            "Монгол бичгийн OCR, хуулбар илрүүлэх систем, K–12 таблет зэрэг бүтээгдэхүүнийг нэг стратегид нэгтгэж, багийн хөгжлийн тогтвортой суурийг бий болгосон.",
          metric: "30",
          metricLabel: "хүнтэй байгууллага",
        },
      ],
    },
    experience: {
      eyebrow: "Ажлын туршлага",
      h2: "Карьерын замнал",
      stops: [
        { now: false, when: "2024.05 — 2026.07", title: "Гүйцэтгэх захирал", org: "СтеппеЛинк — Технологи, EdTech, System development, IT service", points: [
          "30 хүнтэй байгууллагын стратеги, санхүү, үйл ажиллагааг бүрэн хариуцаж, жилийн төсөв, хөрөнгө оруулалтын ROI-г удирдсан;",
          "ESAN экосистем: 1–12-р ангийн сурагчдад зориулсан боловсролын таблет, монгол бичгийн OCR/AI, хуулбар илрүүлэх систем зэрэг бүтээгдэхүүний портфелийг удирдсан;",
          "Хүний нөөцийн хөгжлийн иж бүрэн тогтолцоо (карьер ладдер, тэтгэвэр-хуримтлал, чадавхи хөгжүүлэх хөтөлбөр) байгуулсан;",
          "AWS үүлэн дэд бүтэц, кибер аюулгүй байдлын бодлогыг олон улсын стандартад нийцүүлэн сайжруулсан.",
        ] },
        { now: true, when: "2025 — ОДОО", title: "Үүсгэн байгуулагч, Гүйцэтгэх захирал (хагас цагийн)", org: "Flynk Tech — Skytrip аялалын платформ", points: [
          "Amadeus GDS, Trip.com интеграц бүхий OTA платформыг бүтээж, white-label B2B загвараар Монголын аялалын агентлагуудад санал болгож байна;",
          "Бүтээгдэхүүний үнийн стратеги (markup/service fee загвар), борлуулалтын процессыг хариуцдаг; энэ үүргийн зэрэгцээ бүтэн цагийн удирдах албан тушаалд идэвхтэй хайлт хийж байна.",
        ] },
        { now: false, when: "2024.04 — 2025.01", title: "Технологи хариуцсан захирал / Зөвлөх", org: "СтеппеЛинк", points: [
          "Технологийн стратеги, архитектурын шийдвэр, инженерийн багийн удирдлагыг хариуцаж, Гүйцэтгэх захирлын үүрэгт шилжсэн / давхар хариуцсан.",
        ] },
        { now: false, when: "2021.04 — 2023.10", title: "Бүтээгдэхүүн, бизнес хөгжүүлэлт хариуцсан захирал", org: "Tapatrip — Аялал жуулчлалын OTA", points: [
          "Аялалын онлайн платформын бүтээгдэхүүний стратеги, бизнес хөгжүүлэлтийг удирдаж, олон улсын түншлэлүүдийг хариуцсан;",
          "40 хүртэлх хүнтэй хөндлөн чиг үүргийн багуудыг Agile/Scrum арга зүйгээр удирдсан;",
          "Технологийн архитектур, шийдэл болон ирээдүйн чиг хандлага, төслийн менежментийг хариуцаж ажилласан.",
        ] },
        { now: false, when: "2018.06 — 2021.04", title: "Программ хөгжүүлэгч", org: "Мобиком Корпораци", points: [
          "Монголын хамгийн том харилцаа холбооны компанид enterprise түвшний системүүд дээр ажилласан.",
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
      h2: "Дараагийн боломжийн талаар ярилцъя",
      body: "Технологийн удирдлага, бүтээгдэхүүний стратеги, B2B хамтын ажиллагааны талаар холбогдоорой.",
      ctaEmail: "Имэйл илгээх",
      ctaCv: "CV татах",
      location: "Улаанбаатар хот, Монгол",
      fine: "Ч. УУГАНБАЯР · ТЕХНОЛОГИЙН УДИРДАГЧ · STEPPELINK-ИЙН ӨМНӨХ CEO",
    },
  },

  en: {
    htmlLang: "en",
    cv: "/CV_Uuganbayar_Executive_EN.pdf",
    toggle: { href: "/", label: "МН" },
    meta: {
      title: "Uuganbayar Chuluunbaatar — Technology Executive · Former SteppeLink CEO",
      description:
        "Technology executive with 12+ years — from engineer to executive leadership. OTA platforms, healthcare IT, AI, and cybersecurity.",
    },
    brand: ["CH.", "UUGANBAYAR"],
    nav: [
      ["#summary", "Summary"],
      ["#case-studies", "Case studies"],
      ["#experience", "Experience"],
      ["#education", "Education"],
      ["#contact", "Contact"],
    ],
    hero: {
      eyebrow: "Ulaanbaatar · Technology · Leadership",
      name: ["Uuganbayar", "Chuluunbaatar"],
      role: "Technology Executive · Former SteppeLink CEO",
      tag: "Technology + Business: 12+ years from engineer to executive leadership",
      briefLabel: "Leadership focus",
      briefTitle: "Build systems. Grow teams. Deliver business outcomes.",
      briefItems: [
        ["Previous role", "CEO · SteppeLink"],
        ["Core sectors", "Technology leadership · AI · Project management · OTA"],
        ["Primary focus", "Strategy · Product · Technology"],
      ],
      ctaEmail: "Send email",
      ctaExp: "View experience",
      ctaCv: "Download CV",
    },
    stats: [
      ["12+", "years in tech"],
      ["2", "OTA platforms"],
      ["6+", "years in leadership"],
      ["1M", "users across 3 platforms"],
    ],
    summary: {
      eyebrow: "Executive summary",
      h2: "From engineer to executive leadership",
      body:
        "Technology executive with 12+ years of experience, progressing from software engineer to CEO. Led a 30-person technology organization for 2 years with full P&L, product strategy, and people responsibility. Deep domain expertise in online travel platforms (OTA) and healthcare IT, including hospital information systems and national e-health projects. Hands-on record in AI, cloud infrastructure (AWS), and cybersecurity at enterprise scale. Currently completing an MBA and available for a new full-time leadership role.",
      signals: ["Product strategy", "P&L and ROI", "Organization design", "AI · Cloud · Cybersecurity"],
      langs: "LANGUAGES: MONGOLIAN (NATIVE) · ENGLISH (ADVANCED, WORKING PROFESSIONAL PROFICIENCY)",
    },
    achievements: {
      eyebrow: "Key achievements",
      h2: "What I've built and led",
      items: [
        ["Platform builder", "Architected and launched an online travel agency platform with Amadeus GDS and Trip.com integration — one of the few systems of this class in Mongolia."],
        ["Organization builder", "Built organizational structure, career ladders, pension/savings program, and performance systems for a 30-person engineering organization, materially improving retention."],
        ["Deal leadership", "Initiated and led large-value B2B technology contracts, owning pricing strategy, legal terms, and risk assessment end-to-end."],
        ["Cybersecurity", "Led response to a major AWS cloud security incident: achieved 100% financial recovery, instituted blameless post-mortem culture, and drove OIDC federation architecture to eliminate long-lived credentials."],
        ["AI & digital products", "Directed development of Mongolian-script OCR, AI-powered plagiarism detection, and K-12 educational tablet products at portfolio level."],
      ],
    },
    caseStudies: {
      eyebrow: "Selected case studies",
      h2: "From decision to measurable impact",
      intro:
        "Three examples of connecting technology decisions with business outcomes, risk management, and organizational capability.",
      labels: {
        challenge: "Challenge",
        leadership: "My leadership",
        outcome: "Outcome",
      },
      items: [
        {
          number: "01",
          title: "Taking an OTA platform to market",
          challenge:
            "Mongolian travel agencies needed a single B2B platform for international flight content, booking, and pricing control.",
          leadership:
            "Led the architecture for Amadeus GDS and Trip.com integrations, the white-label product model, markup/service-fee pricing, and the sales process.",
          outcome:
            "Launched a revenue-ready B2B OTA product for Mongolian travel agencies, taking it from architecture through market introduction.",
          metric: "2 OTA",
          metricLabel: "platforms delivered",
        },
        {
          number: "02",
          title: "Turning an AWS incident into systemic change",
          challenge:
            "A major cloud security incident created financial, operational, and trust risk for the organization.",
          leadership:
            "Led incident response and vendor recovery negotiations, then introduced blameless post-mortems and OIDC federation architecture.",
          outcome:
            "Achieved 100% financial recovery and established a stronger security foundation that reduced reliance on long-lived credentials.",
          metric: "100%",
          metricLabel: "financial recovery",
        },
        {
          number: "03",
          title: "Scaling products and the organization together",
          challenge:
            "The company needed to grow an AI and EdTech portfolio while building repeatable systems for a stable engineering organization.",
          leadership:
            "Led strategy, budget, and product portfolio for a 30-person organization and established career ladders, performance systems, and a pension/savings program.",
          outcome:
            "Unified Mongolian-script OCR, plagiarism detection, and K–12 tablet initiatives under one strategy while strengthening the team’s development foundation.",
          metric: "30",
          metricLabel: "person organization",
        },
      ],
    },
    experience: {
      eyebrow: "Professional experience",
      h2: "Career route",
      stops: [
        { now: false, when: "May 2024 — Jul 2026", title: "Chief Executive Officer", org: "SteppeLink — Technology & EdTech", points: [
          "Full ownership of strategy, finance, and operations for a 30-person organization; managed annual budget and technology investment ROI;",
          "Led the ESAN product ecosystem: K-12 educational tablet, Mongolian-script OCR/AI, plagiarism detection platform;",
          "Established comprehensive people-development systems: career ladders, pension/savings program, capability programs;",
          "Upgraded AWS cloud infrastructure and cybersecurity policy toward international standards.",
        ] },
        { now: true, when: "2025 — Present", title: "Founder & CEO (part-time)", org: "Flynk Tech — Skytrip Travel Platform", points: [
          "Built an OTA platform with Amadeus GDS and Trip.com integration; offering it as a white-label B2B product to Mongolian travel agencies;",
          "Own product pricing strategy (markup/service-fee model), Ebarimt POS 3.0 tax integration, and the sales process; actively searching for a full-time leadership role alongside this.",
        ] },
        { now: false, when: "Apr 2024 — Jan 2025", title: "Chief Technology Officer / Advisor", org: "SteppeLink", points: [
          "Owned technology strategy, architecture decisions, and engineering leadership; transitioned into the CEO role.",
        ] },
        { now: false, when: "Apr 2021 — Oct 2023", title: "Director of Product & Business Development", org: "Tapatrip — Online Travel Agency", points: [
          "Led product strategy and business development for an online travel platform, including international partnerships;",
          "Managed cross-functional teams of up to 40 people using Agile/Scrum.",
        ] },
        { now: false, when: "Jun 2018 — Apr 2021", title: "Software Developer", org: "Mobicom Corporation", points: [
          "Delivered enterprise-scale systems at Mongolia's largest telecom.",
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
      h2: "Let's discuss what comes next",
      body: "Reach out about technology leadership, product strategy, or B2B partnerships.",
      ctaEmail: "Send email",
      ctaCv: "Download CV",
      location: "Ulaanbaatar, Mongolia",
      fine: "CH. UUGANBAYAR · TECHNOLOGY EXECUTIVE · FORMER STEPPELINK CEO",
    },
  },
};
