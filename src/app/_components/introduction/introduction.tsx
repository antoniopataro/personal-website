import Image from "next/image";
import Link from "next/link";

import { FIRST_YEAR_OF_EXPERIENCE } from "@/shared/constants";

const yearsOfExperience = new Date().getFullYear() - FIRST_YEAR_OF_EXPERIENCE;

export const Introduction: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 p-6">
      <div className="flex w-fit items-center gap-3">
        <Image alt="Antônio Pataro" height={40} src="/avatar.png" width={40} />
        <div className="flex w-fit flex-col gap-0.5">
          <div className="flex w-fit items-center gap-2">
            <h1 className="text-sober text-sm leading-none font-semibold">
              Antônio Pataro
            </h1>
            <Image alt="Brazil" height={16} src="/brazil-flag.svg" width={16} />
          </div>
          <h2 className="text-muted w-fit text-xs leading-none">
            Software Engineer
          </h2>
        </div>
      </div>
      <div className="text-sober flex flex-col gap-6 text-sm leading-5 [&>*]:w-fit">
        <p>Hi. 👋</p>
        <p>
          I&apos;m Antônio Pataro, a Software Engineer from{" "}
          <Link
            className="underline"
            href="https://maps.app.goo.gl/g6RwabDkVVvQwvSj9"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brazil
          </Link>{" "}
          with {yearsOfExperience} years of experience.
        </p>
        <p>
          In {FIRST_YEAR_OF_EXPERIENCE - 1}, I was an undergraduate student in
          Aerospace Engineering at{" "}
          <Link
            className="underline"
            href="https://ufmg.br"
            rel="noopener noreferrer"
            target="_blank"
          >
            UFMG
          </Link>
          , one of the most prestigious universities in Latin America. During my
          time there, I had my first contact with programming.
        </p>
        <p>
          In {FIRST_YEAR_OF_EXPERIENCE}, I already couldn&apos;t help but learn
          as much as I could, as fast as I could, taking a leap of faith to drop
          out of college and pursue this career as a self-taught. Since then, I
          made my way into this industry, specializing in web development.
        </p>
        <p>
          As a beginner, I enjoyed front-end. Later on, back-end became my
          passion. Now, full-stack development is my specialty ― mainly with
          Node.js and Go.
        </p>
      </div>
    </section>
  );
};
