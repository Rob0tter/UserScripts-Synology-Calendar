// ==UserScript==
// @name         Highlight Day in Calendar
// @namespace    https://github.com/Rob0tter/UserScripts-Synology-Calendar
// @version      1.0
// @date         2026-01-30
// @description  Highlight the current and the selected day (whole cell)
// @author       Dirk Schwarzmann
// @match        add-your-calendar-url-here
// @grant        GM_addStyle
// ==/UserScript==

(function() {
	'use strict';

	GM_addStyle(`
		/* Current Day: */
		div:has(>.flex>.weight-prominent>.text-fg-on-fill-theme-thick) {
			background-color: rgba(18, 105, 219, 0.5) !important;
		}

		/* Selected Day: */
		.event-focus-animation {
			background-color: rgba(18, 105, 219, 0.1) !important;
			border-color: rgba(255, 0, 0, 1.0) !important;
			border-width: 2px !important;
		}
	`);
})();