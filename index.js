import './scss/main.scss'

import bootstrap from "bootstrap";
import 'sidebar-skeleton-compostrap';
import 'sidebar-menu-compostrap';
import Nanobar from 'nanobar';
import PerfectScrollbar from 'perfect-scrollbar';

/* scripts */
document.addEventListener('DOMContentLoaded', () => {
	new Nanobar().go(100);
	new PerfectScrollbar('.scrollbar', {
		wheelSpeed: 0.3
	});
});
