"use client"

import * as React from "react"

import { NavDocuments } from "@/components/common/sidebar/nav-documents"
import { NavMain } from "@/components/common/sidebar/nav-main"
import { NavSecondary } from "@/components/common/sidebar/nav-secondary"
import { NavUser } from "@/components/common/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconInnerShadowTop } from "@tabler/icons-react"

type AppSidebarProps = {
  data: {
    navMain: any[]
    documents: any[]
    navSecondary: any[]
    user: any
  }
} & React.ComponentProps<typeof Sidebar>

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">KDT </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
