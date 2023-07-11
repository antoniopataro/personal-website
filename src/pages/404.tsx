import { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";

import Layout from "@layouts/app.layout";

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
    <div className="relative w-full min-h-screen p-32 text-[#DADADA] text-sm">
      <div className="flex flex-col max-w-[510px] gap-4">
        <p>I was not able to find what you were looking for.</p>
        <p>Redirecting you in {timer}.</p>
      </div>
    </div>
  );
}

NotFound.getLayout = function getLayout(notFound: React.ReactElement) {
  return <Layout>{notFound}</Layout>;
};

export default NotFound;
