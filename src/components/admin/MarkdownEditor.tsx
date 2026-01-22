import { useState, useRef } from 'react';
import Bold from 'lucide-react/dist/esm/icons/bold';
import Italic from 'lucide-react/dist/esm/icons/italic';
import List from 'lucide-react/dist/esm/icons/list';
import ListOrdered from 'lucide-react/dist/esm/icons/list-ordered';
import Quote from 'lucide-react/dist/esm/icons/quote';
import Code from 'lucide-react/dist/esm/icons/code';
import Link from 'lucide-react/dist/esm/icons/link';
import Image from 'lucide-react/dist/esm/icons/image';
import Eye from 'lucide-react/dist/esm/icons/eye';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off';
import Hash from 'lucide-react/dist/esm/icons/hash';
import Maximize2 from 'lucide-react/dist/esm/icons/maximize-2';
import Minimize2 from 'lucide-react/dist/esm/icons/minimize-2';
import Copy from 'lucide-react/dist/esm/icons/copy';
import Check from 'lucide-react/dist/esm/icons/check';
import ZoomIn from 'lucide-react/dist/esm/icons/zoom-in';
import ZoomOut from 'lucide-react/dist/esm/icons/zoom-out';
import RotateCcw from 'lucide-react/dist/esm/icons/rotate-ccw';
import { MarkdownRenderer } from './MarkdownRenderer';
import { useLanguage } from '../../context/LanguageContext';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  onImageUpload?: (url: string, alt: string) => void;
}

/**
 * Enhanced Markdown Editor with split-pane preview
 * Supports real-time preview, keyboard shortcuts, and image insertion
 */
