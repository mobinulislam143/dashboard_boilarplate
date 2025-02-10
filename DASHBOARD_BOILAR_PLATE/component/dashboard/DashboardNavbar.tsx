import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {

    const pathName = usePathname()
    console.log('pathname is', pathName);
    return (
        <div>
            <div className="w-full flex items-center justify-between gap-0 sm:gap-10 bg-[#e9e9e9] text-black lg:px-4 px-20 py-4">
                {
                    pathName === '/dashboard' ? (
                        <div>
                            <h3 className="lg:text-[23px] md:text-xl font-semibold">Welcome to Luminor Dashboard </h3>
                        </div>

                    ) :
                        pathName === '/dashboard/payment' ? (
                            <div>
                                <h3 className="lg:text-[23px] md:text-xl font-semibold">Payments</h3>
                            </div>

                        ) :
                            pathName === '/dashboard/orders' ? (
                                <div>
                                    <h3 className="lg:text-[23px] md:text-xl font-semibold">Order List</h3>
                                </div>

                            ) :
                                pathName === '/dashboard/users' ? (
                                    <div>
                                        <h3 className="lg:text-[23px] md:text-xl font-semibold">All Users</h3>
                                    </div>

                                ) :
                                    pathName === '/dashboard/offers' ? (
                                        <div>
                                            <h3 className="lg:text-[23px] md:text-xl font-semibold">All Offers</h3>
                                        </div>

                                    ) :
                                        pathName === '/dashboard/profile' ? (
                                            <div>
                                                <h3 className="lg:text-[23px] md:text-xl font-semibold">Admin Profile</h3>
                                            </div>

                                        ) :
                                            ("")
                }
                <Link href={'/dashboard/profile'} className=" flex items-center gap-2 cursor-pointer hover:bg-[#b8b8b8] rounded-[20px] px-4 py-2 duration-200">
                    <div className=" hover:bg-transparent border p-2 rounded-full">
                        <User className="h-5 sm:h-[22px] w-5 sm:w-[22px] text-gray-600" />
                    </div>
                    <p>Johan</p>
                </Link>
            </div>

            </div>
            );
}