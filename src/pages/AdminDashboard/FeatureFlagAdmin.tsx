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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex p-2 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
            <Flag className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              <TranslationText translationKey="admin.featureFlags.title" as="span" shimmerWidth="150px" />
            </h2>
            <p className="text-gray-400">
              <TranslationText translationKey="admin.featureFlags.subtitle" as="span" shimmerWidth="350px" />
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg hover:bg-[#edfc3a]/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          {t('admin.common.addFlag')}
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search flags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#edfc3a]"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="pl-10 pr-8 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
          >
            <option value="all">{t('admin.featureFlags.filter.all')}</option>
            <option value="section">{t('admin.featureFlags.filter.sections')}</option>
            <option value="blog_post">{t('admin.featureFlags.filter.blogPosts')}</option>
            <option value="project">{t('admin.featureFlags.filter.projects')}</option>
          </select>
        </div>
      </div>

      {/* Flags Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {t('admin.featureFlags.table.flagKey')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {t('admin.featureFlags.table.type')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {t('admin.featureFlags.table.description')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {t('admin.featureFlags.table.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {t('admin.featureFlags.table.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredFlags.map((flag) => (
                <tr key={flag.id} className="hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{flag.flag_key}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {flag.content_type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-300 max-w-xs truncate">
                      {flag.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggle(flag)}
                      className="flex items-center gap-2"
                    >
                      {flag.enabled ? (
                        <ToggleRight className="h-6 w-6 text-green-400" />
                      ) : (
                        <ToggleLeft className="h-6 w-6 text-gray-400" />
                      )}
                      <span className={`text-sm ${flag.enabled ? 'text-green-400' : 'text-gray-400'}`}>
                        {flag.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(flag)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(flag)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredFlags.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No feature flags found
          </div>
        )}
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('admin.featureFlags.create')}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Flag Key
                </label>
                <input
                  type="text"
                  value={formData.flag_key}
                  onChange={(e) => setFormData({ ...formData, flag_key: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                  placeholder="e.g., blog_section"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Content Type
                </label>
                <select
                  value={formData.content_type}
                  onChange={(e) => setFormData({ ...formData, content_type: e.target.value as 'section' | 'blog_post' | 'project' })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                >
                  <option value="section">Section</option>
                  <option value="blog_post">Blog Post</option>
                  <option value="project">Project</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Content ID (Optional)
                </label>
                <input
                  type="text"
                  value={formData.content_id}
                  onChange={(e) => setFormData({ ...formData, content_id: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                  placeholder="UUID for specific content item"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                  rows={3}
                  placeholder="Describe what this flag controls"
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
                <label htmlFor="enabled" className="text-sm text-gray-300">
                  Enabled by default
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsCreateModalOpen(false);
                  resetForm();
                }}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-4 py-2 bg-[#edfc3a] text-black rounded-lg hover:bg-[#edfc3a]/90 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('admin.featureFlags.edit')}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Flag Key
                </label>
                <input
                  type="text"
                  value={formData.flag_key}
                  onChange={(e) => setFormData({ ...formData, flag_key: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Content Type
                </label>
                <select
                  value={formData.content_type}
                  onChange={(e) => setFormData({ ...formData, content_type: e.target.value as 'section' | 'blog_post' | 'project' })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                >
                  <option value="section">Section</option>
                  <option value="blog_post">Blog Post</option>
                  <option value="project">Project</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Content ID (Optional)
                </label>
                <input
                  type="text"
                  value={formData.content_id}
                  onChange={(e) => setFormData({ ...formData, content_id: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#edfc3a]"
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
                <label htmlFor="edit-enabled" className="text-sm text-gray-300">
                  Enabled
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setSelectedFlag(null);
                  resetForm();
                }}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-[#edfc3a] text-black rounded-lg hover:bg-[#edfc3a]/90 transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('admin.featureFlags.delete')}</h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to delete the feature flag "{selectedFlag?.flag_key}"? 
              This action cannot be undone.
            </p>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setSelectedFlag(null);
                }}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
