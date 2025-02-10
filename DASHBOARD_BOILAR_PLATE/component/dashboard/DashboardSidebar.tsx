"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from '@/assets/images/mainlogo.png'
import {
    LayoutDashboard,
    CreditCard,
    ListOrdered,
    Package,
    User,
    // Grid,
    // ArrowUpRight,
    Tag,
    // Ticket,
    // Upload,
    LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
    {
        title: "Overview",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        title: "Payment",
        icon: CreditCard,
        href: "/dashboard/payment",
    },
    {
        title: "Order list",
        icon: ListOrdered,
        href: "/dashboard/orders",
    },
    {
        title: "All User",
        icon: Package,
        href: "/dashboard/users",
    },
    {
        title: "All Offers",
        icon: Tag,
        href: "/dashboard/offers",
    },
    {
        title: "My profile",
        icon: User,
        href: "/dashboard/profile",
    },
    // {
    //     title: "All Categories",
    //     icon: Grid,
    //     href: "/",
    // },
    // {
    //     title: "Elevating Styles",
    //     icon: ArrowUpRight,
    //     href: "/",
    // },
    // {
    //     title: "All Offer",
    //     icon: Tag,
    //     href: "/",
    // },
    // {
    //     title: "All Coupon",
    //     icon: Ticket,
    //     href: "/",
    // },
    // {
    //     title: "Upload Cover Banner",
    //     icon: Upload,
    //     href: "/",
    // },
]

export function DashboardSidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col bg-[#ececec] text-black">
            <div className="p-4">
                <Link href={'/'}>
                    <Image
                        src={logo}
                        alt="Quick Online Deals"
                        width={180}
                        height={40}
                        className="mb-6 lg:ml-0 ml-12"
                    />
                </Link>
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-[8px] px-3 py-2 text-sm transition-colors  hover:bg-bg_primary hover:text-gray-200",
                                    isActive && "bg-bg_primary text-white",
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="mt-auto p-4">
                <button className="flex w-full items-center gap-3 rounded-[8px] bg-bg_primary px-3 py-2 text-sm text-white transition-colors hover:bg-bg_primary ">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </div>
    )
}

