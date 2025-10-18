import { useState, useRef } from 'react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Link, 
  Image, 
  Eye,
  EyeOff,
  Hash,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';

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
    <div className={`flex gap-4 h-full ${isFullscreen ? 'fixed inset-0 z-50 p-4 bg-gray-900' : ''}`}>
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
          className="w-full flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent resize-none font-mono"
        />
      </div>

      {/* Preview Pane */}
      <div className="flex-1 overflow-auto rounded-lg bg-white/5 border border-white/10 p-4">
        <div className="prose prose-invert max-w-none" style={{ fontSize: `${textSize}px` }}>
          <MarkdownRenderer content={value} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
        <div className="flex items-center gap-1">
          {formatButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={index}
                type="button"
                onClick={button.action}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                title={`${button.label} (${button.shortcut})`}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
        
        <div className="h-4 w-px bg-white/20 mx-2" />
        
        {/* Text Size Controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={decreaseTextSize}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Decrease Text Size (Ctrl+-)"
            disabled={textSize <= 10}
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          
          <span className="text-xs text-gray-400 px-2 py-1 bg-white/5 rounded min-w-[3rem] text-center">
            {textSize}px
          </span>
          
          <button
            type="button"
            onClick={increaseTextSize}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Increase Text Size (Ctrl+=)"
            disabled={textSize >= 24}
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          
          <button
            type="button"
            onClick={resetTextSize}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Reset Text Size (Ctrl+0)"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
        
        <div className="h-4 w-px bg-white/20 mx-2" />
        
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className={`p-2 rounded transition-colors ${
            showPreview 
              ? 'text-[#edfc3a] bg-[#edfc3a]/10' 
              : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
          title="Toggle Preview"
        >
          {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>

        {showPreview && (
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        )}

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={copyShortcuts}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors text-xs"
            title="Copy keyboard shortcuts"
          >
            {copiedShortcuts ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
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
          className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent resize-vertical font-mono"
        />
      )}

      {/* Help Text */}
      <div className="text-xs text-gray-500 space-y-1">
        <p><strong>Keyboard shortcuts:</strong> Ctrl+B (bold), Ctrl+I (italic), Ctrl+H (heading), Ctrl+K (link)</p>
        <p><strong>Text size:</strong> Ctrl+= (increase), Ctrl+- (decrease), Ctrl+0 (reset)</p>
        <p><strong>Markdown syntax:</strong> **bold**, *italic*, # heading, - list, &gt; quote, `code`, [link](url), ![alt](url)</p>
        {onImageUpload && (
          <p><strong>Image upload:</strong> Use the Image button in toolbar or drag-drop into image upload component</p>
        )}
      </div>

      {isFullscreen && (
        <button
          type="button"
          onClick={() => setIsFullscreen(false)}
          className="fixed bottom-4 right-4 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors z-50"
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}
