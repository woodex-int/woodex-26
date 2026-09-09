import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./Icons";

type Variant = "primary" | "light" | "outline-light" | "outline-navy" | "wa";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  light: "btn-light",
  "outline-light": "btn-outline-light",
  "outline-navy": "btn-outline-navy",
  wa: "btn-wa",
};

export default function CTA({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = cn("btn", variantClass[variant], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRightIcon className="arrow h-4 w-4" />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
