import Code2 from 'lucide-react/dist/esm/icons/code-2';
import GitBranch from 'lucide-react/dist/esm/icons/git-branch';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import Kanban from 'lucide-react/dist/esm/icons/kanban';
import Database from 'lucide-react/dist/esm/icons/database';
import Bug from 'lucide-react/dist/esm/icons/bug';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import Table from 'lucide-react/dist/esm/icons/table';
import type { LucideIcon } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  'Code2': Code2,
  'GitBranch': GitBranch,
  'Workflow': Workflow,
  'Kanban': Kanban,
  'Database': Database,
  'Bug': Bug,
  'Globe': Globe,
  'Lightbulb': Lightbulb,
  'Smartphone': Smartphone,
  'Table': Table,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Code2; // Default fallback icon
}
