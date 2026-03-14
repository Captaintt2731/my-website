---
name: homelab-client-portal
description: Static 3-page client portal for Teancum's home lab — Jellyfin streaming + Immich photo backup, dark theme, non-technical audience
type: project
---

## Site overview
- 3 pages: index.html (home), jellyfin.html (guide), immich.html (guide)
- Stack: plain HTML/CSS/JS — no build tool, no framework
- Single CSS file: css/styles.css (~826 lines)
- Single JS file: js/main.js (scroll-aware nav, mobile toggle, IntersectionObserver scroll-reveal)
- Assets directory currently empty (no images, no favicon)
- Hosted at: https://github.com/Captaintt2731/my-website
- Live services: jellyfin.teancumshomelab.com and immich.teancumshomelab.com

## Design tokens
- bg: #0f0f13 | surface: #1a1a24 | surface2: #24243a
- Jellyfin blue: #00a4dc | Immich purple: #4250af
- Gold accent: #f5a623 | Text: #f0f0f5 | Muted: #8888aa
- Font: Inter (Google Fonts, weights 300/400/500/600/700/800)
- Border radius: 12px / 20px | Nav height: 70px

## Key UX patterns in use
- Glassmorphism nav (backdrop-filter blur)
- ASCII art hero title (pre tag, clamp font-size, full-width breakout)
- Dual radial-gradient hero background glow
- Feature cards with colored top border accent (3px)
- Mock screen UI with pulsing animation (not real screenshots)
- 3-step onboarding flow with connector lines
- IntersectionObserver scroll-reveal on all cards/steps
- FAQ using native <details>/<summary> with CSS +/rotate animation
- Responsive breakpoint: 768px

## Audience
Non-technical clients — family/friends given access to Teancum's private Jellyfin + Immich instances.
Goal: reduce support burden, give clients confidence to get started independently.

## Review conducted 2026-03-14
Full design/UX audit completed. See recommendations in conversation history.
