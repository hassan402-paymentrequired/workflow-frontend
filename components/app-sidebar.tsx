"use client"

import * as React from "react"
import {
  Users ,
  Frame,
  ShieldCheck ,
  ServerCrash ,
  Settings2,
  FolderOpenDot,
  CodeXml ,
  LayoutDashboard
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderOpenDot,
    },
    {
      title: "Employees",
      url: "/employees",
      icon: Users ,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  Teams: [
    {
      name: "Design Team",
      url: "/design-team",
      icon: Frame,
    },
    {
      name: "Development",
      url: "/development-team",
      icon: CodeXml,
    },
    {
      name: "Pm",
      url: "/pm",
      icon: ServerCrash,
    },
    {
      name: "Quality Assurance",
      url: "/quality-assurance",
      icon: ShieldCheck ,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.Teams} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
