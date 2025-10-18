# Markdown Implementation Testing Guide

## Pre-Testing Checklist

- [ ] Run `npm install` to install remark/rehype dependencies
- [ ] Run `npm run build` to verify TypeScript compilation
- [ ] Run `npm run dev` to start dev server

## Test 1: XSS Protection (Security)

**Objective**: Verify that HTML/script content is escaped and not executed

### Test Cases

```markdown
# XSS Test Cases

## HTML Tags Should Escape

<script>alert('XSS')</script>

<img src="x" onerror="alert('XSS')">

<iframe src="javascript:alert('XSS')"></iframe>

<svg onload="alert('XSS')"></svg>

## Event Handlers

<button onclick="alert('XSS')">Click me</button>

<div onmouseover="alert('XSS')">Hover me</div>

## Data Attributes

<a href="javascript:alert('XSS')">Click</a>

<object data="javascript:alert('XSS')"></object>
```

**Expected Result**: All HTML/scripts should render as escaped plain text (visible as `<script>`, not executed)

**How to Test**:
1. Go to Admin Dashboard → Blog Posts
2. Create a new post with title: "XSS Test"
3. Paste the XSS test markdown above into content
4. Click Preview toggle
5. **Verify**: No alerts pop up, HTML is displayed as escaped text
6. Click Publish
7. View the published post
8. **Verify**: No alerts pop up, HTML is still escaped

---

## Test 2: GitHub-Flavored Markdown Features

**Objective**: Verify all GFM features render correctly

### Create Test Post

Post Title: "GFM Features Complete Test"
Post Slug: "gfm-features-test"

### Content to Use

Use the `sampleMarkdown` from `src/fixtures/sampleMarkdown.ts`:
- Copy the full markdown content
- Paste into admin editor

### Feature Checklist

- [ ] **Headings**: H1, H2, H3 all visible with proper sizing
- [ ] **Text Formatting**: **bold**, *italic*, ~~strikethrough~~ all styled
- [ ] **Lists**: Bullet lists and numbered lists indented properly
- [ ] **Nested Lists**: Deep nesting (3+ levels) renders correctly
- [ ] **Task Lists**: 
  - [x] Checked tasks have checkmark
  - [ ] Unchecked tasks are empty
- [ ] **Tables**: All columns aligned, borders visible
- [ ] **Code Blocks**: 
  - JavaScript block has syntax highlighting (different colors)
  - Python block has syntax highlighting
  - Lines are properly formatted