export function MarkdownEditor({ 
  value, 
  onChange, 
  placeholder = "Write your content here...", 
  className = "",
  rows = 12,
  onImageUpload
}: MarkdownEditorProps) {
  const { t } = useLanguage();
  const [showPreview, setShowPreview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedShortcuts, setCopiedShortcuts] = useState(false);
  const [textSize, setTextSize] = useState(14); // Default text size in pixels
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Text size management
  const increaseTextSize = () => {
    setTextSize(prev => Math.min(prev + 2, 24)); // Max 24px
  };

  const decreaseTextSize = () => {
    setTextSize(prev => Math.max(prev - 2, 10)); // Min 10px
  };

  const resetTextSize = () => {
    setTextSize(14); // Reset to default
  };

  const insertText = (before: string, after: string = '', placeholder: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const textToInsert = selectedText || placeholder;
    
    const newValue = 
      value.substring(0, start) + 
      before + textToInsert + after + 
      value.substring(end);
    
    onChange(newValue);
    
    // Set cursor position after insertion
    setTimeout(() => {
      const newCursorPos = start + before.length + textToInsert.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const insertAtLineStart = (prefix: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const lineStart = value.substring(0, start).lastIndexOf('\n') + 1;
    
    const newValue = 
      value.substring(0, lineStart) + 
      prefix + 
      value.substring(lineStart);
    
    onChange(newValue);
    
    setTimeout(() => {
      const newCursorPos = start + prefix.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const formatButtons = [
    {
      icon: Bold,
      label: 'Bold',
      action: () => insertText('**', '**', 'bold text'),
      shortcut: 'Ctrl+B'
    },
    {
      icon: Italic,
      label: 'Italic',
      action: () => insertText('*', '*', 'italic text'),
      shortcut: 'Ctrl+I'
    },
    {
      icon: Hash,
      label: 'Heading',
      action: () => insertAtLineStart('## '),
      shortcut: 'Ctrl+H'
    },
    {
      icon: List,
      label: 'Bullet List',
      action: () => insertAtLineStart('- '),
      shortcut: 'Ctrl+Shift+8'
    },
    {
      icon: ListOrdered,
      label: 'Numbered List',
      action: () => insertAtLineStart('1. '),
      shortcut: 'Ctrl+Shift+7'
    },
    {
      icon: Quote,
      label: 'Quote',
      action: () => insertAtLineStart('> '),
      shortcut: 'Ctrl+Shift+>'
    },
    {
      icon: Code,
      label: 'Code Block',
      action: () => insertText('```\n', '\n```', 'code here'),
      shortcut: 'Ctrl+Shift+`'
    },
    {
      icon: Link,
      label: 'Link',
      action: () => insertText('[', '](url)', 'link text'),
      shortcut: 'Ctrl+K'
    },
    {
      icon: Image,
      label: 'Image',
      action: () => insertText('![', '](image-url)', 'alt text'),
      shortcut: 'Ctrl+Shift+I'
    }
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          insertText('**', '**', 'bold text');
          break;
        case 'i':
          e.preventDefault();
          insertText('*', '*', 'italic text');
          break;
        case 'h':
          e.preventDefault();
          insertAtLineStart('## ');
          break;
        case 'k':
          e.preventDefault();
          insertText('[', '](url)', 'link text');
          break;
        case '=':
        case '+':
          e.preventDefault();
          increaseTextSize();
          break;
        case '-':
          e.preventDefault();
          decreaseTextSize();
          break;
        case '0':
          e.preventDefault();
          resetTextSize();
          break;
      }
    }
  };

  const handleContentChange = (newValue: string) => {
    onChange(newValue);
  };

  const copyShortcuts = () => {
    const shortcuts = formatButtons
      .map(b => `${b.label}: ${b.shortcut}`)
      .join('\n');
    
    const textSizeShortcuts = [
      'Increase Text Size: Ctrl+=',
      'Decrease Text Size: Ctrl+-',
      'Reset Text Size: Ctrl+0'
    ].join('\n');
    
    const allShortcuts = shortcuts + '\n\n' + textSizeShortcuts;
    
    navigator.clipboard.writeText(allShortcuts);
    setCopiedShortcuts(true);
    setTimeout(() => setCopiedShortcuts(false), 2000);
  };

  const splitPaneView = (
    <div className={`flex gap-[var(--space-16)] h-full ${isFullscreen ? 'fixed inset-0 z-50 p-[var(--space-16)] bg-[var(--bg)]' : ''}`}>
      {/* Editor Pane */}
      <div className={`flex flex-col flex-1 ${isFullscreen ? 'h-full' : ''}`}>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => handleContentChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={rows}
          style={{ fontSize: `${textSize}px` }}
          className="w-full flex-1 field resize-none font-mono"
        />
      </div>

      {/* Preview Pane */}
      <div className="flex-1 overflow-auto rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--border)] p-[var(--space-16)]">
        <div className="prose prose-invert max-w-none" style={{ fontSize: `${textSize}px` }}>
          <MarkdownRenderer content={value} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`stack [--stack-space:var(--space-12)] ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-[var(--space-8)] p-[var(--space-12)] bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border)]">
        <div className="flex items-center gap-[var(--space-4)]">
          {formatButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={index}
                type="button"
                onClick={button.action}
                className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
                title={`${button.label} (${button.shortcut})`}
              >
                <Icon className="h-[var(--space-16)] w-[var(--space-16)]" />
              </button>
            );
          })}
        </div>
        
        <div className="h-[var(--space-16)] w-px bg-[var(--border)] mx-[var(--space-8)]" />
        
        {/* Text Size Controls */}
        <div className="flex items-center gap-[var(--space-4)]">
          <button
            type="button"
            onClick={decreaseTextSize}
            className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
            title={t('admin.markdown.decreaseTextSize')}
            disabled={textSize <= 10}
          >
            <ZoomOut className="h-[var(--space-16)] w-[var(--space-16)]" />
          </button>
          
          <span className="text-[length:var(--font-100)] text-[var(--text-muted)] px-[var(--space-8)] py-[var(--space-4)] bg-[var(--surface-strong)] rounded-[var(--radius-sm)] min-w-[3rem] text-center">
            {textSize}px
          </span>
          
          <button
            type="button"
            onClick={increaseTextSize}
            className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
            title={t('admin.markdown.increaseTextSize')}
            disabled={textSize >= 24}
          >
            <ZoomIn className="h-[var(--space-16)] w-[var(--space-16)]" />
          </button>
          
          <button
            type="button"
            onClick={resetTextSize}
            className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
            title="Reset Text Size (Ctrl+0)"
          >
            <RotateCcw className="h-[var(--space-16)] w-[var(--space-16)]" />
          </button>
        </div>
        
        <div className="h-[var(--space-16)] w-px bg-[var(--border)] mx-[var(--space-8)]" />
        
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className={`p-2 rounded transition-colors ${
            showPreview 
              ? 'text-accent bg-accent/10' 
              : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)]'
          }`}
          title={t('admin.markdown.togglePreview')}
        >
          {showPreview ? <EyeOff className="h-[var(--space-16)] w-[var(--space-16)]" /> : <Eye className="h-[var(--space-16)] w-[var(--space-16)]" />}
        </button>

        {showPreview && (
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors"
            title={t('admin.markdown.toggleFullscreen')}
          >
            {isFullscreen ? <Minimize2 className="h-[var(--space-16)] w-[var(--space-16)]" /> : <Maximize2 className="h-[var(--space-16)] w-[var(--space-16)]" />}
          </button>
        )}

        <div className="ml-auto flex items-center gap-[var(--space-4)]">
          <button
            type="button"
            onClick={copyShortcuts}
            className="p-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)] rounded-[var(--radius-sm)] transition-colors text-[length:var(--font-100)]"
            title={t('admin.markdown.copyShortcuts')}
          >
            {copiedShortcuts ? (
              <Check className="h-[var(--space-16)] w-[var(--space-16)] text-green-400" />
            ) : (
              <Copy className="h-[var(--space-16)] w-[var(--space-16)]" />
            )}
          </button>
        </div>
      </div>

      {/* Editor/Preview */}
      {showPreview ? splitPaneView : (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => handleContentChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={rows}
          style={{ fontSize: `${textSize}px` }}
          className="w-full field resize-vertical font-mono"
        />
      )}

      {/* Help Text */}
      <div className="text-[length:var(--font-100)] text-[var(--text-muted)] stack [--stack-space:var(--space-4)]">
        <p><strong>{t('admin.markdown.help.keyboardShortcuts')}</strong></p>
        <p><strong>{t('admin.markdown.help.textSize')}</strong></p>
        <p><strong>{t('admin.markdown.help.markdownSyntax')}</strong></p>
        {onImageUpload && (
          <p><strong>{t('admin.markdown.help.imageUpload')}</strong></p>
        )}
      </div>

      {isFullscreen && (
        <button
          type="button"
          onClick={() => setIsFullscreen(false)}
          className="fixed bottom-[var(--space-16)] right-[var(--space-16)] btn btn-primary z-50"
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}

