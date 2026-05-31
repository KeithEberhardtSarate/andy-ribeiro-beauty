/* <Digital /> — seção escura de cursos & produtos (cards de oferta). */
import MetaRow from "@/components/ui/MetaRow";
import Arrow from "@/components/ui/Arrow";
import { OFFERS } from "@/lib/content";

export default function Digital() {
  return (
    <section className="digital" id="digital">
      <div className="wrap">
        <MetaRow left="No digital" right="Cursos · mentorias · materiais" tone="dark" />

        <div className="label">Educação &amp; produtos</div>
        <h2>
          Aprenda com quem
          <br />
          vive a <em>técnica.</em>
        </h2>
        <p className="intro">
          Reuni anos de estúdio em materiais e formações para profissionais que querem ir além do
          passo a passo. <strong>Cada produto tem sua página completa</strong> — aqui vai uma prévia do
          que você encontra.
        </p>

        <div className="offer-grid">
          {OFFERS.map((offer) => (
            <div className={offer.feature ? "offer feature" : "offer"} key={offer.title}>
              <div className="kind">
                <span>{offer.kind}</span>
                <span className="price">{offer.price}</span>
              </div>
              <h3>
                {offer.title}
                {offer.titleEm && (
                  <>
                    {offer.feature ? <br /> : " "}
                    <em>{offer.titleEm}</em>
                  </>
                )}
              </h3>
              <p>{offer.desc}</p>
              <ul>
                {offer.items.map((item) => (
                  <li key={item}>
                    <span className="ic">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="foot">
                <a href={offer.href} className="ghostlink">
                  {offer.cta}
                  <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
