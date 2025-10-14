import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useSkillService } from '../../lib/services/useSkillService';
import { Skill, SkillInsert } from '../../types/database.types';
import { skillSchema } from '../../lib/schemas/skillSchema';
import { getIcon } from '../../utils/iconMap';

interface SkillsAdminProps {
  onClose: () => void;
}

export function SkillsAdmin({ onClose }: SkillsAdminProps) {
  const { skills, isLoading, createSkill, updateSkill, deleteSkill } = useSkillService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [formData, setFormData] = useState<Partial<SkillInsert>>({
    title: '',
    description: '',
    icon: 'Code2',
    level: 0,
    order_index: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const iconOptions = [
    'Code2', 'GitBranch', 'Workflow', 'Kanban', 'Database', 
    'Bug', 'Globe', 'Lightbulb', 'Smartphone', 'Table'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = skillSchema.parse(formData);
      
      if (editingSkill) {
        await updateSkill(editingSkill.id, validatedData);
      } else {
        await createSkill(validatedData);
      }
      
      setShowEditor(false);
      setEditingSkill(null);
      setFormData({
        title: '',
        description: '',
        icon: 'Code2',
        level: 0,
        order_index: 0
      });
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

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setFormData({
      title: skill.title,
      description: skill.description,
      icon: skill.icon,
      level: skill.level,
      order_index: skill.order_index
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      try {
        await deleteSkill(id);
      } catch (error) {
        console.error('Error deleting skill:', error);
        alert('Failed to delete skill');
      }
    }
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
        <h2 className="text-2xl font-semibold text-white">Skills Management</h2>
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
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                  errors.title ? 'border-red-500' : 'border-white/10'
                }`}
                required
              />
              {errors.title && (
                <p className="text-red-400 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Icon
              </label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Level (0-100%)
              </label>
              <input
                type="number"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) || 0 })}
                className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                  errors.level ? 'border-red-500' : 'border-white/10'
                }`}
                min="0"
                max="100"
                required
              />
              {errors.level && (
                <p className="text-red-400 text-sm mt-1">{errors.level}</p>
              )}
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
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowEditor(false);
                setEditingSkill(null);
                setFormData({
                  title: '',
                  description: '',
                  icon: 'Code2',
                  level: 0,
                  order_index: 0
                });
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
              {editingSkill ? 'Update Skill' : 'Create Skill'}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Skills ({skills.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Skill
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <div key={skill.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="text-lg font-medium text-white">{skill.title}</h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleEdit(skill)}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleDelete(skill.id)}
                        className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{skill.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-[#edfc3a] font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#edfc3a] to-[#edfc3a]/80 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">
                    Order: {skill.order_index} | Created: {new Date(skill.created_at).toLocaleDateString()}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
