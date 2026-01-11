import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useEducationService } from '../../lib/services/useEducationService';
import { Education, EducationInsert } from '../../types/database.types';
import { educationSchema } from '../../lib/schemas/educationSchema';
import { TranslationText } from '../../components/shared/TranslationText';

interface EducationAdminProps {
  onClose: () => void;
}

export function EducationAdmin({ onClose }: EducationAdminProps) {
  const { education, isLoading, createEducation, updateEducation, deleteEducation } = useEducationService();
  const [showEditor, setShowEditor] = useState(false);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [formData, setFormData] = useState<Partial<EducationInsert>>({
    degree: '',
    school: '',
    year: '',
    description: '',
    order_index: 0
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = educationSchema.parse(formData);
      
      if (editingEducation) {
        await updateEducation(editingEducation.id, validatedData);
      } else {
        await createEducation(validatedData);
      }
      
      setShowEditor(false);
      setEditingEducation(null);
      setFormData({
        degree: '',
        school: '',
        year: '',
        description: '',
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

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    setFormData({
      degree: education.degree,
      school: education.school,
      year: education.year,
      description: education.description,
      order_index: education.order_index
    });
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this education entry?')) {
      try {
        await deleteEducation(id);
      } catch (error) {
        console.error('Error deleting education:', error);
        alert('Failed to delete education entry');
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
        <h2 className="text-2xl font-semibold text-white">
          <TranslationText translationKey="admin.education.title" as="span" shimmerWidth="220px" />
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      {showEditor ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Degree
            </label>
            <input
              type="text"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.degree ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="e.g., B.Sc. in Information Technology"
              required
            />
            {errors.degree && (
              <p className="text-red-400 text-sm mt-1">{errors.degree}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              School
            </label>
            <input
              type="text"
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.school ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="e.g., National Polytechnic University of Armenia"
              required
            />
            {errors.school && (
              <p className="text-red-400 text-sm mt-1">{errors.school}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Year
            </label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent ${
                errors.year ? 'border-red-500' : 'border-white/10'
              }`}
              placeholder="e.g., Graduated May 2024"
              required
            />
            {errors.year && (
              <p className="text-red-400 text-sm mt-1">{errors.year}</p>
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
              placeholder="Additional details about the education"
              required
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">{errors.description}</p>
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

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowEditor(false);
                setEditingEducation(null);
                setFormData({
                  degree: '',
                  school: '',
                  year: '',
                  description: '',
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
              {editingEducation ? 'Update Education' : 'Create Education'}
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Education ({education.length})</h3>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Education
            </button>
          </div>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mb-2">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-300 mb-2">{edu.description}</p>
                    <div className="text-xs text-gray-500">
                      Order: {edu.order_index} | Created: {new Date(edu.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(edu)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
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
