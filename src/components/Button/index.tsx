import Image from "next/image";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  behaviour?: "navigator";
  external?: boolean;
  handler?: () => void;
  input?: string;
  label?: string;
  role?: "a" | "button";
}

function Button(props: Props) {
  const {
    behaviour,
    children,
    disabled,
    external,
    handler,
    input,
    label,
    role,
  } = props;

  if (behaviour === "navigator") {
    return (
      <button
        disabled={disabled}
        onClick={handler}
        className="group flex items-center gap-4 cursor-default disabled:opacity-50"
      >
        <div className="flex items-center justify-center w-6 h-6 aspect-square outline-none ring-1 ring-text focus:ring-opacity-50 group-focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default">
          <span className="text-xs">{input}</span>
        </div>
        <span className="flex gap-1 transition-all text-text group-hover:text-opacity-80">
          {label}
          {external && (
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={12}
              height={12}
              className="pointer-events-none transition-transform group-hover:translate-x-px group-hover:-translate-y-px group-hover:opacity-80"
            />
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      {...props}
      className="flex items-center justify-center w-6 h-6 aspect-square outline-none ring-1 ring-text focus:ring-opacity-50 ring-opacity-20 rounded bg-white bg-opacity-10 transition-all group-hover:bg-opacity-0 hover:bg-opacity-0 cursor-default disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export default Button;
