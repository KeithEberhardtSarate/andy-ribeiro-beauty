/* <Nav /> — barra superior sticky com a marca (Logo nav) + links. */
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS, INSTAGRAM_URL } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="top">
      <div className="wrap">
        <Logo size="nav" theme="light" href="#top" />
        <div className="links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button href={INSTAGRAM_URL}>Instagram</Button>
        </div>
      </div>
    </nav>
  );
}
