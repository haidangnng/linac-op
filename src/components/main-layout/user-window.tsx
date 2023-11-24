"use client";
import { ROUTES } from "@/lib/constants/routes";
import { Link } from "../navigation";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";

export default function UserWindow() {
  const signOut = async () => {
    const supabase = createSupabaseBrowerClient();
    await supabase.auth.signOut();

    redirect("/auth");
  };

  return (
    <div className="flex flex-row-reverse gap-2 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={ROUTES.PROFILE}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={signOut}>Logout</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
