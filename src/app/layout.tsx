import type { Metadata } from "next";
import "./globals.css";
import { brandConfig } from "@/lib/brandConfig";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ProgressBar } from "@lexz451/next-nprogress";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { clsx } from "@/lib/utils";

import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';

import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';

const font = Figtree({ subsets: ['latin'] });
export const revalidate = 0;

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();
  return (
    <html lang="en" className={clsx("scroll-smooth dark", font.className)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Suspense fallback={true}>
            <ProgressBar
              color={brandConfig.BrandColor}
              height="2px"
              options={{
                showSpinner: false,
              }}
            />
          </Suspense>
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider products={products} />
              <Sidebar songs={userSongs}>{children}</Sidebar>
              <Player />
            </UserProvider>
          </SupabaseProvider>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}