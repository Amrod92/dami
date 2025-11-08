export default function DummyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-12 xl:px-0">
      {children}
    </main>
  );
}
