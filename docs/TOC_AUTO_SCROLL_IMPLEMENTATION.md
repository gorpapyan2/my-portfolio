# Table of Contents Auto-Scroll Implementation

## Overview
The "On this page" TOC component now features auto-scrolling to keep the active section visible while users scroll through blog posts.

## Key Implementation Details

### Critical Fix: Sticky Positioning
For `position: sticky` to work, the parent container must **NOT** have `overflow: hidden`. The `PageLayout` component had `overflow-hidden` by default, which prevented the TOC from sticking.

**Solution**: Override with `!overflow-visible` in BlogViewPage:
```tsx
<PageLayout className="!overflow-visible">
```

## Key Features

### 1. Auto-Scroll Behavior
- **Trigger**: When `activeId` changes (user scrolls to new section)
- **Method**: Manual calculation with `container.scrollTo()` to avoid affecting page scroll
  - Calculates element position relative to container using `getBoundingClientRect()`
  - Centers the active item: `targetScrollTop = containerScrollTop + elementOffsetTop - (containerHeight / 2) + (elementHeight / 2)`
- **Target**: Only scrolls the TOC container, not the main page
- **Performance**: Uses `requestAnimationFrame` for smooth rendering

### 2. IntersectionObserver Configuration
```typescript
{
  rootMargin: '-64px 0px -60% 0px',
  threshold: [0, 0.25, 0.5, 0.75, 1]
}
```

**Explanation**:
- `-64px` top margin: Accounts for fixed header (80px with some buffer)
- `-60%` bottom margin: Triggers active state when section enters top 40% of viewport
- Multiple thresholds: Provides more granular intersection detection
- **Sorting**: Entries sorted by `boundingClientRect.top` to prioritize topmost visible heading

### 3. Responsive Design

#### Desktop (≥1024px)
- `position: sticky` with `top: 6rem` (24px = 96px)
- `max-height: calc(100vh - 12rem)` prevents TOC from exceeding viewport
- Always visible
- Smooth scrollbar with theme colors

#### Mobile (<1024px)
- Collapsible behind "On this page" button
- Chevron icon rotates on expand
- `max-height: 50vh` when expanded
- Default collapsed state

### 4. Accessibility

| Feature | Implementation |
|---------|---------------|
| Semantic HTML | `<nav aria-label="Table of contents">` |
| Active indicator | `aria-current="true"` on active link |
| Expand state | `aria-expanded` on mobile toggle button |
| Content control | `aria-controls="toc-content"` |
| Keyboard focus | Visible focus ring with `focus:ring-2 focus:ring-[#edfc3a]` |
| Focus offset | `focus:ring-offset-2 focus:ring-offset-black/50` for contrast |
| Reduced motion | `prefers-reduced-motion: reduce` support - disables smooth scrolling |

### 5. Visual Design

#### Scrollbar
- Custom thin scrollbar (6px width)
- Theme color: `rgba(237, 252, 58, 0.3)` (yellow/green)
- Hover state: `rgba(237, 252, 58, 0.5)` (brighter)
- Firefox support via `scrollbarWidth: 'thin'`

#### Active Item
- Text color: `#edfc3a` (theme yellow)
- Background: `rgba(237, 252, 58, 0.1)` (10% opacity)
- Border: Left border for H3 items (`border-l-[#edfc3a]`)

#### Hierarchy
- H2: Base indentation
- H3: `ml-4 pl-4` with left border (`border-l-2 border-white/10`)

### 6. Performance Optimizations

1. **Ref Management**
   - `Map<string, HTMLAnchorElement>` for O(1) lookup
   - Clean up on unmount

2. **Observer Reuse**
   - Single IntersectionObserver instance
   - Single MutationObserver for DOM changes
   - Proper cleanup in useEffect return

3. **Rendering**
   - `requestAnimationFrame` for scroll operations
   - Smooth CSS transitions
   - Exponential backoff retry logic (100ms → 200ms → 400ms)

4. **Memory**
   - Observer disconnection on unmount
   - Map cleanup in ref callback
   - Conditional rendering (headings.length === 0)

## Edge Cases Handled

1. **Missing Headings**: Fallback to text content matching
2. **Short Posts**: No scroll if TOC height < container height
3. **Rapid Scrolling**: Sorted entries prioritize topmost section
4. **Window Resize**: IntersectionObserver automatically recalculates
5. **Two Sections in View**: First visible (topmost) section becomes active

## CSS Variables Used

| Variable | Value | Purpose |
|----------|-------|---------|
| `--toc-top` | `6rem` (96px) | Sticky top offset (header + padding) |
| `--toc-max-height` | `calc(100vh - 12rem)` | Maximum TOC height |

## Testing Checklist

- [x] Auto-scroll keeps active item centered
- [x] Clicking TOC item scrolls main page smoothly
- [x] Active state syncs with scroll position
- [x] Mobile collapse/expand works
- [x] Keyboard navigation (Tab) works
- [x] Focus ring visible
- [x] Screen reader announces `aria-current`
- [x] No console errors
- [x] Observers disconnect on unmount
- [x] Works with nested headings (H2 → H3)

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

1. Requires JavaScript enabled (progressive enhancement could be added)
2. Headings must have IDs (handled by markdown processor)
3. Smooth scroll behavior may vary by browser
4. Parent container must not have `overflow: hidden` - BlogViewPage overrides this with `!overflow-visible`

## Future Enhancements

- Persist expand/collapse state in localStorage
- Add keyboard shortcuts (e.g., `t` to toggle TOC)
- Animate TOC items on scroll (fade-in effect)
- Add progress indicator showing how far through the article the user has scrolled

