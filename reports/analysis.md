# Analysis Report

## Executive summary

| Type | Count |
| --- | --- |
| duplication | 1982 |
| unused | 42 |
| dead | 114 |
| deprecated | 12 |
| complexity | 66 |
| coupling | 10 |
| consistency | 3 |

## Top 20 cleanup candidates

- [P1] High complexity (288) (/home/user/my-portfolio/src/types/database.types.ts:1)
- [P2] High complexity (77) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:1)
- [P2] High complexity (13) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:1)
- [P2] High complexity (31) (/home/user/my-portfolio/src/components/AboutMe.tsx:1)
- [P2] High complexity (22) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:1)
- [P2] High complexity (21) (/home/user/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P2] High complexity (73) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:1)
- [P2] High complexity (68) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:1)
- [P2] High complexity (42) (/home/user/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P2] High complexity (63) (/home/user/my-portfolio/src/components/admin/BlogPostForm.tsx:1)
- [P2] High complexity (49) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:1)
- [P2] High complexity (16) (/home/user/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:1)
- [P2] High complexity (50) (/home/user/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:13)
- [P3] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:40)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:14)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:41)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:176)
- [P3] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:22)
- [P3] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:47)

## Modules

### src/types

<details>
<summary>Issues (131)</summary>

- [P3] Duplicate block (33402b) (/home/user/my-portfolio/src/types/testing.ts:9)
- [P3] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:13)
- [P3] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:40)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:14)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:41)
- [P3] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:176)
- [P3] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:22)
- [P3] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:47)
- [P3] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:23)
- [P3] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:48)
- [P3] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:184)
- [P3] Duplicate block (e615a6) (/home/user/my-portfolio/src/types/database.types.ts:61)
- [P3] Duplicate block (037901) (/home/user/my-portfolio/src/types/database.types.ts:69)
- [P3] Duplicate block (037901) (/home/user/my-portfolio/src/types/database.types.ts:140)
- [P3] Duplicate block (037901) (/home/user/my-portfolio/src/types/database.types.ts:368)
- [P3] Duplicate block (fc607c) (/home/user/my-portfolio/src/types/database.types.ts:81)
- [P3] Duplicate block (fc607c) (/home/user/my-portfolio/src/types/database.types.ts:153)
- [P3] Duplicate block (fc607c) (/home/user/my-portfolio/src/types/database.types.ts:379)
- [P3] Duplicate block (a5e5ec) (/home/user/my-portfolio/src/types/database.types.ts:141)
- [P3] Duplicate block (a5e5ec) (/home/user/my-portfolio/src/types/database.types.ts:369)
- [P3] Duplicate block (af0ef9) (/home/user/my-portfolio/src/types/database.types.ts:147)
- [P3] Duplicate block (af0ef9) (/home/user/my-portfolio/src/types/database.types.ts:160)
- [P3] Duplicate block (eb6747) (/home/user/my-portfolio/src/types/database.types.ts:148)
- [P3] Duplicate block (eb6747) (/home/user/my-portfolio/src/types/database.types.ts:161)
- [P3] Duplicate block (ca2bc8) (/home/user/my-portfolio/src/types/database.types.ts:149)
- [P3] Duplicate block (ca2bc8) (/home/user/my-portfolio/src/types/database.types.ts:162)
- [P3] Duplicate block (29e599) (/home/user/my-portfolio/src/types/database.types.ts:150)
- [P3] Duplicate block (29e599) (/home/user/my-portfolio/src/types/database.types.ts:163)
- [P3] Duplicate block (211877) (/home/user/my-portfolio/src/types/database.types.ts:154)
- [P3] Duplicate block (211877) (/home/user/my-portfolio/src/types/database.types.ts:380)
- [P3] Duplicate block (d60104) (/home/user/my-portfolio/src/types/database.types.ts:172)
- [P3] Duplicate block (b2eefb) (/home/user/my-portfolio/src/types/database.types.ts:173)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:230)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:264)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:367)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:499)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:545)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:594)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:640)
- [P3] Duplicate block (6b09f2) (/home/user/my-portfolio/src/types/database.types.ts:686)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:241)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:274)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:378)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:505)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:551)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:600)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:646)
- [P3] Duplicate block (c1969e) (/home/user/my-portfolio/src/types/database.types.ts:692)
- [P3] Duplicate block (4a3e0c) (/home/user/my-portfolio/src/types/database.types.ts:292)
- [P3] Duplicate block (4a3e0c) (/home/user/my-portfolio/src/types/database.types.ts:304)
- [P3] Duplicate block (d6df88) (/home/user/my-portfolio/src/types/database.types.ts:397)
- [P3] Duplicate block (d6df88) (/home/user/my-portfolio/src/types/database.types.ts:408)
- [P3] Duplicate block (5ed477) (/home/user/my-portfolio/src/types/database.types.ts:402)
- [P3] Duplicate block (5ed477) (/home/user/my-portfolio/src/types/database.types.ts:473)
- [P3] Duplicate block (5ed477) (/home/user/my-portfolio/src/types/database.types.ts:736)
- [P3] Duplicate block (343993) (/home/user/my-portfolio/src/types/database.types.ts:413)
- [P3] Duplicate block (343993) (/home/user/my-portfolio/src/types/database.types.ts:482)
- [P3] Duplicate block (343993) (/home/user/my-portfolio/src/types/database.types.ts:746)
- [P3] Duplicate block (f6f5a2) (/home/user/my-portfolio/src/types/database.types.ts:432)
- [P3] Duplicate block (f6f5a2) (/home/user/my-portfolio/src/types/database.types.ts:444)
- [P3] Duplicate block (870aec) (/home/user/my-portfolio/src/types/database.types.ts:497)
- [P3] Duplicate block (870aec) (/home/user/my-portfolio/src/types/database.types.ts:543)
- [P3] Duplicate block (870aec) (/home/user/my-portfolio/src/types/database.types.ts:592)
- [P3] Duplicate block (870aec) (/home/user/my-portfolio/src/types/database.types.ts:638)
- [P3] Duplicate block (870aec) (/home/user/my-portfolio/src/types/database.types.ts:684)
- [P3] Duplicate block (ebca8a) (/home/user/my-portfolio/src/types/database.types.ts:498)
- [P3] Duplicate block (ebca8a) (/home/user/my-portfolio/src/types/database.types.ts:544)
- [P3] Duplicate block (ebca8a) (/home/user/my-portfolio/src/types/database.types.ts:593)
- [P3] Duplicate block (ebca8a) (/home/user/my-portfolio/src/types/database.types.ts:639)
- [P3] Duplicate block (ebca8a) (/home/user/my-portfolio/src/types/database.types.ts:685)
- [P3] Duplicate block (3b206a) (/home/user/my-portfolio/src/types/database.types.ts:500)
- [P3] Duplicate block (3b206a) (/home/user/my-portfolio/src/types/database.types.ts:546)
- [P3] Duplicate block (3b206a) (/home/user/my-portfolio/src/types/database.types.ts:595)
- [P3] Duplicate block (3b206a) (/home/user/my-portfolio/src/types/database.types.ts:641)
- [P3] Duplicate block (3b206a) (/home/user/my-portfolio/src/types/database.types.ts:687)
- [P3] Duplicate block (b269ce) (/home/user/my-portfolio/src/types/database.types.ts:501)
- [P3] Duplicate block (b269ce) (/home/user/my-portfolio/src/types/database.types.ts:547)
- [P3] Duplicate block (b269ce) (/home/user/my-portfolio/src/types/database.types.ts:596)
- [P3] Duplicate block (b269ce) (/home/user/my-portfolio/src/types/database.types.ts:642)
- [P3] Duplicate block (b269ce) (/home/user/my-portfolio/src/types/database.types.ts:688)
- [P3] Duplicate block (2e9f94) (/home/user/my-portfolio/src/types/database.types.ts:502)
- [P3] Duplicate block (2e9f94) (/home/user/my-portfolio/src/types/database.types.ts:548)
- [P3] Duplicate block (2e9f94) (/home/user/my-portfolio/src/types/database.types.ts:597)
- [P3] Duplicate block (2e9f94) (/home/user/my-portfolio/src/types/database.types.ts:643)
- [P3] Duplicate block (2e9f94) (/home/user/my-portfolio/src/types/database.types.ts:689)
- [P3] Duplicate block (dd5656) (/home/user/my-portfolio/src/types/database.types.ts:503)
- [P3] Duplicate block (dd5656) (/home/user/my-portfolio/src/types/database.types.ts:549)
- [P3] Duplicate block (dd5656) (/home/user/my-portfolio/src/types/database.types.ts:598)
- [P3] Duplicate block (dd5656) (/home/user/my-portfolio/src/types/database.types.ts:644)
- [P3] Duplicate block (dd5656) (/home/user/my-portfolio/src/types/database.types.ts:690)
- [P3] Duplicate block (5df7d2) (/home/user/my-portfolio/src/types/database.types.ts:504)
- [P3] Duplicate block (5df7d2) (/home/user/my-portfolio/src/types/database.types.ts:550)
- [P3] Duplicate block (5df7d2) (/home/user/my-portfolio/src/types/database.types.ts:599)
- [P3] Duplicate block (5df7d2) (/home/user/my-portfolio/src/types/database.types.ts:645)
- [P3] Duplicate block (5df7d2) (/home/user/my-portfolio/src/types/database.types.ts:691)
- [P3] Duplicate block (fb0885) (/home/user/my-portfolio/src/types/database.types.ts:506)
- [P3] Duplicate block (fb0885) (/home/user/my-portfolio/src/types/database.types.ts:552)
- [P3] Duplicate block (fb0885) (/home/user/my-portfolio/src/types/database.types.ts:601)
- [P3] Duplicate block (fb0885) (/home/user/my-portfolio/src/types/database.types.ts:647)
- [P3] Duplicate block (fb0885) (/home/user/my-portfolio/src/types/database.types.ts:693)
- [P3] Duplicate block (78182b) (/home/user/my-portfolio/src/types/database.types.ts:507)
- [P3] Duplicate block (78182b) (/home/user/my-portfolio/src/types/database.types.ts:553)
- [P3] Duplicate block (78182b) (/home/user/my-portfolio/src/types/database.types.ts:602)
- [P3] Duplicate block (78182b) (/home/user/my-portfolio/src/types/database.types.ts:648)
- [P3] Duplicate block (78182b) (/home/user/my-portfolio/src/types/database.types.ts:694)
- [P3] Duplicate block (501c6a) (/home/user/my-portfolio/src/types/database.types.ts:508)
- [P3] Duplicate block (501c6a) (/home/user/my-portfolio/src/types/database.types.ts:554)
- [P3] Duplicate block (501c6a) (/home/user/my-portfolio/src/types/database.types.ts:603)
- [P3] Duplicate block (501c6a) (/home/user/my-portfolio/src/types/database.types.ts:649)
- [P3] Duplicate block (501c6a) (/home/user/my-portfolio/src/types/database.types.ts:695)
- [P3] Duplicate block (327b73) (/home/user/my-portfolio/src/types/database.types.ts:509)
- [P3] Duplicate block (327b73) (/home/user/my-portfolio/src/types/database.types.ts:555)
- [P3] Duplicate block (327b73) (/home/user/my-portfolio/src/types/database.types.ts:604)
- [P3] Duplicate block (327b73) (/home/user/my-portfolio/src/types/database.types.ts:650)
- [P3] Duplicate block (327b73) (/home/user/my-portfolio/src/types/database.types.ts:696)
- [P3] Duplicate block (6392b6) (/home/user/my-portfolio/src/types/database.types.ts:510)
- [P3] Duplicate block (6392b6) (/home/user/my-portfolio/src/types/database.types.ts:556)
- [P3] Duplicate block (6392b6) (/home/user/my-portfolio/src/types/database.types.ts:605)
- [P3] Duplicate block (6392b6) (/home/user/my-portfolio/src/types/database.types.ts:651)
- [P3] Duplicate block (6392b6) (/home/user/my-portfolio/src/types/database.types.ts:697)
- [P3] Duplicate block (420400) (/home/user/my-portfolio/src/types/database.types.ts:661)
- [P3] Duplicate block (420400) (/home/user/my-portfolio/src/types/database.types.ts:707)
- [P3] Duplicate block (ba4f3b) (/home/user/my-portfolio/src/types/database.types.ts:662)
- [P3] Duplicate block (ba4f3b) (/home/user/my-portfolio/src/types/database.types.ts:708)
- [P3] Duplicate block (d34e96) (/home/user/my-portfolio/src/types/database.types.ts:669)
- [P3] Duplicate block (d34e96) (/home/user/my-portfolio/src/types/database.types.ts:715)
- [P3] Duplicate block (677cb1) (/home/user/my-portfolio/src/types/database.types.ts:670)
- [P3] Duplicate block (677cb1) (/home/user/my-portfolio/src/types/database.types.ts:716)
- [P3] Duplicate block (edde4f) (/home/user/my-portfolio/src/types/database.types.ts:677)
- [P3] Duplicate block (edde4f) (/home/user/my-portfolio/src/types/database.types.ts:723)
- [P1] High complexity (288) (/home/user/my-portfolio/src/types/database.types.ts:1)

</details>

### src/routes

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (859792) (/home/user/my-portfolio/src/routes/index.tsx:48)
- [P3] Duplicate block (859792) (/home/user/my-portfolio/src/routes/index.tsx:70)
- [P3] Duplicate block (1b4674) (/home/user/my-portfolio/src/routes/index.tsx:49)
- [P3] Duplicate block (1b4674) (/home/user/my-portfolio/src/routes/index.tsx:71)
- [P3] High coupling (15 imports) (/home/user/my-portfolio/src/routes/index.tsx:1)

</details>

### src/pages/HomePage.tsx

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (a66a4a) (/home/user/my-portfolio/src/pages/HomePage.tsx:62)
- [P3] Duplicate block (a66a4a) (/home/user/my-portfolio/src/pages/HomePage.tsx:91)
- [P3] High coupling (14 imports) (/home/user/my-portfolio/src/pages/HomePage.tsx:1)

</details>

### src/components/Header

<details>
<summary>Issues (11)</summary>

- [P3] Duplicate block (8e0490) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:155)
- [P3] Duplicate block (e3b2b0) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:156)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:174)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:175)
- [P3] Duplicate block (89d038) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:172)
- [P3] Duplicate block (88f199) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:173)
- [P3] Unused export: LanguageSelector (/home/user/my-portfolio/src/components/Header/LanguageSelector.tsx:12)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/Header/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/Header/LanguageSelector.tsx:1)
- [P3] High complexity (26) (/home/user/my-portfolio/src/components/Header/index.tsx:1)
- [P2] High complexity (13) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:1)

</details>

### services/useAboutService.ts

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (5b8416) (/home/user/my-portfolio/src/lib/services/useAboutService.ts:50)
- [P3] High complexity (28) (/home/user/my-portfolio/src/lib/services/useAboutService.ts:1)

</details>

### services/usePublicFeatureFlags.ts

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (3fd9ac) (/home/user/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:49)
- [P3] High complexity (18) (/home/user/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:1)

</details>

### src/components/AboutMe.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (86e9df) (/home/user/my-portfolio/src/components/AboutMe.tsx:165)
- [P3] Duplicate block (0c4085) (/home/user/my-portfolio/src/components/AboutMe.tsx:12)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/AboutMe.tsx:1)
- [P2] High complexity (31) (/home/user/my-portfolio/src/components/AboutMe.tsx:1)

</details>

### src/pages/AdminPage.tsx

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (16) (/home/user/my-portfolio/src/pages/AdminPage.tsx:1)

</details>

### src/pages/AboutPage.tsx

<details>
<summary>Issues (1)</summary>

- [P3] High coupling (19 imports) (/home/user/my-portfolio/src/pages/AboutPage.tsx:1)

</details>

### services/usePublicBlogPosts.ts

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (33) (/home/user/my-portfolio/src/lib/services/usePublicBlogPosts.ts:1)

</details>

### services/useMarkdownService.ts

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (23) (/home/user/my-portfolio/src/lib/services/useMarkdownService.ts:1)

</details>

### services/useAuthService.ts

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (17) (/home/user/my-portfolio/src/lib/services/useAuthService.ts:1)

</details>

### src/content

<details>
<summary>Issues (1)</summary>

- [P3] High complexity (23) (/home/user/my-portfolio/src/content/cv.map.ts:1)

</details>

### src/components/AutomationTestingCard.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (33402b) (/home/user/my-portfolio/src/components/AutomationTestingCard.tsx:9)

</details>

### src/pages/BlogPage

<details>
<summary>Issues (104)</summary>

