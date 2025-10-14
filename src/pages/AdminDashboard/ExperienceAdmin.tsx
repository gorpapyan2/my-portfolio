import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useExperienceService } from '../../lib/services/useExperienceService';
import { Experience, ExperienceInsert } from '../../types/database.types';
import { experienceSchema } from '../../lib/schemas/experienceSchema';

interface ExperienceAdminProps {
  onClose: () => void;
}

export function ExperienceAdmin({ onClose }: ExperienceAdminProps) {
  const { experiences, isLoading, createExperience, updateExperience, deleteExperience } = useExperienceService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [formData, setFormData] = useState<Partial<ExperienceInsert>>({
    role: '',
    company: '',
    period: '',
    description: '',
    achievements: [],
    order_index: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [achievementInput, setAchievementInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = experienceSchema.parse(formData);
      
      if (editingExperience) {
        await updateExperience(editingExperience.id, validatedData);
      } else {
        await createExperience(validatedData);
      }
      
      setShowEditor(false);
      setEditingExperience(null);
      setFormData({
        role: '',
        company: '',
        period: '',
        description: '',
        achievements: [],
        order_index: 0
      });
      setAchievementInput('');
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const fieldErrors: Record<string, string> = {};
        (error as { issues: Array<{ path: string[]; message: string }> }).issues.forEach((issue) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setFormData({
      role: experience.role,
      company: experience.company,
      period: experience.period,
      description: experience.description,
      achievements: experience.achievements,
      order_index: experience.order_index
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      try {
        await deleteExperience(id);
      } catch (error) {
        console.error('Error deleting experience:', error);
        alert('Failed to delete experience');
      }
    }
  };

  const addAchievement = () => {
    if (achievementInput.trim() && !formData.achievements?.includes(achievementInput.trim())) {
      setFormData({
        ...formData,
        achievements: [...(formData.achievements || []), achievementInput.trim()]
      });
      setAchievementInput('');
    }
  };

  const removeAchievement = (achievementToRemove: string) => {
    setFormData({
      ...formData,
      achievements: formData.achievements?.filter(achievement => achievement !== achievementToRemove) || []
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Experience Management</h2>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                  errors.role ? 'border-red-500' : 'border-white/10'
                }`}
                required
              />
              {errors.role && (
                <p className="text-red-400 text-sm mt-1">{errors.role}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                  errors.company ? 'border-red-500' : 'border-white/10'
                }`}
                required
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Period
            </label>
            <input
              type="text"
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.period ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="e.g., Oct 2022 – Present"
              required
            />
            {errors.period && (
              <p className="text-red-400 text-sm mt-1">{errors.period}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.description ? 'border-red-500' : 'border-white/10'
              }`}
              required
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Achievements
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={achievementInput}
                onChange={(e) => setAchievementInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
                placeholder="Add an achievement"
              />
              <button
                type="button"
                onClick={addAchievement}
                className="px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
              >
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.achievements?.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                >
                  <span className="text-white text-sm">{achievement}</span>
                  <button
                    type="button"
                    onClick={() => removeAchievement(achievement)}
                    className="text-gray-400 hover:text-red-400"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Order Index
            </label>
            <input
              type="number"
              value={formData.order_index}
              onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
              min="0"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowEditor(false);
                setEditingExperience(null);
                setFormData({
                  role: '',
                  company: '',
                  period: '',
                  description: '',
                  achievements: [],
                  order_index: 0
                });
                setAchievementInput('');
              }}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <Plus className="h-4 w-4" />
              {editingExperience ? 'Update Experience' : 'Create Experience'}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Experiences ({experiences.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Experience
            </button>
          </div>

          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-white mb-2">
                      {experience.role} at {experience.company}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">{experience.period}</p>
                    <p className="text-gray-300 mb-3">{experience.description}</p>
                    <div className="space-y-1">
                      {experience.achievements.map((achievement, index) => (
                        <div key={index} className="text-sm text-gray-400">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Order: {experience.order_index} | Created: {new Date(experience.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(experience)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(experience.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
