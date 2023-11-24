import { Gauge, LayoutDashboard, User, Users2 } from "lucide-react";
import { MenuItemType } from "../types/MenuType";
import { ROUTES } from "./routes";

const menuItems: MenuItemType[] = [
  {
    // label: "Tổng quan",
    label: "dashboard",
    target: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    // label: "Nạp tiền",
    label: "profile",
    target: ROUTES.PROFILE,
    icon: User,
  },
  {
    label: "patients",
    target: ROUTES.PATIENTS,
    icon: Users2,
  },
];

export default menuItems;
