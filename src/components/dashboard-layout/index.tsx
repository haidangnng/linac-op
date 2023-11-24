import { Navbar } from "./navbar";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full h-16 border border-black">
        <Navbar />
      </div>

      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}
