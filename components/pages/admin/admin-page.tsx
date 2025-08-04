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
import { adminSidebarData } from "@/config/sidebar/admin-sidebar-data"

export default function AdminPage() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" data={adminSidebarData} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards
                                cards={[
                                    {
                                        description: "Total Devices",
                                        title: "156",
                                        badgeText: "+12.5%",
                                        badgeTrend: "up",
                                        footerPrimary: "Trending up this month",
                                        footerSecondary: "Compared to the last 6 months",
                                    },
                                    {
                                        description: "New Customers",
                                        title: "1,234",
                                        badgeText: "-20%",
                                        badgeTrend: "down",
                                        footerPrimary: "Down 20% this period",
                                        footerSecondary: "Acquisition needs attention",
                                    },
                                    {
                                        description: "Active Accounts",
                                        title: "45,678",
                                        badgeText: "+12.5%",
                                        badgeTrend: "up",
                                        footerPrimary: "Strong user retention",
                                        footerSecondary: "Engagement exceed targets",
                                    },
                                    {
                                        description: "Tickets",
                                        title: "14",
                                        badgeText: "+4.5%",
                                        badgeTrend: "up",
                                        footerPrimary: "Steady ticket increase",
                                        footerSecondary: "Meets growth projections",
                                    },
                                ]}
                            />
                            <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
