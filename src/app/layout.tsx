import type { Metadata } from "next";
import { Merriweather, Nunito_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SiteProviders } from "@/components/providers/SiteProviders";
import { siteConfig } from "@/config/site";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.shortName,
    locale: "en_CM",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${nunitoSans.variable} antialiased`}>
        <SiteProviders>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </SiteProviders>
      </body>
    </html>
  );
}
