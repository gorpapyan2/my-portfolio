import { Technology } from ".";
import { AutomationTestingCard } from "../../AutomationTestingCard";
import { useLanguage } from "../../../context/LanguageContext";

export const TechnologyCard = ({
  technology,
  panelId,
}: {
  technology: Technology;
  panelId?: string;
}) => {
  const { t } = useLanguage();
  const proficiencyLabel = t("home.technologies.proficiencyLevel");
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
      detailsTitle="Detailed Overview"
      impactTitle="Real World Impact"
      panelId={panelId}
      testId={title === "Automation Testing" ? "automation-testing-card" : "technology-card"}
    />
  );
};
