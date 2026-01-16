import { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  Filter,
  ToggleLeft,
  ToggleRight,
  Flag
} from 'lucide-react';
import { useFeatureFlagService } from '../../lib/services/useFeatureFlagService';
import { FeatureFlagInsert, FeatureFlagUpdate, FeatureFlag } from '../../types/database.types';
import { LoadingSpinner } from '../../components/loading/LoadingSpinner';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

interface FeatureFlagFormData {
  flag_key: string;
  content_type: 'section' | 'blog_post' | 'project';
  content_id: string;
  description: string;
  enabled: boolean;
}

export function FeatureFlagAdmin() {
  const { t } = useLanguage();
  const { 
    featureFlags, 
    isLoading, 
    error, 
    createFeatureFlag, 
    updateFeatureFlag, 
    deleteFeatureFlag 
  } = useFeatureFlagService();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState<FeatureFlag | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const [formData, setFormData] = useState<FeatureFlagFormData>({
    flag_key: '',
    content_type: 'section',
    content_id: '',
    description: '',
    enabled: true
  });

  const filteredFlags = featureFlags.filter(flag => {
    const matchesSearch = flag.flag_key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         flag.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || flag.content_type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleCreate = async () => {
    try {
      const flagData: FeatureFlagInsert = {
        flag_key: formData.flag_key,
        content_type: formData.content_type,
        content_id: formData.content_id || null,
        description: formData.description,
        enabled: formData.enabled
      };
      
      await createFeatureFlag(flagData);
      setIsCreateModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error creating feature flag:', error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedFlag) return;
    
    try {
      const updateData: FeatureFlagUpdate = {
        flag_key: formData.flag_key,
        content_type: formData.content_type,
        content_id: formData.content_id || null,
        description: formData.description,
        enabled: formData.enabled
      };
      
      await updateFeatureFlag(selectedFlag.id, updateData);
      setIsEditModalOpen(false);
      setSelectedFlag(null);
      resetForm();
    } catch (error) {
      console.error('Error updating feature flag:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedFlag) return;
    
    try {
      await deleteFeatureFlag(selectedFlag.id);
      setIsDeleteModalOpen(false);
      setSelectedFlag(null);
    } catch (error) {
      console.error('Error deleting feature flag:', error);
    }
  };

  const handleToggle = async (flag: FeatureFlag) => {
    try {
      await updateFeatureFlag(flag.id, { enabled: !flag.enabled });
    } catch (error) {
      console.error('Error toggling feature flag:', error);
    }
  };

  const openEditModal = (flag: FeatureFlag) => {
    setSelectedFlag(flag);
    setFormData({
      flag_key: flag.flag_key,
      content_type: flag.content_type,
      content_id: flag.content_id || '',
      description: flag.description,
      enabled: flag.enabled
    });
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (flag: FeatureFlag) => {
    setSelectedFlag(flag);
    setIsDeleteModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      flag_key: '',
      content_type: 'section',
      content_id: '',
      description: '',
      enabled: true
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400">
        <p>
          <TranslationText translationKey="error.loadFailed.featureFlags" as="span" shimmerWidth="200px" />: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="stack [--stack-space:var(--space-24)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[var(--space-12)]">
          <div className="inline-flex p-[var(--space-8)] rounded-[var(--radius-md)] bg-accent/10 text-accent">
            <Flag className="h-[var(--space-24)] w-[var(--space-24)]" />
          </div>
          <div>
            <h2 className="text-[length:var(--font-600)] font-bold text-[var(--text)]">
              <TranslationText translationKey="admin.featureFlags.title" as="span" shimmerWidth="150px" />
            </h2>
            <p className="text-[var(--text-muted)] text-[length:var(--font-100)]">
              <TranslationText translationKey="admin.featureFlags.subtitle" as="span" shimmerWidth="350px" />
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn btn-primary inline-flex items-center gap-[var(--space-8)]"
        >
          <Plus className="h-[var(--space-16)] w-[var(--space-16)]" />
          {t('admin.common.addFlag')}
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-[var(--space-16)]">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-[var(--space-16)] w-[var(--space-16)]" />
          <input
            type="text"
            placeholder={t('admin.featureFlags.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="field pl-[var(--space-32)] pr-[var(--space-16)]"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-[var(--space-12)] top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] h-[var(--space-16)] w-[var(--space-16)]" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="pl-[var(--space-32)] pr-[var(--space-24)] admin-select appearance-none"
          >
            <option value="all">{t('admin.featureFlags.filter.all')}</option>
            <option value="section">{t('admin.featureFlags.filter.sections')}</option>
            <option value="blog_post">{t('admin.featureFlags.filter.blogPosts')}</option>
            <option value="project">{t('admin.featureFlags.filter.projects')}</option>
          </select>
        </div>
      </div>

      {/* Flags Table */}
      <div className="bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--surface-strong)]">
              <tr>
                <th className="px-[var(--space-24)] py-[var(--space-12)] text-left text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
                  {t('admin.featureFlags.table.flagKey')}
                </th>
                <th className="px-[var(--space-24)] py-[var(--space-12)] text-left text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
                  {t('admin.featureFlags.table.type')}
                </th>
                <th className="px-[var(--space-24)] py-[var(--space-12)] text-left text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
                  {t('admin.featureFlags.table.description')}
                </th>
                <th className="px-[var(--space-24)] py-[var(--space-12)] text-left text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
                  {t('admin.featureFlags.table.status')}
                </th>
                <th className="px-[var(--space-24)] py-[var(--space-12)] text-left text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]">
                  {t('admin.featureFlags.table.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {filteredFlags.map((flag) => (
                <tr key={flag.id} className="hover:bg-[var(--surface-strong)]/50">
                  <td className="px-[var(--space-24)] py-[var(--space-16)] whitespace-nowrap">
                    <div className="text-[length:var(--font-100)] font-medium text-[var(--text)]">{flag.flag_key}</div>
                  </td>
                  <td className="px-[var(--space-24)] py-[var(--space-16)] whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-[length:var(--font-100)] font-semibold rounded-full bg-blue-100 text-blue-800">
                      {flag.content_type}
                    </span>
                  </td>
                  <td className="px-[var(--space-24)] py-[var(--space-16)]">
                    <div className="text-[length:var(--font-100)] text-[var(--text-muted)] max-w-xs truncate">
                      {flag.description}
                    </div>
                  </td>
                  <td className="px-[var(--space-24)] py-[var(--space-16)] whitespace-nowrap">
                    <button
                      onClick={() => handleToggle(flag)}
                      className="flex items-center gap-[var(--space-8)]"
                    >
                      {flag.enabled ? (
                        <ToggleRight className="h-[var(--space-24)] w-[var(--space-24)] text-green-400" />
                      ) : (
                        <ToggleLeft className="h-[var(--space-24)] w-[var(--space-24)] text-[var(--text-muted)]" />
                      )}
                      <span className={`text-[length:var(--font-100)] ${flag.enabled ? 'text-green-400' : 'text-[var(--text-muted)]'}`}>
                        {flag.enabled ? t('admin.featureFlags.enabled') : t('admin.featureFlags.disabled')}
                      </span>
                    </button>
                  </td>
                  <td className="px-[var(--space-24)] py-[var(--space-16)] whitespace-nowrap text-[length:var(--font-100)] font-medium">
                    <div className="flex items-center gap-[var(--space-8)]">
                      <button
                        onClick={() => openEditModal(flag)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit2 className="h-[var(--space-16)] w-[var(--space-16)]" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(flag)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-[var(--space-16)] w-[var(--space-16)]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredFlags.length === 0 && (
          <div className="text-center py-8 text-[var(--text-muted)]">
            {t('admin.featureFlags.noFlagsFound')}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] w-full max-w-md">
            <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-4">{t('admin.featureFlags.create')}</h3>
            
            <div className="stack [--stack-space:var(--space-16)]">
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.flagKey')}
                </label>
                <input
                  type="text"
                  value={formData.flag_key}
                  onChange={(e) => setFormData({ ...formData, flag_key: e.target.value })}
                  className="field"
                  placeholder={t('admin.featureFlags.flagKeyPlaceholder')}
                />
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.contentType')}
                </label>
                <select
                  value={formData.content_type}
                  onChange={(e) => setFormData({ ...formData, content_type: e.target.value as 'section' | 'blog_post' | 'project' })}
                  className="admin-select w-full"
                >
                  <option value="section">{t('admin.featureFlags.filter.sections')}</option>
                  <option value="blog_post">{t('admin.featureFlags.filter.blogPosts')}</option>
                  <option value="project">{t('admin.featureFlags.filter.projects')}</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.contentId')}
                </label>
                <input
                  type="text"
                  value={formData.content_id}
                  onChange={(e) => setFormData({ ...formData, content_id: e.target.value })}
                  className="field"
                  placeholder={t('admin.featureFlags.contentIdPlaceholder')}
                />
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.common.description')}
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="field"
                  rows={3}
                  placeholder={t('admin.featureFlags.descriptionPlaceholder')}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="enabled"
                  checked={formData.enabled}
                  onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="enabled" className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                  {t('admin.featureFlags.enabled')} by default
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-[var(--space-12)] mt-[var(--space-24)]">
              <button
                onClick={() => {
                  setIsCreateModalOpen(false);
                  resetForm();
                }}
                className="btn btn-secondary"
              >
                {t('admin.common.cancel')}
              </button>
              <button
                onClick={handleCreate}
                className="btn btn-primary"
              >
                {t('admin.common.create')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] w-full max-w-md">
            <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-4">{t('admin.featureFlags.edit')}</h3>
            
            <div className="stack [--stack-space:var(--space-16)]">
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.flagKey')}
                </label>
                <input
                  type="text"
                  value={formData.flag_key}
                  onChange={(e) => setFormData({ ...formData, flag_key: e.target.value })}
                  className="field"
                />
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.contentType')}
                </label>
                <select
                  value={formData.content_type}
                  onChange={(e) => setFormData({ ...formData, content_type: e.target.value as 'section' | 'blog_post' | 'project' })}
                  className="admin-select w-full"
                >
                  <option value="section">{t('admin.featureFlags.filter.sections')}</option>
                  <option value="blog_post">{t('admin.featureFlags.filter.blogPosts')}</option>
                  <option value="project">{t('admin.featureFlags.filter.projects')}</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.featureFlags.contentId')}
                </label>
                <input
                  type="text"
                  value={formData.content_id}
                  onChange={(e) => setFormData({ ...formData, content_id: e.target.value })}
                  className="field"
                />
              </div>
              
              <div>
                <label className="form-label">
                  {t('admin.common.description')}
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="field"
                  rows={3}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="edit-enabled"
                  checked={formData.enabled}
                  onChange={(e) => setFormData({ ...formData, enabled: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="edit-enabled" className="text-[length:var(--font-100)] text-[var(--text-muted)]">
                  {t('admin.featureFlags.enabled')}
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-[var(--space-12)] mt-[var(--space-24)]">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedFlag(null);
                  resetForm();
                }}
                className="btn btn-secondary"
              >
                {t('admin.common.cancel')}
              </button>
              <button
                onClick={handleUpdate}
                className="btn btn-primary"
              >
                {t('admin.common.update')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--surface)] rounded-[var(--radius-md)] p-[var(--space-24)] w-full max-w-md">
            <h3 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-4">{t('admin.featureFlags.delete')}</h3>
            <p className="text-[var(--text-muted)] mb-6">
              {t('admin.confirm.deleteFeatureFlag')} "{selectedFlag?.flag_key}"? {t('admin.confirm.deleteFeatureFlagAction')}
            </p>
            
            <div className="flex justify-end gap-[var(--space-12)]">
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedFlag(null);
                }}
                className="btn btn-secondary"
              >
                {t('admin.common.cancel')}
              </button>
              <button
                onClick={handleDelete}
                className="btn inline-flex items-center justify-center bg-red-600 text-white hover:bg-red-700"
              >
                {t('admin.featureFlags.deleteButton')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



