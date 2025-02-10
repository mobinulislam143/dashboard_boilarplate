"use client"

import { type ReactNode, useState } from "react"
import { DashboardSidebar } from "../DashboardSidebar"
import DashboardNav from "../DashboardNavbar"
import { IoMenu } from "react-icons/io5"

const Wrapper = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev)
    }

    return (
        <div className="h-screen max-h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[250px,1fr] bg-[#ececec] text-white">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 lg:!static z-50 w-full max-w-[300px] sm:max-w-[400px] bg-[#ececec] h-screen ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    } transform transition-transform duration-300 ease-in-out`}
            >
                <DashboardSidebar />
            </div>
            {/* Main Content */}
            <div className="relative">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden absolute top-4 left-4 z-50 p-2 rounded-[8px] bg-bg_primary text-white hover:bg-slate-500 "
                    aria-label="Toggle sidebar"
                >
                    <IoMenu size={24} />
                </button>

                <DashboardNav />
                <div className="p-6 overflow-y-auto h-[90vh] min-h-[500px] overflow-hidden bg-slate-100 ">{children}</div>
            </div>
            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    )
}

export default Wrapper

