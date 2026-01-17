# Analysis Report

## Executive summary

| Type | Count |
| --- | --- |
| duplication | 1928 |
| unused | 48 |
| dead | 105 |
| deprecated | 10 |
| complexity | 61 |
| coupling | 7 |
| consistency | 3 |

## Top 20 cleanup candidates

- [P1] High complexity (269) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:1)
- [P2] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1)
- [P2] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:1)
- [P2] High complexity (43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogService.ts:1)
- [P2] High complexity (42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P2] High complexity (44) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:1)
- [P2] High complexity (63) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/BlogPostForm.tsx:1)
- [P2] Unused export: CardHeader (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:25)
- [P2] Unused export: CardTitle (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:40)
- [P2] Unused export: CardDescription (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:58)
- [P2] Unused export: CardContent (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:73)
- [P2] Unused export: CardFooter (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:85)
- [P2] High complexity (49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:1)
- [P2] High complexity (50) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:48)
- [P3] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:70)
- [P3] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:49)
- [P3] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:71)
- [P3] High coupling (15 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:1)
- [P3] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:65)

## Modules

### src/routes

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:48)
- [P3] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:70)
- [P3] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:49)
- [P3] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:71)
- [P3] High coupling (15 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:1)

</details>

### src/pages/HomePage.tsx

<details>
<summary>Issues (6)</summary>

- [P3] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:65)
- [P3] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:99)
- [P3] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:66)
- [P3] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:100)
- [P2] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1)
- [P3] High coupling (13 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1)

</details>

### src/pages/AdminPage.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (f46a92) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminPage.tsx:55)
- [P3] High complexity (16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminPage.tsx:1)

</details>

### src/components/Header

<details>
<summary>Issues (9)</summary>

- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:174)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:175)
- [P3] Duplicate block (89d038) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:172)
- [P3] Duplicate block (88f199) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:173)
- [P3] Unused export: LanguageSelector (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/LanguageSelector.tsx:12)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/LanguageSelector.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/index.tsx:1)
- [P2] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:1)
- [P3] High complexity (26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/index.tsx:1)

</details>

### services/useBlogService.ts

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (0ccaee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogService.ts:188)
- [P3] Duplicate block (0c927b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogService.ts:209)
- [P2] High complexity (43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogService.ts:1)

</details>

### services/useAboutService.ts

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (5b8416) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useAboutService.ts:50)
- [P3] High complexity (28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useAboutService.ts:1)

</details>

### services/usePublicFeatureFlags.ts

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (3fd9ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:49)
- [P3] High complexity (18) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:1)

</details>

### src/components/KeyboardShortcuts.tsx

<details>
<summary>Issues (2)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/KeyboardShortcuts.tsx:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/KeyboardShortcuts.tsx:1)

</details>

### src/pages/AboutPage.tsx

<details>
<summary>Issues (1)</summary>

- [P3] High coupling (23 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AboutPage.tsx:1)

</details>

### services/useMarkdownService.ts

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useMarkdownService.ts:1)

</details>

### services/useAuthService.ts

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (17) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useAuthService.ts:1)

</details>

### src/context

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (20) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/context/LanguageContext.tsx:1)

</details>

### src/content

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/content/cv.map.ts:1)

</details>

### src/types

<details>
<summary>Issues (119)</summary>

- [P3] Duplicate block (33402b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/testing.ts:9)
- [P3] Duplicate block (e615a6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:38)
- [P3] Duplicate block (037901) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:46)
- [P3] Duplicate block (037901) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:117)
- [P3] Duplicate block (037901) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:319)
- [P3] Duplicate block (fc607c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:58)
- [P3] Duplicate block (fc607c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:130)
- [P3] Duplicate block (fc607c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:330)
- [P3] Duplicate block (a5e5ec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:118)
- [P3] Duplicate block (a5e5ec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:320)
- [P3] Duplicate block (af0ef9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:124)
- [P3] Duplicate block (af0ef9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:137)
- [P3] Duplicate block (eb6747) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:125)
- [P3] Duplicate block (eb6747) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:138)
- [P3] Duplicate block (ca2bc8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:126)
- [P3] Duplicate block (ca2bc8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:139)
- [P3] Duplicate block (29e599) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:127)
- [P3] Duplicate block (29e599) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:140)
- [P3] Duplicate block (211877) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:131)
- [P3] Duplicate block (211877) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:331)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:181)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:215)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:318)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:450)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:496)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:545)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:591)
- [P3] Duplicate block (6b09f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:637)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:192)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:225)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:329)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:456)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:502)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:551)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:597)
- [P3] Duplicate block (c1969e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:643)
- [P3] Duplicate block (4a3e0c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:243)
- [P3] Duplicate block (4a3e0c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:255)
- [P3] Duplicate block (d6df88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:348)
- [P3] Duplicate block (d6df88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:359)
- [P3] Duplicate block (5ed477) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:353)
- [P3] Duplicate block (5ed477) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:424)
- [P3] Duplicate block (5ed477) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:687)
- [P3] Duplicate block (343993) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:364)
- [P3] Duplicate block (343993) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:433)
- [P3] Duplicate block (343993) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:697)
- [P3] Duplicate block (f6f5a2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:383)
- [P3] Duplicate block (f6f5a2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:395)
- [P3] Duplicate block (870aec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:448)
- [P3] Duplicate block (870aec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:494)
- [P3] Duplicate block (870aec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:543)
- [P3] Duplicate block (870aec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:589)
- [P3] Duplicate block (870aec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:635)
- [P3] Duplicate block (ebca8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:449)
- [P3] Duplicate block (ebca8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:495)
- [P3] Duplicate block (ebca8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:544)
- [P3] Duplicate block (ebca8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:590)
- [P3] Duplicate block (ebca8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:636)
- [P3] Duplicate block (3b206a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:451)
- [P3] Duplicate block (3b206a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:497)
- [P3] Duplicate block (3b206a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:546)
- [P3] Duplicate block (3b206a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:592)
- [P3] Duplicate block (3b206a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:638)
- [P3] Duplicate block (b269ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:452)
- [P3] Duplicate block (b269ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:498)
- [P3] Duplicate block (b269ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:547)
- [P3] Duplicate block (b269ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:593)
- [P3] Duplicate block (b269ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:639)
- [P3] Duplicate block (2e9f94) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:453)
- [P3] Duplicate block (2e9f94) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:499)
- [P3] Duplicate block (2e9f94) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:548)
- [P3] Duplicate block (2e9f94) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:594)
- [P3] Duplicate block (2e9f94) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:640)
- [P3] Duplicate block (dd5656) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:454)
- [P3] Duplicate block (dd5656) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:500)
- [P3] Duplicate block (dd5656) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:549)
- [P3] Duplicate block (dd5656) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:595)
- [P3] Duplicate block (dd5656) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:641)
- [P3] Duplicate block (5df7d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:455)
- [P3] Duplicate block (5df7d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:501)
- [P3] Duplicate block (5df7d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:550)
- [P3] Duplicate block (5df7d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:596)
- [P3] Duplicate block (5df7d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:642)
- [P3] Duplicate block (fb0885) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:457)
- [P3] Duplicate block (fb0885) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:503)
- [P3] Duplicate block (fb0885) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:552)
- [P3] Duplicate block (fb0885) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:598)
- [P3] Duplicate block (fb0885) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:644)
- [P3] Duplicate block (78182b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:458)
- [P3] Duplicate block (78182b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:504)
- [P3] Duplicate block (78182b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:553)
- [P3] Duplicate block (78182b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:599)
- [P3] Duplicate block (78182b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:645)
- [P3] Duplicate block (501c6a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:459)
- [P3] Duplicate block (501c6a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:505)
- [P3] Duplicate block (501c6a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:554)
- [P3] Duplicate block (501c6a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:600)
- [P3] Duplicate block (501c6a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:646)
- [P3] Duplicate block (327b73) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:460)
- [P3] Duplicate block (327b73) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:506)
- [P3] Duplicate block (327b73) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:555)
- [P3] Duplicate block (327b73) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:601)
- [P3] Duplicate block (327b73) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:647)
- [P3] Duplicate block (6392b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:461)
- [P3] Duplicate block (6392b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:507)
- [P3] Duplicate block (6392b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:556)
- [P3] Duplicate block (6392b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:602)
- [P3] Duplicate block (6392b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:648)
- [P3] Duplicate block (420400) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:612)
- [P3] Duplicate block (420400) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:658)
- [P3] Duplicate block (ba4f3b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:613)
- [P3] Duplicate block (ba4f3b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:659)
- [P3] Duplicate block (d34e96) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:620)
- [P3] Duplicate block (d34e96) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:666)
- [P3] Duplicate block (677cb1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:621)
- [P3] Duplicate block (677cb1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:667)
- [P3] Duplicate block (edde4f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:628)
- [P3] Duplicate block (edde4f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:674)
- [P1] High complexity (269) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/types/database.types.ts:1)

</details>

### src/components/AutomationTestingCard.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (33402b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AutomationTestingCard.tsx:9)

</details>

### src/pages/BlogPage

<details>
<summary>Issues (102)</summary>

- [P3] Duplicate block (e615a6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogCard.tsx:12)
- [P3] Duplicate block (9b6bda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:81)
- [P3] Duplicate block (967a96) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:82)
- [P3] Duplicate block (c9f1bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:83)
- [P3] Duplicate block (d0054a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:84)
- [P3] Duplicate block (432331) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:85)
- [P3] Duplicate block (4196e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:86)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:95)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:96)
- [P3] Duplicate block (ad810d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:155)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:156)
- [P3] Duplicate block (1e6cf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:157)
- [P3] Duplicate block (9a8671) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:158)
- [P3] Duplicate block (a1258a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:159)
- [P3] Duplicate block (7e1a34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:160)
- [P3] Duplicate block (8bb57d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:161)
- [P3] Duplicate block (005e83) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:162)
- [P3] Duplicate block (b9f3f4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:163)
- [P3] Duplicate block (1e10d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:164)
- [P3] Duplicate block (7dfecd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:165)
- [P3] Duplicate block (d111ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:166)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:167)
- [P3] Duplicate block (684958) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:28)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:29)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:52)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:88)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:141)
- [P3] Duplicate block (d4c787) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:40)
- [P3] Duplicate block (17c3e0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:41)
- [P3] Duplicate block (6791eb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:42)
- [P3] Duplicate block (fb926c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:43)
- [P3] Duplicate block (895782) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:44)
- [P3] Duplicate block (188996) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:45)
- [P3] Duplicate block (024409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:46)
- [P3] Duplicate block (1e24c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:47)
- [P3] Duplicate block (7973d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:48)
- [P3] Duplicate block (a03f09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:49)
- [P3] Duplicate block (7dabba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:50)
- [P3] Duplicate block (f5bb09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:51)
- [P3] Duplicate block (c79360) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:53)
- [P3] Duplicate block (b692ad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:54)
- [P3] Duplicate block (feda33) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:55)
- [P3] Duplicate block (cdebcd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:56)
- [P3] Duplicate block (ad7fa0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:36)
- [P3] Duplicate block (ad7fa0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:58)
- [P3] Duplicate block (ab30ba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:37)
- [P3] Duplicate block (ab30ba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:59)
- [P3] Duplicate block (6f43dc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:38)
- [P3] Duplicate block (6f43dc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:60)
- [P3] Duplicate block (d903da) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:39)
- [P3] Duplicate block (d903da) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:61)
- [P3] Duplicate block (c8a28e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:84)
- [P3] Duplicate block (c8a28e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:136)
- [P3] Duplicate block (f46a92) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogGrid.tsx:33)
- [P3] Duplicate block (5dae58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogGrid.tsx:44)
- [P3] Duplicate block (690d53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:4)
- [P3] Duplicate block (c2c9d4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:10)
- [P3] Duplicate block (6e1437) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:21)
- [P3] Duplicate block (69f05c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:22)
- [P3] Duplicate block (adc431) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:23)
- [P3] Duplicate block (66ff1f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:24)
- [P3] Duplicate block (341917) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:25)
- [P3] Duplicate block (422cbd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:26)
- [P3] Duplicate block (38d25d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:27)
- [P3] Duplicate block (10a3eb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:28)
- [P3] Duplicate block (7de535) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:29)
- [P3] Duplicate block (9512e0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:36)
- [P3] Duplicate block (0417a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:37)
- [P3] Duplicate block (8c3a32) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:38)
- [P3] Duplicate block (702362) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:39)
- [P3] Duplicate block (1d427e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:40)
- [P3] Duplicate block (f5e900) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:41)
- [P3] Duplicate block (2b546e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:42)
- [P3] Duplicate block (ca8f93) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:43)
- [P3] Duplicate block (c42fb2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:44)
- [P3] Duplicate block (c7dd82) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:45)
- [P3] Duplicate block (ff084b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:46)
- [P3] Duplicate block (639ab1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:47)
- [P3] Duplicate block (41b463) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:48)
- [P3] Duplicate block (4ea8be) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:49)
- [P3] Duplicate block (83e321) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:50)
- [P3] Duplicate block (97579c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:51)
- [P3] Duplicate block (0638b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:52)
- [P3] Duplicate block (a74163) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:53)
- [P3] Duplicate block (f4970e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:54)
- [P3] Duplicate block (25d0f8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:55)
- [P3] Duplicate block (9aa804) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:56)
- [P3] Duplicate block (d8cf27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:57)
- [P3] Duplicate block (eef03e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:58)
- [P3] Duplicate block (89d377) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:59)
- [P3] Duplicate block (84d4a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:97)
- [P3] Duplicate block (95872e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:98)
- [P3] Duplicate block (953603) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:99)
- [P3] Duplicate block (7f7621) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:105)
- [P3] Duplicate block (d8a19b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:106)
- [P3] Duplicate block (ebc118) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:107)
- [P3] Duplicate block (26cd49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:108)
- [P3] Duplicate block (70dc86) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:109)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:1)
- [P3] High complexity (20) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:1)
- [P3] High coupling (14 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:1)

</details>

### src/scripts

<details>
<summary>Issues (40)</summary>

