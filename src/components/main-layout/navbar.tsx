"use client";
import * as React from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import UserWindow from "./user-window";

export function Navbar() {
  return (
    <NavigationMenu className="p-4 w-full min-w-full h-full">
      {/* <NavigationMenuList className="flex justify-between items-center min-w-full"> */}
      <div className="flex justify-between items-center min-w-full">
        <h1>hey</h1>
        <UserWindow />
      </div>
      {/* </NavigationMenuList> */}
    </NavigationMenu>
  );
}
