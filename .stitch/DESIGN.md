---
name: Black & Gold Premium
colors:
  background: '#121212'
  surface: '#1E1E1E'
  surface-dim: '#18181B'
  surface-bright: '#27272A'
  surface-container-lowest: '#09090B'
  surface-container-low: '#18181B'
  surface-container: '#27272A'
  surface-container-high: '#3F3F46'
  surface-container-highest: '#52525B'
  on-surface: '#FAFAFA'
  on-surface-variant: '#A1A1AA'
  inverse-surface: '#FAFAFA'
  inverse-on-surface: '#18181B'
  outline: '#52525B'
  outline-variant: '#3F3F46'
  surface-tint: '#D4AF37'
  primary: '#D4AF37'
  on-primary: '#121212'
  primary-container: '#332900'
  on-primary-container: '#FBE8A6'
  inverse-primary: '#9C7A1C'
  secondary: '#E4C56B'
  on-secondary: '#121212'
  secondary-container: '#524515'
  on-secondary-container: '#FBE8A6'
  tertiary: '#FAFAFA'
  on-tertiary: '#121212'
  tertiary-container: '#3F3F46'
  on-tertiary-container: '#F4F4F5'
  error: '#EF4444'
  on-error: '#450A0A'
  error-container: '#7F1D1D'
  on-error-container: '#FECACA'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 110%
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 115%
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1.25rem
  xl: 2rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  card-padding: 32px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
---

# Design System: Be Unique Clinic

## 1. Visual Theme & Atmosphere
A highly sophisticated, premium, and exclusive night-mode aesthetic. The atmosphere is luxurious and clinical — like a high-end Fifth Avenue boutique or a 5-star hotel lobby. It relies on a "Black & Gold" duality. 
- **Density**: Art Gallery Airy (2). Extreme use of whitespace to convey luxury.
- **Variance**: Offset Asymmetric (6). Elements float and overlap subtly to break rigid grids.
- **Motion**: Fluid Cinematic Choreography (8). Slow, deliberate, and elegant transitions.

## 2. Color Palette & Roles
- **Onyx Canvas** (#121212) — Primary background surface. Pure black (#000000) is BANNED.
- **Charcoal Depth** (#1E1E1E) — Card and container fill. Used to create subtle elevation against the Onyx canvas.
- **Champagne Gold** (#D4AF37) — The single accent color. Used strictly for CTAs, active states, and fine structural lines. No neon glows or oversaturated yellows.
- **Silk White** (#FAFAFA) — Primary text and high-contrast headings.
- **Muted Platinum** (#A1A1AA) — Secondary text, descriptions, and metadata.

## 3. Typography Rules
- **Display/Headlines:** `Playfair Display` — A distinctive, elegant modern serif. Used for massive, high-contrast statements. Hierarchy is driven by weight and extreme scale. 
- **Body:** `Hanken Grotesk` — An ultra-clean sans-serif that balances the ornate serif headlines. Relaxed leading, max 65 characters per line for perfect legibility.
- **Banned:** `Inter`, `Times New Roman`, `Georgia`. 

## 4. Component Stylings
* **Buttons:** Flat, pill-shaped (`rounded-full`), Champagne Gold fill with Onyx text. Tactile -2px translate on hover. No outer glows. Ghost buttons use a 1px Champagne Gold border.
* **Cards:** Generously rounded corners (1.25rem). Background is Charcoal Depth (#1E1E1E). No drop shadows, as they don't work well on dark mode; instead, rely on the slight color contrast from the background. 
* **Inputs:** Minimalist under-line style. Onyx background with a 1px Muted Platinum bottom border. Focus state turns the border to Champagne Gold. No floating labels.
* **Images/Media:** Photography must be deeply integrated. Use inline image typography (small photos acting as punctuation inside large headlines). Images should have subtle `rounded-xl` corners.

## 5. Layout Principles
- **Grid:** Asymmetric splits for Hero sections. Avoid perfectly centered layouts.
- **No overlapping text:** Every element occupies its own clear spatial zone. Text must never overlap images.
- **Breathing Room:** Extreme section gaps (120px). Luxury is conveyed through empty space.
- **Mobile:** Strict single-column collapse below 768px. Horizontal overflow is a critical failure.

## 6. Motion & Interaction
- **Physics:** Heavy, slow spring physics (stiffness: 80, damping: 20) for a premium, weighty feel.
- **Reveals:** Staggered cascade reveals on scroll. Elements drift gently upwards while fading in.
- **Performance:** Animate exclusively via `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- BANNED: Pure black (`#000000`) or pure white backgrounds.
- BANNED: Emojis of any kind.
- BANNED: Neon or outer glow shadows on buttons or cards.
- BANNED: 3-column equal grids for services (use asymmetric zig-zag or masonry instead).
- BANNED: Filler UI text ("Scroll to explore", "Swipe down", bouncing chevrons).
- BANNED: AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
- BANNED: "AI Purple/Blue Neon" aesthetics.
