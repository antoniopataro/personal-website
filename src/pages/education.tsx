import Image from "next/image";

import Layout from "@layouts/app.layout";

import achievements from "@utils/achievements.json";
import education from "@utils/education.json";

function Education() {
  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32">
      <main>
        <div className="flex flex-col max-w-[510px] gap-4 pb-16 text-sm text-[#222222] dark:text-[#DADADA]">
          <p>I&apos;m mainly a self-taught.</p>
          <p>
            Altough I&apos;ve spent my whole life in front of computers, I just
            gave programming a real go only a year after joining Aerospace
            Engineering college (which I quit)... and fell in love with it.
          </p>
          <p>Here&apos;s my relevant academic history + accomplishments.</p>
        </div>
        <div className="max-w-[510px] flex flex-col divide-y dark:divide-white/10 divide-black/10">
          <ul className="flex flex-col w-full items-end pb-16">
            {education.map((education, index) => (
              <li
                key={index}
                className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-all hover:ring-black/10 hover:dark:ring-white/10 hover:ring-opacity-10 hover:bg-opacity-10 after:content-[''] after:absolute after:transition-all after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:dark:bg-white/10 after:bg-black/10 after:opacity-1 hover:after:opacity-0 last:after:opacity-0"
              >
                <span
                  className="absolute right-8 top-0 mx-auto h-px w-2/3 opacity-0 transition-opacity content-[''] group-hover:opacity-50 -translate-y-px"
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${education.colors.secondary} 30%, ${education.colors.primary} 60%, ${education.colors.secondary} 30%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                />
                <div className="flex items-center gap-4 text-sm">
                  <Image
                    src={education.logo}
                    alt={education.name}
                    width={24}
                    height={24}
                    className="rounded-full pointer-events-none"
                  />
                  <div>
                    <span className="flex gap-1 transition-all dark:text-[#DADADA] text-[#222222] cursor-default">
                      {education.name}
                    </span>
                    <span className="text-xs cursor-default dark:text-[#DADADA] text-[#222222] text-opacity-50 dark:text-opacity-50">
                      {education.description}
                    </span>
                  </div>
                </div>
                <span className="cursor-default hidden sm:block text-xs dark:text-[#DADADA] text-[#222222] text-opacity-50 dark:text-opacity-50 text-right">
                  {education.date}
                </span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col w-full items-end pt-16">
            {achievements.map((achievment, index) => (
              <li
                key={index}
                className="relative group flex w-full items-center justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-all hover:ring-black/10 hover:dark:ring-white/10 hover:ring-opacity-10 hover:bg-opacity-10 after:content-[''] after:absolute after:transition-all after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:dark:bg-white/10 after:bg-black/10 after:opacity-1 hover:after:opacity-0 last:after:opacity-0"
              >
                <span
                  className="absolute right-8 top-0 mx-auto h-px w-2/3 opacity-0 transition-opacity content-[''] group-hover:opacity-50 -translate-y-px"
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${achievment.colors.secondary} 30%, ${achievment.colors.primary} 60%, ${achievment.colors.secondary} 30%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                />
                <div className="flex items-center gap-4 text-sm">
                  <Image
                    src={achievment.logo}
                    alt={achievment.name}
                    width={24}
                    height={24}
                    className="rounded-full pointer-events-none"
                  />
                  <div>
                    <span className="flex gap-1 transition-all dark:text-[#DADADA] text-[#222222] cursor-default">
                      {achievment.name}
                    </span>
                    <span className="text-xs cursor-default dark:text-[#DADADA] text-[#222222] text-opacity-50 dark:text-opacity-50">
                      {achievment.description}
                    </span>
                  </div>
                </div>
                <span className="cursor-default hidden sm:block text-xs dark:text-[#DADADA] text-[#222222] text-opacity-50 dark:text-opacity-50 text-right">
                  {achievment.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

Education.getLayout = function getLayout(education: React.ReactElement) {
  return <Layout>{education}</Layout>;
};

export default Education;
