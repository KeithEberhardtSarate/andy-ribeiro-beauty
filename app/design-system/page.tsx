/* ===================================================================
   /design-system — referência viva do sistema (tokens + componentes).
   Usa os mesmos componentes reutilizáveis do site.
   =================================================================== */

import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import MetaRow from "@/components/ui/MetaRow";
import Badge from "@/components/ui/Badge";

const SURFACE_COLORS = [
  { nm: "Blush", v: "--blush", val: "oklch(0.965 0.012 12)" },
  { nm: "Pink light", v: "--pink-light", val: "oklch(0.96 0.04 5)" },
  { nm: "Paper", v: "--paper", val: "oklch(0.985 0.008 20)" },
  { nm: "Line", v: "--line", val: "oklch(0.86 0.018 10)" },
];

const ACCENT_COLORS = [
  { nm: "Pink", v: "--pink · acento", val: "oklch(0.62 0.22 5)" },
  { nm: "Pink bleed", v: "--pink-bg", val: "oklch(0.66 0.22 5)" },
  { nm: "Ink", v: "--ink · texto", val: "oklch(0.17 0.012 350)" },
  { nm: "Ink 2", v: "--ink-2 · frames", val: "oklch(0.22 0.015 350)" },
];

function Swatch({ nm, v, val, varName }: { nm: string; v: string; val: string; varName: string }) {
  return (
    <div className="sw">
      <div className="chip" style={{ background: `var(${varName})` }} />
      <div className="meta">
        <div className="nm">{nm}</div>
        <div className="var">{v}</div>
        <div className="val">{val}</div>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      {/* HERO */}
      <header className="ds-hero">
        <div className="wrap">
          <MetaRow left="Brand system" right="v1.0 · 2026" />
          <div className="small-line" style={{ marginBottom: 0 }} />
          <div className="kicker">Identidade visual &amp; biblioteca de componentes</div>
          <h1>
            Sistema de
            <br />
            <em>design.</em>
          </h1>
          <p className="lede">
            A linguagem visual de <strong>Andy Ribeiro</strong> — editorial de revista, serif
            dramática com itálico magenta, mono em caixa-alta e fundo creme rosado. Estes são os{" "}
            <strong>tokens e componentes</strong> que mantêm site, landing pages, blog e cursos
            coerentes.
          </p>
        </div>
      </header>

      {/* PRINCÍPIOS */}
      <section className="ds-sec dark">
        <div className="wrap">
          <div className="ds-sechead">
            <span className="idx">00</span>
            <h2>
              Princípios<em>.</em>
            </h2>
          </div>
          <div className="principles">
            <div className="principle">
              <div className="n">01</div>
              <h4>Editorial, não panfleto</h4>
              <p>
                Layouts respiram. Linhas de régua, meta-rows em mono e muito espaço em branco. Cada
                seção parece página de revista.
              </p>
            </div>
            <div className="principle">
              <div className="n">02</div>
              <h4>Serif que fala</h4>
              <p>
                Títulos enormes em Playfair Display. O itálico magenta é o gesto da marca — usado com
                parcimônia, sempre para ênfase.
              </p>
            </div>
            <div className="principle">
              <div className="n">03</div>
              <h4>Magenta com intenção</h4>
              <p>
                O rosa é acento, não preenchimento. Aparece em detalhes, ênfases e em blocos
                full-bleed que pontuam o ritmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORES */}
      <section className="ds-sec" id="cores">
        <div className="wrap">
          <div className="ds-sechead">
            <span className="idx">01</span>
            <h2>
              Paleta<em>.</em>
            </h2>
            <span className="ds-note">Definida em oklch</span>
          </div>
          <div className="sw-grid" style={{ marginBottom: 20 }}>
            {SURFACE_COLORS.map((c) => (
              <Swatch key={c.nm} nm={c.nm} v={c.v} val={c.val} varName={c.v.split(" ")[0]} />
            ))}
          </div>
          <div className="sw-grid">
            {ACCENT_COLORS.map((c) => (
              <Swatch key={c.nm} nm={c.nm} v={c.v} val={c.val} varName={c.v.split(" ")[0]} />
            ))}
          </div>
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="ds-sec tint" id="tipografia">
        <div className="wrap">
          <div className="ds-sechead">
            <span className="idx">02</span>
            <h2>
              Tipografia<em>.</em>
            </h2>
            <span className="ds-note">3 famílias</span>
          </div>

          <div className="ds-type-row">
            <div className="ds-type-meta">
              <div className="fam">Playfair Display</div>
              <div className="use">Serif. Títulos, números e o itálico de ênfase. O rosto da marca.</div>
              <div className="stack">--serif</div>
            </div>
            <div>
              <div
                className="spec-serif"
                style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                Beleza com{" "}
                <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--pink)" }}>técnica</em>
              </div>
            </div>
          </div>

          <div className="ds-type-row">
            <div className="ds-type-meta">
              <div className="fam">Manrope</div>
              <div className="use">Sans. Corpo de texto, parágrafos e descrições. Legível e neutra.</div>
              <div className="stack">--sans</div>
            </div>
            <div>
              <div
                className="spec-sans"
                style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 560 }}
              >
                Conhecer a química é o que separa a aplicação amadora do trabalho realmente
                profissional. <strong style={{ color: "var(--ink)" }}>Técnica, prática e propósito.</strong>
              </div>
            </div>
          </div>

          <div className="ds-type-row">
            <div className="ds-type-meta">
              <div className="fam">JetBrains Mono</div>
              <div className="use">
                Mono. Eyebrows, meta-rows, labels e legendas — sempre em caixa-alta e tracked.
              </div>
              <div className="stack">--mono</div>
            </div>
            <div>
              <div
                className="spec-mono"
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--pink)",
                }}
              >
                Especialista em olhar · Est. 2017
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENTES */}
      <section className="ds-sec" id="componentes">
        <div className="wrap">
          <div className="ds-sechead">
            <span className="idx">03</span>
            <h2>
              Componentes<em>.</em>
            </h2>
            <span className="ds-note">Reutilizáveis</span>
          </div>

          <div className="demo-grid">
            <div className="demo">
              <span className="lab">Botões · claro</span>
              <div className="pad">
                <Button href="#">Primário</Button>
                <Button href="#" variant="ghost">
                  Ghost
                </Button>
              </div>
            </div>
            <div className="demo dark">
              <span className="lab">Botões · escuro</span>
              <div className="pad">
                <Button href="#" onDark>
                  Primário
                </Button>
                <Button href="#" variant="ghost" onDark>
                  Ghost
                </Button>
              </div>
            </div>

            <div className="demo">
              <span className="lab">Eyebrow &amp; badge</span>
              <div className="pad" style={{ gap: 24 }}>
                <Eyebrow>Capítulo zero · bem-vinda</Eyebrow>
              </div>
              <div className="pad">
                <Badge>Lote 01</Badge>
                <Badge>Disponível</Badge>
              </div>
            </div>
            <div className="demo">
              <span className="lab">Assinatura</span>
              <div className="pad" style={{ alignItems: "baseline", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 500,
                    fontSize: 38,
                    color: "var(--pink)",
                    transform: "rotate(-3deg)",
                    display: "inline-block",
                  }}
                >
                  Andy
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--ink-mute)",
                  }}
                >
                  @andyribeirobeauty
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28, border: "1px solid var(--line)", background: "var(--paper)", padding: 32 }}>
            <span
              className="lab"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              Meta-row · cabeçalho editorial de seção
            </span>
            <MetaRow left="Atendimento no estúdio" right="06 especialidades" className="" />
          </div>
        </div>
      </section>

      {/* TOKENS NO CÓDIGO */}
      <section className="ds-sec dark">
        <div className="wrap">
          <div className="ds-sechead">
            <span className="idx">04</span>
            <h2>
              Tokens <em>no código.</em>
            </h2>
            <span className="ds-note" style={{ color: "color-mix(in oklab, var(--paper) 50%, transparent)" }}>
              styles/tokens.css
            </span>
          </div>
          <p
            style={{
              maxWidth: 560,
              fontSize: 16,
              lineHeight: 1.65,
              color: "color-mix(in oklab, var(--paper) 80%, transparent)",
              margin: "0 0 36px",
            }}
          >
            Estas variáveis vivem em <strong style={{ color: "var(--paper)", fontWeight: 600 }}>styles/tokens.css</strong> e
            são importadas no <strong style={{ color: "var(--paper)", fontWeight: 600 }}>app/layout.tsx</strong>. Todos os
            componentes consomem esses tokens — mude aqui e o sistema inteiro acompanha.
          </p>
          <div className="code">
            <span className="c">{"/* tokens.css — design tokens Andy Ribeiro */"}</span>
            {"\n:root {\n  "}
            <span className="c">{"/* superfícies */"}</span>
            {"\n  "}
            <span className="p">--blush</span>
            {":      oklch(0.965 0.012 12);\n  "}
            <span className="p">--pink-light</span>
            {": oklch(0.96 0.04 5);\n  "}
            <span className="p">--paper</span>
            {":      oklch(0.985 0.008 20);\n  "}
            <span className="p">--ink</span>
            {":        oklch(0.17 0.012 350);\n  "}
            <span className="p">--ink-2</span>
            {":      oklch(0.22 0.015 350);\n\n  "}
            <span className="c">{"/* acento */"}</span>
            {"\n  "}
            <span className="p">--pink</span>
            {":       oklch(0.62 0.22 5);\n  "}
            <span className="p">--pink-bg</span>
            {":    oklch(0.66 0.22 5);\n\n  "}
            <span className="c">{"/* tipografia (next/font) */"}</span>
            {"\n  "}
            <span className="p">--serif</span>
            {": var(--font-playfair), serif;\n  "}
            <span className="p">--sans</span>
            {":  var(--font-manrope), system-ui;\n  "}
            <span className="p">--mono</span>
            {":  var(--font-jetbrains), monospace;\n}"}
          </div>
        </div>
      </section>
    </>
  );
}
