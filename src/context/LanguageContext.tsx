import React, { useState, createContext } from "react";

interface LanguageContextProps {
  language: string;
  changeLanguage: () => void;
}

export const Language = createContext({} as LanguageContextProps);

interface Props {
  children: React.ReactNode;
}

function LanguageContext({ children }: Props) {
  const [language, setLanguage] = useState("en");

  function changeLanguage() {
    language === "en" ? setLanguage("pt") : setLanguage("en");
  }

  return <Language.Provider value={{ language, changeLanguage }}>{children}</Language.Provider>;
}

export default LanguageContext;
