import { initSkeleton } from "./sidebar-skeleton";
import { SidebarMenuApp } from "sidebar-menu-compostrap";
import PerfectScrollbar from "perfect-scrollbar";
import Nanobar from "nanobar";
import "sidebar-menu-compostrap/sidebar-menu.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

/* Initialize components after DOM is loaded */
function initMenu() {
	// sidebar-skeleton is handled via import side-effect or explicit call
    // We use a global flag to prevent double init
    if (!window.skeletonInitialized) {
        initSkeleton();
        window.skeletonInitialized = true;
    }
    
	new Nanobar().go(100);
	new PerfectScrollbar('.scrollbar', {
		wheelSpeed: 0.3
	});
	SidebarMenuApp.init();
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initMenu);
} else {
	initMenu();
}
