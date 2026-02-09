// ==UserScript==
// @name         Highlight Day in Calendar
// @namespace    https://github.com/Rob0tter/UserScripts-Synology-Calendar
// @version      1.0.0
// @date         2026-02-09
// @description  Highlight the current and the selected day (whole cell)
// @author       Dirk Schwarzmann
// @match        http*://*/*
// @updateURL    https://raw.githubusercontent.com/Rob0tter/UserScripts-Synology-Calendar/refs/heads/main/highlight-day.user.js
// @downloadURL  https://raw.githubusercontent.com/Rob0tter/UserScripts-Synology-Calendar/refs/heads/main/highlight-day.user.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
	'use strict';

    // ============================================
    // Code to configure user´s URL match
    // ============================================

    // Load Configuration from TamperMonkey Storage
    let targetUrl = GM_getValue('targetUrl', '');

    // At first start, query user´s matching URL
    if (!targetUrl) {
        targetUrl = prompt('Please enter your URL that the UserScript shall match)');
        if (targetUrl) {
            GM_setValue('targetUrl', targetUrl);
            alert('Settings saved! Script now matches: ' + targetUrl);
        } else {
            alert('No match URL entered, script will not execute.');
            return;
        }
    }

    // Menu item for altering match URL
    GM_registerMenuCommand('Change URL', function() {
        const newUrl = prompt('New URL:', targetUrl);
        if (newUrl) {
            GM_setValue('targetUrl', newUrl);
            targetUrl = newUrl;
            alert('URL changed to: ' + newUrl + '\nPlease reload the page.');
        }
    });

    // Check if we are matching the correct URL
    if (!window.location.hostname.includes(targetUrl)) {
        return; // Script stops because of non-matching URL
    }

    // ======================================================
    // Actual functional code of the user script starts here
    // ======================================================

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