- [P3] Duplicate block (e615a6) (/home/user/my-portfolio/src/pages/BlogPage/BlogCard.tsx:12)
- [P3] Duplicate block (684958) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:28)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:29)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:52)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:120)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:147)
- [P3] Duplicate block (d4c787) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:40)
- [P3] Duplicate block (17c3e0) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:41)
- [P3] Duplicate block (6791eb) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:42)
- [P3] Duplicate block (fb926c) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:43)
- [P3] Duplicate block (895782) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:44)
- [P3] Duplicate block (188996) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:45)
- [P3] Duplicate block (024409) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:46)
- [P3] Duplicate block (1e24c6) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:47)
- [P3] Duplicate block (7973d5) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:48)
- [P3] Duplicate block (a03f09) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:49)
- [P3] Duplicate block (7dabba) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:50)
- [P3] Duplicate block (f5bb09) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:51)
- [P3] Duplicate block (c79360) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:53)
- [P3] Duplicate block (b692ad) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:54)
- [P3] Duplicate block (feda33) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:55)
- [P3] Duplicate block (cdebcd) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:56)
- [P3] Duplicate block (a79f6f) (/home/user/my-portfolio/src/pages/BlogPage/BlogCard.tsx:86)
- [P3] Duplicate block (9018c4) (/home/user/my-portfolio/src/pages/BlogPage/BlogCard.tsx:87)
- [P3] Duplicate block (9b6bda) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:81)
- [P3] Duplicate block (967a96) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:82)
- [P3] Duplicate block (c9f1bb) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:83)
- [P3] Duplicate block (d0054a) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:84)
- [P3] Duplicate block (432331) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:85)
- [P3] Duplicate block (4196e6) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:86)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:95)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:96)
- [P3] Duplicate block (ad810d) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:155)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:156)
- [P3] Duplicate block (1e6cf0) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:157)
- [P3] Duplicate block (9a8671) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:158)
- [P3] Duplicate block (a1258a) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:159)
- [P3] Duplicate block (7e1a34) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:160)
- [P3] Duplicate block (8bb57d) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:161)
- [P3] Duplicate block (005e83) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:162)
- [P3] Duplicate block (b9f3f4) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:163)
- [P3] Duplicate block (1e10d3) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:164)
- [P3] Duplicate block (7dfecd) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:165)
- [P3] Duplicate block (d111ac) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:166)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:167)
- [P3] Duplicate block (ad7fa0) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:36)
- [P3] Duplicate block (ad7fa0) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:64)
- [P3] Duplicate block (ab30ba) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:37)
- [P3] Duplicate block (ab30ba) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:65)
- [P3] Duplicate block (6f43dc) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:38)
- [P3] Duplicate block (6f43dc) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:66)
- [P3] Duplicate block (d903da) (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:39)
- [P3] Duplicate block (d903da) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:67)
- [P3] Duplicate block (c8a28e) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:115)
- [P3] Duplicate block (c8a28e) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:143)
- [P3] Duplicate block (f46a92) (/home/user/my-portfolio/src/pages/BlogPage/BlogGrid.tsx:33)
- [P3] Duplicate block (5dae58) (/home/user/my-portfolio/src/pages/BlogPage/BlogGrid.tsx:44)
- [P3] Duplicate block (690d53) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:4)
- [P3] Duplicate block (c2c9d4) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:10)
- [P3] Duplicate block (6e1437) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:21)
- [P3] Duplicate block (69f05c) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:22)
- [P3] Duplicate block (adc431) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:23)
- [P3] Duplicate block (66ff1f) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:24)
- [P3] Duplicate block (341917) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:25)
- [P3] Duplicate block (422cbd) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:26)
- [P3] Duplicate block (38d25d) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:27)
- [P3] Duplicate block (10a3eb) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:28)
- [P3] Duplicate block (7de535) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:29)
- [P3] Duplicate block (9512e0) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:36)
- [P3] Duplicate block (0417a9) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:37)
- [P3] Duplicate block (8c3a32) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:38)
- [P3] Duplicate block (702362) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:39)
- [P3] Duplicate block (1d427e) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:40)
- [P3] Duplicate block (f5e900) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:41)
- [P3] Duplicate block (2b546e) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:42)
- [P3] Duplicate block (ca8f93) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:43)
- [P3] Duplicate block (c42fb2) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:44)
- [P3] Duplicate block (c7dd82) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:45)
- [P3] Duplicate block (ff084b) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:46)
- [P3] Duplicate block (639ab1) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:47)
- [P3] Duplicate block (41b463) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:48)
- [P3] Duplicate block (4ea8be) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:49)
- [P3] Duplicate block (83e321) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:50)
- [P3] Duplicate block (97579c) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:51)
- [P3] Duplicate block (0638b0) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:52)
- [P3] Duplicate block (a74163) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:53)
- [P3] Duplicate block (f4970e) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:54)
- [P3] Duplicate block (25d0f8) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:55)
- [P3] Duplicate block (9aa804) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:56)
- [P3] Duplicate block (d8cf27) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:57)
- [P3] Duplicate block (eef03e) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:58)
- [P3] Duplicate block (89d377) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:59)
- [P3] Duplicate block (84d4a0) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:97)
- [P3] Duplicate block (95872e) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:98)
- [P3] Duplicate block (953603) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:99)
- [P3] Duplicate block (7f7621) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:105)
- [P3] Duplicate block (d8a19b) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:106)
- [P3] Duplicate block (ebc118) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:107)
- [P3] Duplicate block (26cd49) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:108)
- [P3] Duplicate block (70dc86) (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:109)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/BlogPage/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/BlogPage/BlogAdmin.tsx:1)
- [P2] High complexity (22) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:1)
- [P3] High coupling (14 imports) (/home/user/my-portfolio/src/pages/BlogPage/BlogViewPage.tsx:1)

</details>

### src/pages/AdminDashboard

<details>
<summary>Issues (936)</summary>

