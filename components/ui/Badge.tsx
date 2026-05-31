/* <Badge /> — etiqueta mono contornada em magenta. */
export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}
