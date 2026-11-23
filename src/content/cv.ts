/**
 * ============================================================
 *  CONTENUTI DEL SITO — modifica qui, non nei componenti.
 * ============================================================
 *  Ogni testo traducibile è un oggetto { it, en }.
 *  Per nascondere un campo opzionale, eliminalo o lascialo undefined.
 */

export type Lang = 'it' | 'en'
export type T = { it: string; en: string }
export type Tag = string | T

/* ---------- Loghi ---------- */
export type Logo = {
  name: string
  /** percorso in /public; se assente viene mostrato un placeholder testuale */
  src?: string
  /** true = logo chiaro/bianco, va mostrato su un fondo scuro */
  onDark?: boolean
}

export const logos: Record<string, Logo> = {
  rbConsulting: { name: 'RB Consulting', src: 'logos/rb-consulting.png' },
  kerakoll: { name: 'Kerakoll', src: 'logos/kerakoll.png' },
  ivs: { name: 'IVS Group', src: 'logos/ivs-group.webp' },
  nuovaDemi: { name: 'Nuova Demi', src: 'logos/nuova-demi.jpg' },
  pillar: { name: 'Pillar', src: 'logos/pillar.png' },
  laif: { name: 'LAIF', src: 'logos/laif.png' },
  helia: { name: 'Helia Voice', src: 'logos/helia.png' },
  emax: { name: 'Emax', src: 'logos/emax.png' },
  bioproject: { name: 'Bioproject', src: 'logos/bioproject.jpeg' },
  albiniCastelli: { name: 'Albini & Castelli', src: 'logos/albini-castelli.png' },
  dei: { name: 'DEI – Tipografia del Genio Civile', src: 'logos/dei.png' },
  graficheValdelsa: { name: 'Grafiche Valdelsa', src: 'logos/grafiche-valdelsa.png' },
  valdelsaHightech: { name: 'Valdelsa Hightech', src: 'logos/valdelsa-hightech.png' },
  gualini: { name: 'Gualini Lamiere', src: 'logos/gualini-lamiere.png' },
  gualiniMark: { name: 'Gualini Lamiere', src: 'logos/gualini-mark.svg' },
  intellimech: { name: 'Intellimech', src: 'logos/intellimech-light.svg' },
  vitali: { name: 'Vitali', src: 'logos/vitali-light.svg' },
  edilgo: { name: 'EdilGo', src: 'logos/edilgo-light.png' },
  mcd: { name: 'MCD – Motorcycle Custom Design', src: 'logos/mcd.png' },
  didimora: { name: 'Didimora', src: 'logos/didimora.png' },
  edilerica: { name: 'Edilerica', src: 'logos/edilerica.png' },
  hm: { name: 'HM Costruzioni Metalliche', src: 'logos/hm-costruzioni-metalliche.png' },
  lamtech: { name: 'Lamtech', src: 'logos/lamtech.png' },
  lsMeccanica: { name: 'L.S. Meccanica', src: 'logos/ls-meccanica.png' },
  mela: { name: 'Mela', src: 'logos/mela.png' },
  kama: { name: 'Kama', src: 'logos/kama.png' },
  cspin: { name: 'C-Spin', src: 'logos/c-spin.png' },
  sikuro: { name: 'Sikuro', src: 'logos/sikuro.png' },
  mtRicci: { name: 'MT Ricci', src: 'logos/mt-ricci.png' },
  timeLapseLab: { name: 'Time Lapse Lab', src: 'logos/time-lapse-lab.png' },
  golee: { name: 'Golee', src: 'logos/golee.jpg' },
  /* istruzione */
  unibg: { name: 'Università degli Studi di Bergamo', src: 'logos/unibg.svg' },
  sdm: { name: 'SDM – School of Management UniBG', src: 'logos/sdm-unibg.svg' },
  luiss: { name: 'LUISS Business School', src: 'logos/luiss.png' },
  cni: { name: 'Consiglio Nazionale degli Ingegneri', src: 'logos/cni.png' },
}

/** Ordine dei loghi nel marquee "Aziende con cui ho lavorato" */
export const marqueeLogos: (keyof typeof logos)[] = [
  'kerakoll', 'ivs', 'pillar', 'laif', 'albiniCastelli', 'nuovaDemi', 'dei', 'graficheValdelsa',
  'helia', 'emax', 'bioproject', 'gualini', 'intellimech', 'vitali', 'valdelsaHightech', 'hm',
  'lamtech', 'lsMeccanica', 'kama', 'cspin', 'sikuro', 'mtRicci', 'didimora', 'edilerica',
  'mela', 'timeLapseLab', 'golee', 'edilgo', 'mcd',
]

