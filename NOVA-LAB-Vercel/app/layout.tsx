import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA LAB Angola",
  description: "Tecnologia, design e arte para transformar ideias em realidade. NOVA LAB em Luanda, Angola.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO"><body>{children}</body></html>;
}
