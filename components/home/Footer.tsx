/* <Footer /> — rodapé escuro com a marca (Logo md, tema dark) + colunas. */
import Logo from "@/components/Logo";
import { NAV_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="top">
          <div>
            <Logo size="md" theme="dark" />
            <p
              style={{
                maxWidth: 340,
                fontSize: 14,
                lineHeight: 1.6,
                color: "color-mix(in oklab, var(--paper) 60%, transparent)",
                margin: "26px 0 0",
              }}
            >
              Designer de sobrancelhas, lash artist e educadora. Técnica, ciência e propósito em cada
              olhar.
            </p>
          </div>
          <div>
            <div className="lbl">Navegação</div>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="lbl">Contato</div>
            <ul>
              <li>
                <a href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">contato@andyribeiro.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Andy Ribeiro · Todos os direitos reservados</span>
          <span>
            Feito com <a href="#">técnica</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
