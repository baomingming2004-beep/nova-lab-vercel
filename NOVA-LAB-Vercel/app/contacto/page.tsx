const navItems = [
  { label: "NOVA LAB", href: "/" },
  { label: "NOVA 3D LAB", href: "/nova-3d-lab" },
  { label: "JARDIM SECRETO", href: "/jardim-secreto" },
  { label: "SOBRE NÓS", href: "/sobre-nos" },
  { label: "CONTACTO", href: "/contacto" },
];

const generalMessage = encodeURIComponent("Olá, gostaria de falar com a NOVA LAB.");

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-logo" href="/" aria-label="NOVA LAB — início">
            <img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a className={item.label === "CONTACTO" ? "active" : ""} key={item.label} href={item.href}>
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

      <section className="contact-hero">
        <p className="contact-kicker">CONTACTO</p>
        <h1>Vamos transformar<br />a sua ideia em realidade.</h1>
        <p>Escolha o assunto da sua mensagem e fale diretamente connosco pelo WhatsApp.</p>
        <a className="contact-main-button" href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer">
          FALAR COM A NOVA LAB
        </a>
      </section>

      <section className="location-showcase" aria-labelledby="location-title">
        <div className="location-image">
          <img
            src="/camama-location-guide.webp"
            alt="Mapa de acesso e entrada do Shopping Popular do Camama, Bloco 11, Lojas B03–B04"
          />
          <span>GUIA DE LOCALIZAÇÃO · CAMAMA</span>
        </div>
        <div className="location-content">
          <p className="location-kicker">VISITE-NOS</p>
          <h2 id="location-title">CAMAMA<br />SHOPPING POPULAR</h2>
          <div className="address-line">
            <span>ENDEREÇO</span>
            <strong>BLOCO 11 · LOJA B03–04</strong>
          </div>
          <div className="address-line">
            <span>WHATSAPP</span>
            <a href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer">+244 946 459 991</a>
          </div>
          <a className="location-whatsapp-button" href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer">
            FALAR CONNOSCO
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-brand">NOVA LAB · LUANDA, ANGOLA</p>
          <a className="whatsapp" href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer">
            <span className="wa-icon" aria-hidden="true">◔</span>
            <span>Fale connosco no WhatsApp</span>
            <strong>244 946 459 991</strong>
          </a>
        </div>
      </footer>
    </main>
  );
}
