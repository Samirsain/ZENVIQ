# DESIGN.md — ZENVIQ Digital Agency

> A premium digital agency design system that fuses Stripe's typographic elegance, Vercel's monochrome precision, and Linear's surface hierarchy — adapted for a light-canvas, indigo-accented agency identity.

---

## 1. Visual Theme & Atmosphere

ZENVIQ's website is a premium agency canvas — clean white surfaces (`#ffffff`) with deep slate headings (`#0f172a`) and a signature indigo accent (`#4f46e5`) that functions as both brand anchor and interactive highlight. The overall impression is of a world-class digital agency that lets craft speak louder than chrome.

The design philosophy blends three world-class systems:
- **Stripe's weight-300 elegance** — light, confident headlines that don't need to shout
- **Vercel's shadow-as-border precision** — multi-layer shadow stacks instead of heavy borders
- **Linear's surface hierarchy** — clear elevation through surface stepping, not decorative noise

**Key Characteristics:**
- Geist Sans as primary typeface with negative letter-spacing at display sizes
- Weight 600 for headlines, 400 for body — clean two-weight system
- Blue-tinted multi-layer shadows inspired by Stripe's `rgba(50,50,93,0.25)` system
- Deep slate (`#0f172a`) headings instead of pure black — warmth matters
- Conservative border-radius (6px–12px) — nothing pill-shaped on CTAs, nothing harsh
- Indigo-to-cyan gradient as the brand signature for accent text
- Glassmorphism panels with `backdrop-filter: blur(24px)` for floating navigation

---

## 2. Color Palette & Roles

### Primary
| Token | Hex | Role |
|-------|-----|------|
| `--brand-indigo` | `#4f46e5` | Primary CTA, interactive highlights, link emphasis |
| `--brand-indigo-hover` | `#4338ca` | Hover state for primary interactive elements |
| `--brand-indigo-light` | `#eef2ff` | Subtle tinted surfaces for badges and highlights |
| `--heading-ink` | `#0f172a` | Primary headings — deep slate, not black |
| `--canvas` | `#ffffff` | Page background, card surfaces |

### Gradient System
| Token | Value | Role |
|-------|-------|------|
| `--gradient-brand` | `from-blue-600 via-indigo-600 to-cyan-500` | Signature gradient for accent text and decorative elements |
| `--gradient-hero-glow` | `from-blue-100/30 via-indigo-50/20 to-cyan-100/30` | Ambient hero background glow |
| `--gradient-card-hover` | `from-indigo-50 to-blue-50` | Subtle card hover surface |

### Neutral Scale
| Token | Hex | Role |
|-------|-----|------|
| `--ink-primary` | `#0f172a` | Headings, nav text, strong labels |
| `--ink-secondary` | `#334155` | Sub-headings, card titles |
| `--ink-body` | `#64748b` | Body text, descriptions |
| `--ink-muted` | `#94a3b8` | Captions, metadata, timestamps |
| `--ink-disabled` | `#cbd5e1` | Disabled text, placeholder |

### Surface & Borders
| Token | Hex | Role |
|-------|-----|------|
| `--surface-0` | `#ffffff` | Default page canvas |
| `--surface-1` | `#f8fafc` | Subtle lift — section backgrounds |
| `--surface-2` | `#f1f5f9` | Card hover, input backgrounds |
| `--border-default` | `#e2e8f0` | Standard card borders, dividers |
| `--border-subtle` | `#f1f5f9` | Faint borders for nested elements |
| `--border-active` | `#4f46e5` | Focused inputs, active states |

### Shadows (Stripe-Inspired Blue-Tinted)
| Level | Value | Use |
|-------|-------|-----|
| Ambient (L1) | `rgba(50,50,93,0.06) 0px 3px 6px` | Subtle hover hint |
| Standard (L2) | `rgba(50,50,93,0.08) 0px 15px 35px` | Standard cards, content panels |
| Elevated (L3) | `rgba(50,50,93,0.15) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px` | Featured cards, popovers |
| Floating (L4) | `rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.1) 0px 30px 60px -30px` | Navigation, modals |
| Neon Glow | `0 20px 60px -20px rgba(59,130,246,0.15)` | Special emphasis elements |

---

## 3. Typography Rules

