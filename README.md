# Andy's personal website

A traditional static website: HTML, CSS, and vanilla JavaScript. No installation or build step is required. All fonts and chess pieces are local.

## Open it

Double-click `index.html` to open the site in your browser. All four pages and the chess replay work directly from disk.

For a local server, use VS Code Live Server: right-click `index.html` and select **Open with Live Server**. Use the URL the extension prints.

If Python is installed:

```powershell
Set-Location -LiteralPath 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio'
python -m http.server 8000 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8000/. Keep the terminal open; press Ctrl+C to stop. Python is optional, not a website dependency.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home: introduction, Lately, area previews, contact |
| `chess.html` | Chess background, highlights, and interactive featured game |
| `music.html` | Listening, Piano, Tenor saxophone, and Art |
| `build.html` | MCC projects and SolveXchange |
| `css/styles.css` | All visual styling, with section comments |
| `js/chess.js` | Standalone chess replay controls and board rendering |
| `data/chess-game.js` | Recorded game positions and initial move |
| `data/featured-game.pgn` | Original supplied PGN with annotations |
| `images/` | Photos, screenshots, favicon, and matching SVG chess pieces |
| `fonts/` | Local DM Sans and Lora font files and licenses |

## Editing

Edit personal text directly in the relevant HTML file. Headings, paragraphs, lists, and links use ordinary HTML. Header and contact/footer markup are repeated intentionally; update those in all four files if you change shared links or contact information.

See [RUNNING.md](RUNNING.md) for image replacement and chess editing details. No framework, browser library, package manager, or chess engine is included.