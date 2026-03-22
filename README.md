# Notizie di oggi

Piccolo sito news multi-pagina costruito con [Eleventy](https://www.11ty.dev/) e seedato esclusivamente con i contenuti presenti nella pagina originale del repository.

## Struttura

- `src/index.njk`: homepage editoriale
- `src/archivio/`: archivio delle storie
- `src/categorie/`: indice categorie e pagine categoria generate
- `src/articoli/`: contenuti articolo in Markdown
- `src/_includes/`: layout e partial condivisi
- `src/_data/`: metadata sito, categorie e navigazione
- `src/assets/css/site.css`: foglio di stile principale

## Sviluppo locale

Richiede Node.js 18 o successivo.

```bash
npm install
npm run dev
```

Il server locale di Eleventy espone il sito con hot reload.

## Build

```bash
npm run build
```

L'output statico viene generato in `_site/`.

## GitHub Pages

Il repository include una workflow GitHub Actions che:

1. installa le dipendenze;
2. esegue `npm run build`;
3. pubblica `_site/` su GitHub Pages tramite artifact ufficiale.
