/* ===================================================================
   /logo — A marca (Direção H1) isolada e em aplicações.
   Demonstra as variantes do componente <Logo>.
   =================================================================== */

import Logo from "@/components/Logo";

interface PanelProps {
  stage: "cream" | "dark" | "pink" | "paper";
  capL: string;
  capR: string;
  theme: "light" | "dark" | "pink" | "mono";
}

function ColorPanel({ stage, capL, capR, theme }: PanelProps) {
  return (
    <div className="panel">
      <div className={`stage ${stage}`}>
        <Logo size="lg" theme={theme} />
      </div>
      <div className="cap">
        <span className="l">{capL}</span>
        <span className="r">{capR}</span>
      </div>
    </div>
  );
}

export default function LogoPage() {
  return (
    <div className="logopage">
      <header className="pagehead">
        <p className="eyebrow">Logo · Direção H1 · isolada</p>
        <h1>Serifa fina + script — em uso</h1>
        <p>
          A marca apresentada sozinha e aplicada em diferentes superfícies: fundo claro, fundo
          escuro, sobre o rosa da marca e em versão de uma cor só. Tudo a partir do componente{" "}
          <strong>&lt;Logo /&gt;</strong>.
        </p>
      </header>

      {/* VERSÕES DE COR */}
      <section className="lp-section">
        <div className="shead">
          <span className="idx">01</span>
          <span className="ttl">Versões de cor</span>
          <span className="note">a mesma marca, quatro superfícies</span>
        </div>
        <div className="lp-grid cols-2">
          <ColorPanel stage="cream" theme="light" capL="Principal · fundo claro" capR="creme + rosa" />
          <ColorPanel stage="dark" theme="dark" capL="Reverso · fundo escuro" capR="carvão + creme" />
          <ColorPanel stage="pink" theme="pink" capL="Sobre o rosa da marca" capR="branco sólido" />
          <ColorPanel stage="cream" theme="mono" capL="Uma cor só" capR="carimbo · gravação" />
        </div>
      </section>

      {/* TAMANHOS */}
      <section className="lp-section">
        <div className="shead">
          <span className="idx">02</span>
          <span className="ttl">Tamanhos</span>
          <span className="note">size = nav · sm · md · lg</span>
        </div>
        <div className="lp-grid cols-2">
          <div className="panel">
            <div className="stage cream">
              <Logo size="nav" theme="light" />
            </div>
            <div className="cap">
              <span className="l">Nav · barra superior</span>
              <span className="r">size=&quot;nav&quot;</span>
            </div>
          </div>
          <div className="panel">
            <div className="stage cream">
              <Logo size="sm" theme="light" />
            </div>
            <div className="cap">
              <span className="l">Compacto · cartão / placa</span>
              <span className="r">size=&quot;sm&quot;</span>
            </div>
          </div>
          <div className="panel">
            <div className="stage dark">
              <Logo size="md" theme="dark" />
            </div>
            <div className="cap">
              <span className="l">Médio · rodapé</span>
              <span className="r">size=&quot;md&quot;</span>
            </div>
          </div>
          <div className="panel">
            <div className="stage cream">
              <Logo size="lg" theme="light" />
            </div>
            <div className="cap">
              <span className="l">Grande · hero</span>
              <span className="r">size=&quot;lg&quot;</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCKUP EMPILHADO */}
      <section className="lp-section">
        <div className="shead">
          <span className="idx">03</span>
          <span className="ttl">Lockup empilhado</span>
          <span className="note">avatar · selo · espaços quadrados</span>
        </div>
        <div className="lp-grid cols-2">
          <div className="panel">
            <div className="stage dark">
              <Logo layout="stacked" />
            </div>
            <div className="cap">
              <span className="l">Avatar · redes sociais</span>
              <span className="r">layout=&quot;stacked&quot;</span>
            </div>
          </div>
          <div className="panel">
            <div className="stage pink">
              <Logo layout="stacked" />
            </div>
            <div className="cap">
              <span className="l">Sobre o rosa</span>
              <span className="r">layout=&quot;stacked&quot;</span>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          marginTop: 90,
          paddingTop: 22,
          borderTop: "1px solid var(--line)",
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          color: "color-mix(in oklab, var(--ink) 55%, transparent)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Andy Ribeiro · Beauty</span>
        <span>Direção H1 — Serifa fina + script</span>
      </div>
    </div>
  );
}
