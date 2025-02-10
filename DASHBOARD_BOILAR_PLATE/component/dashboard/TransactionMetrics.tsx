import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransactionMetrics() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium ">Last Transaction</CardTitle>
                    <ArrowUpRight className="w-4 h-4 " />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl font-bold ">128</div>
                        <p className="text-xs text-zinc-500">Last 24 hour transaction</p>

                        {/* Additional Transaction Details */}
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="">Latest Time</span>
                                <span className="text-slate-800">2:30 PM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Transaction ID</span>
                                <span className="text-slate-800">#TRX-789</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Payment Method</span>
                                <span className="text-slate-800">Credit Card</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium ">Total Revenue</CardTitle>
                    <ArrowUpRight className="w-4 h-4 " />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl font-bold ">128</div>
                        <p className="text-xs text-green-500">8.3% more then last month</p>

                        {/* Additional Revenue Details */}
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="">Daily Average</span>
                                <span className="text-slate-800">$4.2k</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Weekly Total</span>
                                <span className="text-slate-800">$29.4k</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Projected Monthly</span>
                                <span className="text-slate-800">$125.8k</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium ">Total Refund</CardTitle>
                    <ArrowUpRight className="w-4 h-4 " />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-3xl font-bold ">128</div>
                        <p className="text-xs text-red-500">8.3% less then last month</p>

                        {/* Additional Refund Details */}
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between text-xs">
                                <span className="">Processing</span>
                                <span className="text-slate-800">12 requests</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Average Time</span>
                                <span className="text-slate-800">48 hours</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="">Success Rate</span>
                                <span className="text-slate-800">95%</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