/* ---------- Meta / profilo ---------- */
export const profile = {
  name: 'Roberto Bonetti',
  photo: 'roberto-bonetti.jpg',
  /** marchio usato nell'header (favicon: public/favicon.png) */
  mark: 'rb-mark.png',
  photoAlt: {
    it: 'Ritratto di Roberto Bonetti, camicia azzurra e cravatta blu',
    en: 'Portrait of Roberto Bonetti, light-blue shirt and navy tie',
  },
  email: 'roberto@rbconsulenza.it',
  linkedin: 'https://www.linkedin.com/in/ingrb',
  website: 'https://www.rbconsulenza.it',
  location: { it: 'Milano', en: 'Milan, Italy' },
  vat: 'P.IVA IT04452990163',
  pageTitle: {
    it: 'Roberto Bonetti · Digital Transformation & Operations Leader',
    en: 'Roberto Bonetti · Digital Transformation & Operations Leader',
  },
}

/* ---------- Testi di interfaccia ---------- */
export const ui = {
  nav: {
    about: { it: 'Chi sono', en: 'About' },
    experience: { it: 'Esperienze', en: 'Experience' },
    clients: { it: 'Consulenze', en: 'Consulting' },
    training: { it: 'Formazione', en: 'Education' },
    skills: { it: 'Competenze', en: 'Skills' },
    contact: { it: 'Contatti', en: 'Contact' },
  },
  skip: { it: 'Vai al contenuto', en: 'Skip to content' },
  menu: { it: 'Menu', en: 'Menu' },
  langSwitch: { it: 'Switch to English', en: 'Passa all’italiano' },
  seeProjects: { it: 'Guarda le esperienze', en: 'See my experience' },
  contactMe: { it: 'Contattami', en: 'Get in touch' },
  writeMe: { it: 'Scrivimi', en: 'Email me' },
  backToTop: { it: 'Torna su', en: 'Back to top' },
  results: { it: 'Risultati', en: 'Results' },
  learned: { it: 'Cosa ho imparato', en: 'What I learned' },
  myContribution: { it: 'Il mio contributo', en: 'My contribution' },
  flipOpen: { it: 'Il mio contributo', en: 'My contribution' },
  flipBack: { it: 'Torna alla scheda', en: 'Back to overview' },
  flipHint: { it: 'Clicca o premi Invio per girare la scheda', en: 'Click or press Enter to flip the card' },
  filters: {
    all: { it: 'Tutte', en: 'All' },
    manifattura: { it: 'Manifattura', en: 'Manufacturing' },
    costruzioni: { it: 'Costruzioni', en: 'Construction' },
    ai: { it: 'AI', en: 'AI' },
  },
  challenge: { it: 'Sfida', en: 'Challenge' },
  intervention: { it: 'Intervento', en: 'What I did' },
  outcome: { it: 'Risultato', en: 'Outcome' },
  whoTheyAre: { it: 'Chi sono', en: 'Who they are' },
  keyProjects: { it: 'Progetti significativi', en: 'Key projects' },
  workedWith: { it: 'Aziende con cui ho lavorato', en: 'Companies I have worked with' },
  languages: { it: 'Lingue', en: 'Languages' },
  basedIn: { it: 'Sede operativa', en: 'Based in' },
  sections: {
    numbers: { it: 'In numeri', en: 'By the numbers' },
    about: { it: 'Chi sono', en: 'About me' },
    experience: { it: 'Esperienze', en: 'Experience' },
    clients: { it: 'Consulenze', en: 'Consulting work' },
    training: { it: 'Formazione e divulgazione', en: 'Teaching & outreach' },
    education: { it: 'Istruzione', en: 'Education' },
    skills: { it: 'Competenze', en: 'Skills' },
    contact: { it: 'Contatti', en: 'Contact' },
  },
  sectionLeads: {
    experience: {
      it: 'Dal cantiere alla fabbrica, dalla fabbrica all’ecosistema dell’innovazione. Passa sopra una scheda (o toccala) per vedere il mio contributo.',
      en: 'From the building site to the factory, from the factory to the innovation ecosystem. Hover over (or tap) a card to see my contribution.',
    },
    clients: {
      it: 'Dal 2019, con RB Consulting, al fianco di imprese manifatturiere e della filiera edile.',
      en: 'Since 2019, through RB Consulting, alongside manufacturing and construction companies.',
    },
    contact: {
      it: 'Trasformare l’innovazione in processi che funzionano: parliamone.',
      en: 'Turning innovation into processes that work: let’s talk.',
    },
  },
}

