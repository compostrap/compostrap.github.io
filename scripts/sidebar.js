/* js */
import './skeleton'
import 'sidebar-menu-compostrap';
import Nanobar from 'nanobar';
import PerfectScrollbar from 'perfect-scrollbar';

/* sass */
import '../scss/sidebar.scss'

/* scripts */
document.addEventListener('DOMContentLoaded', () => {
	new Nanobar().go(100);
	new PerfectScrollbar('.scrollbar', {
		wheelSpeed: 0.3
	});
});
