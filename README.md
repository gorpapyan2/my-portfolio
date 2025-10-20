# Gor Papyan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features comprehensive localization support with a Supabase-backed translation management system.

## 🌟 Features

- **Multi-language Support**: English, Russian, and Armenian translations
- **Supabase Integration**: Database-backed translation management with fallback to static files
- **Admin Authentication**: Secure admin dashboard with Supabase Auth (email/password)
- **Content Management**: Full CRUD operations for all content types
- **Markdown Editor**: Rich text editing with markdown formatting, live preview, and keyboard shortcuts
- **Themed Code Highlighting**: Dual-theme syntax highlighting with line numbers, titles, diff markers, and copy buttons
- **Feature Flags**: Configurable content visibility and availability control
- **Translation Management**: Admin interface for managing translations with CRUD operations
- **Import/Export**: JSON-based translation import/export functionality
- **Validation**: Automatic detection of missing or empty translations
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Smooth animations with Framer Motion
- **Type Safety**: Full TypeScript support with strict typing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (optional, for database-backed translations)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gorpapyan2/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your Supabase credentials
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note**: If you don't provide environment variables, the application will use default values configured in `src/lib/config.ts`.

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration Management

### Centralized Configuration

All configuration is centralized in `src/lib/config.ts`:

- **Supabase credentials**: URL and anonymous key with environment variable support
- **Asset URLs**: CV download URL and portrait image URL
- **App metadata**: Application name, description, and contact information

### Environment Variables

The application supports the following environment variables (all optional):

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | Pre-configured |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Pre-configured |
| `VITE_CV_URL` | URL to CV PDF file | Supabase storage URL |
| `VITE_PORTRAIT_URL` | URL to portrait image | Supabase storage URL |

See `.env.example` for a complete template.

### Shared Utilities

- **`downloadCV()`** (`src/lib/utils/downloadCV.ts`): Reusable CV download function with blob handling and fallback support

## 🏗️ Architecture

### Service Layer Architecture

The application follows **Clean Architecture** principles with a **service layer pattern** that separates concerns and promotes reusability:

1. **Service Hooks** (`src/lib/services/`):
   - **Data Management**: 14 custom React hooks providing CRUD operations for all data domains
   - **Type Safety**: Full TypeScript support with auto-generated Supabase types
   - **Validation**: Zod schemas validate all inputs before database operations
   - **Optimistic Updates**: Immediate UI feedback with automatic rollback on errors
   - **Error Handling**: User-friendly error messages with detailed console logging
   - **Fallback Strategies**: Graceful degradation when services unavailable (e.g., translations)

   **Complete Service Hooks:**
   - `useBlogService` - Create/Read/Update/Delete blog posts (published content only)
   - `useProjectService` - Manage portfolio projects with featured/ordering support
   - `useTranslationService` - Multi-language translations with Supabase+static fallback
   - `useContactService` - Log contact form submissions (create-only for security)
   - `useExperienceService` - Professional experience entries with ordering
   - `useEducationService` - Educational background management
   - `useSkillService` - Technical skills with proficiency levels
   - `useFeatureFlagService` - Admin CRUD for feature toggles
   - `usePublicFeatureFlags` - Public read-only feature flag access with defaults
   - `useAuthService` - Session management and authentication
   - `useBlogAdminState` - Form state management for blog editing
   - `useImageUploadService` - Supabase Storage integration for images
   - `useMarkdownService` - GFM rendering with syntax highlighting
   - `useBlogAdminService` - Additional blog admin utilities

### Mid-Level QA Automation Specialist Positioning

This portfolio is designed to represent a **mid-level QA Automation Specialist** with a focus on:

#### Messaging Strategy
- **Outcome-focused**: "I help teams ship faster with fewer bugs" (not tool-centric)
- **Credible metrics**: Flaky rate ↓ ~70%, regression time ↓ ~40%, CI time improvements
- **Philosophy-driven**: Emphasis on deterministic testing, data isolation, and reliability
- **Business impact**: Results tied to real team needs (release confidence, developer trust)

