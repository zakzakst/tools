import "@ant-design/v5-patch-for-react-19";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>ヘッダー</header>
      {children}
      <footer>フッター</footer>
    </>
  );
}
