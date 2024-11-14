"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboard </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          
            <Link href={item.url} key={item.title} className="hover:bg-black">
            <SidebarMenuItem className={`${ item.isActive && 'bg-black text-white rounded-md' } `}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span className="">
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
