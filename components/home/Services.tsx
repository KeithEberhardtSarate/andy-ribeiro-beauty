/* <Services /> — índice editorial de especialidades do estúdio. */
import MetaRow from "@/components/ui/MetaRow";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="wrap">
        <MetaRow left="Atendimento no estúdio" right="06 especialidades" />

        <div className="head">
          <div>
            <div className="label">No estúdio · presencial</div>
            <h2>
              O que eu faço
              <br />
              pelo seu <em>olhar.</em>
            </h2>
          </div>
          <div className="desc">
            Do design que estrutura o rosto à técnica que prolonga o olhar — cada serviço é pensado
            para realçar a sua beleza natural com segurança. Cada um terá sua própria página com
            detalhes e agendamento.
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <a className="svc" key={svc.n} href={svc.href}>
              <div className="n">{svc.n}</div>
              <div>
                <h4>{svc.title}</h4>
                <p>{svc.desc}</p>
              </div>
              <div className="go">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
