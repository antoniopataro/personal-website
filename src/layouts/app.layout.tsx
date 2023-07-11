import React from "react";

import Sidebar from "@components/Sidebar";

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#1E1E1E]">
      <Sidebar />
      <div className="w-[calc(100%-56px)] ml-14">{children}</div>
    </div>
  );
}

export default AppLayout;
