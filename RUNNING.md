# Run and edit Andy's website

## Portable runtime (already present in this checkout)

Run this in PowerShell from any starting directory:

```powershell
Set-Location -LiteralPath 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio'
$env:PATH = 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio\.runtime;' + $env:PATH
$env:ASTRO_TELEMETRY_DISABLED = '1'
& 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio\.runtime\node.exe' 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio\.runtime\package\bin\npm-cli.js' run dev -- --host 127.0.0.1
```

Keep the terminal open. Use the URL Astro prints (normally http://127.0.0.1:4321/) and press Ctrl+C to stop. The `.runtime/` folder is ignored by Git, so a fresh clone will need Node.js installed separately.

## With Node.js installed normally

Use Node.js 22.12+ or a newer supported LTS version.

```sh
npm install
npm run dev
```

Open the address printed by Astro, normally http://localhost:4321.

```sh
npm run build
npm run preview
```

The build creates static files in `dist/`. Fonts are bundled locally.

## Editing

- `src/data/home.ts`: introduction, updates, chess, music, projects, facts, contact values, and image paths.
- `src/pages/index.astro`: headings, structural copy, and section layout.
- `src/styles/global.css`: colors, typography, spacing, responsive layouts, and restrained motion.
- `public/images/`: add photos/screenshots here, then set `src` to `/images/filename.jpg` and provide meaningful `alt` text in the content file.

Empty image paths display intentional placeholders. Empty contact values display inactive labels; supply an email and full HTTPS profile URLs to activate them. Bracketed content is unfinished.

The chess replay uses Andy's supplied PGN in `src/data/chess-game.ts`. Edit the PGN there and set `initialPly` to the half-move to show first (0 is the starting position). The board positions are validated and generated at build time using chess.js; no chess engine runs in the browser. The original PGN annotations are preserved in the data file. Unknown event/date fields are not displayed.

## Pages and shared layout

- `/`: `src/pages/index.astro` — introduction, Lately, and short area previews.
- `/chess`: `src/pages/chess.astro` — chess background, highlights, and board placeholder.
- `/music`: `src/pages/music.astro` — playing, listening, and On repeat.
- `/build`: `src/pages/build.astro` — MCC projects and SolveXchange overview.

All four pages use `src/layouts/SiteLayout.astro` for fonts, navigation, active-page indicators, and footer. The footer contact content is in `src/components/Contact.astro` and its values are in `src/data/home.ts`.

Edit `src/data/home.ts` for homepage, chess, build, preview, and contact content, including optional `chess.stories`. The Music page has its own `src/data/music.ts`: listening selections and all Piano, Tenor Saxophone, and Art copy/photo paths live there. Its structure is `src/pages/music.astro` and its page-specific styles are `src/styles/music.css`. Photos still go in `public/images/`. `src/styles/global.css` keeps the original visual design; `src/styles/site.css` adds only page-layout, navigation, and preview-row styles.

The chess viewer uses twelve original, matching SVG assets in `public/chess/`. Piece images are chosen from the validated position, including captures, castling, and promotions. The public White label is Andy Hong; the supplied PGN is unchanged.

Project detail routes are not published in this version. Earlier draft data in `src/data/projects.ts`, `src/layouts/ProjectLayout.astro`, and `src/styles/project.css` remains unused for possible future work.