#### Skills Display (Hybrid Approach)
- **Level Badges**: Advanced (80-100%), Intermediate (50-79%), Familiar (<50%)
- **Proficiency %**: Actual numeric proficiency level
- **Description**: Real-world proof of use for each skill
- **Example**: "Playwright (Advanced) — 92% — Built & maintained suites; parallelism/sharding; trace-on-fail"

#### Case Studies & Real-World Results
The portfolio includes 3 case study blog posts showcasing **Problem → Actions → Result → Stack** format:

1. **Stabilized UI E2E for a SaaS Web App**
   - Problem: Flaky test failures blocked releases
   - Actions: Data isolation, resilient waits, parallel execution
   - Result: Flaky rate ↓ 70%, CI time ↓ from 18min to 8min
   - Stack: Playwright (TS), AWS CodeBuild, PostgreSQL

2. **Deterministic E2E via Service Virtualization**
   - Problem: Upstream API flakiness made E2E brittle
   - Actions: Mountebank stubs, contract vs functional tests, trace collection
   - Result: CI stabilized, debugging time ↓ from 20min to 2min
   - Stack: Playwright, Mountebank, Postman

3. **Integration Tests for Enrichment Service**
   - Problem: Search enrichment service prone to regressions
   - Actions: Contract + functional tests, SQL seeding, error-focused reporting
   - Result: Regression escapes ↓ 80%, triage time ↓ from 15min to 3min
   - Stack: PyTest, PostgreSQL, AWS CodeBuild

**Seeding case studies:**
```bash
npm run seed:case-studies
```

#### Admin Access Control
- **Authentication**: Admin link only visible when logged in
- **Route Protection**: `/admin/dashboard` redirects unauthenticated users to `/admin/login`
- **RLS Policies**: Supabase Row-Level Security enforces admin-only write access
- **Email-based**: Admin email configured in RLS policies (`gorpapyan2@gmail.com`)

2. **Validation Layer** (`src/lib/schemas/`):
   - Runtime validation using Zod for type safety
   - Schemas for all data types: blogs, projects, translations, etc.
   - Partial schemas for update operations (optional fields)
   - Form-friendly error messages

3. **Database Layer**:
   - **Supabase Integration**: Typed `supabase-js` v2 client with full TypeScript support
   - **Typed Client**: Auto-generated `Database` type from migrations
   - **Row Level Security**: RLS policies enforce data access control
   - **Optimistic Updates**: Immediate state changes with server confirmation
   - **Performance**: Efficient queries with proper indexing and select specificity

### Service Hook Usage Pattern

Each service hook follows a consistent pattern for reliability and predictability:

```typescript
// Hook returns interface with typed state and operations
export interface ServiceName {
  data: DataType[];
  isLoading: boolean;
  error: string | null;
  createData: (item: DataInsert) => Promise<void>;
  updateData: (id: string, updates: DataUpdate) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

// Component usage
const { data, isLoading, error, createData, updateData, deleteData } = useServiceName();

// Loading state
if (isLoading) return <LoadingSpinner />;

// Error handling
if (error) return <ErrorDisplay message={error} />;

// Render with data
return <DataGrid items={data} onEdit={updateData} onDelete={deleteData} />;
```

### Error Handling Strategy

- **Validation Errors**: Zod parsing failures provide field-level feedback
- **Database Errors**: Supabase errors converted to user-friendly messages
- **Network Errors**: Graceful fallbacks with retry capability
- **Optimistic Rollback**: Failed operations automatically revert UI state
- **Console Logging**: Detailed errors logged for debugging

### Database Schema

**Tables:**
|- `translations` - Multi-language content with categories
|- `blog_posts` - Blog articles with publishing status
|- `projects` - Portfolio projects with tags and featured status
|- `contact_submissions` - Contact form submissions with status tracking
|- `experiences` - Professional experience entries with achievements
|- `education` - Educational background entries
|- `skills` - Technical skills with proficiency levels and icons
|- `feature_flags` - Content visibility and availability control flags

**RLS Policies:**
|- Public read access for published content
|- Admin-only write access (email-based authentication)
|- Public insert access for contact submissions

