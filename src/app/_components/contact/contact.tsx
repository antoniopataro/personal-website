import Link from "next/link";

import { EMAIL } from "@/shared/constants";

export const Contact: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 p-6">
      <p className="text-sober text-sm leading-5">
        Want to work together? Email me at{" "}
        <Link
          className="underline"
          href={`mailto:${EMAIL}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {EMAIL}.
        </Link>
      </p>
    </section>
  );
};
