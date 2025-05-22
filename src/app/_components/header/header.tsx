import Link from "next/link";

import { EMAIL } from "@/shared/constants";
import { Button } from "@/ui/components/button/button";
import { Icon } from "@/ui/components/icon/icon";

export const Header: React.FC = () => {
  return (
    <header className="border-border mx-auto w-full max-w-xl border-b border-l border-dashed px-6 py-4">
      <div className="flex w-fit items-center gap-3">
        <Link
          href={`mailto:${EMAIL}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="bg-muted">
            <Icon size={12} use="email" />
          </Button>
        </Link>
        <span className="text-muted text-sm">•</span>
        <Link
          href="https://www.linkedin.com/in/antoniopataro"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="bg-blue-500">
            <Icon size={12} use="linkedin" />
          </Button>
        </Link>
        <Link
          href="https://github.com/antoniopataro"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="bg-sober">
            <Icon size={12} use="github" />
          </Button>
        </Link>
      </div>
    </header>
  );
};
