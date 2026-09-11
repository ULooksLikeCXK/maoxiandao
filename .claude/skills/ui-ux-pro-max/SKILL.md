---
name: ui-ux-pro-max
description: Design intelligence engine for building professional UI/UX. Provides a searchable database of 57 UI styles, 95 color palettes, 56 font pairings, 98 UX best practices, and 24 page patterns. Use when designing or redesigning any UI component, page, or application.
---

# UI/UX Pro Max — Design Intelligence Engine

You have access to an embedded design knowledge base. Before designing any UI, consult the relevant categories below.

## 57 UI Styles Database

Choose a style direction from:

| Category | Styles |
|----------|--------|
| **Glassmorphism** | Frosted glass, blurred backgrounds, layered transparency |
| **Neumorphism** | Soft shadows, extruded forms, monochromatic depth |
| **Brutalism** | Raw HTML aesthetic, bold typography, high contrast, no smooth corners |
| **Bento Grid** | Modular card grid, varied sizes, Apple-style dashboard |
| **Minimalism** | Maximum whitespace, single focal point, essential elements only |
| **Dark Mode Premium** | Deep OLED blacks, rich gradients, jewel-tone accents |
| **Claymorphism** | Puffy 3D shapes, soft shadows, playful, toy-like |
| **Retro Wave** | Neon, synthwave, 80s arcade, CRT scanlines |
| **Y2K Aesthetic** | Early 2000s web, metallic, gradients, bubblegum pink |
| **Vaporwave** | Purple/pink gradients, marble statues, Japanese text |
| **Organic/Biophilic** | Natural materials, flowing curves, earth tones, greenery |
| **Swiss/International** | Grid system, Helvetica, asymmetric layout, photographic |
| **Art Deco** | Geometric, gold/chrome, symmetrical, Great Gatsby |
| **Memphis Design** | Bold geometric shapes, squiggles, primary colors, 80s postmodern |
| **Cyberpunk** | Neon, dark, dystopian, matrix, tech-noir |
| **Pastel Soft** | Gentle gradients, rounded everything, dreamy |
| **Magazine Editorial** | Large type, generous white space, full-bleed images |
| **Skeuomorphism** | Realistic textures, 3D depth, real-world metaphors |
| **Flat Design** | No shadows, solid colors, clean icons, minimalist |
| **Material Design** | Google's design language, elevation, responsive |
| **Luxury/Premium** | Gold, serif fonts, generous spacing, dark backgrounds |
| **Hacker/Terminal** | Monospace, green-on-black, command-line aesthetic |
| **Pixel Art** | Retro gaming, 8-bit, blocky, nostalgia |
| **Corporate/SaaS** | Professional, blue-dominant, clean, structured |
| **E-commerce Showcase** | Product-forward, large imagery, CTA-driven |
| **Dashboard/Data** | Data-dense, organized, clear hierarchy, accessible |
| **Gaming/Esports** | Aggressive, neon, angular, energetic |
| **Accessible/Universal** | WCAG AAA, high contrast, readable, inclusive |
| **Motion-First** | Animation as primary design element, scroll-driven |
| **Collage/Zine** | Cut-and-paste, overlapping, handmade feel |

## 95 Color Palettes

When selecting colors, use the following methodology:

### Palette Construction
- **1 Dominant color** (60% of surface)
- **2 Supporting colors** (30% combined)
- **1-2 Accent colors** (10% combined — use sparingly for CTAs, highlights)
- **Neutral scale**: 50-950 range for backgrounds, surfaces, text

### Semantic Color Tokens
```css
--color-primary:        /* Brand, main actions */
--color-primary-hover:  /* Hover state */
--color-secondary:      /* Supporting elements */
--color-surface:        /* Card, modal backgrounds */
--color-background:     /* Page background */
--color-text-primary:   /* Headings, body text */
--color-text-secondary: /* Captions, metadata */
--color-accent:         /* Highlights, badges, special */
--color-success:        /* Confirmation, completion */
--color-warning:        /* Caution, pending */
--color-error:          /* Danger, deletion, alerts */
--color-border:         /* Dividers, outlines */
```

### Palette Selection by Mood
| Mood | Palette Direction |
|------|------------------|
| **Trust/Security** | Cool blues, navy, white, subtle gold |
| **Energy/Excitement** | Warm reds, oranges, bright yellows |
| **Calm/Peaceful** | Soft greens, lavenders, earth tones |
| **Luxury/Exclusive** | Deep charcoal, gold, cream, burgundy |
| **Playful/Fun** | Bright primaries, pops of neon, rainbow accents |
| **Tech/Innovation** | Deep purple, cyan, electric blue, dark bg |
| **Natural/Organic** | Sage green, terracotta, warm beige, brown |
| **Bold/Disruptive** | High contrast B&W + single vivid accent |

