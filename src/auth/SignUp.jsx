import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Dialog size="xs" open={open} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h-2" color="blue-gray">
              Sign Up
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign Up.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input label="Name" size="lg" />

            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={() => navigate("/sign-in")}
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