- [P3] Duplicate block (877c33) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/uploadPortrait.ts:29)
- [P3] Duplicate block (877c33) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/uploadCV.ts:50)
- [P3] Duplicate block (aceb25) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/uploadPortrait.ts:32)
- [P3] Duplicate block (d4bea3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedTranslations.ts:6)
- [P3] Duplicate block (d4bea3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/applyPhase1Migration.ts:21)
- [P3] Duplicate block (ab5d84) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:26)
- [P3] Duplicate block (ab5d84) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:31)
- [P3] Duplicate block (8c6ab5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:27)
- [P3] Duplicate block (8c6ab5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:32)
- [P3] Duplicate block (d36c47) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:28)
- [P3] Duplicate block (d36c47) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedFeatureFlags.ts:70)
- [P3] Duplicate block (d36c47) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:33)
- [P3] Duplicate block (8e6081) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:47)
- [P3] Duplicate block (8e6081) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:52)
- [P3] Duplicate block (5dbb75) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:48)
- [P3] Duplicate block (5dbb75) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:53)
- [P3] Duplicate block (0ca3fb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:57)
- [P3] Duplicate block (0ca3fb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:62)
- [P3] Unused export: exportTranslationsToJSON (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedTranslations.ts:219)
- [P3] Unused export: parseTranslationsFromJSON (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedTranslations.ts:224)
- [P3] Unused export: DashboardPage (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:116)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/uploadPortrait.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/uploadCV.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedTranslations.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedSkills.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedProjects.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedFeatureFlags.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedExperiences.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedEducation.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedBlogPosts.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/normalizeBlogPosts.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/applyPhase1Migration.ts:1)
- [P3] High complexity (22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedTranslations.ts:1)
- [P2] High complexity (42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P3] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/normalizeBlogPosts.ts:1)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] High coupling (13 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] High complexity (23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/scripts/applyPhase1Migration.ts:1)

</details>

### services/useImageUploadService.ts

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (aceb25) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useImageUploadService.ts:30)
- [P3] Duplicate block (ecd45e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useImageUploadService.ts:40)
- [P3] Duplicate block (ecd45e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useImageUploadService.ts:59)
- [P3] Unused export: useImageUploadService (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useImageUploadService.ts:12)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useImageUploadService.ts:1)

</details>

### src/pages/SettingsPage

<details>
<summary>Issues (151)</summary>

- [P3] Duplicate block (d4bea3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:14)
- [P3] Duplicate block (d111ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:184)
- [P3] Duplicate block (410439) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:57)
- [P3] Duplicate block (410439) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:115)
- [P3] Duplicate block (8b84dd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:58)
- [P3] Duplicate block (8b84dd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:116)
- [P3] Duplicate block (72a322) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:59)
- [P3] Duplicate block (72a322) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:117)
- [P3] Duplicate block (60ac95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:60)
- [P3] Duplicate block (60ac95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:118)
- [P3] Duplicate block (5a5b48) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:61)
- [P3] Duplicate block (5a5b48) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:119)
- [P3] Duplicate block (974546) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:90)
- [P3] Duplicate block (974546) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:120)
- [P3] Duplicate block (33de98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:91)
- [P3] Duplicate block (33de98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:121)
- [P3] Duplicate block (517577) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:139)
- [P3] Duplicate block (517577) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:172)
- [P3] Duplicate block (0fc2b7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:140)
- [P3] Duplicate block (0fc2b7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:173)
- [P3] Duplicate block (667f4f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:141)
- [P3] Duplicate block (667f4f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:174)
- [P3] Duplicate block (1e002e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:142)
- [P3] Duplicate block (1e002e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:175)
- [P3] Duplicate block (a7a768) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:143)
- [P3] Duplicate block (a7a768) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:176)
- [P3] Duplicate block (8ae2d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:144)
- [P3] Duplicate block (8ae2d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:177)
- [P3] Duplicate block (d83a74) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:145)
- [P3] Duplicate block (d83a74) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:178)
- [P3] Duplicate block (788f6d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:146)
- [P3] Duplicate block (788f6d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:179)
- [P3] Duplicate block (8f70b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:147)
- [P3] Duplicate block (8f70b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:180)
- [P3] Duplicate block (7dec05) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:148)
- [P3] Duplicate block (7dec05) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:181)
- [P3] Duplicate block (3a4c00) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:149)
- [P3] Duplicate block (3a4c00) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:182)
- [P3] Duplicate block (dde2e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:150)
- [P3] Duplicate block (dde2e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:183)
- [P3] Duplicate block (a03372) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:1)
- [P3] Duplicate block (a9e547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:2)
- [P3] Duplicate block (357a9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:3)
- [P3] Duplicate block (2ad076) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:4)
- [P3] Duplicate block (0f0364) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:5)
- [P3] Duplicate block (8de87e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:6)
- [P3] Duplicate block (710efc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:7)
- [P3] Duplicate block (563757) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:8)
- [P3] Duplicate block (63a364) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:9)
- [P3] Duplicate block (11469a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:10)
- [P3] Duplicate block (d928c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:11)
- [P3] Duplicate block (2443ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:12)
- [P3] Duplicate block (9e3a13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:13)
- [P3] Duplicate block (b67b9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:14)
- [P3] Duplicate block (c025bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:15)
- [P3] Duplicate block (483c1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:16)
- [P3] Duplicate block (a85578) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:17)
- [P3] Duplicate block (a485fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:18)
- [P3] Duplicate block (cc0dec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:19)
- [P3] Duplicate block (1e375e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:37)
- [P3] Duplicate block (6acd41) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:76)
- [P3] Duplicate block (985bbd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:77)
- [P3] Duplicate block (989fe8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:78)
- [P3] Duplicate block (8f4dce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:79)
- [P3] Duplicate block (bd925b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:80)
- [P3] Duplicate block (752099) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:81)
- [P3] Duplicate block (901c29) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:82)
- [P3] Duplicate block (8f82cc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:83)
- [P3] Duplicate block (37b4d4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:84)
- [P3] Duplicate block (d6e531) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:12)
- [P3] Duplicate block (2aba1e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:13)
- [P3] Duplicate block (4e7c8d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:15)
- [P3] Duplicate block (2a4400) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:16)
- [P3] Duplicate block (e54e2e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:17)
- [P3] Duplicate block (2a263c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:18)
- [P3] Duplicate block (6a1ea8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:19)
- [P3] Duplicate block (25e577) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:20)
- [P3] Duplicate block (d78c3a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:21)
- [P3] Duplicate block (494773) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:22)
- [P3] Duplicate block (df0907) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:23)
- [P3] Duplicate block (79ba0d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:24)
- [P3] Duplicate block (d6b40c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:25)
- [P3] Duplicate block (a20218) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:26)
- [P3] Duplicate block (3245f9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:27)
- [P3] Duplicate block (6e58f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:28)
- [P3] Duplicate block (281bc0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:29)
- [P3] Duplicate block (9d69b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:30)
- [P3] Duplicate block (1aada4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:31)
- [P3] Duplicate block (c6b8e2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:32)
- [P3] Duplicate block (1deef0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:33)
- [P3] Duplicate block (f6a299) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:34)
- [P3] Duplicate block (467d1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:35)
- [P3] Duplicate block (27c7cd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:36)
- [P3] Duplicate block (46b3e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:37)
- [P3] Duplicate block (366173) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:38)
- [P3] Duplicate block (9ee474) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:39)
- [P3] Duplicate block (58aab4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:40)
- [P3] Duplicate block (0b6aaf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:41)
- [P3] Duplicate block (c8d7d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:42)
- [P3] Duplicate block (05a6c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:43)
- [P3] Duplicate block (7c3540) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:44)
- [P3] Duplicate block (50ec0e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:45)
- [P3] Duplicate block (2cbbfd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:46)
- [P3] Duplicate block (3e4ed0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:47)
- [P3] Duplicate block (4a7998) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:48)
- [P3] Duplicate block (50a9ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:49)
- [P3] Duplicate block (292b98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:50)
- [P3] Duplicate block (2b9f12) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:51)
- [P3] Duplicate block (4182e9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:52)
- [P3] Duplicate block (ab1c09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:53)
- [P3] Duplicate block (6e376b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:54)
- [P3] Duplicate block (495df9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:55)
- [P3] Duplicate block (91cda0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:104)
- [P3] Duplicate block (7aafec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:105)
- [P3] Duplicate block (b45776) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:166)
- [P3] Duplicate block (11030c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:167)
- [P3] Duplicate block (c4a41a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:168)
- [P3] Duplicate block (cd4952) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:169)
- [P3] Duplicate block (8e687b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:170)
- [P3] Duplicate block (cc449c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:171)
- [P3] Duplicate block (01ff28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:172)
- [P3] Duplicate block (453519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:173)
- [P3] Duplicate block (a63f9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:181)
- [P3] Duplicate block (a2ebb7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:182)
- [P3] Duplicate block (83bbf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:183)
- [P3] Duplicate block (27e21a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:184)
- [P3] Duplicate block (df0335) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:185)
- [P3] Duplicate block (342dda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:186)
- [P3] Duplicate block (7ec01f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:187)
- [P3] Duplicate block (0908c8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:188)
- [P3] Duplicate block (8328e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:189)
- [P3] Duplicate block (aea0fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:190)
- [P3] Duplicate block (293aba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:191)
- [P3] Duplicate block (2b0616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:192)
- [P3] Duplicate block (cb93c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:193)
- [P3] Duplicate block (4e1378) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:194)
- [P3] Duplicate block (923cff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:195)
- [P3] Duplicate block (ebf8a8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:196)
- [P3] Duplicate block (8ea874) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:197)
- [P3] Duplicate block (f040f7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:198)
- [P3] Duplicate block (9af2ea) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:213)
- [P3] Duplicate block (e28cd6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:214)
- [P3] Duplicate block (c18bf8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:215)
- [P3] Duplicate block (974b48) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:246)
- [P3] Duplicate block (92ad3d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:253)
- [P3] Duplicate block (9d4354) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:254)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:255)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/index.tsx:1)
- [P3] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:1)

</details>

### src/pages/AdminDashboard

<details>
<summary>Issues (865)</summary>