## 56 Font Pairings

### Pairing Rules
1. **Display + Body** — One distinctive headline font + one readable body font
2. **Contrast is key** — If display is serif, body should be sans-serif (or vice versa)
3. **Weight matters** — Bold display (700-900) + regular body (400-500)
4. **Spacing** — Tighter letter-spacing on display, looser on body

### Recommended Pairings
| Display (Headings) | Body (Text) | Best For |
|---|---|---|
| Playfair Display | Source Sans 3 | Editorial, luxury |
| Bebas Neue | Montserrat | Bold, impactful |
| DM Serif Display | DM Sans | Modern classic |
| Clash Display | Cabinet Grotesk | Tech, startup |
| Syne | Space Grotesk | Creative, bold |
| Fraunces | Inter (only when necessary) | Warm, organic |
| Instrument Serif | Instrument Sans | Refined, gallery |
| Outfit | Public Sans | Clean, friendly |
| Bricolage Grotesque | Work Sans | Quirky, personality |
| Newsreader | Lato | News, content-heavy |
| Young Serif | Nunito Sans | Approachable, warm |
| VT323 | JetBrains Mono | Terminal, retro tech |

## 98 UX Best Practices

### Layout
- Use 8px grid system for spacing consistency
- Content width: max 65ch for readability on long text
- F-pattern for scanning pages, Z-pattern for landing pages
- Mobile tap targets: minimum 44×44px
- Sticky elements: consider safe areas (notch, home indicator)

### Navigation
- Current page should be clearly indicated
- Breadcrumbs for sites with 3+ levels of depth
- Back button should always work as expected
- Menu items: 5-7 max in primary nav

### Motion
- Duration: 200-300ms for micro-interactions, 300-500ms for transitions
- Easing: ease-out for entering, ease-in for exiting
- Stagger children by 50-100ms for lists
- Respect `prefers-reduced-motion`
- One high-impact page-load animation > many micro-interactions

### Accessibility
- Color contrast: minimum 4.5:1 for text, 3:1 for large text
- Focus indicators: visible, high-contrast, never remove
- Alt text: descriptive for meaningful images, empty for decorative
- Form inputs: always have visible labels
- Keyboard: all interactive elements reachable via Tab

### Copy & Content
- Headlines: 6-12 words max
- Body: 16-24 words per sentence max
- Buttons: verb-led, specific (not "Submit", use "Create account")
- Empty states: guide to action, not just emotion
- Error messages: what happened + how to fix

## 24 Page Patterns

| Pattern | Best For |
|---------|----------|
| Hero + Features + CTA | SaaS landing |
| Hero + Problem/Solution + Testimonials | B2B |
| Full-screen Hero + Scroll | Brand storytelling |
| Bento Grid Showcase | Product features |
| Split Screen (L/R) | Comparison, dual focus |
| Card Grid + Filter | Directory, e-commerce |
| Timeline/Narrative | About, journey |
| Dashboard/Data View | Analytics, admin |
| Magazine/News Feed | Content, blog |
| Single Column Form | Signup, checkout |
| Modal/Overlay Focus | Quick actions, confirmations |
| Mega Menu + Sections | Complex navigation |
| Infinite Scroll Feed | Social, discovery |
| Tab-based Panel | Settings, documentation |
| Wizard/Stepper | Multi-step flows |
| Sidebar + Content | Docs, admin, dashboard |
| Masonry Grid | Portfolio, gallery |
| Map + List | Location-based |
| Kanban Board | Project management |
| Chat/Conversation | Messaging, support |
| Video-first | Media, entertainment |
| Interactive 3D/Canvas | Immersive brand |
| Gamified/Progress | Onboarding, achievements |
| Print-style Layout | Editorial features |

## Design Process

When designing any UI:

1. **Audit**: What's the subject matter? Who are the users? What's the primary job?
2. **Select Style**: Pick 1 style from the 57 styles above — commit to it
3. **Choose Palette**: Build a 4-6 color palette using tokens
4. **Pair Fonts**: 1 display + 1 body from the pairing list
5. **Pick Pattern**: Select the closest page pattern, adapt to content
6. **Apply UX Rules**: Run through the 98 best practices checklist
7. **Signature Element**: What is the ONE thing people will remember?
8. **Self-Critique**: Would a different product get the same design? If yes, restart.