import { CalendarDays, X } from "lucide-react";
import { Badge } from "@/components/ui/badge"



import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo({
  name,
  profile,
  role,
}: {
  name: string;
  profile?: string;
  role: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
       <div className="flex items-center justify-between bg-gray-300/10 px-3 my-2 py-1 rounded cursor-pointer">
            <h2 className="text-base text-gray-700">{name}</h2>
            <Badge variant="outline">{role}</Badge>

       </div>
      </HoverCardTrigger>
      <HoverCardContent >
        <div className="flex space-x-1">
          <Avatar>
            <AvatarFallback>{name.substring(0,2)}</AvatarFallback>
          </Avatar>
          <div className="space-y-[0.5]">
            <h4 className="text-sm font-semibold">{name}</h4>
            <span className="text-sm">{role}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
