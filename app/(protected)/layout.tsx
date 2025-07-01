import { Navbar } from "./settings/_components/navbar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-y-10 justify-center bg-slate-800 p-4">
      <Navbar />
      {children}
    </div>
  );
}
