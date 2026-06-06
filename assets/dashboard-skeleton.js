import { initSidebarMenu } from "./base/sidebar-menu";
import { DashboardSkeleton } from "dashboard-skeleton-compostrap";
import "sidebar-menu-2-compostrap/sidebar-custom.css";
import "dashboard-skeleton-compostrap/dashboard.css";

document.addEventListener("DOMContentLoaded", () => {
	initSidebarMenu({ theme: false });
	DashboardSkeleton.init();
});
