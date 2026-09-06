import { ArrowLeft, Check, MapPin, MessageCircle, Package, ShieldCheck, Truck } from "lucide-react";

export type Product = {
  slug: string; code: string; name: string; weight: string; price: string;
  description: string; use: string; colors: string[]; category?: "filament" | "printer"; image?: string;
};

export const filamentProducts: Product[] = [
  { slug:"pla-1000g", code:"PLA-1000G", name:"PLA", weight:"1000 g", price:"US$ 20", description:"Material prático para protótipos, maquetes, decoração, aprendizagem e peças de uso geral.", use:"Projetos visuais, prototipagem e aprendizagem", colors:["Preto","Branco","Vermelho","Azul","Verde","Amarelo"] },
  { slug:"petg-1000g", code:"PETG-1000G", name:"PETG", weight:"1000 g", price:"US$ 22", description:"Uma opção versátil para suportes, caixas e peças funcionais que pedem maior resistência.", use:"Peças funcionais, suportes e caixas", colors:["Preto","Branco","Verde","Laranja"] },
  { slug:"tpu-1000g", code:"TPU-1000G", name:"TPU", weight:"1000 g", price:"US$ 50", description:"Filamento flexível para proteções, apoios, juntas e peças que precisam de elasticidade.", use:"Proteções, apoios e peças flexíveis", colors:["Preto","Branco","Azul"] },
  { slug:"petg-200g", code:"PETG-200G", name:"PETG", weight:"200 g", price:"US$ 15", description:"Formato compacto para testes, pequenas peças e projetos que não exigem um rolo completo.", use:"Testes e pequenos projetos", colors:["Preto","Branco","Verde","Laranja"] },
];

export const printerProducts: Product[] = [
  { slug:"creality-k2-combo", code:"CREALITY-K2-COMBO", name:"Creality K2 Combo", weight:"1 equipamento", price:"US$ 1.000", description:"Impressora 3D fechada com sistema multicolor Combo, indicada para criadores, oficinas, escolas e produção.", use:"Impressão 3D e projetos multicolor", colors:[], category:"printer", image:"/creality-k2-combo.png" },
  { slug:"creality-k2-pro-combo", code:"CREALITY-K2-PRO-COMBO", name:"Creality K2 Pro Combo", weight:"1 equipamento", price:"US$ 1.500", description:"Solução Combo de nível superior para projetos de impressão 3D, criação profissional e produção multicolor.", use:"Criação profissional e produção multicolor", colors:[], category:"printer", image:"/creality-k2-pro-combo.png" },
];

export const allProducts = [...filamentProducts, ...printerProducts];

const navItems = [["NOVA LAB","/"],["NOVA 3D LAB","/nova-3d-lab"],["JARDIM SECRETO","/jardim-secreto"],["SOBRE NÓS","/sobre-nos"],["CONTACTO","/contacto"]];

export function ProductDetail({ slug }: { slug: string }) {
  const product = allProducts.find(item => item.slug === slug)!;
  const isPrinter = product.category === "printer";
  const message = encodeURIComponent(`Olá, gostaria de comprar ${product.name} (${product.code}) por ${product.price}. Podem confirmar o stock e a entrega?`);
  const whatsapp = `https://wa.me/244946459991?text=${message}`;

  return <main className="product-page">
    <header className="site-header"><div className="header-inner">
      <a className="brand-logo" href="/" aria-label="NOVA LAB — início"><img src="/nova-lab-logo-transparent.png" alt="NOVA LAB" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(([label,href])=><a className={label==="NOVA 3D LAB"?"active":""} key={label} href={href}>{label}</a>)}</nav>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><span/><span/><span/></summary><nav aria-label="Navegação móvel">{navItems.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav></details>
    </div></header>

    <section className="product-detail">
      <div className={`product-visual ${isPrinter ? "product-visual-photo" : ""}`} aria-label={`Imagem do produto ${product.name}`}>
        {isPrinter ? <img src={product.image} alt={`${product.name} com sistema multicolor Combo`}/> : <><span className="product-material">{product.name}</span><div className="product-spool"><span/></div><b>{product.weight}</b></>}
      </div>
      <div className="product-copy">
        <a className="product-back" href="/nova-3d-lab/filamentos"><ArrowLeft size={16}/> TODOS OS FILAMENTOS</a>
        <p className="product-code">{product.code} · VENDA EM LUANDA</p>
        <h1>{isPrinter ? product.name : `Filamento ${product.name}`}<br/><span>{product.weight}</span></h1>
        <p className="product-description">{product.description}</p>
        <div className="product-price"><span>PREÇO POR EMBALAGEM</span><strong>{product.price}</strong></div>
        <div className="product-status"><i/><div><b>Disponibilidade sob consulta</b><span>Confirmamos o stock {isPrinter ? "e as condições de fornecimento" : "e as cores"} pelo WhatsApp antes do pagamento.</span></div></div>
        <a className="product-buy" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19}/> CONFIRMAR STOCK E COMPRAR</a>
        <p className="product-payment-note">Não efetue qualquer pagamento antes de receber a confirmação escrita do produto, stock, valor total e entrega.</p>
      </div>
    </section>

    <section className="product-facts">
      <article><Package/><span>CONTEÚDO</span><h2>1 embalagem</h2><p>Peso líquido declarado: {product.weight}.</p></article>
      <article><Check/><span>APLICAÇÕES</span><h2>Uso recomendado</h2><p>{product.use}.</p></article>
      <article><ShieldCheck/><span>{isPrinter ? "FORNECIMENTO" : "CORES"}</span><h2>Confirmar antes</h2><p>{isPrinter ? "A configuração Combo, a disponibilidade e os itens incluídos são confirmados por escrito antes do pagamento." : `Referências habituais: ${product.colors.join(", ")}. A disponibilidade pode variar.`}</p></article>
    </section>

    <section className="product-delivery">
      <div><p>ENTREGA E LEVANTAMENTO</p><h2>Receba em Luanda<br/>ou levante na loja.</h2></div>
      <div className="product-delivery-options">
        <article><MapPin/><div><h3>Levantamento</h3><p>Camama Shopping Popular<br/>Bloco 11 · Lojas B03–04<br/>Luanda, Angola</p></div></article>
        <article><Truck/><div><h3>Entrega</h3><p>O preço não inclui entrega. O custo e o prazo dependem do endereço e são confirmados no resumo do pedido.</p></div></article>
      </div>
    </section>

    <section className="product-terms-summary"><h2>Condições da compra</h2><div><p><b>Preço:</b> valor unitário em USD para a embalagem indicada.</p><p><b>Reserva:</b> a consulta não reserva o produto; a reserva é válida após confirmação do pagamento.</p><p><b>Trocas:</b> produto incorreto ou com defeito deve ser comunicado pelo WhatsApp com comprovativo e imagens, nos termos da legislação aplicável.</p><p><b>Vendedor:</b> NOVA LAB · WhatsApp +244 946 459 991.</p></div></section>

    <section className="product-final"><h2>Quer confirmar este produto?</h2><a href={whatsapp} target="_blank" rel="noreferrer">COMPRAR {product.name}</a></section>
    <footer><div className="footer-inner"><p className="footer-brand">NOVA LAB · LUANDA, ANGOLA</p><a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>244 946 459 991</strong></a></div></footer>
  </main>;
}
