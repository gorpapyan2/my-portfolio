<!-- c6301c4a-294b-4eba-ba26-19fbef570387 9584303c-1643-4faf-9672-e2196300f576 -->
# Add Premium Animations to About Page

## 1. Setup Path Aliases

**File**: `vite.config.ts`

- Add path alias configuration to enable `@/` imports pointing to `src/`

**File**: `tsconfig.app.json`

- Add `paths` mapping for `@/*` to resolve to `./src/*`
- Add `baseUrl: "."` to enable path resolution

## 2. Move Portrait Image

**Action**: Move `Gemini_Generated_Image_5ddpzd5ddpzd5ddp-Photoroom.png` to `public/portrait.jpg`

- Optimize/rename the image file for web use

## 3. Create CSS Animation Files

**File**: `src/styles/animated-grid.css`

- Create animated grid background with vignette and scanline shimmer
- Includes `prefers-reduced-motion` support
- Grid size, shimmer animation (12s cycle), and subtle opacity

**File**: `src/styles/index.css`

- Add import for `animated-grid.css`

## 4. Create Motion Utilities

**File**: `src/lib/motion.ts`

- Export `transitionFast`, `transitionHero` easing presets
- Export `stagger` function for sequential animations

## 5. Create Custom Hook

**File**: `src/hooks/useTilt.ts`

- 3D tilt effect hook with mouse tracking
- Max rotation constraint (6deg default)
- Smooth reset on mouse leave

## 6. Create Animation Components

**File**: `src/components/AnimatedGridBackground.tsx`

- Framer-motion wrapper with parallax mouse tracking
- Spring-based smooth motion (stiffness: 60, damping: 15)
- Respects reduced-motion preference

**File**: `src/components/HeroPortrait.tsx`

- Portrait component with 3D tilt using `useTilt` hook
- Fade-in + scale entrance animation
- Border, shadow, and sheen effects

**File**: `src/components/Sparkles.tsx`

- 6 floating dots around portrait with staggered animation
- CSS keyframes for vertical float motion
- Inline styles for positioning

**File**: `src/components/InfoCard.tsx`

- Card with fade-in + slide-up on scroll into view
- `whileInView` with 30% threshold, once only
- Staggered delays for sequential reveal

## 7. Create New About Component

**File**: `src/components/AboutMe.tsx`

- Two-column grid: sticky portrait left, info cards right
- Portrait uses `HeroPortrait` with sparkles
- Three `InfoCard` components: Professional Journey, Philosophy, Toolbox
- Staggered delays: 0.20s, 0.26s, 0.32s

## 8. Replace About Page

**File**: `src/pages/AboutPage.tsx`

- Replace entire contents with `AnimatedGridBackground` wrapper
- Render `AboutMe` component inside
- Remove: PageLayout, PageHeader, Card imports, Skills, Education, Experience sections

## Performance & Accessibility Notes

- All animations use `transform` and `opacity` (GPU-accelerated)
- Parallax and shimmer disabled via `prefers-reduced-motion: reduce`
- Portrait image should be ~200-300KB, 2x resolution for retina
- Grid shimmer runs at 0.07 opacity to minimize visual noise

### To-dos

- [ ] Configure path aliases in vite.config.ts and tsconfig.app.json
- [ ] Move portrait image to public/portrait.jpg
- [ ] Create animated-grid.css and update index.css import
- [ ] Create motion.ts utilities and useTilt.ts hook
- [ ] Create AnimatedGridBackground, HeroPortrait, Sparkles, InfoCard components
- [ ] Create AboutMe composition component
- [ ] Replace AboutPage.tsx with new animated version
- [ ] Run linter and verify animations work