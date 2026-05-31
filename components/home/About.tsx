/* <About /> — bloco "quem sou eu" guiado por foto. */
import Image from "next/image";
import { INSTAGRAM_HANDLE } from "@/lib/content";

export default function About() {
  return (
    <section className="about2" id="sobre">
      <div className="wrap">
        <div className="grid">
          <div className="photo">
            <Image
              src="/photos/andy-b.jpg"
              alt="Andy Ribeiro"
              fill
              style={{ objectFit: "cover", objectPosition: "50% 24%" }}
              sizes="(max-width: 880px) 100vw, 50vw"
            />
            <div className="cap">
              <span className="who">Andy Ribeiro</span>
              <span className="role">Brow &amp; Lash Specialist</span>
            </div>
          </div>
          <div>
            <div className="label">Quem sou eu</div>
            <h2>
              Beleza com
              <br />
              técnica e <em>propósito.</em>
            </h2>
            <p>
              Minha jornada na beleza começou em <strong>2017</strong>, no universo da maquiagem.
              Pouco depois encontrei minha verdadeira paixão no <strong>Design de Sobrancelhas</strong>{" "}
              — área em que atuo há mais de 5 anos.
            </p>
            <p>
              Há quase 2 anos mergulhei também no mundo dos cílios, sempre movida por inovação e
              estudo técnico. Hoje divido conhecimento no digital, criando conteúdo e cursos para
              inspirar outras profissionais da beleza.
            </p>
            <p>
              Acredito que <strong>autoridade se constrói com base sólida</strong> — anatomia,
              química, segurança e um olhar estético treinado.
            </p>
            <div className="signature">
              <span className="sig">Andy</span>
              <span className="who">{INSTAGRAM_HANDLE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
