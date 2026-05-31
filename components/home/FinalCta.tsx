/* <FinalCta /> — chamada final full-bleed magenta. */
import Button from "@/components/ui/Button";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="wrap">
        <div className="label">Vamos nos conhecer</div>
        <h2>
          O seu olhar
          <br />
          merece <em>técnica.</em>
        </h2>
        <p>
          Acompanhe o dia a dia do estúdio, bastidores e conteúdo técnico no Instagram — é por lá
          que tudo começa.
        </p>
        <Button href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</Button>
      </div>
    </section>
  );
}