### Translation System

The application uses a hybrid translation system:

1. **Static Translations**: Default translations stored in `src/translations/` as TypeScript files
2. **Database Translations**: Supabase-backed translations for dynamic management
3. **Fallback Mechanism**: Automatic fallback to static translations if Supabase is unavailable

### Key Components

- **LanguageContext**: Centralized language state management with Supabase integration
- **AuthContext**: Authentication state management with session persistence
- **Service Hooks**: Typed CRUD operations with optimistic updates and Zod validation
- **Admin Dashboard**: Centralized interface for all content management (`/admin/dashboard`)
- **Protected Routes**: Authentication-based route protection
- **Settings Page**: Admin interface for translation management (`/settings`)
- **Admin Components**: BlogAdmin, ProjectAdmin, ExperienceAdmin, EducationAdmin, SkillsAdmin
- **Translation Manager**: CRUD interface with validation and import/export

### File Structure

```
├── components/           # Reusable UI components
│   ├── auth/            # Authentication components
│   └── admin/           # Admin-specific components
├── context/             # React contexts (Language, Theme, Auth)
├── lib/                 # Utilities and services
│   ├── services/        # Service hooks (useBlogService, useProjectService, etc.)
│   ├── schemas/         # Zod validation schemas
│   └── supabase.ts      # Supabase client configuration
├── pages/               # Page components
│   ├── AdminDashboard/  # Admin dashboard with all CRUD interfaces
│   ├── SettingsPage/    # Translation management interface
│   ├── BlogPage/        # Blog with BlogAdmin component
│   └── WorkPage/        # Projects with ProjectAdmin component
├── scripts/             # Utility scripts
│   ├── seedTranslations.ts  # Database seeding utilities
│   ├── seedBlogPosts.ts     # Blog posts seeding
│   ├── seedProjects.ts      # Projects seeding
│   ├── seedExperiences.ts   # Experience seeding
│   ├── seedEducation.ts     # Education seeding
│   └── seedSkills.ts        # Skills seeding
├── translations/        # Static translation files
│   ├── en.ts           # English translations
│   ├── ru.ts           # Russian translations
│   ├── am.ts           # Armenian translations
│   └── index.ts        # Translation exports
├── types/              # TypeScript type definitions
│   └── database.types.ts  # Supabase-generated types
├── utils/              # Utility functions
│   └── iconMap.ts      # Icon mapping for dynamic rendering
└── supabase/           # Database migrations
    └── migrations/     # Timestamped SQL migration files
```

## 🔐 Admin Authentication & Management

### Admin Dashboard Access

The portfolio includes a secure admin dashboard for managing all content. Access is restricted to authenticated users with admin privileges.

**Admin Routes:**
- `/admin/login` - Admin login page
- `/admin/dashboard` - Protected admin dashboard

### Authentication Setup

1. **Create Admin User**: 
   - Go to your Supabase project dashboard
   - Navigate to Authentication > Users
   - Create a new user with email `gorpapyan2@gmail.com` (or update the email in RLS policies)
   - Set a secure password

2. **Admin Dashboard Features**:
   - **Blog Management**: Create, edit, delete blog posts with markdown formatting
   - **Project Management**: Manage portfolio projects with tags and featured status
   - **Translation Management**: Full CRUD for all translations
   - **Experience Management**: Add/edit professional experience entries
   - **Education Management**: Manage educational background
   - **Skills Management**: Add/edit technical skills with proficiency levels
   - **Feature Flags**: Control content visibility and availability

3. **Security Features**:
   - Email/password authentication via Supabase Auth
   - Row Level Security (RLS) policies restrict admin operations to specific email
   - Session persistence with automatic logout
   - Protected routes redirect unauthenticated users to login

### Admin Navigation

When logged in as admin, you'll see an "Admin" link in the main navigation that takes you directly to the dashboard.

## 🚩 Feature Flags

### Overview

The portfolio includes a comprehensive feature flag system that allows you to control content visibility and availability across the site. This enables you to:

