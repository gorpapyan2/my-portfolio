import { useState } from 'react';
import { MarkdownEditor } from '../components/admin/MarkdownEditor';
import { MarkdownRenderer } from '../components/admin/MarkdownRenderer';
import { Card } from '../components/shared/Card';

export function MarkdownDemo() {
  const [content, setContent] = useState(`# Welcome to Markdown Editor

This is a **bold** statement and this is *italic* text.

## Features

- **Bold text** with \`**text**\`
- *Italic text* with \`*text*\`
- \`Inline code\` with backticks
- [Links](https://example.com) with brackets
- > Blockquotes for emphasis

### Code Example

\`\`\`
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## Lists

1. First item
2. Second item
3. Third item

- Bullet point
- Another bullet
- Final bullet

> This is a blockquote that spans multiple lines
> and provides emphasis to important content.

**Try editing this content** to see the live preview!`);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Markdown Editor Demo</h1>
        <p className="text-gray-300 mb-6">
          This demo shows the new markdown formatting capabilities for blog content. 
          Use the toolbar buttons or keyboard shortcuts to format your text.
        </p>
        
        <MarkdownEditor
          value={content}
          onChange={setContent}
          placeholder="Start writing your blog post..."
          rows={10}
        />
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Rendered Output</h2>
        <MarkdownRenderer content={content} />
      </Card>
    </div>
  );
}
