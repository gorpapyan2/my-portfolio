/**
 * Sample Markdown Fixture
 * Comprehensive example demonstrating all GitHub-flavored Markdown features
 * Used for testing, documentation, and Storybook stories
 */

export const sampleMarkdown = `
# Getting Started with React Hooks

A comprehensive guide to mastering modern React with hooks and functional components.

## Introduction

React Hooks have revolutionized how we write React components. This guide covers everything you need to know about **hooks** and *functional components*.

### What Are Hooks?

Hooks let you "hook into" React features from function components. They make your code more reusable and easier to understand.

## Core Concepts

### State Management

Here's how to use the \`useState\` hook:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}
\`\`\`

### Side Effects

The \`useEffect\` hook lets you perform side effects in function components:

\`\`\`python
# Example in pseudocode
def useEffect(callback, dependencies):
    """
    Runs callback when dependencies change
    """
    if dependencies_changed:
        callback()
\`\`\`

## Hook Rules

1. Only call hooks at the top level
2. Only call hooks from React function components
3. Don't call hooks conditionally

- Never call hooks inside loops
- Never call hooks inside conditions
- Only use hooks in React functions

## Advanced Patterns

### Custom Hooks

You can create your own hooks to share logic between components:

\`\`\`javascript
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // Subscribe to friend status
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    
    return () => {
      // Unsubscribe
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
\`\`\`

## Comparison Table

| Feature | Class Component | Functional + Hooks |
|---------|-----------------|-------------------|
| State Management | this.state | useState |
| Lifecycle | componentDidMount, etc | useEffect |
| Context | Context API | useContext |
| Memoization | shouldComponentUpdate | useMemo |
| Performance | PureComponent | React.memo |

## Best Practices

> Hooks are backward-compatible. You can adopt them gradually without rewriting your existing components. There is no rush to learn Hooks if you don't want to.

> Remember: each call to a Hook corresponds to exactly one instance of state. That's why we follow the rule of only calling hooks at the top level.

## Task List

- [x] Learn useState
- [x] Learn useEffect  
- [ ] Learn useContext
- [ ] Learn useReducer
- [ ] Create custom hook

## Code Examples

Here's a comparison of how to use hooks vs traditional methods:

\`\`\`javascript
// With Hooks (Recommended)
function MyComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Without Hooks (Legacy)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  componentDidMount() {
    document.title = \`Count: \${this.state.count}\`;
  }
  
  componentDidUpdate() {
    document.title = \`Count: \${this.state.count}\`;
  }
  
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
\`\`\`

## Performance Optimization

The \`useMemo\` hook can help optimize expensive computations:

\`\`\`javascript
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]
);
\`\`\`

Use \`useCallback\` for optimizing function references:

\`\`\`javascript
const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b]
);
\`\`\`

## Strikethrough Text

This feature is ~~no longer~~ supported by React Hooks.

## Links and References

- [React Documentation](https://react.dev)
- [Hooks API Reference](https://react.dev/reference/react)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)

## Definition List

React
:   A JavaScript library for building user interfaces with reusable components

Hook
:   A special function that lets you "hook into" React features

State
:   Data that determines the output of a component

## Inline Formatting

Here are various inline formatting options:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis  
- \`inline code\` for code references
- [Links](https://example.com) with hover effects
- Strike~~through~~ text

## Images

Here's an example image reference:

\`![React Logo](https://react.dev/logo-og.png "React - A JavaScript library for building user interfaces")\`

## Horizontal Rules

---

## Conclusion

React Hooks provide a powerful and elegant way to manage state and side effects in functional components. They improve code reusability, readability, and maintainability.

Start with \`useState\` and \`useEffect\`, then explore more advanced hooks as you become comfortable with them.

---

**Last Updated**: 2024
**Author**: React Documentation Team
`;

/**
 * Shorter sample for quick testing
 */
export const shortSampleMarkdown = `
# Quick Example

## Features

- **Bold** and *italic* text
- \`inline code\` support
- Lists and checkboxes

\`\`\`js
console.log('Hello, World!');
\`\`\`

> A blockquote for emphasis

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`;

/**
 * Complex markdown for edge case testing
 */
export const complexMarkdown = `
# Edge Cases

## Nested Lists

1. First item
   - Nested bullet
   - Another nested
     1. Deep numbered
     2. Another deep
2. Second item

## Task Lists

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed

## Code with Various Languages

\`\`\`python
def hello(name):
    print(f"Hello, {name}!")
\`\`\`

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email?: string;
}
\`\`\`

## Multiple Blockquotes

> First quote

> Second quote with **bold**

> Third quote with \`code\`

## Emphasis Variations

This is _underscored italic_ and __double underscore bold__.

This is ***bold italic*** combined.
`;
