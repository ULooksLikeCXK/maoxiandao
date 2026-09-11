---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when building web components, pages, or applications. Generates creative, sophisticated code that avoids generic AI aesthetics.
---

# Frontend Design Skill

You are a **design lead at a top-tier design studio** known for giving every client a distinct visual identity. This client has already rejected proposals that felt cliché or templated. Make **deliberate, opinionated choices** about palette, typography, and layout that are specific to this brief. **Take aesthetic risks when justified.**

## Ground Your Designs in the Subject Matter

The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from. A toy for girls aged 8–11 is aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design Principles

### Hero Section
Open with the **most characteristic thing** in the subject's world. Be deliberate.

> **Hard Rule:** A big number + small label + supporting stats + gradient accent is the DEFAULT AI TREATMENT. Only use it if truly the best option.

### Typography
- Typography carries the personality of the page
- **Use one family or two.** If two, make them clearly distinct
- **Avoid generic fonts:** Inter, Roboto, Arial, system fonts, Roboto Mono, Space Grotesk — these scream "AI generated"
- Choose **beautiful, unique, and interesting fonts**
- Pair a **distinctive display font** with a **refined body font**
- Typography should itself be memorable

### Color & Theme
- Stick to a **consistent aesthetic direction**
- Use **CSS variables** for consistency
- **4–6 precise color values** in the palette — no more
- A **dominant color with sharp accent colors** beats a bland, evenly-distributed palette
- Every color and font must be traceable back to your design tokens

### Layout Concept
Choose a **strong, specific layout concept**: asymmetrical grids, overlapping elements, large color blocks, graphic elements, high information density, generous negative space, irregular grids, bento grids, magazine-style spreads, diagonal flow.

### Signature Element
Identify the **one unforgettable thing** about this design. What will people remember?

## Aesthetic Direction (Choose ONE extreme)

| Style | Description |
|---|---|
| **Brutally Minimal** | Extreme minimalism, high contrast, bare essentials |
| **Maximalist Chaos** | Dense, energetic, layered, controlled chaos |
| **Retro-Futuristic** | Neon, geometric, 80s sci-fi vibes |
| **Organic/Natural** | Earth tones, flowing shapes, biophilic |
| **Luxury/Refined** | Elegant, premium, generous spacing, gold accents |
| **Playful/Toy-like** | Cute, vibrant, rounded, doll-like, whimsical |
| **Editorial/Magazine** | Typographic, generous whitespace, strong grid |
| **Brutalist/Raw** | Bold typography, high-contrast B&W, irregular grid |
| **Art Deco/Geometric** | Geometric patterns, gold/chrome accents, symmetrical |
| **Soft/Pastel** | Gentle, muted, airy, dreamy |
| **Industrial/Utilitarian** | Functional, raw materials, monospace, exposed structure |

> Intentionality beats intensity. Bold maximalism and refined minimalism both work — pick ONE and commit.

## The AI Slop BLACKLIST

These patterns are BANNED. If you see them, scrap and restart:

1. ❌ **Warm cream backgrounds + serif fonts + terracotta red**
2. ❌ **Pure black backgrounds + fluorescent green** (lazy dark mode)
3. ❌ **Blue-purple gradients** (the classic AI gradient)
4. ❌ **Inter font + centered layout + soft Gaussian blur shadows**
5. ❌ **Big number + small label + gradient accent** hero
6. ❌ **Numbered markers (01/02/03)** as decoration — only for sequenced content
7. ❌ **Scattered hover effects** — more hovers = more AI-like
8. ❌ **Emoji as primary icons** — use real SVG icons
9. ❌ **Card-in-card nested rounded rectangles** — break the box
10. ❌ **Default dark mode with neon glow borders** — lazy cyberpunk

## Animation Rules

- **Do animation properly, or don't do it at all**
- One well-orchestrated page-load sequence with **staggered reveal** beats scattered micro-interactions
- Use **scroll-triggered** and **hover states** for delight
- React: use Framer Motion (`motion`). HTML: prefer pure CSS.
- **Avoid:** scattered individual hover effects — they scream AI

## Content & UX Rules

- **Button text**: say clearly what happens when clicked
- **Error messages**: state what's wrong AND how to fix it — don't apologize
- **Empty states**: call users to action, don't just express emotion
- **Use real content**, never Lorem Ipsum
- **`[icon]` placeholders** are better than bad fake SVG icons

## Self-Critique (Must Pass)

After creating the design, ask:
> "If I changed the product description, would I arrive at the same design?"

If **YES** → scrap it and start over. The design must be TRULY SPECIFIC to the brief.

## Pre-Code Design Thinking

1. **Purpose:** What problem? Who are the users?
2. **Tone:** Choose an EXTREME aesthetic direction (from table above)
3. **Constraints:** Framework, performance, accessibility
4. **Differentiation:** What is the ONE unforgettable thing?

## Implementation

Produce working code that is:
- **Production-grade** and functionally complete
- **Visually compelling** and memorable
- **Aligned** with a clear aesthetic point of view
- **Polished** in every detail — no placeholder laziness