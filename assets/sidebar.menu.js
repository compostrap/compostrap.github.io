import "./sidebar.skeleton";
import PerfectScrollbar from "perfect-scrollbar";
import Nanobar from "nanobar"
import "sidebar-menu-compostrap";

import "./sidebar.menu.scss";

/* Initialize components after DOM is loaded */
document.addEventListener("DOMContentLoaded", () => {
	new Nanobar().go(100);
	new PerfectScrollbar('.scrollbar', {
		wheelSpeed: 0.3
	});
});
