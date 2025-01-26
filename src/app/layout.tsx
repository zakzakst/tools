import type { Metadata } from "next";
import "@ant-design/v5-patch-for-react-19";
import Sidebar from "@/app/_components/Sidebar";
import "./globals.css";

// TODO:
// - サイドバーのレスポンシブ対応
// - フォントファミリーの指定修正

export const metadata: Metadata = {
  title: "ツール",
  description: "ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="grid grid-cols-[auto_1fr] antialiased">
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
