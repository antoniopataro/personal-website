import { Awards } from "./_components/awards/awards";
import { Contact } from "./_components/contact/contact";
import { Education } from "./_components/education/education";
import { Experiences } from "./_components/experiences/experiences";
import { Introduction } from "./_components/introduction/introduction";

export default function Home() {
  return (
    <div className="border-border divide-border mx-auto flex w-full max-w-xl grow flex-col divide-y divide-dashed border-l border-dashed">
      <Introduction />
      <Experiences />
      <Education />
      <Awards />
      <Contact />
    </div>
  );
}