- [P3] Duplicate block (d60104) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:13)
- [P3] Duplicate block (b2eefb) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:14)
- [P3] Duplicate block (d4bea3) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:20)
- [P3] Duplicate block (03673e) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:520)
- [P3] Duplicate block (9d1b4c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:13)
- [P3] Duplicate block (0de280) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:20)
- [P3] Duplicate block (2348a2) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:21)
- [P3] Duplicate block (136408) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:22)
- [P3] Duplicate block (d5989d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:23)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:24)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:52)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:291)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:25)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:53)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:292)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:26)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:54)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:293)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:27)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:55)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:294)
- [P3] Duplicate block (8437d2) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:28)
- [P3] Duplicate block (c590a1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:29)
- [P3] Duplicate block (b1e085) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:30)
- [P3] Duplicate block (4d6f85) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:31)
- [P3] Duplicate block (5e6c95) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:32)
- [P3] Duplicate block (e7a224) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:33)
- [P3] Duplicate block (b57a60) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:34)
- [P3] Duplicate block (3dc92b) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:37)
- [P3] Duplicate block (3dc92b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:35)
- [P3] Duplicate block (3dc92b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:33)
- [P3] Duplicate block (3dc92b) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:31)
- [P3] Duplicate block (6efa53) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:36)
- [P3] Duplicate block (731ffb) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:37)
- [P3] Duplicate block (5dc6ab) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:38)
- [P3] Duplicate block (69d1c4) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:39)
- [P3] Duplicate block (cf9f57) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:40)
- [P3] Duplicate block (86dfba) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:41)
- [P3] Duplicate block (89dac1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:42)
- [P3] Duplicate block (d7b30a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:43)
- [P3] Duplicate block (d0cb65) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:44)
- [P3] Duplicate block (980dca) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:45)
- [P3] Duplicate block (d96b2d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:46)
- [P3] Duplicate block (eedbe3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:47)
- [P3] Duplicate block (ba39e5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:48)
- [P3] Duplicate block (5b5aa5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:49)
- [P3] Duplicate block (5b5aa5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:288)
- [P3] Duplicate block (b45a97) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:50)
- [P3] Duplicate block (b45a97) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:289)
- [P3] Duplicate block (d08781) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:51)
- [P3] Duplicate block (d08781) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:290)
- [P3] Duplicate block (a9a459) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:56)
- [P3] Duplicate block (a9a459) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:295)
- [P3] Duplicate block (08c44e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:57)
- [P3] Duplicate block (c90094) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:58)
- [P3] Duplicate block (1ce630) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:59)
- [P3] Duplicate block (da66d7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:60)
- [P3] Duplicate block (a92caa) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:61)
- [P3] Duplicate block (80edc7) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:60)
- [P3] Duplicate block (80edc7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:62)
- [P3] Duplicate block (80edc7) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:58)
- [P3] Duplicate block (80edc7) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:54)
- [P3] Duplicate block (ac2616) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:61)
- [P3] Duplicate block (ac2616) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:63)
- [P3] Duplicate block (ac2616) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:59)
- [P3] Duplicate block (ac2616) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:55)
- [P3] Duplicate block (537519) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:62)
- [P3] Duplicate block (537519) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:64)
- [P3] Duplicate block (537519) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:60)
- [P3] Duplicate block (537519) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:56)
- [P3] Duplicate block (7b865a) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:63)
- [P3] Duplicate block (7b865a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:65)
- [P3] Duplicate block (7b865a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:61)
- [P3] Duplicate block (7b865a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:57)
- [P3] Duplicate block (777792) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:64)
- [P3] Duplicate block (777792) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:66)
- [P3] Duplicate block (777792) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:62)
- [P3] Duplicate block (777792) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:58)
- [P3] Duplicate block (3d82e7) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:65)
- [P3] Duplicate block (3d82e7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:67)
- [P3] Duplicate block (3d82e7) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:63)
- [P3] Duplicate block (3d82e7) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:59)
- [P3] Duplicate block (d611c2) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:68)
- [P3] Duplicate block (46f209) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:69)
- [P3] Duplicate block (25667a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:70)
- [P3] Duplicate block (e7683c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:71)
- [P3] Duplicate block (1d9735) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:72)
- [P3] Duplicate block (b67dbc) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:73)
- [P3] Duplicate block (d3db2f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:74)
- [P3] Duplicate block (602066) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:75)
- [P3] Duplicate block (f7f0e8) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:76)
- [P3] Duplicate block (4fb605) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:77)
- [P3] Duplicate block (807393) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:78)
- [P3] Duplicate block (0e88aa) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:79)
- [P3] Duplicate block (9ef583) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:80)
- [P3] Duplicate block (343fd7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:81)
- [P3] Duplicate block (77e923) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:82)
- [P3] Duplicate block (06e788) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:83)
- [P3] Duplicate block (615eb7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:95)
- [P3] Duplicate block (2c8c55) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:96)
- [P3] Duplicate block (02d311) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:97)
- [P3] Duplicate block (1fab64) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:98)
- [P3] Duplicate block (8de335) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:99)
- [P3] Duplicate block (d7e113) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:100)
- [P3] Duplicate block (1e5f1c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:101)
- [P3] Duplicate block (675920) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:102)
- [P3] Duplicate block (e1d8f4) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:103)
- [P3] Duplicate block (dffdde) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:104)
- [P3] Duplicate block (ac03d8) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:105)
- [P3] Duplicate block (f85cf6) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:106)
- [P3] Duplicate block (f0b6d2) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:107)
- [P3] Duplicate block (1dbee2) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:108)
- [P3] Duplicate block (2c27fd) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:109)
- [P3] Duplicate block (9d97fe) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:110)
- [P3] Duplicate block (91b75f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:111)
- [P3] Duplicate block (982231) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:112)
- [P3] Duplicate block (9cfaef) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:108)
- [P3] Duplicate block (9cfaef) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:124)
- [P3] Duplicate block (9cfaef) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:102)
- [P3] Duplicate block (9cfaef) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:98)
- [P3] Duplicate block (925aa2) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:109)
- [P3] Duplicate block (925aa2) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:125)
- [P3] Duplicate block (925aa2) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:103)
- [P3] Duplicate block (925aa2) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:99)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:110)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:126)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:104)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:100)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:111)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:136)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:127)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:105)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:101)
- [P3] Duplicate block (0f78cf) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:112)
- [P3] Duplicate block (0f78cf) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:137)
- [P3] Duplicate block (0f78cf) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:128)
- [P3] Duplicate block (0f78cf) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:106)
- [P3] Duplicate block (77659d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:138)
- [P3] Duplicate block (9e54d1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:139)
- [P3] Duplicate block (d502b0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:140)
- [P3] Duplicate block (ee5b0d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:134)
- [P3] Duplicate block (ee5b0d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:147)
- [P3] Duplicate block (c27cfc) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:135)
- [P3] Duplicate block (c27cfc) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:148)
- [P3] Duplicate block (e6b6da) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:136)
- [P3] Duplicate block (e6b6da) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:149)
- [P3] Duplicate block (c3073f) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:137)
- [P3] Duplicate block (c3073f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:150)
- [P3] Duplicate block (af500a) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:138)
- [P3] Duplicate block (af500a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:151)
- [P3] Duplicate block (e9cbfd) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:139)
- [P3] Duplicate block (e9cbfd) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:152)
- [P3] Duplicate block (863a51) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:140)
- [P3] Duplicate block (863a51) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:153)
- [P3] Duplicate block (0ef942) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:141)
- [P3] Duplicate block (0ef942) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:154)
- [P3] Duplicate block (0e3614) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:142)
- [P3] Duplicate block (0e3614) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:155)
- [P3] Duplicate block (c1e18d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:143)
- [P3] Duplicate block (c1e18d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:156)
- [P3] Duplicate block (b0b05e) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:144)
- [P3] Duplicate block (b0b05e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:157)
- [P3] Duplicate block (543c53) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:145)
- [P3] Duplicate block (543c53) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:158)
- [P3] Duplicate block (5c9c0b) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:209)
- [P3] Duplicate block (5c9c0b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:165)
- [P3] Duplicate block (5c9c0b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:264)
- [P3] Duplicate block (5c9c0b) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:203)
- [P3] Duplicate block (9bab8a) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:210)
- [P3] Duplicate block (9bab8a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:166)
- [P3] Duplicate block (9bab8a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:265)
- [P3] Duplicate block (9bab8a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:204)
- [P3] Duplicate block (f6c4b6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:211)
- [P3] Duplicate block (f6c4b6) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:167)
- [P3] Duplicate block (f6c4b6) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:266)
- [P3] Duplicate block (f6c4b6) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:205)
- [P3] Duplicate block (b42ca0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:212)
- [P3] Duplicate block (b42ca0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:168)
- [P3] Duplicate block (b42ca0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:267)
- [P3] Duplicate block (b42ca0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:206)
- [P3] Duplicate block (2eee84) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:213)
- [P3] Duplicate block (2eee84) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:169)
- [P3] Duplicate block (80eef1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:214)
- [P3] Duplicate block (80eef1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:170)
- [P3] Duplicate block (43cff7) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:171)
- [P3] Duplicate block (cb2521) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:172)
- [P3] Duplicate block (cb2521) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:212)
- [P3] Duplicate block (950f39) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:179)
- [P3] Duplicate block (e2ca6f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:180)
- [P3] Duplicate block (826982) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:181)
- [P3] Duplicate block (d91c40) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:182)
- [P3] Duplicate block (9abfda) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:183)
- [P3] Duplicate block (57a429) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:175)
- [P3] Duplicate block (57a429) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:184)
- [P3] Duplicate block (57a429) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:211)
- [P3] Duplicate block (5f93d1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:176)
- [P3] Duplicate block (5f93d1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:185)
- [P3] Duplicate block (5f93d1) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:212)
- [P3] Duplicate block (18d5e6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:177)
- [P3] Duplicate block (18d5e6) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:186)
- [P3] Duplicate block (18d5e6) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:213)
- [P3] Duplicate block (3171a9) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:178)
- [P3] Duplicate block (3171a9) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:187)
- [P3] Duplicate block (3171a9) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:214)
- [P3] Duplicate block (3171a9) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:193)
- [P3] Duplicate block (53a4ee) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:179)
- [P3] Duplicate block (53a4ee) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:188)
- [P3] Duplicate block (53a4ee) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:215)
- [P3] Duplicate block (53a4ee) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:194)
- [P3] Duplicate block (048906) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:180)
- [P3] Duplicate block (048906) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:189)
- [P3] Duplicate block (1d511d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:181)
- [P3] Duplicate block (1d511d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:190)
- [P3] Duplicate block (57e94f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:191)
- [P3] Duplicate block (8bb128) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:192)
- [P3] Duplicate block (b0eb8f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:193)
- [P3] Duplicate block (730417) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:194)
- [P3] Duplicate block (5c7a70) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:195)
- [P3] Duplicate block (d2d4d5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:196)
- [P3] Duplicate block (422c18) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:197)
- [P3] Duplicate block (dceefe) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:198)
- [P3] Duplicate block (217c60) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:199)
- [P3] Duplicate block (e6e89a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:210)
- [P3] Duplicate block (f306e1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:211)
- [P3] Duplicate block (51e609) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:223)
- [P3] Duplicate block (3cae16) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:224)
- [P3] Duplicate block (3cae16) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:410)
- [P3] Duplicate block (3cae16) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:437)
- [P3] Duplicate block (dbb73f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:231)
- [P3] Duplicate block (f87578) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:232)
- [P3] Duplicate block (e056ab) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:233)
- [P3] Duplicate block (4fc9b9) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:240)
- [P3] Duplicate block (b2fe06) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:247)
- [P3] Duplicate block (f94c2f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:248)
- [P3] Duplicate block (d69daf) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:249)
- [P3] Duplicate block (86ad58) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:250)
- [P3] Duplicate block (d952b0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:251)
- [P3] Duplicate block (3c3c79) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:252)
- [P3] Duplicate block (404b9f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:253)
- [P3] Duplicate block (61cf85) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:254)
- [P3] Duplicate block (7c633e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:255)
- [P3] Duplicate block (39cbad) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:256)
- [P3] Duplicate block (678c10) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:257)
- [P3] Duplicate block (705dd8) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:258)
- [P3] Duplicate block (36f37b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:259)
- [P3] Duplicate block (44d02d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:260)
- [P3] Duplicate block (92f54d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:261)
- [P3] Duplicate block (f262b5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:262)
- [P3] Duplicate block (923015) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:263)
- [P3] Duplicate block (404c60) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:264)
- [P3] Duplicate block (b8b891) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:265)
- [P3] Duplicate block (a8a158) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:266)
- [P3] Duplicate block (ab736c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:267)
- [P3] Duplicate block (798202) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:268)
- [P3] Duplicate block (1ca2be) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:269)
- [P3] Duplicate block (92b5bc) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:270)
- [P3] Duplicate block (0ffbbe) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:271)
- [P3] Duplicate block (19d3dd) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:272)
- [P3] Duplicate block (9c8b28) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:273)
- [P3] Duplicate block (b2beb1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:274)
- [P3] Duplicate block (a4a8d6) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:281)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:437)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:218)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:282)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:272)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:211)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:438)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:219)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:283)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:273)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:212)
- [P3] Duplicate block (75ad37) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:284)
- [P3] Duplicate block (f7d34a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:285)
- [P3] Duplicate block (4ac9f3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:286)
- [P3] Duplicate block (ab7e2f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:287)
- [P3] Duplicate block (6c7144) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:296)
- [P3] Duplicate block (90039b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:297)
- [P3] Duplicate block (0c3550) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:298)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:449)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:237)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:305)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:293)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:230)
- [P3] Duplicate block (f136ae) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:312)
- [P3] Duplicate block (6d9fb0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:325)
- [P3] Duplicate block (595def) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:326)
- [P3] Duplicate block (63f9b5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:327)
- [P3] Duplicate block (847c2b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:328)
- [P3] Duplicate block (a3003c) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:329)
- [P3] Duplicate block (c783ec) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:330)
- [P3] Duplicate block (50cdb5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:331)
- [P3] Duplicate block (d7c3ad) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:332)
- [P3] Duplicate block (c002d8) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:333)
- [P3] Duplicate block (265dd1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:334)
- [P3] Duplicate block (d7c4a3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:335)
- [P3] Duplicate block (cd5c6b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:336)
- [P3] Duplicate block (6c7a49) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:337)
- [P3] Duplicate block (b3c67e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:345)
- [P3] Duplicate block (753c5d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:346)
- [P3] Duplicate block (47a8fe) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:347)
- [P3] Duplicate block (219283) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:348)
- [P3] Duplicate block (5780fe) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:349)
- [P3] Duplicate block (875875) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:350)
- [P3] Duplicate block (158441) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:351)
- [P3] Duplicate block (627f22) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:352)
- [P3] Duplicate block (d4ce6f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:353)
- [P3] Duplicate block (d8488e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:354)
- [P3] Duplicate block (d294e1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:355)
- [P3] Duplicate block (783a4d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:356)
- [P3] Duplicate block (2723fd) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:357)
- [P3] Duplicate block (2fb58e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:358)
- [P3] Duplicate block (63fa67) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:359)
- [P3] Duplicate block (327cc6) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:360)
- [P3] Duplicate block (d45202) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:361)
- [P3] Duplicate block (d39abd) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:362)
- [P3] Duplicate block (a71c86) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:363)
- [P3] Duplicate block (8583f3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:364)
- [P3] Duplicate block (55821b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:365)
- [P3] Duplicate block (ad810d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:366)
- [P3] Duplicate block (ad810d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:357)
- [P3] Duplicate block (ad810d) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:286)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:367)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:358)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:287)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:206)
- [P3] Duplicate block (1e6cf0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:368)
- [P3] Duplicate block (1e6cf0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:359)
- [P3] Duplicate block (1e6cf0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:288)
- [P3] Duplicate block (9a8671) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:369)
- [P3] Duplicate block (9a8671) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:360)
- [P3] Duplicate block (9a8671) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:289)
- [P3] Duplicate block (a1258a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:370)
- [P3] Duplicate block (a1258a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:361)
- [P3] Duplicate block (a1258a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:290)
- [P3] Duplicate block (7e1a34) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:371)
- [P3] Duplicate block (7e1a34) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:362)
- [P3] Duplicate block (7e1a34) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:291)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:324)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:377)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:518)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:368)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:297)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:217)
- [P3] Duplicate block (989fe8) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:606)
- [P3] Duplicate block (8f4dce) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:607)
- [P3] Duplicate block (d6e531) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:18)
- [P3] Duplicate block (2aba1e) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:19)
- [P3] Duplicate block (79ba0d) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:56)
- [P3] Duplicate block (d6b40c) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:57)
- [P3] Duplicate block (a20218) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:58)
- [P3] Duplicate block (3245f9) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:59)
- [P3] Duplicate block (6e58f2) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:60)
- [P3] Duplicate block (281bc0) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:61)
- [P3] Duplicate block (9d69b5) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:62)
- [P3] Duplicate block (1aada4) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:63)
- [P3] Duplicate block (c6b8e2) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:64)
- [P3] Duplicate block (1deef0) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:65)
- [P3] Duplicate block (f6a299) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:66)
- [P3] Duplicate block (467d1a) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:67)
- [P3] Duplicate block (27c7cd) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:68)
- [P3] Duplicate block (46b3e7) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:69)
- [P3] Duplicate block (366173) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:70)
- [P3] Duplicate block (9ee474) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:71)
- [P3] Duplicate block (58aab4) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:72)
- [P3] Duplicate block (94ff0d) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:73)
- [P3] Duplicate block (9463a8) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:74)
- [P3] Duplicate block (ab1c09) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:174)
- [P3] Duplicate block (91cda0) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:453)
- [P3] Duplicate block (7aafec) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:161)
- [P3] Duplicate block (b45776) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:636)
- [P3] Duplicate block (11030c) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:637)
- [P3] Duplicate block (c4a41a) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:638)
- [P3] Duplicate block (cd4952) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:639)
- [P3] Duplicate block (8e687b) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:640)
- [P3] Duplicate block (cc449c) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:641)
- [P3] Duplicate block (01ff28) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:642)
- [P3] Duplicate block (453519) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:643)
- [P3] Duplicate block (a63f9d) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:651)
- [P3] Duplicate block (a2ebb7) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:652)
- [P3] Duplicate block (83bbf0) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:653)
- [P3] Duplicate block (27e21a) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:654)
- [P3] Duplicate block (df0335) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:655)
- [P3] Duplicate block (342dda) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:656)
- [P3] Duplicate block (7ec01f) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:657)
- [P3] Duplicate block (0908c8) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:658)
- [P3] Duplicate block (8328e4) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:659)
- [P3] Duplicate block (aea0fe) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:660)
- [P3] Duplicate block (293aba) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:661)
- [P3] Duplicate block (2b0616) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:662)
- [P3] Duplicate block (cb93c2) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:663)
- [P3] Duplicate block (4e1378) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:664)
- [P3] Duplicate block (923cff) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:665)
- [P3] Duplicate block (ebf8a8) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:666)
- [P3] Duplicate block (8ea874) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:667)
- [P3] Duplicate block (f040f7) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:668)
- [P3] Duplicate block (9af2ea) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:683)
- [P3] Duplicate block (e28cd6) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:684)
- [P3] Duplicate block (5747d4) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:685)
- [P3] Duplicate block (b0c78e) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:686)
- [P3] Duplicate block (974b48) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:715)
- [P3] Duplicate block (84671b) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:716)
- [P3] Duplicate block (a0c3a4) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:717)
- [P3] Duplicate block (762044) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:718)
- [P3] Duplicate block (21aff3) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:719)
- [P3] Duplicate block (65345d) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:720)
- [P3] Duplicate block (7eb32e) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:721)
- [P3] Duplicate block (92ad3d) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:722)
- [P3] Duplicate block (9d4354) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:723)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:323)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:376)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:517)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:367)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:296)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:216)
- [P3] Duplicate block (f46a92) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:156)
- [P3] Duplicate block (690d53) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:10)
- [P3] Duplicate block (c2c9d4) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:19)
- [P3] Duplicate block (6e1437) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:30)
- [P3] Duplicate block (69f05c) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:31)
- [P3] Duplicate block (adc431) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:32)
- [P3] Duplicate block (66ff1f) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:33)
- [P3] Duplicate block (341917) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:34)
- [P3] Duplicate block (422cbd) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:35)
- [P3] Duplicate block (38d25d) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:36)
- [P3] Duplicate block (10a3eb) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:37)
- [P3] Duplicate block (7de535) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:38)
- [P3] Duplicate block (9512e0) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:45)
- [P3] Duplicate block (0417a9) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:46)
- [P3] Duplicate block (8c3a32) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:47)
- [P3] Duplicate block (702362) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:48)
- [P3] Duplicate block (1d427e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:49)
- [P3] Duplicate block (f5e900) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:50)
- [P3] Duplicate block (2b546e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:51)
- [P3] Duplicate block (ca8f93) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:52)
- [P3] Duplicate block (c42fb2) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:53)
- [P3] Duplicate block (c7dd82) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:54)
- [P3] Duplicate block (ff084b) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:55)
- [P3] Duplicate block (639ab1) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:56)
- [P3] Duplicate block (41b463) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:57)
- [P3] Duplicate block (4ea8be) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:58)
- [P3] Duplicate block (83e321) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:59)
- [P3] Duplicate block (97579c) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:60)
- [P3] Duplicate block (0638b0) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:61)
- [P3] Duplicate block (a74163) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:62)
- [P3] Duplicate block (f4970e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:63)
- [P3] Duplicate block (25d0f8) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:64)
- [P3] Duplicate block (9aa804) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:65)
- [P3] Duplicate block (d8cf27) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:66)
- [P3] Duplicate block (eef03e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:67)
- [P3] Duplicate block (89d377) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:68)
- [P3] Duplicate block (84d4a0) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:102)
- [P3] Duplicate block (95872e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:103)
- [P3] Duplicate block (953603) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:104)
- [P3] Duplicate block (7f7621) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:111)
- [P3] Duplicate block (d8a19b) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:112)
- [P3] Duplicate block (ebc118) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:113)
- [P3] Duplicate block (26cd49) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:114)
- [P3] Duplicate block (70dc86) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:115)
- [P3] Duplicate block (28f92e) (/home/user/my-portfolio/src/pages/AdminDashboard/index.tsx:123)
- [P3] Duplicate block (8e0490) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:412)
- [P3] Duplicate block (e3b2b0) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:413)
- [P3] Duplicate block (b9f3b1) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:21)
- [P3] Duplicate block (b9f3b1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:32)
- [P3] Duplicate block (770fca) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:49)
- [P3] Duplicate block (770fca) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:109)
- [P3] Duplicate block (f18876) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:50)
- [P3] Duplicate block (f18876) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:110)
- [P3] Duplicate block (369eb0) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:203)
- [P3] Duplicate block (369eb0) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:224)
- [P3] Duplicate block (992fc6) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:204)
- [P3] Duplicate block (992fc6) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:225)
- [P3] Duplicate block (22e415) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:205)
- [P3] Duplicate block (22e415) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:226)
- [P3] Duplicate block (55fe5a) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:206)
- [P3] Duplicate block (55fe5a) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:227)
- [P3] Duplicate block (586220) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:267)
- [P3] Duplicate block (586220) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:387)
- [P3] Duplicate block (3d2a2d) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:268)
- [P3] Duplicate block (3d2a2d) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:388)
- [P3] Duplicate block (7d7769) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:269)
- [P3] Duplicate block (7d7769) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:389)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:270)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:98)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:122)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:114)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:92)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:88)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:271)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:99)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:123)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:115)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:93)
- [P3] Duplicate block (ae4232) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:89)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:272)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:100)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:124)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:116)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:94)
- [P3] Duplicate block (41c75e) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:90)
- [P3] Duplicate block (855605) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:297)
- [P3] Duplicate block (855605) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:466)
- [P3] Duplicate block (5904cb) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:298)
- [P3] Duplicate block (5904cb) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:467)
- [P3] Duplicate block (d2ca53) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:299)
- [P3] Duplicate block (d2ca53) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:468)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:300)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:469)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:123)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:255)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:139)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:311)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:117)
- [P3] Duplicate block (35e683) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:248)
- [P3] Duplicate block (4ed2fa) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:301)
- [P3] Duplicate block (4ed2fa) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:124)
- [P3] Duplicate block (4ed2fa) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:140)
- [P3] Duplicate block (4ed2fa) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:118)
- [P3] Duplicate block (187d04) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:302)
- [P3] Duplicate block (187d04) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:119)
- [P3] Duplicate block (43985f) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:364)
- [P3] Duplicate block (43985f) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:157)
- [P3] Duplicate block (92eb05) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:365)
- [P3] Duplicate block (92eb05) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:158)
- [P3] Duplicate block (aa79e3) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:366)
- [P3] Duplicate block (aa79e3) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:159)
- [P3] Duplicate block (314e66) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:444)
- [P3] Duplicate block (314e66) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:378)
- [P3] Duplicate block (314e66) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:472)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:445)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:233)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:301)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:379)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:473)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:503)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:289)
- [P3] Duplicate block (28c148) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:226)
- [P3] Duplicate block (4ec9c5) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:446)
- [P3] Duplicate block (4ec9c5) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:234)
- [P3] Duplicate block (4ec9c5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:302)
- [P3] Duplicate block (4ec9c5) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:290)
- [P3] Duplicate block (4ec9c5) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:227)
- [P3] Duplicate block (16f84b) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:447)
- [P3] Duplicate block (16f84b) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:235)
- [P3] Duplicate block (16f84b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:303)
- [P3] Duplicate block (16f84b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:291)
- [P3] Duplicate block (16f84b) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:228)
- [P3] Duplicate block (02be43) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:448)
- [P3] Duplicate block (02be43) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:236)
- [P3] Duplicate block (02be43) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:304)
- [P3] Duplicate block (02be43) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:292)
- [P3] Duplicate block (02be43) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:229)
- [P3] Duplicate block (9990d0) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:456)
- [P3] Duplicate block (9990d0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:244)
- [P3] Duplicate block (9990d0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:300)
- [P3] Duplicate block (9990d0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:237)
- [P3] Duplicate block (f2d631) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:470)
- [P3] Duplicate block (f2d631) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:256)
- [P3] Duplicate block (f2d631) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:312)
- [P3] Duplicate block (f2d631) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:249)
- [P3] Duplicate block (602ca1) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:471)
- [P3] Duplicate block (602ca1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:257)
- [P3] Duplicate block (602ca1) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:313)
- [P3] Duplicate block (602ca1) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:250)
- [P3] Duplicate block (a8ee1c) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:472)
- [P3] Duplicate block (a8ee1c) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:258)
- [P3] Duplicate block (a8ee1c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:314)
- [P3] Duplicate block (a8ee1c) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:251)
- [P3] Duplicate block (03841d) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:473)
- [P3] Duplicate block (03841d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:259)
- [P3] Duplicate block (03841d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:315)
- [P3] Duplicate block (03841d) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:252)
- [P3] Duplicate block (be04c3) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:474)
- [P3] Duplicate block (be04c3) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:260)
- [P3] Duplicate block (be04c3) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:316)
- [P3] Duplicate block (be04c3) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:253)
- [P3] Duplicate block (932ef1) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:506)
- [P3] Duplicate block (932ef1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:292)
- [P3] Duplicate block (8666d2) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:507)
- [P3] Duplicate block (8666d2) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:293)
- [P3] Duplicate block (9981e3) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:528)
- [P3] Duplicate block (9981e3) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:317)
- [P3] Duplicate block (b34fca) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:529)
- [P3] Duplicate block (b34fca) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:318)
- [P3] Duplicate block (b8fcc0) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:530)
- [P3] Duplicate block (b8fcc0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:319)
- [P3] Duplicate block (0fb59e) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:531)
- [P3] Duplicate block (0fb59e) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:320)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:532)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:321)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:374)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:365)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:294)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:214)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:533)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:322)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:375)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:366)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:295)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:215)
- [P3] Duplicate block (df6af6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:25)
- [P3] Duplicate block (df6af6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:54)
- [P3] Duplicate block (df6af6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:227)
- [P3] Duplicate block (4e4073) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:51)
- [P3] Duplicate block (4e4073) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:224)
- [P3] Duplicate block (7de571) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:52)
- [P3] Duplicate block (7de571) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:225)
- [P3] Duplicate block (7133f1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:53)
- [P3] Duplicate block (7133f1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:226)
- [P3] Duplicate block (d37487) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:58)
- [P3] Duplicate block (d37487) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:52)
- [P3] Duplicate block (2ddff5) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:59)
- [P3] Duplicate block (2ddff5) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:53)
- [P3] Duplicate block (aa55d2) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:90)
- [P3] Duplicate block (aa55d2) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:84)
- [P3] Duplicate block (184973) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:91)
- [P3] Duplicate block (184973) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:85)
- [P3] Duplicate block (097e69) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:92)
- [P3] Duplicate block (097e69) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:108)
- [P3] Duplicate block (097e69) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:86)
- [P3] Duplicate block (5373d7) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:93)
- [P3] Duplicate block (5373d7) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:109)
- [P3] Duplicate block (5373d7) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:87)
- [P3] Duplicate block (469861) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:94)
- [P3] Duplicate block (469861) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:110)
- [P3] Duplicate block (469861) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:88)
- [P3] Duplicate block (bed4d0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:95)
- [P3] Duplicate block (bed4d0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:111)
- [P3] Duplicate block (bed4d0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:89)
- [P3] Duplicate block (bed4d0) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:85)
- [P3] Duplicate block (090ae1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:96)
- [P3] Duplicate block (090ae1) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:112)
- [P3] Duplicate block (090ae1) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:90)
- [P3] Duplicate block (090ae1) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:86)
- [P3] Duplicate block (f36409) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:97)
- [P3] Duplicate block (f36409) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:113)
- [P3] Duplicate block (f36409) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:91)
- [P3] Duplicate block (f36409) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:87)
- [P3] Duplicate block (578c1a) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:107)
- [P3] Duplicate block (578c1a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:123)
- [P3] Duplicate block (578c1a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:101)
- [P3] Duplicate block (578c1a) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:97)
- [P3] Duplicate block (ade99e) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:113)
- [P3] Duplicate block (ade99e) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:129)
- [P3] Duplicate block (ade99e) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:107)
- [P3] Duplicate block (2c5fda) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:114)
- [P3] Duplicate block (2c5fda) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:130)
- [P3] Duplicate block (2c5fda) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:108)
- [P3] Duplicate block (8d1d99) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:115)
- [P3] Duplicate block (8d1d99) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:131)
- [P3] Duplicate block (8d1d99) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:109)
- [P3] Duplicate block (3ca31d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:116)
- [P3] Duplicate block (3ca31d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:132)
- [P3] Duplicate block (3ca31d) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:110)
- [P3] Duplicate block (a44fe6) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:117)
- [P3] Duplicate block (a44fe6) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:133)
- [P3] Duplicate block (a44fe6) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:111)
- [P3] Duplicate block (8d1eab) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:118)
- [P3] Duplicate block (8d1eab) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:134)
- [P3] Duplicate block (8d1eab) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:112)
- [P3] Duplicate block (8f7674) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:119)
- [P3] Duplicate block (8f7674) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:135)
- [P3] Duplicate block (8f7674) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:113)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:120)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:252)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:136)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:308)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:114)
- [P3] Duplicate block (f586d2) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:245)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:121)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:253)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:137)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:309)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:115)
- [P3] Duplicate block (f84751) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:246)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:122)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:254)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:138)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:310)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:116)
- [P3] Duplicate block (9d2547) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:247)
- [P3] Duplicate block (0da589) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:125)
- [P3] Duplicate block (0da589) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:141)
- [P3] Duplicate block (cb67c0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:126)
- [P3] Duplicate block (cb67c0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:142)
- [P3] Duplicate block (411680) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:127)
- [P3] Duplicate block (411680) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:143)
- [P3] Duplicate block (642c01) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:164)
- [P3] Duplicate block (642c01) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:173)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:165)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:174)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:345)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:439)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:201)
- [P3] Duplicate block (f3854d) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:179)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:166)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:175)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:346)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:440)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:202)
- [P3] Duplicate block (1f09d5) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:180)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:167)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:176)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:347)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:441)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:203)
- [P3] Duplicate block (8be7a0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:181)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:168)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:177)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:348)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:442)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:204)
- [P3] Duplicate block (d4be88) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:182)
- [P3] Duplicate block (e2227d) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:169)
- [P3] Duplicate block (e2227d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:205)
- [P3] Duplicate block (e2227d) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:183)
- [P3] Duplicate block (4d90e8) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:170)
- [P3] Duplicate block (4d90e8) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:206)
- [P3] Duplicate block (4d90e8) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:184)
- [P3] Duplicate block (4d4426) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:171)
- [P3] Duplicate block (4d4426) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:207)
- [P3] Duplicate block (4d4426) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:185)
- [P3] Duplicate block (66c76a) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:172)
- [P3] Duplicate block (66c76a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:208)
- [P3] Duplicate block (66c76a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:186)
- [P3] Duplicate block (826db1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:173)
- [P3] Duplicate block (826db1) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:209)
- [P3] Duplicate block (63d5e4) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:174)
- [P3] Duplicate block (63d5e4) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:210)
- [P3] Duplicate block (ab450b) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:203)
- [P3] Duplicate block (ab450b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:159)
- [P3] Duplicate block (ab450b) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:197)
- [P3] Duplicate block (7f4396) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:204)
- [P3] Duplicate block (7f4396) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:160)
- [P3] Duplicate block (7f4396) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:259)
- [P3] Duplicate block (7f4396) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:198)
- [P3] Duplicate block (e7dfe1) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:205)
- [P3] Duplicate block (e7dfe1) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:161)
- [P3] Duplicate block (e7dfe1) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:260)
- [P3] Duplicate block (e7dfe1) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:199)
- [P3] Duplicate block (c69c2b) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:206)
- [P3] Duplicate block (c69c2b) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:162)
- [P3] Duplicate block (c69c2b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:261)
- [P3] Duplicate block (c69c2b) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:200)
- [P3] Duplicate block (6b4ce8) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:207)
- [P3] Duplicate block (6b4ce8) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:163)
- [P3] Duplicate block (6b4ce8) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:262)
- [P3] Duplicate block (6b4ce8) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:201)
- [P3] Duplicate block (d1ec30) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:208)
- [P3] Duplicate block (d1ec30) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:164)
- [P3] Duplicate block (d1ec30) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:263)
- [P3] Duplicate block (d1ec30) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:202)
- [P3] Duplicate block (1e2f63) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:231)
- [P3] Duplicate block (1e2f63) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:224)
- [P3] Duplicate block (5501c0) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:232)
- [P3] Duplicate block (5501c0) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:225)
- [P3] Duplicate block (d361ca) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:251)
- [P3] Duplicate block (d361ca) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:307)
- [P3] Duplicate block (d361ca) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:244)
- [P3] Duplicate block (425f98) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:113)
- [P3] Duplicate block (425f98) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:107)
- [P3] Duplicate block (59247a) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:372)
- [P3] Duplicate block (59247a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:363)
- [P3] Duplicate block (59247a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:292)
- [P3] Duplicate block (09287f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:373)
- [P3] Duplicate block (09287f) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:364)
- [P3] Duplicate block (09287f) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:293)
- [P3] Duplicate block (9a4f3f) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:378)
- [P3] Duplicate block (9a4f3f) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:218)
- [P3] Duplicate block (ab6235) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:43)
- [P3] Duplicate block (ab6235) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:135)
- [P3] Duplicate block (3184ab) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:60)
- [P3] Duplicate block (3184ab) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:80)
- [P3] Duplicate block (b12b26) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:61)
- [P3] Duplicate block (b12b26) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:81)
- [P3] Duplicate block (3478d6) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:147)
- [P3] Duplicate block (e1088e) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:281)
- [P3] Duplicate block (ebe276) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:304)
- [P3] Duplicate block (ebe276) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:400)
- [P3] Duplicate block (3595e9) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:305)
- [P3] Duplicate block (3595e9) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:401)
- [P3] Duplicate block (6183c2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:306)
- [P3] Duplicate block (6183c2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:402)
- [P3] Duplicate block (c92dc1) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:307)
- [P3] Duplicate block (c92dc1) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:403)
- [P3] Duplicate block (6aa500) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:308)
- [P3] Duplicate block (6aa500) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:404)
- [P3] Duplicate block (e49984) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:309)
- [P3] Duplicate block (e49984) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:405)
- [P3] Duplicate block (48efda) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:316)
- [P3] Duplicate block (48efda) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:411)
- [P3] Duplicate block (733eba) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:317)
- [P3] Duplicate block (733eba) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:412)
- [P3] Duplicate block (ecd060) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:318)
- [P3] Duplicate block (ecd060) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:413)
- [P3] Duplicate block (b514af) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:319)
- [P3] Duplicate block (b514af) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:414)
- [P3] Duplicate block (3d4421) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:320)
- [P3] Duplicate block (3d4421) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:415)
- [P3] Duplicate block (d4648e) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:321)
- [P3] Duplicate block (d4648e) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:416)
- [P3] Duplicate block (9d607d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:322)
- [P3] Duplicate block (9d607d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:417)
- [P3] Duplicate block (e3d299) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:323)
- [P3] Duplicate block (e3d299) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:418)
- [P3] Duplicate block (1b08af) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:324)
- [P3] Duplicate block (1b08af) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:419)
- [P3] Duplicate block (9a8ff6) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:325)
- [P3] Duplicate block (9a8ff6) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:420)
- [P3] Duplicate block (76c5b9) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:326)
- [P3] Duplicate block (76c5b9) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:421)
- [P3] Duplicate block (45fbf2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:327)
- [P3] Duplicate block (45fbf2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:422)
- [P3] Duplicate block (ff5ec3) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:328)
- [P3] Duplicate block (ff5ec3) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:423)
- [P3] Duplicate block (a0859d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:329)
- [P3] Duplicate block (a0859d) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:424)
- [P3] Duplicate block (cf4f1f) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:330)
- [P3] Duplicate block (cf4f1f) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:425)
- [P3] Duplicate block (2e3742) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:331)
- [P3] Duplicate block (2e3742) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:426)
- [P3] Duplicate block (984b1a) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:332)
- [P3] Duplicate block (984b1a) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:427)
- [P3] Duplicate block (4f53aa) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:333)
- [P3] Duplicate block (4f53aa) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:428)
- [P3] Duplicate block (5565e2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:334)
- [P3] Duplicate block (5565e2) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:429)
- [P3] Duplicate block (ef6af0) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:335)
- [P3] Duplicate block (ef6af0) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:430)
- [P3] Duplicate block (815f4c) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:336)
- [P3] Duplicate block (815f4c) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:431)
- [P3] Duplicate block (621605) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:337)
- [P3] Duplicate block (621605) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:432)
- [P3] Duplicate block (854da4) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:344)
- [P3] Duplicate block (854da4) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:438)
- [P3] Duplicate block (4457b4) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:349)
- [P3] Duplicate block (4457b4) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:443)
- [P3] Duplicate block (411b00) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:350)
- [P3] Duplicate block (411b00) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:444)
- [P3] Duplicate block (c2f64f) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:357)
- [P3] Duplicate block (c2f64f) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:450)
- [P3] Duplicate block (6d8336) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:370)
- [P3] Duplicate block (6d8336) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:463)
- [P3] Duplicate block (2f1bf5) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:371)
- [P3] Duplicate block (2f1bf5) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:464)
- [P3] Duplicate block (1039f7) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:389)
- [P3] Duplicate block (1039f7) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:483)
- [P3] Duplicate block (c7e485) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:516)
- [P3] Duplicate block (6d9fce) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:24)
- [P3] Duplicate block (6d9fce) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:50)
- [P3] Duplicate block (6d9fce) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:281)
- [P3] Duplicate block (1f176c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:25)
- [P3] Duplicate block (1f176c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:51)
- [P3] Duplicate block (1f176c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:282)
- [P3] Duplicate block (021d4c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:47)
- [P3] Duplicate block (021d4c) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:278)
- [P3] Duplicate block (6d416d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:48)
- [P3] Duplicate block (6d416d) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:279)
- [P3] Duplicate block (a9988b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:49)
- [P3] Duplicate block (a9988b) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:280)
- [P3] Duplicate block (4ad2d9) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:52)
- [P3] Duplicate block (4ad2d9) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:283)
- [P3] Duplicate block (8d39a7) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:200)
- [P3] Duplicate block (8d39a7) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:178)
- [P3] Duplicate block (2083e5) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:216)
- [P3] Duplicate block (2083e5) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:195)
- [P3] Duplicate block (690388) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:217)
- [P3] Duplicate block (690388) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:196)
- [P3] Duplicate block (01014e) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:268)
- [P3] Duplicate block (01014e) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:207)
- [P3] Duplicate block (0ffb0a) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:269)
- [P3] Duplicate block (0ffb0a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:208)
- [P3] Duplicate block (5d2c39) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:270)
- [P3] Duplicate block (5d2c39) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:209)
- [P3] Duplicate block (337c66) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:271)
- [P3] Duplicate block (337c66) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:210)
- [P3] Duplicate block (0eb776) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:24)
- [P3] Duplicate block (0eb776) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:48)
- [P3] Duplicate block (0eb776) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:220)
- [P3] Duplicate block (671028) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:45)
- [P3] Duplicate block (671028) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:217)
- [P3] Duplicate block (211255) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:46)
- [P3] Duplicate block (211255) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:218)
- [P3] Duplicate block (b16e9a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:47)
- [P3] Duplicate block (b16e9a) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:219)
- [P3] Duplicate block (e30ea9) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:274)
- [P3] Duplicate block (e30ea9) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:332)
- [P3] Duplicate block (cb7fcf) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:306)
- [P3] Duplicate block (cb7fcf) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:365)
- [P3] Duplicate block (250320) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:307)
- [P3] Duplicate block (250320) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:366)
- [P3] Duplicate block (068018) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:308)
- [P3] Duplicate block (068018) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:321)
- [P3] Duplicate block (068018) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:367)
- [P3] Duplicate block (068018) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:380)
- [P3] Duplicate block (e2748e) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:317)
- [P3] Duplicate block (e2748e) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:376)
- [P3] Duplicate block (217763) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:318)
- [P3] Duplicate block (217763) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:377)
- [P3] Duplicate block (5c8b21) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:319)
- [P3] Duplicate block (5c8b21) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:378)
- [P3] Duplicate block (e03181) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:320)
- [P3] Duplicate block (e03181) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:379)
- [P3] Duplicate block (f638ae) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:464)
- [P3] Duplicate block (f638ae) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:519)
- [P3] Duplicate block (33c80f) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:471)
- [P3] Duplicate block (33c80f) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:526)
- [P3] Duplicate block (577f42) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:472)
- [P3] Duplicate block (577f42) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:527)
- [P3] Duplicate block (493a60) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:489)
- [P3] Duplicate block (493a60) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:549)
- [P3] Duplicate block (3da528) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:552)
- [P3] Duplicate block (8473f3) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:553)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.test.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:1)
- [P2] High complexity (21) (/home/user/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P3] High coupling (38 imports) (/home/user/my-portfolio/src/pages/AdminDashboard/index.tsx:1)
- [P2] High complexity (77) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:1)
- [P3] High coupling (17 imports) (/home/user/my-portfolio/src/pages/AdminDashboard/TranslationManager.tsx:1)
- [P2] High complexity (73) (/home/user/my-portfolio/src/pages/AdminDashboard/TechnologyAdmin.tsx:1)
- [P3] High complexity (17) (/home/user/my-portfolio/src/pages/AdminDashboard/SkillsAdmin.tsx:1)
- [P3] High complexity (30) (/home/user/my-portfolio/src/pages/AdminDashboard/ProjectAdmin.tsx:1)
- [P3] High complexity (23) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:1)
- [P3] High coupling (14 imports) (/home/user/my-portfolio/src/pages/AdminDashboard/FeatureFlagAdmin.tsx:1)
- [P3] High complexity (26) (/home/user/my-portfolio/src/pages/AdminDashboard/ExperienceAdmin.tsx:1)
- [P3] High complexity (18) (/home/user/my-portfolio/src/pages/AdminDashboard/EducationAdmin.tsx:1)
- [P3] High complexity (13) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:1)
- [P3] High coupling (18 imports) (/home/user/my-portfolio/src/pages/AdminDashboard/BlogAdmin.tsx:1)
- [P2] High complexity (68) (/home/user/my-portfolio/src/pages/AdminDashboard/AboutContentAdmin.tsx:1)

