import { Box, GraduationCap, Layers, PenTool, Printer, Settings } from "lucide-react";

const navItems = [
  { label: "NOVA LAB", href: "/" },
  { label: "NOVA 3D LAB", href: "/nova-3d-lab" },
  { label: "JARDIM SECRETO", href: "/jardim-secreto" },
  { label: "SOBRE NÓS", href: "/sobre-nos" },
  { label: "CONTACTO", href: "/contacto" },
];

const quoteMessage = encodeURIComponent("Olá, gostaria de pedir um orçamento à NOVA 3D LAB.");
const modelMessage = encodeURIComponent("Olá, encontrei um modelo 3D e gostaria de pedir um orçamento para impressão.");

const services = [
  { icon: Printer, title: "Venda de impressoras 3D", description: "Equipamentos para iniciantes, criadores, escolas e produção profissional.", detail: "Orientação na escolha · Instalação · Apoio inicial" },
  { icon: Layers, title: "Venda de filamentos", description: "Materiais e cores para diferentes projetos, resistências e acabamentos.", detail: "PLA e outros materiais · Várias cores · Reposição", href: "/nova-3d-lab/filamentos", cta: "VER FILAMENTOS →" },
  { icon: Settings, title: "Peças e acessórios", description: "Componentes para manutenção, melhoria e continuidade da sua produção.", detail: "Bicos · Superfícies · Ferramentas · Manutenção" },
  { icon: Box, title: "Impressão por encomenda", description: "Escolha um modelo ou envie o seu ficheiro. Nós produzimos a peça.", detail: "Análise · Orçamento · Impressão · Entrega" },
  { icon: PenTool, title: "Modelação e design 3D", description: "Criamos, personalizamos ou adaptamos o modelo digital para a sua ideia.", detail: "Peças únicas · Protótipos · Personalização" },
  { icon: GraduationCap, title: "Formação básica em 3D", description: "Aprenda a preparar ficheiros, operar a impressora e começar a criar.", detail: "Fundamentos · Fatiamento · Operação · Cuidados" },
];

const modelSites = [
  ["MAKERWORLD", "Modelos gratuitos, projetos e ferramentas de criação.", "https://makerworld.com/en/3d-models"],
  ["PRINTABLES", "Uma grande comunidade de modelos prontos para imprimir.", "https://www.printables.com/model"],
  ["THINGIVERSE", "Milhões de ficheiros para peças, hobbies e projetos.", "https://www.thingiverse.com/"],
  ["CULTS3D", "Modelos gratuitos e premium de criadores independentes.", "https://cults3d.com/en"],
];