/* ---------- Hero ---------- */
export const hero = {
  title: {
    it: 'Digital Transformation & Operations Leader',
    en: 'Digital Transformation & Operations Leader',
  },
  subtitleTag: {
    it: 'Manifattura e Filiera delle Costruzioni',
    en: 'Manufacturing and Construction Supply Chain',
  },
  intro: {
    it: 'Ingegnere edile e industriale. Da oltre 10 anni porto tecnologie digitali, dati e intelligenza artificiale dentro fabbriche e cantieri: dal gestionale al MES, dalla robotica collaborativa alla business intelligence, fino agli agenti AI. Trasformo progetti di innovazione in processi che funzionano, misurati con KPI.',
    en: 'Civil and industrial engineer. For more than 10 years I have been bringing digital technologies, data and artificial intelligence into factories and building sites: from ERP to MES, from collaborative robotics to business intelligence, all the way to AI agents. I turn innovation projects into processes that work, measured with KPIs.',
  },
  badges: [
    { it: 'Industria 4.0/5.0', en: 'Industry 4.0/5.0' },
    { it: 'AI applicata alle PMI', en: 'Applied AI for SMEs' },
    { it: 'Construction Tech', en: 'Construction Tech' },
    { it: 'Progetti europei', en: 'EU projects' },
    { it: 'Open innovation', en: 'Open innovation' },
  ] as T[],
}

/* ---------- Numeri ---------- */
export type Stat = { value: number; suffix?: string; label: T }
export const stats: Stat[] = [
  { value: 10, suffix: '+', label: { it: 'anni nell’ecosistema dell’innovazione industriale', en: 'years in the industrial innovation ecosystem' } },
  { value: 6, label: { it: 'progetti di ricerca europei e nazionali seguiti', en: 'European and national research projects' } },
  { value: 40, suffix: '+', label: { it: 'aziende accompagnate nella trasformazione digitale', en: 'companies supported through digital transformation' } },
  { value: 1000, suffix: '+', label: { it: 'ore di formazione erogate a imprenditori, tecnici e team', en: 'training hours delivered to entrepreneurs, technicians and teams' } },
  { value: 2, label: { it: 'filiere presidiate: manifattura meccanica e costruzioni', en: 'supply chains covered: mechanical manufacturing and construction' } },
  { value: 3, label: { it: 'startup in cui partecipo con piano ESOP', en: 'startups in which I hold ESOP equity' } },
]

/* ---------- Chi sono ---------- */
export const about: T[] = [
  {
    it: 'Sono un ingegnere edile e industriale e mi occupo di trasformazione digitale e operations nella manifattura e nella filiera delle costruzioni. Il mio percorso unisce cantiere e fabbrica: ho iniziato gestendo commesse in un’impresa di costruzioni e ho proseguito in produzione, dove ho guidato l’introduzione di ERP, MES, robotica collaborativa e analisi dei dati.',
    en: 'I am a civil and industrial engineer working on digital transformation and operations in manufacturing and the construction supply chain. My background spans both the building site and the factory: I started out managing contracts for a construction company and moved on to production, where I led the introduction of ERP, MES, collaborative robotics and data analytics.',
  },
  {
    it: 'Da oltre dieci anni lavoro a contatto con l’ecosistema dell’innovazione: consorzi di ricerca, Digital Innovation Hub ed EDIH, progetti finanziati a livello regionale, nazionale ed europeo. Lo conosco da entrambi i lati: dall’impresa che partecipa ai progetti e dal consulente che li porta nelle aziende.',
    en: 'For more than ten years I have worked closely with the innovation ecosystem: research consortia, Digital Innovation Hubs and EDIHs, and regional, national and EU-funded projects. I know it from both sides: as a company taking part in projects and as a consultant bringing them into businesses.',
  },
  {
    it: 'Dal 2019, con RB Consulting, affianco PMI e gruppi industriali dalla roadmap digitale all’implementazione e alla formazione delle persone, con un principio: la tecnologia ha senso solo se cambia un processo e un numero. Oggi lavoro in particolare sull’AI applicata ai processi aziendali e sulla digitalizzazione della filiera delle costruzioni, costruendo partnership tra imprese, associazioni di categoria, scuole edili e tech company.',
    en: 'Since 2019, through RB Consulting, I have supported SMEs and industrial groups from digital roadmap to implementation and people training, guided by one principle: technology only makes sense if it changes a process and a number. Today I focus on AI applied to business processes and on digitalising the construction supply chain, building partnerships between companies, trade associations, construction schools and tech companies.',
  },
]
/** Tre messaggi chiave mostrati accanto al "Chi sono" */
export const pillars: { title: T; text: T }[] = [
  {
    title: { it: 'Strategia → implementazione', en: 'Strategy → implementation' },
    text: { it: 'Trasformazione digitale di PMI manifatturiere e della filiera delle costruzioni.', en: 'Digital transformation of manufacturing SMEs and the construction supply chain.' },
  },
  {
    title: { it: 'Ecosistema dell’innovazione', en: 'Innovation ecosystem' },
    text: { it: '10 anni tra consorzi di ricerca, EDIH e progetti europei.', en: '10 years across research consortia, EDIHs and EU projects.' },
  },
  {
    title: { it: 'Operations che funzionano', en: 'Operations that work' },
    text: { it: 'Processi, persone, partnership, KPI e servizi alle imprese.', en: 'Processes, people, partnerships, KPIs and services to companies.' },
  },
]