- [P3] Duplicate block (d4bea3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:14)
- [P3] Duplicate block (9d1b4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:9)
- [P3] Duplicate block (0de280) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:16)
- [P3] Duplicate block (2348a2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:17)
- [P3] Duplicate block (136408) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:18)
- [P3] Duplicate block (d5989d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:19)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:20)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:48)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:287)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:21)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:49)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:288)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:22)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:50)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:289)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:23)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:51)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:290)
- [P3] Duplicate block (8437d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:24)
- [P3] Duplicate block (c590a1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:25)
- [P3] Duplicate block (b1e085) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:26)
- [P3] Duplicate block (4d6f85) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:27)
- [P3] Duplicate block (5e6c95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:28)
- [P3] Duplicate block (e7a224) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:29)
- [P3] Duplicate block (b57a60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:30)
- [P3] Duplicate block (3dc92b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:35)
- [P3] Duplicate block (3dc92b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:31)
- [P3] Duplicate block (3dc92b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:31)
- [P3] Duplicate block (3dc92b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:29)
- [P3] Duplicate block (6efa53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:32)
- [P3] Duplicate block (731ffb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:33)
- [P3] Duplicate block (5dc6ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:34)
- [P3] Duplicate block (69d1c4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:35)
- [P3] Duplicate block (cf9f57) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:36)
- [P3] Duplicate block (86dfba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:37)
- [P3] Duplicate block (89dac1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:38)
- [P3] Duplicate block (d7b30a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:39)
- [P3] Duplicate block (d0cb65) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:40)
- [P3] Duplicate block (980dca) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:41)
- [P3] Duplicate block (d96b2d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:42)
- [P3] Duplicate block (eedbe3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:43)
- [P3] Duplicate block (ba39e5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:44)
- [P3] Duplicate block (5b5aa5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:45)
- [P3] Duplicate block (5b5aa5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:284)
- [P3] Duplicate block (b45a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:46)
- [P3] Duplicate block (b45a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:285)
- [P3] Duplicate block (d08781) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:47)
- [P3] Duplicate block (d08781) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:286)
- [P3] Duplicate block (a9a459) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:52)
- [P3] Duplicate block (a9a459) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:291)
- [P3] Duplicate block (08c44e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:53)
- [P3] Duplicate block (c90094) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:54)
- [P3] Duplicate block (1ce630) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:55)
- [P3] Duplicate block (da66d7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:56)
- [P3] Duplicate block (a92caa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:57)
- [P3] Duplicate block (80edc7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:58)
- [P3] Duplicate block (80edc7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:58)
- [P3] Duplicate block (80edc7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:56)
- [P3] Duplicate block (80edc7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:52)
- [P3] Duplicate block (ac2616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:59)
- [P3] Duplicate block (ac2616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:59)
- [P3] Duplicate block (ac2616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:57)
- [P3] Duplicate block (ac2616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:53)
- [P3] Duplicate block (537519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:60)
- [P3] Duplicate block (537519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:60)
- [P3] Duplicate block (537519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:58)
- [P3] Duplicate block (537519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:54)
- [P3] Duplicate block (7b865a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:61)
- [P3] Duplicate block (7b865a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:61)
- [P3] Duplicate block (7b865a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:59)
- [P3] Duplicate block (7b865a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:55)
- [P3] Duplicate block (777792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:62)
- [P3] Duplicate block (777792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:62)
- [P3] Duplicate block (777792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:60)
- [P3] Duplicate block (777792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:56)
- [P3] Duplicate block (3d82e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:63)
- [P3] Duplicate block (3d82e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:63)
- [P3] Duplicate block (3d82e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:61)
- [P3] Duplicate block (3d82e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:57)
- [P3] Duplicate block (d611c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:64)
- [P3] Duplicate block (46f209) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:65)
- [P3] Duplicate block (25667a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:66)
- [P3] Duplicate block (e7683c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:67)
- [P3] Duplicate block (1d9735) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:68)
- [P3] Duplicate block (b67dbc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:69)
- [P3] Duplicate block (d3db2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:70)
- [P3] Duplicate block (602066) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:71)
- [P3] Duplicate block (f7f0e8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:72)
- [P3] Duplicate block (4fb605) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:73)
- [P3] Duplicate block (807393) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:74)
- [P3] Duplicate block (0e88aa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:75)
- [P3] Duplicate block (9ef583) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:76)
- [P3] Duplicate block (343fd7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:77)
- [P3] Duplicate block (77e923) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:78)
- [P3] Duplicate block (06e788) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:79)
- [P3] Duplicate block (615eb7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:91)
- [P3] Duplicate block (2c8c55) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:92)
- [P3] Duplicate block (02d311) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:93)
- [P3] Duplicate block (1fab64) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:94)
- [P3] Duplicate block (8de335) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:95)
- [P3] Duplicate block (d7e113) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:96)
- [P3] Duplicate block (1e5f1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:97)
- [P3] Duplicate block (675920) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:98)
- [P3] Duplicate block (e1d8f4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:99)
- [P3] Duplicate block (dffdde) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:100)
- [P3] Duplicate block (ac03d8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:101)
- [P3] Duplicate block (f85cf6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:102)
- [P3] Duplicate block (f0b6d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:103)
- [P3] Duplicate block (1dbee2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:104)
- [P3] Duplicate block (2c27fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:105)
- [P3] Duplicate block (9d97fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:106)
- [P3] Duplicate block (91b75f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:107)
- [P3] Duplicate block (982231) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:108)
- [P3] Duplicate block (9cfaef) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:106)
- [P3] Duplicate block (9cfaef) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:122)
- [P3] Duplicate block (9cfaef) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:100)
- [P3] Duplicate block (9cfaef) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:90)
- [P3] Duplicate block (925aa2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:107)
- [P3] Duplicate block (925aa2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:123)
- [P3] Duplicate block (925aa2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:101)
- [P3] Duplicate block (925aa2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:91)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:108)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:124)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:102)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:92)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:109)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:132)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:125)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:103)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:93)
- [P3] Duplicate block (0f78cf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:110)
- [P3] Duplicate block (0f78cf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:133)
- [P3] Duplicate block (0f78cf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:126)
- [P3] Duplicate block (0f78cf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:104)
- [P3] Duplicate block (77659d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:134)
- [P3] Duplicate block (9e54d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:135)
- [P3] Duplicate block (d502b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:136)
- [P3] Duplicate block (ee5b0d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:132)
- [P3] Duplicate block (ee5b0d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:143)
- [P3] Duplicate block (c27cfc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:133)
- [P3] Duplicate block (c27cfc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:144)
- [P3] Duplicate block (e6b6da) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:134)
- [P3] Duplicate block (e6b6da) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:145)
- [P3] Duplicate block (c3073f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:135)
- [P3] Duplicate block (c3073f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:146)
- [P3] Duplicate block (af500a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:136)
- [P3] Duplicate block (af500a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:147)
- [P3] Duplicate block (e9cbfd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:137)
- [P3] Duplicate block (e9cbfd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:148)
- [P3] Duplicate block (863a51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:138)
- [P3] Duplicate block (863a51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:149)
- [P3] Duplicate block (0ef942) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:139)
- [P3] Duplicate block (0ef942) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:150)
- [P3] Duplicate block (0e3614) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:140)
- [P3] Duplicate block (0e3614) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:151)
- [P3] Duplicate block (c1e18d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:141)
- [P3] Duplicate block (c1e18d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:152)
- [P3] Duplicate block (b0b05e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:142)
- [P3] Duplicate block (b0b05e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:153)
- [P3] Duplicate block (543c53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:143)
- [P3] Duplicate block (543c53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:154)
- [P3] Duplicate block (5c9c0b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:207)
- [P3] Duplicate block (5c9c0b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:161)
- [P3] Duplicate block (5c9c0b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:262)
- [P3] Duplicate block (5c9c0b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:201)
- [P3] Duplicate block (9bab8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:208)
- [P3] Duplicate block (9bab8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:162)
- [P3] Duplicate block (9bab8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:263)
- [P3] Duplicate block (9bab8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:202)
- [P3] Duplicate block (f6c4b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:209)
- [P3] Duplicate block (f6c4b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:163)
- [P3] Duplicate block (f6c4b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:264)
- [P3] Duplicate block (f6c4b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:203)
- [P3] Duplicate block (b42ca0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:210)
- [P3] Duplicate block (b42ca0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:164)
- [P3] Duplicate block (b42ca0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:265)
- [P3] Duplicate block (b42ca0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:204)
- [P3] Duplicate block (2eee84) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:211)
- [P3] Duplicate block (2eee84) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:165)
- [P3] Duplicate block (80eef1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:212)
- [P3] Duplicate block (80eef1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:166)
- [P3] Duplicate block (43cff7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:167)
- [P3] Duplicate block (cb2521) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:168)
- [P3] Duplicate block (cb2521) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:208)
- [P3] Duplicate block (950f39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:175)
- [P3] Duplicate block (e2ca6f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:176)
- [P3] Duplicate block (826982) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:177)
- [P3] Duplicate block (d91c40) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:178)
- [P3] Duplicate block (9abfda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:179)
- [P3] Duplicate block (57a429) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:173)
- [P3] Duplicate block (57a429) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:180)
- [P3] Duplicate block (57a429) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:209)
- [P3] Duplicate block (5f93d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:174)
- [P3] Duplicate block (5f93d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:181)
- [P3] Duplicate block (5f93d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:210)
- [P3] Duplicate block (18d5e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:175)
- [P3] Duplicate block (18d5e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:182)
- [P3] Duplicate block (18d5e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:211)
- [P3] Duplicate block (3171a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:176)
- [P3] Duplicate block (3171a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:183)
- [P3] Duplicate block (3171a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:212)
- [P3] Duplicate block (3171a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:191)
- [P3] Duplicate block (53a4ee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:177)
- [P3] Duplicate block (53a4ee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:184)
- [P3] Duplicate block (53a4ee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:213)
- [P3] Duplicate block (53a4ee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:192)
- [P3] Duplicate block (048906) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:178)
- [P3] Duplicate block (048906) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:185)
- [P3] Duplicate block (1d511d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:179)
- [P3] Duplicate block (1d511d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:186)
- [P3] Duplicate block (57e94f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:187)
- [P3] Duplicate block (8bb128) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:188)
- [P3] Duplicate block (b0eb8f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:189)
- [P3] Duplicate block (730417) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:190)
- [P3] Duplicate block (5c7a70) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:191)
- [P3] Duplicate block (d2d4d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:192)
- [P3] Duplicate block (422c18) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:193)
- [P3] Duplicate block (dceefe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:194)
- [P3] Duplicate block (217c60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:195)
- [P3] Duplicate block (e6e89a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:206)
- [P3] Duplicate block (f306e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:207)
- [P3] Duplicate block (51e609) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:219)
- [P3] Duplicate block (3cae16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:220)
- [P3] Duplicate block (3cae16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:412)
- [P3] Duplicate block (3cae16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:439)
- [P3] Duplicate block (dbb73f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:227)
- [P3] Duplicate block (f87578) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:228)
- [P3] Duplicate block (e056ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:229)
- [P3] Duplicate block (4fc9b9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:236)
- [P3] Duplicate block (b2fe06) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:243)
- [P3] Duplicate block (f94c2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:244)
- [P3] Duplicate block (d69daf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:245)
- [P3] Duplicate block (86ad58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:246)
- [P3] Duplicate block (d952b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:247)
- [P3] Duplicate block (3c3c79) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:248)
- [P3] Duplicate block (404b9f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:249)
- [P3] Duplicate block (61cf85) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:250)
- [P3] Duplicate block (7c633e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:251)
- [P3] Duplicate block (39cbad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:252)
- [P3] Duplicate block (678c10) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:253)
- [P3] Duplicate block (705dd8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:254)
- [P3] Duplicate block (36f37b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:255)
- [P3] Duplicate block (44d02d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:256)
- [P3] Duplicate block (92f54d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:257)
- [P3] Duplicate block (f262b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:258)
- [P3] Duplicate block (923015) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:259)
- [P3] Duplicate block (404c60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:260)
- [P3] Duplicate block (b8b891) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:261)
- [P3] Duplicate block (a8a158) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:262)
- [P3] Duplicate block (ab736c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:263)
- [P3] Duplicate block (798202) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:264)
- [P3] Duplicate block (1ca2be) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:265)
- [P3] Duplicate block (92b5bc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:266)
- [P3] Duplicate block (0ffbbe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:267)
- [P3] Duplicate block (19d3dd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:268)
- [P3] Duplicate block (9c8b28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:269)
- [P3] Duplicate block (b2beb1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:270)
- [P3] Duplicate block (a4a8d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:277)
- [P3] Duplicate block (fdce51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:216)
- [P3] Duplicate block (fdce51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:278)
- [P3] Duplicate block (fdce51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:270)
- [P3] Duplicate block (fdce51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:209)
- [P3] Duplicate block (c4587c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:217)
- [P3] Duplicate block (c4587c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:279)
- [P3] Duplicate block (c4587c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:271)
- [P3] Duplicate block (c4587c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:210)
- [P3] Duplicate block (75ad37) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:280)
- [P3] Duplicate block (f7d34a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:281)
- [P3] Duplicate block (4ac9f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:282)
- [P3] Duplicate block (ab7e2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:283)
- [P3] Duplicate block (6c7144) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:292)
- [P3] Duplicate block (90039b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:293)
- [P3] Duplicate block (0c3550) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:294)
- [P3] Duplicate block (f75df3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:235)
- [P3] Duplicate block (f75df3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:301)
- [P3] Duplicate block (f75df3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:291)
- [P3] Duplicate block (f75df3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:228)
- [P3] Duplicate block (f136ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:308)
- [P3] Duplicate block (6d9fb0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:321)
- [P3] Duplicate block (595def) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:322)
- [P3] Duplicate block (63f9b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:323)
- [P3] Duplicate block (847c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:324)
- [P3] Duplicate block (a3003c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:325)
- [P3] Duplicate block (c783ec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:326)
- [P3] Duplicate block (50cdb5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:327)
- [P3] Duplicate block (d7c3ad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:328)
- [P3] Duplicate block (c002d8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:329)
- [P3] Duplicate block (265dd1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:330)
- [P3] Duplicate block (d7c4a3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:331)
- [P3] Duplicate block (cd5c6b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:332)
- [P3] Duplicate block (6c7a49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:333)
- [P3] Duplicate block (b3c67e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:341)
- [P3] Duplicate block (753c5d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:342)
- [P3] Duplicate block (47a8fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:343)
- [P3] Duplicate block (219283) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:344)
- [P3] Duplicate block (5780fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:345)
- [P3] Duplicate block (875875) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:346)
- [P3] Duplicate block (158441) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:347)
- [P3] Duplicate block (627f22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:348)
- [P3] Duplicate block (d4ce6f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:349)
- [P3] Duplicate block (d8488e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:350)
- [P3] Duplicate block (d294e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:351)
- [P3] Duplicate block (783a4d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:352)
- [P3] Duplicate block (2723fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:353)
- [P3] Duplicate block (2fb58e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:354)
- [P3] Duplicate block (63fa67) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:355)
- [P3] Duplicate block (327cc6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:356)
- [P3] Duplicate block (d45202) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:357)
- [P3] Duplicate block (d39abd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:358)
- [P3] Duplicate block (a71c86) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:359)
- [P3] Duplicate block (8583f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:360)
- [P3] Duplicate block (55821b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:361)
- [P3] Duplicate block (ad810d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:362)
- [P3] Duplicate block (ad810d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:355)
- [P3] Duplicate block (ad810d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:284)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:363)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:356)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:285)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:198)
- [P3] Duplicate block (1e6cf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:364)
- [P3] Duplicate block (1e6cf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:357)
- [P3] Duplicate block (1e6cf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:286)
- [P3] Duplicate block (9a8671) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:365)
- [P3] Duplicate block (9a8671) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:358)
- [P3] Duplicate block (9a8671) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:287)
- [P3] Duplicate block (a1258a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:366)
- [P3] Duplicate block (a1258a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:359)
- [P3] Duplicate block (a1258a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:288)
- [P3] Duplicate block (7e1a34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:367)
- [P3] Duplicate block (7e1a34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:360)
- [P3] Duplicate block (7e1a34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:289)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:267)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:322)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:373)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:520)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:366)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:295)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:209)
- [P3] Duplicate block (d6e531) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:12)
- [P3] Duplicate block (2aba1e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:13)
- [P3] Duplicate block (4e7c8d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:15)
- [P3] Duplicate block (2a4400) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:16)
- [P3] Duplicate block (e54e2e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:17)
- [P3] Duplicate block (2a263c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:18)
- [P3] Duplicate block (6a1ea8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:19)
- [P3] Duplicate block (25e577) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:20)
- [P3] Duplicate block (d78c3a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:21)
- [P3] Duplicate block (494773) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:22)
- [P3] Duplicate block (df0907) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:23)
- [P3] Duplicate block (79ba0d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:24)
- [P3] Duplicate block (d6b40c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:25)
- [P3] Duplicate block (a20218) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:26)
- [P3] Duplicate block (3245f9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:27)
- [P3] Duplicate block (6e58f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:28)
- [P3] Duplicate block (281bc0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:29)
- [P3] Duplicate block (9d69b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:30)
- [P3] Duplicate block (1aada4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:31)
- [P3] Duplicate block (c6b8e2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:32)
- [P3] Duplicate block (1deef0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:33)
- [P3] Duplicate block (f6a299) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:34)
- [P3] Duplicate block (467d1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:35)
- [P3] Duplicate block (27c7cd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:36)
- [P3] Duplicate block (46b3e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:37)
- [P3] Duplicate block (366173) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:38)
- [P3] Duplicate block (9ee474) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:39)
- [P3] Duplicate block (58aab4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:40)
- [P3] Duplicate block (0b6aaf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:41)
- [P3] Duplicate block (c8d7d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:42)
- [P3] Duplicate block (05a6c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:43)
- [P3] Duplicate block (7c3540) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:44)
- [P3] Duplicate block (50ec0e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:45)
- [P3] Duplicate block (2cbbfd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:46)
- [P3] Duplicate block (3e4ed0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:47)
- [P3] Duplicate block (4a7998) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:48)
- [P3] Duplicate block (50a9ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:49)
- [P3] Duplicate block (292b98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:50)
- [P3] Duplicate block (2b9f12) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:51)
- [P3] Duplicate block (4182e9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:52)
- [P3] Duplicate block (ab1c09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:53)
- [P3] Duplicate block (6e376b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:54)
- [P3] Duplicate block (495df9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:55)
- [P3] Duplicate block (91cda0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:116)
- [P3] Duplicate block (7aafec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:159)
- [P3] Duplicate block (b45776) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:180)
- [P3] Duplicate block (11030c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:181)
- [P3] Duplicate block (c4a41a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:182)
- [P3] Duplicate block (cd4952) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:183)
- [P3] Duplicate block (8e687b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:184)
- [P3] Duplicate block (cc449c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:185)
- [P3] Duplicate block (01ff28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:186)
- [P3] Duplicate block (453519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:187)
- [P3] Duplicate block (a63f9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:195)
- [P3] Duplicate block (a2ebb7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:196)
- [P3] Duplicate block (83bbf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:197)
- [P3] Duplicate block (27e21a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:198)
- [P3] Duplicate block (df0335) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:199)
- [P3] Duplicate block (342dda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:200)
- [P3] Duplicate block (7ec01f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:201)
- [P3] Duplicate block (0908c8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:202)
- [P3] Duplicate block (8328e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:203)
- [P3] Duplicate block (aea0fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:204)
- [P3] Duplicate block (293aba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:205)
- [P3] Duplicate block (2b0616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:206)
- [P3] Duplicate block (cb93c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:207)
- [P3] Duplicate block (4e1378) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:208)
- [P3] Duplicate block (923cff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:209)
- [P3] Duplicate block (ebf8a8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:210)
- [P3] Duplicate block (8ea874) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:211)
- [P3] Duplicate block (f040f7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:212)
- [P3] Duplicate block (9af2ea) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:227)
- [P3] Duplicate block (e28cd6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:228)
- [P3] Duplicate block (c18bf8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:229)
- [P3] Duplicate block (974b48) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:258)
- [P3] Duplicate block (92ad3d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:264)
- [P3] Duplicate block (9d4354) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:265)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:266)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:321)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:372)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:519)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:365)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:294)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:208)
- [P3] Duplicate block (f46a92) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:158)
- [P3] Duplicate block (690d53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:2)
- [P3] Duplicate block (c2c9d4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:11)
- [P3] Duplicate block (6e1437) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:22)
- [P3] Duplicate block (69f05c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:23)
- [P3] Duplicate block (adc431) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:24)
- [P3] Duplicate block (66ff1f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:25)
- [P3] Duplicate block (341917) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:26)
- [P3] Duplicate block (422cbd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:27)
- [P3] Duplicate block (38d25d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:28)
- [P3] Duplicate block (10a3eb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:29)
- [P3] Duplicate block (7de535) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:30)
- [P3] Duplicate block (9512e0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:37)
- [P3] Duplicate block (0417a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:38)
- [P3] Duplicate block (8c3a32) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:39)
- [P3] Duplicate block (702362) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:40)
- [P3] Duplicate block (1d427e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:41)
- [P3] Duplicate block (f5e900) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:42)
- [P3] Duplicate block (2b546e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:43)
- [P3] Duplicate block (ca8f93) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:44)
- [P3] Duplicate block (c42fb2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:45)
- [P3] Duplicate block (c7dd82) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:46)
- [P3] Duplicate block (ff084b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:47)
- [P3] Duplicate block (639ab1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:48)
- [P3] Duplicate block (41b463) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:49)
- [P3] Duplicate block (4ea8be) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:50)
- [P3] Duplicate block (83e321) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:51)
- [P3] Duplicate block (97579c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:52)
- [P3] Duplicate block (0638b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:53)
- [P3] Duplicate block (a74163) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:54)
- [P3] Duplicate block (f4970e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:55)
- [P3] Duplicate block (25d0f8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:56)
- [P3] Duplicate block (9aa804) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:57)
- [P3] Duplicate block (d8cf27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:58)
- [P3] Duplicate block (eef03e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:59)
- [P3] Duplicate block (89d377) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:60)
- [P3] Duplicate block (84d4a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:94)
- [P3] Duplicate block (95872e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:95)
- [P3] Duplicate block (953603) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:96)
- [P3] Duplicate block (7f7621) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:103)
- [P3] Duplicate block (d8a19b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:104)
- [P3] Duplicate block (ebc118) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:105)
- [P3] Duplicate block (26cd49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:106)
- [P3] Duplicate block (70dc86) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:107)
- [P3] Duplicate block (28f92e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/index.tsx:77)
- [P3] Duplicate block (d2f152) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/index.tsx:156)
- [P3] Duplicate block (df6af6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:23)
- [P3] Duplicate block (df6af6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:52)
- [P3] Duplicate block (df6af6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:225)
- [P3] Duplicate block (4e4073) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:49)
- [P3] Duplicate block (4e4073) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:222)
- [P3] Duplicate block (7de571) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:50)
- [P3] Duplicate block (7de571) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:223)
- [P3] Duplicate block (7133f1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:51)
- [P3] Duplicate block (7133f1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:224)
- [P3] Duplicate block (d37487) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:56)
- [P3] Duplicate block (d37487) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:50)
- [P3] Duplicate block (2ddff5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:57)
- [P3] Duplicate block (2ddff5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:51)
- [P3] Duplicate block (aa55d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:88)
- [P3] Duplicate block (aa55d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:82)
- [P3] Duplicate block (184973) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:89)
- [P3] Duplicate block (184973) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:83)
- [P3] Duplicate block (097e69) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:90)
- [P3] Duplicate block (097e69) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:106)
- [P3] Duplicate block (097e69) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:84)
- [P3] Duplicate block (5373d7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:91)
- [P3] Duplicate block (5373d7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:107)
- [P3] Duplicate block (5373d7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:85)
- [P3] Duplicate block (469861) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:92)
- [P3] Duplicate block (469861) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:108)
- [P3] Duplicate block (469861) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:86)
- [P3] Duplicate block (bed4d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:93)
- [P3] Duplicate block (bed4d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:109)
- [P3] Duplicate block (bed4d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:87)
- [P3] Duplicate block (bed4d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:77)
- [P3] Duplicate block (090ae1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:94)
- [P3] Duplicate block (090ae1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:110)
- [P3] Duplicate block (090ae1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:88)
- [P3] Duplicate block (090ae1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:78)
- [P3] Duplicate block (f36409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:95)
- [P3] Duplicate block (f36409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:111)
- [P3] Duplicate block (f36409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:89)
- [P3] Duplicate block (f36409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:79)
- [P3] Duplicate block (7129df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:96)
- [P3] Duplicate block (7129df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:118)
- [P3] Duplicate block (7129df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:112)
- [P3] Duplicate block (7129df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:90)
- [P3] Duplicate block (7129df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:80)
- [P3] Duplicate block (ae4232) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:97)
- [P3] Duplicate block (ae4232) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:119)
- [P3] Duplicate block (ae4232) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:113)
- [P3] Duplicate block (ae4232) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:91)
- [P3] Duplicate block (ae4232) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:81)
- [P3] Duplicate block (41c75e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:98)
- [P3] Duplicate block (41c75e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:120)
- [P3] Duplicate block (41c75e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:114)
- [P3] Duplicate block (41c75e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:92)
- [P3] Duplicate block (41c75e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:82)
- [P3] Duplicate block (578c1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:105)
- [P3] Duplicate block (578c1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:121)
- [P3] Duplicate block (578c1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:99)
- [P3] Duplicate block (578c1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:89)
- [P3] Duplicate block (ade99e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:111)
- [P3] Duplicate block (ade99e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:127)
- [P3] Duplicate block (ade99e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:105)
- [P3] Duplicate block (2c5fda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:112)
- [P3] Duplicate block (2c5fda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:128)
- [P3] Duplicate block (2c5fda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:106)
- [P3] Duplicate block (8d1d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:113)
- [P3] Duplicate block (8d1d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:129)
- [P3] Duplicate block (8d1d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:107)
- [P3] Duplicate block (3ca31d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:114)
- [P3] Duplicate block (3ca31d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:130)
- [P3] Duplicate block (3ca31d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:108)
- [P3] Duplicate block (a44fe6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:115)
- [P3] Duplicate block (a44fe6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:131)
- [P3] Duplicate block (a44fe6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:109)
- [P3] Duplicate block (8d1eab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:116)
- [P3] Duplicate block (8d1eab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:132)
- [P3] Duplicate block (8d1eab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:110)
- [P3] Duplicate block (8f7674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:117)
- [P3] Duplicate block (8f7674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:133)
- [P3] Duplicate block (8f7674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:111)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:118)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:250)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:134)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:306)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:112)
- [P3] Duplicate block (f586d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:243)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:119)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:251)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:135)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:307)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:113)
- [P3] Duplicate block (f84751) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:244)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:120)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:252)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:136)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:308)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:114)
- [P3] Duplicate block (9d2547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:245)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:121)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:253)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:137)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:309)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:115)
- [P3] Duplicate block (35e683) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:246)
- [P3] Duplicate block (4ed2fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:122)
- [P3] Duplicate block (4ed2fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:138)
- [P3] Duplicate block (4ed2fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:116)
- [P3] Duplicate block (0da589) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:123)
- [P3] Duplicate block (0da589) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:139)
- [P3] Duplicate block (cb67c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:124)
- [P3] Duplicate block (cb67c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:140)
- [P3] Duplicate block (411680) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:125)
- [P3] Duplicate block (411680) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:141)
- [P3] Duplicate block (642c01) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:162)
- [P3] Duplicate block (642c01) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:169)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:163)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:170)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:347)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:441)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:199)
- [P3] Duplicate block (f3854d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:177)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:164)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:171)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:348)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:442)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:200)
- [P3] Duplicate block (1f09d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:178)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:165)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:172)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:349)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:443)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:201)
- [P3] Duplicate block (8be7a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:179)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:166)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:173)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:350)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:444)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:202)
- [P3] Duplicate block (d4be88) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:180)
- [P3] Duplicate block (e2227d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:167)
- [P3] Duplicate block (e2227d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:203)
- [P3] Duplicate block (e2227d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:181)
- [P3] Duplicate block (4d90e8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:168)
- [P3] Duplicate block (4d90e8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:204)
- [P3] Duplicate block (4d90e8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:182)
- [P3] Duplicate block (4d4426) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:169)
- [P3] Duplicate block (4d4426) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:205)
- [P3] Duplicate block (4d4426) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:183)
- [P3] Duplicate block (66c76a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:170)
- [P3] Duplicate block (66c76a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:206)
- [P3] Duplicate block (66c76a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:184)
- [P3] Duplicate block (826db1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:171)
- [P3] Duplicate block (826db1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:207)
- [P3] Duplicate block (63d5e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:172)
- [P3] Duplicate block (63d5e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:208)
- [P3] Duplicate block (ab450b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:201)
- [P3] Duplicate block (ab450b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:155)
- [P3] Duplicate block (ab450b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:195)
- [P3] Duplicate block (7f4396) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:202)
- [P3] Duplicate block (7f4396) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:156)
- [P3] Duplicate block (7f4396) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:257)
- [P3] Duplicate block (7f4396) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:196)
- [P3] Duplicate block (e7dfe1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:203)
- [P3] Duplicate block (e7dfe1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:157)
- [P3] Duplicate block (e7dfe1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:258)
- [P3] Duplicate block (e7dfe1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:197)
- [P3] Duplicate block (c69c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:204)
- [P3] Duplicate block (c69c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:158)
- [P3] Duplicate block (c69c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:259)
- [P3] Duplicate block (c69c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:198)
- [P3] Duplicate block (6b4ce8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:205)
- [P3] Duplicate block (6b4ce8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:159)
- [P3] Duplicate block (6b4ce8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:260)
- [P3] Duplicate block (6b4ce8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:199)
- [P3] Duplicate block (d1ec30) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:206)
- [P3] Duplicate block (d1ec30) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:160)
- [P3] Duplicate block (d1ec30) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:261)
- [P3] Duplicate block (d1ec30) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:200)
- [P3] Duplicate block (1e2f63) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:229)
- [P3] Duplicate block (1e2f63) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:222)
- [P3] Duplicate block (5501c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:230)
- [P3] Duplicate block (5501c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:223)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:231)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:297)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:381)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:475)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:505)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:287)
- [P3] Duplicate block (28c148) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:224)
- [P3] Duplicate block (4ec9c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:232)
- [P3] Duplicate block (4ec9c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:298)
- [P3] Duplicate block (4ec9c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:288)
- [P3] Duplicate block (4ec9c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:225)
- [P3] Duplicate block (16f84b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:233)
- [P3] Duplicate block (16f84b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:299)
- [P3] Duplicate block (16f84b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:289)
- [P3] Duplicate block (16f84b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:226)
- [P3] Duplicate block (02be43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:234)
- [P3] Duplicate block (02be43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:300)
- [P3] Duplicate block (02be43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:290)
- [P3] Duplicate block (02be43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:227)
- [P3] Duplicate block (9990d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:242)
- [P3] Duplicate block (9990d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:298)
- [P3] Duplicate block (9990d0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:235)
- [P3] Duplicate block (d361ca) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:249)
- [P3] Duplicate block (d361ca) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:305)
- [P3] Duplicate block (d361ca) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:242)
- [P3] Duplicate block (f2d631) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:254)
- [P3] Duplicate block (f2d631) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:310)
- [P3] Duplicate block (f2d631) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:247)
- [P3] Duplicate block (602ca1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:255)
- [P3] Duplicate block (602ca1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:311)
- [P3] Duplicate block (602ca1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:248)
- [P3] Duplicate block (a8ee1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:256)
- [P3] Duplicate block (a8ee1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:312)
- [P3] Duplicate block (a8ee1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:249)
- [P3] Duplicate block (03841d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:257)
- [P3] Duplicate block (03841d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:313)
- [P3] Duplicate block (03841d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:250)
- [P3] Duplicate block (be04c3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:258)
- [P3] Duplicate block (be04c3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:314)
- [P3] Duplicate block (be04c3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:251)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:319)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:370)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:363)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:292)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:206)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:320)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:371)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:364)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:293)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:207)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:323)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:374)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:521)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:367)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:296)
- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:210)
- [P3] Duplicate block (425f98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:109)
- [P3] Duplicate block (425f98) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:105)
- [P3] Duplicate block (59247a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:368)
- [P3] Duplicate block (59247a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:361)
- [P3] Duplicate block (59247a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:290)
- [P3] Duplicate block (09287f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:369)
- [P3] Duplicate block (09287f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:362)
- [P3] Duplicate block (09287f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:291)
- [P3] Duplicate block (748a7d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:375)
- [P3] Duplicate block (748a7d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:211)
- [P3] Duplicate block (ab6235) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:45)
- [P3] Duplicate block (ab6235) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:137)
- [P3] Duplicate block (3184ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:62)
- [P3] Duplicate block (3184ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:82)
- [P3] Duplicate block (b12b26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:63)
- [P3] Duplicate block (b12b26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:83)
- [P3] Duplicate block (3478d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:149)
- [P3] Duplicate block (e1088e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:283)
- [P3] Duplicate block (ebe276) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:306)
- [P3] Duplicate block (ebe276) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:402)
- [P3] Duplicate block (3595e9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:307)
- [P3] Duplicate block (3595e9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:403)
- [P3] Duplicate block (6183c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:308)
- [P3] Duplicate block (6183c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:404)
- [P3] Duplicate block (c92dc1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:309)
- [P3] Duplicate block (c92dc1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:405)
- [P3] Duplicate block (6aa500) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:310)
- [P3] Duplicate block (6aa500) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:406)
- [P3] Duplicate block (e49984) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:311)
- [P3] Duplicate block (e49984) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:407)
- [P3] Duplicate block (48efda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:318)
- [P3] Duplicate block (48efda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:413)
- [P3] Duplicate block (733eba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:319)
- [P3] Duplicate block (733eba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:414)
- [P3] Duplicate block (ecd060) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:320)
- [P3] Duplicate block (ecd060) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:415)
- [P3] Duplicate block (b514af) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:321)
- [P3] Duplicate block (b514af) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:416)
- [P3] Duplicate block (3d4421) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:322)
- [P3] Duplicate block (3d4421) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:417)
- [P3] Duplicate block (d4648e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:323)
- [P3] Duplicate block (d4648e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:418)
- [P3] Duplicate block (9d607d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:324)
- [P3] Duplicate block (9d607d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:419)
- [P3] Duplicate block (e3d299) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:325)
- [P3] Duplicate block (e3d299) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:420)
- [P3] Duplicate block (1b08af) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:326)
- [P3] Duplicate block (1b08af) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:421)
- [P3] Duplicate block (9a8ff6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:327)
- [P3] Duplicate block (9a8ff6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:422)
- [P3] Duplicate block (76c5b9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:328)
- [P3] Duplicate block (76c5b9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:423)
- [P3] Duplicate block (45fbf2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:329)
- [P3] Duplicate block (45fbf2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:424)
- [P3] Duplicate block (ff5ec3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:330)
- [P3] Duplicate block (ff5ec3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:425)
- [P3] Duplicate block (a0859d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:331)
- [P3] Duplicate block (a0859d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:426)
- [P3] Duplicate block (cf4f1f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:332)
- [P3] Duplicate block (cf4f1f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:427)
- [P3] Duplicate block (2e3742) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:333)
- [P3] Duplicate block (2e3742) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:428)
- [P3] Duplicate block (984b1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:334)
- [P3] Duplicate block (984b1a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:429)
- [P3] Duplicate block (4f53aa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:335)
- [P3] Duplicate block (4f53aa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:430)
- [P3] Duplicate block (5565e2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:336)
- [P3] Duplicate block (5565e2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:431)
- [P3] Duplicate block (ef6af0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:337)
- [P3] Duplicate block (ef6af0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:432)
- [P3] Duplicate block (815f4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:338)
- [P3] Duplicate block (815f4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:433)
- [P3] Duplicate block (621605) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:339)
- [P3] Duplicate block (621605) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:434)
- [P3] Duplicate block (854da4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:346)
- [P3] Duplicate block (854da4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:440)
- [P3] Duplicate block (4457b4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:351)
- [P3] Duplicate block (4457b4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:445)
- [P3] Duplicate block (411b00) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:352)
- [P3] Duplicate block (411b00) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:446)
- [P3] Duplicate block (c2f64f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:359)
- [P3] Duplicate block (c2f64f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:452)
- [P3] Duplicate block (6d8336) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:372)
- [P3] Duplicate block (6d8336) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:465)
- [P3] Duplicate block (2f1bf5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:373)
- [P3] Duplicate block (2f1bf5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:466)
- [P3] Duplicate block (314e66) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:380)
- [P3] Duplicate block (314e66) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:474)
- [P3] Duplicate block (1039f7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:391)
- [P3] Duplicate block (1039f7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:485)
- [P3] Duplicate block (c7e485) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:518)
- [P3] Duplicate block (6d9fce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:22)
- [P3] Duplicate block (6d9fce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:48)
- [P3] Duplicate block (6d9fce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:279)
- [P3] Duplicate block (1f176c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:23)
- [P3] Duplicate block (1f176c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:49)
- [P3] Duplicate block (1f176c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:280)
- [P3] Duplicate block (021d4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:45)
- [P3] Duplicate block (021d4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:276)
- [P3] Duplicate block (6d416d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:46)
- [P3] Duplicate block (6d416d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:277)
- [P3] Duplicate block (a9988b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:47)
- [P3] Duplicate block (a9988b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:278)
- [P3] Duplicate block (4ad2d9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:50)
- [P3] Duplicate block (4ad2d9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:281)
- [P3] Duplicate block (8d39a7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:198)
- [P3] Duplicate block (8d39a7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:176)
- [P3] Duplicate block (2083e5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:214)
- [P3] Duplicate block (2083e5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:193)
- [P3] Duplicate block (690388) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:215)
- [P3] Duplicate block (690388) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:194)
- [P3] Duplicate block (01014e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:266)
- [P3] Duplicate block (01014e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:205)
- [P3] Duplicate block (0ffb0a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:267)
- [P3] Duplicate block (0ffb0a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:206)
- [P3] Duplicate block (5d2c39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:268)
- [P3] Duplicate block (5d2c39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:207)
- [P3] Duplicate block (337c66) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:269)
- [P3] Duplicate block (337c66) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:208)
- [P3] Duplicate block (0eb776) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:22)
- [P3] Duplicate block (0eb776) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:46)
- [P3] Duplicate block (0eb776) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:218)
- [P3] Duplicate block (671028) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:43)
- [P3] Duplicate block (671028) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:215)
- [P3] Duplicate block (211255) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:44)
- [P3] Duplicate block (211255) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:216)
- [P3] Duplicate block (b16e9a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:45)
- [P3] Duplicate block (b16e9a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:217)
- [P3] Duplicate block (e30ea9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:198)
- [P3] Duplicate block (e30ea9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:253)
- [P3] Duplicate block (01c0f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:229)
- [P3] Duplicate block (01c0f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:285)
- [P3] Duplicate block (576c53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:230)
- [P3] Duplicate block (576c53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:286)
- [P3] Duplicate block (e2748e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:239)
- [P3] Duplicate block (e2748e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:295)
- [P3] Duplicate block (8b6304) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:240)
- [P3] Duplicate block (8b6304) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:296)
- [P3] Duplicate block (e9c81f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:241)
- [P3] Duplicate block (e9c81f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:297)
- [P3] Duplicate block (74e7c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:242)
- [P3] Duplicate block (74e7c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:298)
- [P3] Duplicate block (f638ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:350)
- [P3] Duplicate block (f638ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:405)
- [P3] Duplicate block (33c80f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:357)
- [P3] Duplicate block (33c80f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:412)
- [P3] Duplicate block (577f42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:358)
- [P3] Duplicate block (577f42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:413)
- [P3] Duplicate block (493a60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:375)
- [P3] Duplicate block (493a60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:435)
- [P3] Duplicate block (3da528) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:438)
- [P3] Duplicate block (8473f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:439)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P3] High complexity (17) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:1)
- [P3] High complexity (30) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:1)
- [P3] High coupling (17 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P3] High complexity (23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:1)
- [P3] High complexity (26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:1)
- [P3] High complexity (18) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:1)
- [P2] High complexity (44) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:1)