</details>

### src/scripts

<details>
<summary>Issues (40)</summary>

- [P3] Duplicate block (877c33) (/home/user/my-portfolio/src/scripts/uploadPortrait.ts:29)
- [P3] Duplicate block (877c33) (/home/user/my-portfolio/src/scripts/uploadCV.ts:50)
- [P3] Duplicate block (aceb25) (/home/user/my-portfolio/src/scripts/uploadPortrait.ts:32)
- [P3] Duplicate block (d4bea3) (/home/user/my-portfolio/src/scripts/seedTranslations.ts:6)
- [P3] Duplicate block (d4bea3) (/home/user/my-portfolio/src/scripts/applyPhase1Migration.ts:21)
- [P3] Duplicate block (ab5d84) (/home/user/my-portfolio/src/scripts/seedProjects.ts:26)
- [P3] Duplicate block (ab5d84) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:31)
- [P3] Duplicate block (8c6ab5) (/home/user/my-portfolio/src/scripts/seedProjects.ts:27)
- [P3] Duplicate block (8c6ab5) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:32)
- [P3] Duplicate block (d36c47) (/home/user/my-portfolio/src/scripts/seedProjects.ts:28)
- [P3] Duplicate block (d36c47) (/home/user/my-portfolio/src/scripts/seedFeatureFlags.ts:70)
- [P3] Duplicate block (d36c47) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:33)
- [P3] Duplicate block (8e6081) (/home/user/my-portfolio/src/scripts/seedProjects.ts:47)
- [P3] Duplicate block (8e6081) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:52)
- [P3] Duplicate block (5dbb75) (/home/user/my-portfolio/src/scripts/seedProjects.ts:48)
- [P3] Duplicate block (5dbb75) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:53)
- [P3] Duplicate block (0ca3fb) (/home/user/my-portfolio/src/scripts/seedProjects.ts:57)
- [P3] Duplicate block (0ca3fb) (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:62)
- [P3] Unused export: exportTranslationsToJSON (/home/user/my-portfolio/src/scripts/seedTranslations.ts:219)
- [P3] Unused export: parseTranslationsFromJSON (/home/user/my-portfolio/src/scripts/seedTranslations.ts:224)
- [P3] Unused export: DashboardPage (/home/user/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:116)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/uploadPortrait.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/uploadCV.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedTranslations.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedSkills.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedProjects.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedFeatureFlags.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedExperiences.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedEducation.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/seedBlogPosts.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/normalizeBlogPosts.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/scripts/applyPhase1Migration.ts:1)
- [P3] High complexity (22) (/home/user/my-portfolio/src/scripts/seedTranslations.ts:1)
- [P2] High complexity (42) (/home/user/my-portfolio/src/scripts/seedCaseStudies.ts:1)
- [P3] High complexity (14) (/home/user/my-portfolio/src/scripts/normalizeBlogPosts.ts:1)
- [P3] High complexity (27) (/home/user/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] High coupling (13 imports) (/home/user/my-portfolio/src/scripts/migrateBlogPostsToTranslations.ts:1)
- [P3] High complexity (23) (/home/user/my-portfolio/src/scripts/applyPhase1Migration.ts:1)

