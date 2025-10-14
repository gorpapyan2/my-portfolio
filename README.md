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

### Translation System

The application uses a hybrid translation system:

1. **Static Translations**: Default translations stored in `src/translations/` as TypeScript files
2. **Database Translations**: Supabase-backed translations for dynamic management
3. **Fallback Mechanism**: Automatic fallback to static translations if Supabase is unavailable

### Key Components

- **LanguageContext**: Centralized language state management
- **useTranslationService**: Hook for Supabase translation operations
- **Settings Page**: Admin interface for translation management (`/settings`)
- **Translation Manager**: CRUD interface with validation and import/export

### File Structure

```
src/
├── components/           # Reusable UI components
├── context/             # React contexts (Language, Theme)
├── lib/                 # Utilities and services
│   ├── services/        # Translation service hooks
│   └── supabase.ts      # Supabase client configuration
├── pages/               # Page components
│   └── SettingsPage/    # Translation management interface
├── scripts/             # Utility scripts
│   └── seedTranslations.ts  # Database seeding utilities
├── translations/        # Static translation files
│   ├── en.ts           # English translations
│   ├── ru.ts           # Russian translations
│   ├── am.ts           # Armenian translations
│   └── index.ts        # Translation exports
└── types/              # TypeScript type definitions
    └── database.types.ts  # Supabase-generated types
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