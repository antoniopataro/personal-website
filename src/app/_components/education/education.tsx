import { EntityExperience } from "../entity-experience/entity-experience";

export const Education: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <EntityExperience
          entity="Descomplica"
          interval="2023 - Present"
          title="Bachelor's in Computer Science"
        />
        <EntityExperience
          entity="UFMG"
          interval="2021 - 2022"
          title="Bachelor's in Aerospace Engineering"
        />
        <EntityExperience
          entity="IFMG"
          interval="2018 - 2020"
          title="Associate's in Business Administration"
        />
      </div>
    </section>
  );
};