/* ---------- Esperienze ---------- */
/** Contenuto di una faccia della scheda */
export type CardBlock = {
  paragraphs?: T[]
  bullets?: { title: T; text: T }[]
  results?: T
  learned?: T
  /** progetti di ricerca e bandi seguiti */
  projects?: { acronym: string; name: T; program: string; period?: string }[]
  /** temi della ricerca condivisa */
  topics?: T[]
  topicsTitle?: T
}

export type Experience = {
  code: string
  role: T
  org: string
  logo?: keyof typeof logos
  period?: T
  location?: T
  context: T
  tags: Tag[]
  /** contenuto aggiuntivo sul fronte della scheda */
  front?: CardBlock
  /** retro della scheda: il mio contributo */
  backTitle?: T
  back: CardBlock
}

export const experiences: Experience[] = [
  {
    code: 'PRJ-01',
    role: { it: 'Consulente e Founder', en: 'Consultant & Founder' },
    org: 'RB Consulting',
    logo: 'rbConsulting',
    period: { it: '2019 – oggi', en: '2019 – present' },
    location: { it: 'Milano / Bergamo', en: 'Milan / Bergamo' },
    context: {
      it: 'Consulenza in digital transformation, AI process optimization e direzione commerciale in outsourcing per aziende manifatturiere e della filiera edile.',
      en: 'Consulting in digital transformation, AI process optimisation and outsourced sales management for manufacturing and construction companies.',
    },
    tags: ['Digital Maturity Assessment', 'Roadmap 4.0/5.0', 'AI Strategy', 'Change Management', 'Sales Operations'],
    back: {
      paragraphs: [
        {
          it: 'Metodo in quattro fasi: assessment di maturità digitale, roadmap, implementazione con i fornitori tecnologici, misura dei risultati.',
          en: 'A four-step method: digital maturity assessment, roadmap, implementation with technology providers, measurement of results.',
        },
        {
          it: 'Le principali consulenze sono raccontate nella sezione “Consulenze”.',
          en: 'The main engagements are described in the “Consulting” section.',
        },
      ],
    },
  },
  {
    code: 'PRJ-02',
    role: { it: 'Digital Transformation & Operations', en: 'Digital Transformation & Operations' },
    org: 'Gualini Lamiere',
    logo: 'gualiniMark',
    period: { it: '4 anni', en: '4 years' },
    context: {
      it: 'È l’esperienza in cui mi sono appassionato alla trasformazione digitale. Ho guidato il progetto di ridisegno del sistema informativo di fabbrica in un contesto di carpenteria e lavorazione lamiera per settori come oil & gas ed energia.',
      en: 'This is where I fell in love with digital transformation. I led the redesign of the factory information system in a metal fabrication and sheet-metal processing company serving sectors such as oil & gas and energy.',
    },
    tags: ['ERP', 'MES', 'MRP', 'Cobot', 'Welding 4.0', 'IIoT', 'Power BI', 'OEE'],
    front: {
      bullets: [
        {
          title: { it: 'Nuovo ERP/gestionale', en: 'New ERP' },
          text: {
            it: 'Analisi AS-IS / TO-BE dei processi, selezione del fornitore, migrazione anagrafiche e distinte, formazione degli utenti chiave.',
            en: 'AS-IS / TO-BE process analysis, vendor selection, migration of master data and bills of materials, key-user training.',
          },
        },
        {
          title: { it: 'MES e MRP', en: 'MES and MRP' },
          text: {
            it: 'Raccolta dati di avanzamento dal reparto, schedulazione e pianificazione dei fabbisogni materiali collegate al gestionale, eliminando la carta in produzione.',
            en: 'Shop-floor progress data collection, scheduling and material requirements planning connected to the ERP, removing paper from production.',
          },
        },
        {
          title: { it: 'Robotica collaborativa per la saldatura', en: 'Collaborative robotics for welding' },
          text: {
            it: 'Studio di fattibilità e introduzione di celle di saldatura con cobot, incluse valutazione del ROI, sicurezza e programmazione semplificata per gli operatori.',
            en: 'Feasibility study and introduction of cobot welding cells, including ROI assessment, safety and simplified programming for operators.',
          },
        },
        {
          title: { it: 'Business Intelligence sulle saldatrici manuali', en: 'Business Intelligence on manual welders' },
          text: {
            it: 'Acquisizione dei dati macchina (tempi d’arco, parametri, fermi) e dashboard per misurare la reale performance di lavoro e confrontare preventivato e consuntivo.',
            en: 'Machine data acquisition (arc time, parameters, downtime) and dashboards to measure actual work performance and compare estimates with actuals.',
          },
        },
      ],
      results: {
        it: 'Tracciabilità completa delle commesse in reparto, KPI di saturazione e produttività visibili in tempo reale, base dati per preventivi più accurati.',
        en: 'Full job traceability on the shop floor, real-time utilisation and productivity KPIs, a data foundation for more accurate quotes.',
      },
    },
    backTitle: { it: 'Ricerca e bandi con Intellimech', en: 'Research & grants with Intellimech' },
    back: {
      paragraphs: [
        {
          it: 'Con Gualini Lamiere ho partecipato alle attività del Consorzio Intellimech (Kilometro Rosso, Bergamo), oggi European Digital Innovation Hub. Ho seguito per l’azienda i progetti di ricerca e i bandi: analisi dei fabbisogni, definizione dei casi d’uso pilota, raccordo con i partner di ricerca e trasferimento dei risultati in produzione. La collaborazione con il consorzio è proseguita anche negli anni successivi.',
          en: 'With Gualini Lamiere I took part in the activities of Consorzio Intellimech (Kilometro Rosso, Bergamo), now a European Digital Innovation Hub. I followed research projects and funding calls on the company’s behalf: needs analysis, pilot use-case definition, liaison with research partners and transfer of results into production. The collaboration with the consortium continued in later years.',
        },
      ],
      projects: [
        { acronym: 'MAP4ID', name: { it: 'Analytics per dati industriali: machine learning e visione artificiale per il controllo qualità', en: 'Industrial data analytics: machine learning and computer vision for quality control' }, program: 'PON Imprese e Competitività (FESR)', period: '2019 – 2023' },
        { acronym: 'DITA', name: { it: 'Atlante europeo della formazione sulla trasformazione digitale', en: 'European atlas of digital-transformation training' }, program: 'Erasmus+', period: '2019 – 2022' },
      ],
      topicsTitle: { it: 'Progetti di ricerca condivisa tra aziende consorziate', en: 'Shared research projects among member companies' },
      topics: [
        { it: 'AI per la gestione della conoscenza', en: 'AI for knowledge management' },
        { it: 'AI per il CRM', en: 'AI for CRM' },
        { it: 'AI per i processi decisionali', en: 'AI for decision-making' },
        { it: 'AI per i controlli qualità', en: 'AI for quality control' },
        { it: 'Programmazione intuitiva dei robot', en: 'Intuitive robot programming' },
        { it: 'Industrial Edge', en: 'Industrial Edge' },
        { it: 'Smart Sensors', en: 'Smart Sensors' },
        { it: 'Cybersecurity OT', en: 'OT Cybersecurity' },
        { it: 'Metaverso industriale', en: 'Industrial metaverse' },
        { it: 'Ergonomia ed esoscheletri', en: 'Ergonomics & exoskeletons' },
      ],
    },
  },
  {
    code: 'PRJ-03',
    role: { it: 'Co-Founder', en: 'Co-Founder' },
    org: 'EdilGo',
    logo: 'edilgo',
    period: { it: '2017 – 2020', en: '2017 – 2020' },
    context: {
      it: 'Dall’esperienza di cantiere nasce EdilGo, una piattaforma SaaS che mette in contatto imprese di costruzione e fornitori e digitalizza il processo di approvvigionamento: richieste d’offerta, confronto delle offerte, scelta del fornitore.',
      en: 'EdilGo grew out of my building-site experience: a SaaS platform connecting construction companies and suppliers and digitalising procurement: requests for quotation, offer comparison, supplier selection.',
    },
    tags: ['Startup', 'SaaS', { it: 'Procurement digitale', en: 'Digital procurement' }, 'Construction Tech', 'Go-to-market'],
    back: {
      paragraphs: [
        {
          it: 'In una fase di forte rincaro dei materiali la piattaforma permetteva risparmi fino al 15% per fornitura. Ho presentato il progetto alle imprese associate al sistema ANCE, tra cui ANCE Como.',
          en: 'At a time of sharp material price increases, the platform enabled savings of up to 15% per supply. I presented the project to companies in the ANCE association network, including ANCE Como.',
        },
      ],
      learned: {
        it: 'Product discovery con gli utenti, go-to-market B2B in un settore poco digitalizzato, partnership con le associazioni di categoria.',
        en: 'Product discovery with users, B2B go-to-market in a barely digitalised sector, partnerships with trade associations.',
      },
    },
  },
  {
    code: 'PRJ-04',
    role: { it: 'Project Manager di cantiere', en: 'Site Project Manager' },
    org: 'Vitali S.p.A.',
    logo: 'vitali',
    period: { it: '3 anni', en: '3 years' },
    context: {
      it: 'Gestione di commesse e cantieri in un’impresa di costruzioni e produzione di calcestruzzo: pianificazione lavori, coordinamento squadre e subappaltatori, controllo avanzamento e costi.',
      en: 'Job and site management in a construction and ready-mix concrete company: works planning, coordination of crews and subcontractors, progress and cost control.',
    },
    tags: ['Project Management', { it: 'Logistica calcestruzzo', en: 'Concrete logistics' }, 'Dispatching', { it: 'Digitalizzazione di cantiere', en: 'Site digitalisation' }],
    back: {
      paragraphs: [
        {
          it: 'Ho seguito l’implementazione di un software per automatizzare la gestione delle consegne di calcestruzzo ai clienti: dalla presa dell’ordine alla programmazione delle autobetoniere, fino alla bolla e alla consuntivazione, riducendo telefonate e passaggi manuali tra centrale, autisti e cantiere.',
          en: 'I followed the implementation of software to automate concrete deliveries to customers: from order intake to truck-mixer scheduling, through to delivery note and final accounting, reducing phone calls and manual hand-offs between plant, drivers and site.',
        },
      ],
    },
  },
  {
    code: 'PRJ-05',
    role: { it: 'Progettazione e produzione — componenti custom per motociclette', en: 'Design & production — custom motorcycle components' },
    org: 'MCD – Motorcycle Custom Design',
    logo: 'mcd',
    context: {
      it: 'Gestione dell’intero flusso, dalla progettazione CAD alla realizzazione di componenti su misura per motociclette.',
      en: 'Management of the whole flow, from CAD design to the manufacturing of custom motorcycle components.',
    },
    tags: ['CAD 3D', { it: 'Prototipazione', en: 'Prototyping' }, { it: 'Produzione su commessa', en: 'Make-to-order' }, 'Engineering-to-Order'],
    back: {
      paragraphs: [
        {
          it: 'Raccolta del requisito del cliente, disegno 3D, scelta del processo produttivo, rapporto con le officine, controllo qualità e consegna.',
          en: 'Capturing customer requirements, 3D design, choice of production process, relations with machine shops, quality control and delivery.',
        },
        {
          it: 'Prima palestra di “digital thread” su piccola scala: un unico filo dal file 3D al pezzo finito.',
          en: 'My first small-scale “digital thread” training ground: a single thread from the 3D file to the finished part.',
        },
      ],
    },
  },
]

