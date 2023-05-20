import Image from "next/image";
import Router from "next/router";

import Button from "@components/Button";
import Navigator from "@components/Navigator";

const education = [
  {
    date: "Soon",
    logo: "/education/descomplica.png",
    name: "Analysis and Systems Development",
    description: "Faculdade Descomplica",
  },
  {
    date: "May 2021 - Apr 2023",
    logo: "/education/ufmg.png",
    name: "Aerospace Engineering",
    description: "Universidade Federal de Minas Gerais",
  },
];

const achievements = [
  {
    date: "Jan 2022",
    logo: "/education/obmep.png",
    name: "18th Bronze Medal",
    description: "The Brazilian Mathematical Olympiad of Public Schools",
  },
  {
    date: "Dec 2019",
    logo: "/education/obmep.png",
    name: "Honorable Mention",
    description: "The Brazilian Mathematical Olympiad of Public Schools",
  },
  {
    date: "Aug 2019",
    logo: "/education/iphco.png",
    name: "Silver Medal",
    description: "International Physics & Culture Olympiad",
  },
];

function Education() {
  const navigateBack = () => {
    Router.back();
  };

  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32 bg-background text-text text-sm">
      <header className="flex w-full h-12 items-center justify-between gap-8">
        <div className="hidden md:block">
          <Navigator input="B" handler={navigateBack}>
            <Button behaviour="navigator" label="Back" />
          </Navigator>
        </div>
        <button
          onClick={navigateBack}
          className="flex md:hidden items-center justify-center gap-[9px] h-6 px-3 outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default"
        >
          <span className="w-[3px] h-[3px] rounded-full bg-text" />
          <span className="text-xs">Back</span>
        </button>
      </header>
      <main className="mt-16">
        <p className="max-w-[510px]">
          I&apos;m mainly a self-taught.
          <br />
          <br />
          Altough I&apos;ve spent my whole life in front of computers, I just
          gave programming a real go only a year after joining Aerospace
          Engineering college (which I quit)... and fell in love with it.
          <br />
          <br />
          Here’s my relevant academic history + accomplishments.
        </p>
        <ul className="flex flex-col max-w-[510px] w-full items-end mt-16">
          {education.map((educaion, index) => (
            <li
              key={educaion.name}
              className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-colors hover:ring-text hover:ring-opacity-10 hover:bg-text hover:bg-opacity-10 after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:bg-[#292929] after:opacity-1 hover:after:opacity-0 last:after:opacity-0 first:opacity-25 first:pointer-events-none"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={educaion.logo}
                  alt={educaion.name}
                  width={24}
                  height={24}
                  className="rounded-full pointer-events-none"
                />
                <div>
                  <span className="flex gap-1 transition-all text-text hover:text-opacity-80 cursor-default">
                    {educaion.name}
                  </span>
                  <span className="text-xs text-text text-opacity-50">
                    {educaion.description}
                  </span>
                </div>
              </div>
              <span className="hidden sm:block text-xs text-text text-opacity-50 text-right">
                {educaion.date}
              </span>
            </li>
          ))}
        </ul>
        <span className="flex w-full h-px mt-16 border-t border-text border-opacity-10" />
        <ul className="flex flex-col max-w-[510px] w-full items-end mt-16">
          {achievements.map((achievment, index) => (
            <li
              key={achievment.name}
              className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-colors hover:ring-text hover:ring-opacity-10 hover:bg-text hover:bg-opacity-10 after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:bg-[#292929] after:opacity-1 hover:after:opacity-0 last:after:opacity-0"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={achievment.logo}
                  alt={achievment.name}
                  width={24}
                  height={24}
                  className="rounded-full pointer-events-none"
                />
                <div>
                  <span className="flex gap-1 transition-all text-text hover:text-opacity-80 cursor-default">
                    {achievment.name}
                  </span>
                  <span className="text-xs text-text text-opacity-50">
                    {achievment.description}
                  </span>
                </div>
              </div>
              <span className="hidden sm:block text-xs text-text text-opacity-50 text-right">
                {achievment.date}
              </span>
            </li>
          ))}
        </ul>
        <span className="flex w-full h-px mt-16 border-t border-text border-opacity-10" />
      </main>
      <footer className="flex flex-col sm:flex-row items-center gap-8 sm:gap-4 mt-16">
        <div className="flex gap-4">
          <a
            href="https://github.com/antoniopataro"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/social/github.svg"
              alt=""
              width={16}
              height={16}
              className="pointer-events-none"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/antoniopataro"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/social/linkedin.svg"
              alt=""
              width={16}
              height={16}
              className="pointer-events-none"
            />
          </a>
        </div>
        <span className="hidden md:block text-text text-opacity-50">
          Antonio Pataro © {new Date().getFullYear()}
        </span>
        <span className="block md:hidden text-text text-opacity-50 text-center">
          antoniopatarodev@gmail.com © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

export default Education;