</details>

### services/useImageUploadService.ts

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (aceb25) (/home/user/my-portfolio/src/lib/services/useImageUploadService.ts:30)
- [P3] Duplicate block (ecd45e) (/home/user/my-portfolio/src/lib/services/useImageUploadService.ts:40)
- [P3] Duplicate block (ecd45e) (/home/user/my-portfolio/src/lib/services/useImageUploadService.ts:59)
- [P3] Unused export: useImageUploadService (/home/user/my-portfolio/src/lib/services/useImageUploadService.ts:12)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/services/useImageUploadService.ts:1)

</details>

### src/pages/SettingsPage

<details>
<summary>Issues (137)</summary>

- [P3] Duplicate block (d4bea3) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:14)
- [P3] Duplicate block (d111ac) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:186)
- [P3] Duplicate block (410439) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:57)
- [P3] Duplicate block (410439) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:117)
- [P3] Duplicate block (8b84dd) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:58)
- [P3] Duplicate block (8b84dd) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:118)
- [P3] Duplicate block (72a322) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:59)
- [P3] Duplicate block (72a322) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:119)
- [P3] Duplicate block (60ac95) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:60)
- [P3] Duplicate block (60ac95) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:120)
- [P3] Duplicate block (5a5b48) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:61)
- [P3] Duplicate block (5a5b48) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:121)
- [P3] Duplicate block (974546) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:90)
- [P3] Duplicate block (974546) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:120)
- [P3] Duplicate block (33de98) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:91)
- [P3] Duplicate block (33de98) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:121)
- [P3] Duplicate block (517577) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:139)
- [P3] Duplicate block (517577) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:174)
- [P3] Duplicate block (0fc2b7) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:140)
- [P3] Duplicate block (0fc2b7) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:175)
- [P3] Duplicate block (667f4f) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:141)
- [P3] Duplicate block (667f4f) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:176)
- [P3] Duplicate block (1e002e) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:142)
- [P3] Duplicate block (1e002e) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:177)
- [P3] Duplicate block (a7a768) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:143)
- [P3] Duplicate block (a7a768) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:178)
- [P3] Duplicate block (8ae2d0) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:144)
- [P3] Duplicate block (8ae2d0) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:179)
- [P3] Duplicate block (d83a74) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:145)
- [P3] Duplicate block (d83a74) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:180)
- [P3] Duplicate block (788f6d) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:146)
- [P3] Duplicate block (788f6d) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:181)
- [P3] Duplicate block (8f70b0) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:147)
- [P3] Duplicate block (8f70b0) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:182)
- [P3] Duplicate block (7dec05) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:148)
- [P3] Duplicate block (7dec05) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:183)
- [P3] Duplicate block (3a4c00) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:149)
- [P3] Duplicate block (3a4c00) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:184)
- [P3] Duplicate block (dde2e1) (/home/user/my-portfolio/src/pages/SettingsPage/ValidationPanel.tsx:150)
- [P3] Duplicate block (dde2e1) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:185)
- [P3] Duplicate block (a03372) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:1)
- [P3] Duplicate block (a9e547) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:2)
- [P3] Duplicate block (357a9d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:3)
- [P3] Duplicate block (2ad076) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:4)
- [P3] Duplicate block (0f0364) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:5)
- [P3] Duplicate block (8de87e) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:6)
- [P3] Duplicate block (710efc) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:7)
- [P3] Duplicate block (563757) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:8)
- [P3] Duplicate block (63a364) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:9)
- [P3] Duplicate block (11469a) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:10)
- [P3] Duplicate block (d928c6) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:11)
- [P3] Duplicate block (2443ac) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:12)
- [P3] Duplicate block (9e3a13) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:13)
- [P3] Duplicate block (b67b9b) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:14)
- [P3] Duplicate block (c025bb) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:15)
- [P3] Duplicate block (483c1c) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:16)
- [P3] Duplicate block (a85578) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:17)
- [P3] Duplicate block (a485fe) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:18)
- [P3] Duplicate block (cc0dec) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:19)
- [P3] Duplicate block (1e375e) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:37)
- [P3] Duplicate block (6acd41) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:76)
- [P3] Duplicate block (985bbd) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:77)
- [P3] Duplicate block (989fe8) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:78)
- [P3] Duplicate block (8f4dce) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:79)
- [P3] Duplicate block (bd925b) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:80)
- [P3] Duplicate block (752099) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:81)
- [P3] Duplicate block (901c29) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:82)
- [P3] Duplicate block (8f82cc) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:83)
- [P3] Duplicate block (37b4d4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:84)
- [P3] Duplicate block (d6e531) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:12)
- [P3] Duplicate block (2aba1e) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:13)
- [P3] Duplicate block (79ba0d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:24)
- [P3] Duplicate block (d6b40c) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:25)
- [P3] Duplicate block (a20218) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:26)
- [P3] Duplicate block (3245f9) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:27)
- [P3] Duplicate block (6e58f2) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:28)
- [P3] Duplicate block (281bc0) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:29)
- [P3] Duplicate block (9d69b5) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:30)
- [P3] Duplicate block (1aada4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:31)
- [P3] Duplicate block (c6b8e2) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:32)
- [P3] Duplicate block (1deef0) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:33)
- [P3] Duplicate block (f6a299) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:34)
- [P3] Duplicate block (467d1a) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:35)
- [P3] Duplicate block (27c7cd) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:36)
- [P3] Duplicate block (46b3e7) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:37)
- [P3] Duplicate block (366173) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:38)
- [P3] Duplicate block (9ee474) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:39)
- [P3] Duplicate block (58aab4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:40)
- [P3] Duplicate block (94ff0d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:41)
- [P3] Duplicate block (9463a8) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:42)
- [P3] Duplicate block (ab1c09) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:53)
- [P3] Duplicate block (91cda0) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:104)
- [P3] Duplicate block (7aafec) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:105)
- [P3] Duplicate block (b45776) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:166)
- [P3] Duplicate block (11030c) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:167)
- [P3] Duplicate block (c4a41a) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:168)
- [P3] Duplicate block (cd4952) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:169)
- [P3] Duplicate block (8e687b) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:170)
- [P3] Duplicate block (cc449c) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:171)
- [P3] Duplicate block (01ff28) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:172)
- [P3] Duplicate block (453519) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:173)
- [P3] Duplicate block (a63f9d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:181)
- [P3] Duplicate block (a2ebb7) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:182)
- [P3] Duplicate block (83bbf0) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:183)
- [P3] Duplicate block (27e21a) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:184)
- [P3] Duplicate block (df0335) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:185)
- [P3] Duplicate block (342dda) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:186)
- [P3] Duplicate block (7ec01f) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:187)
- [P3] Duplicate block (0908c8) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:188)
- [P3] Duplicate block (8328e4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:189)
- [P3] Duplicate block (aea0fe) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:190)
- [P3] Duplicate block (293aba) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:191)
- [P3] Duplicate block (2b0616) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:192)
- [P3] Duplicate block (cb93c2) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:193)
- [P3] Duplicate block (4e1378) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:194)
- [P3] Duplicate block (923cff) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:195)
- [P3] Duplicate block (ebf8a8) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:196)
- [P3] Duplicate block (8ea874) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:197)
- [P3] Duplicate block (f040f7) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:198)
- [P3] Duplicate block (9af2ea) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:213)
- [P3] Duplicate block (e28cd6) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:214)
- [P3] Duplicate block (5747d4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:215)
- [P3] Duplicate block (b0c78e) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:216)
- [P3] Duplicate block (974b48) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:247)
- [P3] Duplicate block (84671b) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:248)
- [P3] Duplicate block (a0c3a4) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:249)
- [P3] Duplicate block (762044) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:250)
- [P3] Duplicate block (21aff3) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:251)
- [P3] Duplicate block (65345d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:252)
- [P3] Duplicate block (7eb32e) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:253)
- [P3] Duplicate block (92ad3d) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:254)
- [P3] Duplicate block (9d4354) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:255)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:256)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/SettingsPage/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/SettingsPage/TranslationTable.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/SettingsPage/TranslationManager.tsx:1)
- [P3] High complexity (14) (/home/user/my-portfolio/src/pages/SettingsPage/ImportExport.tsx:1)

</details>

### src/pages/WorkPage

<details>
<summary>Issues (273)</summary>

- [P3] Duplicate block (b1159a) (/home/user/my-portfolio/src/pages/WorkPage/projectsData.ts:2)
- [P3] Duplicate block (b1159a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:6)
- [P3] Duplicate block (c463ae) (/home/user/my-portfolio/src/pages/WorkPage/projectsData.ts:3)
- [P3] Duplicate block (c463ae) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:7)
- [P3] Duplicate block (040b2a) (/home/user/my-portfolio/src/pages/WorkPage/projectsData.ts:4)
- [P3] Duplicate block (040b2a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:8)
- [P3] Duplicate block (684958) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:28)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:29)
- [P3] Duplicate block (8074c5) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:42)
- [P3] Duplicate block (d4c787) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:30)
- [P3] Duplicate block (17c3e0) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:31)
- [P3] Duplicate block (6791eb) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:32)
- [P3] Duplicate block (fb926c) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:33)
- [P3] Duplicate block (895782) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:34)
- [P3] Duplicate block (188996) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:35)
- [P3] Duplicate block (024409) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:36)
- [P3] Duplicate block (1e24c6) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:37)
- [P3] Duplicate block (7973d5) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:38)
- [P3] Duplicate block (a03f09) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:39)
- [P3] Duplicate block (7dabba) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:40)
- [P3] Duplicate block (f5bb09) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:41)
- [P3] Duplicate block (c79360) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:43)
- [P3] Duplicate block (b692ad) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:44)
- [P3] Duplicate block (feda33) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:45)
- [P3] Duplicate block (cdebcd) (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:46)
- [P3] Duplicate block (a79f6f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:29)
- [P3] Duplicate block (9018c4) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:30)
- [P3] Duplicate block (03673e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectCard.tsx:44)
- [P3] Duplicate block (9d1b4c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:8)
- [P3] Duplicate block (0de280) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:14)
- [P3] Duplicate block (2348a2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:15)
- [P3] Duplicate block (136408) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:16)
- [P3] Duplicate block (d5989d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:17)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:18)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:46)
- [P3] Duplicate block (0eaa97) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:281)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:19)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:47)
- [P3] Duplicate block (477d9b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:282)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:20)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:48)
- [P3] Duplicate block (251d99) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:283)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:21)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:49)
- [P3] Duplicate block (b83801) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:284)
- [P3] Duplicate block (8437d2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:22)
- [P3] Duplicate block (c590a1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:23)
- [P3] Duplicate block (b1e085) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:24)
- [P3] Duplicate block (4d6f85) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:25)
- [P3] Duplicate block (5e6c95) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:26)
- [P3] Duplicate block (e7a224) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:27)
- [P3] Duplicate block (b57a60) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:28)
- [P3] Duplicate block (3dc92b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:29)
- [P3] Duplicate block (6efa53) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:30)
- [P3] Duplicate block (731ffb) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:31)
- [P3] Duplicate block (5dc6ab) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:32)
- [P3] Duplicate block (69d1c4) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:33)
- [P3] Duplicate block (cf9f57) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:34)
- [P3] Duplicate block (86dfba) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:35)
- [P3] Duplicate block (89dac1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:36)
- [P3] Duplicate block (d7b30a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:37)
- [P3] Duplicate block (d0cb65) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:38)
- [P3] Duplicate block (980dca) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:39)
- [P3] Duplicate block (d96b2d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:40)
- [P3] Duplicate block (eedbe3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:41)
- [P3] Duplicate block (ba39e5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:42)
- [P3] Duplicate block (5b5aa5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:43)
- [P3] Duplicate block (5b5aa5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:278)
- [P3] Duplicate block (b45a97) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:44)
- [P3] Duplicate block (b45a97) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:279)
- [P3] Duplicate block (d08781) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:45)
- [P3] Duplicate block (d08781) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:280)
- [P3] Duplicate block (a9a459) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:50)
- [P3] Duplicate block (a9a459) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:285)
- [P3] Duplicate block (08c44e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:51)
- [P3] Duplicate block (c90094) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:52)
- [P3] Duplicate block (1ce630) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:53)
- [P3] Duplicate block (da66d7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:54)
- [P3] Duplicate block (a92caa) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:55)
- [P3] Duplicate block (80edc7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:56)
- [P3] Duplicate block (ac2616) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:57)
- [P3] Duplicate block (537519) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:58)
- [P3] Duplicate block (7b865a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:59)
- [P3] Duplicate block (777792) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:60)
- [P3] Duplicate block (3d82e7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:61)
- [P3] Duplicate block (d611c2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:62)
- [P3] Duplicate block (46f209) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:63)
- [P3] Duplicate block (25667a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:64)
- [P3] Duplicate block (e7683c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:65)
- [P3] Duplicate block (1d9735) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:66)
- [P3] Duplicate block (b67dbc) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:67)
- [P3] Duplicate block (d3db2f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:68)
- [P3] Duplicate block (602066) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:69)
- [P3] Duplicate block (f7f0e8) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:70)
- [P3] Duplicate block (4fb605) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:71)
- [P3] Duplicate block (807393) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:72)
- [P3] Duplicate block (0e88aa) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:73)
- [P3] Duplicate block (9ef583) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:74)
- [P3] Duplicate block (343fd7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:75)
- [P3] Duplicate block (77e923) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:76)
- [P3] Duplicate block (06e788) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:77)
- [P3] Duplicate block (615eb7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:89)
- [P3] Duplicate block (2c8c55) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:90)
- [P3] Duplicate block (02d311) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:91)
- [P3] Duplicate block (1fab64) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:92)
- [P3] Duplicate block (8de335) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:93)
- [P3] Duplicate block (d7e113) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:94)
- [P3] Duplicate block (1e5f1c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:95)
- [P3] Duplicate block (675920) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:96)
- [P3] Duplicate block (e1d8f4) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:97)
- [P3] Duplicate block (dffdde) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:98)
- [P3] Duplicate block (ac03d8) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:99)
- [P3] Duplicate block (f85cf6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:100)
- [P3] Duplicate block (f0b6d2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:101)
- [P3] Duplicate block (1dbee2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:102)
- [P3] Duplicate block (2c27fd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:103)
- [P3] Duplicate block (9d97fe) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:104)
- [P3] Duplicate block (91b75f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:105)
- [P3] Duplicate block (982231) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:106)
- [P3] Duplicate block (9b6bda) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:111)
- [P3] Duplicate block (967a96) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:112)
- [P3] Duplicate block (c9f1bb) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:113)
- [P3] Duplicate block (d0054a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:114)
- [P3] Duplicate block (432331) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:115)
- [P3] Duplicate block (4196e6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:116)
- [P3] Duplicate block (9cfaef) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:123)
- [P3] Duplicate block (925aa2) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:124)
- [P3] Duplicate block (98c084) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:125)
- [P3] Duplicate block (d84948) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:126)
- [P3] Duplicate block (0f78cf) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:127)
- [P3] Duplicate block (77659d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:128)
- [P3] Duplicate block (9e54d1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:129)
- [P3] Duplicate block (d502b0) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:130)
- [P3] Duplicate block (ee5b0d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:137)
- [P3] Duplicate block (c27cfc) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:138)
- [P3] Duplicate block (e6b6da) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:139)
- [P3] Duplicate block (c3073f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:140)
- [P3] Duplicate block (af500a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:141)
- [P3] Duplicate block (e9cbfd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:142)
- [P3] Duplicate block (863a51) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:143)
- [P3] Duplicate block (0ef942) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:144)
- [P3] Duplicate block (0e3614) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:145)
- [P3] Duplicate block (c1e18d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:146)
- [P3] Duplicate block (b0b05e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:147)
- [P3] Duplicate block (543c53) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:148)
- [P3] Duplicate block (5c9c0b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:155)
- [P3] Duplicate block (9bab8a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:156)
- [P3] Duplicate block (f6c4b6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:157)
- [P3] Duplicate block (b42ca0) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:158)
- [P3] Duplicate block (2eee84) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:159)
- [P3] Duplicate block (80eef1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:160)
- [P3] Duplicate block (43cff7) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:161)
- [P3] Duplicate block (cb2521) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:162)
- [P3] Duplicate block (cb2521) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:202)
- [P3] Duplicate block (950f39) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:169)
- [P3] Duplicate block (e2ca6f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:170)
- [P3] Duplicate block (826982) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:171)
- [P3] Duplicate block (d91c40) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:172)
- [P3] Duplicate block (9abfda) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:173)
- [P3] Duplicate block (57a429) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:174)
- [P3] Duplicate block (5f93d1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:175)
- [P3] Duplicate block (18d5e6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:176)
- [P3] Duplicate block (3171a9) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:177)
- [P3] Duplicate block (53a4ee) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:178)
- [P3] Duplicate block (048906) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:179)
- [P3] Duplicate block (1d511d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:180)
- [P3] Duplicate block (57e94f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:181)
- [P3] Duplicate block (8bb128) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:182)
- [P3] Duplicate block (b0eb8f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:183)
- [P3] Duplicate block (730417) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:184)
- [P3] Duplicate block (5c7a70) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:185)
- [P3] Duplicate block (d2d4d5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:186)
- [P3] Duplicate block (422c18) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:187)
- [P3] Duplicate block (dceefe) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:188)
- [P3] Duplicate block (217c60) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:189)
- [P3] Duplicate block (e6e89a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:200)
- [P3] Duplicate block (f306e1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:201)
- [P3] Duplicate block (51e609) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:213)
- [P3] Duplicate block (3cae16) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:214)
- [P3] Duplicate block (dbb73f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:221)
- [P3] Duplicate block (f87578) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:222)
- [P3] Duplicate block (e056ab) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:223)
- [P3] Duplicate block (4fc9b9) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:230)
- [P3] Duplicate block (b2fe06) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:237)
- [P3] Duplicate block (f94c2f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:238)
- [P3] Duplicate block (d69daf) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:239)
- [P3] Duplicate block (86ad58) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:240)
- [P3] Duplicate block (d952b0) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:241)
- [P3] Duplicate block (3c3c79) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:242)
- [P3] Duplicate block (404b9f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:243)
- [P3] Duplicate block (61cf85) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:244)
- [P3] Duplicate block (7c633e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:245)
- [P3] Duplicate block (39cbad) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:246)
- [P3] Duplicate block (678c10) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:247)
- [P3] Duplicate block (705dd8) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:248)
- [P3] Duplicate block (36f37b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:249)
- [P3] Duplicate block (44d02d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:250)
- [P3] Duplicate block (92f54d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:251)
- [P3] Duplicate block (f262b5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:252)
- [P3] Duplicate block (923015) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:253)
- [P3] Duplicate block (404c60) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:254)
- [P3] Duplicate block (b8b891) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:255)
- [P3] Duplicate block (a8a158) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:256)
- [P3] Duplicate block (ab736c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:257)
- [P3] Duplicate block (798202) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:258)
- [P3] Duplicate block (1ca2be) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:259)
- [P3] Duplicate block (92b5bc) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:260)
- [P3] Duplicate block (0ffbbe) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:261)
- [P3] Duplicate block (19d3dd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:262)
- [P3] Duplicate block (9c8b28) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:263)
- [P3] Duplicate block (b2beb1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:264)
- [P3] Duplicate block (a4a8d6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:271)
- [P3] Duplicate block (fdce51) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:272)
- [P3] Duplicate block (c4587c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:273)
- [P3] Duplicate block (75ad37) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:274)
- [P3] Duplicate block (f7d34a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:275)
- [P3] Duplicate block (4ac9f3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:276)
- [P3] Duplicate block (ab7e2f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:277)
- [P3] Duplicate block (6c7144) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:286)
- [P3] Duplicate block (90039b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:287)
- [P3] Duplicate block (0c3550) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:288)
- [P3] Duplicate block (f75df3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:295)
- [P3] Duplicate block (f136ae) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:302)
- [P3] Duplicate block (6d9fb0) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:315)
- [P3] Duplicate block (595def) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:316)
- [P3] Duplicate block (63f9b5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:317)
- [P3] Duplicate block (847c2b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:318)
- [P3] Duplicate block (a3003c) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:319)
- [P3] Duplicate block (c783ec) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:320)
- [P3] Duplicate block (50cdb5) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:321)
- [P3] Duplicate block (d7c3ad) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:322)
- [P3] Duplicate block (c002d8) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:323)
- [P3] Duplicate block (265dd1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:324)
- [P3] Duplicate block (d7c4a3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:325)
- [P3] Duplicate block (cd5c6b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:326)
- [P3] Duplicate block (6c7a49) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:327)
- [P3] Duplicate block (b3c67e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:335)
- [P3] Duplicate block (753c5d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:336)
- [P3] Duplicate block (47a8fe) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:337)
- [P3] Duplicate block (219283) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:338)
- [P3] Duplicate block (5780fe) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:339)
- [P3] Duplicate block (875875) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:340)
- [P3] Duplicate block (158441) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:341)
- [P3] Duplicate block (627f22) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:342)
- [P3] Duplicate block (d4ce6f) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:343)
- [P3] Duplicate block (d8488e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:344)
- [P3] Duplicate block (d294e1) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:345)
- [P3] Duplicate block (783a4d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:346)
- [P3] Duplicate block (2723fd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:347)
- [P3] Duplicate block (2fb58e) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:348)
- [P3] Duplicate block (63fa67) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:349)
- [P3] Duplicate block (327cc6) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:350)
- [P3] Duplicate block (d45202) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:351)
- [P3] Duplicate block (d39abd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:352)
- [P3] Duplicate block (a71c86) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:353)
- [P3] Duplicate block (8583f3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:354)
- [P3] Duplicate block (55821b) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:355)
- [P3] Duplicate block (ad810d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:356)
- [P3] Duplicate block (453523) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:357)
- [P3] Duplicate block (1e6cf0) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:358)
- [P3] Duplicate block (9a8671) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:359)
- [P3] Duplicate block (a1258a) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:360)
- [P3] Duplicate block (7e1a34) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:361)
- [P3] Duplicate block (8bb57d) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:362)
- [P3] Duplicate block (005e83) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:363)
- [P3] Duplicate block (b9f3f4) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:364)
- [P3] Duplicate block (1e10d3) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:365)
- [P3] Duplicate block (7dfecd) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:366)
- [P3] Duplicate block (d111ac) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:367)
- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:368)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/WorkPage/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:1)
- [P3] High complexity (29) (/home/user/my-portfolio/src/pages/WorkPage/ProjectAdmin.tsx:1)

