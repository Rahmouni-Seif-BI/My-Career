import "./globals.css";
import type { ReactNode } from "react";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Seif Rahmouni | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
