/* <Hero /> — capa de revista: coluna editorial escura + foto full-bleed. */
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

const INDEX = [
  { href: "#servicos", ix: "01", nm: "Serviços no estúdio", meta: "06 especialidades" },
  { href: "#digital", ix: "02", nm: "Cursos & produtos", meta: "Educação" },
  { href: "#blog", ix: "03", nm: "Blog", meta: "Conteúdo técnico" },
];

export default function Hero() {
  return (
    <section className="hero2" id="top">
      <div className="grid">
        <div className="left">
          <div className="topline">
            <span className="m pink">Andy Ribeiro</span>
            <span className="m">EDIÇÃO 2026 · PORTO ALEGRE</span>
          </div>

          <div style={{ marginTop: 56 }}>
            <Eyebrow>Especialista em olhar</Eyebrow>
            <h1>
              Andy
              <br />
              <em>Ribeiro</em>
            </h1>
            <div className="role">Brow Designer · Lash Artist · Educadora</div>
            <p className="lede">
              Há mais de 5 anos transformo olhares com <strong>técnica, ciência e propósito</strong> — e
              hoje formo profissionais que querem fazer o mesmo.
            </p>
            <div className="cta-row">
              <Button href="#servicos" onDark>
                Ver serviços
              </Button>
              <Button href="#digital" variant="ghost" onDark>
                Cursos & produtos
              </Button>
            </div>

            <nav className="index">
              {INDEX.map((item) => (
                <a key={item.href} href={item.href}>
                  <span className="ix">{item.ix}</span>
                  <span className="nm">{item.nm}</span>
                  <span className="meta">{item.meta}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="photo-col">
          <span className="frame-tag">Editorial · Andy Ribeiro</span>
          <Image
            src="/photos/andy-hero-new.jpg"
            alt="Andy Ribeiro"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "50% 24%" }}
            sizes="(max-width: 880px) 100vw, 50vw"
          />
          <span className="issue">Nº 01 · O olhar</span>
        </div>
      </div>
    </section>
  );
}
