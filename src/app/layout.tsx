import "./globals.css";

// TODO:
// - フォントファミリーの指定修正

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