- Show/hide entire sections (Blog, Work/Projects)
- Control homepage content visibility (Featured Projects, Latest Articles)
- Manage content availability without code changes
- Test new features with gradual rollouts

### Available Feature Flags

The system comes with four pre-configured feature flags:

- **`blog_section`** - Controls visibility of the entire blog section
- **`work_section`** - Controls visibility of the entire work/projects section  
- **`featured_projects_section`** - Controls visibility of featured projects on homepage
- **`latest_articles_section`** - Controls visibility of latest articles on homepage

### Managing Feature Flags

1. **Access the Admin Dashboard**: Navigate to `/admin/dashboard` and log in
2. **Select Feature Flags**: Click on "Feature Flags" in the sidebar navigation
3. **Toggle Flags**: Use the toggle switches to enable/disable features instantly
4. **Create New Flags**: Click "Add Flag" to create custom feature flags
5. **Edit Existing Flags**: Click the edit icon to modify flag properties
6. **Delete Flags**: Remove flags you no longer need

### Feature Flag Properties

Each feature flag has the following properties:

- **Flag Key**: Unique identifier (e.g., `blog_section`)
- **Content Type**: `section`, `blog_post`, or `project`
- **Content ID**: Optional UUID for item-specific flags
- **Description**: Human-readable description of what the flag controls
- **Enabled**: Boolean toggle for the flag state

### How It Works

- **Public Pages**: Use `usePublicFeatureFlags()` hook to check flag states
- **Admin Dashboard**: Uses `useFeatureFlagService()` for full CRUD operations
- **Database**: Flags stored in `feature_flags` table with RLS policies
- **Navigation**: NavLinks and MobileMenu automatically hide/show based on flag states
- **Fallback**: Default values prevent site breakage if flags fail to load

### Seeding Feature Flags

To populate the database with initial feature flags:

```bash
npm run seed:flags
```

This will create the four default feature flags with `enabled: true` status.

## ✍️ Markdown Content Formatting

### Overview

The portfolio uses a modern **GitHub-Flavored Markdown (GFM)** pipeline powered by remark/rehype for professional, safe, and beautiful content rendering. All markdown is sanitized to prevent XSS attacks while supporting advanced formatting features.

### Supported Features

#### GitHub-Flavored Markdown (GFM)

All standard GFM features are supported:

- **Headings**: `# H1`, `## H2`, `### H3`, etc.
- **Text Formatting**: `**bold**`, `*italic*`, `~~strikethrough~~`
- **Lists**: Ordered and unordered lists with nesting
- **Task Lists**: `- [x] Completed` and `- [ ] Incomplete`
- **Tables**: Full table support with proper alignment
- **Code Blocks**: Syntax highlighting for 50+ languages
- **Inline Code**: `` `code` `` with proper escaping
- **Blockquotes**: `> quoted text` with styling
- **Links**: `[text](url)` with automatic target="_blank" for external links
- **Images**: `![alt text](url)` with lazy loading and responsive sizing
- **Footnotes**: Reference-style links and footnotes
- **Autolinks**: Automatic detection of URLs
- **Horizontal Rules**: `---` or `***`
- **Line Breaks**: Proper handling of hard and soft breaks

### Admin Editor Features

#### Split-Pane Editor

The admin blog editor offers a professional split-pane interface:

- **Left Pane**: Full-featured Markdown editor with toolbar
- **Right Pane**: Live preview using the exact same renderer as the public blog
- **Fullscreen Mode**: Expand preview to fullscreen for better visibility
- **Real-time Sync**: Preview updates instantly as you type

#### Keyboard Shortcuts

Quick formatting with keyboard shortcuts (works in editor):

