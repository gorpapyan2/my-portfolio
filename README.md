# Gor Papyan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features comprehensive localization support with a Supabase-backed translation management system.

## 🌟 Features

- **Multi-language Support**: English, Russian, and Armenian translations
- **Supabase Integration**: Database-backed translation management with fallback to static files
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
# Create .env.local file
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Architecture

### Service Layer Architecture

The application follows Clean Architecture principles with a service layer pattern:

1. **Service Hooks** (`src/lib/services/`):
   - `useTranslationService` - CRUD operations for translations with Zod validation
   - `useBlogService` - CRUD operations for blog posts with optimistic updates
   - `useProjectService` - CRUD operations for projects with optimistic updates
   - `useContactService` - Create-only operations for contact submissions

2. **Validation Layer** (`src/lib/schemas/`):
   - Zod schemas for runtime validation of all data operations
   - Type-safe form validation with user-friendly error messages

3. **Database Layer**:
   - Supabase MCP integration with typed `supabase-js` v2 client
   - Row Level Security (RLS) policies for data access control
   - Optimistic UI updates with automatic rollback on errors

### Database Schema

**Tables:**
- `translations` - Multi-language content with categories
- `blog_posts` - Blog articles with publishing status
- `projects` - Portfolio projects with tags and featured status
- `contact_submissions` - Contact form submissions with status tracking

**RLS Policies:**
- Public read access for published content
- Authenticated write access for admin operations
- Public insert access for contact submissions

### Translation System

The application uses a hybrid translation system:

1. **Static Translations**: Default translations stored in `src/translations/` as TypeScript files
2. **Database Translations**: Supabase-backed translations for dynamic management
3. **Fallback Mechanism**: Automatic fallback to static translations if Supabase is unavailable

### Key Components

- **LanguageContext**: Centralized language state management with Supabase integration
- **Service Hooks**: Typed CRUD operations with optimistic updates and Zod validation
- **Settings Page**: Admin interface for translation management (`/settings`)
- **Admin Components**: BlogAdmin and ProjectAdmin for content management
- **Translation Manager**: CRUD interface with validation and import/export

### File Structure

```
src/
├── components/           # Reusable UI components
├── context/             # React contexts (Language, Theme, Loading)
├── lib/                 # Utilities and services
│   ├── services/        # Service hooks (useBlogService, useProjectService, etc.)
│   ├── schemas/         # Zod validation schemas
│   └── supabase.ts      # Supabase client configuration
├── pages/               # Page components
│   ├── SettingsPage/    # Translation management interface
│   ├── BlogPage/        # Blog with BlogAdmin component
│   └── WorkPage/        # Projects with ProjectAdmin component
├── scripts/             # Utility scripts
│   ├── seedTranslations.ts  # Database seeding utilities
│   ├── seedBlogPosts.ts     # Blog posts seeding
│   └── seedProjects.ts      # Projects seeding
├── translations/        # Static translation files
│   ├── en.ts           # English translations
│   ├── ru.ts           # Russian translations
│   ├── am.ts           # Armenian translations
│   └── index.ts        # Translation exports
├── types/              # TypeScript type definitions
│   └── database.types.ts  # Supabase-generated types
└── supabase/           # Database migrations
    └── migrations/     # Timestamped SQL migration files
```

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
- `npm run seed:translations` - Seed translations to Supabase
- `npm run seed:blog` - Seed blog posts to Supabase
- `npm run seed:projects` - Seed projects to Supabase
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