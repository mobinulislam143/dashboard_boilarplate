import { ShoppingCart, HandCoins, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderStatistics() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black ">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-[26px] font-medium">Total Order</CardTitle>
                    <HandCoins className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-2xl font-bold ">0</div>
                        <div className="flex items-center text-xs text-zinc-400">
                            <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                            <span className="text-green-500">+12.5%</span>
                            <span className="ml-1">from last month</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-2">Total processed orders across all categories</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black ">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-[26px] font-medium">Total User</CardTitle>
                    <ShoppingCart className="w-4 h-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-2xl font-bold ">0</div>
                        <div className="flex items-center text-xs text-zinc-400">
                            <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
                            <span className="text-red-500">-3.2%</span>
                            <span className="ml-1">from last week</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-2">Orders with custom specifications and modifications</p>
                        <div className="flex justify-between text-xs text-zinc-500 mt-2">
                            <span>Avg. Processing Time:</span>
                            <span>2.5 days</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-slate-100 hover:bg-slate-200 cursor-pointer rounded-[13px] text-black ">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-[26px] font-medium">Income</CardTitle>
                    <MessageSquare className="w-4 h-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-1">
                        <div className="text-2xl font-bold ">0</div>
                        <div className="flex items-center text-xs text-zinc-400">
                            <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                            <span className="text-green-500">+8.1%</span>
                            <span className="ml-1">from last week</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-2">Standard orders with fixed specifications</p>
                        <div className="flex justify-between text-xs text-zinc-500 mt-2">
                            <span>Fulfillment Rate:</span>
                            <span>98.5%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

