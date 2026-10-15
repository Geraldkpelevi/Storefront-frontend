import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import CardWithList from "../components/CardWithList";

const recentOrders = [
  {
    id: "#ORD-1001",
    customer: "John Smith",
    product: "Wireless Headphones",
    date: "Oct 15, 2026",
    amount: "kwd20.00",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Sarah Johnson",
    product: "Smart Watch",
    date: "Oct 14, 2026",
    amount: "kwd250.00",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Brown",
    product: "Laptop Stand",
    date: "Oct 13, 2026",
    amount: "kwd85.00",
    status: "Completed",
  },
  {
    id: "#ORD-1004",
    customer: "Emily Davis",
    product: "Mechanical Keyboard",
    date: "Oct 12, 2026",
    amount: "kwd150.00",
    status: "Cancelled",
  },
  {
    id: "#ORD-1005",
    customer: "David Wilson",
    product: "USB-C Hub",
    date: "Oct 11, 2026",
    amount: "kwd65.00",
    status: "Pending",
  },
];

const chartData = [
  { month: "May", value: 35 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 42 },
  { month: "Aug", value: 75 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 90 },
];

export default function Home() {
  return (
    <div className="">
      {/* Main Content */}
      <div className="mb-8 grid min-w-0 grid-cols-1 gap-2 xl:grid-cols-3">
        {/* Revenue Chart */}
        <Card className="border border-blue-gray-100 shadow-sm xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray">
              Revenue Overview
            </Typography>

            <Typography className="mt-1 font-normal text-blue-gray-600">
              Monthly revenue performance
            </Typography>
          </CardHeader>

          <CardBody className="px-6 pb-6 pt-0">
            <div className="flex h-64 items-end justify-around gap-3 border-b border-blue-gray-100 pb-2">
              {chartData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-md bg-blue-500 transition-all hover:bg-blue-700"
                      style={{ height: `${item.value}%` }}
                      title={`${item.value}%`}
                    />
                  </div>

                  <Typography variant="small" className="text-blue-gray-500">
                    {item.month}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="small" className="text-blue-gray-500">
                  Total revenue
                </Typography>

                <Typography variant="h5" color="blue-gray">
                  kwd 48,250
                </Typography>
              </div>

              <Chip
                value="+12.8%"
                color="green"
                variant="ghost"
                className="rounded-full"
              />
            </div>
          </CardBody>
        </Card>

        <CardWithList />
       
      </div>

      {/* Recent Orders Table */}
      <Card className="overflow-hidden border border-blue-gray-100 shadow-sm">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Recent Orders
            </Typography>

            <Typography className="mt-1 font-normal text-blue-gray-600">
              A summary of your latest transactions
            </Typography>
          </div>

          <Button variant="outlined" color="blue" size="sm">
            View All Orders
          </Button>
        </CardHeader>

        <CardBody className="overflow-x-auto px-0 pt-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr className="bg-blue-gray-50/50">
                {[
                  "Order ID",
                  "Customer",
                  "Product",
                  "Date",
                  "Amount",
                  "Status",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="border-y border-blue-gray-100 px-6 py-4"
                  >
                    <Typography
                      variant="small"
                      className="font-semibold text-blue-gray-600"
                    >
                      {heading}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => {
                const statusColor = {
                  Completed: "green",
                  Pending: "orange",
                  Cancelled: "red",
                };

                return (
                  <tr
                    key={order.id}
                    className="transition-colors hover:bg-blue-gray-50/50"
                  >
                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Typography
                        variant="small"
                        className="font-semibold text-blue-500"
                      >
                        {order.id}
                      </Typography>
                    </td>

                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {order.customer}
                      </Typography>
                    </td>

                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                      >
                        {order.product}
                      </Typography>
                    </td>

                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                      >
                        {order.date}
                      </Typography>
                    </td>

                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {order.amount}
                      </Typography>
                    </td>

                    <td className="border-b border-blue-gray-50 px-6 py-4">
                      <Chip
                        value={order.status}
                        color={statusColor[order.status]}
                        variant="ghost"
                        size="sm"
                        className="w-fit rounded-full"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
