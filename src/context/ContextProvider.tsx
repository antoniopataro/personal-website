import React from "react";

import LanguageContext from "./LanguageContext";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return <LanguageContext>{children}</LanguageContext>;
}

export default ContextProvider;
