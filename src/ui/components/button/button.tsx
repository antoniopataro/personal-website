import { PropsWithChildren } from "react";

import { cn } from "@/ui/utils/cn/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex w-fit cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-xs font-medium text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
