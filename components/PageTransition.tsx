/* <PageTransition /> — anima a entrada de cada rota.
   A `key={pathname}` força o remount a cada navegação, disparando a
   animação CSS `.page-transition` (fade + leve subida). Respeita
   prefers-reduced-motion via CSS. */
"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
