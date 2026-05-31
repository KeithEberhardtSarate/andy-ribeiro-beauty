/* ===================================================================
   CONTEÚDO · dados editoriais da homepage (separados da apresentação).
   Troque/expanda à vontade — as seções consomem estes arrays.
   =================================================================== */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cursos", href: "#digital" },
  { label: "Blog", href: "#blog" },
];

export const INSTAGRAM_URL = "https://instagram.com/andyribeirobeauty";
export const INSTAGRAM_HANDLE = "@andyribeirobeauty";

export interface Service {
  n: string;
  title: string;
  desc: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    n: "01",
    title: "Design de Sobrancelhas",
    desc: "Visagismo aplicado: leitura do rosto, mapeamento e simetria para um desenho que valoriza os seus traços.",
    href: "#",
  },
  {
    n: "02",
    title: "Brow Lamination",
    desc: "Alinhamento e volume dos fios com química controlada — sobrancelhas cheias, penteadas e definidas por semanas.",
    href: "#",
  },
  {
    n: "03",
    title: "Henna & Coloração",
    desc: "Coloração precisa que preenche falhas e intensifica o desenho, respeitando o tom de pele e fios.",
    href: "#",
  },
  {
    n: "04",
    title: "Extensão de Cílios",
    desc: "Fio a fio e volumes personalizados para um olhar marcante, leve e sob medida para o seu estilo.",
    href: "#",
  },
  {
    n: "05",
    title: "Lash Lifting",
    desc: "Curvatura natural dos cílios sem extensão — efeito de alongamento e abertura do olhar com seus próprios fios.",
    href: "#",
  },
  {
    n: "06",
    title: "Micropigmentação",
    desc: "Técnica de longa duração para corrigir falhas e desenhar sobrancelhas com naturalidade e precisão.",
    href: "#",
  },
];

export interface Offer {
  kind: string;
  price: string;
  /** Título com <em> renderizado a partir de `titleEm` (parte em itálico magenta). */
  title: string;
  titleEm?: string;
  desc: string;
  items: string[];
  cta: string;
  href: string;
  feature?: boolean;
}

export const OFFERS: Offer[] = [
  {
    kind: "Curso online · em breve",
    price: "Lista de espera",
    title: "Formação",
    titleEm: "Brow & Lash",
    desc: "O método completo, da anatomia do fio à precificação do seu serviço. Aulas práticas, ciência aplicada e mentoria em grupo.",
    items: [
      "Módulos de design, lamination, henna e cílios",
      "Anamnese, segurança e protocolos profissionais",
      "Precificação, vendas e fidelização",
    ],
    cta: "Entrar na lista de espera",
    href: "#",
    feature: true,
  },
  {
    kind: "E-book · disponível",
    price: "R$ 147",
    title: "Guia",
    titleEm: "Brow Lamination",
    desc: "O guia profissional definitivo — técnica, química e negócio em 15 páginas editoriais, com bônus de home care.",
    items: ["12 capítulos + template editável", "Acesso vitalício"],
    cta: "Ver o guia",
    href: "/landing/brow-lamination",
  },
  {
    kind: "Mentoria",
    price: "Individual",
    title: "Mentoria",
    titleEm: "1:1",
    desc: "Acompanhamento individual para profissionais que querem destravar técnica, posicionamento e precificação.",
    items: ["Encontros personalizados", "Plano de evolução sob medida"],
    cta: "Saber mais",
    href: "#",
  },
  {
    kind: "Templates",
    price: "Loja",
    title: "Materiais",
    titleEm: "editáveis",
    desc: "Home care, anamnese, tabelas de preço e templates de marca prontos para personalizar com a sua identidade.",
    items: ["Arquivos 100% editáveis", "Para fortalecer sua autoridade"],
    cta: "Ver a loja",
    href: "#",
  },
];

export interface Post {
  id: string;
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  /** Foto da capa — defina para substituir o placeholder. */
  cover?: string;
}

export const POSTS: Post[] = [
  {
    id: "hp2-post1",
    cat: "Técnica",
    date: "Mai · 2026",
    title: "Henna vs. Coloração: qual escolher para cada cliente?",
    excerpt: "Um comparativo honesto entre as duas técnicas — durabilidade, indicação e resultado.",
    href: "#",
  },
  {
    id: "hp2-post2",
    cat: "Cuidados",
    date: "Abr · 2026",
    title: "Pós-procedimento: as primeiras 48 horas que definem o resultado",
    excerpt: "O que orientar para a cliente proteger o trabalho e prolongar o efeito.",
    href: "#",
  },
  {
    id: "hp2-post3",
    cat: "Tendências",
    date: "Abr · 2026",
    title: "Sobrancelhas em 2026: o retorno do fio natural e penteado",
    excerpt: "Por que o exagero saiu de cena e o que está guiando os pedidos no estúdio.",
    href: "#",
  },
];
