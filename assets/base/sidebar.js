import "bootstrap";
import { Sidebar } from "sidebar-skeleton-compostrap";
import { ThemeSwitcher } from "theme-switcher-compostrap";
import "bootstrap/dist/css/bootstrap.css";
import "sidebar-skeleton-compostrap/sidebar.css";
import "theme-switcher-compostrap/theme-switcher.css";

export function initSidebar() {
	Sidebar.init();
}

export function initBase() {
	initSidebar();
	new ThemeSwitcher({
		lightIcon: "fa-solid fa-sun",
		darkIcon: "fa-solid fa-moon"
	}).initialize();
}