export default function Nova3DLabPage() {
  return (
    <main className="lab-page">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-logo" href="/" aria-label="NOVA LAB — início">
            <img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a className={item.label === "NOVA 3D LAB" ? "active" : ""} key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><span /><span /><span /></summary>
            <nav aria-label="Navegação móvel">
              {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            </nav>
          </details>
        </div>
      </header>

      <section className="lab-hero">
        <div className="lab-hero-content">
          <p>OBJETOS DO FUTURO · CRIADOS EM ANGOLA</p>
          <h1>IMPRESSÃO 3D<br /><span>DA IDEIA À REALIDADE.</span></h1>
          <div className="lab-hero-copy">
            <span>Tecnologia, equipamentos e criação para transformar conceitos em objetos reais.</span>
            <a href={`https://wa.me/244946459991?text=${quoteMessage}`} target="_blank" rel="noreferrer">PEDIR ORÇAMENTO</a>
          </div>
        </div>
      </section>

      <section className="model-discovery">
        <div className="model-discovery-heading">
          <p>NÃO SABE MODELAR? NÃO FAZ MAL.</p>
          <h2>Escolha um modelo.<br />Nós tratamos do resto.</h2>
          <span>Explore milhares de modelos prontos, escolha o que gosta e envie-nos o link pelo WhatsApp. Mesmo sem saber desenhar ou ter uma impressora, pode começar a criar.</span>
        </div>
        <div className="model-site-grid">
          {modelSites.map(([name, description, url], index) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <span className={`model-card-image model-card-image-${index + 1}`} aria-hidden="true" />
              <b>0{index + 1}</b>
              <h3>{name}</h3>
              <p>{description}</p>
              <span>EXPLORAR MODELOS ↗</span>
            </a>
          ))}
        </div>
        <div className="model-how">
          <ol>
            <li><b>1</b><span>Abra um dos sites</span></li>
            <li><b>2</b><span>Escolha o modelo</span></li>
            <li><b>3</b><span>Envie-nos o link</span></li>
            <li><b>4</b><span>Receba o orçamento</span></li>
          </ol>
          <a href={`https://wa.me/244946459991?text=${modelMessage}`} target="_blank" rel="noreferrer">ENVIAR MODELO PELO WHATSAPP</a>
        </div>
      </section>

      <section className="business-services" aria-labelledby="business-services-title">
        <div className="business-services-heading">
          <p>PRODUTOS · SERVIÇOS · FORMAÇÃO</p>
          <h2 id="business-services-title">Tudo o que precisa<br />para começar e continuar.</h2>
          <span>Compre os seus equipamentos e materiais, produza connosco ou aprenda a utilizar a tecnologia.</span>
        </div>
        <div className="business-service-grid">
          {services.map(({ icon: Icon, title, description, detail, href, cta }) => (
            <article key={title}>
              <div className="service-icon"><Icon size={29} strokeWidth={1.6} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span>{detail}</span>
              <a href={href ?? `https://wa.me/244946459991?text=${quoteMessage}`} target={href ? undefined : "_blank"} rel={href ? undefined : "noreferrer"}>{cta ?? "CONSULTAR ↗"}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="lab-shop" aria-labelledby="lab-shop-title">
        <div className="lab-shop-heading"><p>LOJA NOVA 3D LAB</p><h2 id="lab-shop-title">Equipamentos e materiais.</h2><span>Preços visíveis. Stock, entrega e condições confirmados antes do pagamento.</span></div>
        <div className="lab-shop-grid">
          <a className="lab-shop-featured" href="/nova-3d-lab/produtos/creality-k2-combo"><img src="/creality-k2-combo.png" alt="Creality K2 Combo"/><div><p>IMPRESSORA 3D · COMBO</p><h3>Creality K2 Combo</h3><strong>US$ 1.000</strong><span>VER PRODUTO →</span></div></a>
          <a className="lab-shop-featured" href="/nova-3d-lab/produtos/creality-k2-pro-combo"><img src="/creality-k2-pro-combo.png" alt="Creality K2 Pro Combo"/><div><p>IMPRESSORA 3D · COMBO</p><h3>Creality K2 Pro Combo</h3><strong>US$ 1.500</strong><span>VER PRODUTO →</span></div></a>
          <a href="/nova-3d-lab/filamentos"><div><p>FILAMENTOS</p><h3>PLA, PETG e TPU</h3><strong>A partir de US$ 15</strong><span>VER FILAMENTOS →</span></div></a>
        </div>
      </section>

      <section className="lab-intro">
        <p>PORTAL PARA CRIADORES</p>
        <h2>Uma pequena fábrica<br />ao alcance das suas ideias.</h2>
      </section>

      <section className="lab-editorial">
        <article>
          <div className="lab-editorial-image">
            <img src="https://novalab.ao/assets/impressao.webp" alt="Explicação visual sobre impressão 3D e criação de valor" />
          </div>
          <div className="lab-editorial-copy">
            <p>EDUCAR O MERCADO</p>
            <h2>O que é impressão 3D?</h2>
            <span>A impressão 3D transforma ideias em objetos reais. É uma tecnologia para criar, aprender, reparar, produzir e empreender.</span>
          </div>
        </article>
        <article>
          <div className="lab-editorial-image">
            <img src="https://novalab.ao/assets/ai.webp" alt="Inteligência artificial e impressão 3D transformando ideias em produtos" />
          </div>
          <div className="lab-editorial-copy">
            <p>BASTA UMA IDEIA</p>
            <h2>AI + impressão 3D aproximam imaginar e criar.</h2>
            <span>Nem todos sabem desenhar, modelar ou fabricar. Mas todos podem começar com uma ideia.</span>
          </div>
        </article>
      </section>

      <section className="opportunity-section">
        <div className="opportunity-copy">
          <p>CRIAR VALOR</p>
          <h2>Ganhe dinheiro com as suas ideias.</h2>
          <span>Uma ideia pode tornar-se um produto. Um produto pode tornar-se uma oportunidade. E uma oportunidade pode mudar uma vida.</span>
          <ul>
            <li>Crie produtos personalizados</li>
            <li>Desenvolva soluções para empresas</li>
            <li>Produza pequenas séries</li>
            <li>Transforme conhecimento em rendimento</li>
          </ul>
        </div>
        <div className="opportunity-image">
          <img src="https://novalab.ao/assets/oportunidades.webp" alt="Transformação de ideias em produtos, oportunidades e rendimento" />
        </div>
      </section>

      <section className="creator-ecosystem">
        <div className="creator-ecosystem-image">
          <img src="https://novalab.ao/assets/ecossistema.webp" alt="Ecossistema NOVA LAB de ferramentas, materiais, serviços e apoio" />
        </div>
        <div className="creator-ecosystem-copy">
          <p>MAIS DO QUE UMA LOJA</p>
          <h2>Um ecossistema para aprender, produzir e empreender.</h2>
          <span>Impressoras, filamentos, acessórios, kits criativos, design, AI, impressão por encomenda e apoio técnico trabalham juntos para ajudar cada pessoa a avançar.</span>
          <div className="ecosystem-list">
            <b>Equipamentos</b><b>Materiais</b><b>Design</b><b>AI</b><b>Produção</b><b>Apoio técnico</b>
          </div>
        </div>
      </section>

      <section className="lab-manifesto">
        <img src="https://novalab.ao/assets/proximos.webp" alt="Manifesto NOVA LAB para a nova geração de criadores de Angola" />
        <div>
          <p>MANIFESTO</p>
          <h2>Para os próximos criadores.</h2>
          <span>O futuro de Angola não pertence apenas aos consumidores. Pertence às pessoas que criam, imaginam e transformam ideias em realidade.</span>
        </div>
      </section>

      <section className="possibilities-section">
        <div className="possibilities-copy">
          <p>POSSIBILIDADES</p>
          <h2>O que vai criar?</h2>
          <div className="possibility-tags">
            <span>Arquitetura</span><span>Engenharia</span><span>Educação</span><span>Reparação</span>
            <span>Arte</span><span>Cultura</span><span>Personalização</span><span>Novos negócios</span>
          </div>
        </div>
        <div className="possibilities-image">
          <img src="https://novalab.ao/assets/poster.webp" alt="Aplicações e possibilidades da impressão 3D com a NOVA LAB" />
        </div>
      </section>

      <section className="lab-process">
        <div className="process-heading">
          <p>COMO FUNCIONA</p>
          <h2>Da escolha à entrega,<br />um processo simples.</h2>
        </div>
        <ol>
          <li><b>01</b><div><h3>Envie a sua ideia</h3><p>Partilhe uma imagem, um modelo, um link ou explique o que pretende.</p></div></li>
          <li><b>02</b><div><h3>Receba a orientação</h3><p>Analisamos o projeto, o material, o tamanho e o acabamento mais adequado.</p></div></li>
          <li><b>03</b><div><h3>Aprove o orçamento</h3><p>Confirmamos o valor, o prazo e as condições antes de iniciar.</p></div></li>
          <li><b>04</b><div><h3>Produção e entrega</h3><p>Produzimos, verificamos o resultado e combinamos a entrega.</p></div></li>
        </ol>
      </section>

      <section className="lab-cta">
        <p>TEM UMA IDEIA?</p>
        <h2>Vamos dar-lhe forma.</h2>
        <a href={`https://wa.me/244946459991?text=${quoteMessage}`} target="_blank" rel="noreferrer">FALAR COM A NOVA 3D LAB</a>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-brand">NOVA LAB · LUANDA, ANGOLA</p>
          <a className="whatsapp" href={`https://wa.me/244946459991?text=${quoteMessage}`} target="_blank" rel="noreferrer">
            <span className="wa-icon" aria-hidden="true">◔</span>
            <span>Fale connosco no WhatsApp</span>
            <strong>244 946 459 991</strong>
          </a>
        </div>
      </footer>
    </main>
  );
}
