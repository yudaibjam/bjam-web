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
    default: "株式会社b-jam | AIを使えるに変える。業務が変わる。",
    template: "%s | 株式会社b-jam",
  },
  description:
    "AIツールを導入しただけで終わっていませんか？b-jamは御社の環境で業務が変わる仕組みを設計・構築し、定着まで伴走します。プロジェクト支援300件超の実績。",
  metadataBase: new URL("https://b-jam.co.jp"),
  openGraph: {
    title: "株式会社b-jam | AIを使えるに変える。業務が変わる。",
    description:
      "AIツールを導入しただけで終わっていませんか？b-jamは御社の環境で業務が変わる仕組みを設計・構築し、定着まで伴走します。",
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
