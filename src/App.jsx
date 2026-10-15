import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarWithMegaMenu from "./layouts/Navbar";
import MultiLevelSidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/Routes";

export default function App() {
  const { pathname } = useLocation();
  const [mobileSidebarPath, setMobileSidebarPath] = useState(null);
  const mobileSidebarOpen = mobileSidebarPath === pathname;
  const showSidebar = ["/dashboard", "/messages", "/settings"].includes(
    pathname,
  );
  const showNavbar = !showSidebar;

  return (
    <div className="min-h-screen bg-gray-100">
      {showNavbar && <NavbarWithMegaMenu />}
      <div className={`flex min-w-0 gap-6 ${showSidebar ? "p-4" : "p-0"}`}>
        {showSidebar && (
          <MultiLevelSidebar
            mobileOpen={mobileSidebarOpen}
            onMobileToggle={() =>
              setMobileSidebarPath(mobileSidebarOpen ? null : pathname)
            }
            onMobileClose={() => setMobileSidebarPath(null)}
          />
        )}

        <main
          className={`min-w-0 flex-1 ${showSidebar ? "pt-12 md:pt-0" : ""}`}
        >
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}
