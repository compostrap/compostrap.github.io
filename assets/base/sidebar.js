import "bootstrap";
import { Sidebar, ThemeSwitcher } from "sidebar-skeleton-compostrap";
import "bootstrap/dist/css/bootstrap.css";
import "sidebar-skeleton-compostrap/sidebar.css";

export function initSidebar() {
	Sidebar.init();
}

export function initBase() {
	initSidebar();
	ThemeSwitcher.init();
}
