import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Typography,
} from "@material-tailwind/react";
import { recentOrdersData } from "../data/recentOrdersData";

function Orders() {
  return (
    <div>
      <Card className="overflow-hidden border border-blue-gray-100 shadow-sm">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="w-full ">
            <div className="mb-2 w-full  flex items-center justify-between gap-">
              <Typography variant="h6" color="blue-gray">
                All Orders
              </Typography>
              <div className="w-full md:w-96">
                <Input
                  label="Search Invoice"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>

            <Typography className="mt-1 font-normal text-blue-gray-600">
              A summary of all transactions
            </Typography>
          </div>
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
              {recentOrdersData.map((order) => {
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

export default Orders;
