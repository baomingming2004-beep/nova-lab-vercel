import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Selo Imperial | NOVA LAB",
  description: "Conheça o simbolismo do selo imperial chinês através de imagens, história e narração em português.",
};

const navItems = [
  ["NOVA LAB", "/"],
  ["NOVA 3D LAB", "/nova-3d-lab"],
  ["SOBRE NÓS", "/sobre-nos"],
  ["CONTACTO", "/contacto"],
];

const facts = [
  ["A marca do soberano", "Autenticava decretos e decisões da corte imperial."],
  ["O dragão imperial", "Símbolo de força, sabedoria e ligação com o Céu."],
  ["Tradição recriada", "A memória histórica encontra a tecnologia de impressão 3D."],
];

const gallery = [
  ["/cultura/selo-imperial/selo-imperial-detalhe-1.png", "Dragão imperial"],
  ["/cultura/selo-imperial/selo-imperial-detalhe-2.png", "Detalhe central"],
  ["/cultura/selo-imperial/selo-imperial-detalhe-3.png", "Base ornamentada"],
];

export default function SeloImperialPage() {
  return (
    <main className="culture-page">
      <header className="culture-header">
        <div className="culture-header-inner">
          <a className="culture-logo" href="/" aria-label="NOVA LAB — página inicial">
            <img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" />
          </a>
          <nav className="culture-nav" aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <span className="culture-language">PT</span>
        </div>
      </header>

      <section className="culture-hero">
        <div className="culture-shell culture-hero-grid">
          <div className="culture-hero-copy">
            <p className="culture-kicker">PATRIMÓNIO CHINÊS · SÍMBOLOS · IMPRESSÃO 3D</p>
            <h1>O Selo Imperial</h1>
            <p className="culture-subtitle">PODER · IDENTIDADE · AUTORIDADE</p>
            <p className="culture-intro">Muito mais do que uma assinatura. O selo imperial transformava as palavras do soberano em ordem oficial e representava a autoridade de todo um império.</p>
            <div className="culture-audio-card">
              <div><strong>Ouvir a história em português</strong><span>Narração · 1 min 27 s</span></div>
              <audio controls preload="metadata">
                <source src="/cultura/selo-imperial/selo-imperial-pt.mp3" type="audio/mpeg" />
                O seu navegador não suporta reprodução de áudio.
              </audio>
            </div>
          </div>
          <img className="culture-main-image" src="/cultura/selo-imperial/selo-imperial-principal.png" alt="Interpretação em impressão 3D de um selo imperial chinês dourado" />
        </div>
      </section>

      <section className="culture-shell culture-facts" aria-label="Informações principais">
        {facts.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </section>

      <section className="culture-gallery-section">
        <div className="culture-shell">
          <div className="culture-section-heading">
            <h2>Observe cada detalhe</h2>
            <p>Da figura do dragão aos padrões ornamentais da base: cada elemento reforça o carácter solene da peça.</p>
          </div>
          <div className="culture-gallery">
            {gallery.map(([src, label]) => <figure key={src}><img src={src} alt={label} /><figcaption>{label}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="culture-story">
        <div className="culture-shell culture-story-grid">
          <h2>Uma marca capaz de representar um império</h2>
          <div>
            <p>Os selos tradicionais eram frequentemente esculpidos em jade, pedra ou outros materiais preciosos. Nesta interpretação criada através da impressão 3D, a NOVA LAB une memória e tecnologia.</p>
            <blockquote>Pequeno no tamanho, imenso no significado.</blockquote>
          </div>
        </div>
      </section>

      <section className="culture-brandline"><strong>NOVA LAB</strong><span>OBJETOS DO FUTURO. CRIADOS EM ANGOLA.</span></section>
      <footer className="culture-footer"><span><b>NOVA LAB</b> · Luanda, Angola</span><span>Guia Cultural em Áudio</span></footer>
    </main>
  );
}
