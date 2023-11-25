"use client";
import Pill from "@/components/pill";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

export default function PatientDetialPage() {
  return (
    <div className="w-full h-full">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center w-full">
          <CardTitle>General information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-6">
          <div className="flex gap-6 h-full min-h-fit">
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2 justify-between w-full min-h-[40px]">
              <div className="flex flex-col">
                <div className="inline-flex">
                  <h3 className="text-2xl font-bold">Patient name</h3>
                </div>
                <div className="flex items-center">
                  <p>
                    <span>29</span> years old, <span>Female</span>
                  </p>
                  <Dot className="text-zinc-400" />
                  <p>25/07/1996</p>
                </div>
              </div>

              <Separator className="w-full" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <div className="flex flex-col gap-2">
                  <p className="text-zinc-400">Priority</p>
                  <p>High</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-zinc-400">Regions</p>
                  <p>Lung Special</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-zinc-400">Next Appointment</p>
                  <p>Scheduled Appointment</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-zinc-400">Special notes</p>
                  <p>N/A</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400">Assigned doctor</p>
              <p>N/A</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400">Address</p>
              <p>N/A</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400">Special notes</p>
              <p>N/A</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400">Special notes</p>
              <p>N/A</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
