import type { Metadata } from "next";
import "./globals.css";
import { brandConfig } from "@/lib/brandConfig";
import Sidebar from "@/components/Sidebar";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: brandConfig.Brand,
    template: `%s | ${brandConfig.Brand}`,
  },
  description: brandConfig.description,
  applicationName: brandConfig.Brand,
  appleWebApp: { title: brandConfig.Brand, statusBarStyle: "default" },
  abstract: brandConfig.description,
  archives: brandConfig.url,
  category: brandConfig.seo.category,
  classification: "",
  authors: { url: "", name: "" },
  twitter: {
    site: "",
    siteId: "",
    creator: "",
    creatorId: "",
    description: brandConfig.description,
    title: brandConfig.Brand,
  },
  creator: "",
  publisher: brandConfig.Brand,
  alternates: {canonical: brandConfig.url},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
