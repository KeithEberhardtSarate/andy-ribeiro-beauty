/* <Eyebrow /> — micro-rótulo mono caixa-alta tracked, cor magenta. */
export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={["eyebrow", className].filter(Boolean).join(" ")}>{children}</div>;
}
