import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from 'next/font/google';
import localFont from 'next/font/local';
import Header from "@/components/header";

// Press Start 2P 폰트 로드 (Google Fonts)
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-press-start-2p',
});

// DungGeunMo 폰트 - 메인 폰트
const dungGeunMo = localFont({
  src: './fonts/DungGeunMo.woff2',
  display: 'swap',
  variable: '--font-dunggeunmo',
  fallback: ['var(--font-press-start-2p)', 'monospace'],
});



export const metadata: Metadata = {
  title: {
    default: "DEVLOG",
    template: "%s | DEVLOG",
  },
  description: "FE 개발자 정다운의 개발 블로그입니다",
  icons: {
    icon: [
      {
        url: "/favicon16.jpg",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${dungGeunMo.variable} ${pressStart2P.variable}`}>
      <head>
        {/* <link 
          rel="preload" 
          href="/fonts/neodgm.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        /> */}
      </head>
      <body className="antialiased flex flex-col min-h-screen">

        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
