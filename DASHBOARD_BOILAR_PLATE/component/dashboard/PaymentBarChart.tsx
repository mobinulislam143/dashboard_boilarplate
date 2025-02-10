"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 85 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 70 },
    { month: "Mai", value: 45 },
    { month: "Jun", value: 45 },
    { month: "Jul", value: 95 },
    { month: "Aug", value: 45 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 65 },
    { month: "Nov", value: 85 },
    { month: "Dec", value: 75 },
];

// Process data to include the fill color dynamically
const processedData = data.map((item, index, arr) => {
    const prevValue = index > 0 ? arr[index - 1].value : item.value;
    return {
        ...item,
        fill: item.value > prevValue ? "#5633D1" : "#828181", // Set color dynamically
    };
});

export default function PayementBarChart() {
    return (
        <div className="bg-bg_secondary p-6 rounded-[15px] w-full max-w-full overflow-x-auto">
            <div className="flex justify-between items-center mb-6 min-w-[600px]">
                <h2 className="text-xl text-black">Statistics</h2>
                <Button
                    variant="outline"
                    className="text-gray-800 bg-transparent border-gray-700"
                >
                    This Yearly
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="h-[350px] w-full min-w-[600px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={processedData}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                        barGap={8} // Adjust spacing between bars
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#333"
                            strokeDasharray="3 3"
                        />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#666" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#666" }}
                            ticks={[0, 30, 50, 70, 90, 110]}
                            domain={[0, 110]}
                            tickFormatter={(value: any) => `$${value}`}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="value"
                            radius={[10, 10, 0, 0]}
                            barSize={20}
                            shape={(props: any) => {
                                const { x, y, width, height, payload } = props;
                                return (
                                    <rect
                                        x={x}
                                        y={y}
                                        width={width}
                                        height={height}
                                        fill={payload.fill}
                                        rx={10}
                                        ry={10}
                                    />
                                );
                            }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
