/* ===================================================================
   <ImageSlot /> — moldura de imagem editorial.
   Com `src`: renderiza next/image (cobrindo a moldura).
   Sem `src`: placeholder listrado com rótulo mono — troque pela
   foto real passando `src` (ex.: /photos/post-1.jpg).

   O elemento-pai deve definir position/aspect-ratio/overflow
   (ex.: a classe .thumb da seção de blog).
   =================================================================== */

import Image from "next/image";

export interface ImageSlotProps {
  src?: string;
  alt?: string;
  /** Rótulo do placeholder quando não há imagem. */
  placeholder?: string;
}

export default function ImageSlot({ src, alt = "", placeholder = "Imagem" }: ImageSlotProps) {
  if (src) {
    return <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 880px) 100vw, 33vw" />;
  }

  // Sem imagem: o elemento-pai (.thumb) já desenha as listras via ::before.
  // Aqui só posicionamos o rótulo, acima das listras (z-index 2).
  return (
    <span
      aria-label={placeholder}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        display: "grid",
        placeItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--paper)",
          border: "1px solid color-mix(in oklab, white 50%, transparent)",
          padding: "7px 11px",
        }}
      >
        {placeholder}
      </span>
    </span>
  );
}