/* ---------- Consulenze ---------- */
export type Sector = 'manifattura' | 'costruzioni' | 'ai'
export type Engagement = {
  name: string
  logo?: keyof typeof logos
  industry: T
  sectors: Sector[]
  extraTags?: string[]
  about?: T
  challenge?: T
  intervention?: T
  result?: T
}

export const engagements: Engagement[] = [
  {
    name: 'Kerakoll',
    logo: 'kerakoll',
    industry: { it: 'Materiali per l’edilizia', en: 'Building materials' },
    sectors: ['costruzioni', 'ai'],
    challenge: {
      it: 'Portare sul mercato Genius Lab, la piattaforma digitale di Kerakoll (sviluppata con Ammagamma) che usa algoritmi e dati per aiutare progettisti, agenti e rivenditori a valutare e gestire i cantieri.',
      en: 'Bringing to market Genius Lab, Kerakoll’s digital platform (developed with Ammagamma) that uses algorithms and data to help designers, agents and dealers assess and manage building sites.',
    },
    intervention: {
      it: 'Supporto al lancio: posizionamento verso professionisti e imprese, definizione dei target e dei messaggi, strategia di adozione da parte della rete commerciale.',
      en: 'Launch support: positioning towards professionals and contractors, definition of targets and messages, adoption strategy for the sales network.',
    },
  },
  {
    name: 'Pillar',
    logo: 'pillar',
    industry: { it: 'Software gestionale per imprese edili', en: 'Management software for construction companies' },
    sectors: ['costruzioni'],
    challenge: {
      it: 'Crescere in un mercato frammentato come quello delle imprese edili italiane.',
      en: 'Growing in a fragmented market such as Italian construction companies.',
    },
    intervention: {
      it: 'Consulenza su industria delle costruzioni e partnership industriali: accordi con associazioni territoriali ANCE, dialogo con ANAEPA Confartigianato Edilizia per una convenzione nazionale, partnership con ESEM-CPT e il sistema delle scuole edili, programma partner e rivenditori. Interviste strutturate alle imprese clienti per orientare la roadmap di prodotto.',
      en: 'Advisory on the construction industry and industrial partnerships: agreements with local ANCE associations, talks with ANAEPA Confartigianato Edilizia for a national agreement, partnership with ESEM-CPT and the construction-school network, partner and reseller programme. Structured interviews with customer companies to steer the product roadmap.',
    },
  },
  {
    name: 'LAIF',
    logo: 'laif',
    industry: { it: 'AI per le imprese', en: 'AI for business' },
    sectors: ['ai'],
    about: {
      it: 'Società di intelligenza artificiale fondata da professionisti provenienti da Ammagamma, una delle prime realtà italiane ad aver applicato l’AI in modo industriale ai processi decisionali delle aziende.',
      en: 'An artificial intelligence company founded by professionals from Ammagamma, one of the first Italian firms to apply AI at industrial scale to corporate decision-making.',
    },
    intervention: {
      it: 'Consulenza strategica sui progetti AI: qualificazione delle opportunità, definizione dei casi d’uso con i clienti, raccordo tra esigenze di business e team tecnico, in particolare nella filiera delle costruzioni.',
      en: 'Strategic advisory on AI projects: opportunity qualification, use-case definition with clients, bridging business needs and the technical team, especially in the construction supply chain.',
    },
  },
  {
    name: 'Albini & Castelli',
    logo: 'albiniCastelli',
    industry: { it: 'General contractor (Induno Olona, VA)', en: 'General contractor (Induno Olona, Varese)' },
    sectors: ['costruzioni', 'ai'],
    challenge: {
      it: 'Governare commesse complesse con dati frammentati tra uffici tecnici, cantiere e amministrazione.',
      en: 'Managing complex contracts with data fragmented across engineering, site and administration.',
    },
    intervention: {
      it: 'Roadmap di digitalizzazione dell’intera commessa: preventivazione, pianificazione, esecuzione, controllo di commessa e consuntivazione, con un unico flusso dati; valutazione di soluzioni AI per l’automazione dei processi (progetto con LAIF) e delle opzioni organizzative per proseguire.',
      en: 'Digitalisation roadmap for the entire contract lifecycle: estimating, planning, execution, job control and final accounting in a single data flow; assessment of AI solutions for process automation (project with LAIF) and of organisational options to move forward.',
    },
  },
  {
    name: 'Nuova Demi',
    logo: 'nuovaDemi',
    industry: { it: 'Produzione aggregati e calcestruzzi', en: 'Aggregates and concrete production' },
    sectors: ['costruzioni', 'manifattura'],
    intervention: {
      it: 'Progetto di automazione dell’impianto di produzione di aggregati e calcestruzzo; implementazione del CRM HubSpot per la rete commerciale (pipeline, preventivi, reportistica); formazione del personale sui nuovi strumenti.',
      en: 'Automation project for the aggregates and concrete plant; HubSpot CRM implementation for the sales network (pipeline, quotes, reporting); staff training on the new tools.',
    },
  },
  {
    name: 'IVS Group',
    logo: 'ivs',
    industry: { it: 'Vending, assemblaggio macchine · oggi parte del Gruppo Lavazza', en: 'Vending, machine assembly · now part of the Lavazza Group' },
    sectors: ['manifattura'],
    challenge: {
      it: 'Programmazione delle commesse e saturazione delle linee di assemblaggio dei distributori automatici.',
      en: 'Order scheduling and utilisation of the vending-machine assembly lines.',
    },
    intervention: {
      it: 'Analisi dei flussi e progetto di miglioramento della pianificazione delle commesse e della gestione della produzione in assemblaggio: bilanciamento delle linee, logiche di schedulazione, KPI di avanzamento.',
      en: 'Flow analysis and improvement project for order planning and assembly production management: line balancing, scheduling logic, progress KPIs.',
    },
  },
  {
    name: 'DEI – Tipografia del Genio Civile',
    logo: 'dei',
    industry: { it: 'Editoria tecnica e banche dati prezzi per l’edilizia', en: 'Technical publishing and construction price databases' },
    sectors: ['costruzioni'],
    extraTags: ['Data'],
    intervention: {
      it: 'Collaborazione alla realizzazione e commercializzazione del prodotto digitale Plus Premium: valorizzazione della banca dati prezzari come servizio digitale in abbonamento, modelli di accesso via API per le software house del settore, strategia di partnership e canali di vendita.',
      en: 'Contributed to building and commercialising the Plus Premium digital product: turning the price-list database into a subscription digital service, API access models for sector software houses, partnership strategy and sales channels.',
    },
  },
  {
    name: 'Grafiche Valdelsa',
    logo: 'graficheValdelsa',
    industry: { it: 'Industria grafica', en: 'Printing industry' },
    sectors: ['manifattura'],
    intervention: {
      it: 'Digitalizzazione del flusso di commessa (dal preventivo alla spedizione), raccolta dati dalle macchine da stampa e cruscotto OEE per misurare fermi e set-up.',
      en: 'Digitalisation of the job flow (from quote to shipping), data collection from printing presses and an OEE dashboard to measure downtime and set-ups.',
    },
  },
  {
    name: 'Helia Voice',
    logo: 'helia',
    industry: { it: 'Assistente vocale AI', en: 'AI voice assistant' },
    sectors: ['ai', 'manifattura'],
    intervention: {
      it: 'Definizione dell’ideal customer profile nel manifatturiero meccanico e della strategia di vendita di un assistente AI vocale per le aziende; implementazione delle strategie di go-to-market e creazione del modello di outbound calling per aumentare i clienti.',
      en: 'Definition of the ideal customer profile in mechanical manufacturing and of the sales strategy for an AI voice assistant for businesses; implementation of go-to-market strategies and design of the outbound calling model to grow the customer base.',
    },
  },
]