### Font Family
- **Primary**: `Geist Sans` (already installed via `geist` package)
- **Mono**: `Geist Mono` (for code, technical labels)
- **Display**: `Jost` (available as variable `--font-jost`) for special brand moments
- **OpenType**: Enable `"liga"` on all Geist text

### Hierarchy
| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Geist | 64px (4rem) | 700 | 1.1 (tight) | -2.5px | Maximum impact headlines |
| Display Large | Geist | 48px (3rem) | 700 | 1.1 (tight) | -1.5px | Section hero headlines |
| Section Heading | Geist | 36px (2.25rem) | 700 | 1.15 (tight) | -1.0px | Feature section titles |
| Sub-heading | Geist | 24px (1.5rem) | 600 | 1.25 | -0.5px | Card headings |
| Body Large | Geist | 18px (1.125rem) | 400 | 1.6 (relaxed) | normal | Feature descriptions |
| Body | Geist | 16px (1rem) | 400 | 1.5 | normal | Standard reading text |
| Body Small | Geist | 14px (0.875rem) | 400 | 1.5 | normal | Card descriptions |
| Caption | Geist | 12px (0.75rem) | 500 | 1.4 | normal | Metadata, badges |
| Button | Geist | 14px–16px | 600 | 1.0 (tight) | normal | CTA labels |
| Nav Link | Geist | 14px | 500 | 1.43 | normal | Navigation items |

### Principles
- **Negative tracking at display** — letter-spacing tightens proportionally: -2.5px at 64px, -1.5px at 48px, normal at 16px
- **Two-weight hierarchy** — 700 for display/headlines, 400 for body. 600 for UI/buttons. 500 for navigation
- **Gradient text for brand emphasis** — `.gradient-text` class applies the brand gradient via `bg-clip-text`
- **Never use weight 100–300 for headlines** — ZENVIQ headlines are bold and confident, not whispered

---

## 4. Component Stylings

### Buttons

**Primary CTA (Dark)**
- Background: `#0f172a` (slate-900)
- Text: `#ffffff`
- Padding: 14px 32px (h-14 px-8)
- Radius: 9999px (full pill for primary CTA)
- Shadow: `0 10px 25px -5px rgba(15,23,42,0.3)`
- Hover: `#1e293b` (slate-800)
- Font: 16px Geist weight 600

**Primary CTA (Indigo)**
- Background: `#4f46e5`
- Text: `#ffffff`
- Padding: 10px 24px
- Radius: 9999px
- Shadow: `0 10px 25px -5px rgba(79,70,229,0.3)`
- Hover: `#4338ca`
- Font: 14px Geist weight 600

**Secondary / Outlined**
- Background: `#ffffff`
- Text: `#334155`
- Padding: 14px 32px
- Radius: 9999px
- Border: `1px solid #e2e8f0`
- Shadow: `0 1px 2px rgba(0,0,0,0.05)`
- Hover: border shifts to `#cbd5e1`
- Font: 16px Geist weight 500

**Ghost Link Button**
- Background: transparent
- Text: `#4f46e5`
- Padding: 8px 16px
- No border, underline on hover
- Font: 14px Geist weight 500

### Cards & Containers

**Standard Card**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 12px
- Shadow: `rgba(50,50,93,0.08) 0px 15px 35px, rgba(0,0,0,0.04) 0px 5px 15px`
- Padding: 24px
- Hover: shadow intensifies to L3

**Glass Panel**
- Background: `rgba(255,255,255,0.7)`
- Backdrop: `blur(24px)`
- Border: `1px solid rgba(226,232,240,0.8)`
- Shadow: `0 20px 40px -12px rgba(0,0,0,0.08)`
- Radius: 9999px (for nav) or 16px (for panels)

**Feature Card (Hover Lift)**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 12px
- Shadow: Standard (L2) → Elevated (L3) on hover
- Transform: `translateY(-2px)` on hover
- Transition: `all 0.3s ease`

### Trust Badge / Pill
- Background: `rgba(219,234,254,0.5)` (blue-50/50)
- Text: `#2563eb` (blue-600)
- Padding: 6px 12px
- Radius: 9999px
- Border: `1px solid #dbeafe` (blue-100)
- Font: 10px–12px weight 700, uppercase, tracking-wide
- Live dot: animated ping in blue-400

### Input Fields
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 8px
- Focus: `1px solid #4f46e5` + ring glow
- Label: `#334155`, 14px Geist weight 500
- Placeholder: `#94a3b8`

