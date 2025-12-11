import { Roboto } from "next/font/google";

import { Providers } from "@/app/providers/StoreProvider";
import { SupportChat } from "@/features/support-chat/ui/SupportChat";
import { ThemeProvider } from "@/features/theme/lib/ThemeContext";
import { AuthProvider } from "@/providers/auth-provider";
import { themeClass } from "@/shared/styles";

import type { Metadata } from "next";

import "@/shared/styles/global.css";
import QueryProvider from "@/providers/query-provider";

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
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <Providers>{children}</Providers>
              <SupportChat />
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}