| Shortcut | Action |
|----------|--------|
| Ctrl+B | Bold |
| Ctrl+I | Italic |
| Ctrl+H | Heading |
| Ctrl+K | Link |
| Ctrl+Shift+` | Code block |
| Ctrl+Shift+8 | Bullet list |
| Ctrl+Shift+7 | Numbered list |

#### Toolbar Buttons

Quick-format buttons for:
- Bold, Italic, Heading
- Bullet List, Numbered List
- Blockquote
- Code Block
- Link
- Image (uploads to Supabase Storage)

#### Smart Features

- **Word & Character Count**: Real-time display of content metrics
- **Reading Time**: Auto-calculated with option to override
- **Paste Cleanup**: Automatically converts rich-text to Markdown when pasting
- **Auto-Save**: Drafts saved to localStorage every 5 seconds
- **Draft Restore**: Option to restore a saved draft if differs from server

#### Slug Management

- **Auto-Generation**: Slug automatically generated from title
- **Manual Override**: Click on slug field to manually edit
- **Real-time Validation**: Async check for slug uniqueness
- **Format Validation**: Must be lowercase alphanumeric with hyphens

#### Image Upload

- **Drag & Drop**: Drag images directly into upload component
- **File Picker**: Click to browse and select images
- **Supported Formats**: JPEG, PNG, GIF, WebP (up to 5MB)
- **Automatic URL Insertion**: Upload returns public URL
- **Markdown Ready**: Images formatted as `![filename](url)` for easy insertion

### Writing Best Practices

1. **Use Descriptive Headings**: H1 for title, H2 for sections, H3 for subsections
2. **Line Length**: Keep lines under 80 characters for readability
3. **Code Blocks**: Always specify language for syntax highlighting:
   ```markdown
   ```javascript
   const greeting = "Hello, World!";
   ```
   ```
4. **Lists**: Use for step-by-step instructions and feature lists
5. **Blockquotes**: Highlight important notes and quotes
6. **Images**: Use descriptive alt text for accessibility
7. **Links**: Use descriptive link text instead of "click here"

### Rendering Features

#### Code Highlighting Features

**Dual-Theme Syntax Highlighting**

Code blocks automatically adapt to the site's theme:
- **Light Theme**: `github-light` for clean, bright code display
- **Dark Theme**: `github-dark-dimmed` for comfortable night reading
- **Auto-Sync**: Themes switch automatically when you toggle site theme

**Advanced Code Features**

1. **Code Titles**: Display filenames above code blocks
   ````markdown
   ```typescript title="src/utils/helper.ts"
   export const calculateSum = (a: number, b: number) => a + b;
   ```
   ````

2. **Line Highlighting**: Emphasize specific lines
   ````markdown
   ```javascript {2,4-6}
   function processData(data) {
     const validated = validateInput(data);  // highlighted
     
     if (!validated) {                        // highlighted
       throw new Error('Invalid input');      // highlighted
     }                                         // highlighted
     
     return transform(validated);
   }
   ```
   ````

3. **Diff Markers**: Show code changes
   ````markdown
   ```typescript
   function calculateTotal(items: Item[]) {
   - return items.reduce((sum, item) => sum + item.price, 0);
   + return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   }
   ```
   ````

4. **Line Numbers**: Automatically displayed for multi-line blocks
5. **Copy Button**: One-click code copying with visual feedback
6. **200+ Languages**: Full Shiki language support

**Styling Features**
- Rounded corners with subtle shadows
- Custom scrollbars matching theme
- Proper monospace font stack
- Responsive design for mobile
- Accessible with keyboard navigation

#### Public Blog Display

Features on the public blog view page:

- **GitHub-style Rendering**: Matches GitHub markdown appearance
- **Dual-Theme Syntax Highlighting**: Automatic light/dark code themes
- **Responsive Tables**: Tables scroll horizontally on mobile
- **Lazy-Loading Images**: Images load only when visible
- **Heading Anchors**: Headings link to themselves for sharing
- **Reading Progress**: Visual reading progress bar at top
- **Table of Contents**: Auto-generated sidebar from H2/H3 headings
- **Reading Time Display**: Estimated time to read the article
- **External Link Handling**: External links open in new tabs
- **Copy to Clipboard**: One-click copy for all code blocks

#### Typography

- **Beautiful Prose Styling**: Optimized for readability
- **Optimal Line Length**: ~70-80 characters per line
- **Proper Spacing**: Headings, paragraphs, and lists properly spaced
- **Dark Mode**: Full dark mode support with proper contrast
- **Interactive Code Blocks**: Hover to reveal copy button

### Examples

#### Markdown Example

```markdown
# Getting Started with React