</details>

### src/pages/NotFoundPage.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/pages/NotFoundPage.tsx:120)
- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/pages/NotFoundPage.tsx:119)

</details>

### src/components/about

<details>
<summary>Issues (35)</summary>

- [P3] Duplicate block (65c745) (/home/user/my-portfolio/src/components/about/Languages.tsx:68)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/about/Languages.tsx:67)
- [P3] Duplicate block (7129df) (/home/user/my-portfolio/src/components/about/Languages.tsx:36)
- [P3] Duplicate block (9a4f3f) (/home/user/my-portfolio/src/components/about/ProfessionalSummary.tsx:66)
- [P3] Duplicate block (c7e485) (/home/user/my-portfolio/src/components/about/Languages.tsx:66)
- [P3] Duplicate block (a0ba08) (/home/user/my-portfolio/src/components/about/Education/EducationCard.tsx:12)
- [P3] Duplicate block (62c6de) (/home/user/my-portfolio/src/components/about/KeyResults.tsx:71)
- [P3] Duplicate block (0c4085) (/home/user/my-portfolio/src/components/about/Languages.tsx:5)
- [P3] Duplicate block (fbe8e8) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:28)
- [P3] Duplicate block (fbe8e8) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:26)
- [P3] Duplicate block (9c84fc) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:29)
- [P3] Duplicate block (9c84fc) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:27)
- [P3] Duplicate block (2df206) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:30)
- [P3] Duplicate block (2df206) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:28)
- [P3] Duplicate block (9f5650) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:31)
- [P3] Duplicate block (9f5650) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:29)
- [P3] Duplicate block (59f647) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:32)
- [P3] Duplicate block (59f647) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:30)
- [P3] Duplicate block (2b5635) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceList.tsx:33)
- [P3] Duplicate block (2b5635) (/home/user/my-portfolio/src/components/about/Education/EducationList.tsx:31)
- [P3] Duplicate block (4b2d70) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:31)
- [P3] Duplicate block (4b2d70) (/home/user/my-portfolio/src/components/about/Education/EducationCard.tsx:14)
- [P3] Duplicate block (a70552) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:32)
- [P3] Duplicate block (a70552) (/home/user/my-portfolio/src/components/about/Education/EducationCard.tsx:15)
- [P3] Duplicate block (d6cc9d) (/home/user/my-portfolio/src/components/about/Expirence/ExperienceCard.tsx:33)
- [P3] Duplicate block (d6cc9d) (/home/user/my-portfolio/src/components/about/Education/EducationCard.tsx:16)
- [P3] Unused export: ProfessionalSummary (/home/user/my-portfolio/src/components/about/ProfessionalSummary.tsx:7)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/Skills/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/ProfessionalSummary.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/KeyResults.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/Expirence/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/Education/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/about/CVDownload.tsx:1)
- [P3] High complexity (22) (/home/user/my-portfolio/src/components/about/Languages.tsx:1)
- [P3] High complexity (14) (/home/user/my-portfolio/src/components/about/KeyResults.tsx:1)

</details>

### src/components/admin

<details>
<summary>Issues (43)</summary>

- [P3] Duplicate block (a03372) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:1)
- [P3] Duplicate block (a9e547) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:2)
- [P3] Duplicate block (357a9d) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:3)
- [P3] Duplicate block (2ad076) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:4)
- [P3] Duplicate block (0f0364) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:5)
- [P3] Duplicate block (8de87e) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:6)
- [P3] Duplicate block (710efc) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:7)
- [P3] Duplicate block (563757) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:8)
- [P3] Duplicate block (63a364) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:9)
- [P3] Duplicate block (11469a) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:10)
- [P3] Duplicate block (d928c6) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:11)
- [P3] Duplicate block (2443ac) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:12)
- [P3] Duplicate block (9e3a13) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:13)
- [P3] Duplicate block (b67b9b) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:14)
- [P3] Duplicate block (c025bb) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:15)
- [P3] Duplicate block (483c1c) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:16)
- [P3] Duplicate block (a85578) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:17)
- [P3] Duplicate block (a485fe) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:18)
- [P3] Duplicate block (cc0dec) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:19)
- [P3] Duplicate block (1e375e) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:37)
- [P3] Duplicate block (6acd41) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:76)
- [P3] Duplicate block (985bbd) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:77)
- [P3] Duplicate block (989fe8) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:78)
- [P3] Duplicate block (8f4dce) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:79)
- [P3] Duplicate block (bd925b) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:80)
- [P3] Duplicate block (752099) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:81)
- [P3] Duplicate block (901c29) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:82)
- [P3] Duplicate block (8f82cc) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:83)
- [P3] Duplicate block (37b4d4) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:84)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:384)
- [P3] Duplicate block (e1088e) (/home/user/my-portfolio/src/components/admin/translation/TranslationTable.tsx:74)
- [P3] Duplicate block (00d047) (/home/user/my-portfolio/src/components/admin/MarkdownRenderer.tsx:2)
- [P3] Duplicate block (9a3ebf) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:230)
- [P3] Duplicate block (9a3ebf) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:354)
- [P3] Duplicate block (20cc90) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:231)
- [P3] Duplicate block (20cc90) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:355)
- [P3] Duplicate block (5ab861) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:232)
- [P3] Duplicate block (5ab861) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:356)
- [P3] Duplicate block (a12556) (/home/user/my-portfolio/src/components/admin/BlogPostForm.tsx:456)
- [P3] Duplicate block (a12556) (/home/user/my-portfolio/src/components/admin/BlogPostForm.tsx:457)
- [P3] High complexity (27) (/home/user/my-portfolio/src/components/admin/MarkdownEditor.tsx:1)
- [P3] High complexity (36) (/home/user/my-portfolio/src/components/admin/ImageUpload.tsx:1)
- [P2] High complexity (63) (/home/user/my-portfolio/src/components/admin/BlogPostForm.tsx:1)

</details>

### services/useTranslationManager.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (6e58f2) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:93)
- [P3] Duplicate block (281bc0) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:94)
- [P3] Duplicate block (9d69b5) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:95)
- [P3] Duplicate block (1aada4) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:96)
- [P3] Duplicate block (c6b8e2) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:97)
- [P3] Duplicate block (1deef0) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:98)
- [P3] Duplicate block (9ee474) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:105)
- [P3] Duplicate block (58aab4) (/home/user/my-portfolio/src/lib/services/useTranslationManager.ts:106)

</details>

### src/components/shared

<details>
<summary>Issues (19)</summary>

- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:102)
- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:119)
- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:164)
- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/components/shared/SectionHeader.tsx:22)
- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/components/shared/PageHeader.tsx:22)
- [P3] Duplicate block (c7e485) (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:118)
- [P3] Duplicate block (3da528) (/home/user/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:162)
- [P3] Duplicate block (8473f3) (/home/user/my-portfolio/src/components/shared/UnifiedTranslationModal.tsx:163)
- [P3] Duplicate block (9bbc9b) (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:74)
- [P3] Duplicate block (9bbc9b) (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:94)
- [P3] Duplicate block (e940b6) (/home/user/my-portfolio/src/components/shared/SectionHeader.tsx:21)
- [P3] Duplicate block (e940b6) (/home/user/my-portfolio/src/components/shared/PageHeader.tsx:21)
- [P3] Unused export: TranslationFieldWithValidation (/home/user/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:21)
- [P3] Unused export: TranslationComparisonView (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:18)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/shared/TranslationComparisonView.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/shared/Container.tsx:1)
- [P3] High complexity (17) (/home/user/my-portfolio/src/components/shared/TranslationText.tsx:1)
- [P3] High complexity (17) (/home/user/my-portfolio/src/components/shared/TranslationFieldWithValidation.tsx:1)

</details>

### src/components/TableOfContents.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/TableOfContents.tsx:97)
- [P3] Unused export: TableOfContents (/home/user/my-portfolio/src/components/TableOfContents.tsx:15)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/TableOfContents.tsx:1)
- [P3] High complexity (13) (/home/user/my-portfolio/src/components/TableOfContents.tsx:1)

</details>

### src/components/ShareButton.tsx

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (077932) (/home/user/my-portfolio/src/components/ShareButton.tsx:116)
- [P3] Duplicate block (7709ff) (/home/user/my-portfolio/src/components/ShareButton.tsx:114)
- [P3] Duplicate block (c4e7d3) (/home/user/my-portfolio/src/components/ShareButton.tsx:115)
- [P3] Duplicate block (89d038) (/home/user/my-portfolio/src/components/ShareButton.tsx:112)
- [P3] Duplicate block (88f199) (/home/user/my-portfolio/src/components/ShareButton.tsx:113)

</details>

### src/components/PerformanceMonitor.tsx

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/components/PerformanceMonitor.tsx:54)
- [P3] Duplicate block (8473f3) (/home/user/my-portfolio/src/components/PerformanceMonitor.tsx:53)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/PerformanceMonitor.tsx:1)

</details>

### src/components/AuthorBio.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (f9c07e) (/home/user/my-portfolio/src/components/AuthorBio.tsx:37)
- [P3] Duplicate block (8473f3) (/home/user/my-portfolio/src/components/AuthorBio.tsx:36)
- [P3] Unused export: AuthorBio (/home/user/my-portfolio/src/components/AuthorBio.tsx:8)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/AuthorBio.tsx:1)

</details>

### src/pages/ContactPage

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (657608) (/home/user/my-portfolio/src/pages/ContactPage/ContactForm.tsx:117)
- [P3] Duplicate block (657608) (/home/user/my-portfolio/src/pages/ContactPage/ContactForm.tsx:128)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/ContactPage/index.tsx:1)
- [P3] High complexity (14) (/home/user/my-portfolio/src/pages/ContactPage/ContactForm.tsx:1)

</details>

### src/components/skeletons

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (5dae58) (/home/user/my-portfolio/src/components/skeletons/SkeletonText.tsx:28)
- [P3] Unused export: SkeletonText (/home/user/my-portfolio/src/components/skeletons/SkeletonText.tsx:12)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/skeletons/SkeletonText.tsx:1)

</details>

### src/components/ParticleBackground.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (5dae58) (/home/user/my-portfolio/src/components/ParticleBackground.tsx:83)

</details>

### src/pages/AdminLoginPage.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (28f92e) (/home/user/my-portfolio/src/pages/AdminLoginPage.tsx:34)

</details>

### src/components/markdown

<details>
<summary>Issues (17)</summary>

- [P3] Duplicate block (3478d6) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:113)
- [P3] Duplicate block (700fb5) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:72)
- [P3] Duplicate block (700fb5) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:168)
- [P3] Duplicate block (0540de) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:73)
- [P3] Duplicate block (0540de) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:169)
- [P3] Duplicate block (2f91bb) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:74)
- [P3] Duplicate block (2f91bb) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:170)
- [P3] Duplicate block (00d047) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:6)
- [P3] Duplicate block (924954) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:62)
- [P3] Duplicate block (924954) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:94)
- [P3] Duplicate block (d7ca51) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:63)
- [P3] Duplicate block (d7ca51) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:95)
- [P3] Duplicate block (3df80a) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:64)
- [P3] Duplicate block (3df80a) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:96)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:1)
- [P2] High complexity (49) (/home/user/my-portfolio/src/components/markdown/Toc.tsx:1)
- [P3] High complexity (15) (/home/user/my-portfolio/src/components/markdown/MarkdownRenderer.tsx:1)

</details>

### src/components/home

<details>
<summary>Issues (48)</summary>

