import {
  ArrowRightIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const features = [
  {
    icon: ChartBarIcon,
    title: "See the whole picture",
    description:
      "Bring revenue, orders, and customer activity into one clear view.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Keep every order moving",
    description:
      "Know what is new, what is in progress, and what needs your attention.",
  },
  {
    icon: UsersIcon,
    title: "Know your customers",
    description:
      "Keep customer details and purchase activity close to the work.",
  },
];


function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function PricingCard() {
  return (
    <Card color="gray" variant="gradient" className="w-full max-w-[40rem] p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          standard
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">kwd</span>29{" "}
          <span className="self-end text-4xl">/year</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">40+ built-in pages</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">1 year free updates</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Life time technical support
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function LandingPage() {
  return (
    <div className="overflow-hidden bg-[#f5f7f2] text-[#1c3027]">
      <main>
        <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:pb-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dce6dd] bg-white px-3 py-1.5 text-xs font-medium text-[#426454]">
                <span className="h-2 w-2 rounded-full bg-[#e37b51]" />A better
                view of your business
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] text-[#18372b] sm:text-5xl lg:text-6xl">
                Commerce,
                <span className="block text-[#4a8065]">made clearer.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#68776e] sm:mt-5 sm:text-base sm:leading-7">
                Storefront brings your orders, revenue, and customer activity
                into one calm, useful workspace, so you can spend less time
                chasing numbers and more time moving forward.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/sign-up"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#df754d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c96540] focus:outline-none focus:ring-2 focus:ring-[#df754d] focus:ring-offset-2"
                >
                  Create your workspace
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex min-h-11 items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-[#345643] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#4a8065] focus:ring-offset-2"
                >
                  Explore the platform
                </a>
              </div>
              <p className="mt-4 text-xs text-[#87938b]">
                A focused workspace for the everyday work of running a store.
              </p>
            </div>

            <PricingCard />
          </div>
        </section>

        <section
          id="features"
          className="border-y border-[#e5eae4] bg-white px-5 py-12 sm:px-8 sm:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase text-[#bb6946]">
                The essentials, connected
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1c3027] sm:text-4xl">
                Less time searching. More time running your business.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#718077] sm:text-base">
                The everyday details are easier to manage when they are all in
                one place.
              </p>
            </div>

            <div className="mt-8 grid gap-0 md:grid-cols-3 md:divide-x md:divide-[#e5eae4]">
              {features.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="border-t border-[#e5eae4] py-6 md:border-t-0 md:px-6 md:py-4 first:md:pl-0 last:md:pr-0"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#edf3ed] text-[#49775f]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold text-[#bd6c48]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#263a30]">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#748178]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-[#bb6946]">
                A clearer rhythm
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1c3027] sm:text-4xl">
                From daily details to confident decisions.
              </h2>
            </div>
            <div className="divide-y divide-[#dfe6df] border-y border-[#dfe6df]">
              {[
                [
                  "01",
                  "Start with what matters",
                  "See current performance without sorting through disconnected reports.",
                ],
                [
                  "02",
                  "Spot the next step",
                  "Bring order status and customer activity into the same view.",
                ],
                [
                  "03",
                  "Keep the day moving",
                  "Return to a workspace that makes routine work feel straightforward.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4"
                >
                  <span className="text-xs font-semibold text-[#bd6c48]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#263a30]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#748178]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-[#173b30] px-5 py-12 text-white sm:px-8 sm:py-16"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase text-[#b9d4c5]">
                Make room for the next thing
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Bring your business into focus.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#d2e1d7]">
                Get started with one clear place for the work behind your store.
              </p>
            </div>
            <Link
              to="/sign-up"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#f3f6ef] px-5 py-3 text-sm font-semibold text-[#173b30] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#173b30]"
            >
              Get started
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#173b30] px-5 pb-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-xs text-[#c4d3ca] sm:flex-row sm:items-center sm:justify-between">
          <p>Storefront</p>
          <p>Clear tools for the work behind your store.</p>
          <div className="flex gap-5">
            <Link to="/sign-in" className="transition hover:text-white">
              Sign in
            </Link>
            <Link to="/sign-up" className="transition hover:text-white">
              Create account
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
