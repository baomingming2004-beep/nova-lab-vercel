import type { Metadata } from "next";
import { Check, ChevronRight, MapPin, MessageCircle, Package, ShieldCheck, Truck } from "lucide-react";
import { filamentProducts } from "../produtos/catalog";

export const metadata: Metadata = {
  title: "Filamentos para impressão 3D | NOVA LAB Angola",
  description: "Venda de filamentos PLA, PETG e TPU em Luanda. Consulte preços, stock, levantamento e entrega com a NOVA LAB.",
};

const navItems = [
  ["NOVA LAB", "/"], ["NOVA 3D LAB", "/nova-3d-lab"], ["JARDIM SECRETO", "/jardim-secreto"],
  ["SOBRE NÓS", "/sobre-nos"], ["CONTACTO", "/contacto"],
];

const generalMessage = encodeURIComponent("Olá, gostaria de comprar filamentos na NOVA 3D LAB. Podem confirmar o stock, as cores e a entrega?");

export default function FilamentosPage() {
  return <main className="filament-page">
    <header className="site-header"><div className="header-inner">
      <a className="brand-logo" href="/" aria-label="NOVA LAB — início"><img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(([label,href])=><a className={label==="NOVA 3D LAB"?"active":""} key={label} href={href}>{label}</a>)}</nav>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><span/><span/><span/></summary><nav aria-label="Navegação móvel">{navItems.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav></details>
    </div></header>

    <section className="filament-hero"><div className="filament-hero-inner">
      <div><p>LOJA DE FILAMENTOS · LUANDA</p><h1>Filamentos com<br/><span>preços transparentes.</span></h1>
        <p className="filament-lead">PLA, PETG e TPU para impressão 3D. Veja o preço por embalagem, escolha o material e confirme pelo WhatsApp a cor, o stock e a forma de entrega.</p>
        <div className="filament-hero-actions"><a className="filament-primary" href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> COMPRAR PELO WHATSAPP</a><a className="filament-secondary" href="#catalogo">VER PRODUTOS <ChevronRight size={18}/></a></div>
      </div>
      <div className="filament-spec-card"><Package size={34}/><strong>Informação antes do pagamento</strong><span>Confirmamos por escrito o produto, a quantidade, a cor disponível, o valor total e a entrega.</span><ul><li><Check/> Preço visível em USD</li><li><Check/> Stock confirmado por mensagem</li><li><Check/> Levantamento ou entrega a combinar</li></ul></div>
    </div></section>

    <section className="filament-catalog" id="catalogo"><div className="filament-section-heading"><div><p>PRODUTOS E PREÇOS</p><h2>Escolha o material certo.</h2></div><span>Os preços abaixo correspondem a uma embalagem. O stock e as cores podem variar e são sempre confirmados antes do pagamento.</span></div>
      <div className="filament-grid">{filamentProducts.map(product=>{return <article key={product.code}>
        <div className="filament-card-top"><span className="filament-code">{product.code}</span><div className="filament-spool" aria-hidden="true"><span/></div></div><h3>{product.name}</h3><p>{product.description}</p>
        <ul><li><strong>Peso:</strong> {product.weight}</li><li>{product.use}</li><li><strong>Stock:</strong> confirmar por WhatsApp</li><li><strong>Cores:</strong> disponibilidade sob consulta</li></ul>
        <div className="filament-price"><span>PREÇO POR EMBALAGEM</span><strong>{product.price}</strong></div><a href={`/nova-3d-lab/produtos/${product.slug}`}>VER PRODUTO <ChevronRight/></a>
      </article>})}</div>
    </section>

    <section className="filament-buying-info"><div className="filament-section-heading light"><div><p>COMO COMPRAR</p><h2>Pedido simples e confirmado por mensagem.</h2></div></div><div className="buying-steps">
      <article><b>01</b><MessageCircle/><h3>Envie o pedido</h3><p>Indique o código, a cor e a quantidade desejada.</p></article><article><b>02</b><ShieldCheck/><h3>Receba a confirmação</h3><p>Enviamos stock, valor total, moeda de pagamento e condições de entrega.</p></article><article><b>03</b><MapPin/><h3>Levante na loja</h3><p>Camama Shopping Popular, Bloco 11, Lojas B03–04, Luanda.</p></article><article><b>04</b><Truck/><h3>Ou combine a entrega</h3><p>Em Luanda, o custo e o prazo dependem do endereço. Outras localidades: sob consulta.</p></article>
    </div></section>

    <section className="filament-terms"><div><p>INFORMAÇÃO COMERCIAL</p><h2>Compra transparente.</h2></div><div className="terms-grid">
      <article><h3>Preço e pagamento</h3><p>Os preços indicados são unitários e em dólares americanos (USD). A moeda, os dados de pagamento e o valor final são confirmados por escrito no resumo do pedido. Não efetue o pagamento antes dessa confirmação.</p></article><article><h3>Stock e reserva</h3><p>O stock e as cores estão sujeitos a confirmação. A consulta não reserva o produto; a reserva só é válida depois da confirmação do pagamento pela NOVA LAB.</p></article><article><h3>Entrega e levantamento</h3><p>O preço do produto não inclui entrega. O custo e o prazo são informados conforme o endereço. O levantamento pode ser combinado na loja em Camama.</p></article><article><h3>Trocas e reclamações</h3><p>Verifique o material, o peso e a cor ao receber. Em caso de produto incorreto ou defeito, contacte-nos pelo WhatsApp com o comprovativo da compra e imagens do produto para análise, nos termos da legislação aplicável.</p></article><article><h3>Cancelamento</h3><p>Antes do pagamento, o pedido pode ser cancelado sem custo. Depois da confirmação, qualquer cancelamento ou alteração depende do estado da preparação ou entrega e será analisado por escrito.</p></article><article><h3>Identificação do vendedor</h3><p>NOVA LAB · Camama Shopping Popular, Bloco 11, Lojas B03–04 · Luanda, Angola · WhatsApp: +244 946 459 991.</p></article>
    </div></section>

    <section className="filament-cta"><p>PRECISA DE AJUDA PARA ESCOLHER?</p><h2>Conte-nos o que pretende imprimir.</h2><a href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer">FALAR COM A NOVA 3D LAB</a></section>
    <footer><div className="footer-inner"><p className="footer-brand">NOVA LAB · LUANDA, ANGOLA</p><a className="whatsapp" href={`https://wa.me/244946459991?text=${generalMessage}`} target="_blank" rel="noreferrer"><span className="wa-icon">◔</span><span>Fale connosco no WhatsApp</span><strong>244 946 459 991</strong></a></div></footer>
  </main>;
}
