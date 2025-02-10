import PayementBarChart from "@/components/dashboard/PaymentBarChart";
import PaymentPieChart from "@/components/dashboard/PaymentPieChart";
import TransactionMetrics from "@/components/dashboard/TransactionMetrics";

export default function Page() {
    return (
        <div>
            <TransactionMetrics />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <PayementBarChart />
                </div>
                <div>
                    <PaymentPieChart />
                </div>
            </div>
        </div>
    );
}