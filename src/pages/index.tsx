import { useState } from "react";

import Image from "next/image";
import Router from "next/router";

import Button from "@components/Button";
import Navigator from "@components/Navigator";

function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("antoniopatarodev@gmail.com");

    setCopied(true);
  };

  const navigateToResume = () => {
    window.open(
      "https://antoniopataro.notion.site/Ant-nio-Pataro-6eef2fba3f5d4e0798dabe414e3fa080",
      "_ blank"
    );
  };

  const navigateToProjects = () => {
    Router.push("/projects");
  };

  const navigateToEducation = () => {
    Router.push("/education");
  };

  const navigateToAlgorithms = () => {
    window.open("https://leetcode.com/antoniopataro", "_blank", "noreferrer");
  };

  return (
    <div className="relative w-full min-h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32 bg-background text-text text-sm">
      <header className="flex w-full items-center justify-between gap-8">
        <div className="flex w-full sm:w-fit items-center justify-between sm:justify-start gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/profile-pic.png"
              alt="Antonio Pataro"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="flex items-center gap-1">
                Antonio Pataro
                <Image
                  src="/brazil-flag.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="pointer-events-none"
                />
              </span>
              <span className="text-xs text-text text-opacity-50">
                Software Engineer
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9px] h-6 px-[9px] ring-1 ring-green-500 ring-opacity-20 rounded bg-green-500 bg-opacity-10">
            <span className="w-[3px] h-[3px] rounded-full bg-green-500" />
            <span className="hidden lg:block text-xs text-green-500">
              Available for new projects
            </span>
            <span className="block lg:hidden text-xs text-green-500">
              Available
            </span>
          </div>
          <div className="hidden md:block">
            <Navigator input="/" handler={navigateToResume}>
              <Button behaviour="navigator" label="Resume" />
            </Navigator>
          </div>
          <button
            onClick={navigateToResume}
            className="hidden sm:flex md:hidden items-center justify-center gap-[9px] h-6 px-3 outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default"
          >
            <span className="w-[3px] h-[3px] rounded-full bg-text" />
            <span className="text-xs">Resume</span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="cursor-default hidden xl:block">
            antoniopatarodev@gmail.com
          </span>
          <span className="cursor-default block xl:hidden">E-mail</span>
          <Button onClick={copyEmail}>
            <Image
              src="/icons/copy.svg"
              alt="antoniopatarodev@gmail.com"
              width={12}
              height={12}
              className="pointer-events-none"
            />
          </Button>
        </div>
      </header>
      <main className="mt-16">
        <div className="flex flex-col max-w-[510px] gap-4">
          <p>Hello! 👋</p>
          <p>
            I&apos;m a passionate developer from{" "}
            <span className="text-green-500">Brazil</span> who&apos;s very
            experienced in building Typescript/Go Fullstack (front-end-heavy)
            modern applications.
          </p>
          <p>
            I have behind-the-scenes awereness, preciousness to detail, and lots
            of curiosity.
          </p>
          <p>I am adaptable, easygoing and always open to new challenges.</p>
        </div>
        <nav className="mt-16 pb-16 border-b border-b-text border-opacity-10">
          <ul className="hidden md:flex w-fit items-center gap-8">
            <li>
              <Navigator input="P" handler={navigateToProjects}>
                <Button behaviour="navigator" label="Projects" />
              </Navigator>
            </li>
            <li>
              <Navigator input="E" handler={navigateToEducation}>
                <Button behaviour="navigator" label="Education" />
              </Navigator>
            </li>
            <li>
              <Navigator input="A" handler={navigateToAlgorithms}>
                <Button behaviour="navigator" label="Algorithms" />
              </Navigator>
            </li>
          </ul>
          <ul className="flex md:hidden flex-col gap-4">
            <li>
              <button
                onClick={navigateToProjects}
                className="flex items-center justify-center gap-[9px] h-6 px-3 outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default"
              >
                <span className="w-[3px] h-[3px] rounded-full bg-text" />
                <span className="text-xs">Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={navigateToEducation}
                className="flex items-center justify-center gap-[9px] h-6 px-3 outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default"
              >
                <span className="w-[3px] h-[3px] rounded-full bg-text" />
                <span className="text-xs">Education</span>
              </button>
            </li>
            <li>
              <button
                disabled
                className="flex items-center justify-center gap-[9px] h-6 px-3 outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default pointer-events-none opacity-25"
              >
                <span
                  onClick={navigateToAlgorithms}
                  className="w-[3px] h-[3px] rounded-full bg-text"
                />
                <span className="text-xs">Algorithms</span>
              </button>
            </li>
          </ul>
        </nav>
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

export default Home;