</details>

### src/pages/WorkPage

<details>
<summary>Issues (270)</summary>

- [P3] Duplicate block (b1159a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/projectsData.ts:2)
- [P3] Duplicate block (b1159a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:6)
- [P3] Duplicate block (c463ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/projectsData.ts:3)
- [P3] Duplicate block (c463ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:7)
- [P3] Duplicate block (040b2a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/projectsData.ts:4)
- [P3] Duplicate block (040b2a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:8)
- [P3] Duplicate block (9d1b4c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:8)
- [P3] Duplicate block (0de280) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:14)
- [P3] Duplicate block (2348a2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:15)
- [P3] Duplicate block (136408) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:16)
- [P3] Duplicate block (d5989d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:17)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:18)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:46)
- [P3] Duplicate block (0eaa97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:281)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:19)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:47)
- [P3] Duplicate block (477d9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:282)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:20)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:48)
- [P3] Duplicate block (251d99) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:283)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:21)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:49)
- [P3] Duplicate block (b83801) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:284)
- [P3] Duplicate block (8437d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:22)
- [P3] Duplicate block (c590a1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:23)
- [P3] Duplicate block (b1e085) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:24)
- [P3] Duplicate block (4d6f85) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:25)
- [P3] Duplicate block (5e6c95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:26)
- [P3] Duplicate block (e7a224) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:27)
- [P3] Duplicate block (b57a60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:28)
- [P3] Duplicate block (3dc92b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:29)
- [P3] Duplicate block (6efa53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:30)
- [P3] Duplicate block (731ffb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:31)
- [P3] Duplicate block (5dc6ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:32)
- [P3] Duplicate block (69d1c4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:33)
- [P3] Duplicate block (cf9f57) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:34)
- [P3] Duplicate block (86dfba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:35)
- [P3] Duplicate block (89dac1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:36)
- [P3] Duplicate block (d7b30a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:37)
- [P3] Duplicate block (d0cb65) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:38)
- [P3] Duplicate block (980dca) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:39)
- [P3] Duplicate block (d96b2d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:40)
- [P3] Duplicate block (eedbe3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:41)
- [P3] Duplicate block (ba39e5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:42)
- [P3] Duplicate block (5b5aa5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:43)
- [P3] Duplicate block (5b5aa5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:278)
- [P3] Duplicate block (b45a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:44)
- [P3] Duplicate block (b45a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:279)
- [P3] Duplicate block (d08781) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:45)
- [P3] Duplicate block (d08781) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:280)
- [P3] Duplicate block (a9a459) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:50)
- [P3] Duplicate block (a9a459) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:285)
- [P3] Duplicate block (08c44e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:51)
- [P3] Duplicate block (c90094) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:52)
- [P3] Duplicate block (1ce630) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:53)
- [P3] Duplicate block (da66d7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:54)
- [P3] Duplicate block (a92caa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:55)
- [P3] Duplicate block (80edc7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:56)
- [P3] Duplicate block (ac2616) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:57)
- [P3] Duplicate block (537519) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:58)
- [P3] Duplicate block (7b865a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:59)
- [P3] Duplicate block (777792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:60)
- [P3] Duplicate block (3d82e7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:61)
- [P3] Duplicate block (d611c2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:62)
- [P3] Duplicate block (46f209) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:63)
- [P3] Duplicate block (25667a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:64)
- [P3] Duplicate block (e7683c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:65)
- [P3] Duplicate block (1d9735) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:66)
- [P3] Duplicate block (b67dbc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:67)
- [P3] Duplicate block (d3db2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:68)
- [P3] Duplicate block (602066) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:69)
- [P3] Duplicate block (f7f0e8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:70)
- [P3] Duplicate block (4fb605) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:71)
- [P3] Duplicate block (807393) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:72)
- [P3] Duplicate block (0e88aa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:73)
- [P3] Duplicate block (9ef583) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:74)
- [P3] Duplicate block (343fd7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:75)
- [P3] Duplicate block (77e923) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:76)
- [P3] Duplicate block (06e788) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:77)
- [P3] Duplicate block (615eb7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:89)
- [P3] Duplicate block (2c8c55) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:90)
- [P3] Duplicate block (02d311) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:91)
- [P3] Duplicate block (1fab64) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:92)
- [P3] Duplicate block (8de335) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:93)
- [P3] Duplicate block (d7e113) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:94)
- [P3] Duplicate block (1e5f1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:95)
- [P3] Duplicate block (675920) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:96)
- [P3] Duplicate block (e1d8f4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:97)
- [P3] Duplicate block (dffdde) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:98)
- [P3] Duplicate block (ac03d8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:99)
- [P3] Duplicate block (f85cf6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:100)
- [P3] Duplicate block (f0b6d2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:101)
- [P3] Duplicate block (1dbee2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:102)
- [P3] Duplicate block (2c27fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:103)
- [P3] Duplicate block (9d97fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:104)
- [P3] Duplicate block (91b75f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:105)
- [P3] Duplicate block (982231) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:106)
- [P3] Duplicate block (9b6bda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:111)
- [P3] Duplicate block (967a96) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:112)
- [P3] Duplicate block (c9f1bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:113)
- [P3] Duplicate block (d0054a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:114)
- [P3] Duplicate block (432331) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:115)
- [P3] Duplicate block (4196e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:116)
- [P3] Duplicate block (9cfaef) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:123)
- [P3] Duplicate block (925aa2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:124)
- [P3] Duplicate block (98c084) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:125)
- [P3] Duplicate block (d84948) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:126)
- [P3] Duplicate block (0f78cf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:127)
- [P3] Duplicate block (77659d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:128)
- [P3] Duplicate block (9e54d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:129)
- [P3] Duplicate block (d502b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:130)
- [P3] Duplicate block (ee5b0d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:137)
- [P3] Duplicate block (c27cfc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:138)
- [P3] Duplicate block (e6b6da) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:139)
- [P3] Duplicate block (c3073f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:140)
- [P3] Duplicate block (af500a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:141)
- [P3] Duplicate block (e9cbfd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:142)
- [P3] Duplicate block (863a51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:143)
- [P3] Duplicate block (0ef942) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:144)
- [P3] Duplicate block (0e3614) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:145)
- [P3] Duplicate block (c1e18d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:146)
- [P3] Duplicate block (b0b05e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:147)
- [P3] Duplicate block (543c53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:148)
- [P3] Duplicate block (5c9c0b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:155)
- [P3] Duplicate block (9bab8a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:156)
- [P3] Duplicate block (f6c4b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:157)
- [P3] Duplicate block (b42ca0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:158)
- [P3] Duplicate block (2eee84) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:159)
- [P3] Duplicate block (80eef1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:160)
- [P3] Duplicate block (43cff7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:161)
- [P3] Duplicate block (cb2521) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:162)
- [P3] Duplicate block (cb2521) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:202)
- [P3] Duplicate block (950f39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:169)
- [P3] Duplicate block (e2ca6f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:170)
- [P3] Duplicate block (826982) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:171)
- [P3] Duplicate block (d91c40) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:172)
- [P3] Duplicate block (9abfda) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:173)
- [P3] Duplicate block (57a429) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:174)
- [P3] Duplicate block (5f93d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:175)
- [P3] Duplicate block (18d5e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:176)
- [P3] Duplicate block (3171a9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:177)
- [P3] Duplicate block (53a4ee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:178)
- [P3] Duplicate block (048906) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:179)
- [P3] Duplicate block (1d511d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:180)
- [P3] Duplicate block (57e94f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:181)
- [P3] Duplicate block (8bb128) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:182)
- [P3] Duplicate block (b0eb8f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:183)
- [P3] Duplicate block (730417) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:184)
- [P3] Duplicate block (5c7a70) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:185)
- [P3] Duplicate block (d2d4d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:186)
- [P3] Duplicate block (422c18) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:187)
- [P3] Duplicate block (dceefe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:188)
- [P3] Duplicate block (217c60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:189)
- [P3] Duplicate block (e6e89a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:200)
- [P3] Duplicate block (f306e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:201)
- [P3] Duplicate block (51e609) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:213)
- [P3] Duplicate block (3cae16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:214)
- [P3] Duplicate block (dbb73f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:221)
- [P3] Duplicate block (f87578) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:222)
- [P3] Duplicate block (e056ab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:223)
- [P3] Duplicate block (4fc9b9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:230)
- [P3] Duplicate block (b2fe06) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:237)
- [P3] Duplicate block (f94c2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:238)
- [P3] Duplicate block (d69daf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:239)
- [P3] Duplicate block (86ad58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:240)
- [P3] Duplicate block (d952b0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:241)
- [P3] Duplicate block (3c3c79) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:242)
- [P3] Duplicate block (404b9f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:243)
- [P3] Duplicate block (61cf85) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:244)
- [P3] Duplicate block (7c633e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:245)
- [P3] Duplicate block (39cbad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:246)
- [P3] Duplicate block (678c10) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:247)
- [P3] Duplicate block (705dd8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:248)
- [P3] Duplicate block (36f37b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:249)
- [P3] Duplicate block (44d02d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:250)
- [P3] Duplicate block (92f54d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:251)
- [P3] Duplicate block (f262b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:252)
- [P3] Duplicate block (923015) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:253)
- [P3] Duplicate block (404c60) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:254)
- [P3] Duplicate block (b8b891) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:255)
- [P3] Duplicate block (a8a158) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:256)
- [P3] Duplicate block (ab736c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:257)
- [P3] Duplicate block (798202) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:258)
- [P3] Duplicate block (1ca2be) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:259)
- [P3] Duplicate block (92b5bc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:260)
- [P3] Duplicate block (0ffbbe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:261)
- [P3] Duplicate block (19d3dd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:262)
- [P3] Duplicate block (9c8b28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:263)
- [P3] Duplicate block (b2beb1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:264)
- [P3] Duplicate block (a4a8d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:271)
- [P3] Duplicate block (fdce51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:272)
- [P3] Duplicate block (c4587c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:273)
- [P3] Duplicate block (75ad37) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:274)
- [P3] Duplicate block (f7d34a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:275)
- [P3] Duplicate block (4ac9f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:276)
- [P3] Duplicate block (ab7e2f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:277)
- [P3] Duplicate block (6c7144) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:286)
- [P3] Duplicate block (90039b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:287)
- [P3] Duplicate block (0c3550) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:288)
- [P3] Duplicate block (f75df3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:295)
- [P3] Duplicate block (f136ae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:302)
- [P3] Duplicate block (6d9fb0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:315)
- [P3] Duplicate block (595def) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:316)
- [P3] Duplicate block (63f9b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:317)
- [P3] Duplicate block (847c2b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:318)
- [P3] Duplicate block (a3003c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:319)
- [P3] Duplicate block (c783ec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:320)
- [P3] Duplicate block (50cdb5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:321)
- [P3] Duplicate block (d7c3ad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:322)
- [P3] Duplicate block (c002d8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:323)
- [P3] Duplicate block (265dd1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:324)
- [P3] Duplicate block (d7c4a3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:325)
- [P3] Duplicate block (cd5c6b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:326)
- [P3] Duplicate block (6c7a49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:327)
- [P3] Duplicate block (b3c67e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:335)
- [P3] Duplicate block (753c5d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:336)
- [P3] Duplicate block (47a8fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:337)
- [P3] Duplicate block (219283) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:338)
- [P3] Duplicate block (5780fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:339)
- [P3] Duplicate block (875875) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:340)
- [P3] Duplicate block (158441) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:341)
- [P3] Duplicate block (627f22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:342)
- [P3] Duplicate block (d4ce6f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:343)
- [P3] Duplicate block (d8488e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:344)
- [P3] Duplicate block (d294e1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:345)
- [P3] Duplicate block (783a4d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:346)
- [P3] Duplicate block (2723fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:347)
- [P3] Duplicate block (2fb58e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:348)
- [P3] Duplicate block (63fa67) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:349)
- [P3] Duplicate block (327cc6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:350)
- [P3] Duplicate block (d45202) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:351)
- [P3] Duplicate block (d39abd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:352)
- [P3] Duplicate block (a71c86) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:353)
- [P3] Duplicate block (8583f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:354)
- [P3] Duplicate block (55821b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:355)
- [P3] Duplicate block (ad810d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:356)
- [P3] Duplicate block (453523) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:357)
- [P3] Duplicate block (1e6cf0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:358)
- [P3] Duplicate block (9a8671) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:359)
- [P3] Duplicate block (a1258a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:360)
- [P3] Duplicate block (7e1a34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:361)
- [P3] Duplicate block (8bb57d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:362)
- [P3] Duplicate block (005e83) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:363)
- [P3] Duplicate block (b9f3f4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:364)
- [P3] Duplicate block (1e10d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:365)
- [P3] Duplicate block (7dfecd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:366)
- [P3] Duplicate block (d111ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:367)
- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:368)
- [P3] Duplicate block (684958) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:28)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:29)
- [P3] Duplicate block (8074c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:42)
- [P3] Duplicate block (d4c787) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:30)
- [P3] Duplicate block (17c3e0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:31)
- [P3] Duplicate block (6791eb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:32)
- [P3] Duplicate block (fb926c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:33)
- [P3] Duplicate block (895782) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:34)
- [P3] Duplicate block (188996) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:35)
- [P3] Duplicate block (024409) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:36)
- [P3] Duplicate block (1e24c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:37)
- [P3] Duplicate block (7973d5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:38)
- [P3] Duplicate block (a03f09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:39)
- [P3] Duplicate block (7dabba) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:40)
- [P3] Duplicate block (f5bb09) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:41)
- [P3] Duplicate block (c79360) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:43)
- [P3] Duplicate block (b692ad) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:44)
- [P3] Duplicate block (feda33) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:45)
- [P3] Duplicate block (cdebcd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:46)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/index.tsx:1)
- [P3] High complexity (29) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:1)

