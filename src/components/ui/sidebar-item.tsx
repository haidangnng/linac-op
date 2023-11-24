import clsx from "clsx";
import { Link } from "../navigation";
import { MenuItemType } from "@/lib/types/MenuType";

export const SidebarItem: React.FC<
  MenuItemType & { isActive: boolean; sidebarOpen: boolean }
> = ({ label, target, sidebarOpen, icon, isActive }) => {
  const Icon = icon;

  return (
    <Link
      href={target}
      className={clsx("flex gap-4 p-4 justify-start items-center w-full h-12", {
        "justify-center": !sidebarOpen,
        "bg-white": isActive,
      })}
    >
      <div className="w-6 h-6">
        <Icon size={24} />
      </div>
      <p
        className={clsx("transition delay-200", {
          hidden: !sidebarOpen,
          block: sidebarOpen,
        })}
      >
        {label}
      </p>
    </Link>
  );
};
