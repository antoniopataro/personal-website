import { PropsWithChildren } from "react";

type Props = {
  entity: string;
  interval: string;
  title: string;
};

export const EntityExperience: React.FC<PropsWithChildren<Props>> = ({
  children,
  entity,
  interval,
  title,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-fit flex-col gap-0.5">
        <span className="text-muted w-fit text-xs leading-none">
          {interval}
        </span>
        <h3 className="text-sober w-fit text-sm leading-[17.14px] font-semibold">
          {title}, {entity}
        </h3>
      </div>
      {children ? (
        <div className="text-sober flex flex-col gap-3 text-sm leading-5">
          {children}
        </div>
      ) : null}
    </div>
  );
};