/* ---------- Formazione e divulgazione ---------- */
export const teaching: { title: T; meta?: T }[] = [
  {
    title: { it: 'Docente del percorso “IA: strategie, applicazioni e innovazione per le PMI”', en: 'Lecturer, “AI: strategies, applications and innovation for SMEs” course' },
    meta: { it: '16 ore · 4 moduli', en: '16 hours · 4 modules' },
  },
  {
    title: { it: 'Organizzatore del webinar “AI nel settore edile”', en: 'Organiser of the webinar “AI in the construction sector”' },
    meta: { it: 'novembre 2026', en: 'November 2026' },
  },
  {
    title: { it: 'Formazione a imprese, team commerciali e tecnici su CRM, strumenti digitali e AI', en: 'Training for companies, sales and technical teams on CRM, digital tools and AI' },
  },
]

/* ---------- Istruzione ---------- */
export const education: { title: T; institution?: T; logo?: keyof typeof logos }[] = [
  {
    title: { it: 'Executive MBA', en: 'Executive MBA' },
    institution: { it: 'LUISS Business School · Roma', en: 'LUISS Business School · Rome' },
    logo: 'luiss',
  },
  {
    title: { it: 'Master in Digital Transformation & Smart Manufacturing', en: 'Master in Digital Transformation & Smart Manufacturing' },
    institution: { it: 'SDM – School of Management, Università degli Studi di Bergamo', en: 'SDM – School of Management, University of Bergamo' },
    logo: 'sdm',
  },
  {
    title: { it: 'Laurea in Ingegneria Industriale / Gestionale', en: 'Degree in Industrial / Management Engineering' },
    institution: { it: 'Università degli Studi di Bergamo', en: 'University of Bergamo' },
    logo: 'unibg',
  },
  {
    title: { it: 'Laurea in Ingegneria Edile', en: 'Degree in Building Engineering' },
    institution: { it: 'Università degli Studi di Bergamo', en: 'University of Bergamo' },
    logo: 'unibg',
  },
  {
    title: { it: 'Abilitazione all’esercizio della professione di Ingegnere', en: 'Professional Engineer licence (Italy)' },
    logo: 'cni',
  },
]

