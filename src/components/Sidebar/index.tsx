import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Tooltip from "@components/Tooltip";

import { getItem, setItem } from "@services/storage";

import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  CommandLineIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import useOnClickOutside from "@hooks/useOnClickOutside";

function Sidebar() {
  const { pathname, push, reload } = useRouter();

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailButtonRef = useRef<HTMLButtonElement>(null);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("antoniopatarodev@gmail.com");

    setCopiedEmail(true);
  }, []);

  const navigateToAlgorithms = useCallback(() => {
    window.open("https://leetcode.com/antoniopataro", "_blank", "noreferrer");
  }, []);

  const navigateToEducation = useCallback(() => {
    push("/education");
  }, [push]);

  const navigateToGitHub = useCallback(() => {
    window.open("https://github.com/antoniopataro", "_blank");
  }, []);

  const navigateToHome = useCallback(() => {
    push("/");
  }, [push]);

  const navigateToProjects = useCallback(() => {
    push("/projects");
  }, [push]);

  const navigateToRecommendations = useCallback(() => {
    push("/recommendations");
  }, [push]);

  const navigateToResume = useCallback(() => {
    window.open(
      "https://antoniopataro.notion.site/Ant-nio-Pataro-6eef2fba3f5d4e0798dabe414e3fa080",
      "_blank"
    );
  }, []);

  const toggleTheme = useCallback(() => {
    getItem("theme") === "dark"
      ? setItem("theme", "light")
      : setItem("theme", "dark");

    reload();
  }, [reload]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "a") {
        navigateToAlgorithms();
      }

      if (e.key.toLowerCase() === "b") {
        navigateToHome();
      }

      if (e.key.toLowerCase() === "d") {
        navigateToResume();
      }

      if (e.key.toLowerCase() === "e") {
        navigateToEducation();
      }

      if (e.key.toLowerCase() === "g") {
        navigateToGitHub();
      }

      if (e.key.toLowerCase() === "m") {
        copyEmail();
      }

      if (e.key.toLowerCase() === "p") {
        navigateToProjects();
      }

      if (e.key.toLowerCase() === "r") {
        navigateToRecommendations();
      }

      if (e.key.toLowerCase() === "t") {
        toggleTheme();
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [
    copyEmail,
    navigateToHome,
    navigateToAlgorithms,
    navigateToEducation,
    navigateToGitHub,
    navigateToProjects,
    navigateToRecommendations,
    navigateToResume,
    toggleTheme,
  ]);

  useOnClickOutside(copyEmailButtonRef, () => setCopiedEmail(false));

  return (
    <div className="fixed left-0 z-10 flex flex-col w-fit h-screen justify-between p-3 border-r border-black/10 dark:border-white/10 bg-[#F6F6F6] dark:bg-[#262626]">
      <div className={pathname === "/" ? "opacity-0 pointer-events-none" : ""}>
        <Tooltip message="Back (B)">
          <button
            onClick={navigateToHome}
            className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
          >
            <ArrowLeftIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
          </button>
        </Tooltip>
      </div>
      <nav className="flex flex-col divide-y divide-[#DADADA]/10">
        <ul className="flex flex-col gap-3 pb-3">
          <li>
            <Tooltip message="Projects (P)">
              <Link
                href="/projects"
                className="relative group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <ArchiveBoxIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip message="Education (E)">
              <Link
                href="/education"
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <AcademicCapIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip message="Go to algorithms (A)">
              <button
                onClick={navigateToAlgorithms}
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <CommandLineIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
              </button>
            </Tooltip>
          </li>
          <li>
            <Tooltip message="Recommendations (R)">
              <Link
                href="/recommendations"
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <ChatBubbleLeftEllipsisIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
              </Link>
            </Tooltip>
          </li>
        </ul>
        <ul className="flex flex-col gap-3 pt-3">
          <li>
            <Tooltip message="Go to GitHub (G)">
              <button
                onClick={navigateToGitHub}
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <span className="w-4 h-4 grid place-items-center dark:black/75 stroke-[#717171] dark:stroke-[#DADADA] dark:black/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M9.3208 13V10.6C9.40984 9.84837 9.17996 9.09408 8.6808 8.5C10.6008 8.5 12.5208 7.3 12.5208 5.2C12.572 4.45 12.348 3.712 11.8808 3.1C12.06 2.41 12.06 1.69 11.8808 1C11.8808 1 11.2408 1 9.9608 1.9C8.2712 1.6 6.53041 1.6 4.8408 1.9C3.56081 1 2.92081 1 2.92081 1C2.72881 1.69 2.72881 2.41 2.92081 3.1C2.4548 3.70953 2.22863 4.45167 2.28081 5.2C2.28081 7.3 4.20081 8.5 6.1208 8.5C5.8712 8.794 5.6856 9.13 5.5768 9.49C5.468 9.85 5.436 10.228 5.4808 10.6V13"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.48 10.6C2.5936 11.8 2.28 9.40002 1 9.40002"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              message={copiedEmail ? "Copied to clipboard" : "Copy email (M)"}
            >
              <button
                onClick={copyEmail}
                ref={copyEmailButtonRef}
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                {copiedEmail ? (
                  <CheckIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
                ) : (
                  <EnvelopeIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
                )}
              </button>
            </Tooltip>
          </li>
          <li>
            <Tooltip message="Go to resume (D)">
              <button
                onClick={navigateToResume}
                className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
              >
                <DocumentTextIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
              </button>
            </Tooltip>
          </li>
        </ul>
      </nav>
      <Tooltip message="Change theme (T)">
        <button
          onClick={toggleTheme}
          className="group flex p-1.5 cursor-default hover:bg-[#E4E4E4] dark:hover:bg-[#363636] rounded"
        >
          <SunIcon className="w-4 text-[#717171] dark:text-[#DADADA] dark:black/75 dark:group-active:text-white group-active:text-black" />
        </button>
      </Tooltip>
    </div>
  );
}

export default Sidebar;
