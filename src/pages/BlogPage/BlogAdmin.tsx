import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useBlogService } from '../../lib/services/useBlogService';
import { useBlogAdminState } from '../../lib/services/useBlogAdminState';
import { BlogPostForm } from '../../components/admin/BlogPostForm';
import { blogPostSchema } from '../../lib/schemas/blogSchema';
import { isZodError } from '../../lib/utils/zodErrorHandler';
import { BlogPost } from '../../types/database.types';

interface BlogAdminProps {
  onClose: () => void;
}

/**
 * Blog admin management modal for BlogPage
 * Handles CRUD operations with shared form component and state management
 * Displayed as a modal overlay
 */
export function BlogAdmin({ onClose }: BlogAdminProps) {
  const { blogPosts, isLoading, createBlogPost, updateBlogPost, deleteBlogPost } = useBlogService();
  const {
    showEditor,
    setShowEditor,
    editingPost,
    formData,
    errors,
    resetForm,
    setEditingPostData,
    handleFormChange,
    handleValidationError,
    isEditing
  } = useBlogAdminState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = blogPostSchema.parse(formData);

      if (isEditing && editingPost) {
        await updateBlogPost(editingPost.id, validatedData);
      } else {
        await createBlogPost(validatedData);
      }

      resetForm();
    } catch (error) {
      if (isZodError(error)) {
        handleValidationError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPostData(post);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlogPost(id);
      } catch (error) {
        console.error('Error deleting blog post:', error);
        alert('Failed to delete blog post');
      }
    }
  };

  const handleModalClose = () => {
    resetForm();
    onClose();
  };

  if (isLoading && blogPosts.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Blog Admin</h2>
          <button
            onClick={handleModalClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>

        {showEditor ? (
          <div className="space-y-6">
            <BlogPostForm
              isEditing={isEditing}
              formData={formData}
              errors={errors}
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onCancel={resetForm}
              isSubmitting={isSubmitting}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-white">Blog Posts ({blogPosts.length})</h3>
              <button
                onClick={() => setShowEditor(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Post
              </button>
            </div>

            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-medium text-white">{post.title}</h4>
                        {post.published ? (
                          <Eye className="h-4 w-4 text-green-400" />
                        ) : (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Slug: {post.slug}</span>
                        <span>Read time: {post.read_time}</span>
                        <span>Created: {new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
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
      </Card>
    </div>
  );
}