</details>

### src/pages/NotFoundPage.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (65c745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/NotFoundPage.tsx:120)
- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/NotFoundPage.tsx:119)

</details>

### src/components/admin

<details>
<summary>Issues (43)</summary>

- [P3] Duplicate block (a03372) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:1)
- [P3] Duplicate block (a9e547) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:2)
- [P3] Duplicate block (357a9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:3)
- [P3] Duplicate block (2ad076) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:4)
- [P3] Duplicate block (0f0364) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:5)
- [P3] Duplicate block (8de87e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:6)
- [P3] Duplicate block (710efc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:7)
- [P3] Duplicate block (563757) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:8)
- [P3] Duplicate block (63a364) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:9)
- [P3] Duplicate block (11469a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:10)
- [P3] Duplicate block (d928c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:11)
- [P3] Duplicate block (2443ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:12)
- [P3] Duplicate block (9e3a13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:13)
- [P3] Duplicate block (b67b9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:14)
- [P3] Duplicate block (c025bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:15)
- [P3] Duplicate block (483c1c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:16)
- [P3] Duplicate block (a85578) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:17)
- [P3] Duplicate block (a485fe) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:18)
- [P3] Duplicate block (cc0dec) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:19)
- [P3] Duplicate block (1e375e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:37)
- [P3] Duplicate block (6acd41) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:76)
- [P3] Duplicate block (985bbd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:77)
- [P3] Duplicate block (989fe8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:78)
- [P3] Duplicate block (8f4dce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:79)
- [P3] Duplicate block (bd925b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:80)
- [P3] Duplicate block (752099) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:81)
- [P3] Duplicate block (901c29) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:82)
- [P3] Duplicate block (8f82cc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:83)
- [P3] Duplicate block (37b4d4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:84)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:384)
- [P3] Duplicate block (e1088e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/translation/TranslationTable.tsx:74)
- [P3] Duplicate block (00d047) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownRenderer.tsx:2)
- [P3] Duplicate block (9a3ebf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:230)
- [P3] Duplicate block (9a3ebf) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:354)
- [P3] Duplicate block (20cc90) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:231)
- [P3] Duplicate block (20cc90) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:355)
- [P3] Duplicate block (5ab861) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:232)
- [P3] Duplicate block (5ab861) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:356)
- [P3] Duplicate block (a12556) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/BlogPostForm.tsx:456)
- [P3] Duplicate block (a12556) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/BlogPostForm.tsx:457)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/MarkdownEditor.tsx:1)
- [P3] High complexity (25) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/ImageUpload.tsx:1)
- [P2] High complexity (63) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/admin/BlogPostForm.tsx:1)

