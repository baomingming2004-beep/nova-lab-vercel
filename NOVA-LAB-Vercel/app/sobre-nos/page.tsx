const navItems = [
  { label: "NOVA LAB", href: "/" },
  { label: "NOVA 3D LAB", href: "/nova-3d-lab" },
  { label: "JARDIM SECRETO", href: "/jardim-secreto" },
  { label: "SOBRE NÓS", href: "/sobre-nos" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-logo" href="/" aria-label="NOVA LAB — início">
            <img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a className={item.label === "SOBRE NÓS" ? "active" : ""} key={item.label} href={item.href}>
                {item.label}
              </a>
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

      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-kicker">SOBRE NÓS</p>
          <h1>Uma marca.<br />Duas formas de criar.</h1>
          <p>Nascemos em Luanda com a convicção de que grandes ideias merecem ganhar forma, presença e significado.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-mark" aria-hidden="true">∞</div>
        <p className="story-lead">
          Na NOVA LAB, tecnologia, design e trabalho artesanal não vivem em mundos separados.
          Encontram-se para transformar ideias em objetos, ambientes e experiências.
        </p>
        <div className="story-grid">
          <article>
            <span>01</span>
            <h2>Imaginamos</h2>
            <p>Tudo começa com uma possibilidade: uma solução, uma forma, um presente ou uma nova maneira de ocupar um espaço.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Criamos</h2>
            <p>Unimos ferramentas contemporâneas, sensibilidade estética e atenção aos detalhes para dar identidade a cada ideia.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Transformamos</h2>
            <p>Transformamos o que antes existia apenas na imaginação em algo real, útil, belo e capaz de permanecer.</p>
          </article>
        </div>
      </section>

      <section className="two-worlds">
        <div className="world world-tech">
          <p>NOVA 3D LAB</p>
          <h2>A ideia ganha forma.</h2>
          <span>Impressão 3D · Design · Tecnologia · Personalização</span>
          <a href="/nova-3d-lab">CONHECER</a>
        </div>
        <div className="world world-garden">
          <p>JARDIM SECRETO</p>
          <h2>A beleza ganha espaço.</h2>
          <span>Flores · Composição · Artesanato · Ambientes</span>
          <a href="/jardim-secreto">DESCOBRIR</a>
        </div>
      </section>

      <section className="luanda-message">
        <p>Criado em Luanda</p>
        <h2>Para uma nova geração de criadores.</h2>
        <a href="https://wa.me/244946459991" target="_blank" rel="noreferrer">FALAR CONNOSCO</a>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-brand">NOVA LAB · LUANDA, ANGOLA</p>
          <a className="whatsapp" href="https://wa.me/244946459991" target="_blank" rel="noreferrer">
            <span className="wa-icon" aria-hidden="true">◔</span>
            <span>Fale connosco no WhatsApp</span>
            <strong>244 946 459 991</strong>
          </a>
        </div>
      </footer>
    </main>
  );
}
