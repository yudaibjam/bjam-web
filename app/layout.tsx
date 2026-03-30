import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { getOrganizationSchema } from "@/lib/structured-data";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社b-jam | ビジネスをジャムろう。",
    template: "%s | 株式会社b-jam",
  },
  description:
    "ビジネスをジャムろう。AIとビジネスのジャムセッションで成果を引き出すパートナー。御社の環境に合わせた設計・構築・定着まで伴走。プロジェクト支援300件超。",
  metadataBase: new URL("https://b-jam.co.jp"),
  openGraph: {
    title: "株式会社b-jam | ビジネスをジャムろう。",
    description:
      "ビジネスをジャムろう。AIとビジネスのジャムセッションで成果を引き出すパートナー。御社の環境に合わせた設計・構築・定着まで伴走。",
    url: "https://b-jam.co.jp",
    siteName: "株式会社b-jam",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
