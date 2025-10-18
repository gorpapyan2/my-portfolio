/**
 * Sample markdown for testing code highlighting features
 */
export const codeSampleMarkdown = `
# Code Highlighting Demo

This document demonstrates all the code highlighting features.

## Basic Code Block

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);
\`\`\`

## Code Block with Title

\`\`\`typescript title="src/utils/helper.ts"
export const calculateSum = (a: number, b: number): number => {
  return a + b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};
\`\`\`

## Highlighted Lines

\`\`\`javascript {2,4-6}
function processData(data) {
  const validated = validateInput(data);
  
  if (!validated) {
    throw new Error('Invalid input');
  }
  
  return transform(validated);
}
\`\`\`

## Diff Highlighting

\`\`\`typescript
function calculateTotal(items: Item[]) {
- return items.reduce((sum, item) => sum + item.price, 0);
+ return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
\`\`\`

## Line Numbers

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Calculate first 10 fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
\`\`\`

## React Component Example

\`\`\`tsx title="components/Button.tsx"
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={\`btn btn-\${variant} btn-\${size} \${className}\`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
\`\`\`

## SQL Query

\`\`\`sql
SELECT 
  users.id,
  users.name,
  COUNT(orders.id) as order_count,
  SUM(orders.total) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.active = true
GROUP BY users.id, users.name
HAVING COUNT(orders.id) > 5
ORDER BY total_spent DESC
LIMIT 10;
\`\`\`

## Shell Script

\`\`\`bash
#!/bin/bash

# Setup development environment
echo "Setting up development environment..."

# Install dependencies
npm install

# Run migrations
npm run migrate

# Start development server
npm run dev
\`\`\`

## Inline Code

You can also use \`inline code\` within paragraphs. For example, the \`useState\` hook in React or the \`Array.map()\` method in JavaScript.

## JSON Configuration

\`\`\`json title="package.json"
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
\`\`\`
`;

