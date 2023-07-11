import Image from "next/image";
import Link from "next/link";

import Layout from "@layouts/app.layout";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import recommendations from "@utils/recommendations.json";

function Recommendations() {
  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32 text-[#DADADA] text-sm">
      <main>
        <div className="flex flex-col max-w-[510px] gap-4 text-[#222222] dark:text-[#DADADA]">
          <p>I like feedback.</p>
          <p>
            Here are some I gathered on my{" "}
            <Link
              href="https://www.linkedin.com/in/antoniopataro/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block cursor-default"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27a1e5] to-[#0370ac]">
                LinkedIn
              </span>
              <ArrowUpRightIcon className="inline-block w-0 text-[#0370ac] opacity-0 group-hover:w-2.5 stroke-2 pointer-events-none transition-all group-hover:translate-x-px -translate-x-1 group-hover:opacity-80" />
            </Link>{" "}
            of people I&apos;ve worked with.
          </p>
        </div>
        <ul className="flex flex-col max-w-[510px] w-full items-end mt-16">
          {recommendations.map((recommendation, index) => (
            <li
              key={index}
              onClick={() => window.open(recommendation.url, "_blank")}
              className="relative group flex flex-col w-full justify-between gap-8 px-4 py-8 rounded hover:ring-1 transition-all hover:ring-[#DADADA]/10 hover:ring-opacity-10 hover:bg-opacity-10 after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-[calc(100%-56px)] after:h-px after:bg-[#DADADA]/10 dark:after:bg-[#292929] after:opacity-1 hover:after:opacity-0 last:after:opacity-0"
            >
              <span
                className="absolute right-8 top-0 mx-auto h-px w-2/3 opacity-0 transition-opacity content-[''] group-hover:opacity-50 -translate-y-px"
                style={{
                  background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, ${recommendation.colors.secondary} 30%, ${recommendation.colors.primary} 60%, ${recommendation.colors.secondary} 30%, rgba(0, 0, 0, 0) 100%)`,
                }}
              />
              <div className="flex items-center gap-4">
                <Image
                  src={recommendation.author.image}
                  alt={recommendation.author.name}
                  width={24}
                  height={24}
                  className="rounded-full pointer-events-none"
                />
                <div>
                  <span className="flex gap-1 transition-all text-[#222222] dark:text-[#DADADA] cursor-default">
                    {recommendation.author.name}
                    <ArrowUpRightIcon className="w-2.5 stroke-2 pointer-events-none transition-transform group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-80" />
                  </span>
                  <span className="text-xs cursor-default dark:text-[#DADADA] text-[#222222] text-opacity-75 dark:text-opacity-50">
                    {recommendation.author.role}
                  </span>
                </div>
              </div>
              <span className="text-sm text-[#222222] dark:text-[#DADADA] cursor-default text-opacity-75 dark:text-opacity-50">
                {recommendation.message}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

Recommendations.getLayout = function getLayout(
  recommendations: React.ReactElement
) {
  return <Layout>{recommendations}</Layout>;
};

export default Recommendations;
