import { Navbar } from "./navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full h-16">
        <Navbar />
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  );
}
