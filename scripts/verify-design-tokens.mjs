import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const mustContain = [
  { file: 'src/styles/tokens.css', tokens: ['--space-16', '--font-400', '--measure', '--radius-lg'] },
  { file: 'src/components/shared/Card.tsx', tokens: ['var(--space-24)', 'var(--radius-lg)'] },
  { file: 'src/components/home/Hero/HeroButton.tsx', tokens: ['--size-tap'] },
  { file: 'src/components/shared/UnifiedTranslationModal.tsx', tokens: ['modal-panel', 'field'] },
  { file: 'src/pages/AdminLoginPage.tsx', tokens: ['field'] },
];

const missing = [];

for (const { file, tokens } of mustContain) {
  const content = readFileSync(resolve(process.cwd(), file), 'utf8');
  for (const token of tokens) {
    if (!content.includes(token)) {
      missing.push(`${file} -> ${token}`);
    }
  }
}

if (missing.length) {
  console.error('Token usage verification failed:\n' + missing.join('\n'));
  process.exit(1);
}

console.log('Token usage verification passed.');
