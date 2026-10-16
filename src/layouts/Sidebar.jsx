import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Card,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MultiLevelSidebar({
  mobileOpen,
  onMobileToggle,
  onMobileClose,
}) {
  const [open, setOpen] = React.useState(0);

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    onMobileClose();
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const renderSidebar = (isMobile = false) => (
    <Card
      className={`${
        isMobile ? "h-full pt-14" : "h-[calc(100vh-2rem)]"
      } w-full max-w-none  p-4 shadow-xl shadow-blue-gray-900/5`}
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <img
          src="https://www.bing.com/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2"
          alt="brand"
          className="h-8 w-8"
        />
        <Typography variant="h5" color="blue-gray">
          User Name
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => {
                handleOpen(1);
                navigateTo("/dashboard");
              }}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Store
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem onClick={() => navigateTo("/orders")}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem onClick={() => navigate("/products")}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem onClick={() => navigateTo("/messages")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem onClick={() => navigateTo("/settings")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={() => navigateTo("/")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );

  return (
    <>
      <div className="fixed left-4 top-4 z-[60] md:hidden">
        <IconButton
          variant="filled"
          color="white"
          className="h-10 w-10 text-blue-gray-900 shadow-md"
          aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={mobileOpen}
          onClick={onMobileToggle}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </IconButton>
      </div>

      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 md:block">
        {renderSidebar()}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-blue-gray-900/40"
            onClick={onMobileClose}
          />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[calc(100vw-3rem)] p-3">
            {renderSidebar(true)}
          </aside>
        </div>
      )}
    </>
  );
}
