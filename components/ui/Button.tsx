/* ===================================================================
   <Button /> — botão / link em pílula, mono caixa-alta com seta.
   Renderiza <Link> (interno) ou <a> (externo) — visualmente idêntico.

   Props:
     variant  "solid" | "ghost"          (default "solid")
     onDark   true em superfícies escuras (ink / pink)
     arrow    mostra a seta (default true)
     href     destino
   =================================================================== */

import Link from "next/link";
import Arrow from "./Arrow";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  onDark?: boolean;
  arrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "solid",
  onDark = false,
  arrow = true,
  className,
}: ButtonProps) {
  const classes = [
    "btn",
    variant === "ghost" ? "ghost" : "",
    onDark ? "on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
