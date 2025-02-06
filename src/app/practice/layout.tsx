import Header from "../_components/practice/Header";

export default function RootLayout({
  // modal,
  children,
}: Readonly<{
  // modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {/* {modal} */}
      {children}
    </>
  );
}
