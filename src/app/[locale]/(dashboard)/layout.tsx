import React from "react";
import Sidebar from "@/components/main-layout/sidebar";
import { readUserSession } from "@/lib/actions";
import { redirect } from "@/components/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth");
  }

  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-grow p-4 max-h-full">{children}</div>
    </div>
  );
}
