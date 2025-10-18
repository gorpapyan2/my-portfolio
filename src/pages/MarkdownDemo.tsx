import { useState } from 'react';
import { MarkdownEditor } from '../components/admin/MarkdownEditor';
import { MarkdownRenderer } from '../components/markdown/MarkdownRenderer';
import { Card } from '../components/shared/Card';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function MarkdownDemo() {
  const { theme, toggleTheme } = useTheme();
  const [content, setContent] = useState(`# Welcome to Enhanced Markdown Editor

This is a **bold** statement and this is *italic* text.

## Features

- **Bold text** with \`**text**\`
- *Italic text* with \`*text*\`
- \`Inline code\` with backticks
- [Links](https://example.com) with brackets
- > Blockquotes for emphasis

### Code Examples

#### JavaScript
\`\`\`javascript
function greetUser(name) {
  const message = \`Hello, \${name}!\`;
  console.log(message);
  return message;
}

const user = "World";
greetUser(user);
\`\`\`

#### TypeScript
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
\`\`\`

#### Python
\`\`\`python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Example usage
for num in fibonacci(10):
    print(num)
\`\`\`

#### CSS
\`\`\`css
.code-block {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 1rem;
  color: white;
  font-family: 'Fira Code', monospace;
}

.code-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
\`\`\`

#### JSON
\`\`\`json
{
  "name": "Enhanced Markdown Editor",
  "version": "2.0.0",
  "features": [
    "GitHub-style themes",
    "Syntax highlighting",
    "Theme switching",
    "Real-time preview"
  ],
  "themes": {
    "dark": ["github-dark", "dracula", "monokai"],
    "light": ["github-light", "light-plus", "min-light"]
  }
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

**Try editing this content** to see the live preview with different themes!`);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-white">Enhanced Markdown Editor</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        <p className="text-gray-300 mb-6">
          This demo shows the enhanced markdown formatting capabilities. Code themes automatically sync with the app theme. 
          Use the toolbar buttons and keyboard shortcuts to format your text.
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
