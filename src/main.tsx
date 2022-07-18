import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./pages";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

import ContextProvider from "./context/ContextProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects/*" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
);
