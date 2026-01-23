/**
 * Custom hook for managing Technology admin operations
 * Handles CRUD operations for technologies and their details, including:
 * - Data loading for technologies and technology_details
 * - Form state management with validation
 * - Create, update, delete operations
 * - Multi-language support
 *
 * @example
 * ```tsx
 * const {
 *   activeLanguage,
 *   setActiveLanguage,
 *   technologies,
 *   detailsMap,
 *   isLoading,
 *   errorMessage,
 *   showEditor,
 *   setShowEditor,
 *   editingTechnology,
 *   formData,
 *   setFormData,
 *   detailText,
 *   setDetailText,
 *   tagsText,
 *   setTagsText,
 *   detailData,
 *   setDetailData,
 *   errors,
 *   detailErrors,
 *   technologiesWithDetails,
 *   handleEdit,
 *   handleDelete,
 *   handleSubmit,
 *   resetForm,
 * } = useTechnologyAdmin(language, t);
 * ```
 */

import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import { technologySchema, technologyDetailSchema } from '../lib/schemas/technologySchema';
import type { Technology, TechnologyDetail, TechnologyInsert } from '../types/database.types';
import type { Language } from '../context/LanguageContext';

type DetailDraft = {
  detailed_description: string[];
  tags: string[];
  real_world_example: string;
};

const parseLines = (value: string) =>
  value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

