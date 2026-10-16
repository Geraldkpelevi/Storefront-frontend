import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { customersData } from "../data/customersDAta";


export default function CardWithList() {
  return (
    <Card className="w-full min-w-0">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Latest Customers
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {customersData.map(({ name, email, price, image }, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={image} alt={name} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {name}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {email}
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                kwd {price}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
