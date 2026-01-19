import type { TechnologyItem } from "../../../lib/services/useTechnologyCatalog";
import { AutomationTestingCard } from "../../AutomationTestingCard";
import { useLanguage } from "../../../context/LanguageContext";

export const TechnologyCard = ({
  technology,
  panelId,
}: {
  technology: TechnologyItem;
  panelId?: string;
}) => {
  const { t } = useLanguage();
  const resolveLabel = (key: string, fallback: string) => {
    const value = t(key);
    return value.startsWith('[missing:') ? fallback : value;
  };
  const proficiencyLabel = resolveLabel('proficiency', 'Proficiency');
  const detailsTitle = resolveLabel('technologies.detailsTitle', 'Detailed Overview');
  const impactTitle = resolveLabel('technologies.impactTitle', 'Real World Impact');
  const {
    icon: Icon,
    title,
    description,
    level,
    detailedDescription,
    realWorldExample,
    category,
    tags,
  } = technology;

  return (
    <AutomationTestingCard
      icon={Icon}
      category={category}
      title={title}
      description={description}
      tags={tags}
      proficiency={level}
      details={detailedDescription}
      impactDescription={realWorldExample}
      proficiencyLabel={proficiencyLabel}
      proficiencyLabelText={proficiencyLabel}
      detailsTitle={detailsTitle}
      impactTitle={impactTitle}
      panelId={panelId}
      testId={technology.slug === "automation-testing" ? "automation-testing-card" : "technology-card"}
    />
  );
};
