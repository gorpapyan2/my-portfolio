import { useState } from 'react';
import { Share2, Twitter, Linkedin, Link, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ShareButtonProps {
  title: string;
  url: string;
  className?: string;
}

export function ShareButton({ title, url, className = "" }: ShareButtonProps) {
  const { t } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: t('share.checkOutArticle').replace('{title}', title),
          url
        });
        setShowMenu(false);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowMenu(false);
    } catch (error) {
      console.log('Error copying:', error);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    setShowMenu(false);
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
    setShowMenu(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="inline-flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-accent transition-colors text-[length:var(--font-100)]"
        title={t('share.title')}
      >
        <Share2 className="h-[var(--space-16)] w-[var(--space-16)]" />
        <span>{t('share.share')}</span>
      </button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setShowMenu(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full left-0 mt-[var(--space-8)] bg-[var(--surface)] backdrop-blur-sm rounded-[var(--radius-md)] border border-[var(--border)] p-[var(--space-8)] z-20 min-w-[12rem]">
            <div className="stack [--stack-space:var(--space-4)]">
              {navigator.share && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
                >
                  <Share2 className="h-[var(--space-16)] w-[var(--space-16)]" />
                  <span>{t('share.share')}</span>
                </button>
              )}
              
              <button
                onClick={handleTwitterShare}
                className="w-full flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
              >
                <Twitter className="h-[var(--space-16)] w-[var(--space-16)]" />
                <span>{t('share.twitter')}</span>
              </button>
              
              <button
                onClick={handleLinkedInShare}
                className="w-full flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
              >
                <Linkedin className="h-[var(--space-16)] w-[var(--space-16)]" />
                <span>{t('share.linkedin')}</span>
              </button>
              
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
              >
                {copied ? (
                  <Check className="h-[var(--space-16)] w-[var(--space-16)] text-green-400" />
                ) : (
                  <Copy className="h-[var(--space-16)] w-[var(--space-16)]" />
                )}
                <span>{copied ? t('share.copied') : t('share.copyLink')}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

