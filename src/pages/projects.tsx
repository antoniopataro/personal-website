import Image from "next/image";

import Layout from "@layouts/app.layout";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import projects from "@utils/projects.json";

function Projects() {
  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32">
      <main>
        <div className="flex flex-col max-w-[510px] gap-4 pb-16 text-sm text-[#222222] dark:text-[#DADADA]">
          <p>I&apos;m always working on a project.</p>
          <p>
            Here are some of them. From team projects to solo crafts, some are
            still alive, others have been discontinued.
          </p>
        </div>
        <ul className="flex flex-col max-w-[510px] w-full items-end">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => window.open(project.url, "_blank")}
              className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-all hover:ring-black/10 hover:dark:ring-white/10 hover:ring-opacity-10 hover:bg-opacity-10 after:content-[''] after:absolute after:transition-all after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:dark:bg-white/10 after:bg-black/10 after:opacity-1 hover:after:opacity-0 last:after:opacity-0"
            >
              <span
                className="absolute right-8 top-0 mx-auto h-px w-2/3 bg-red-500 opacity-0 transition-opacity content-[''] group-hover:opacity-50 -translate-y-px"
                style={{
                  background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${project.colors.secondary} 30%, ${project.colors.primary} 60%, ${project.colors.secondary} 30%, rgba(0, 0, 0, 0) 98.93%)`,
                }}
              />
              <div className="flex items-center gap-4 text-sm">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={24}
                  height={24}
                  className="rounded-full pointer-events-none ring-1 ring-black/25 dark:ring-white/25"
                />
                <div>
                  <span className="flex gap-1 transition-all dark:text-[#DADADA] text-black cursor-default">
                    {project.role}
                    <ArrowUpRightIcon className="w-2.5 stroke-2 pointer-events-none transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
                  </span>
                  <span className="text-xs cursor-default dark:text-[#DADADA] text-black text-opacity-50 dark:text-opacity-50">
                    {project.name} ({project.contractType})
                  </span>
                </div>
              </div>
              <span className="cursor-default hidden sm:block text-xs dark:text-[#DADADA] text-black text-opacity-50 dark:text-opacity-50 text-right">
                {project.date}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

Projects.getLayout = function getLayout(projects: React.ReactElement) {
  return <Layout>{projects}</Layout>;
};

export default Projects;
