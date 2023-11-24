"use client";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import menuItems from "@/lib/constants/menu-items";
import { SidebarItem } from "../ui/sidebar-item";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleSidebar = useCallback(() => setOpen(!open), [open]);

  return (
    <div
      className={clsx("h-full bg-red-50 flex flex-col transition-all", {
        "w-80": open,
        "w-20": !open,
      })}
    >
      <div className="flex flex-col flex-grow">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            {...item}
            isActive={pathname.includes(item.target)}
            sidebarOpen={open}
          />
        ))}
      </div>
      <Button variant={"ghost"} onClick={toggleSidebar}>
        {open ? <MoveLeft /> : <MoveRight />}
      </Button>
    </div>
  );
}
