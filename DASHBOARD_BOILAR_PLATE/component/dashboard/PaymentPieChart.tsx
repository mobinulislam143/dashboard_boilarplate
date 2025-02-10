"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Set initial progress percentage
const initialProgress1 = 60;
const initialProgress2 = 50;

export default function PaymentPieChart() {
    // Circle properties
    const circleRadius = 85;
    const circumference1 = 2 * Math.PI * circleRadius;
    const progressOffset1 =
        circumference1 - (initialProgress1 / 100) * circumference1;
    const circumference2 = 2 * Math.PI * circleRadius;
    const progressOffset2 =
        circumference2 - (initialProgress2 / 100) * circumference2;

    return (
        <Card className="bg-bg_secondary  p-6 w-full border-none rounded-[15px] ">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl ">Order Review Status</h2>
                <Button
                    variant="outline"
                    className="text-gray-900 bg-transparent border-gray-700"
                >
                    Today
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-[350px]">
                {/* Circular Progress Chart with Two SVGs */}
                <div className="relative w-fit h-fit">
                    {/* First SVG - Outer Background & Progress */}
                    <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        className="rotate-90"
                    >
                        {/* Background Circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={circleRadius}
                            fill="none"
                            stroke="#828181"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />

                        {/* Progress Circle - Ensure only one path is shown correctly */}
                        {initialProgress1 > 0 && (
                            <circle
                                cx="100"
                                cy="100"
                                r={circleRadius}
                                fill="none"
                                stroke="#5633D1"
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeDasharray={circumference1}
                                strokeDashoffset={progressOffset1}
                                className="transition-all duration-500 ease-in-out"
                            />
                        )}
                    </svg>

                    {/* Second SVG - Inner Chart */}
                    <svg
                        width="140"
                        height="140"
                        viewBox="0 0 200 200"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
                    >
                        {/* Background Circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r={circleRadius}
                            fill="none"
                            stroke="#828181"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />

                        {/* Inner Progress Circle - Ensure only one fill path appears */}
                        {initialProgress2 > 0 && (
                            <circle
                                cx="100"
                                cy="100"
                                r={circleRadius}
                                fill="none"
                                stroke="#7b5aed"
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeDasharray={circumference2}
                                strokeDashoffset={progressOffset2 + 50} // Adjust offset for a second effect
                                className="transition-all duration-500 ease-in-out"
                            />
                        )}
                    </svg>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-bg_primary rounded-full" />
                        <p className="text-gray-800">
                            <span className="font-semibold mr-2">02</span>
                            <span className="text-gray-700">Claim Product Review</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-[#7B5AED] opacity-30 rounded-full" />
                        <p className="text-gray-800">
                            <span className="font-semibold mr-2">31</span>
                            <span className="text-gray-700">Positive Product Review</span>
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