### Navigation
- Floating pill nav: fixed top-4, centered, max-w-7xl
- Background: glass panel `rgba(255,255,255,0.7)` + `backdrop-blur(12px)`
- Border: `1px solid rgba(255,255,255,0.2)`
- Shadow: escalates on scroll from subtle to floating
- Links: 14px Geist weight 500, `--ink-body` color
- Active link: `--ink-primary` color
- CTA button: indigo pill right-aligned
- Mobile: hamburger collapse with slide-in panel

### Services Dropdown
- Background: `#ffffff`
- Border: `1px solid #e5e7eb`
- Radius: 12px
- Shadow: elevated (L3)
- Grid: 2-column layout
- Items: icon (indigo bg/white icon on hover) + title + description
- Footer: border-t with "Talk to an expert" link

---

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120px
- Section padding: 80px–120px vertical
- Card padding: 24px (standard), 32px (featured)
- Container max-width: 1280px (7xl)

### Grid & Container
- Max content: `max-w-7xl` (1280px), centered with `mx-auto px-6`
- Hero: 2-column grid (content left, 3D model right) on desktop, stacked on mobile
- Feature sections: 2–3 column grids for cards
- Services: parallax scroll with full-width treatments

### Whitespace Philosophy
- **Generous but purposeful** — every gap is a deliberate typographic choice
- **Section rhythm** — alternate between white sections and subtle `--surface-1` sections
- **Dense content, generous chrome** — information blocks are tight, but the frame around them breathes
- **Hero breathing room** — min-height 90vh with centered content and generous padding

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No shadow | Page background, inline text |
| Ambient (L1) | Blue-tinted `rgba(50,50,93,0.06) 0px 3px 6px` | Subtle hover hints |
| Standard (L2) | `rgba(50,50,93,0.08) 0px 15px 35px` | Standard cards |
| Elevated (L3) | Multi-layer: `rgba(50,50,93,0.15) 0px 30px 45px -30px, rgba(0,0,0,0.08) 0px 18px 36px -18px` | Featured cards, dropdowns |
| Floating (L4) | `rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.1) 0px 30px 60px -30px` | Navigation, modals |
| Neon Glow | `0 20px 60px -20px rgba(59,130,246,0.15)` | Special emphasis |
| Glass | `backdrop-filter: blur(24px)` + semi-transparent bg | Navigation bar |

### Shadow Philosophy
Following Stripe's principle of **chromatic depth**: shadows use blue-gray tints (`rgba(50,50,93,...)`) instead of neutral black, making elevation feel brand-colored. Multi-layer approach pairs the branded shadow (far) with a neutral shadow (close) for parallax-like depth. Negative spread values keep shadows vertical and controlled.

### Decorative Depth
- Ambient glow orbs: `blur(100px)` gradient circles behind hero content
- Tech grid: `50px x 50px` grid lines at 0.3 opacity with radial mask fade
- 3D model: floating Three.js scene with contact shadows and environment lighting

---

## 7. Do's and Don'ts

### Do
- Use Geist Sans as the primary typeface across all text elements
- Apply negative letter-spacing at display sizes (-2.5px at 64px, progressive relaxation)
- Use blue-tinted shadows (`rgba(50,50,93,...)`) for all elevated elements
- Use `#0f172a` (deep slate) for headings — never pure `#000000`
- Apply `.gradient-text` for brand accent text (from-blue-600 via-indigo-600 to-cyan-500)
- Use glassmorphism for floating navigation with `backdrop-blur`
- Keep button radius at 9999px (pill) for primary CTAs
- Use the trust badge pattern (live dot + uppercase label) for social proof
- Apply smooth `transition-all duration-300` on all interactive elements
- Use Framer Motion for scroll-triggered entrance animations

### Don't
- Don't use pure black (`#000000`) for any text — always use the slate scale
- Don't use heavy drop shadows — keep all shadows under 0.25 opacity
- Don't mix warm colors (orange, yellow, red) into the UI chrome — indigo/blue is primary
- Don't use border-radius larger than 16px on cards — keep it conservative
- Don't skip the gradient text treatment for brand emphasis
- Don't use CSS animations when Framer Motion is available
- Don't use inline styles — Tailwind only
- Don't apply pill radius to cards — pills are for buttons and badges only
- Don't use font weights below 400 for body text
- Don't add decorative gradients that don't serve the content

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero stacks, 36px display size, px-4 |
| Tablet | 640–768px | 2-column grids begin, 40px display |
| Tablet Large | 768–1024px | Full card grids, expanded nav |
| Desktop | 1024–1280px | 2-column hero, full layout |
| Desktop Large | >1280px | Centered with generous margins |

