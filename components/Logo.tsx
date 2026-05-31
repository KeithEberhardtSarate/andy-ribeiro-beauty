/* ===================================================================
   <Logo /> — A MARCA · Direção H1 (serifa fina + script)
   -------------------------------------------------------------------
   Marca principal: "Andy" (script Pinyon) + "RIBEIRO" (serifa) +
   régua com "BEAUTY" e top-label "LASH-MAKEUP-BROW".

   Props:
     size   "nav" | "sm" | "md" | "lg"   (default "lg")
     theme  "light" | "dark" | "pink" | "mono"  (default "light")
     layout "lockup" | "stacked"  (default "lockup")
     href   se passado, envolve a marca num link
   =================================================================== */

import Link from "next/link";
import type { ReactNode } from "react";

export type LogoSize = "nav" | "sm" | "md" | "lg";
export type LogoTheme = "light" | "dark" | "pink" | "mono";
export type LogoLayout = "lockup" | "stacked";

export interface LogoProps {
  size?: LogoSize;
  theme?: LogoTheme;
  layout?: LogoLayout;
  href?: string;
  className?: string;
  /** Texto acessível do logo. Default: "Andy Ribeiro Beauty". */
  label?: string;
}

function Lockup({ size, theme, className }: { size: LogoSize; theme: LogoTheme; className?: string }) {
  const classes = ["logo", `logo--${size}`, theme !== "light" ? `logo--${theme}` : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={classes} aria-hidden="true">
      <span className="topLabel">LASH-MAKEUP-BROW</span>
      <span className="row">
        <span className="name">Andy</span> RIBEIRO
      </span>
      <span className="ruleRow">
        <span className="l" />
        <span className="nm">BEAUTY</span>
        <span className="l" />
      </span>
    </span>
  );
}

function Stacked({ className }: { className?: string }) {
  return (
    <span className={["logoStack", className].filter(Boolean).join(" ")} aria-hidden="true">
      <span className="name">Andy</span>
      <span className="word">RIBEIRO</span>
      <span className="sub">BEAUTY</span>
    </span>
  );
}

export default function Logo({
  size = "lg",
  theme = "light",
  layout = "lockup",
  href,
  className,
  label = "Andy Ribeiro Beauty",
}: LogoProps) {
  const mark: ReactNode =
    layout === "stacked" ? (
      <Stacked className={className} />
    ) : (
      <Lockup size={size} theme={theme} className={className} />
    );

  if (href) {
    return (
      <Link href={href} aria-label={label} style={{ textDecoration: "none", display: "inline-block" }}>
        {mark}
      </Link>
    );
  }

  return (
    <span role="img" aria-label={label} style={{ display: "inline-block" }}>
      {mark}
    </span>
  );
}