/* ---------- Competenze ---------- */
export const skills: { title: T; items: Tag[] }[] = [
  {
    title: { it: 'Trasformazione digitale', en: 'Digital transformation' },
    items: [
      { it: 'Assessment di maturità', en: 'Maturity assessment' },
      { it: 'Roadmap Industria 4.0/5.0', en: 'Industry 4.0/5.0 roadmap' },
      'ERP', 'MES', 'MRP', 'CRM (HubSpot)', 'BI', 'IIoT',
      { it: 'Robotica collaborativa', en: 'Collaborative robotics' },
      'Digital twin',
    ],
  },
  {
    title: { it: 'AI applicata', en: 'Applied AI' },
    items: [
      { it: 'Individuazione dei casi d’uso', en: 'Use-case discovery' },
      { it: 'AI generativa e agenti nei processi aziendali', en: 'Generative AI & agents in business processes' },
      { it: 'AI per vendite e CRM', en: 'AI for sales & CRM' },
      { it: 'Valutazione fornitori', en: 'Vendor assessment' },
      { it: 'Governance e adozione', en: 'Governance & adoption' },
    ],
  },
  {
    title: { it: 'Operations & ecosistema', en: 'Operations & ecosystem' },
    items: [
      { it: 'Gestione progetti e portafogli', en: 'Project & portfolio management' },
      { it: 'Progetti europei (Horizon, Interreg, Erasmus+)', en: 'EU projects (Horizon, Interreg, Erasmus+)' },
      { it: 'Partnership con associazioni di categoria e scuole edili', en: 'Partnerships with trade associations & construction schools' },
      { it: 'Sales operations e processi outbound', en: 'Sales operations & outbound processes' },
      { it: 'Formazione', en: 'Training' },
      { it: 'KPI e controllo di gestione', en: 'KPIs & management control' },
    ],
  },
]
export const languages: T[] = [
  { it: 'Italiano (madrelingua)', en: 'Italian (native)' },
  { it: 'Inglese', en: 'English' },
]