- [ ] **Inline Code**: Appears with background and monospace font
- [ ] **Blockquotes**: Left border visible, indented, italic text
- [ ] **Links**: 
  - Text is yellow (#edfc3a)
  - Underlined
  - Hovering shows pointer cursor
- [ ] **Images**: Display with rounded corners, shadow
- [ ] **Horizontal Rules**: Visible line separator
- [ ] **Line Breaks**: Paragraphs properly spaced

---

## Test 3: Admin Editor Features

### Split-Pane Editor

**Test**: Preview Mode
1. Open blog edit form
2. Click Eye icon to toggle preview
3. **Verify**: Right pane shows live preview
4. **Verify**: As you type in editor, preview updates in real-time
5. Click Eye icon again to hide preview
6. **Verify**: Preview pane disappears

**Test**: Fullscreen Mode
1. With preview enabled, click maximize icon
2. **Verify**: Editor/preview expand to fullscreen
3. **Verify**: Exit Fullscreen button appears bottom-right
4. Click Exit Fullscreen
5. **Verify**: Returns to normal view

### Keyboard Shortcuts

**Test Each Shortcut** (ensure text is selected first):

- [ ] **Ctrl+B**: Wraps selection in `**`
- [ ] **Ctrl+I**: Wraps selection in `*`
- [ ] **Ctrl+H**: Adds `## ` at line start
- [ ] **Ctrl+K**: Wraps in `[text](url)`
- [ ] **Ctrl+Shift+`**: Wraps in `` ``` `` code fence
- [ ] **Ctrl+Shift+8**: Adds `- ` for bullet list
- [ ] **Ctrl+Shift+7**: Adds `1. ` for numbered list

### Toolbar Buttons

- [ ] Bold button: Adds `**` around text
- [ ] Italic button: Adds `*` around text
- [ ] Heading button: Adds `## ` at line start
- [ ] Bullet List button: Adds `- ` at line start
- [ ] Numbered List button: Adds `1. ` at line start
- [ ] Quote button: Adds `> ` at line start
- [ ] Code Block button: Adds ` ``` ` fences
- [ ] Link button: Adds `[text](url)` format
- [ ] Image button: Adds `![alt](url)` format

### Copy Shortcuts Button

1. In editor, hover over toolbar
2. Click Copy icon (bottom right of toolbar)
3. **Verify**: Icon changes to checkmark (green)
4. Paste into any text area
5. **Verify**: Shortcuts list appears (Bold: Ctrl+B, etc.)

### Word & Character Count

1. Type some content in editor
2. **Verify**: Stats bar shows below editor:
   - Words: [number]
   - Characters: [number]
   - Reading time: [time]
3. Add more text
4. **Verify**: Numbers update in real-time

### Auto-Save Status

1. Type content in editor
2. Wait 3-5 seconds
3. **Verify**: "Saving..." appears top-right (yellow with pulse icon)
4. Wait 2 more seconds
5. **Verify**: "Saved at HH:MM" appears (green with checkmark)
6. Status disappears after 2 seconds
7. **Verify**: Returns to normal view

---

## Test 4: Slug Validation

### Auto-Generation

1. Fill in Title: "My Awesome Blog Post"
2. **Verify**: Slug auto-fills with "my-awesome-blog-post"
3. Change title to "React Hooks Guide 2024"
4. **Verify**: Slug auto-updates to "react-hooks-guide-2024"

### Manual Override

1. Click on slug field
2. Change slug to "custom-slug"
3. **Verify**: Slug no longer auto-updates when title changes
4. **Verify**: Green checkmark appears (slug is valid and available)

### Format Validation

1. Try slug with uppercase: "My-Slug"
2. **Verify**: Red X appears, message: "Slug must be lowercase alphanumeric with hyphens"
3. Try slug with spaces: "my slug"
4. **Verify**: Red X appears with format error
5. Try slug with symbols: "my-slug!!!"
6. **Verify**: Red X appears with format error

### Uniqueness Check

1. Create first blog post with slug "test-post"
2. Save successfully
3. Create second post, enter slug "test-post"
4. **Verify**: Loading spinner appears briefly
5. **Verify**: Red X appears, message: "Slug already exists"
6. Change slug to "test-post-2"
7. **Verify**: Green checkmark appears, message: "Slug is available"

---

## Test 5: Reading Time

### Auto-Calculation

1. Create post with short content (< 200 words)
2. **Verify**: Reading time shows "1 min read"
3. Add more content (> 1000 words)
4. **Verify**: Reading time updates to "5 min read" (or appropriate)

### Manual Override

1. In Reading Time field, click "Auto (Click to override)"
2. **Verify**: Button changes to "Using Custom"
3. Manually type "10 min read"
4. **Verify**: Field updates with custom value
5. Add more content
6. **Verify**: Reading time stays at "10 min read" (doesn't auto-update)
7. Click "Using Custom" again to toggle back to auto

---

## Test 6: Image Upload

### Drag & Drop

1. Prepare an image file (~100KB, JPEG/PNG)
2. In ImageUpload component, drag image onto drop zone
3. **Verify**: Upload progress shows
4. **Verify**: Preview appears with image thumbnail
5. **Verify**: Red X button appears in corner

### File Picker

1. Click upload zone or browse area
2. File picker opens
3. Select an image
4. **Verify**: Same upload/preview flow

### Validation

1. Try uploading file > 5MB
2. **Verify**: Error message: "File size must be less than 5MB"
3. Try uploading .txt file
4. **Verify**: Error message: "File type must be JPEG, PNG, GIF, or WebP"

### Remove Preview

1. After successful upload, click red X on preview
2. **Verify**: Preview image disappears
3. **Verify**: Upload zone reappears

---

## Test 7: Editor-Preview Parity

**Objective**: Admin preview renders identically to public blog

### Setup

1. Create blog post with rich markdown (use sampleMarkdown)
2. Toggle preview in admin editor
3. Publish the post
4. View published post

### Visual Comparison

Compare admin preview with public blog:

- [ ] Heading sizes match
- [ ] Text colors match (white headings, gray text)
- [ ] Code block styling matches (dark bg, syntax colors)
- [ ] List indentation matches
- [ ] Table styling matches (borders, colors)
- [ ] Blockquote styling matches (yellow left border)
- [ ] Link colors match (yellow)
- [ ] Image styling matches (rounded corners)
- [ ] Line spacing/margins match
- [ ] Font sizes match

---

## Test 8: Table of Contents (Public Blog)

### Auto-Generation

1. View published post with H2/H3 headings
2. **Verify**: TOC appears in right sidebar
3. **Verify**: Only H2 and H3 headings listed (H1/H4+ excluded)
4. **Verify**: H3 headings indented further than H2

### Active Highlighting

1. Scroll down the article
2. **Verify**: Current section heading highlighted in yellow in TOC
3. Scroll to different section
4. **Verify**: Highlight moves to new section

### Click Navigation

1. Click on TOC entry
2. **Verify**: Page smoothly scrolls to that section
3. **Verify**: Section heading is in view
4. Click another TOC entry
5. **Verify**: Navigation works throughout document

---

## Test 9: Existing Content

### Backward Compatibility

1. If you have existing blog posts:
2. View an existing post
3. **Verify**: Renders correctly with new renderer
4. **Verify**: No visual regressions
5. **Verify**: Heading styling matches new GFM posts

### Run Normalization (Optional)

```bash
npx tsx src/scripts/normalizeBlogPosts.ts
```

- [ ] Script completes without errors
- [ ] Reports number of posts normalized
- [ ] View a normalized post
- [ ] **Verify**: Formatting is correct

---

## Quick Check Markdown

Use this quick markdown for rapid testing:

```markdown
# Heading 1

## Heading 2

### Heading 3

**Bold text** and *italic text* and ~~strikethrough~~

- Bullet 1
- Bullet 2
  - Nested
  
1. Numbered 1
2. Numbered 2

- [x] Task done
- [ ] Task todo

> Quote text here

`inline code`

```javascript
console.log('hello');
```

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |

[Link text](https://example.com)

![Alt text](https://via.placeholder.com/200)
```

---

## Troubleshooting

### Build Fails with "unist-util-visit" not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Preview not updating
- Refresh browser (F5)
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)

### Code highlighting not working
- Ensure language is specified: `` ```javascript ``
- Check language name on [Shiki docs](https://shiki.dev/languages)
- Restart dev server

### Images not uploading
- Check browser console for errors (F12)
- Verify Supabase Storage bucket `portfolio/blog-images/` exists
- Check file size < 5MB
- Check file format (JPEG, PNG, GIF, WebP)

---

## Success Criteria

✅ All XSS payloads render as escaped text
✅ All GFM features render correctly
✅ Admin preview matches public blog visually
✅ Editor shortcuts all work
✅ Auto-save shows status indicator
✅ Slug validation works with async checks
✅ Images upload and preview correctly
✅ TOC auto-generates and highlights current section
✅ No console errors or warnings
✅ Reading time auto-calculates
✅ Word count updates in real-time

