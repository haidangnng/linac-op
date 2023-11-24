import { Card, CardContent } from "@/components/ui/card";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Settings2 } from "lucide-react";

export default function BasicInformation() {
  return (
    <Card className="p-4">
      <CardContent className="flex flex-col justify-center items-center p-6">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Avatar className="w-20 h-20 aspect-square">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* <Button variant="outline"> */}
          {/*   <Settings2 className="mr-4" size={16} /> */}
          {/*   Edit */}
          {/* </Button> */}

          <h3 className="text-lg font-semibold text-center">Mr. John Doe</h3>
          {/* <p className="text-secondary-foreground">JohnDoe.mail@gmail.com</p> */}
        </div>
      </CardContent>
    </Card>
  );
}
