export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex items-center justify-center bg-slate-800 text-gray-100">
      {children}
    </div>
  );
}
