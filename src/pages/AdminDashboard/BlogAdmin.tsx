import { Plus, Edit, Trash2, Eye, EyeOff, FileText, Calendar, Clock, Globe } from 'lucide-react';
import { useBlogService } from '../../lib/services/useBlogService';
import { useBlogAdminState } from '../../lib/services/useBlogAdminState';
import { BlogPostForm } from '../../components/admin/BlogPostForm';
import { blogPostSchema } from '../../lib/schemas/blogSchema';
import { isZodError } from '../../lib/utils/zodErrorHandler';
import { BlogPost } from '../../types/database.types';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import React from 'react';

interface BlogAdminProps {
  onClose: () => void;
}

/**
 * Blog admin management for AdminDashboard
 * Handles CRUD operations with shared form component and state management
 */
export function BlogAdmin({ onClose }: BlogAdminProps) {
  const { t } = useLanguage();
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

  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
    if (confirm(t('admin.blog.confirm.delete'))) {
      try {
        await deleteBlogPost(id);
      } catch (error) {
        console.error('Error deleting blog post:', error);
        alert(t('admin.blog.error.deleteFailed'));
      }
    }
  };

  if (isLoading && blogPosts.length === 0) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-white">{t('admin.common.loading')}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">
          <TranslationText translationKey="admin.blog.title" as="span" shimmerWidth="180px" />
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      {showEditor ? (
        <div className="space-y-6">
          <BlogPostForm
            isEditing={isEditing}
            editingPostId={editingPost?.id}
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                <TranslationText translationKey="admin.blog.postsTitle" as="span" shimmerWidth="120px" />
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                <TranslationText translationKey="admin.blog.subtitle" as="span" shimmerWidth="300px" />
              </p>
            </div>
            <button
              onClick={() => setShowEditor(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors shadow-lg hover:shadow-xl"
            >
              <Plus className="h-4 w-4" />
              <TranslationText translationKey="admin.blog.addNew" as="span" shimmerWidth="120px" />
            </button>
          </div>

          <div className="space-y-4">
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  <TranslationText translationKey="admin.blog.noPosts" as="span" shimmerWidth="180px" />
                </h3>
                <p className="text-gray-400 mb-4">
                  <TranslationText translationKey="admin.blog.getStarted" as="span" shimmerWidth="350px" />
                </p>
                <button
                  onClick={() => setShowEditor(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <TranslationText translationKey="admin.blog.createFirst" as="span" shimmerWidth="140px" />
                </button>
              </div>
            ) : (
              blogPosts.map((post) => (
                <div key={post.id} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-lg font-medium text-white truncate">{post.title}</h4>
                        <div className="flex items-center gap-2">
                          {post.published ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              <Eye className="h-3 w-3" />
                              {t('admin.blog.status.published')}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              <EyeOff className="h-3 w-3" />
                              {t('admin.blog.status.draft')}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.read_time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          /{post.slug}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                        title={t('admin.blog.editPost')}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors rounded-lg"
                        title={t('admin.blog.deletePost')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
