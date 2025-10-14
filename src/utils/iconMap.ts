import { 
  Code2, 
  GitBranch, 
  Workflow, 
  Kanban, 
  Database, 
  Bug, 
  Globe, 
  Lightbulb, 
  Smartphone, 
  Table,
  LucideIcon
} from 'lucide-react';

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
