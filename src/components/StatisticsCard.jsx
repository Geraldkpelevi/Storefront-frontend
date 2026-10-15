
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function StatisticsCard({
  color = "blue",
  icon,
  title,
  value,
  footer,
}) {
  return (
    <Card className="relative ">
      <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
        className="absolute -top-5 left-4 grid h-12 w-12 place-items-center"
      >
        {icon}
      </CardHeader>

      <CardBody className="p-4 pt-6 text-right">
        <Typography
          variant="small"
          className="font-normal text-blue-gray-600"
        >
          {title}
        </Typography>

        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
      </CardBody>

      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          <Typography variant="small" className="font-normal">
            {footer}
          </Typography>
        </CardFooter>
      )}
    </Card>
  );
}