</details>

### services/useTranslationManager.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (6e58f2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:94)
- [P3] Duplicate block (281bc0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:95)
- [P3] Duplicate block (9d69b5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:96)
- [P3] Duplicate block (1aada4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:97)
- [P3] Duplicate block (c6b8e2) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:98)
- [P3] Duplicate block (1deef0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:99)
- [P3] Duplicate block (9ee474) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:106)
- [P3] Duplicate block (58aab4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationManager.ts:107)

</details>

### src/components/TableOfContents.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/TableOfContents.tsx:97)
- [P3] Unused export: TableOfContents (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/TableOfContents.tsx:15)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/TableOfContents.tsx:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/TableOfContents.tsx:1)

</details>

### src/components/shared

<details>
<summary>Issues (29)</summary>

- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:102)
- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:119)
- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:164)
- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/SectionHeader.tsx:22)
- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/PageHeader.tsx:22)
- [P3] Duplicate block (c7e485) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:118)
- [P3] Duplicate block (3da528) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:162)
- [P3] Duplicate block (8473f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:163)
- [P3] Duplicate block (9bbc9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:74)
- [P3] Duplicate block (9bbc9b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:94)
- [P3] Duplicate block (e940b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/SectionHeader.tsx:21)
- [P3] Duplicate block (e940b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/PageHeader.tsx:21)
- [P3] Duplicate block (d57e42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:14)
- [P3] Duplicate block (d57e42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:29)
- [P3] Duplicate block (d57e42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:89)
- [P3] Duplicate block (40362b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:15)
- [P3] Duplicate block (40362b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:30)
- [P3] Duplicate block (40362b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:90)
- [P3] Unused export: TranslationFieldWithValidation (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:21)
- [P3] Unused export: TranslationComparisonView (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:18)
- [P2] Unused export: CardHeader (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:25)
- [P2] Unused export: CardTitle (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:40)
- [P2] Unused export: CardDescription (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:58)
- [P2] Unused export: CardContent (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:73)
- [P2] Unused export: CardFooter (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/Card.tsx:85)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationComparisonView.tsx:1)
- [P3] High complexity (17) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationText.tsx:1)
- [P3] High complexity (17) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:1)

</details>

### src/components/ShareButton.tsx

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (077932) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ShareButton.tsx:116)
- [P3] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ShareButton.tsx:114)
- [P3] Duplicate block (c4e7d3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ShareButton.tsx:115)
- [P3] Duplicate block (89d038) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ShareButton.tsx:112)
- [P3] Duplicate block (88f199) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ShareButton.tsx:113)

</details>

### src/components/PerformanceMonitor.tsx

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/PerformanceMonitor.tsx:54)
- [P3] Duplicate block (8473f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/PerformanceMonitor.tsx:53)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/PerformanceMonitor.tsx:1)

</details>

### src/components/AuthorBio.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (f9c07e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AuthorBio.tsx:37)
- [P3] Duplicate block (8473f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AuthorBio.tsx:36)
- [P3] Unused export: AuthorBio (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AuthorBio.tsx:8)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AuthorBio.tsx:1)

</details>

### src/pages/ContactPage

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (657608) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/ContactPage/ContactForm.tsx:117)
- [P3] Duplicate block (657608) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/ContactPage/ContactForm.tsx:128)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/ContactPage/index.tsx:1)
- [P3] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/ContactPage/ContactForm.tsx:1)

</details>

### src/components/skeletons

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (5dae58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/skeletons/SkeletonText.tsx:28)
- [P3] Unused export: SkeletonText (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/skeletons/SkeletonText.tsx:12)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/skeletons/SkeletonText.tsx:1)

</details>

### src/components/ParticleBackground.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (5dae58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ParticleBackground.tsx:83)

</details>

### src/pages/AdminLoginPage.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (28f92e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminLoginPage.tsx:34)
- [P3] Duplicate block (d2f152) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminLoginPage.tsx:132)

