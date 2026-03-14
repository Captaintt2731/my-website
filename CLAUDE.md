# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static 3-page HTML/CSS/JS website — no build tools, no framework, no dependencies to install. Open any `.html` file directly in a browser to preview, or serve with any static file server.

```bash
# Quick local preview (Python, no install needed)
python3 -m http.server 8080 --directory /home/teancumstephens/my-website
```

## Deploying

All changes go to GitHub and are deployed from there:

```bash
git add <files>
git commit -m "message"
git push   # pushes to https://github.com/Captaintt2731/my-website
```

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Home page — hero, feature cards, app showcase, 3-step onboarding |
| `jellyfin.html` | Jellyfin guide — step-by-step, device matrix, FAQ |
| `immich.html` | Immich guide — app setup, server address copy box, features tour, FAQ |
| `css/styles.css` | All styles — single shared stylesheet for all three pages |
| `js/main.js` | Scroll-aware nav, mobile menu, scroll-reveal animation |
| `assets/` | `jellyfin-screenshot.png`, `immich-screenshot.png` (official screenshots from GitHub) |

## Design tokens (CSS custom properties)

Defined at the top of `styles.css`. Key values:

| Token | Value | Used for |
|-------|-------|----------|
| `--bg` | `#0f0f13` | Page background |
| `--surface` | `#1a1a24` | Cards, nav, sections |
| `--surface2` | `#2a2a42` | Borders, hover states |
| `--jellyfin` | `#00a4dc` | Jellyfin brand blue |
| `--immich` | `#4250af` | Immich brand purple |
| `--gold` | `#f5a623` | Eyebrow text, tip borders, contact links |
| `--nav-h` | `70px` | Nav height — used in `calc()` throughout for spacing |

## Architecture notes

**Single stylesheet** — `css/styles.css` serves all three pages. BEM-style naming (`.feature-card__title`, `.guide-step__num`). No CSS modules, no preprocessor.

**Immich-specific overrides** — The guide section on `immich.html` has `class="guide guide--immich"`. This modifier switches the step card left-border and pill badge from Jellyfin blue to Immich purple via `.guide--immich .guide-step` rules in `styles.css`.

**Scroll-reveal** — `js/main.js` adds `.reveal` to target elements on page load, then toggles `.visible` via `IntersectionObserver`. The `.reveal` / `.reveal.visible` transition is defined in CSS, so content is never invisible if JS is slow. `prefers-reduced-motion` disables all animations via a single `@media` block in `styles.css`.

**Screenshot fallback** — In `index.html`, each showcase `<img>` has an `onerror` handler that hides the image and shows the sibling CSS mock-screen animation as a fallback.

**Fixed nav fix** — The nav uses `transform: translateZ(0)` + `isolation: isolate` to prevent iOS Safari from letting scrolling content bleed over the fixed bar. Do not remove these.

## Contact / app URLs

- Contact email: `teancum.stephens@gmail.com`
- Jellyfin: `https://jellyfin.teancumshomelab.com/`
- Immich: `https://immich.teancumshomelab.com/auth/login`

All external links must include `rel="noopener noreferrer"` alongside `target="_blank"`.
