import "./globals.css";
import type { ReactNode } from "react";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Seif Rahmouni | Portfolio",
  description: "Software Engineer Portfolio",
  icons: {
    icon: [
      {
        url: '/en/flags/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#3b82f6',
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
