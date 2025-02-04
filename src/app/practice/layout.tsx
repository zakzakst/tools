import Header from "../_components/practice/Header";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {modal}
      {children}
    </>
  );
}
