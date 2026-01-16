-- Migration: Add Russian (ru) and Armenian (am) translations for 172 missing keys
-- Date: 2026-01-16
-- Total translations: 344 (172 keys × 2 languages)

BEGIN;

-- ============================================================================
-- BLOG ADMINISTRATION (55 keys)
-- ============================================================================

-- Blog: Basic Actions
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.addNew', 'ru', 'Добавить новый', 'admin'),
('admin.blog.addNew', 'am', 'Ավելացնել նորը', 'admin'),
('admin.blog.createPost', 'ru', 'Создать запись', 'admin'),
('admin.blog.createPost', 'am', 'Ստեղծել գրառում', 'admin'),
('admin.blog.editPost', 'ru', 'Редактировать запись', 'admin'),
('admin.blog.editPost', 'am', 'Խմբագրել գրառումը', 'admin'),
('admin.blog.updatePost', 'ru', 'Обновить запись', 'admin'),
('admin.blog.updatePost', 'am', 'Թարմացնել գրառումը', 'admin'),
('admin.blog.deletePost', 'ru', 'Удалить запись', 'admin'),
('admin.blog.deletePost', 'am', 'Ջնջել գրառումը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Titles and Headings
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.postsTitle', 'ru', 'Записи блога', 'admin'),
('admin.blog.postsTitle', 'am', 'Բլոգի գրառումներ', 'admin'),
('admin.blog.createPostTitle', 'ru', 'Создать новую запись', 'admin'),
('admin.blog.createPostTitle', 'am', 'Ստեղծել նոր գրառում', 'admin'),
('admin.blog.createPostSubtitle', 'ru', 'Добавьте новую запись в блог', 'admin'),
('admin.blog.createPostSubtitle', 'am', 'Ավելացրեք նոր գրառում բլոգում', 'admin'),
('admin.blog.editPostTitle', 'ru', 'Редактировать запись', 'admin'),
('admin.blog.editPostTitle', 'am', 'Խմբագրել գրառումը', 'admin'),
('admin.blog.editPostSubtitle', 'ru', 'Обновите информацию о записи', 'admin'),
('admin.blog.editPostSubtitle', 'am', 'Թարմացրեք գրառման տեղեկությունները', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Section Titles
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.basicInformation', 'ru', 'Основная информация', 'admin'),
('admin.blog.basicInformation', 'am', 'Հիմնական տեղեկություններ', 'admin'),
('admin.blog.contentSectionTitle', 'ru', 'Содержание', 'admin'),
('admin.blog.contentSectionTitle', 'am', 'Բովանդակություն', 'admin'),
('admin.blog.mediaSettingsSectionTitle', 'ru', 'Медиа настройки', 'admin'),
('admin.blog.mediaSettingsSectionTitle', 'am', 'Մեդիա կարգավորումներ', 'admin'),
('admin.blog.publicationStatus', 'ru', 'Статус публикации', 'admin'),
('admin.blog.publicationStatus', 'am', 'Հրապարակման կարգավիճակ', 'admin'),
('admin.blog.mediaSettings', 'ru', 'Медиа настройки', 'admin'),
('admin.blog.mediaSettings', 'am', 'Մեդիա կարգավորումներ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.title', 'ru', 'Заголовок', 'admin'),
('admin.blog.title', 'am', 'Վերնագիր', 'admin'),
('admin.blog.titleLabel', 'ru', 'Заголовок записи', 'admin'),
('admin.blog.titleLabel', 'am', 'Գրառման վերնագիր', 'admin'),
('admin.blog.titlePlaceholder', 'ru', 'Введите заголовок записи...', 'admin'),
('admin.blog.titlePlaceholder', 'am', 'Մուտքագրեք գրառման վերնագիրը...', 'admin'),
('admin.blog.subtitle', 'ru', 'Подзаголовок', 'admin'),
('admin.blog.subtitle', 'am', 'Ենթավերնագիր', 'admin'),
('admin.blog.excerpt', 'ru', 'Краткое описание', 'admin'),
('admin.blog.excerpt', 'am', 'Հակիրճ նկարագրություն', 'admin'),
('admin.blog.excerptPlaceholder', 'ru', 'Введите краткое описание записи...', 'admin'),
('admin.blog.excerptPlaceholder', 'am', 'Մուտքագրեք գրառման հակիրճ նկարագրությունը...', 'admin'),
('admin.blog.content', 'ru', 'Содержание', 'admin'),
('admin.blog.content', 'am', 'Բովանդակություն', 'admin'),
('admin.blog.contentPlaceholder', 'ru', 'Напишите содержание вашей записи...', 'admin'),
('admin.blog.contentPlaceholder', 'am', 'Գրեք ձեր գրառման բովանդակությունը...', 'admin'),
('admin.blog.featuredImage', 'ru', 'Главное изображение', 'admin'),
('admin.blog.featuredImage', 'am', 'Գլխավոր նկար', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Slug Management
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.slug', 'ru', 'URL-адрес', 'admin'),
('admin.blog.slug', 'am', 'URL հասցե', 'admin'),
('admin.blog.slugLabel', 'ru', 'URL-адрес записи', 'admin'),
('admin.blog.slugLabel', 'am', 'Գրառման URL հասցե', 'admin'),
('admin.blog.slugPlaceholder', 'ru', 'url-адрес-записи', 'admin'),
('admin.blog.slugPlaceholder', 'am', 'url-hasce-grarumi', 'admin'),
('admin.blog.slugAvailable', 'ru', 'URL-адрес доступен', 'admin'),
('admin.blog.slugAvailable', 'am', 'URL հասցեն հասանելի է', 'admin'),
('admin.blog.slugExists', 'ru', 'URL-адрес уже используется', 'admin'),
('admin.blog.slugExists', 'am', 'URL հասցեն արդեն օգտագործվում է', 'admin'),
('admin.blog.slugRequired', 'ru', 'URL-адрес обязателен', 'admin'),
('admin.blog.slugRequired', 'am', 'URL հասցեն պարտադիր է', 'admin'),
('admin.blog.slugFormatError', 'ru', 'Неверный формат URL-адреса', 'admin'),
('admin.blog.slugFormatError', 'am', 'Սխալ URL հասցեի ձևաչափ', 'admin'),
('admin.blog.slugValidationError', 'ru', 'Ошибка валидации URL-адреса', 'admin'),
('admin.blog.slugValidationError', 'am', 'URL հասցեի վավերացման սխալ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Reading Time
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.readingTime', 'ru', 'Время чтения', 'admin'),
('admin.blog.readingTime', 'am', 'Ընթերցման ժամանակ', 'admin'),
('admin.blog.readTime', 'ru', 'Время чтения', 'admin'),
('admin.blog.readTime', 'am', 'Ընթերցման ժամանակ', 'admin'),
('admin.blog.readTimeLabel', 'ru', 'Время чтения (минуты)', 'admin'),
('admin.blog.readTimeLabel', 'am', 'Ընթերցման ժամանակ (րոպե)', 'admin'),
('admin.blog.readTimePlaceholder', 'ru', 'Введите время чтения...', 'admin'),
('admin.blog.readTimePlaceholder', 'am', 'Մուտքագրեք ընթերցման ժամանակը...', 'admin'),
('admin.blog.readTimeAutoOverride', 'ru', 'Автоматический расчет переопределен', 'admin'),
('admin.blog.readTimeAutoOverride', 'am', 'Ավտոմատ հաշվարկը վերագրված է', 'admin'),
('admin.blog.readTimeUsingCustom', 'ru', 'Используется пользовательское значение', 'admin'),
('admin.blog.readTimeUsingCustom', 'am', 'Օգտագործվում է հատուկ արժեք', 'admin'),
('admin.blog.usingCustom', 'ru', 'Пользовательское', 'admin'),
('admin.blog.usingCustom', 'am', 'Հատուկ', 'admin'),
('admin.blog.autoClickOverride', 'ru', 'Нажмите для переопределения', 'admin'),
('admin.blog.autoClickOverride', 'am', 'Սեղմեք վերագրելու համար', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Status and Metadata
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.draft', 'ru', 'Черновик', 'admin'),
('admin.blog.draft', 'am', 'Սևագիր', 'admin'),
('admin.blog.public', 'ru', 'Публичная', 'admin'),
('admin.blog.public', 'am', 'Հրապարակային', 'admin'),
('admin.blog.published', 'ru', 'Опубликовано', 'admin'),
('admin.blog.published', 'am', 'Հրապարակված', 'admin'),
('admin.blog.publishImmediately', 'ru', 'Опубликовать немедленно', 'admin'),
('admin.blog.publishImmediately', 'am', 'Հրապարակել անմիջապես', 'admin'),
('admin.blog.created', 'ru', 'Создано', 'admin'),
('admin.blog.created', 'am', 'Ստեղծված է', 'admin'),
('admin.blog.createdOn', 'ru', 'Создано', 'admin'),
('admin.blog.createdOn', 'am', 'Ստեղծված է', 'admin'),
('admin.blog.lastUpdated', 'ru', 'Последнее обновление', 'admin'),
('admin.blog.lastUpdated', 'am', 'Վերջին թարմացում', 'admin'),
('admin.blog.saved', 'ru', 'Сохранено', 'admin'),
('admin.blog.saved', 'am', 'Պահպանված է', 'admin'),
('admin.blog.savedAt', 'ru', 'Сохранено в', 'admin'),
('admin.blog.savedAt', 'am', 'Պահպանված է', 'admin'),
('admin.blog.saving', 'ru', 'Сохранение...', 'admin'),
('admin.blog.saving', 'am', 'Պահպանվում է...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Content Statistics
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.words', 'ru', 'слов', 'admin'),
('admin.blog.words', 'am', 'բառ', 'admin'),
('admin.blog.characters', 'ru', 'символов', 'admin'),
('admin.blog.characters', 'am', 'նիշ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Blog: Empty States
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.blog.noPosts', 'ru', 'Нет записей', 'admin'),
('admin.blog.noPosts', 'am', 'Գրառումներ չկան', 'admin'),
('admin.blog.createFirst', 'ru', 'Создайте свою первую запись', 'admin'),
('admin.blog.createFirst', 'am', 'Ստեղծեք ձեր առաջին գրառումը', 'admin'),
('admin.blog.getStarted', 'ru', 'Начать', 'admin'),
('admin.blog.getStarted', 'am', 'Սկսել', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- CONFIRMATION DIALOGS (5 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.confirm.deleteEducation', 'ru', 'Вы уверены, что хотите удалить эту запись об образовании?', 'admin'),
('admin.confirm.deleteEducation', 'am', 'Համոզված ե՞ք, որ ցանկանում եք ջնջել այս կրթական գրառումը:', 'admin'),
('admin.confirm.deleteExperience', 'ru', 'Вы уверены, что хотите удалить этот опыт работы?', 'admin'),
('admin.confirm.deleteExperience', 'am', 'Համոզված ե՞ք, որ ցանկանում եք ջնջել այս աշխատանքային փորձը:', 'admin'),
('admin.confirm.deleteProject', 'ru', 'Вы уверены, что хотите удалить этот проект?', 'admin'),
('admin.confirm.deleteProject', 'am', 'Համոզված ե՞ք, որ ցանկանում եք ջնջել այս նախագիծը:', 'admin'),
('admin.confirm.deleteSkill', 'ru', 'Вы уверены, что хотите удалить этот навык?', 'admin'),
('admin.confirm.deleteSkill', 'am', 'Համոզված ե՞ք, որ ցանկանում եք ջնջել այս հմտությունը:', 'admin'),
('admin.confirm.deleteTranslation', 'ru', 'Вы уверены, что хотите удалить этот перевод?', 'admin'),
('admin.confirm.deleteTranslation', 'am', 'Համոզված ե՞ք, որ ցանկանում եք ջնջել այս թարգմանությունը:', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- DASHBOARD (10 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.dashboard.title', 'ru', 'Панель управления', 'admin'),
('admin.dashboard.title', 'am', 'Կառավարման վահանակ', 'admin'),
('admin.dashboard.welcomeBack', 'ru', 'С возвращением', 'admin'),
('admin.dashboard.welcomeBack', 'am', 'Բարի վերադարձ', 'admin'),
('admin.dashboard.contentManagement', 'ru', 'Управление контентом', 'admin'),
('admin.dashboard.contentManagement', 'am', 'Բովանդակության կառավարում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Dashboard Sections
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.dashboard.section.blog', 'ru', 'Блог', 'admin'),
('admin.dashboard.section.blog', 'am', 'Բլոգ', 'admin'),
('admin.dashboard.section.education', 'ru', 'Образование', 'admin'),
('admin.dashboard.section.education', 'am', 'Կրթություն', 'admin'),
('admin.dashboard.section.experiences', 'ru', 'Опыт работы', 'admin'),
('admin.dashboard.section.experiences', 'am', 'Աշխատանքային փորձ', 'admin'),
('admin.dashboard.section.featureFlags', 'ru', 'Флаги функций', 'admin'),
('admin.dashboard.section.featureFlags', 'am', 'Գործառույթների դրոշներ', 'admin'),
('admin.dashboard.section.projects', 'ru', 'Проекты', 'admin'),
('admin.dashboard.section.projects', 'am', 'Նախագծեր', 'admin'),
('admin.dashboard.section.skills', 'ru', 'Навыки', 'admin'),
('admin.dashboard.section.skills', 'am', 'Հմտություններ', 'admin'),
('admin.dashboard.section.translations', 'ru', 'Переводы', 'admin'),
('admin.dashboard.section.translations', 'am', 'Թարգմանություններ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EDUCATION MANAGEMENT (12 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.title', 'ru', 'Образование', 'admin'),
('admin.education.title', 'am', 'Կրթություն', 'admin'),
('admin.education.titleCount', 'ru', 'записей об образовании', 'admin'),
('admin.education.titleCount', 'am', 'կրթական գրառում', 'admin'),
('admin.education.addEducation', 'ru', 'Добавить образование', 'admin'),
('admin.education.addEducation', 'am', 'Ավելացնել կրթություն', 'admin'),
('admin.education.createEducation', 'ru', 'Создать запись об образовании', 'admin'),
('admin.education.createEducation', 'am', 'Ստեղծել կրթական գրառում', 'admin'),
('admin.education.updateEducation', 'ru', 'Обновить образование', 'admin'),
('admin.education.updateEducation', 'am', 'Թարմացնել կրթությունը', 'admin'),
('admin.education.additionalDetails', 'ru', 'Дополнительные детали', 'admin'),
('admin.education.additionalDetails', 'am', 'Լրացուցիչ մանրամասներ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Education Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.education.degree', 'ru', 'Степень', 'admin'),
('admin.education.degree', 'am', 'Աստիճան', 'admin'),
('admin.education.degreePlaceholder', 'ru', 'Введите степень...', 'admin'),
('admin.education.degreePlaceholder', 'am', 'Մուտքագրեք աստիճանը...', 'admin'),
('admin.education.school', 'ru', 'Учебное заведение', 'admin'),
('admin.education.school', 'am', 'Ուսումնական հաստատություն', 'admin'),
('admin.education.schoolPlaceholder', 'ru', 'Введите учебное заведение...', 'admin'),
('admin.education.schoolPlaceholder', 'am', 'Մուտքագրեք ուսումնական հաստատությունը...', 'admin'),
('admin.education.year', 'ru', 'Год', 'admin'),
('admin.education.year', 'am', 'Տարի', 'admin'),
('admin.education.yearPlaceholder', 'ru', 'Введите год...', 'admin'),
('admin.education.yearPlaceholder', 'am', 'Մուտքագրեք տարին...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- ERROR MESSAGES (3 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.error.deleteFailed', 'ru', 'Не удалось удалить', 'admin'),
('admin.error.deleteFailed', 'am', 'Ջնջումը ձախողվեց', 'admin'),
('admin.error.importFailed', 'ru', 'Не удалось импортировать', 'admin'),
('admin.error.importFailed', 'am', 'Ներմուծումը ձախողվեց', 'admin'),
('admin.error.saveFailed', 'ru', 'Не удалось сохранить', 'admin'),
('admin.error.saveFailed', 'am', 'Պահպանումը ձախողվեց', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- EXPERIENCE MANAGEMENT (14 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.title', 'ru', 'Опыт работы', 'admin'),
('admin.experience.title', 'am', 'Աշխատանքային փորձ', 'admin'),
('admin.experience.titleCount', 'ru', 'опыта работы', 'admin'),
('admin.experience.titleCount', 'am', 'աշխատանքային փորձ', 'admin'),
('admin.experience.addExperience', 'ru', 'Добавить опыт работы', 'admin'),
('admin.experience.addExperience', 'am', 'Ավելացնել աշխատանքային փորձ', 'admin'),
('admin.experience.createExperience', 'ru', 'Создать опыт работы', 'admin'),
('admin.experience.createExperience', 'am', 'Ստեղծել աշխատանքային փորձ', 'admin'),
('admin.experience.updateExperience', 'ru', 'Обновить опыт работы', 'admin'),
('admin.experience.updateExperience', 'am', 'Թարմացնել աշխատանքային փորձը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Experience Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.role', 'ru', 'Должность', 'admin'),
('admin.experience.role', 'am', 'Պաշտոն', 'admin'),
('admin.experience.company', 'ru', 'Компания', 'admin'),
('admin.experience.company', 'am', 'Ընկերություն', 'admin'),
('admin.experience.period', 'ru', 'Период', 'admin'),
('admin.experience.period', 'am', 'Ժամանակահատված', 'admin'),
('admin.experience.periodPlaceholder', 'ru', 'Например: 2020 - 2023', 'admin'),
('admin.experience.periodPlaceholder', 'am', 'Օրինակ՝ 2020 - 2023', 'admin'),
('admin.experience.achievements', 'ru', 'Достижения', 'admin'),
('admin.experience.achievements', 'am', 'Ձեռքբերումներ', 'admin'),
('admin.experience.addAchievement', 'ru', 'Добавить достижение', 'admin'),
('admin.experience.addAchievement', 'am', 'Ավելացնել ձեռքբերում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Experience Labels
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.experience.atLabel', 'ru', 'в', 'admin'),
('admin.experience.atLabel', 'am', '-ում', 'admin'),
('admin.experience.createdLabel', 'ru', 'Создано', 'admin'),
('admin.experience.createdLabel', 'am', 'Ստեղծված է', 'admin'),
('admin.experience.orderLabel', 'ru', 'Порядок', 'admin'),
('admin.experience.orderLabel', 'am', 'Հերթականություն', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FEATURE FLAGS (26 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.title', 'ru', 'Флаги функций', 'admin'),
('admin.featureFlags.title', 'am', 'Գործառույթների դրոշներ', 'admin'),
('admin.featureFlags.subtitle', 'ru', 'Управляйте функциями и экспериментами', 'admin'),
('admin.featureFlags.subtitle', 'am', 'Կառավարեք գործառույթները և փորձերը', 'admin'),
('admin.featureFlags.create', 'ru', 'Создать флаг', 'admin'),
('admin.featureFlags.create', 'am', 'Ստեղծել դրոշ', 'admin'),
('admin.featureFlags.edit', 'ru', 'Редактировать', 'admin'),
('admin.featureFlags.edit', 'am', 'Խմբագրել', 'admin'),
('admin.featureFlags.delete', 'ru', 'Удалить', 'admin'),
('admin.featureFlags.delete', 'am', 'Ջնջել', 'admin'),
('admin.featureFlags.enabled', 'ru', 'Включено', 'admin'),
('admin.featureFlags.enabled', 'am', 'Միացված է', 'admin'),
('admin.featureFlags.disabled', 'ru', 'Отключено', 'admin'),
('admin.featureFlags.disabled', 'am', 'Անջատված է', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Feature Flags: Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.flagKey', 'ru', 'Ключ флага', 'admin'),
('admin.featureFlags.flagKey', 'am', 'Դրոշի բանալի', 'admin'),
('admin.featureFlags.flagKeyPlaceholder', 'ru', 'Введите уникальный ключ...', 'admin'),
('admin.featureFlags.flagKeyPlaceholder', 'am', 'Մուտքագրեք եզակի բանալին...', 'admin'),
('admin.featureFlags.contentType', 'ru', 'Тип контента', 'admin'),
('admin.featureFlags.contentType', 'am', 'Բովանդակության տեսակ', 'admin'),
('admin.featureFlags.contentId', 'ru', 'ID контента', 'admin'),
('admin.featureFlags.contentId', 'am', 'Բովանդակության ID', 'admin'),
('admin.featureFlags.contentIdPlaceholder', 'ru', 'Введите ID контента...', 'admin'),
('admin.featureFlags.contentIdPlaceholder', 'am', 'Մուտքագրեք բովանդակության ID-ն...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Feature Flags: Search and Filters
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.searchPlaceholder', 'ru', 'Поиск флагов...', 'admin'),
('admin.featureFlags.searchPlaceholder', 'am', 'Փնտրել դրոշները...', 'admin'),
('admin.featureFlags.noFlagsFound', 'ru', 'Флаги не найдены', 'admin'),
('admin.featureFlags.noFlagsFound', 'am', 'Դրոշներ չեն գտնվել', 'admin'),
('admin.featureFlags.filter.all', 'ru', 'Все', 'admin'),
('admin.featureFlags.filter.all', 'am', 'Բոլորը', 'admin'),
('admin.featureFlags.filter.sections', 'ru', 'Разделы', 'admin'),
('admin.featureFlags.filter.sections', 'am', 'Բաժիններ', 'admin'),
('admin.featureFlags.filter.blogPosts', 'ru', 'Записи блога', 'admin'),
('admin.featureFlags.filter.blogPosts', 'am', 'Բլոգի գրառումներ', 'admin'),
('admin.featureFlags.filter.projects', 'ru', 'Проекты', 'admin'),
('admin.featureFlags.filter.projects', 'am', 'Նախագծեր', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Feature Flags: Table Headers
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.featureFlags.table.flagKey', 'ru', 'Ключ флага', 'admin'),
('admin.featureFlags.table.flagKey', 'am', 'Դրոշի բանալի', 'admin'),
('admin.featureFlags.table.description', 'ru', 'Описание', 'admin'),
('admin.featureFlags.table.description', 'am', 'Նկարագրություն', 'admin'),
('admin.featureFlags.table.type', 'ru', 'Тип', 'admin'),
('admin.featureFlags.table.type', 'am', 'Տեսակ', 'admin'),
('admin.featureFlags.table.status', 'ru', 'Статус', 'admin'),
('admin.featureFlags.table.status', 'am', 'Կարգավիճակ', 'admin'),
('admin.featureFlags.table.actions', 'ru', 'Действия', 'admin'),
('admin.featureFlags.table.actions', 'am', 'Գործողություններ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- FORM PLACEHOLDERS (2 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.form.placeholder.describeFlagControl', 'ru', 'Опишите, что контролирует этот флаг...', 'admin'),
('admin.form.placeholder.describeFlagControl', 'am', 'Նկարագրեք, թե ինչ է վերահսկում այս դրոշը...', 'admin'),
('admin.form.placeholder.enterTranslation', 'ru', 'Введите перевод...', 'admin'),
('admin.form.placeholder.enterTranslation', 'am', 'Մուտքագրեք թարգմանությունը...', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- IMAGE UPLOAD (5 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.imageUpload.dragDrop', 'ru', 'Перетащите изображение сюда', 'admin'),
('admin.imageUpload.dragDrop', 'am', 'Քաշեք նկարը այստեղ', 'admin'),
('admin.imageUpload.uploadInfo', 'ru', 'или нажмите для выбора файла', 'admin'),
('admin.imageUpload.uploadInfo', 'am', 'կամ սեղմեք ֆայլ ընտրելու համար', 'admin'),
('admin.imageUpload.fileTypes', 'ru', 'PNG, JPG, GIF до 10МБ', 'admin'),
('admin.imageUpload.fileTypes', 'am', 'PNG, JPG, GIF մինչև 10ՄԲ', 'admin'),
('admin.imageUpload.uploading', 'ru', 'Загрузка...', 'admin'),
('admin.imageUpload.uploading', 'am', 'Վերբեռնվում է...', 'admin'),
('admin.imageUpload.removePreview', 'ru', 'Удалить изображение', 'admin'),
('admin.imageUpload.removePreview', 'am', 'Ջնջել նկարը', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- MARKDOWN EDITOR (9 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.markdown.help.markdownSyntax', 'ru', 'Синтаксис Markdown', 'admin'),
('admin.markdown.help.markdownSyntax', 'am', 'Markdown շարահյուսություն', 'admin'),
('admin.markdown.help.keyboardShortcuts', 'ru', 'Горячие клавиши', 'admin'),
('admin.markdown.help.keyboardShortcuts', 'am', 'Ստեղնաշարի կարճատներ', 'admin'),
('admin.markdown.help.textSize', 'ru', 'Размер текста', 'admin'),
('admin.markdown.help.textSize', 'am', 'Տեքստի չափը', 'admin'),
('admin.markdown.help.imageUpload', 'ru', 'Загрузка изображений', 'admin'),
('admin.markdown.help.imageUpload', 'am', 'Նկարների վերբեռնում', 'admin'),
('admin.markdown.togglePreview', 'ru', 'Переключить предпросмотр', 'admin'),
('admin.markdown.togglePreview', 'am', 'Փոխել նախադիտումը', 'admin'),
('admin.markdown.toggleFullscreen', 'ru', 'Полноэкранный режим', 'admin'),
('admin.markdown.toggleFullscreen', 'am', 'Լիաէկրան ռեժիմ', 'admin'),
('admin.markdown.increaseTextSize', 'ru', 'Увеличить размер текста', 'admin'),
('admin.markdown.increaseTextSize', 'am', 'Մեծացնել տեքստի չափը', 'admin'),
('admin.markdown.decreaseTextSize', 'ru', 'Уменьшить размер текста', 'admin'),
('admin.markdown.decreaseTextSize', 'am', 'Փոքրացնել տեքստի չափը', 'admin'),
('admin.markdown.copyShortcuts', 'ru', 'Скопировать команды', 'admin'),
('admin.markdown.copyShortcuts', 'am', 'Պատճենել հրամանները', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- PROJECTS MANAGEMENT (10 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.title', 'ru', 'Проекты', 'admin'),
('admin.projects.title', 'am', 'Նախագծեր', 'admin'),
('admin.projects.titleCount', 'ru', 'проектов', 'admin'),
('admin.projects.titleCount', 'am', 'նախագիծ', 'admin'),
('admin.projects.addProject', 'ru', 'Добавить проект', 'admin'),
('admin.projects.addProject', 'am', 'Ավելացնել նախագիծ', 'admin'),
('admin.projects.createProject', 'ru', 'Создать проект', 'admin'),
('admin.projects.createProject', 'am', 'Ստեղծել նախագիծ', 'admin'),
('admin.projects.updateProject', 'ru', 'Обновить проект', 'admin'),
('admin.projects.updateProject', 'am', 'Թարմացնել նախագիծը', 'admin'),
('admin.projects.featuredProject', 'ru', 'Избранный проект', 'admin'),
('admin.projects.featuredProject', 'am', 'Առանձնացված նախագիծ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Projects: Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.projects.tags', 'ru', 'Теги', 'admin'),
('admin.projects.tags', 'am', 'Պիտակներ', 'admin'),
('admin.projects.addTag', 'ru', 'Добавить тег', 'admin'),
('admin.projects.addTag', 'am', 'Ավելացնել պիտակ', 'admin'),
('admin.projects.githubUrl', 'ru', 'URL GitHub', 'admin'),
('admin.projects.githubUrl', 'am', 'GitHub հղում', 'admin'),
('admin.projects.liveUrl', 'ru', 'URL сайта', 'admin'),
('admin.projects.liveUrl', 'am', 'Կայքի հղում', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- SKILLS MANAGEMENT (7 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.skills.title', 'ru', 'Навыки', 'admin'),
('admin.skills.title', 'am', 'Հմտություններ', 'admin'),
('admin.skills.titleCount', 'ru', 'навыков', 'admin'),
('admin.skills.titleCount', 'am', 'հմտություն', 'admin'),
('admin.skills.addSkill', 'ru', 'Добавить навык', 'admin'),
('admin.skills.addSkill', 'am', 'Ավելացնել հմտություն', 'admin'),
('admin.skills.createSkill', 'ru', 'Создать навык', 'admin'),
('admin.skills.createSkill', 'am', 'Ստեղծել հմտություն', 'admin'),
('admin.skills.updateSkill', 'ru', 'Обновить навык', 'admin'),
('admin.skills.updateSkill', 'am', 'Թարմացնել հմտությունը', 'admin'),
('admin.skills.icon', 'ru', 'Иконка', 'admin'),
('admin.skills.icon', 'am', 'Պատկերակ', 'admin'),
('admin.skills.level', 'ru', 'Уровень', 'admin'),
('admin.skills.level', 'am', 'Մակարդակ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- ============================================================================
-- TRANSLATIONS MANAGER (14 keys)
-- ============================================================================

INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.title', 'ru', 'Переводы', 'admin'),
('admin.translations.title', 'am', 'Թարգմանություններ', 'admin'),
('admin.translations.addTranslation', 'ru', 'Добавить перевод', 'admin'),
('admin.translations.addTranslation', 'am', 'Ավելացնել թարգմանություն', 'admin'),
('admin.translations.editTranslation', 'ru', 'Редактировать перевод', 'admin'),
('admin.translations.editTranslation', 'am', 'Խմբագրել թարգմանությունը', 'admin'),
('admin.translations.save', 'ru', 'Сохранить', 'admin'),
('admin.translations.save', 'am', 'Պահպանել', 'admin'),
('admin.translations.saving', 'ru', 'Сохранение...', 'admin'),
('admin.translations.saving', 'am', 'Պահպանվում է...', 'admin'),
('admin.translations.saveFailed', 'ru', 'Не удалось сохранить', 'admin'),
('admin.translations.saveFailed', 'am', 'Պահպանումը ձախողվեց', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Translations: Form Fields
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.key', 'ru', 'Ключ', 'admin'),
('admin.translations.key', 'am', 'Բանալի', 'admin'),
('admin.translations.keyPlaceholder', 'ru', 'Введите ключ перевода...', 'admin'),
('admin.translations.keyPlaceholder', 'am', 'Մուտքագրեք թարգմանության բանալին...', 'admin'),
('admin.translations.language', 'ru', 'Язык', 'admin'),
('admin.translations.language', 'am', 'Լեզու', 'admin'),
('admin.translations.value', 'ru', 'Значение', 'admin'),
('admin.translations.value', 'am', 'Արժեք', 'admin'),
('admin.translations.valuePlaceholder', 'ru', 'Введите значение перевода...', 'admin'),
('admin.translations.valuePlaceholder', 'am', 'Մուտքագրեք թարգմանության արժեքը...', 'admin'),
('admin.translations.category', 'ru', 'Категория', 'admin'),
('admin.translations.category', 'am', 'Կատեգորիա', 'admin'),
('admin.translations.categoryPlaceholder', 'ru', 'Выберите категорию...', 'admin'),
('admin.translations.categoryPlaceholder', 'am', 'Ընտրեք կատեգորիան...', 'admin'),
('admin.translations.actions', 'ru', 'Действия', 'admin'),
('admin.translations.actions', 'am', 'Գործողություններ', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

-- Translations: Empty States
INSERT INTO public.translations (key, language, value, category) VALUES
('admin.translations.empty', 'ru', 'Нет переводов', 'admin'),
('admin.translations.empty', 'am', 'Թարգմանություններ չկան', 'admin'),
('admin.translations.noTranslationsFound', 'ru', 'Переводы не найдены', 'admin'),
('admin.translations.noTranslationsFound', 'am', 'Թարգմանություններ չեն գտնվել', 'admin'),
('admin.translations.allFieldsRequired', 'ru', 'Все поля обязательны', 'admin'),
('admin.translations.allFieldsRequired', 'am', 'Բոլոր դաշտերը պարտադիր են', 'admin')
ON CONFLICT (key, language) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();

COMMIT;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Count total translations added by this migration
SELECT
    'Total RU translations added' as metric,
    COUNT(*) as count
FROM public.translations
WHERE language = 'ru'
AND key LIKE 'admin.%'
AND key IN (
    'admin.blog.addNew', 'admin.blog.autoClickOverride', 'admin.blog.basicInformation',
    'admin.blog.characters', 'admin.blog.content', 'admin.blog.contentPlaceholder',
    'admin.blog.contentSectionTitle', 'admin.blog.created', 'admin.blog.createdOn',
    'admin.blog.createFirst', 'admin.blog.createPost', 'admin.blog.createPostSubtitle',
    'admin.blog.createPostTitle', 'admin.blog.deletePost', 'admin.blog.draft',
    'admin.blog.editPost', 'admin.blog.editPostSubtitle', 'admin.blog.editPostTitle',
    'admin.blog.excerpt', 'admin.blog.excerptPlaceholder', 'admin.blog.featuredImage',
    'admin.blog.getStarted', 'admin.blog.lastUpdated', 'admin.blog.mediaSettings',
    'admin.blog.mediaSettingsSectionTitle', 'admin.blog.noPosts', 'admin.blog.postsTitle',
    'admin.blog.public', 'admin.blog.publicationStatus', 'admin.blog.published',
    'admin.blog.publishImmediately', 'admin.blog.readingTime', 'admin.blog.readTime',
    'admin.blog.readTimeAutoOverride', 'admin.blog.readTimeLabel', 'admin.blog.readTimePlaceholder',
    'admin.blog.readTimeUsingCustom', 'admin.blog.saved', 'admin.blog.savedAt',
    'admin.blog.saving', 'admin.blog.slug', 'admin.blog.slugAvailable',
    'admin.blog.slugExists', 'admin.blog.slugFormatError', 'admin.blog.slugLabel',
    'admin.blog.slugPlaceholder', 'admin.blog.slugRequired', 'admin.blog.slugValidationError',
    'admin.blog.subtitle', 'admin.blog.title', 'admin.blog.titleLabel',
    'admin.blog.titlePlaceholder', 'admin.blog.updatePost', 'admin.blog.usingCustom',
    'admin.blog.words', 'admin.confirm.deleteEducation', 'admin.confirm.deleteExperience',
    'admin.confirm.deleteProject', 'admin.confirm.deleteSkill', 'admin.confirm.deleteTranslation',
    'admin.dashboard.contentManagement', 'admin.dashboard.section.blog', 'admin.dashboard.section.education',
    'admin.dashboard.section.experiences', 'admin.dashboard.section.featureFlags', 'admin.dashboard.section.projects',
    'admin.dashboard.section.skills', 'admin.dashboard.section.translations', 'admin.dashboard.title',
    'admin.dashboard.welcomeBack', 'admin.education.addEducation', 'admin.education.additionalDetails',
    'admin.education.createEducation', 'admin.education.degree', 'admin.education.degreePlaceholder',
    'admin.education.school', 'admin.education.schoolPlaceholder', 'admin.education.title',
    'admin.education.titleCount', 'admin.education.updateEducation', 'admin.education.year',
    'admin.education.yearPlaceholder', 'admin.error.deleteFailed', 'admin.error.importFailed',
    'admin.error.saveFailed', 'admin.experience.achievements', 'admin.experience.addAchievement',
    'admin.experience.addExperience', 'admin.experience.atLabel', 'admin.experience.company',
    'admin.experience.createdLabel', 'admin.experience.createExperience', 'admin.experience.orderLabel',
    'admin.experience.period', 'admin.experience.periodPlaceholder', 'admin.experience.role',
    'admin.experience.title', 'admin.experience.titleCount', 'admin.experience.updateExperience',
    'admin.featureFlags.contentId', 'admin.featureFlags.contentIdPlaceholder', 'admin.featureFlags.contentType',
    'admin.featureFlags.create', 'admin.featureFlags.delete', 'admin.featureFlags.disabled',
    'admin.featureFlags.edit', 'admin.featureFlags.enabled', 'admin.featureFlags.filter.all',
    'admin.featureFlags.filter.blogPosts', 'admin.featureFlags.filter.projects', 'admin.featureFlags.filter.sections',
    'admin.featureFlags.flagKey', 'admin.featureFlags.flagKeyPlaceholder', 'admin.featureFlags.noFlagsFound',
    'admin.featureFlags.searchPlaceholder', 'admin.featureFlags.subtitle', 'admin.featureFlags.table.actions',
    'admin.featureFlags.table.description', 'admin.featureFlags.table.flagKey', 'admin.featureFlags.table.status',
    'admin.featureFlags.table.type', 'admin.featureFlags.title', 'admin.form.placeholder.describeFlagControl',
    'admin.form.placeholder.enterTranslation', 'admin.imageUpload.dragDrop', 'admin.imageUpload.fileTypes',
    'admin.imageUpload.removePreview', 'admin.imageUpload.uploadInfo', 'admin.imageUpload.uploading',
    'admin.markdown.copyShortcuts', 'admin.markdown.decreaseTextSize', 'admin.markdown.help.imageUpload',
    'admin.markdown.help.keyboardShortcuts', 'admin.markdown.help.markdownSyntax', 'admin.markdown.help.textSize',
    'admin.markdown.increaseTextSize', 'admin.markdown.toggleFullscreen', 'admin.markdown.togglePreview',
    'admin.projects.addProject', 'admin.projects.addTag', 'admin.projects.createProject',
    'admin.projects.featuredProject', 'admin.projects.githubUrl', 'admin.projects.liveUrl',
    'admin.projects.tags', 'admin.projects.title', 'admin.projects.titleCount',
    'admin.projects.updateProject', 'admin.skills.addSkill', 'admin.skills.createSkill',
    'admin.skills.icon', 'admin.skills.level', 'admin.skills.title',
    'admin.skills.titleCount', 'admin.skills.updateSkill', 'admin.translations.actions',
    'admin.translations.addTranslation', 'admin.translations.allFieldsRequired', 'admin.translations.category',
    'admin.translations.categoryPlaceholder', 'admin.translations.editTranslation', 'admin.translations.empty',
    'admin.translations.key', 'admin.translations.keyPlaceholder', 'admin.translations.language',
    'admin.translations.noTranslationsFound', 'admin.translations.save', 'admin.translations.saveFailed',
    'admin.translations.saving', 'admin.translations.title', 'admin.translations.value',
    'admin.translations.valuePlaceholder'
);

SELECT
    'Total AM translations added' as metric,
    COUNT(*) as count
FROM public.translations
WHERE language = 'am'
AND key LIKE 'admin.%'
AND key IN (
    'admin.blog.addNew', 'admin.blog.autoClickOverride', 'admin.blog.basicInformation',
    'admin.blog.characters', 'admin.blog.content', 'admin.blog.contentPlaceholder',
    'admin.blog.contentSectionTitle', 'admin.blog.created', 'admin.blog.createdOn',
    'admin.blog.createFirst', 'admin.blog.createPost', 'admin.blog.createPostSubtitle',
    'admin.blog.createPostTitle', 'admin.blog.deletePost', 'admin.blog.draft',
    'admin.blog.editPost', 'admin.blog.editPostSubtitle', 'admin.blog.editPostTitle',
    'admin.blog.excerpt', 'admin.blog.excerptPlaceholder', 'admin.blog.featuredImage',
    'admin.blog.getStarted', 'admin.blog.lastUpdated', 'admin.blog.mediaSettings',
    'admin.blog.mediaSettingsSectionTitle', 'admin.blog.noPosts', 'admin.blog.postsTitle',
    'admin.blog.public', 'admin.blog.publicationStatus', 'admin.blog.published',
    'admin.blog.publishImmediately', 'admin.blog.readingTime', 'admin.blog.readTime',
    'admin.blog.readTimeAutoOverride', 'admin.blog.readTimeLabel', 'admin.blog.readTimePlaceholder',
    'admin.blog.readTimeUsingCustom', 'admin.blog.saved', 'admin.blog.savedAt',
    'admin.blog.saving', 'admin.blog.slug', 'admin.blog.slugAvailable',
    'admin.blog.slugExists', 'admin.blog.slugFormatError', 'admin.blog.slugLabel',
    'admin.blog.slugPlaceholder', 'admin.blog.slugRequired', 'admin.blog.slugValidationError',
    'admin.blog.subtitle', 'admin.blog.title', 'admin.blog.titleLabel',
    'admin.blog.titlePlaceholder', 'admin.blog.updatePost', 'admin.blog.usingCustom',
    'admin.blog.words', 'admin.confirm.deleteEducation', 'admin.confirm.deleteExperience',
    'admin.confirm.deleteProject', 'admin.confirm.deleteSkill', 'admin.confirm.deleteTranslation',
    'admin.dashboard.contentManagement', 'admin.dashboard.section.blog', 'admin.dashboard.section.education',
    'admin.dashboard.section.experiences', 'admin.dashboard.section.featureFlags', 'admin.dashboard.section.projects',
    'admin.dashboard.section.skills', 'admin.dashboard.section.translations', 'admin.dashboard.title',
    'admin.dashboard.welcomeBack', 'admin.education.addEducation', 'admin.education.additionalDetails',
    'admin.education.createEducation', 'admin.education.degree', 'admin.education.degreePlaceholder',
    'admin.education.school', 'admin.education.schoolPlaceholder', 'admin.education.title',
    'admin.education.titleCount', 'admin.education.updateEducation', 'admin.education.year',
    'admin.education.yearPlaceholder', 'admin.error.deleteFailed', 'admin.error.importFailed',
    'admin.error.saveFailed', 'admin.experience.achievements', 'admin.experience.addAchievement',
    'admin.experience.addExperience', 'admin.experience.atLabel', 'admin.experience.company',
    'admin.experience.createdLabel', 'admin.experience.createExperience', 'admin.experience.orderLabel',
    'admin.experience.period', 'admin.experience.periodPlaceholder', 'admin.experience.role',
    'admin.experience.title', 'admin.experience.titleCount', 'admin.experience.updateExperience',
    'admin.featureFlags.contentId', 'admin.featureFlags.contentIdPlaceholder', 'admin.featureFlags.contentType',
    'admin.featureFlags.create', 'admin.featureFlags.delete', 'admin.featureFlags.disabled',
    'admin.featureFlags.edit', 'admin.featureFlags.enabled', 'admin.featureFlags.filter.all',
    'admin.featureFlags.filter.blogPosts', 'admin.featureFlags.filter.projects', 'admin.featureFlags.filter.sections',
    'admin.featureFlags.flagKey', 'admin.featureFlags.flagKeyPlaceholder', 'admin.featureFlags.noFlagsFound',
    'admin.featureFlags.searchPlaceholder', 'admin.featureFlags.subtitle', 'admin.featureFlags.table.actions',
    'admin.featureFlags.table.description', 'admin.featureFlags.table.flagKey', 'admin.featureFlags.table.status',
    'admin.featureFlags.table.type', 'admin.featureFlags.title', 'admin.form.placeholder.describeFlagControl',
    'admin.form.placeholder.enterTranslation', 'admin.imageUpload.dragDrop', 'admin.imageUpload.fileTypes',
    'admin.imageUpload.removePreview', 'admin.imageUpload.uploadInfo', 'admin.imageUpload.uploading',
    'admin.markdown.copyShortcuts', 'admin.markdown.decreaseTextSize', 'admin.markdown.help.imageUpload',
    'admin.markdown.help.keyboardShortcuts', 'admin.markdown.help.markdownSyntax', 'admin.markdown.help.textSize',
    'admin.markdown.increaseTextSize', 'admin.markdown.toggleFullscreen', 'admin.markdown.togglePreview',
    'admin.projects.addProject', 'admin.projects.addTag', 'admin.projects.createProject',
    'admin.projects.featuredProject', 'admin.projects.githubUrl', 'admin.projects.liveUrl',
    'admin.projects.tags', 'admin.projects.title', 'admin.projects.titleCount',
    'admin.projects.updateProject', 'admin.skills.addSkill', 'admin.skills.createSkill',
    'admin.skills.icon', 'admin.skills.level', 'admin.skills.title',
    'admin.skills.titleCount', 'admin.skills.updateSkill', 'admin.translations.actions',
    'admin.translations.addTranslation', 'admin.translations.allFieldsRequired', 'admin.translations.category',
    'admin.translations.categoryPlaceholder', 'admin.translations.editTranslation', 'admin.translations.empty',
    'admin.translations.key', 'admin.translations.keyPlaceholder', 'admin.translations.language',
    'admin.translations.noTranslationsFound', 'admin.translations.save', 'admin.translations.saveFailed',
    'admin.translations.saving', 'admin.translations.title', 'admin.translations.value',
    'admin.translations.valuePlaceholder'
);

-- Breakdown by category
SELECT
    SUBSTRING(key FROM 'admin\.([^\.]+)\.') as category,
    language,
    COUNT(*) as translation_count
FROM public.translations
WHERE language IN ('ru', 'am')
AND key LIKE 'admin.%'
GROUP BY category, language
ORDER BY category, language;

-- Check for any missing translations (keys that have one language but not the other)
SELECT
    key,
    MAX(CASE WHEN language = 'ru' THEN 1 ELSE 0 END) as has_ru,
    MAX(CASE WHEN language = 'am' THEN 1 ELSE 0 END) as has_am
FROM public.translations
WHERE key LIKE 'admin.%'
GROUP BY key
HAVING MAX(CASE WHEN language = 'ru' THEN 1 ELSE 0 END) != MAX(CASE WHEN language = 'am' THEN 1 ELSE 0 END);
