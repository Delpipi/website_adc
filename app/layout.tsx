import type { Metadata, Viewport } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import TopHeader from "./ui/header/top-header";
import Menu from "./ui/header/menu";
import Footer from "./ui/footer/footer";
import Map from "./ui/map";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ADC CONSULTING",
  description:
    "ADC CONSULTING est une entreprise ivoirienne polyvalente, établie à Abidjan, qui se consacre principalement à l'aménagement foncier et au secteur du bâtiment.",
  openGraph: {
    title: "ADC CONSULTING",
    description:
      "ADC CONSULTING est une entreprise ivoirienne polyvalente, établie à Abidjan, qui se consacre principalement à l'aménagement foncier et au secteur du bâtiment.",
    type: "website",
    url: "https://kolarel-website-z53f.vercel.app",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "SITE ADONKOI 2",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        <header className="sticky top-0 z-9999 bg-white">
          <TopHeader />
          <Menu />
        </header>
        {children}
        <Map />
        <Footer />
      </body>
    </html>
  );
}
