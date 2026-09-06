import type { Metadata } from "next";
import Storefront from "./storefront";

export const metadata: Metadata = {
  title: "NOVA LAB | Loja de impressão 3D em Angola",
  description: "Compre impressoras 3D, filamentos PLA, PETG e TPU. Levantamento em Camama e entrega sob consulta em Luanda.",
};

export default function Home(){ return <Storefront/>; }
