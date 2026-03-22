module.exports = {
  name: "Notizie di oggi",
  language: "it",
  locale: "it_IT",
  url: "https://davideblesse-bot.github.io/news-today-pages/",
  description:
    "Raccolta sintetica delle notizie principali del 22 marzo 2026, riorganizzata come piccolo quotidiano editoriale su Eleventy.",
  dateLabel: "22 marzo 2026",
  updatedAt: "12:30 CET",
  hero: {
    eyebrow: "GitHub Pages · Rassegna rapida",
    title: "Notizie di oggi",
    lead:
      "Sintesi compatta delle notizie piu visibili del 22 marzo 2026, riorganizzata in un sito editoriale multi-pagina per orientarsi rapidamente tra i temi dominanti della giornata.",
    note:
      "Metodo: qui trovi riassunti sintetici derivati dalla pagina originale. Alcuni temi sono molto dinamici e possono evolvere nel corso della giornata."
  },
  themes: [
    "Iran · Israele · USA",
    "Voto in Italia",
    "Blackout a Cuba",
    "Ucraina",
    "AI e piattaforme social",
    "Politica europea"
  ],
  stats: [
    { label: "Data", value: "22 marzo 2026" },
    { label: "Aggiornata", value: "12:30 CET" },
    { label: "Fonti usate", value: "ANSA · BBC · Euronews" }
  ],
  readingNotes: [
    {
      title: "Il mondo e dominato dalla crisi Iran-Israele",
      body:
        "Quasi tutto ruota attorno al rischio di allargamento del conflitto: basi, energia, rotte marittime, deterrenza e coinvolgimento diretto delle grandi potenze."
    },
    {
      title: "In Europa convivono politica interna e shock esterni",
      body:
        "Italia, Francia, Ungheria e Ucraina mostrano fragilita interne e dipendenza dagli sviluppi internazionali, soprattutto su energia e sicurezza."
    },
    {
      title: "La tecnologia resta una lente sul potere delle piattaforme",
      body:
        "AI generativa, moderazione e manipolazione dei contenuti sono ormai temi politici e sociali, non piu soltanto tecnici."
    }
  ],
  sources: [
    {
      name: "ANSA",
      description: "Homepage italiana usata per i titoli principali di cronaca e politica estera.",
      url: "https://www.ansa.it/"
    },
    {
      name: "BBC News",
      description: "Fonte principale per panorama internazionale, USA, tecnologia e aggiornamenti globali.",
      url: "https://www.bbc.com/news"
    },
    {
      name: "Euronews",
      description: "Utile per leggere la giornata da una prospettiva europea e geopolitica.",
      url: "https://www.euronews.com/"
    }
  ],
  footer:
    "Sito statico pubblicato con GitHub Pages. Contenuti seed derivati esclusivamente dalla pagina originale del repository."
};
