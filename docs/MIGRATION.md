# Design Tokens Migration

## What changed
- Added `src/styles/tokens.css` with spacing, typography, radius, and shadow tokens.
- Added `src/styles/global.css` for fluid type, vertical rhythm, and base element spacing.
- Introduced layout primitives in `src/styles/utilities.css` (`stack`, `inline`, `cluster`, `center`, `box`).
- Added form and modal helper classes in `src/styles/components.css` (`form-label`, `field`, `field-static`, `modal`, `modal-panel`, `modal-actions`).

## Component updates
- Cards and headers now use spacing/typography tokens: `src/components/shared/Card.tsx`, `src/components/shared/PageHeader.tsx`, `src/components/shared/SectionHeader.tsx`.
- Primary buttons and key form fields use tokens: `src/components/home/Hero/HeroButton.tsx`, `src/pages/AdminLoginPage.tsx`, `src/components/shared/UnifiedTranslationModal.tsx`.
- Translation management and contact forms now use tokenized spacing and fields: `src/components/shared/TranslationFieldWithValidation.tsx`, `src/components/shared/TranslationComparisonView.tsx`, `src/pages/ContactPage/ContactForm.tsx`.
- Content sections and cards now use tokenized spacing: `src/pages/HomePage.tsx`, `src/components/home/Statistics/index.tsx`, `src/components/home/Statistics/StatCard.tsx`, `src/components/home/PortfolioNav/index.tsx`, `src/components/home/PortfolioNav/PortfolioNavCard.tsx`, `src/components/home/CaseStudies/index.tsx`, `src/components/home/Technologies/index.tsx`, `src/pages/BlogPage/BlogCard.tsx`, `src/pages/BlogPage/BlogGrid.tsx`, `src/pages/BlogPage/BlogViewPage.tsx`, `src/pages/BlogPage/index.tsx`, `src/pages/WorkPage/ProjectCard.tsx`, `src/pages/WorkPage/ProjectGrid.tsx`, `src/pages/WorkPage/index.tsx`, `src/pages/ContactPage/index.tsx`, `src/pages/ContactPage/ContactInfo.tsx`, `src/pages/NotFoundPage.tsx`, `src/pages/MarkdownDemo.tsx`, `src/pages/AboutPage.tsx`.
- Markdown and reading UI now use tokenized spacing/typography: `src/components/markdown/Toc.tsx`, `src/components/markdown/CopyButton.tsx`, `src/components/markdown/MarkdownRenderer.tsx`, `src/components/ShareButton.tsx`, `src/components/ReadingProgress.tsx`, `src/components/TableOfContents.tsx`, `src/components/AuthorBio.tsx`.
- Hero and technologies marketing components now use tokenized spacing/typography: `src/components/home/Hero/HeroBackground.tsx`, `src/components/home/Hero/HeroContent.tsx`, `src/components/home/Hero/HeroScroll.tsx`, `src/components/home/Hero/index.tsx`, `src/components/home/Technologies/index.tsx`, `src/components/home/Technologies/TechnologyCard.tsx`, `src/components/home/Technologies/TechnologiesCarousel.tsx`, `src/components/home/Technologies/TechnologyIcon.tsx`, `src/components/home/Technologies/TechnologiesBackground.tsx`.
- Footer and utility UI now use tokenized spacing/typography: `src/components/Footer/index.tsx`, `src/components/Footer/FooterSection.tsx`, `src/components/Footer/SocialLinks.tsx`, `src/components/InfoCard.tsx`, `src/components/FloatingActions.tsx`.
- Header and helper UI now use tokenized spacing/typography: `src/components/Header/index.tsx`, `src/components/Header/NavLinks.tsx`, `src/components/Header/MobileMenu.tsx`, `src/components/HelpTooltip.tsx`, `src/components/ui/Popup.tsx`.
- Global layout/backgrounds now use tokenized surfaces and grid colors: `src/components/shared/PageLayout.tsx`, `src/components/loading/LoadingScreen.tsx`, `src/components/loading/TranslationLoadingScreen.tsx`, `src/components/home/Statistics/index.tsx`, `src/components/home/PortfolioNav/index.tsx`.
- Admin dashboards and forms now use tokenized spacing/typography: `src/components/admin/BlogPostForm.tsx`, `src/components/admin/ImageUpload.tsx`, `src/components/admin/MarkdownEditor.tsx`, `src/components/admin/MarkdownRenderer.tsx`, `src/components/admin/translation/TranslationTable.tsx`, `src/pages/AdminDashboard/index.tsx`, `src/pages/AdminDashboard/BlogAdmin.tsx`, `src/pages/AdminDashboard/ProjectAdmin.tsx`, `src/pages/AdminDashboard/SkillsAdmin.tsx`, `src/pages/AdminDashboard/ExperienceAdmin.tsx`, `src/pages/AdminDashboard/EducationAdmin.tsx`, `src/pages/AdminDashboard/FeatureFlagAdmin.tsx`, `src/pages/AdminDashboard/TranslationManager.tsx`, `src/pages/WorkPage/ProjectAdmin.tsx`, `src/pages/BlogPage/BlogAdmin.tsx`.
- About sections now use tokenized surfaces and text: `src/components/about/Skills/index.tsx`, `src/components/about/Languages.tsx`, `src/components/about/KeyResults.tsx`, `src/components/about/ProfessionalSummary.tsx`, `src/components/about/Expirence/ExperienceCard.tsx`, `src/components/about/Expirence/ExperienceList.tsx`, `src/components/about/Education/EducationCard.tsx`, `src/components/about/Education/EducationList.tsx`.

## Examples
```tsx
<div className="stack" style={{ ['--stack-space' as string]: 'var(--space-24)' }}>
  <h2 className="font-display text-[length:var(--font-700)]">Title</h2>
  <p className="text-[length:var(--font-200)]">Body text.</p>
</div>
```

```tsx
<input className="field" />
<button className="btn btn-primary">Submit</button>
```

## Token usage checks
- Run `node scripts/verify-design-tokens.mjs` to ensure key components consume tokens.