- [P3] Duplicate block (3da528) (/home/user/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:160)
- [P3] Duplicate block (8473f3) (/home/user/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:161)
- [P3] Duplicate block (86e9df) (/home/user/my-portfolio/src/components/home/Statistics/index.tsx:108)
- [P3] Duplicate block (86e9df) (/home/user/my-portfolio/src/components/home/CaseStudies/index.tsx:141)
- [P3] Duplicate block (d38157) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:56)
- [P3] Duplicate block (d38157) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:26)
- [P3] Duplicate block (d38157) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:24)
- [P3] Duplicate block (9b2793) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:57)
- [P3] Duplicate block (9b2793) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:27)
- [P3] Duplicate block (9b2793) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:25)
- [P3] Duplicate block (41b752) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:58)
- [P3] Duplicate block (41b752) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:28)
- [P3] Duplicate block (41b752) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:26)
- [P3] Duplicate block (fab480) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:59)
- [P3] Duplicate block (fab480) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:29)
- [P3] Duplicate block (fab480) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:27)
- [P3] Duplicate block (9a1076) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:65)
- [P3] Duplicate block (9a1076) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:34)
- [P3] Duplicate block (a13da6) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:66)
- [P3] Duplicate block (a13da6) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:35)
- [P3] Duplicate block (534946) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:67)
- [P3] Duplicate block (534946) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:36)
- [P3] Duplicate block (0cf466) (/home/user/my-portfolio/src/components/home/Statistics/StatCard.tsx:68)
- [P3] Duplicate block (0cf466) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:37)
- [P3] Duplicate block (a0ba08) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:25)
- [P3] Duplicate block (a0ba08) (/home/user/my-portfolio/src/components/home/PortfolioNav/PortfolioNavCard.tsx:23)
- [P3] Duplicate block (a0ba08) (/home/user/my-portfolio/src/components/home/CaseStudies/index.tsx:14)
- [P3] Duplicate block (51bbc3) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:108)
- [P3] Duplicate block (51bbc3) (/home/user/my-portfolio/src/components/home/CaseStudies/index.tsx:92)
- [P3] Duplicate block (7f40f9) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:129)
- [P3] Duplicate block (7f40f9) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:140)
- [P3] Duplicate block (007171) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:130)
- [P3] Duplicate block (007171) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:141)
- [P3] Duplicate block (ef168c) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:131)
- [P3] Duplicate block (ef168c) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:142)
- [P3] Duplicate block (743089) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:132)
- [P3] Duplicate block (743089) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:143)
- [P3] Duplicate block (62c6de) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:162)
- [P3] Unused export: TechnologyIcon (/home/user/my-portfolio/src/components/home/Technologies/TechnologyIcon.tsx:9)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/Technologies/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/Technologies/TechnologyIcon.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/Statistics/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/Hero/index.tsx:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/home/CaseStudies/index.tsx:1)
- [P2] High complexity (16) (/home/user/my-portfolio/src/components/home/Technologies/TechnologiesCarousel.tsx:1)
- [P3] High complexity (13) (/home/user/my-portfolio/src/components/home/PortfolioNav/index.tsx:1)
- [P3] High complexity (13) (/home/user/my-portfolio/src/components/home/CaseStudies/index.tsx:1)

</details>

### src/lib

<details>
<summary>Issues (24)</summary>

- [P3] Duplicate block (eb9c20) (/home/user/my-portfolio/src/lib/utils/translationValidation.ts:34)
- [P3] Duplicate block (4e0fb6) (/home/user/my-portfolio/src/lib/utils/translationValidation.ts:35)
- [P3] Duplicate block (87888e) (/home/user/my-portfolio/src/lib/markdown/toc.ts:30)
- [P3] Duplicate block (87888e) (/home/user/my-portfolio/src/lib/markdown/toc.ts:39)
- [P3] Unused export: TRANSLATION_LIMITS (/home/user/my-portfolio/src/lib/utils/translationValidation.ts:4)
- [P3] Unused export: translationFieldSchema (/home/user/my-portfolio/src/lib/utils/translationValidation.ts:44)
- [P3] Unused export: hasChanged (/home/user/my-portfolio/src/lib/utils/translationValidation.ts:91)
- [P3] Unused export: debounceAsync (/home/user/my-portfolio/src/lib/utils/debounce.ts:26)
- [P3] Unused export: technologyDetailInsertSchema (/home/user/my-portfolio/src/lib/schemas/technologySchema.ts:30)
- [P3] Unused export: technologyDetailUpdateSchema (/home/user/my-portfolio/src/lib/schemas/technologySchema.ts:31)
- [P3] Unused export: aboutKeySchema (/home/user/my-portfolio/src/lib/schemas/aboutContentSchema.ts:7)
- [P3] Unused export: aboutItemValueSchema (/home/user/my-portfolio/src/lib/schemas/aboutContentSchema.ts:13)
- [P3] Unused export: transitionHero (/home/user/my-portfolio/src/lib/motion.ts:2)
- [P3] Unused export: stagger (/home/user/my-portfolio/src/lib/motion.ts:4)
- [P3] Unused export: appMetadata (/home/user/my-portfolio/src/lib/config.ts:44)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/utils/downloadCV.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/utils/debounce.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/motion.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/db/getAbout.test.ts:1)
- [P3] High complexity (22) (/home/user/my-portfolio/src/lib/utils/renderCvMarkdown.ts:1)
- [P3] High complexity (13) (/home/user/my-portfolio/src/lib/markdown/toc.ts:1)
- [P2] High complexity (50) (/home/user/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] High coupling (13 imports) (/home/user/my-portfolio/src/lib/markdown/processor.ts:1)
- [P3] High complexity (22) (/home/user/my-portfolio/src/lib/db/getAbout.ts:1)

</details>

### services/useTranslationFieldValidation.ts

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (eb9c20) (/home/user/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:7)
- [P3] Duplicate block (4e0fb6) (/home/user/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:8)
- [P3] Unused export: useTranslationFieldValidation (/home/user/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:29)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/services/useTranslationFieldValidation.ts:1)

</details>

### services/useUndoRedo.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (1b905b) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:2)
- [P3] Duplicate block (c84d28) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:3)
- [P3] Duplicate block (7f4753) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:76)
- [P3] Duplicate block (7f4753) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:99)
- [P3] Duplicate block (61a0bd) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:77)
- [P3] Duplicate block (61a0bd) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:100)
- [P3] Duplicate block (2c63d1) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:78)
- [P3] Duplicate block (2c63d1) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:101)
- [P3] Duplicate block (a9cbed) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:79)
- [P3] Duplicate block (a9cbed) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:102)
- [P3] Duplicate block (573e0e) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:80)
- [P3] Duplicate block (573e0e) (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:103)
- [P3] Unused export: useUndoRedo (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:32)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/services/useUndoRedo.ts:1)

</details>

### services/useEditableTranslation.ts

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (1b905b) (/home/user/my-portfolio/src/lib/services/useEditableTranslation.ts:4)
- [P3] Duplicate block (c84d28) (/home/user/my-portfolio/src/lib/services/useEditableTranslation.ts:5)
- [P3] Unused export: useEditableTranslation (/home/user/my-portfolio/src/lib/services/useEditableTranslation.ts:28)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/services/useEditableTranslation.ts:1)
- [P3] High complexity (27) (/home/user/my-portfolio/src/lib/services/useEditableTranslation.ts:1)

</details>

### services/useTranslationService.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (7087bb) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:155)
- [P3] Duplicate block (0ccaee) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:156)
- [P3] Duplicate block (0ccaee) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:183)
- [P3] Duplicate block (bd2710) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:157)
- [P3] Duplicate block (bd2710) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:184)
- [P3] Duplicate block (c42915) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:158)
- [P3] Duplicate block (c42915) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:185)
- [P3] High complexity (34) (/home/user/my-portfolio/src/lib/services/useTranslationService.ts:1)

</details>

### services/useProjectService.ts

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (7087bb) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:128)
- [P3] Duplicate block (0ccaee) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:129)
- [P3] Duplicate block (40fd61) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:72)
- [P3] Duplicate block (b4dd36) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:98)
- [P3] Duplicate block (71efa8) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:99)
- [P3] Duplicate block (a05f97) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:130)
- [P3] Duplicate block (0c927b) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:154)
- [P3] High complexity (25) (/home/user/my-portfolio/src/lib/services/useProjectService.ts:1)

</details>

### services/useFeatureFlagService.ts

<details>
<summary>Issues (9)</summary>

- [P3] Duplicate block (7087bb) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:96)
- [P3] Duplicate block (0ccaee) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:97)
- [P3] Duplicate block (3fd9ac) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:24)
- [P3] Duplicate block (40fd61) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:41)
- [P3] Duplicate block (b4dd36) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:66)
- [P3] Duplicate block (71efa8) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:67)
- [P3] Duplicate block (a05f97) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:98)
- [P3] Duplicate block (0c927b) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:122)
- [P3] High complexity (21) (/home/user/my-portfolio/src/lib/services/useFeatureFlagService.ts:1)

</details>

### services/useBlogAdmin.ts

<details>
<summary>Issues (7)</summary>

- [P3] Duplicate block (0ccaee) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:111)
- [P3] Duplicate block (dfe9e2) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:90)
- [P3] Duplicate block (dfe9e2) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:121)
- [P3] Duplicate block (dfe9e2) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:147)
- [P3] Duplicate block (52d768) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:91)
- [P3] Duplicate block (52d768) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:122)
- [P3] High complexity (18) (/home/user/my-portfolio/src/lib/services/useBlogAdmin.ts:1)

</details>

### services/useTechnologyService.ts

<details>
<summary>Issues (13)</summary>

- [P3] Duplicate block (5b8416) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:55)
- [P3] Duplicate block (d7f43d) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:73)
- [P3] Duplicate block (175088) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:74)
- [P3] Duplicate block (175088) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:105)
- [P3] Duplicate block (e78925) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:104)
- [P3] Duplicate block (c94a97) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:131)
- [P3] Duplicate block (ebb8b1) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:144)
- [P3] Duplicate block (02db41) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:145)
- [P3] Duplicate block (473dd0) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:146)
- [P3] Duplicate block (5863a1) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:147)
- [P3] Unused export: useTechnologyService (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:31)
- [P3] File has no inbound references (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:1)
- [P3] High complexity (16) (/home/user/my-portfolio/src/lib/services/useTechnologyService.ts:1)

</details>

### services/useSkillService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:112)
- [P3] Duplicate block (e78925) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:158)
- [P3] Duplicate block (c94a97) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:192)
- [P3] Duplicate block (4db2fd) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:48)
- [P3] Duplicate block (3b5a12) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:55)
- [P3] Duplicate block (4bc6b7) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:62)
- [P3] Duplicate block (aae09c) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:63)
- [P3] Duplicate block (37aae4) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:79)
- [P3] Duplicate block (5d61fa) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:80)
- [P3] Duplicate block (adccb4) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:113)
- [P3] Duplicate block (78d996) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:114)
- [P3] Duplicate block (ab0617) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:115)
- [P3] Duplicate block (3fb181) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:157)
- [P3] High complexity (27) (/home/user/my-portfolio/src/lib/services/useSkillService.ts:1)

</details>

### services/useExperienceService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:118)
- [P3] Duplicate block (e78925) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:164)
- [P3] Duplicate block (c94a97) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:203)
- [P3] Duplicate block (4db2fd) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:48)
- [P3] Duplicate block (3b5a12) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:55)
- [P3] Duplicate block (4bc6b7) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:62)
- [P3] Duplicate block (aae09c) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:63)
- [P3] Duplicate block (37aae4) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:82)
- [P3] Duplicate block (5d61fa) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:83)
- [P3] Duplicate block (adccb4) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:119)
- [P3] Duplicate block (78d996) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:120)
- [P3] Duplicate block (ab0617) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:121)
- [P3] Duplicate block (3fb181) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:163)
- [P3] High complexity (33) (/home/user/my-portfolio/src/lib/services/useExperienceService.ts:1)

</details>

### services/useEducationService.ts

<details>
<summary>Issues (14)</summary>

- [P3] Duplicate block (d7f43d) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:116)
- [P3] Duplicate block (e78925) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:161)
- [P3] Duplicate block (c94a97) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:195)
- [P3] Duplicate block (4db2fd) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:48)
- [P3] Duplicate block (3b5a12) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:55)
- [P3] Duplicate block (4bc6b7) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:62)
- [P3] Duplicate block (aae09c) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:63)
- [P3] Duplicate block (37aae4) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:81)
- [P3] Duplicate block (5d61fa) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:82)
- [P3] Duplicate block (adccb4) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:117)
- [P3] Duplicate block (78d996) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:118)
- [P3] Duplicate block (ab0617) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:119)
- [P3] Duplicate block (3fb181) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:160)
- [P3] High complexity (29) (/home/user/my-portfolio/src/lib/services/useEducationService.ts:1)

</details>

### services/useTechnologyCatalog.ts

<details>
<summary>Issues (5)</summary>

- [P3] Duplicate block (ebb8b1) (/home/user/my-portfolio/src/lib/services/useTechnologyCatalog.ts:87)
- [P3] Duplicate block (02db41) (/home/user/my-portfolio/src/lib/services/useTechnologyCatalog.ts:88)
- [P3] Duplicate block (473dd0) (/home/user/my-portfolio/src/lib/services/useTechnologyCatalog.ts:89)
- [P3] Duplicate block (5863a1) (/home/user/my-portfolio/src/lib/services/useTechnologyCatalog.ts:90)
- [P3] High complexity (15) (/home/user/my-portfolio/src/lib/services/useTechnologyCatalog.ts:1)

</details>

### services/useContactService.ts

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (ecd45e) (/home/user/my-portfolio/src/lib/services/useContactService.ts:66)

</details>

### services/useBlogAdminService.ts

<details>
<summary>Issues (3)</summary>

- [P3] Duplicate block (c11d65) (/home/user/my-portfolio/src/lib/services/useBlogAdminService.ts:77)
- [P3] Duplicate block (c11d65) (/home/user/my-portfolio/src/lib/services/useBlogAdminService.ts:125)
- [P3] High complexity (15) (/home/user/my-portfolio/src/lib/services/useBlogAdminService.ts:1)

</details>

### src/data

<details>
<summary>Issues (35)</summary>

- [P3] Duplicate block (8d1711) (/home/user/my-portfolio/src/data/cv.schema.ts:24)
- [P3] Duplicate block (8d1711) (/home/user/my-portfolio/src/data/cv.schema.ts:106)
- [P3] Duplicate block (1ccf06) (/home/user/my-portfolio/src/data/cv.schema.ts:25)
- [P3] Duplicate block (1ccf06) (/home/user/my-portfolio/src/data/cv.schema.ts:107)
- [P3] Duplicate block (4aebfb) (/home/user/my-portfolio/src/data/cv.schema.ts:32)
- [P3] Duplicate block (4aebfb) (/home/user/my-portfolio/src/data/cv.schema.ts:80)
- [P3] Duplicate block (20fd6b) (/home/user/my-portfolio/src/data/cv.schema.ts:33)
- [P3] Duplicate block (20fd6b) (/home/user/my-portfolio/src/data/cv.schema.ts:81)
- [P3] Duplicate block (164271) (/home/user/my-portfolio/src/data/cv.schema.ts:34)
- [P3] Duplicate block (164271) (/home/user/my-portfolio/src/data/cv.schema.ts:82)
- [P3] Duplicate block (fc1a3c) (/home/user/my-portfolio/src/data/cv.schema.ts:35)
- [P3] Duplicate block (fc1a3c) (/home/user/my-portfolio/src/data/cv.schema.ts:83)
- [P3] Duplicate block (743c39) (/home/user/my-portfolio/src/data/cv.schema.ts:36)
- [P3] Duplicate block (743c39) (/home/user/my-portfolio/src/data/cv.schema.ts:84)
- [P3] Duplicate block (571952) (/home/user/my-portfolio/src/data/cv.schema.ts:37)
- [P3] Duplicate block (571952) (/home/user/my-portfolio/src/data/cv.schema.ts:85)
- [P3] Duplicate block (a3ea34) (/home/user/my-portfolio/src/data/cv.schema.ts:38)
- [P3] Duplicate block (a3ea34) (/home/user/my-portfolio/src/data/cv.schema.ts:86)
- [P3] Duplicate block (9d4b53) (/home/user/my-portfolio/src/data/cv.schema.ts:39)
- [P3] Duplicate block (9d4b53) (/home/user/my-portfolio/src/data/cv.schema.ts:87)
- [P3] Duplicate block (3f71a5) (/home/user/my-portfolio/src/data/cv.schema.ts:40)
- [P3] Duplicate block (3f71a5) (/home/user/my-portfolio/src/data/cv.schema.ts:88)
- [P3] Duplicate block (80e5bc) (/home/user/my-portfolio/src/data/cv.schema.ts:46)
- [P3] Duplicate block (80e5bc) (/home/user/my-portfolio/src/data/cv.schema.ts:95)
- [P3] Duplicate block (4b1001) (/home/user/my-portfolio/src/data/cv.schema.ts:47)
- [P3] Duplicate block (4b1001) (/home/user/my-portfolio/src/data/cv.schema.ts:96)
- [P3] Duplicate block (ceba7a) (/home/user/my-portfolio/src/data/cv.schema.ts:48)
- [P3] Duplicate block (ceba7a) (/home/user/my-portfolio/src/data/cv.schema.ts:97)
- [P3] Duplicate block (77fb0f) (/home/user/my-portfolio/src/data/cv.schema.ts:49)
- [P3] Duplicate block (77fb0f) (/home/user/my-portfolio/src/data/cv.schema.ts:98)
- [P3] Duplicate block (e69f21) (/home/user/my-portfolio/src/data/cv.schema.ts:50)
- [P3] Duplicate block (e69f21) (/home/user/my-portfolio/src/data/cv.schema.ts:99)
- [P3] Duplicate block (77d722) (/home/user/my-portfolio/src/data/cv.schema.ts:51)
- [P3] Duplicate block (77d722) (/home/user/my-portfolio/src/data/cv.schema.ts:100)
- [P3] Unused export: CvSchema (/home/user/my-portfolio/src/data/cv.schema.ts:70)

