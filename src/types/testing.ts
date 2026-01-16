import type { ElementType } from "react";

export interface AutomationTestingDetailItem {
  title: string;
  description: string;
}

export interface AutomationTestingCardData {
  icon: ElementType;
  category: string;
  title: string;
  description: string;
  tags: string[];
  proficiency: number;
  details: Array<AutomationTestingDetailItem | string>;
  impactDescription: string;
}
