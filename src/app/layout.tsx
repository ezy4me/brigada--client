import { Roboto } from "next/font/google";

import { Providers } from "@/app/providers/StoreProvider";
import { SupportChat } from "@/features/support-chat/ui/SupportChat";
import { ThemeProvider } from "@/features/theme/lib/ThemeContext";
import { themeClass } from "@/shared/styles";

import type { Metadata } from "next";

import "@/shared/styles/global.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Бригада.ру",
  description: "Платформа для поиска исполнителей и заказов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light" suppressHydrationWarning>
      <body className={`${robotoSans.variable} ${themeClass}`}>
        <ThemeProvider>
          <Providers>{children}</Providers>
          <SupportChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
