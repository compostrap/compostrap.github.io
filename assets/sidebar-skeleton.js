import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarSkeleton } from "sidebar-skeleton-compostrap";
import "sidebar-skeleton-compostrap/sidebar.css";

/* Exported init function for use in other modules */
export function initSkeleton() {
	SidebarSkeleton.init();
}

/* Auto-initialize only if this is the entry point and not imported by another module that handles init */
if (import.meta.url === window.location.href || !window.skeletonInitialized) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            if (!window.skeletonInitialized) {
                initSkeleton();
                window.skeletonInitialized = true;
            }
        });
    } else {
        if (!window.skeletonInitialized) {
            initSkeleton();
            window.skeletonInitialized = true;
        }
    }
}
