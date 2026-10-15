import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "../components/StatisticsCard";
import Home from "./Home";

export default function Dashboard() {
  const statistics = [
    {
      title: "Total Users",
      value: "2,450",
      color: "blue",
      icon: <UsersIcon className="h-6 w-6 text-white" />,
      footer: (
        <span>
          <span className="font-bold text-green-500">+12%</span> compared to
          last month
        </span>
      ),
    },
    {
      title: "Total Revenue",
      value: "kwd 8,840",
      color: "green",
      icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />,
      footer: (
        <span>
          <span className="font-bold text-green-500">+8.5%</span> compared to
          last month
        </span>
      ),
    },
    {
      title: "Total Orders",
      value: "1,230",
      color: "orange",
      icon: <ShoppingCartIcon className="h-6 w-6 text-white" />,
      footer: (
        <span>
          <span className="font-bold text-red-500">-3%</span> compared to last
          month
        </span>
      ),
    },
    {
      title: "Monthly Sales",
      value: "kwd 12,560",
      color: "purple",
      icon: <ChartBarIcon className="h-6 w-6 text-white" />,
      footer: (
        <span>
          <span className="font-bold text-green-500">+18%</span> compared to
          last month
        </span>
      ),
    },
  ];
  return (
    <div className="space-y-2">
      <div className="rounded-xl   shadow-sm">
        <h1 className="text-2xl font-bold text-blue-gray-900">Dashboard</h1>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 mb-7 mt-10">
          {statistics.map((stat) => (
            <StatisticsCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
      <Home />
    </div>
  );
}
