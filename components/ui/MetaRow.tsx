/* ===================================================================
   <MetaRow /> — cabeçalho editorial de seção: régua superior + dois
   rótulos mono (esquerda em magenta, direita neutro).

   Props:
     left / right   conteúdo dos rótulos
     tone           "light" | "dark" | "pink"  (fundo onde aparece)
   =================================================================== */

export interface MetaRowProps {
  left: React.ReactNode;
  right?: React.ReactNode;
  tone?: "light" | "dark" | "pink";
  className?: string;
}

export default function MetaRow({ left, right, tone = "light", className }: MetaRowProps) {
  const classes = [
    "meta-row",
    tone === "dark" ? "on-dark" : "",
    tone === "pink" ? "on-pink" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className="m pink">{left}</span>
      {right != null && <span className="m">{right}</span>}
    </div>
  );
}
