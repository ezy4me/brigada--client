import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/app/providers/StoreProvider";
import { themeClass } from "@/shared/styles/theme.css";
import "@/shared/styles/global.css";
import { Header } from "@/widgets/header/ui/Header";
import { Footer } from "@/widgets/footer/ui/Footer";

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
    <html lang="ru">
      <body className={`${robotoSans.variable} ${themeClass}`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
