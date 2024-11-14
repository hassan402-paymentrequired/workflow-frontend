'use client'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {ProfileDropdown} from '@/components/ProfileDropdown'
import React from "react"
import {BellRing } from "lucide-react"
import { useAuth } from "@/hooks/auth"
import { usePathname } from 'next/navigation';


export default function PageLayout({children}: {children: React.ReactNode}) {
  const { user } = useAuth({ middleware: 'auth' })

  const pathname = usePathname();

  const showSidebar = !pathname.startsWith('/projects');

  if (!user) {
      return <div>Loading.....</div>
  }
  return (
    <>
      {showSidebar ? (
      
          <SidebarProvider>
            <AppSidebar user={user} />
          
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                      
                          Building Your Application
                        
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                      <BreadcrumbLink href="#">
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                      <BreadcrumbLink href="/create-project">
                        <BreadcrumbPage>Add project</BreadcrumbPage>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>

              
                </div>
              </header>
              {children}
            </SidebarInset>
          
          </SidebarProvider>
    )
   : <div>{children}</div>}

  </>
  )
}