const parseTags = (value: string) =>
  value
    .split(/[,\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

export interface TechnologyAdminData {
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
  technologies: Technology[];
  detailsMap: Record<string, TechnologyDetail>;
  isLoading: boolean;
  errorMessage: string | null;
  showEditor: boolean;
  setShowEditor: (show: boolean) => void;
  editingTechnology: Technology | null;
  formData: Partial<TechnologyInsert>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<TechnologyInsert>>>;
  detailText: string;
  setDetailText: React.Dispatch<React.SetStateAction<string>>;
  tagsText: string;
  setTagsText: React.Dispatch<React.SetStateAction<string>>;
  detailData: DetailDraft;
  setDetailData: React.Dispatch<React.SetStateAction<DetailDraft>>;
  errors: Record<string, string>;
  detailErrors: Record<string, string>;
  technologiesWithDetails: Array<{ technology: Technology; detail: TechnologyDetail | undefined }>;
  handleEdit: (technology: Technology) => void;
  handleDelete: (id: string, confirmPrompt: string) => Promise<void>;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Hook for managing Technology admin operations
 * @param initialLanguage - Initial language to load technologies for
 */
export function useTechnologyAdmin(
  initialLanguage: Language
): TechnologyAdminData {
  const [activeLanguage, setActiveLanguage] = useState<Language>(initialLanguage);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [detailsMap, setDetailsMap] = useState<Record<string, TechnologyDetail>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editingTechnology, setEditingTechnology] = useState<Technology | null>(null);
  const [formData, setFormData] = useState<Partial<TechnologyInsert>>({
    slug: '',
    title: '',
    description: '',
    category: '',
    level: 0,
    icon_name: 'Code2',
  });
  const [detailText, setDetailText] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [detailData, setDetailData] = useState<DetailDraft>({
    detailed_description: [],
    tags: [],
    real_world_example: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [detailErrors, setDetailErrors] = useState<Record<string, string>>({});

  const loadTechnologies = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const [techResult, detailResult] = await Promise.all([
        supabase
          .from('technologies')
          .select('*')
          .eq('language', activeLanguage)
          .order('created_at', { ascending: true }),
        supabase
          .from('technology_details')
          .select('*')
          .eq('language', activeLanguage),
      ]);

      if (techResult.error) throw techResult.error;
      if (detailResult.error) throw detailResult.error;

      const nextDetails: Record<string, TechnologyDetail> = {};
      (detailResult.data || []).forEach((detail) => {
        nextDetails[detail.technology_id] = detail;
      });

      setTechnologies(techResult.data || []);
      setDetailsMap(nextDetails);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to load technologies';
      console.error('Error loading technologies:', error);
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, [activeLanguage]);

  useEffect(() => {
    loadTechnologies();
  }, [loadTechnologies]);

  const resetForm = useCallback(() => {
    setEditingTechnology(null);
    setFormData({
      slug: '',
      title: '',
      description: '',
      category: '',
      level: 0,
      icon_name: 'Code2',
    });
    setDetailText('');
    setTagsText('');
    setDetailData({
      detailed_description: [],
      tags: [],
      real_world_example: ''
    });
    setErrors({});
    setDetailErrors({});
  }, []);

  const handleEdit = useCallback((technology: Technology) => {
    const detail = detailsMap[technology.id];
    setEditingTechnology(technology);
    setFormData({
      slug: technology.slug,
      title: technology.title,
      description: technology.description,
      category: technology.category,
      level: technology.level,
      icon_name: technology.icon_name ?? 'Code2',
    });
    setDetailText((detail?.detailed_description || []).join('\n'));
    setTagsText((detail?.tags || []).join(', '));
    setDetailData({
      detailed_description: (detail?.detailed_description || []) as string[],
      tags: (detail?.tags || []) as string[],
      real_world_example: detail?.real_world_example ?? ''
    });
    setShowEditor(true);
  }, [detailsMap]);

  const handleDelete = useCallback(async (id: string, confirmPrompt: string) => {
    if (!confirm(confirmPrompt)) {
      return;
    }

    try {
      const { error } = await supabase
        .from('technologies')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await loadTechnologies();
    } catch (error) {
      console.error('Error deleting technology:', error);
      throw error;
    }
  }, [loadTechnologies]);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});
    setDetailErrors({});

    const parsedDetails = {
      detailed_description: parseLines(detailText),
      tags: parseTags(tagsText),
      real_world_example: detailData.real_world_example.trim(),
    };

    try {
      const validatedTechnology = technologySchema.parse({
        ...formData,
        language: activeLanguage,
        level: Number(formData.level || 0),
        icon_name: formData.icon_name || undefined,
      });

      if (editingTechnology) {
        const { error } = await supabase
          .from('technologies')
          .update({
            slug: validatedTechnology.slug,
            title: validatedTechnology.title,
            description: validatedTechnology.description,
            category: validatedTechnology.category,
            level: validatedTechnology.level,
            icon_name: validatedTechnology.icon_name,
          })
          .eq('id', editingTechnology.id);

        if (error) throw error;

        const validatedDetail = technologyDetailSchema.parse({
          technology_id: editingTechnology.id,
          language: activeLanguage,
          ...parsedDetails,
        });

        const { error: detailError } = await supabase
          .from('technology_details')
          .upsert(validatedDetail, { onConflict: 'technology_id,language' });

        if (detailError) throw detailError;
      } else {
        const { data, error } = await supabase
          .from('technologies')
          .insert(validatedTechnology)
          .select()
          .single();

        if (error) throw error;
        if (!data) throw new Error('Failed to create technology');

        const validatedDetail = technologyDetailSchema.parse({
          technology_id: data.id,
          language: activeLanguage,
          ...parsedDetails,
        });

        const { error: detailError } = await supabase
          .from('technology_details')
          .upsert(validatedDetail, { onConflict: 'technology_id,language' });

        if (detailError) throw detailError;
      }

      setShowEditor(false);
      resetForm();
      await loadTechnologies();
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const fieldErrors: Record<string, string> = {};
        const detailFieldErrors: Record<string, string> = {};
        (error as { issues: Array<{ path: Array<string | number>; message: string }> }).issues.forEach((issue) => {
          const field = issue.path[0];
          if (field === 'detailed_description' || field === 'tags' || field === 'real_world_example') {
            detailFieldErrors[String(field)] = issue.message;
          } else {
            fieldErrors[String(field)] = issue.message;
          }
        });
        setErrors(fieldErrors);
        setDetailErrors(detailFieldErrors);
      } else {
        console.error('Error saving technology:', error);
        throw error;
      }
    }
  }, [activeLanguage, detailData.real_world_example, detailText, editingTechnology, formData, loadTechnologies, resetForm, tagsText]);

  const technologiesWithDetails = useMemo(() => {
    return technologies.map((tech) => ({
      technology: tech,
      detail: detailsMap[tech.id]
    }));
  }, [technologies, detailsMap]);

  return {
    activeLanguage,
    setActiveLanguage,
    technologies,
    detailsMap,
    isLoading,
    errorMessage,
    showEditor,
    setShowEditor,
    editingTechnology,
    formData,
    setFormData,
    detailText,
    setDetailText,
    tagsText,
    setTagsText,
    detailData,
    setDetailData,
    errors,
    detailErrors,
    technologiesWithDetails,
    handleEdit,
    handleDelete,
    handleSubmit,
    resetForm,
  };
}
