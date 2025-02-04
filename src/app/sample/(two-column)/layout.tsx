import "@ant-design/v5-patch-for-react-19";

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <>
      <aside>{sidebar}</aside>
      <main>
        <div className="h-screen overflow-y-auto">two column</div>
        <div className="p-4">{children}</div>
      </main>
    </>
  );
}