</details>

### src/components/about

<details>
<summary>Issues (34)</summary>

- [P3] Duplicate block (9a4f3f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/ProfessionalSummary.tsx:66)
- [P3] Duplicate block (a0ba08) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:12)
- [P3] Duplicate block (62c6de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:71)
- [P3] Duplicate block (62c6de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/KeyResults.tsx:49)
- [P3] Duplicate block (c1a745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/ProfessionalSummary.tsx:64)
- [P3] Duplicate block (c1a745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:72)
- [P3] Duplicate block (c1a745) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/KeyResults.tsx:50)
- [P3] Duplicate block (a2fd4d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/ProfessionalSummary.tsx:65)
- [P3] Duplicate block (a2fd4d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:73)
- [P3] Duplicate block (a2fd4d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/KeyResults.tsx:51)
- [P3] Duplicate block (f4a77b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:70)
- [P3] Duplicate block (f4a77b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/KeyResults.tsx:48)
- [P3] Duplicate block (4b2d70) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:31)
- [P3] Duplicate block (4b2d70) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:14)
- [P3] Duplicate block (a70552) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:32)
- [P3] Duplicate block (a70552) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:15)
- [P3] Duplicate block (d6cc9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:33)
- [P3] Duplicate block (d6cc9d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:16)
- [P3] Duplicate block (af572d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:34)
- [P3] Duplicate block (af572d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:17)
- [P3] Duplicate block (3cd3e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:35)
- [P3] Duplicate block (3cd3e6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:18)
- [P3] Duplicate block (79fe50) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:36)
- [P3] Duplicate block (79fe50) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:19)
- [P3] Duplicate block (4d2869) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:72)
- [P3] Duplicate block (4d2869) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Education/EducationCard.tsx:43)
- [P3] Unused export: ProfessionalSummary (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/ProfessionalSummary.tsx:7)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Skills/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/ProfessionalSummary.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/KeyResults.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Expirence/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/CVDownload.tsx:1)
- [P3] High complexity (22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/about/Languages.tsx:1)

</details>

### src/components/markdown

<details>
<summary>Issues (17)</summary>

- [P3] Duplicate block (3478d6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:113)
- [P3] Duplicate block (700fb5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:72)
- [P3] Duplicate block (700fb5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:168)
- [P3] Duplicate block (0540de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:73)
- [P3] Duplicate block (0540de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:169)
- [P3] Duplicate block (2f91bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:74)
- [P3] Duplicate block (2f91bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:170)
- [P3] Duplicate block (00d047) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:6)
- [P3] Duplicate block (924954) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:62)
- [P3] Duplicate block (924954) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:94)
- [P3] Duplicate block (d7ca51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:63)
- [P3] Duplicate block (d7ca51) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:95)
- [P3] Duplicate block (3df80a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:64)
- [P3] Duplicate block (3df80a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:96)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:1)
- [P2] High complexity (49) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/Toc.tsx:1)
- [P3] High complexity (15) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:1)

</details>

### src/components/home

<details>
<summary>Issues (47)</summary>

- [P3] Duplicate block (3da528) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:126)
- [P3] Duplicate block (8473f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:127)
- [P3] Duplicate block (d38157) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:56)
- [P3] Duplicate block (d38157) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:24)
- [P3] Duplicate block (d38157) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:26)
- [P3] Duplicate block (9b2793) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:57)
- [P3] Duplicate block (9b2793) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:25)
- [P3] Duplicate block (9b2793) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:27)
- [P3] Duplicate block (41b752) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:58)
- [P3] Duplicate block (41b752) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:26)
- [P3] Duplicate block (41b752) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:28)
- [P3] Duplicate block (fab480) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:59)
- [P3] Duplicate block (fab480) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:27)
- [P3] Duplicate block (fab480) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:29)
- [P3] Duplicate block (9a1076) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:65)
- [P3] Duplicate block (9a1076) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:34)
- [P3] Duplicate block (a13da6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:66)
- [P3] Duplicate block (a13da6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:35)
- [P3] Duplicate block (534946) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:67)
- [P3] Duplicate block (534946) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:36)
- [P3] Duplicate block (0cf466) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/StatCard.tsx:68)
- [P3] Duplicate block (0cf466) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:37)
- [P3] Duplicate block (86e9df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/index.tsx:108)
- [P3] Duplicate block (86e9df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/CaseStudies/index.tsx:141)
- [P3] Duplicate block (a0ba08) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:23)
- [P3] Duplicate block (a0ba08) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:25)
- [P3] Duplicate block (a0ba08) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/CaseStudies/index.tsx:14)
- [P3] Duplicate block (51bbc3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:108)
- [P3] Duplicate block (51bbc3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/CaseStudies/index.tsx:92)
- [P3] Duplicate block (7f40f9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:129)
- [P3] Duplicate block (7f40f9) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:140)
- [P3] Duplicate block (007171) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:130)
- [P3] Duplicate block (007171) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:141)
- [P3] Duplicate block (ef168c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:131)
- [P3] Duplicate block (ef168c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:142)
- [P3] Duplicate block (743089) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:132)
- [P3] Duplicate block (743089) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:143)
- [P3] Duplicate block (62c6de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:162)
- [P3] Unused export: TechnologyIcon (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Technologies/TechnologyIcon.tsx:9)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Technologies/TechnologyIcon.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Technologies/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Statistics/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/Hero/index.tsx:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/CaseStudies/index.tsx:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/PortfolioNav/index.tsx:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/home/CaseStudies/index.tsx:1)

</details>

### src/lib

<details>
<summary>Issues (25)</summary>

- [P3] Duplicate block (eb9c20) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/translationValidation.ts:34)
- [P3] Duplicate block (4e0fb6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/translationValidation.ts:35)
- [P3] Duplicate block (87888e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/toc.ts:30)
- [P3] Duplicate block (87888e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/toc.ts:39)
- [P3] Unused export: TRANSLATION_LIMITS (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/translationValidation.ts:4)
- [P3] Unused export: translationFieldSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/translationValidation.ts:44)
- [P3] Unused export: hasChanged (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/translationValidation.ts:91)
- [P3] Unused export: debounceAsync (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/debounce.ts:26)
- [P3] Unused export: technologyDetailSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/schemas/technologySchema.ts:20)
- [P3] Unused export: technologyDetailInsertSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/schemas/technologySchema.ts:30)
- [P3] Unused export: technologyDetailUpdateSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/schemas/technologySchema.ts:31)
- [P3] Unused export: aboutKeySchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/schemas/aboutContentSchema.ts:7)
- [P3] Unused export: aboutItemValueSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/schemas/aboutContentSchema.ts:13)
- [P3] Unused export: transitionHero (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/motion.ts:2)
- [P3] Unused export: stagger (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/motion.ts:4)
- [P3] Unused export: appMetadata (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/config.ts:44)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/downloadCV.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/debounce.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/motion.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/db/getAbout.test.ts:1)
- [P3] High complexity (22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/utils/renderCvMarkdown.ts:1)
- [P3] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/toc.ts:1)
- [P2] High complexity (50) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] High coupling (13 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] High complexity (20) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/db/getAbout.ts:1)

</details>

### services/useTranslationFieldValidation.ts

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (eb9c20) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:7)
- [P3] Duplicate block (4e0fb6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:8)
- [P3] Unused export: useTranslationFieldValidation (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:29)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:1)

</details>

### services/useUndoRedo.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (1b905b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:2)
- [P3] Duplicate block (c84d28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:3)
- [P3] Duplicate block (7f4753) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:76)
- [P3] Duplicate block (7f4753) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:99)
- [P3] Duplicate block (61a0bd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:77)
- [P3] Duplicate block (61a0bd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:100)
- [P3] Duplicate block (2c63d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:78)
- [P3] Duplicate block (2c63d1) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:101)
- [P3] Duplicate block (a9cbed) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:79)
- [P3] Duplicate block (a9cbed) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:102)
- [P3] Duplicate block (573e0e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:80)
- [P3] Duplicate block (573e0e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:103)
- [P3] Unused export: useUndoRedo (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:32)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useUndoRedo.ts:1)

</details>

### services/useEditableTranslation.ts

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (1b905b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEditableTranslation.ts:4)
- [P3] Duplicate block (c84d28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEditableTranslation.ts:5)
- [P3] Unused export: useEditableTranslation (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEditableTranslation.ts:28)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEditableTranslation.ts:1)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEditableTranslation.ts:1)

</details>

### services/useTranslationService.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (7087bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:142)
- [P3] Duplicate block (0ccaee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:143)
- [P3] Duplicate block (0ccaee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:170)
- [P3] Duplicate block (bd2710) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:144)
- [P3] Duplicate block (bd2710) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:171)
- [P3] Duplicate block (c42915) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:145)
- [P3] Duplicate block (c42915) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:172)
- [P3] High complexity (31) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTranslationService.ts:1)

</details>

### services/useProjectService.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (7087bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:128)
- [P3] Duplicate block (0ccaee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:129)
- [P3] Duplicate block (40fd61) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:72)
- [P3] Duplicate block (b4dd36) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:98)
- [P3] Duplicate block (71efa8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:99)
- [P3] Duplicate block (a05f97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:130)
- [P3] Duplicate block (0c927b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:154)
- [P3] High complexity (25) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useProjectService.ts:1)

</details>

### services/useFeatureFlagService.ts

<details>
<summary>Issues (9)</summary>

- [P3] Duplicate block (7087bb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:96)
- [P3] Duplicate block (0ccaee) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:97)
- [P3] Duplicate block (3fd9ac) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:24)
- [P3] Duplicate block (40fd61) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:41)
- [P3] Duplicate block (b4dd36) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:66)
- [P3] Duplicate block (71efa8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:67)
- [P3] Duplicate block (a05f97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:98)
- [P3] Duplicate block (0c927b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:122)
- [P3] High complexity (21) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useFeatureFlagService.ts:1)

</details>

### services/useTechnologyService.ts

<details>
<summary>Issues (9)</summary>

- [P3] Duplicate block (5b8416) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:55)
- [P3] Duplicate block (d7f43d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:73)
- [P3] Duplicate block (175088) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:74)
- [P3] Duplicate block (175088) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:105)
- [P3] Duplicate block (e78925) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:104)
- [P3] Duplicate block (c94a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:131)
- [P3] Unused export: useTechnologyService (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:31)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:1)
- [P3] High complexity (16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useTechnologyService.ts:1)

</details>

### services/useSkillService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:112)
- [P3] Duplicate block (e78925) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:158)
- [P3] Duplicate block (c94a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:192)
- [P3] Duplicate block (4db2fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:48)
- [P3] Duplicate block (3b5a12) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:55)
- [P3] Duplicate block (4bc6b7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:62)
- [P3] Duplicate block (aae09c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:63)
- [P3] Duplicate block (37aae4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:79)
- [P3] Duplicate block (5d61fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:80)
- [P3] Duplicate block (adccb4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:113)
- [P3] Duplicate block (78d996) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:114)
- [P3] Duplicate block (ab0617) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:115)
- [P3] Duplicate block (3fb181) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:157)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useSkillService.ts:1)

</details>

### services/useExperienceService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:118)
- [P3] Duplicate block (e78925) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:164)
- [P3] Duplicate block (c94a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:203)
- [P3] Duplicate block (4db2fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:48)
- [P3] Duplicate block (3b5a12) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:55)
- [P3] Duplicate block (4bc6b7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:62)
- [P3] Duplicate block (aae09c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:63)
- [P3] Duplicate block (37aae4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:82)
- [P3] Duplicate block (5d61fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:83)
- [P3] Duplicate block (adccb4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:119)
- [P3] Duplicate block (78d996) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:120)
- [P3] Duplicate block (ab0617) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:121)
- [P3] Duplicate block (3fb181) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:163)
- [P3] High complexity (33) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useExperienceService.ts:1)

</details>

### services/useEducationService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:116)
- [P3] Duplicate block (e78925) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:161)
- [P3] Duplicate block (c94a97) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:195)
- [P3] Duplicate block (4db2fd) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:48)
- [P3] Duplicate block (3b5a12) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:55)
- [P3] Duplicate block (4bc6b7) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:62)
- [P3] Duplicate block (aae09c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:63)
- [P3] Duplicate block (37aae4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:81)
- [P3] Duplicate block (5d61fa) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:82)
- [P3] Duplicate block (adccb4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:117)
- [P3] Duplicate block (78d996) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:118)
- [P3] Duplicate block (ab0617) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:119)
- [P3] Duplicate block (3fb181) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:160)
- [P3] High complexity (29) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useEducationService.ts:1)

</details>

### services/useContactService.ts

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (ecd45e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useContactService.ts:66)

</details>

### services/useBlogAdminService.ts

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (c11d65) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogAdminService.ts:77)
- [P3] Duplicate block (c11d65) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogAdminService.ts:125)
- [P3] High complexity (15) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogAdminService.ts:1)

</details>

### src/data

<details>
<summary>Issues (35)</summary>

- [P3] Duplicate block (8d1711) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:24)
- [P3] Duplicate block (8d1711) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:106)
- [P3] Duplicate block (1ccf06) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:25)
- [P3] Duplicate block (1ccf06) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:107)
- [P3] Duplicate block (4aebfb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:32)
- [P3] Duplicate block (4aebfb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:80)
- [P3] Duplicate block (20fd6b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:33)
- [P3] Duplicate block (20fd6b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:81)
- [P3] Duplicate block (164271) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:34)
- [P3] Duplicate block (164271) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:82)
- [P3] Duplicate block (fc1a3c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:35)
- [P3] Duplicate block (fc1a3c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:83)
- [P3] Duplicate block (743c39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:36)
- [P3] Duplicate block (743c39) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:84)
- [P3] Duplicate block (571952) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:37)
- [P3] Duplicate block (571952) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:85)
- [P3] Duplicate block (a3ea34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:38)
- [P3] Duplicate block (a3ea34) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:86)
- [P3] Duplicate block (9d4b53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:39)
- [P3] Duplicate block (9d4b53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:87)
- [P3] Duplicate block (3f71a5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:40)
- [P3] Duplicate block (3f71a5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:88)
- [P3] Duplicate block (80e5bc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:46)
- [P3] Duplicate block (80e5bc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:95)
- [P3] Duplicate block (4b1001) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:47)
- [P3] Duplicate block (4b1001) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:96)
- [P3] Duplicate block (ceba7a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:48)
- [P3] Duplicate block (ceba7a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:97)
- [P3] Duplicate block (77fb0f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:49)
- [P3] Duplicate block (77fb0f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:98)
- [P3] Duplicate block (e69f21) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:50)
- [P3] Duplicate block (e69f21) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:99)
- [P3] Duplicate block (77d722) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:51)
- [P3] Duplicate block (77d722) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:100)
- [P3] Unused export: CvSchema (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/data/cv.schema.ts:70)

