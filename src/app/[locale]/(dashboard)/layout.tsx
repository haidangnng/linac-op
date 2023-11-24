import Sidebar from "@/components/main-layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("main-layout");
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-grow p-4 max-h-full">{children}</div>
    </div>
  );
}
