import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "꽃곰케이크 | KKOTGOM CAKE - 수제 플라워 케이크 전문",
  description:
    "특별한 날을 꽃으로 물들이다. 100% 수제 플라워 케이크, 앙금플라워, 생화케이크, 버터크림 케이크 예약 주문 전문 온라인 쇼핑몰. Bloom with Happiness.",
  keywords: [
    "꽃케이크",
    "플라워케이크",
    "수제케이크",
    "앙금플라워",
    "생화케이크",
    "버터크림케이크",
    "케이크주문",
    "맞춤케이크",
    "꽃곰케이크",
  ],
  openGraph: {
    title: "꽃곰케이크 | KKOTGOM CAKE",
    description: "특별한 날을 꽃으로 물들이다. 100% 수제 플라워 케이크 예약 주문 전문",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1 pt-22 lg:pt-24">{children}</main>
          <Footer />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
