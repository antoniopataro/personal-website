import { EntityExperience } from "../entity-experience/entity-experience";

export const Awards: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <EntityExperience
          entity="Brazilian Mathematics Olympiad of Public Schools (OBMEP)"
          interval="2020"
          title="Bronze Medal"
        />
        <EntityExperience
          entity="Brazilian Mathematics Olympiad of Public Schools (OBMEP)"
          interval="2019"
          title="Honorable Mention"
        />
        <EntityExperience
          entity="International Physics and Culture Olympiad (IPhCO)"
          interval="2019"
          title="Silver Medal"
        />
      </div>
    </section>
  );
};
