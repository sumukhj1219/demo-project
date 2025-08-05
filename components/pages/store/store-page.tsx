"use client"
import { AppSidebar } from "@/components/common/sidebar/app-sidebar"
import { DataTable } from "@/components/common/sidebar/data-table"
import { SiteHeader } from "@/components/common/sidebar/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {data} from "@/data/store-data"
import { QRCodeGenerator } from "./qrcode-generator"
import { storeSidebarData } from "@/config/sidebar/store-sidebar-data"


const StorePage = () => {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" data={storeSidebarData} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            
                            <div className="px-4 lg:px-6">
                                <div className="flex flex-col lg:flex-row gap-4">
                                    <div className="w-full lg:w-1/2">
                                        <QRCodeGenerator />
                                    </div>
                                    
                                </div>
                            </div>
                            <DataTable data={data} />
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default StorePage