React makes it painless to create interactive UIs.

## Why React?

1. **Component-Based**: Build encapsulated components
2. **Learn Once, Write Anywhere**: Flexible architecture

## Code Example

```javascript
import React from 'react';

function App() {
  return <h1>Hello, World!</h1>;
}
```

> React is not an MVC framework. It's a library for rendering views.

| Feature | Angular | Vue | React |
|---------|---------|-----|-------|
| Learning Curve | Steep | Moderate | Moderate |
| Community | Large | Growing | Very Large |
| Performance | Good | Excellent | Excellent |
```

### Migration from Legacy Markdown

All existing blog posts are compatible with the new renderer. You can optionally run the normalization script to clean up formatting:

```bash
npx tsx src/scripts/normalizeBlogPosts.ts
```

This script will:
- Convert Unicode bullets to standard Markdown
- Normalize line endings
- Ensure proper heading syntax
- Collapse multiple spaces
- Recalculate reading times

### Troubleshooting

**Images not showing?**
- Ensure image URL is publicly accessible
- Check file format (JPEG, PNG, GIF, WebP supported)
- Images must be under 5MB

**Code highlighting not working?**
- Specify language in code fence: `` ```javascript ``
- Check language name against [Shiki supported languages](https://shiki.dev/languages)

**Slug validation error?**
- Slug must be lowercase alphanumeric with hyphens
- Slug must not already exist in database
- Try a different variation

## 🌐 Translation Management

### Accessing the Settings Page

Navigate to `/settings` to access the translation management interface. The Settings link is available in the navigation menu.

### Features

1. **Language Selection**: Switch between languages to edit translations
2. **Search & Filter**: Find translations by key, value, or category
3. **CRUD Operations**: Add, edit, and delete translation keys
4. **Import/Export**: 
   - Export all translations to JSON
   - Import translations from JSON files
   - Download template for new translations
5. **Validation**: Check for missing or empty translations

### Adding New Translations

1. Go to `/settings`
2. Select the language you want to edit
3. Click "Add Translation"
4. Fill in the key, value, and category
5. Save the translation

### Translation Key Structure

Translation keys follow a hierarchical structure:
- `nav.*` - Navigation items
- `pages.*` - Page titles and subtitles
- `about.*` - About page content
- `skills.*` - Skills section
- `contact.*` - Contact form and info
- `settings.*` - Settings page interface

### Import/Export Format

```json
{
  "en": {
    "nav.about": "About",
    "pages.home.title": "Home"
  },
  "ru": {
    "nav.about": "О себе",
    "pages.home.title": "Главная"
  },
  "am": {
    "nav.about": "Իմ մասին",
    "pages.home.title": "Գլխավոր"
  }
}
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run seed:experiences` - Seed experiences to Supabase
- `npm run seed:education` - Seed education to Supabase
- `npm run seed:skills` - Seed skills to Supabase
- `npm run seed:flags` - Seed feature flags to Supabase
- `npm run seed:about` - Seed all about content to Supabase
- `npm run seed:all` - Seed all data to Supabase

### Database Setup (Optional)

If you want to use Supabase for translation management:

1. Create a Supabase project
2. Run the migration to create the translations table:
```sql
-- See src/scripts/seedTranslations.ts for the complete migration
CREATE TABLE translations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('en', 'ru', 'am')),
  value TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'common',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(key, language)
);
```

3. Set up RLS policies for public read access
4. Seed the database with existing translations using the utility script

### Adding New Languages

1. Add the language code to the `Language` type in `src/context/LanguageContext.tsx`
2. Create a new translation file in `src/translations/`
3. Update the translations object in `src/translations/index.ts`
4. Add the language option to the settings page language selector

## 🚀 Deployment

The application is configured for GitHub Pages deployment:

```bash
npm run build
npm run deploy
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact

- Email: gorpapyan2@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@gorpapyan2](https://github.com/gorpapyan2)