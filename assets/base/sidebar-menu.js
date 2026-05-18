import { initBase } from "./sidebar";
import { SidebarMenuApp } from "sidebar-menu-compostrap";
import PerfectScrollbar from "perfect-scrollbar";
import Nanobar from "nanobar";

import "@fortawesome/fontawesome-free/css/all.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "sidebar-menu-compostrap/sidebar-menu.css";

export function initSidebarMenu() {
	initBase();
	SidebarMenuApp.init();
	new Nanobar().go(100);
	const scrollbar = document.querySelector(".scrollbar");
	if (scrollbar) {
		new PerfectScrollbar(scrollbar, {
			wheelSpeed: 0.3
		});
	}
}