### Touch Targets
- Buttons: minimum 44px tap height
- Navigation links: 14px with adequate spacing (gap-8)
- Mobile nav toggle: full hamburger with padding
- CTA buttons: h-14 (56px) on primary actions

### Collapsing Strategy
- Hero: 2-column → stacked, 3D model below content
- Navigation: horizontal pill → hamburger with slide-in panel
- Feature cards: 3-column → 2-column → single column
- Section spacing: 80px+ → 48px on mobile
- Display type: 64px → 48px → 36px across breakpoints
- Services dropdown: 2-column grid → vertical list on mobile

### Image Behavior
- 3D model: responsive height (400px mobile → 600px desktop)
- Card images: maintain aspect ratio, consistent 12px border-radius
- Hero glow orbs: simplify/reduce opacity on mobile for performance

---

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Slate 900 (`#0f172a`) or Indigo 600 (`#4f46e5`)
- CTA Hover: Slate 800 (`#1e293b`) or Indigo 700 (`#4338ca`)
- Background: Pure White (`#ffffff`)
- Section Alt: Slate 50 (`#f8fafc`)
- Heading text: Slate 900 (`#0f172a`)
- Body text: Slate 500 (`#64748b`)
- Border: Slate 200 (`#e2e8f0`)
- Link/Accent: Indigo 600 (`#4f46e5`)
- Gradient: `from-blue-600 via-indigo-600 to-cyan-500`

### Example Component Prompts
- "Create a hero section on white background. Headline at 48px Geist weight 700, line-height 1.1, letter-spacing -1.5px, color #0f172a. Subtitle at 18px weight 400, line-height 1.6, color #64748b. Dark CTA button (#0f172a, pill radius, h-14 px-8, white text, shadow-xl) and outlined button (white, 1px solid #e2e8f0, #334155 text, pill radius)."

- "Design a card: white background, 1px solid #e2e8f0 border, 12px radius. Shadow: rgba(50,50,93,0.08) 0px 15px 35px. Title at 20px Geist weight 600, letter-spacing -0.5px, color #0f172a. Body at 14px weight 400, #64748b. Hover: shadow intensifies, translateY(-2px)."

- "Build a trust badge: blue-50/50 background, blue-600 text, pill radius, 6px 12px padding, 10px Geist weight 700 uppercase, border 1px solid blue-100. Include animated ping dot in blue-400."

- "Create navigation: floating pill at top-4, glass panel (rgba(255,255,255,0.7), backdrop-blur-md), border rgba(255,255,255,0.2). Geist 14px weight 500 for links. Indigo pill CTA right-aligned. Shadow escalates on scroll."

- "Design a services dropdown: white background, 12px radius, elevated shadow. 2-column grid with icon (indigo-50 bg → indigo-600 bg on hover) + title + description. Footer with 'Talk to an expert' link."

### Animation Patterns
- **Entrance**: Framer Motion `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Hover lift**: `translateY(-2px)` + shadow escalation
- **Trust badge ping**: CSS `animate-ping` on 2px dot
- **Hero glow**: CSS `animate-pulse` on blur orbs
- **3D model float**: Three.js Float component with `speed: 1.5, rotationIntensity: 0.2`
- **Marquee**: CSS linear infinite scroll for testimonials/logos
- **Scroll trigger**: Framer Motion `whileInView` with `viewport={{ once: true }}`

### Iteration Guide
1. Geist Sans is already installed via the `geist` package — use `GeistSans` and `GeistMono` classes
2. Shadow formula: `rgba(50,50,93,OPACITY) 0px Y1 B1 -S1, rgba(0,0,0,OPACITY) 0px Y2 B2 -S2`
3. Heading color is `#0f172a` (slate-900), body is `#64748b` (slate-500)
4. All interactive elements need `transition-all duration-300`
5. Use Framer Motion's `motion.div` for scroll-triggered animations, not CSS keyframes
6. Glass panels: `bg-white/70 backdrop-blur-md border-white/20`
7. Gradient text: `bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent`
8. Trust/social proof elements use the ping dot + uppercase + tracking-wide pattern
