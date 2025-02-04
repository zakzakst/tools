import "@ant-design/v5-patch-for-react-19";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="h-screen overflow-y-auto">single column</div>
      <div className="p-4">{children}</div>
    </main>
  );
}
