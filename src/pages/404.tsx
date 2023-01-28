import { useEffect, useState } from "react";

import Image from "next/image";
import Router from "next/router";

import Button from "@components/Button";
import Navigator from "@components/Navigator";

function NotFound() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return;
    }

    Router.push("/");
  }, [timer]);

  const navigateBack = () => {
    Router.back();
  };

  return (
    <div className="fixed overflow-y-scroll w-full h-screen px-8 py-16 sm:p-16 md:p-24 lg:p-32 bg-background text-text text-sm">
      <header className="flex w-full h-12 items-center justify-between gap-8">
        <Navigator input="B" handler={navigateBack}>
          <Button behaviour="navigator" label="Back" />
        </Navigator>
      </header>
      <main className="mt-16">
        I was not able to find what you were looking for...
        <br />
        <br />
        Redirecting you in {timer}.
      </main>
      <footer className="flex items-center gap-4 mt-16 pt-16 border-t border-text border-opacity-10">
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
        <span className="text-text text-opacity-50">
          Antonio Pataro © {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

export default NotFound;
