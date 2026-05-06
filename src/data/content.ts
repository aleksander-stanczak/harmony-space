export const SERVICES = [
  {
    icon: "candle" as const,
    name: "Masaż świecą aromaterapeutyczną",
    desc: "Ciepły wosk roztapia się w olejek pielęgnacyjny. Aromat unosi, dotyk uziemia.",
    items: [
      { duration: "30 min", price: "152 zł", original: "160 zł" },
      { duration: "60 min · plecy", price: "199,50 zł", original: "210 zł" },
    ],
  },
  {
    icon: "leaf" as const,
    name: "Masaż relaksacyjny",
    desc: "Spokojne, płynne ruchy. Oddech zwalnia, mięśnie odpuszczają.",
    items: [
      { duration: "30 min", price: "114 zł", original: "120 zł" },
      { duration: "60 min", price: "171 zł", original: "180 zł" },
    ],
  },
  {
    icon: "drop" as const,
    name: "Masaż ciepłym olejem kokosowym",
    desc: "Aksamitne ciepło kokosa rozpuszcza zmęczenie skóry i ciała.",
    items: [
      { duration: "40 min · plecy", price: "180 zł" },
      { duration: "60 min · całe ciało", price: "220 zł" },
    ],
  },
  {
    icon: "hands" as const,
    name: "Masaż klasyczny",
    desc: "Sprawdzone techniki, świadomy dotyk — fundament regeneracji.",
    items: [
      { duration: "30 min", price: "95 zł", original: "100 zł" },
    ],
  },
  {
    icon: "drops" as const,
    name: "Drenaż limfatyczny",
    desc: "Delikatne, rytmiczne ruchy uwalniające zastoje. Lekkość po pierwszej wizycie.",
    items: [
      { duration: "60 min", price: "171 zł", original: "180 zł" },
    ],
  },
  {
    icon: "lotus" as const,
    name: "Masaż twarzy",
    desc: "Krótki rytuał, który rozjaśnia rysy i odpręża napięcia dnia.",
    items: [
      { duration: "30 min", price: "85,50 zł", original: "90 zł" },
    ],
  },
  {
    icon: "branch" as const,
    name: "Masaż Kobido",
    desc: "Japoński lifting twarzy. Stymulacja, modelowanie, blask.",
    items: [
      { duration: "60 min", price: "190 zł", original: "200 zł" },
      { duration: "90 min · z transbukalnym", price: "256,50 zł", original: "270 zł" },
    ],
  },
];

export const ABOUT_PARAGRAPHS = [
  "Gabinet stworzony z myślą o kobietach szukających miejsca, w którym relaks i odprężenie łączą się z dobrodziejstwami masażu leczniczego.",
  "W czasach ciągłego hałasu, stresu, napięć — zależy mi by łączyć masaż z równie ważnym ukojeniem psychicznym. Kameralne wnętrze, woń roznoszących się naturalnych olejków eterycznych, przygaszone światło sprawią, że wizyta stanie się regeneracją dla ciała i ducha.",
  "W swojej pracy łączę masaż z technikami fizjoterapeutycznymi, patrząc w sposób kompleksowy na zgłaszany mi problem. Jestem mgr fizjoterapii oraz posiadam tytuł technika masażysty. Dzięki zdobytej wiedzy masaż dobierany jest indywidualnie do potrzeb każdej z Was.",
  "Mam nadzieję, że czas spędzony w gabinecie będzie dla Ciebie przyjemnością.",
];

export const CONTACT = {
  street: "Miłkowskiego 2A",
  zip: "04-683 Warszawa",
  district: "Wawer",
  phone: "572 894 440",
  phoneHref: "tel:+48572894440",
  booksy: "https://booksy.com/pl-pl/193222_harmonyspace-gabinet-masazu_masaz_3_warszawa",
  hours: [
    { day: "Pon — Pt", time: "9:00 — 20:00" },
    { day: "Sobota", time: "10:00 — 16:00" },
    { day: "Niedziela", time: "zamknięte" },
  ],
};

export const GALLERY = [
  { src: "/assets/gallery/01-room.jpeg", alt: "Gabinet — łóżko do masażu, tapeta z liśćmi" },
  { src: "/assets/gallery/03-candle.jpeg", alt: "Świece i naturalne olejki" },
  { src: "/assets/gallery/04-yoga.jpeg", alt: "Figurka jogi i sukulenty" },
  { src: "/assets/gallery/07-chairs.jpeg", alt: "Poczekalnia — fotele" },
  { src: "/assets/gallery/05-mirror.jpeg", alt: "Okrągłe lustro, kącik relaksu" },
  { src: "/assets/gallery/06-entrance.jpeg", alt: "Wejście do gabinetu" },
  { src: "/assets/gallery/02-sign.jpeg", alt: "Tabliczka HarmonySpace" },
];