</details>

### src/components/SettingsPanel.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (53e0ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SettingsPanel.tsx:84)
- [P3] Duplicate block (729884) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SettingsPanel.tsx:85)
- [P3] Duplicate block (4b39a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SettingsPanel.tsx:86)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SettingsPanel.tsx:1)

</details>

### src/components/HelpTooltip.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (53e0ce) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/HelpTooltip.tsx:57)
- [P3] Duplicate block (729884) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/HelpTooltip.tsx:58)
- [P3] Duplicate block (4b39a0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/HelpTooltip.tsx:59)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/HelpTooltip.tsx:1)

</details>

### src/components/SectionNavigation.tsx

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (360adb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:76)
- [P3] Duplicate block (360adb) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:148)
- [P3] Duplicate block (d4ff89) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:77)
- [P3] Duplicate block (d4ff89) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:149)
- [P3] Duplicate block (660fe8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:78)
- [P3] Duplicate block (660fe8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:150)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:1)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SectionNavigation.tsx:1)

</details>

### src/components/ScrollIndicator.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (b58c4a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ScrollIndicator.tsx:33)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ScrollIndicator.tsx:1)

</details>

### src/components/ReadingProgress.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (b58c4a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ReadingProgress.tsx:29)

</details>

### src/components/loading

<details>
<summary>Issues (92)</summary>

- [P3] Duplicate block (7b9af4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:14)
- [P3] Duplicate block (7b9af4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:20)
- [P3] Duplicate block (f64203) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:15)
- [P3] Duplicate block (f64203) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:21)
- [P3] Duplicate block (a24045) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:16)
- [P3] Duplicate block (a24045) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:22)
- [P3] Duplicate block (574b26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:17)
- [P3] Duplicate block (574b26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:23)
- [P3] Duplicate block (9c8fbc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:18)
- [P3] Duplicate block (9c8fbc) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:24)
- [P3] Duplicate block (37d54f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:19)
- [P3] Duplicate block (37d54f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:25)
- [P3] Duplicate block (a54923) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:20)
- [P3] Duplicate block (a54923) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:26)
- [P3] Duplicate block (fb0c75) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:21)
- [P3] Duplicate block (fb0c75) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:27)
- [P3] Duplicate block (ade67c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:22)
- [P3] Duplicate block (ade67c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:28)
- [P3] Duplicate block (f2854c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:23)
- [P3] Duplicate block (f2854c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:29)
- [P3] Duplicate block (82835a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:24)
- [P3] Duplicate block (82835a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:30)
- [P3] Duplicate block (4fe85d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:31)
- [P3] Duplicate block (4fe85d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:37)
- [P3] Duplicate block (ba1791) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:32)
- [P3] Duplicate block (ba1791) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:38)
- [P3] Duplicate block (8483f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:33)
- [P3] Duplicate block (8483f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:39)
- [P3] Duplicate block (cc4e0a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:34)
- [P3] Duplicate block (cc4e0a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:40)
- [P3] Duplicate block (8e5d53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:35)
- [P3] Duplicate block (8e5d53) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:41)
- [P3] Duplicate block (86622e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:36)
- [P3] Duplicate block (86622e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:42)
- [P3] Duplicate block (fcd228) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:37)
- [P3] Duplicate block (fcd228) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:43)
- [P3] Duplicate block (756b58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:38)
- [P3] Duplicate block (756b58) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:44)
- [P3] Duplicate block (0bc397) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:39)
- [P3] Duplicate block (0bc397) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:45)
- [P3] Duplicate block (9b65f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:40)
- [P3] Duplicate block (9b65f3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:46)
- [P3] Duplicate block (b679f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:41)
- [P3] Duplicate block (b679f6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:47)
- [P3] Duplicate block (330e23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:42)
- [P3] Duplicate block (330e23) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:48)
- [P3] Duplicate block (8a1aae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:43)
- [P3] Duplicate block (8a1aae) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:49)
- [P3] Duplicate block (c483b8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:44)
- [P3] Duplicate block (c483b8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:50)
- [P3] Duplicate block (bde83e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:45)
- [P3] Duplicate block (bde83e) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:51)
- [P3] Duplicate block (ee19e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:52)
- [P3] Duplicate block (ee19e4) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:58)
- [P3] Duplicate block (98ba8c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:53)
- [P3] Duplicate block (98ba8c) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:59)
- [P3] Duplicate block (11e712) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:54)
- [P3] Duplicate block (11e712) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:60)
- [P3] Duplicate block (b05759) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:55)
- [P3] Duplicate block (b05759) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:61)
- [P3] Duplicate block (20654a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:56)
- [P3] Duplicate block (20654a) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:62)
- [P3] Duplicate block (0a7287) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:57)
- [P3] Duplicate block (0a7287) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:63)
- [P3] Duplicate block (7387c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:58)
- [P3] Duplicate block (7387c6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:64)
- [P3] Duplicate block (6c6401) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:59)
- [P3] Duplicate block (6c6401) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:65)
- [P3] Duplicate block (442672) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:60)
- [P3] Duplicate block (442672) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:66)
- [P3] Duplicate block (b5d486) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:61)
- [P3] Duplicate block (b5d486) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:67)
- [P3] Duplicate block (c7c872) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:62)
- [P3] Duplicate block (c7c872) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:68)
- [P3] Duplicate block (c606b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:63)
- [P3] Duplicate block (c606b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:69)
- [P3] Duplicate block (60b00b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:64)
- [P3] Duplicate block (60b00b) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:70)
- [P3] Duplicate block (643bd5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:65)
- [P3] Duplicate block (643bd5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:71)
- [P3] Duplicate block (58ffb8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:66)
- [P3] Duplicate block (58ffb8) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:72)
- [P3] Duplicate block (c09003) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:67)
- [P3] Duplicate block (c09003) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:73)
- [P3] Duplicate block (3a55c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:68)
- [P3] Duplicate block (3a55c0) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:74)
- [P3] Duplicate block (843c95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:84)
- [P3] Duplicate block (843c95) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:80)
- [P3] Duplicate block (42d09f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:85)
- [P3] Duplicate block (42d09f) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:81)
- [P3] Duplicate block (99d4c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:86)
- [P3] Duplicate block (99d4c5) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/loading/LoadingScreen.tsx:82)

</details>

### src/components/AboutMe.tsx

<details>
<summary>Issues (13)</summary>

- [P3] Duplicate block (62c6de) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:141)
- [P3] Duplicate block (aef3b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:77)
- [P3] Duplicate block (aef3b6) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:102)
- [P3] Duplicate block (a04cd3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:78)
- [P3] Duplicate block (a04cd3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:103)
- [P3] Duplicate block (ed9fab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:79)
- [P3] Duplicate block (ed9fab) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:104)
- [P3] Duplicate block (64d12d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:80)
- [P3] Duplicate block (64d12d) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:105)
- [P3] Duplicate block (e364df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:81)
- [P3] Duplicate block (e364df) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:106)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:1)
- [P3] High complexity (22) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AboutMe.tsx:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/utils

<details>
<summary>Issues (3)</summary>

- [P3] Unused export: isIgnored (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/utils/fs.ts:6)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/utils/git.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/utils/fs.ts:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis

<details>
<summary>Issues (13)</summary>

- [P3] Unused export: priorityFromMatrix (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/risk_model.ts:10)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/types.ts:1)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/suggestions.ts:6)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/cli.ts:12)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/cli.ts:13)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/types.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/suggestions.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/risk_model.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/grouping.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/cli.ts:1)
- [P3] High complexity (28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/risk_model.ts:1)
- [P3] High complexity (27) (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/cli.ts:1)
- [P3] Underscore file name (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/risk_model.ts:1)

</details>

### src/unused.ts

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: unusedValue (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/unused.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/unused.ts:1)

</details>

### src/deprecated.ts

<details>
<summary>Issues (4)</summary>

- [P3] Unused export: legacyApi (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:2)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:1)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:2)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:1)

</details>

### src/complex.ts

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: complicated (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/complex.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/complex.ts:1)

</details>

### src/pages/MarkdownDemo.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: MarkdownDemo (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/MarkdownDemo.tsx:8)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/MarkdownDemo.tsx:1)

</details>

### services/useBlogAdminState.ts

<details>
<summary>Issues (1)</summary>

- [P3] Unused export: INITIAL_FORM_STATE (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogAdminState.ts:8)

</details>

### src/hooks

<details>
<summary>Issues (3)</summary>

- [P3] Unused export: useTranslationText (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/hooks/useTranslationText.ts:7)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/hooks/useTranslationText.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/hooks/useTilt.ts:1)

</details>

### src/fixtures

<details>
<summary>Issues (9)</summary>

- [P3] Unused export: sampleMarkdown (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/sampleMarkdown.ts:7)
- [P3] Unused export: shortSampleMarkdown (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/sampleMarkdown.ts:232)
- [P3] Unused export: complexMarkdown (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/sampleMarkdown.ts:255)
- [P3] Unused export: codeSampleMarkdown (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/codeSampleMarkdown.ts:4)
- [P3] Unused export: calculateSum (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/codeSampleMarkdown.ts:23)
- [P3] Unused export: multiply (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/codeSampleMarkdown.ts:27)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/sampleMarkdown.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/codeSampleMarkdown.ts:1)
- [P3] High complexity (15) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/fixtures/sampleMarkdown.ts:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/__tests__

<details>
<summary>Issues (2)</summary>

- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/__tests__/analysis.test.js:10)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/__tests__/analysis.test.js:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors

<details>
<summary>Issues (10)</summary>

- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/deprecated.ts:3)
- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/deprecated.ts:4)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/unused.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/duplication.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/deprecated.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/deadcode.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/consistency.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/complexity.ts:1)
- [P3] High complexity (15) (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/unused.ts:1)
- [P3] High complexity (17) (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/detectors/complexity.ts:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/collectors

<details>
<summary>Issues (3)</summary>

- [P3] Deprecated marker (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/collectors/index.ts:9)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/collectors/index.ts:1)
- [P3] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/collectors/index.ts:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio

<details>
<summary>Issues (6)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/vite.config.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tailwind.config.js:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/postcss.config.js:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/playwright.config.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/jest.config.cjs:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/eslint.config.js:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/reporters

<details>
<summary>Issues (4)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/reporters/markdown_reporter.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/reporters/json_reporter.ts:1)
- [P3] Underscore file name (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/reporters/markdown_reporter.ts:1)
- [P3] Underscore file name (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/reporters/json_reporter.ts:1)

</details>

### src/entry.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/entry.ts:1)

</details>

### src/b.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tools/analysis/fixtures/simple/src/b.ts:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/tests

<details>
<summary>Issues (3)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tests/visual-smoke.spec.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tests/AutomationTestingCard.spec.ts:1)
- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/tests/about.spec.ts:1)

</details>

### src/vite-env.d.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/vite-env.d.ts:1)

</details>

### src/translations

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/translations/index.ts:1)

</details>

### src/components/ui

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ui/glsl-hills.tsx:1)

</details>

### src/components/ThemeToggle.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ThemeToggle.tsx:1)

</details>

### src/components/SoundEffects.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/SoundEffects.tsx:1)

</details>

### src/components/ScrollToTop.test.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/ScrollToTop.test.tsx:1)

</details>

### src/components/PageProgress.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/PageProgress.tsx:1)

</details>

### src/components/Footer

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Footer/index.tsx:1)

</details>

### src/components/FloatingActions.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/FloatingActions.tsx:1)

</details>

### src/components/AutomationTestingCard.test.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/AutomationTestingCard.test.tsx:1)

</details>

### C:/Users/gor_p/Documents/Xxx/my-portfolio/scripts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (C:/Users/gor_p/Documents/Xxx/my-portfolio/scripts/verify-design-tokens.mjs:1)

</details>


## Roadmap

#### Phase 1 (Low-risk wins)
- [ ] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:48) [P3]
- [ ] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:70) [P3]
- [ ] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:49) [P3]
- [ ] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:71) [P3]
- [ ] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:65) [P3]
- [ ] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:99) [P3]
- [ ] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:66) [P3]
- [ ] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:100) [P3]
- [ ] Duplicate block (f46a92) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminPage.tsx:55) [P3]
- [ ] Duplicate block (7709ff) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:174) [P3]

#### Phase 2 (Moderate)
- [ ] High coupling (15 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:1) [P3]
- [ ] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1) [P2]
- [ ] High coupling (13 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1) [P3]
- [ ] High complexity (16) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/AdminPage.tsx:1) [P3]
- [ ] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/MobileMenu.tsx:1) [P2]
- [ ] High complexity (26) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/Header/index.tsx:1) [P3]
- [ ] High complexity (43) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useBlogService.ts:1) [P2]
- [ ] High complexity (28) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/useAboutService.ts:1) [P3]
- [ ] High complexity (18) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:1) [P3]
- [ ] High complexity (13) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/components/KeyboardShortcuts.tsx:1) [P3]

#### Phase 3 (Higher-risk)
- [ ] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:48) [P3]
- [ ] Duplicate block (859792) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:70) [P3]
- [ ] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:49) [P3]
- [ ] Duplicate block (1b4674) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:71) [P3]
- [ ] High coupling (15 imports) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/routes/index.tsx:1) [P3]
- [ ] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:65) [P3]
- [ ] Duplicate block (2a7af3) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:99) [P3]
- [ ] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:66) [P3]
- [ ] Duplicate block (af9d42) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:100) [P3]
- [ ] High complexity (14) (C:/Users/gor_p/Documents/Xxx/my-portfolio/src/pages/HomePage.tsx:1) [P2]
