import "@ant-design/v5-patch-for-react-19";

export default function RootLayout({
  children,
  sidebar,
  modal,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <aside>{sidebar}</aside>
      <main>
        <div>two column</div>
        <div className="p-4">{children}</div>
      </main>
      {modal}
    </>
  );
}
