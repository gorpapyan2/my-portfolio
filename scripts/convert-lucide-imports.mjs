#!/usr/bin/env node

/**
 * Script to convert lucide-react barrel imports to tree-shakeable imports
 *
 * Converts:
 *   import { Icon1, Icon2 } from 'lucide-react';
 *
 * To:
 *   import Icon1 from 'lucide-react/dist/esm/icons/icon1';
 *   import Icon2 from 'lucide-react/dist/esm/icons/icon2';
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Helper to convert PascalCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function convertFile(filePath) {
  const fullPath = resolve(filePath);
  let content = readFileSync(fullPath, 'utf-8');

  // Match: import { Icon1, Icon2, ... } from 'lucide-react';
  const barrelImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;

  let hasChanges = false;

  content = content.replace(barrelImportRegex, (match, imports) => {
    hasChanges = true;

    // Split imports and clean them
    const icons = imports
      .split(',')
      .map(icon => icon.trim())
      .filter(Boolean);

    // Generate individual imports
    const individualImports = icons.map(icon => {
      const kebab = toKebabCase(icon);
      return `import ${icon} from 'lucide-react/dist/esm/icons/${kebab}';`;
    });

    return individualImports.join('\n');
  });

  if (hasChanges) {
    writeFileSync(fullPath, content, 'utf-8');
    console.log(`✓ Converted: ${filePath}`);
    return true;
  }

  return false;
}

// Get files from command line args or stdin
const files = process.argv.slice(2);

if (files.length === 0) {
  console.error('Usage: node convert-lucide-imports.mjs <file1> <file2> ...');
  process.exit(1);
}

let converted = 0;
let skipped = 0;

for (const file of files) {
  try {
    if (convertFile(file)) {
      converted++;
    } else {
      skipped++;
    }
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
}

console.log(`\n✓ Converted: ${converted} files`);
console.log(`○ Skipped: ${skipped} files`);
