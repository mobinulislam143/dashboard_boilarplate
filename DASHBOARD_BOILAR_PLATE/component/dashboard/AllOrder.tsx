"use client";

import { useState } from "react";
import { ChevronDown,  Check, Menu } from "lucide-react";
import { toast } from "sonner";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Order {
    customerName: string;
    phoneNumber: string;
    paymentMethod: string;
    location: string;
    paymentStatus: "Completed" | "Pending" | "Failed";
    orderStatus: "Shipped" | "Delivered" | "Refunds" | "Returns";
    orderSL: string;
}

export default function AllOrders() {
    const [openPaymentStatus, setOpenPaymentStatus] = useState<number | null>(
        null
    );
    const [openOrderStatus, setOpenOrderStatus] = useState<number | null>(null);
    const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

    const statusOptions = ["Completed", "Pending", "Failed"];
    const orderStatusOptions = ["Shipped", "Delivered", "Refunds", "Returns"];
    const [status, setStatus] = useState("all");

    const [orders, setOrders] = useState<Order[]>([
        {
            customerName: "Johan Smith",
            phoneNumber: "+5788585758",
            paymentMethod: "Credit Card",
            location: "Loss Angles",
            paymentStatus: "Completed",
            orderStatus: "Shipped",
            orderSL: "#d445448841",
        },
        {
            customerName: "Johan Smith",
            phoneNumber: "+5788585758",
            paymentMethod: "Credit Card",
            location: "Loss Angles",
            paymentStatus: "Pending",
            orderStatus: "Shipped",
            orderSL: "#d445448841",
        },
        {
            customerName: "Johan Smith",
            phoneNumber: "+5788585758",
            paymentMethod: "Credit Card",
            location: "Loss Angles",
            paymentStatus: "Failed",
            orderStatus: "Shipped",
            orderSL: "#d445448841",
        },
        {
            customerName: "Johan Smith",
            phoneNumber: "+5788585758",
            paymentMethod: "Credit Card",
            location: "Loss Angles",
            paymentStatus: "Completed",
            orderStatus: "Shipped",
            orderSL: "#d445448841",
        },
        {
            customerName: "Johan Smith",
            phoneNumber: "+5788585758",
            paymentMethod: "Credit Card",
            location: "Loss Angles",
            paymentStatus: "Pending",
            orderStatus: "Shipped",
            orderSL: "#d445448841",
        },
    ]);

    const getStatusColor = (status: string) => {
        const statusColors: Record<string, string> = {
            Completed: "text-green-500",
            Shipped: "text-green-500",
            Pending: "text-yellow-500",
            Refunds: "text-blue-500",
            Failed: "text-red-500",
            Delivered: "text-amber-500",
            Returns: "text-red-500",
        };
        return statusColors[status] || "text-gray-500";
    };

    

    const handlePaymentStatusChange = (orderIndex: number, newStatus: string) => {
        setOrders((prevOrders) =>
            prevOrders.map((order, index) =>
                index === orderIndex
                    ? {
                        ...order,
                        paymentStatus: newStatus as "Completed" | "Pending" | "Failed",
                    }
                    : order
            )
        );
        toast.success(`Payment status updated ${newStatus}`);
        setOpenPaymentStatus(null);
    };

    const handleOrderStatusChange = (orderIndex: number, newStatus: string) => {
        setOrders((prevOrders) =>
            prevOrders.map((order, index) =>
                index === orderIndex
                    ? {
                        ...order,
                        orderStatus: newStatus as
                            | "Shipped"
                            | "Delivered"
                            | "Refunds"
                            | "Returns",
                    }
                    : order
            )
        );
        
        setOpenOrderStatus(null);
    };
    
    const handleOrderSelect = (orderIndex: number) => {
        setSelectedOrder(orderIndex === selectedOrder ? null : orderIndex);
        toast.success(`Order status updated`);
        if (orderIndex !== selectedOrder) {
            handleOrderStatusChange(orderIndex, "Shipped");
        }
    };

    return (
        <div className=" bg-bg_secondary px-2 rounded-[12px] min-h-[80vh]">
            <div>
                <div className="mb-6 flex items-center justify-between p-5">
                    <h1 className="text-2xl font-medium text-black">All Order list</h1>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="bg-transparent border-gray-700 text-gray-900 hover:bg-gray-300 hover:text-gray-800 gap-2"
                                >
                                    Payment Status Filter
                                    <Menu className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-gray-300 border-gray-700">
                                <DropdownMenuRadioGroup
                                    value={status}
                                    onValueChange={setStatus}
                                >
                                    {statusOptions?.map((item, indx) => (
                                        <DropdownMenuRadioItem
                                            key={indx}
                                            value={item}
                                            className="text-gray-900 focus:bg-white focus:text-gray-900"
                                        >
                                            {item}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <button className="text-sm hover:text-gray-700 text-gray-900 ">
                            See All
                        </button>
                    </div>
                </div>

                <div className="rounded-lg overflow-x-auto min-h-[50vh]">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-600 text-sm font-medium text-gray-950">
                                <th className="p-4 text-left">Customer name</th>
                                <th className="p-4 text-left">Phone number</th>
                                <th className="p-4 text-left">Payment Method</th>
                                <th className="p-4 text-left">Location</th>
                                <th className="p-4 text-left">Payment status</th>
                                <th className="p-4 text-left">Order Status</th>
                                <th className="p-4 text-left">Order SL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm text-gray-900 cursor-pointer ${orders.length - 1 === index
                                            ? ""
                                            : "border-b border-gray-700"
                                        }  ${selectedOrder === index ? "bg-gray-300" : ""}`}
                                    onClick={() => handleOrderSelect(index)}
                                >
                                    <td className="p-4">{order.customerName}</td>
                                    <td className="p-4">{order.phoneNumber}</td>
                                    <td className="p-4">{order.paymentMethod}</td>
                                    <td className="p-4">{order.location}</td>
                                    <td className="p-4 relative font-medium">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenPaymentStatus(
                                                    openPaymentStatus === index ? null : index
                                                );
                                            }}
                                            className={`flex items-center gap-1 ${getStatusColor(
                                                order.paymentStatus
                                            )}`}
                                        >
                                            {order.paymentStatus}
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                        {openPaymentStatus === index && (
                                            <div className="absolute left-0 top-full z-10 mt-1 w-36 rounded-md border border-gray-700 bg-gray-300 py-1 shadow-lg">
                                                {statusOptions.map((status) => (
                                                    <button
                                                        key={status}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handlePaymentStatusChange(index, status);
                                                        }}
                                                        className={`flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-200 ${getStatusColor(
                                                            status
                                                        )}`}
                                                    >
                                                        {status}
                                                        {order.paymentStatus === status && (
                                                            <Check className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 relative font-medium">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenOrderStatus(
                                                    openOrderStatus === index ? null : index
                                                );
                                            }}
                                            className={`flex items-center gap-1 ${getStatusColor(
                                                order.orderStatus
                                            )}`}
                                        >
                                            {order.orderStatus}
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                        {openOrderStatus === index && (
                                            <div className="absolute left-0 top-full z-10 mt-1 w-36 rounded-md border border-gray-700 bg-gray-300 py-1 shadow-lg">
                                                {orderStatusOptions.map((status) => (
                                                    <button
                                                        key={status}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleOrderStatusChange(index, status);
                                                        }}
                                                        className={`flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-800 ${getStatusColor(
                                                            status
                                                        )}`}
                                                    >
                                                        {status}
                                                        {order.orderStatus === status && (
                                                            <Check className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4">{order.orderSL}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
