"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { useCallback, useState } from "react";
import ContactForm from "./contact-form";
import ContactDisplay from "./contact-display";

export default function ContactInformation() {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleIsEditing = useCallback(
    () => setIsEditing(!isEditing),
    [isEditing],
  );

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center w-full">
        <CardTitle>Contact information</CardTitle>
        <Button onClick={toggleIsEditing} variant="outline">
          <Settings2 className="mr-4" size={16} />
          Edit
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-center items-center p-6">
        {isEditing ? <ContactForm /> : <ContactDisplay />}
      </CardContent>
    </Card>
  );
}
