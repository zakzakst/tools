import "@ant-design/v5-patch-for-react-19";
import Sidebar from "@/app/_components/Sidebar";

// TODO:
// - サイドバーのレスポンシブ対応

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[auto_1fr] antialiased">
      <div className="h-screen overflow-y-auto">
        <Sidebar />
      </div>
      <main className="h-screen overflow-y-auto">
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
}
