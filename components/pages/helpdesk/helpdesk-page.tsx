"use client"
import { AppSidebar } from "@/components/common/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/common/sidebar/chart-area-interactive"
import { DataTable } from "@/components/common/sidebar/data-table"
import { SectionCards } from "@/components/common/sidebar/section-cards"
import { SiteHeader } from "@/components/common/sidebar/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { managementSidebarData } from "@/config/sidebar/management-sidebar-data"

import data from "../../common/sidebar/data.json"
import { ManagementChart } from "@/config/charts/management-chart"
import { ManagementReports } from "../../reports/management-reports"
import NotificationsPanel from "./notifications"
import TicketsPanel from "./dashboard"

const HelpdeskPage = () => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" data={managementSidebarData} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards
                                cards={[
                                    {
                                        title: "12",
                                        description: "Open Tickets",
                                        badgeText: "+2",
                                        badgeTrend: "up",
                                        footerPrimary: "Increased since yesterday",
                                        footerSecondary: "Review pending assignments",
                                    },
                                    {
                                        title: "8",
                                        description: "In Progress",
                                        badgeText: "-1",
                                        badgeTrend: "down",
                                        footerPrimary: "Slight drop in active tasks",
                                        footerSecondary: "Technicians resolving faster",
                                    },
                                    {
                                        title: "45",
                                        description: "Resolved Today",
                                        badgeText: "+9",
                                        badgeTrend: "up",
                                        footerPrimary: "Strong closure rate",
                                        footerSecondary: "Team performance on track",
                                    },
                                    {
                                        title: "1.8h",
                                        description: "Avg Resolution",
                                        badgeText: "-0.4h",
                                        badgeTrend: "down",
                                        footerPrimary: "Improved efficiency",
                                        footerSecondary: "Faster than last 24h",
                                    },
                                ]}
                            />
                            <div className="px-4 lg:px-6">
                                <div className="grid md:grid-cols-3 gap-6 px-6 py-10">
                                    <div className="md:col-span-2">
                                        <TicketsPanel />
                                    </div>
                                    <NotificationsPanel />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default HelpdeskPage
