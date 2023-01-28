import { cloneElement, useEffect } from "react";

interface Props {
  children: React.ReactElement;
  handler: () => void;
  input: string;
}

function Navigator(props: Props) {
  const { children, handler, input } = props;

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === input.toLowerCase()) handler();
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [handler, input]);

  return <>{cloneElement(children, { ...props })}</>;
}

export default Navigator;
