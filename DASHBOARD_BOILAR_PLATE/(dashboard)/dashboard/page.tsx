"use client";

import OrderInsightsCard from "@/components/dashboard/OrderInsightsChart";
import OrderStatistics from "@/components/dashboard/OrderStatistics";

const Dashboard = () => {
 

 
  return (
    <div>
      
      <div className="px-6">
        <OrderStatistics/>
      </div>
      {/* order insights */}
      <div className="mt-6">
        <OrderInsightsCard />
      </div>
      <div className="mt-6">
      </div>
    </div>
  );
};

export default Dashboard;
