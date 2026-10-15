import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#workflow" },
];

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);
  const closeMenu = () => setOpenNav(false);

  const renderLinks = (mobile = false) =>
    navLinks.map(({ label, href }) => (
      <Link
        key={label}
        to={href}
        onClick={closeMenu}
        className={`text-sm font-medium text-[#496055] transition hover:text-[#173b30] ${
          mobile
            ? "block rounded-md px-3 py-2.5 hover:bg-[#f1f5f0]"
            : "px-3 py-2"
        }`}
      >
        {label}
      </Link>
    ));

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl rounded-none border-0 bg-[#f5f7f2] px-5 py-3 shadow-none sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 text-[#173b30]"
          aria-label="Storefront home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[#173b30] text-sm font-bold text-white">
            S
          </span>
          <span className="text-base font-semibold">Storefront</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {renderLinks()}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/sign-in"
            className="inline-flex min-h-10 items-center justify-center rounded-md px-3 text-sm font-semibold text-[#345643] transition hover:bg-white"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#df754d] px-4 text-sm font-semibold text-white transition hover:bg-[#c96540]"
          >
            Get started
          </Link>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="h-10 w-10 shrink-0 text-[#173b30] lg:hidden"
          aria-label={openNav ? "Close menu" : "Open menu"}
          aria-expanded={openNav}
          onClick={() => setOpenNav((isOpen) => !isOpen)}
        >
          {openNav ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <nav
          className="grid gap-1 border-t border-[#e2e8e1] pt-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {renderLinks(true)}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link
              to="/sign-in"
              onClick={closeMenu}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#d9e2da] px-3 text-sm font-semibold text-[#345643]"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              onClick={closeMenu}
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#df754d] px-3 text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </div>
        </nav>
      </Collapse>
    </Navbar>
  );
}
