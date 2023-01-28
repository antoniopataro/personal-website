import Image from "next/image";
import Router from "next/router";

import Button from "@components/Button";
import Navigator from "@components/Navigator";

const projects = [
  {
    date: "Feb 2023",
    logo: "/projects/illdo.png",
    name: "I'll Do",
    git: "https://github.com/antoniopataro/illdo",
    url: "https://illdo.dev",
    shortenUrl: "illdo.dev",
  },
  {
    date: "Dec 2020",
    logo: "/projects/emsuma.png",
    name: "Em Suma",
    git: "https://github.com/emsuma",
    url: "https://emsuma.com.br",
    shortenUrl: "emsuma.com.br",
  },
  {
    date: "Nov 2022",
    logo: "/projects/eru.png",
    name: "Eru",
    git: "https://github.com/antoniopataro/eru",
    url: "https://eru.agency",
    shortenUrl: "eru.agency",
  },
  {
    date: "Aug 2022",
    logo: "/projects/lgpdok.png",
    name: "LGPDOK",
    git: "https://github.com/intelligix/lgpdok-web",
    url: "https://lgpdok.com.br",
    shortenUrl: "lgpdok.com.br",
  },
];

function Projects() {
  const navigateBack = () => {
    Router.back();
  };

  return (
    <div className="fixed overflow-y-scroll w-full h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32 bg-background text-text text-sm">
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
      <main className="mt-16 border-b border-text border-opacity-10 pb-16">
        <p className="max-w-[510px]">
          I can’t stand still. 🏋️‍♂️
          <br />
          <br />
          Due to that, in my free time, I like to design and build software that
          I think will be useful. Some turned into companies, others have been
          discontinued.
        </p>
        <ul className="flex flex-col max-w-[510px] w-full items-end mt-16">
          {projects.map((project, index) => (
            <li
              key={project.name}
              onClick={() => window.open(project.url, "_blank")}
              className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-colors hover:ring-text hover:ring-opacity-10 hover:bg-text hover:bg-opacity-10 after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:bg-[#292929] after:opacity-1 hover:after:opacity-0 last:after:opacity-0 first:opacity-25 first:pointer-events-none"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={24}
                  height={24}
                  className="rounded-full pointer-events-none"
                />
                <div>
                  <span className="flex gap-1 transition-all text-text hover:text-opacity-80 cursor-default">
                    {project.name}
                    <Image
                      src="/icons/arrow.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="pointer-events-none transition-transform group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-80"
                    />
                  </span>
                  <span className="text-xs text-text text-opacity-50">
                    {project.shortenUrl}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:block text-xs text-text text-opacity-50 text-right">
                  {project.date}
                </span>
                <Button onClick={() => window.open(project.git, "_blank")}>
                  <Image
                    src="/social/github.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="pointer-events-none"
                  />
                </Button>
              </div>
            </li>
          ))}
        </ul>
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

export default Projects;
