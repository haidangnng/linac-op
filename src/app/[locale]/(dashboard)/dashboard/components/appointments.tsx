"use client";
import Calendar from "@/components/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Appointments() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center w-full">
        <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-center items-center p-6">
        <Calendar />
      </CardContent>
    </Card>
  );
}