</details>

### src/components/loading

<details>
<summary>Issues (92)</summary>

- [P3] Duplicate block (7b9af4) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:14)
- [P3] Duplicate block (7b9af4) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:20)
- [P3] Duplicate block (f64203) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:15)
- [P3] Duplicate block (f64203) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:21)
- [P3] Duplicate block (a24045) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:16)
- [P3] Duplicate block (a24045) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:22)
- [P3] Duplicate block (574b26) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:17)
- [P3] Duplicate block (574b26) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:23)
- [P3] Duplicate block (9c8fbc) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:18)
- [P3] Duplicate block (9c8fbc) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:24)
- [P3] Duplicate block (37d54f) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:19)
- [P3] Duplicate block (37d54f) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:25)
- [P3] Duplicate block (a54923) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:20)
- [P3] Duplicate block (a54923) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:26)
- [P3] Duplicate block (fb0c75) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:21)
- [P3] Duplicate block (fb0c75) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:27)
- [P3] Duplicate block (ade67c) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:22)
- [P3] Duplicate block (ade67c) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:28)
- [P3] Duplicate block (f2854c) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:23)
- [P3] Duplicate block (f2854c) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:29)
- [P3] Duplicate block (82835a) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:24)
- [P3] Duplicate block (82835a) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:30)
- [P3] Duplicate block (4fe85d) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:31)
- [P3] Duplicate block (4fe85d) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:37)
- [P3] Duplicate block (ba1791) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:32)
- [P3] Duplicate block (ba1791) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:38)
- [P3] Duplicate block (8483f6) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:33)
- [P3] Duplicate block (8483f6) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:39)
- [P3] Duplicate block (cc4e0a) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:34)
- [P3] Duplicate block (cc4e0a) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:40)
- [P3] Duplicate block (8e5d53) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:35)
- [P3] Duplicate block (8e5d53) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:41)
- [P3] Duplicate block (86622e) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:36)
- [P3] Duplicate block (86622e) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:42)
- [P3] Duplicate block (fcd228) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:37)
- [P3] Duplicate block (fcd228) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:43)
- [P3] Duplicate block (756b58) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:38)
- [P3] Duplicate block (756b58) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:44)
- [P3] Duplicate block (0bc397) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:39)
- [P3] Duplicate block (0bc397) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:45)
- [P3] Duplicate block (9b65f3) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:40)
- [P3] Duplicate block (9b65f3) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:46)
- [P3] Duplicate block (b679f6) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:41)
- [P3] Duplicate block (b679f6) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:47)
- [P3] Duplicate block (330e23) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:42)
- [P3] Duplicate block (330e23) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:48)
- [P3] Duplicate block (8a1aae) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:43)
- [P3] Duplicate block (8a1aae) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:49)
- [P3] Duplicate block (c483b8) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:44)
- [P3] Duplicate block (c483b8) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:50)
- [P3] Duplicate block (bde83e) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:45)
- [P3] Duplicate block (bde83e) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:51)
- [P3] Duplicate block (ee19e4) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:52)
- [P3] Duplicate block (ee19e4) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:58)
- [P3] Duplicate block (98ba8c) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:53)
- [P3] Duplicate block (98ba8c) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:59)
- [P3] Duplicate block (11e712) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:54)
- [P3] Duplicate block (11e712) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:60)
- [P3] Duplicate block (b05759) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:55)
- [P3] Duplicate block (b05759) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:61)
- [P3] Duplicate block (20654a) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:56)
- [P3] Duplicate block (20654a) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:62)
- [P3] Duplicate block (0a7287) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:57)
- [P3] Duplicate block (0a7287) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:63)
- [P3] Duplicate block (7387c6) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:58)
- [P3] Duplicate block (7387c6) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:64)
- [P3] Duplicate block (6c6401) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:59)
- [P3] Duplicate block (6c6401) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:65)
- [P3] Duplicate block (442672) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:60)
- [P3] Duplicate block (442672) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:66)
- [P3] Duplicate block (b5d486) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:61)
- [P3] Duplicate block (b5d486) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:67)
- [P3] Duplicate block (c7c872) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:62)
- [P3] Duplicate block (c7c872) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:68)
- [P3] Duplicate block (c606b6) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:63)
- [P3] Duplicate block (c606b6) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:69)
- [P3] Duplicate block (60b00b) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:64)
- [P3] Duplicate block (60b00b) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:70)
- [P3] Duplicate block (643bd5) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:65)
- [P3] Duplicate block (643bd5) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:71)
- [P3] Duplicate block (58ffb8) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:66)
- [P3] Duplicate block (58ffb8) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:72)
- [P3] Duplicate block (c09003) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:67)
- [P3] Duplicate block (c09003) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:73)
- [P3] Duplicate block (3a55c0) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:68)
- [P3] Duplicate block (3a55c0) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:74)
- [P3] Duplicate block (843c95) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:84)
- [P3] Duplicate block (843c95) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:80)
- [P3] Duplicate block (42d09f) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:85)
- [P3] Duplicate block (42d09f) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:81)
- [P3] Duplicate block (99d4c5) (/home/user/my-portfolio/src/components/loading/TranslationLoadingScreen.tsx:86)
- [P3] Duplicate block (99d4c5) (/home/user/my-portfolio/src/components/loading/LoadingScreen.tsx:82)

</details>

### src/components/SettingsPanel.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (53e0ce) (/home/user/my-portfolio/src/components/SettingsPanel.tsx:84)
- [P3] Duplicate block (729884) (/home/user/my-portfolio/src/components/SettingsPanel.tsx:85)
- [P3] Duplicate block (4b39a0) (/home/user/my-portfolio/src/components/SettingsPanel.tsx:86)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/SettingsPanel.tsx:1)

</details>

### src/components/HelpTooltip.tsx

<details>
<summary>Issues (4)</summary>

- [P3] Duplicate block (53e0ce) (/home/user/my-portfolio/src/components/HelpTooltip.tsx:57)
- [P3] Duplicate block (729884) (/home/user/my-portfolio/src/components/HelpTooltip.tsx:58)
- [P3] Duplicate block (4b39a0) (/home/user/my-portfolio/src/components/HelpTooltip.tsx:59)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/HelpTooltip.tsx:1)

</details>

### src/components/SectionNavigation.tsx

<details>
<summary>Issues (8)</summary>

- [P3] Duplicate block (360adb) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:76)
- [P3] Duplicate block (360adb) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:148)
- [P3] Duplicate block (d4ff89) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:77)
- [P3] Duplicate block (d4ff89) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:149)
- [P3] Duplicate block (660fe8) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:78)
- [P3] Duplicate block (660fe8) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:150)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/SectionNavigation.tsx:1)
- [P3] High complexity (27) (/home/user/my-portfolio/src/components/SectionNavigation.tsx:1)

</details>

### src/components/ScrollIndicator.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Duplicate block (b58c4a) (/home/user/my-portfolio/src/components/ScrollIndicator.tsx:33)
- [P3] File has no inbound references (/home/user/my-portfolio/src/components/ScrollIndicator.tsx:1)

</details>

### src/components/ReadingProgress.tsx

<details>
<summary>Issues (1)</summary>

- [P3] Duplicate block (b58c4a) (/home/user/my-portfolio/src/components/ReadingProgress.tsx:29)

</details>

### /home/user/my-portfolio/tools/analysis/utils

<details>
<summary>Issues (3)</summary>

- [P3] Unused export: isIgnored (/home/user/my-portfolio/tools/analysis/utils/fs.ts:6)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/utils/git.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/utils/fs.ts:1)

</details>

### /home/user/my-portfolio/tools/analysis

<details>
<summary>Issues (13)</summary>

- [P3] Unused export: priorityFromMatrix (/home/user/my-portfolio/tools/analysis/risk_model.ts:10)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/types.ts:1)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/suggestions.ts:6)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/cli.ts:12)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/cli.ts:13)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/types.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/suggestions.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/risk_model.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/grouping.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/cli.ts:1)
- [P3] High complexity (28) (/home/user/my-portfolio/tools/analysis/risk_model.ts:1)
- [P3] High complexity (27) (/home/user/my-portfolio/tools/analysis/cli.ts:1)
- [P3] Underscore file name (/home/user/my-portfolio/tools/analysis/risk_model.ts:1)

</details>

### src/unused.ts

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: unusedValue (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/unused.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/unused.ts:1)

</details>

### src/deprecated.ts

<details>
<summary>Issues (4)</summary>

- [P3] Unused export: legacyApi (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:2)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:1)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:2)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/deprecated.ts:1)

</details>

### src/complex.ts

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: complicated (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/complex.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/complex.ts:1)

</details>

### src/pages/MarkdownDemo.tsx

<details>
<summary>Issues (2)</summary>

- [P3] Unused export: MarkdownDemo (/home/user/my-portfolio/src/pages/MarkdownDemo.tsx:8)
- [P3] File has no inbound references (/home/user/my-portfolio/src/pages/MarkdownDemo.tsx:1)

</details>

### services/useBlogAdminState.ts

<details>
<summary>Issues (1)</summary>

- [P3] Unused export: INITIAL_FORM_STATE (/home/user/my-portfolio/src/lib/services/useBlogAdminState.ts:8)

</details>

### src/hooks

<details>
<summary>Issues (5)</summary>

- [P3] Unused export: useTranslationText (/home/user/my-portfolio/src/hooks/useTranslationText.ts:7)
- [P3] File has no inbound references (/home/user/my-portfolio/src/hooks/useTranslationText.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/hooks/useTilt.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/hooks/useAboutPageData.ts:1)
- [P3] High complexity (15) (/home/user/my-portfolio/src/hooks/useAboutPageData.ts:1)

</details>

### src/fixtures

<details>
<summary>Issues (9)</summary>

- [P3] Unused export: sampleMarkdown (/home/user/my-portfolio/src/fixtures/sampleMarkdown.ts:7)
- [P3] Unused export: shortSampleMarkdown (/home/user/my-portfolio/src/fixtures/sampleMarkdown.ts:232)
- [P3] Unused export: complexMarkdown (/home/user/my-portfolio/src/fixtures/sampleMarkdown.ts:255)
- [P3] Unused export: codeSampleMarkdown (/home/user/my-portfolio/src/fixtures/codeSampleMarkdown.ts:4)
- [P3] Unused export: calculateSum (/home/user/my-portfolio/src/fixtures/codeSampleMarkdown.ts:23)
- [P3] Unused export: multiply (/home/user/my-portfolio/src/fixtures/codeSampleMarkdown.ts:27)
- [P3] File has no inbound references (/home/user/my-portfolio/src/fixtures/sampleMarkdown.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/src/fixtures/codeSampleMarkdown.ts:1)
- [P3] High complexity (15) (/home/user/my-portfolio/src/fixtures/sampleMarkdown.ts:1)

</details>

### /home/user/my-portfolio/tools/analysis/detectors

<details>
<summary>Issues (10)</summary>

- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/detectors/deprecated.ts:3)
- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/detectors/deprecated.ts:4)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/unused.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/duplication.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/deprecated.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/deadcode.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/consistency.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/detectors/complexity.ts:1)
- [P3] High complexity (15) (/home/user/my-portfolio/tools/analysis/detectors/unused.ts:1)
- [P3] High complexity (17) (/home/user/my-portfolio/tools/analysis/detectors/complexity.ts:1)

</details>

### /home/user/my-portfolio/tools/analysis/collectors

<details>
<summary>Issues (3)</summary>

- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/collectors/index.ts:9)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/collectors/index.ts:1)
- [P3] High complexity (14) (/home/user/my-portfolio/tools/analysis/collectors/index.ts:1)

</details>

### /home/user/my-portfolio/tools/analysis/__tests__

<details>
<summary>Issues (2)</summary>

- [P3] Deprecated marker (/home/user/my-portfolio/tools/analysis/__tests__/analysis.test.js:10)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/__tests__/analysis.test.js:1)

</details>

### services/useBlogService.ts

<details>
<summary>Issues (2)</summary>

- [P3] Deprecated marker (/home/user/my-portfolio/src/lib/services/useBlogService.ts:2)
- [P3] Deprecated marker (/home/user/my-portfolio/src/lib/services/useBlogService.ts:40)

</details>

### /home/user/my-portfolio

<details>
<summary>Issues (6)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/vite.config.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tailwind.config.js:1)
- [P3] File has no inbound references (/home/user/my-portfolio/postcss.config.js:1)
- [P3] File has no inbound references (/home/user/my-portfolio/playwright.config.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/jest.config.cjs:1)
- [P3] File has no inbound references (/home/user/my-portfolio/eslint.config.js:1)

</details>

### /home/user/my-portfolio/tools/analysis/reporters

<details>
<summary>Issues (4)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/reporters/markdown_reporter.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/reporters/json_reporter.ts:1)
- [P3] Underscore file name (/home/user/my-portfolio/tools/analysis/reporters/markdown_reporter.ts:1)
- [P3] Underscore file name (/home/user/my-portfolio/tools/analysis/reporters/json_reporter.ts:1)

</details>

### src/entry.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/entry.ts:1)

</details>

### src/b.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/tools/analysis/fixtures/simple/src/b.ts:1)

</details>

### /home/user/my-portfolio/tests

<details>
<summary>Issues (3)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/tests/visual-smoke.spec.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tests/about.spec.ts:1)
- [P3] File has no inbound references (/home/user/my-portfolio/tests/AutomationTestingCard.spec.ts:1)

</details>

### src/vite-env.d.ts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/vite-env.d.ts:1)

</details>

### src/translations

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/translations/index.ts:1)

</details>

### src/components/ui

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/ui/glsl-hills.tsx:1)

</details>

### src/components/ThemeToggle.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/ThemeToggle.tsx:1)

</details>

### src/components/SoundEffects.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/SoundEffects.tsx:1)

</details>

### src/components/ScrollToTop.test.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/ScrollToTop.test.tsx:1)

</details>

### src/components/PageProgress.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/PageProgress.tsx:1)

</details>

### src/components/FloatingActions.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/FloatingActions.tsx:1)

</details>

### src/components/AutomationTestingCard.test.tsx

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/src/components/AutomationTestingCard.test.tsx:1)

</details>

### /home/user/my-portfolio/scripts

<details>
<summary>Issues (1)</summary>

- [P3] File has no inbound references (/home/user/my-portfolio/scripts/verify-design-tokens.mjs:1)

</details>


## Roadmap

#### Phase 1 (Low-risk wins)
- [ ] Duplicate block (33402b) (/home/user/my-portfolio/src/types/testing.ts:9) [P3]
- [ ] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:13) [P3]
- [ ] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:40) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:14) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:41) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:176) [P3]
- [ ] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:22) [P3]
- [ ] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:47) [P3]
- [ ] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:23) [P3]
- [ ] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:48) [P3]

#### Phase 2 (Moderate)
- [ ] High complexity (288) (/home/user/my-portfolio/src/types/database.types.ts:1) [P1]
- [ ] High coupling (15 imports) (/home/user/my-portfolio/src/routes/index.tsx:1) [P3]
- [ ] High coupling (14 imports) (/home/user/my-portfolio/src/pages/HomePage.tsx:1) [P3]
- [ ] High complexity (26) (/home/user/my-portfolio/src/components/Header/index.tsx:1) [P3]
- [ ] High complexity (13) (/home/user/my-portfolio/src/components/Header/MobileMenu.tsx:1) [P2]
- [ ] High complexity (28) (/home/user/my-portfolio/src/lib/services/useAboutService.ts:1) [P3]
- [ ] High complexity (18) (/home/user/my-portfolio/src/lib/services/usePublicFeatureFlags.ts:1) [P3]
- [ ] High complexity (31) (/home/user/my-portfolio/src/components/AboutMe.tsx:1) [P2]
- [ ] High complexity (16) (/home/user/my-portfolio/src/pages/AdminPage.tsx:1) [P3]
- [ ] High coupling (19 imports) (/home/user/my-portfolio/src/pages/AboutPage.tsx:1) [P3]

#### Phase 3 (Higher-risk)
- [ ] Duplicate block (33402b) (/home/user/my-portfolio/src/types/testing.ts:9) [P3]
- [ ] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:13) [P3]
- [ ] Duplicate block (62d74e) (/home/user/my-portfolio/src/types/database.types.ts:40) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:14) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:41) [P3]
- [ ] Duplicate block (81df3b) (/home/user/my-portfolio/src/types/database.types.ts:176) [P3]
- [ ] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:22) [P3]
- [ ] Duplicate block (06e822) (/home/user/my-portfolio/src/types/database.types.ts:47) [P3]
- [ ] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:23) [P3]
- [ ] Duplicate block (ebde02) (/home/user/my-portfolio/src/types/database.types.ts:48) [P3]
