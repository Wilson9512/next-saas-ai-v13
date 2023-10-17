import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/components/ModalProvider";
import { ToasterProvider } from "@/components/ToasterProvider";
import { CrispProvider } from "@/components/CrispProvider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'saas-ai',
  description: 'AI Platform',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {
  return (
    <ClerkProvider>
      <html lang={locale}>
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
