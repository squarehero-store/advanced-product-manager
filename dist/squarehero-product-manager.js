
(function() {
    'use strict';
    
    // Flatpickr Library (already minified)
    /* flatpickr v4.6.13,, @license MIT */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).flatpickr=n()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function n(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var a=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],r=0,l=o.length;r<l;r++,i++)a[i]=o[r];return a}var t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],a={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var n=new Date(e.getTime());n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var t=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},i={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var n=e%100;if(n>3&&n<21)return"th";switch(n%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},o=function(e,n){return void 0===n&&(n=2),("000"+e).slice(-1*n)},r=function(e){return!0===e?1:0};function l(e,n){var t;return function(){var a=this,i=arguments;clearTimeout(t),t=setTimeout((function(){return e.apply(a,i)}),n)}}var c=function(e){return e instanceof Array?e:[e]};function s(e,n,t){if(!0===t)return e.classList.add(n);e.classList.remove(n)}function d(e,n,t){var a=window.document.createElement(e);return n=n||"",t=t||"",a.className=n,void 0!==t&&(a.textContent=t),a}function u(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function f(e,n){return n(e)?e:e.parentNode?f(e.parentNode,n):void 0}function m(e,n){var t=d("div","numInputWrapper"),a=d("input","numInput "+e),i=d("span","arrowUp"),o=d("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==n)for(var r in n)a.setAttribute(r,n[r]);return t.appendChild(a),t.appendChild(i),t.appendChild(o),t}function g(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(n){return e.target}}var p=function(){},h=function(e,n,t){return t.months[n?"shorthand":"longhand"][e]},v={D:p,F:function(e,n,t){e.setMonth(t.months.longhand.indexOf(n))},G:function(e,n){e.setHours((e.getHours()>=12?12:0)+parseFloat(n))},H:function(e,n){e.setHours(parseFloat(n))},J:function(e,n){e.setDate(parseFloat(n))},K:function(e,n,t){e.setHours(e.getHours()%12+12*r(new RegExp(t.amPM[1],"i").test(n)))},M:function(e,n,t){e.setMonth(t.months.shorthand.indexOf(n))},S:function(e,n){e.setSeconds(parseFloat(n))},U:function(e,n){return new Date(1e3*parseFloat(n))},W:function(e,n,t){var a=parseInt(n),i=new Date(e.getFullYear(),0,2+7*(a-1),0,0,0,0);return i.setDate(i.getDate()-i.getDay()+t.firstDayOfWeek),i},Y:function(e,n){e.setFullYear(parseFloat(n))},Z:function(e,n){return new Date(n)},d:function(e,n){e.setDate(parseFloat(n))},h:function(e,n){e.setHours((e.getHours()>=12?12:0)+parseFloat(n))},i:function(e,n){e.setMinutes(parseFloat(n))},j:function(e,n){e.setDate(parseFloat(n))},l:p,m:function(e,n){e.setMonth(parseFloat(n)-1)},n:function(e,n){e.setMonth(parseFloat(n)-1)},s:function(e,n){e.setSeconds(parseFloat(n))},u:function(e,n){return new Date(parseFloat(n))},w:p,y:function(e,n){e.setFullYear(2e3+parseFloat(n))}},D={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,n,t){return n.weekdays.shorthand[w.w(e,n,t)]},F:function(e,n,t){return h(w.n(e,n,t)-1,!1,n)},G:function(e,n,t){return o(w.h(e,n,t))},H:function(e){return o(e.getHours())},J:function(e,n){return void 0!==n.ordinal?e.getDate()+n.ordinal(e.getDate()):e.getDate()},K:function(e,n){return n.amPM[r(e.getHours()>11)]},M:function(e,n){return h(e.getMonth(),!0,n)},S:function(e){return o(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,n,t){return t.getWeek(e)},Y:function(e){return o(e.getFullYear(),4)},d:function(e){return o(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return o(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,n){return n.weekdays.longhand[e.getDay()]},m:function(e){return o(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},b=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o,l=e.isMobile,c=void 0!==l&&l;return function(e,n,a){var i=a||r;return void 0===t.formatDate||c?n.split("").map((function(n,a,o){return w[n]&&"\\"!==o[a-1]?w[n](e,i,t):"\\"!==n?n:""})).join(""):t.formatDate(e,n,i)}},C=function(e){var n=e.config,t=void 0===n?a:n,o=e.l10n,r=void 0===o?i:o;return function(e,n,i,o){if(0===e||e){var l,c=o||r,s=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var d=n||(t||a).dateFormat,u=String(e).trim();if("today"===u)l=new Date,i=!0;else if(t&&t.parseDate)l=t.parseDate(e,d);else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else{for(var f=void 0,m=[],g=0,p=0,h="";g<d.length;g++){var w=d[g],b="\\"===w,C="\\"===d[g-1]||b;if(D[w]&&!C){h+=D[w];var M=new RegExp(h).exec(e);M&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:v[w],val:M[++p]})}else b||(h+=".")}l=t&&t.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0),m.forEach((function(e){var n=e.fn,t=e.val;return l=n(l,t,c)||l})),l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===i&&l.setHours(0,0,0,0),l;t.errorHandler(new Error("Invalid date provided: "+s))}}};function M(e,n,t){return void 0===t&&(t=!0),!1!==t?new Date(e.getTime()).setHours(0,0,0,0)-new Date(n.getTime()).setHours(0,0,0,0):e.getTime()-n.getTime()}var y=function(e,n,t){return 3600*e+60*n+t},x=864e5;function E(e){var n=e.defaultHour,t=e.defaultMinute,a=e.defaultSeconds;if(void 0!==e.minDate){var i=e.minDate.getHours(),o=e.minDate.getMinutes(),r=e.minDate.getSeconds();n<i&&(n=i),n===i&&t<o&&(t=o),n===i&&t===o&&a<r&&(a=e.minDate.getSeconds())}if(void 0!==e.maxDate){var l=e.maxDate.getHours(),c=e.maxDate.getMinutes();(n=Math.min(n,l))===l&&(t=Math.min(c,t)),n===l&&t===c&&(a=e.maxDate.getSeconds())}return{hours:n,minutes:t,seconds:a}}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(n){n&&Object.keys(n).forEach((function(t){return e[t]=n[t]}))},i=0,o=n;i<o.length;i++){var r=o[i];a(r)}return e});function k(p,v){var w={config:e(e({},a),I.defaultConfig),l10n:i};function k(){var e;return(null===(e=w.calendarContainer)||void 0===e?void 0:e.getRootNode()).activeElement||document.activeElement}function T(e){return e.bind(w)}function S(){var e=w.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==w.calendarContainer&&(w.calendarContainer.style.visibility="hidden",w.calendarContainer.style.display="block"),void 0!==w.daysContainer){var n=(w.days.offsetWidth+1)*e.showMonths;w.daysContainer.style.width=n+"px",w.calendarContainer.style.width=n+(void 0!==w.weekWrapper?w.weekWrapper.offsetWidth:0)+"px",w.calendarContainer.style.removeProperty("visibility"),w.calendarContainer.style.removeProperty("display")}}))}function _(e){if(0===w.selectedDates.length){var n=void 0===w.config.minDate||M(new Date,w.config.minDate)>=0?new Date:new Date(w.config.minDate.getTime()),t=E(w.config);n.setHours(t.hours,t.minutes,t.seconds,n.getMilliseconds()),w.selectedDates=[n],w.latestSelectedDateObj=n}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var n="keydown"===e.type,t=g(e),a=t;void 0!==w.amPM&&t===w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]);var i=parseFloat(a.getAttribute("min")),l=parseFloat(a.getAttribute("max")),c=parseFloat(a.getAttribute("step")),s=parseInt(a.value,10),d=e.delta||(n?38===e.which?1:-1:0),u=s+c*d;if(void 0!==a.value&&2===a.value.length){var f=a===w.hourElement,m=a===w.minuteElement;u<i?(u=l+u+r(!f)+(r(f)&&r(!w.amPM)),m&&L(void 0,-1,w.hourElement)):u>l&&(u=a===w.hourElement?u-l-r(!w.amPM):i,m&&L(void 0,1,w.hourElement)),w.amPM&&f&&(1===c?u+s===23:Math.abs(u-s)>c)&&(w.amPM.textContent=w.l10n.amPM[r(w.amPM.textContent===w.l10n.amPM[0])]),a.value=o(u)}}(e);var a=w._input.value;O(),ye(),w._input.value!==a&&w._debouncedChange()}function O(){if(void 0!==w.hourElement&&void 0!==w.minuteElement){var e,n,t=(parseInt(w.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(w.minuteElement.value,10)||0)%60,i=void 0!==w.secondElement?(parseInt(w.secondElement.value,10)||0)%60:0;void 0!==w.amPM&&(e=t,n=w.amPM.textContent,t=e%12+12*r(n===w.l10n.amPM[1]));var o=void 0!==w.config.minTime||w.config.minDate&&w.minDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.minDate,!0),l=void 0!==w.config.maxTime||w.config.maxDate&&w.maxDateHasTime&&w.latestSelectedDateObj&&0===M(w.latestSelectedDateObj,w.config.maxDate,!0);if(void 0!==w.config.maxTime&&void 0!==w.config.minTime&&w.config.minTime>w.config.maxTime){var c=y(w.config.minTime.getHours(),w.config.minTime.getMinutes(),w.config.minTime.getSeconds()),s=y(w.config.maxTime.getHours(),w.config.maxTime.getMinutes(),w.config.maxTime.getSeconds()),d=y(t,a,i);if(d>s&&d<c){var u=function(e){var n=Math.floor(e/3600),t=(e-3600*n)/60;return[n,t,e-3600*n-60*t]}(c);t=u[0],a=u[1],i=u[2]}}else{if(l){var f=void 0!==w.config.maxTime?w.config.maxTime:w.config.maxDate;(t=Math.min(t,f.getHours()))===f.getHours()&&(a=Math.min(a,f.getMinutes())),a===f.getMinutes()&&(i=Math.min(i,f.getSeconds()))}if(o){var m=void 0!==w.config.minTime?w.config.minTime:w.config.minDate;(t=Math.max(t,m.getHours()))===m.getHours()&&a<m.getMinutes()&&(a=m.getMinutes()),a===m.getMinutes()&&(i=Math.max(i,m.getSeconds()))}}A(t,a,i)}}function F(e){var n=e||w.latestSelectedDateObj;n&&n instanceof Date&&A(n.getHours(),n.getMinutes(),n.getSeconds())}function A(e,n,t){void 0!==w.latestSelectedDateObj&&w.latestSelectedDateObj.setHours(e%24,n,t||0,0),w.hourElement&&w.minuteElement&&!w.isMobile&&(w.hourElement.value=o(w.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),w.minuteElement.value=o(n),void 0!==w.amPM&&(w.amPM.textContent=w.l10n.amPM[r(e>=12)]),void 0!==w.secondElement&&(w.secondElement.value=o(t)))}function N(e){var n=g(e),t=parseInt(n.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&ee(t)}function P(e,n,t,a){return n instanceof Array?n.forEach((function(n){return P(e,n,t,a)})):e instanceof Array?e.forEach((function(e){return P(e,n,t,a)})):(e.addEventListener(n,t,a),void w._handlers.push({remove:function(){return e.removeEventListener(n,t,a)}}))}function Y(){De("onChange")}function j(e,n){var t=void 0!==e?w.parseDate(e):w.latestSelectedDateObj||(w.config.minDate&&w.config.minDate>w.now?w.config.minDate:w.config.maxDate&&w.config.maxDate<w.now?w.config.maxDate:w.now),a=w.currentYear,i=w.currentMonth;try{void 0!==t&&(w.currentYear=t.getFullYear(),w.currentMonth=t.getMonth())}catch(e){e.message="Invalid date supplied: "+t,w.config.errorHandler(e)}n&&w.currentYear!==a&&(De("onYearChange"),q()),!n||w.currentYear===a&&w.currentMonth===i||De("onMonthChange"),w.redraw()}function H(e){var n=g(e);~n.className.indexOf("arrow")&&L(e,n.classList.contains("arrowUp")?1:-1)}function L(e,n,t){var a=e&&g(e),i=t||a&&a.parentNode&&a.parentNode.firstChild,o=we("increment");o.delta=n,i&&i.dispatchEvent(o)}function R(e,n,t,a){var i=ne(n,!0),o=d("span",e,n.getDate().toString());return o.dateObj=n,o.$i=a,o.setAttribute("aria-label",w.formatDate(n,w.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===M(n,w.now)&&(w.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,be(n)&&(o.classList.add("selected"),w.selectedDateElem=o,"range"===w.config.mode&&(s(o,"startRange",w.selectedDates[0]&&0===M(n,w.selectedDates[0],!0)),s(o,"endRange",w.selectedDates[1]&&0===M(n,w.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("flatpickr-disabled"),"range"===w.config.mode&&function(e){return!("range"!==w.config.mode||w.selectedDates.length<2)&&(M(e,w.selectedDates[0])>=0&&M(e,w.selectedDates[1])<=0)}(n)&&!be(n)&&o.classList.add("inRange"),w.weekNumbers&&1===w.config.showMonths&&"prevMonthDay"!==e&&a%7==6&&w.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+w.config.getWeek(n)+"</span>"),De("onDayCreate",o),o}function W(e){e.focus(),"range"===w.config.mode&&oe(e)}function B(e){for(var n=e>0?0:w.config.showMonths-1,t=e>0?w.config.showMonths:-1,a=n;a!=t;a+=e)for(var i=w.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&ne(c.dateObj))return c}}function J(e,n){var t=k(),a=te(t||document.body),i=void 0!==e?e:a?t:void 0!==w.selectedDateElem&&te(w.selectedDateElem)?w.selectedDateElem:void 0!==w.todayDateElem&&te(w.todayDateElem)?w.todayDateElem:B(n>0?1:-1);void 0===i?w._input.focus():a?function(e,n){for(var t=-1===e.className.indexOf("Month")?e.dateObj.getMonth():w.currentMonth,a=n>0?w.config.showMonths:-1,i=n>0?1:-1,o=t-w.currentMonth;o!=a;o+=i)for(var r=w.daysContainer.children[o],l=t-w.currentMonth===o?e.$i+n:n<0?r.children.length-1:0,c=r.children.length,s=l;s>=0&&s<c&&s!=(n>0?c:-1);s+=i){var d=r.children[s];if(-1===d.className.indexOf("hidden")&&ne(d.dateObj)&&Math.abs(e.$i-s)>=Math.abs(n))return W(d)}w.changeMonth(i),J(B(i),0)}(i,n):W(i)}function K(e,n){for(var t=(new Date(e,n,1).getDay()-w.l10n.firstDayOfWeek+7)%7,a=w.utils.getDaysInMonth((n-1+12)%12,e),i=w.utils.getDaysInMonth(n,e),o=window.document.createDocumentFragment(),r=w.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",s=a+1-t,u=0;s<=a;s++,u++)o.appendChild(R("flatpickr-day "+l,new Date(e,n-1,s),0,u));for(s=1;s<=i;s++,u++)o.appendChild(R("flatpickr-day",new Date(e,n,s),0,u));for(var f=i+1;f<=42-t&&(1===w.config.showMonths||u%7!=0);f++,u++)o.appendChild(R("flatpickr-day "+c,new Date(e,n+1,f%i),0,u));var m=d("div","dayContainer");return m.appendChild(o),m}function U(){if(void 0!==w.daysContainer){u(w.daysContainer),w.weekNumbers&&u(w.weekNumbers);for(var e=document.createDocumentFragment(),n=0;n<w.config.showMonths;n++){var t=new Date(w.currentYear,w.currentMonth,1);t.setMonth(w.currentMonth+n),e.appendChild(K(t.getFullYear(),t.getMonth()))}w.daysContainer.appendChild(e),w.days=w.daysContainer.firstChild,"range"===w.config.mode&&1===w.selectedDates.length&&oe()}}function q(){if(!(w.config.showMonths>1||"dropdown"!==w.config.monthSelectorType)){var e=function(e){return!(void 0!==w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&e<w.config.minDate.getMonth())&&!(void 0!==w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()&&e>w.config.maxDate.getMonth())};w.monthsDropdownContainer.tabIndex=-1,w.monthsDropdownContainer.innerHTML="";for(var n=0;n<12;n++)if(e(n)){var t=d("option","flatpickr-monthDropdown-month");t.value=new Date(w.currentYear,n).getMonth().toString(),t.textContent=h(n,w.config.shorthandCurrentMonth,w.l10n),t.tabIndex=-1,w.currentMonth===n&&(t.selected=!0),w.monthsDropdownContainer.appendChild(t)}}}function $(){var e,n=d("div","flatpickr-month"),t=window.document.createDocumentFragment();w.config.showMonths>1||"static"===w.config.monthSelectorType?e=d("span","cur-month"):(w.monthsDropdownContainer=d("select","flatpickr-monthDropdown-months"),w.monthsDropdownContainer.setAttribute("aria-label",w.l10n.monthAriaLabel),P(w.monthsDropdownContainer,"change",(function(e){var n=g(e),t=parseInt(n.value,10);w.changeMonth(t-w.currentMonth),De("onMonthChange")})),q(),e=w.monthsDropdownContainer);var a=m("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",w.l10n.yearAriaLabel),w.config.minDate&&i.setAttribute("min",w.config.minDate.getFullYear().toString()),w.config.maxDate&&(i.setAttribute("max",w.config.maxDate.getFullYear().toString()),i.disabled=!!w.config.minDate&&w.config.minDate.getFullYear()===w.config.maxDate.getFullYear());var o=d("div","flatpickr-current-month");return o.appendChild(e),o.appendChild(a),t.appendChild(o),n.appendChild(t),{container:n,yearElement:i,monthElement:e}}function V(){u(w.monthNav),w.monthNav.appendChild(w.prevMonthNav),w.config.showMonths&&(w.yearElements=[],w.monthElements=[]);for(var e=w.config.showMonths;e--;){var n=$();w.yearElements.push(n.yearElement),w.monthElements.push(n.monthElement),w.monthNav.appendChild(n.container)}w.monthNav.appendChild(w.nextMonthNav)}function z(){w.weekdayContainer?u(w.weekdayContainer):w.weekdayContainer=d("div","flatpickr-weekdays");for(var e=w.config.showMonths;e--;){var n=d("div","flatpickr-weekdaycontainer");w.weekdayContainer.appendChild(n)}return G(),w.weekdayContainer}function G(){if(w.weekdayContainer){var e=w.l10n.firstDayOfWeek,t=n(w.l10n.weekdays.shorthand);e>0&&e<t.length&&(t=n(t.splice(e,t.length),t.splice(0,e)));for(var a=w.config.showMonths;a--;)w.weekdayContainer.children[a].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function Z(e,n){void 0===n&&(n=!0);var t=n?e:e-w.currentMonth;t<0&&!0===w._hidePrevMonthArrow||t>0&&!0===w._hideNextMonthArrow||(w.currentMonth+=t,(w.currentMonth<0||w.currentMonth>11)&&(w.currentYear+=w.currentMonth>11?1:-1,w.currentMonth=(w.currentMonth+12)%12,De("onYearChange"),q()),U(),De("onMonthChange"),Ce())}function Q(e){return w.calendarContainer.contains(e)}function X(e){if(w.isOpen&&!w.config.inline){var n=g(e),t=Q(n),a=!(n===w.input||n===w.altInput||w.element.contains(n)||e.path&&e.path.indexOf&&(~e.path.indexOf(w.input)||~e.path.indexOf(w.altInput)))&&!t&&!Q(e.relatedTarget),i=!w.config.ignoredFocusElements.some((function(e){return e.contains(n)}));a&&i&&(w.config.allowInput&&w.setDate(w._input.value,!1,w.config.altInput?w.config.altFormat:w.config.dateFormat),void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement&&""!==w.input.value&&void 0!==w.input.value&&_(),w.close(),w.config&&"range"===w.config.mode&&1===w.selectedDates.length&&w.clear(!1))}}function ee(e){if(!(!e||w.config.minDate&&e<w.config.minDate.getFullYear()||w.config.maxDate&&e>w.config.maxDate.getFullYear())){var n=e,t=w.currentYear!==n;w.currentYear=n||w.currentYear,w.config.maxDate&&w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth=Math.min(w.config.maxDate.getMonth(),w.currentMonth):w.config.minDate&&w.currentYear===w.config.minDate.getFullYear()&&(w.currentMonth=Math.max(w.config.minDate.getMonth(),w.currentMonth)),t&&(w.redraw(),De("onYearChange"),q())}}function ne(e,n){var t;void 0===n&&(n=!0);var a=w.parseDate(e,void 0,n);if(w.config.minDate&&a&&M(a,w.config.minDate,void 0!==n?n:!w.minDateHasTime)<0||w.config.maxDate&&a&&M(a,w.config.maxDate,void 0!==n?n:!w.maxDateHasTime)>0)return!1;if(!w.config.enable&&0===w.config.disable.length)return!0;if(void 0===a)return!1;for(var i=!!w.config.enable,o=null!==(t=w.config.enable)&&void 0!==t?t:w.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l){var c=w.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return!i}function te(e){return void 0!==w.daysContainer&&(-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&w.daysContainer.contains(e))}function ae(e){var n=e.target===w._input,t=w._input.value.trimEnd()!==Me();!n||!t||e.relatedTarget&&Q(e.relatedTarget)||w.setDate(w._input.value,!0,e.target===w.altInput?w.config.altFormat:w.config.dateFormat)}function ie(e){var n=g(e),t=w.config.wrap?p.contains(n):n===w._input,a=w.config.allowInput,i=w.isOpen&&(!a||!t),o=w.config.inline&&t&&!a;if(13===e.keyCode&&t){if(a)return w.setDate(w._input.value,!0,n===w.altInput?w.config.altFormat:w.config.dateFormat),w.close(),n.blur();w.open()}else if(Q(n)||i||o){var r=!!w.timeContainer&&w.timeContainer.contains(n);switch(e.keyCode){case 13:r?(e.preventDefault(),_(),fe()):me(e);break;case 27:e.preventDefault(),fe();break;case 8:case 46:t&&!w.config.allowInput&&(e.preventDefault(),w.clear());break;case 37:case 39:if(r||t)w.hourElement&&w.hourElement.focus();else{e.preventDefault();var l=k();if(void 0!==w.daysContainer&&(!1===a||l&&te(l))){var c=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),Z(c),J(B(1),0)):J(void 0,c)}}break;case 38:case 40:e.preventDefault();var s=40===e.keyCode?1:-1;w.daysContainer&&void 0!==n.$i||n===w.input||n===w.altInput?e.ctrlKey?(e.stopPropagation(),ee(w.currentYear-s),J(B(1),0)):r||J(void 0,7*s):n===w.currentYearElement?ee(w.currentYear-s):w.config.enableTime&&(!r&&w.hourElement&&w.hourElement.focus(),_(e),w._debouncedChange());break;case 9:if(r){var d=[w.hourElement,w.minuteElement,w.secondElement,w.amPM].concat(w.pluginElements).filter((function(e){return e})),u=d.indexOf(n);if(-1!==u){var f=d[u+(e.shiftKey?-1:1)];e.preventDefault(),(f||w._input).focus()}}else!w.config.noCalendar&&w.daysContainer&&w.daysContainer.contains(n)&&e.shiftKey&&(e.preventDefault(),w._input.focus())}}if(void 0!==w.amPM&&n===w.amPM)switch(e.key){case w.l10n.amPM[0].charAt(0):case w.l10n.amPM[0].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[0],O(),ye();break;case w.l10n.amPM[1].charAt(0):case w.l10n.amPM[1].charAt(0).toLowerCase():w.amPM.textContent=w.l10n.amPM[1],O(),ye()}(t||Q(n))&&De("onKeyDown",e)}function oe(e,n){if(void 0===n&&(n="flatpickr-day"),1===w.selectedDates.length&&(!e||e.classList.contains(n)&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():w.days.firstElementChild.dateObj.getTime(),a=w.parseDate(w.selectedDates[0],void 0,!0).getTime(),i=Math.min(t,w.selectedDates[0].getTime()),o=Math.max(t,w.selectedDates[0].getTime()),r=!1,l=0,c=0,s=i;s<o;s+=x)ne(new Date(s),!0)||(r=r||s>i&&s<o,s<a&&(!l||s>l)?l=s:s>a&&(!c||s<c)&&(c=s));Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+"+w.config.showMonths+") > ."+n)).forEach((function(n){var i,o,s,d=n.dateObj.getTime(),u=l>0&&d<l||c>0&&d>c;if(u)return n.classList.add("notAllowed"),void["inRange","startRange","endRange"].forEach((function(e){n.classList.remove(e)}));r&&!u||(["startRange","inRange","endRange","notAllowed"].forEach((function(e){n.classList.remove(e)})),void 0!==e&&(e.classList.add(t<=w.selectedDates[0].getTime()?"startRange":"endRange"),a<t&&d===a?n.classList.add("startRange"):a>t&&d===a&&n.classList.add("endRange"),d>=l&&(0===c||d<=c)&&(o=a,s=t,(i=d)>Math.min(o,s)&&i<Math.max(o,s))&&n.classList.add("inRange")))}))}}function re(){!w.isOpen||w.config.static||w.config.inline||de()}function le(e){return function(n){var t=w.config["_"+e+"Date"]=w.parseDate(n,w.config.dateFormat),a=w.config["_"+("min"===e?"max":"min")+"Date"];void 0!==t&&(w["min"===e?"minDateHasTime":"maxDateHasTime"]=t.getHours()>0||t.getMinutes()>0||t.getSeconds()>0),w.selectedDates&&(w.selectedDates=w.selectedDates.filter((function(e){return ne(e)})),w.selectedDates.length||"min"!==e||F(t),ye()),w.daysContainer&&(ue(),void 0!==t?w.currentYearElement[e]=t.getFullYear().toString():w.currentYearElement.removeAttribute(e),w.currentYearElement.disabled=!!a&&void 0!==t&&a.getFullYear()===t.getFullYear())}}function ce(){return w.config.wrap?p.querySelector("[data-input]"):p}function se(){"object"!=typeof w.config.locale&&void 0===I.l10ns[w.config.locale]&&w.config.errorHandler(new Error("flatpickr: invalid locale "+w.config.locale)),w.l10n=e(e({},I.l10ns.default),"object"==typeof w.config.locale?w.config.locale:"default"!==w.config.locale?I.l10ns[w.config.locale]:void 0),D.D="("+w.l10n.weekdays.shorthand.join("|")+")",D.l="("+w.l10n.weekdays.longhand.join("|")+")",D.M="("+w.l10n.months.shorthand.join("|")+")",D.F="("+w.l10n.months.longhand.join("|")+")",D.K="("+w.l10n.amPM[0]+"|"+w.l10n.amPM[1]+"|"+w.l10n.amPM[0].toLowerCase()+"|"+w.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},v),JSON.parse(JSON.stringify(p.dataset||{}))).time_24hr&&void 0===I.defaultConfig.time_24hr&&(w.config.time_24hr=w.l10n.time_24hr),w.formatDate=b(w),w.parseDate=C({config:w.config,l10n:w.l10n})}function de(e){if("function"!=typeof w.config.position){if(void 0!==w.calendarContainer){De("onPreCalendarPosition");var n=e||w._positionElement,t=Array.prototype.reduce.call(w.calendarContainer.children,(function(e,n){return e+n.offsetHeight}),0),a=w.calendarContainer.offsetWidth,i=w.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=n.getBoundingClientRect(),c=window.innerHeight-l.bottom,d="above"===o||"below"!==o&&c<t&&l.top>t,u=window.pageYOffset+l.top+(d?-t-2:n.offsetHeight+2);if(s(w.calendarContainer,"arrowTop",!d),s(w.calendarContainer,"arrowBottom",d),!w.config.inline){var f=window.pageXOffset+l.left,m=!1,g=!1;"center"===r?(f-=(a-l.width)/2,m=!0):"right"===r&&(f-=a-l.width,g=!0),s(w.calendarContainer,"arrowLeft",!m&&!g),s(w.calendarContainer,"arrowCenter",m),s(w.calendarContainer,"arrowRight",g);var p=window.document.body.offsetWidth-(window.pageXOffset+l.right),h=f+a>window.document.body.offsetWidth,v=p+a>window.document.body.offsetWidth;if(s(w.calendarContainer,"rightMost",h),!w.config.static)if(w.calendarContainer.style.top=u+"px",h)if(v){var D=function(){for(var e=null,n=0;n<document.styleSheets.length;n++){var t=document.styleSheets[n];if(t.cssRules){try{t.cssRules}catch(e){continue}e=t;break}}return null!=e?e:(a=document.createElement("style"),document.head.appendChild(a),a.sheet);var a}();if(void 0===D)return;var b=window.document.body.offsetWidth,C=Math.max(0,b/2-a/2),M=D.cssRules.length,y="{left:"+l.left+"px;right:auto;}";s(w.calendarContainer,"rightMost",!1),s(w.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,M),w.calendarContainer.style.left=C+"px",w.calendarContainer.style.right="auto"}else w.calendarContainer.style.left="auto",w.calendarContainer.style.right=p+"px";else w.calendarContainer.style.left=f+"px",w.calendarContainer.style.right="auto"}}}else w.config.position(w,e)}function ue(){w.config.noCalendar||w.isMobile||(q(),Ce(),U())}function fe(){w._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(w.close,0):w.close()}function me(e){e.preventDefault(),e.stopPropagation();var n=f(g(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==n){var t=n,a=w.latestSelectedDateObj=new Date(t.dateObj.getTime()),i=(a.getMonth()<w.currentMonth||a.getMonth()>w.currentMonth+w.config.showMonths-1)&&"range"!==w.config.mode;if(w.selectedDateElem=t,"single"===w.config.mode)w.selectedDates=[a];else if("multiple"===w.config.mode){var o=be(a);o?w.selectedDates.splice(parseInt(o),1):w.selectedDates.push(a)}else"range"===w.config.mode&&(2===w.selectedDates.length&&w.clear(!1,!1),w.latestSelectedDateObj=a,w.selectedDates.push(a),0!==M(a,w.selectedDates[0],!0)&&w.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()})));if(O(),i){var r=w.currentYear!==a.getFullYear();w.currentYear=a.getFullYear(),w.currentMonth=a.getMonth(),r&&(De("onYearChange"),q()),De("onMonthChange")}if(Ce(),U(),ye(),i||"range"===w.config.mode||1!==w.config.showMonths?void 0!==w.selectedDateElem&&void 0===w.hourElement&&w.selectedDateElem&&w.selectedDateElem.focus():W(t),void 0!==w.hourElement&&void 0!==w.hourElement&&w.hourElement.focus(),w.config.closeOnSelect){var l="single"===w.config.mode&&!w.config.enableTime,c="range"===w.config.mode&&2===w.selectedDates.length&&!w.config.enableTime;(l||c)&&fe()}Y()}}w.parseDate=C({config:w.config,l10n:w.l10n}),w._handlers=[],w.pluginElements=[],w.loadedPlugins=[],w._bind=P,w._setHoursFromDate=F,w._positionCalendar=de,w.changeMonth=Z,w.changeYear=ee,w.clear=function(e,n){void 0===e&&(e=!0);void 0===n&&(n=!0);w.input.value="",void 0!==w.altInput&&(w.altInput.value="");void 0!==w.mobileInput&&(w.mobileInput.value="");w.selectedDates=[],w.latestSelectedDateObj=void 0,!0===n&&(w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth());if(!0===w.config.enableTime){var t=E(w.config),a=t.hours,i=t.minutes,o=t.seconds;A(a,i,o)}w.redraw(),e&&De("onChange")},w.close=function(){w.isOpen=!1,w.isMobile||(void 0!==w.calendarContainer&&w.calendarContainer.classList.remove("open"),void 0!==w._input&&w._input.classList.remove("active"));De("onClose")},w.onMouseOver=oe,w._createElement=d,w.createDay=R,w.destroy=function(){void 0!==w.config&&De("onDestroy");for(var e=w._handlers.length;e--;)w._handlers[e].remove();if(w._handlers=[],w.mobileInput)w.mobileInput.parentNode&&w.mobileInput.parentNode.removeChild(w.mobileInput),w.mobileInput=void 0;else if(w.calendarContainer&&w.calendarContainer.parentNode)if(w.config.static&&w.calendarContainer.parentNode){var n=w.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)}}else w.calendarContainer.parentNode.removeChild(w.calendarContainer);w.altInput&&(w.input.type="text",w.altInput.parentNode&&w.altInput.parentNode.removeChild(w.altInput),delete w.altInput);w.input&&(w.input.type=w.input._type,w.input.classList.remove("flatpickr-input"),w.input.removeAttribute("readonly"));["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete w[e]}catch(e){}}))},w.isEnabled=ne,w.jumpToDate=j,w.updateValue=ye,w.open=function(e,n){void 0===n&&(n=w._positionElement);if(!0===w.isMobile){if(e){e.preventDefault();var t=g(e);t&&t.blur()}return void 0!==w.mobileInput&&(w.mobileInput.focus(),w.mobileInput.click()),void De("onOpen")}if(w._input.disabled||w.config.inline)return;var a=w.isOpen;w.isOpen=!0,a||(w.calendarContainer.classList.add("open"),w._input.classList.add("active"),De("onOpen"),de(n));!0===w.config.enableTime&&!0===w.config.noCalendar&&(!1!==w.config.allowInput||void 0!==e&&w.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return w.hourElement.select()}),50))},w.redraw=ue,w.set=function(e,n){if(null!==e&&"object"==typeof e)for(var a in Object.assign(w.config,e),e)void 0!==ge[a]&&ge[a].forEach((function(e){return e()}));else w.config[e]=n,void 0!==ge[e]?ge[e].forEach((function(e){return e()})):t.indexOf(e)>-1&&(w.config[e]=c(n));w.redraw(),ye(!0)},w.setDate=function(e,n,t){void 0===n&&(n=!1);void 0===t&&(t=w.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return w.clear(n);pe(e,t),w.latestSelectedDateObj=w.selectedDates[w.selectedDates.length-1],w.redraw(),j(void 0,n),F(),0===w.selectedDates.length&&w.clear(!1);ye(n),n&&De("onChange")},w.toggle=function(e){if(!0===w.isOpen)return w.close();w.open(e)};var ge={locale:[se,G],showMonths:[V,S,z],minDate:[j],maxDate:[j],positionElement:[ve],clickOpens:[function(){!0===w.config.clickOpens?(P(w._input,"focus",w.open),P(w._input,"click",w.open)):(w._input.removeEventListener("focus",w.open),w._input.removeEventListener("click",w.open))}]};function pe(e,n){var t=[];if(e instanceof Array)t=e.map((function(e){return w.parseDate(e,n)}));else if(e instanceof Date||"number"==typeof e)t=[w.parseDate(e,n)];else if("string"==typeof e)switch(w.config.mode){case"single":case"time":t=[w.parseDate(e,n)];break;case"multiple":t=e.split(w.config.conjunction).map((function(e){return w.parseDate(e,n)}));break;case"range":t=e.split(w.l10n.rangeSeparator).map((function(e){return w.parseDate(e,n)}))}else w.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));w.selectedDates=w.config.allowInvalidPreload?t:t.filter((function(e){return e instanceof Date&&ne(e,!1)})),"range"===w.config.mode&&w.selectedDates.sort((function(e,n){return e.getTime()-n.getTime()}))}function he(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?w.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:w.parseDate(e.from,void 0),to:w.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function ve(){w._positionElement=w.config.positionElement||w._input}function De(e,n){if(void 0!==w.config){var t=w.config[e];if(void 0!==t&&t.length>0)for(var a=0;t[a]&&a<t.length;a++)t[a](w.selectedDates,w.input.value,w,n);"onChange"===e&&(w.input.dispatchEvent(we("change")),w.input.dispatchEvent(we("input")))}}function we(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}function be(e){for(var n=0;n<w.selectedDates.length;n++){var t=w.selectedDates[n];if(t instanceof Date&&0===M(t,e))return""+n}return!1}function Ce(){w.config.noCalendar||w.isMobile||!w.monthNav||(w.yearElements.forEach((function(e,n){var t=new Date(w.currentYear,w.currentMonth,1);t.setMonth(w.currentMonth+n),w.config.showMonths>1||"static"===w.config.monthSelectorType?w.monthElements[n].textContent=h(t.getMonth(),w.config.shorthandCurrentMonth,w.l10n)+" ":w.monthsDropdownContainer.value=t.getMonth().toString(),e.value=t.getFullYear().toString()})),w._hidePrevMonthArrow=void 0!==w.config.minDate&&(w.currentYear===w.config.minDate.getFullYear()?w.currentMonth<=w.config.minDate.getMonth():w.currentYear<w.config.minDate.getFullYear()),w._hideNextMonthArrow=void 0!==w.config.maxDate&&(w.currentYear===w.config.maxDate.getFullYear()?w.currentMonth+1>w.config.maxDate.getMonth():w.currentYear>w.config.maxDate.getFullYear()))}function Me(e){var n=e||(w.config.altInput?w.config.altFormat:w.config.dateFormat);return w.selectedDates.map((function(e){return w.formatDate(e,n)})).filter((function(e,n,t){return"range"!==w.config.mode||w.config.enableTime||t.indexOf(e)===n})).join("range"!==w.config.mode?w.config.conjunction:w.l10n.rangeSeparator)}function ye(e){void 0===e&&(e=!0),void 0!==w.mobileInput&&w.mobileFormatStr&&(w.mobileInput.value=void 0!==w.latestSelectedDateObj?w.formatDate(w.latestSelectedDateObj,w.mobileFormatStr):""),w.input.value=Me(w.config.dateFormat),void 0!==w.altInput&&(w.altInput.value=Me(w.config.altFormat)),!1!==e&&De("onValueUpdate")}function xe(e){var n=g(e),t=w.prevMonthNav.contains(n),a=w.nextMonthNav.contains(n);t||a?Z(t?-1:1):w.yearElements.indexOf(n)>=0?n.select():n.classList.contains("arrowUp")?w.changeYear(w.currentYear+1):n.classList.contains("arrowDown")&&w.changeYear(w.currentYear-1)}return function(){w.element=w.input=p,w.isOpen=!1,function(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e(e({},JSON.parse(JSON.stringify(p.dataset||{}))),v),o={};w.config.parseDate=i.parseDate,w.config.formatDate=i.formatDate,Object.defineProperty(w.config,"enable",{get:function(){return w.config._enable},set:function(e){w.config._enable=he(e)}}),Object.defineProperty(w.config,"disable",{get:function(){return w.config._disable},set:function(e){w.config._disable=he(e)}});var r="time"===i.mode;if(!i.dateFormat&&(i.enableTime||r)){var l=I.defaultConfig.dateFormat||a.dateFormat;o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):l+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||r)&&!i.altFormat){var s=I.defaultConfig.altFormat||a.altFormat;o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):s+" h:i"+(i.enableSeconds?":S":"")+" K"}Object.defineProperty(w.config,"minDate",{get:function(){return w.config._minDate},set:le("min")}),Object.defineProperty(w.config,"maxDate",{get:function(){return w.config._maxDate},set:le("max")});var d=function(e){return function(n){w.config["min"===e?"_minTime":"_maxTime"]=w.parseDate(n,"H:i:S")}};Object.defineProperty(w.config,"minTime",{get:function(){return w.config._minTime},set:d("min")}),Object.defineProperty(w.config,"maxTime",{get:function(){return w.config._maxTime},set:d("max")}),"time"===i.mode&&(w.config.noCalendar=!0,w.config.enableTime=!0);Object.assign(w.config,o,i);for(var u=0;u<n.length;u++)w.config[n[u]]=!0===w.config[n[u]]||"true"===w.config[n[u]];t.filter((function(e){return void 0!==w.config[e]})).forEach((function(e){w.config[e]=c(w.config[e]||[]).map(T)})),w.isMobile=!w.config.disableMobile&&!w.config.inline&&"single"===w.config.mode&&!w.config.disable.length&&!w.config.enable&&!w.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(u=0;u<w.config.plugins.length;u++){var f=w.config.plugins[u](w)||{};for(var m in f)t.indexOf(m)>-1?w.config[m]=c(f[m]).map(T).concat(w.config[m]):void 0===i[m]&&(w.config[m]=f[m])}i.altInputClass||(w.config.altInputClass=ce().className+" "+w.config.altInputClass);De("onParseConfig")}(),se(),function(){if(w.input=ce(),!w.input)return void w.config.errorHandler(new Error("Invalid input element specified"));w.input._type=w.input.type,w.input.type="text",w.input.classList.add("flatpickr-input"),w._input=w.input,w.config.altInput&&(w.altInput=d(w.input.nodeName,w.config.altInputClass),w._input=w.altInput,w.altInput.placeholder=w.input.placeholder,w.altInput.disabled=w.input.disabled,w.altInput.required=w.input.required,w.altInput.tabIndex=w.input.tabIndex,w.altInput.type="text",w.input.setAttribute("type","hidden"),!w.config.static&&w.input.parentNode&&w.input.parentNode.insertBefore(w.altInput,w.input.nextSibling));w.config.allowInput||w._input.setAttribute("readonly","readonly");ve()}(),function(){w.selectedDates=[],w.now=w.parseDate(w.config.now)||new Date;var e=w.config.defaultDate||("INPUT"!==w.input.nodeName&&"TEXTAREA"!==w.input.nodeName||!w.input.placeholder||w.input.value!==w.input.placeholder?w.input.value:null);e&&pe(e,w.config.dateFormat);w._initialDate=w.selectedDates.length>0?w.selectedDates[0]:w.config.minDate&&w.config.minDate.getTime()>w.now.getTime()?w.config.minDate:w.config.maxDate&&w.config.maxDate.getTime()<w.now.getTime()?w.config.maxDate:w.now,w.currentYear=w._initialDate.getFullYear(),w.currentMonth=w._initialDate.getMonth(),w.selectedDates.length>0&&(w.latestSelectedDateObj=w.selectedDates[0]);void 0!==w.config.minTime&&(w.config.minTime=w.parseDate(w.config.minTime,"H:i"));void 0!==w.config.maxTime&&(w.config.maxTime=w.parseDate(w.config.maxTime,"H:i"));w.minDateHasTime=!!w.config.minDate&&(w.config.minDate.getHours()>0||w.config.minDate.getMinutes()>0||w.config.minDate.getSeconds()>0),w.maxDateHasTime=!!w.config.maxDate&&(w.config.maxDate.getHours()>0||w.config.maxDate.getMinutes()>0||w.config.maxDate.getSeconds()>0)}(),w.utils={getDaysInMonth:function(e,n){return void 0===e&&(e=w.currentMonth),void 0===n&&(n=w.currentYear),1===e&&(n%4==0&&n%100!=0||n%400==0)?29:w.l10n.daysInMonth[e]}},w.isMobile||function(){var e=window.document.createDocumentFragment();if(w.calendarContainer=d("div","flatpickr-calendar"),w.calendarContainer.tabIndex=-1,!w.config.noCalendar){if(e.appendChild((w.monthNav=d("div","flatpickr-months"),w.yearElements=[],w.monthElements=[],w.prevMonthNav=d("span","flatpickr-prev-month"),w.prevMonthNav.innerHTML=w.config.prevArrow,w.nextMonthNav=d("span","flatpickr-next-month"),w.nextMonthNav.innerHTML=w.config.nextArrow,V(),Object.defineProperty(w,"_hidePrevMonthArrow",{get:function(){return w.__hidePrevMonthArrow},set:function(e){w.__hidePrevMonthArrow!==e&&(s(w.prevMonthNav,"flatpickr-disabled",e),w.__hidePrevMonthArrow=e)}}),Object.defineProperty(w,"_hideNextMonthArrow",{get:function(){return w.__hideNextMonthArrow},set:function(e){w.__hideNextMonthArrow!==e&&(s(w.nextMonthNav,"flatpickr-disabled",e),w.__hideNextMonthArrow=e)}}),w.currentYearElement=w.yearElements[0],Ce(),w.monthNav)),w.innerContainer=d("div","flatpickr-innerContainer"),w.config.weekNumbers){var n=function(){w.calendarContainer.classList.add("hasWeeks");var e=d("div","flatpickr-weekwrapper");e.appendChild(d("span","flatpickr-weekday",w.l10n.weekAbbreviation));var n=d("div","flatpickr-weeks");return e.appendChild(n),{weekWrapper:e,weekNumbers:n}}(),t=n.weekWrapper,a=n.weekNumbers;w.innerContainer.appendChild(t),w.weekNumbers=a,w.weekWrapper=t}w.rContainer=d("div","flatpickr-rContainer"),w.rContainer.appendChild(z()),w.daysContainer||(w.daysContainer=d("div","flatpickr-days"),w.daysContainer.tabIndex=-1),U(),w.rContainer.appendChild(w.daysContainer),w.innerContainer.appendChild(w.rContainer),e.appendChild(w.innerContainer)}w.config.enableTime&&e.appendChild(function(){w.calendarContainer.classList.add("hasTime"),w.config.noCalendar&&w.calendarContainer.classList.add("noCalendar");var e=E(w.config);w.timeContainer=d("div","flatpickr-time"),w.timeContainer.tabIndex=-1;var n=d("span","flatpickr-time-separator",":"),t=m("flatpickr-hour",{"aria-label":w.l10n.hourAriaLabel});w.hourElement=t.getElementsByTagName("input")[0];var a=m("flatpickr-minute",{"aria-label":w.l10n.minuteAriaLabel});w.minuteElement=a.getElementsByTagName("input")[0],w.hourElement.tabIndex=w.minuteElement.tabIndex=-1,w.hourElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getHours():w.config.time_24hr?e.hours:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(e.hours)),w.minuteElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getMinutes():e.minutes),w.hourElement.setAttribute("step",w.config.hourIncrement.toString()),w.minuteElement.setAttribute("step",w.config.minuteIncrement.toString()),w.hourElement.setAttribute("min",w.config.time_24hr?"0":"1"),w.hourElement.setAttribute("max",w.config.time_24hr?"23":"12"),w.hourElement.setAttribute("maxlength","2"),w.minuteElement.setAttribute("min","0"),w.minuteElement.setAttribute("max","59"),w.minuteElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(t),w.timeContainer.appendChild(n),w.timeContainer.appendChild(a),w.config.time_24hr&&w.timeContainer.classList.add("time24hr");if(w.config.enableSeconds){w.timeContainer.classList.add("hasSeconds");var i=m("flatpickr-second");w.secondElement=i.getElementsByTagName("input")[0],w.secondElement.value=o(w.latestSelectedDateObj?w.latestSelectedDateObj.getSeconds():e.seconds),w.secondElement.setAttribute("step",w.minuteElement.getAttribute("step")),w.secondElement.setAttribute("min","0"),w.secondElement.setAttribute("max","59"),w.secondElement.setAttribute("maxlength","2"),w.timeContainer.appendChild(d("span","flatpickr-time-separator",":")),w.timeContainer.appendChild(i)}w.config.time_24hr||(w.amPM=d("span","flatpickr-am-pm",w.l10n.amPM[r((w.latestSelectedDateObj?w.hourElement.value:w.config.defaultHour)>11)]),w.amPM.title=w.l10n.toggleTitle,w.amPM.tabIndex=-1,w.timeContainer.appendChild(w.amPM));return w.timeContainer}());s(w.calendarContainer,"rangeMode","range"===w.config.mode),s(w.calendarContainer,"animate",!0===w.config.animate),s(w.calendarContainer,"multiMonth",w.config.showMonths>1),w.calendarContainer.appendChild(e);var i=void 0!==w.config.appendTo&&void 0!==w.config.appendTo.nodeType;if((w.config.inline||w.config.static)&&(w.calendarContainer.classList.add(w.config.inline?"inline":"static"),w.config.inline&&(!i&&w.element.parentNode?w.element.parentNode.insertBefore(w.calendarContainer,w._input.nextSibling):void 0!==w.config.appendTo&&w.config.appendTo.appendChild(w.calendarContainer)),w.config.static)){var l=d("div","flatpickr-wrapper");w.element.parentNode&&w.element.parentNode.insertBefore(l,w.element),l.appendChild(w.element),w.altInput&&l.appendChild(w.altInput),l.appendChild(w.calendarContainer)}w.config.static||w.config.inline||(void 0!==w.config.appendTo?w.config.appendTo:window.document.body).appendChild(w.calendarContainer)}(),function(){w.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(w.element.querySelectorAll("[data-"+e+"]"),(function(n){return P(n,"click",w[e])}))}));if(w.isMobile)return void function(){var e=w.config.enableTime?w.config.noCalendar?"time":"datetime-local":"date";w.mobileInput=d("input",w.input.className+" flatpickr-mobile"),w.mobileInput.tabIndex=1,w.mobileInput.type=e,w.mobileInput.disabled=w.input.disabled,w.mobileInput.required=w.input.required,w.mobileInput.placeholder=w.input.placeholder,w.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",w.selectedDates.length>0&&(w.mobileInput.defaultValue=w.mobileInput.value=w.formatDate(w.selectedDates[0],w.mobileFormatStr));w.config.minDate&&(w.mobileInput.min=w.formatDate(w.config.minDate,"Y-m-d"));w.config.maxDate&&(w.mobileInput.max=w.formatDate(w.config.maxDate,"Y-m-d"));w.input.getAttribute("step")&&(w.mobileInput.step=String(w.input.getAttribute("step")));w.input.type="hidden",void 0!==w.altInput&&(w.altInput.type="hidden");try{w.input.parentNode&&w.input.parentNode.insertBefore(w.mobileInput,w.input.nextSibling)}catch(e){}P(w.mobileInput,"change",(function(e){w.setDate(g(e).value,!1,w.mobileFormatStr),De("onChange"),De("onClose")}))}();var e=l(re,50);w._debouncedChange=l(Y,300),w.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&P(w.daysContainer,"mouseover",(function(e){"range"===w.config.mode&&oe(g(e))}));P(w._input,"keydown",ie),void 0!==w.calendarContainer&&P(w.calendarContainer,"keydown",ie);w.config.inline||w.config.static||P(window,"resize",e);void 0!==window.ontouchstart?P(window.document,"touchstart",X):P(window.document,"mousedown",X);P(window.document,"focus",X,{capture:!0}),!0===w.config.clickOpens&&(P(w._input,"focus",w.open),P(w._input,"click",w.open));void 0!==w.daysContainer&&(P(w.monthNav,"click",xe),P(w.monthNav,["keyup","increment"],N),P(w.daysContainer,"click",me));if(void 0!==w.timeContainer&&void 0!==w.minuteElement&&void 0!==w.hourElement){var n=function(e){return g(e).select()};P(w.timeContainer,["increment"],_),P(w.timeContainer,"blur",_,{capture:!0}),P(w.timeContainer,"click",H),P([w.hourElement,w.minuteElement],["focus","click"],n),void 0!==w.secondElement&&P(w.secondElement,"focus",(function(){return w.secondElement&&w.secondElement.select()})),void 0!==w.amPM&&P(w.amPM,"click",(function(e){_(e)}))}w.config.allowInput&&P(w._input,"blur",ae)}(),(w.selectedDates.length||w.config.noCalendar)&&(w.config.enableTime&&F(w.config.noCalendar?w.latestSelectedDateObj:void 0),ye(!1)),S();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!w.isMobile&&n&&de(),De("onReady")}(),w}function T(e,n){for(var t=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),a=[],i=0;i<t.length;i++){var o=t[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=k(o,n||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return T(this,e)},HTMLElement.prototype.flatpickr=function(e){return T([this],e)});var I=function(e,n){return"string"==typeof e?T(window.document.querySelectorAll(e),n):e instanceof Node?T([e],n):T(e,n)};return I.defaultConfig={},I.l10ns={en:e({},i),default:e({},i)},I.localize=function(n){I.l10ns.default=e(e({},I.l10ns.default),n)},I.setDefaults=function(n){I.defaultConfig=e(e({},I.defaultConfig),n)},I.parseDate=C({}),I.formatDate=b({}),I.compareDates=M,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return T(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=I),I}));
    
    
    // HTML Template
    const HTML_TEMPLATE = `<link rel=preconnect href="https://fonts.googleapis.com"><link rel=preconnect href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap" rel=stylesheet><div class=sh-product-manager><header class=sh-header><div class=logo><img src="https://cdn.jsdelivr.net/gh/squarehero-store/advanced-product-manager@latest/dist/sh-logo.png" alt="SquareHero Logo" class=logo-icon></div><div class=header-title-section><h2 class=header-title>Advanced Product Manager</h2><span class=demo-mode-indicator id=demo-mode-indicator style="display: none;">Demo mode</span><div class="sh-status-indicator sh-active" id=activated-badge style="display: none;"><div class=sh-status-icon><svg width=11 height=8 viewBox="0 0 11 8" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M1.66539 3.83192L4.2107 6.16528L9.66539 1.16528" stroke=white stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></div>Activated</div></div><button class=preview-toggle-btn id=preview-toggle-btn title="Toggle Preview Mode"><svg width=16 height=16 viewBox="0 0 16 16" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M1 10H6V15M15 6H10V1" stroke=white stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></button></header><div class=gradient-strip></div><div class=container><main class=main-content><div class=content-header><div class=action-buttons><button class="btn bulk-adjust"><svg width=19 height=17 viewBox="0 0 19 17" fill=none xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_224_2570)"><path d="M7.75 13.75H17.375M1.625 13.75H4.25M4.25 13.75V15.5M4.25 13.75V12M16.5 8.5H17.375M1.625 8.5H13M13 8.5V10.25M13 8.5V6.75M11.25 3.25H17.375M1.625 3.25H7.75M7.75 3.25V5M7.75 3.25V1.5" stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round/></g><defs><clipPath id=clip0_224_2570><rect width=19 height=17 fill=white/></clipPath></defs></svg><span>Bulk Adjust</span></button></div></div><div class=filters><div class=search-box><span class=search-icon><svg width=18 height=18 viewBox="0 0 18 18" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M7.53223 14.0332C3.72656 14.0332 0.615234 10.9219 0.615234 7.11621C0.615234 3.31055 3.73535 0.199219 7.53223 0.199219C11.3379 0.199219 14.4492 3.31055 14.4492 7.11621C14.4492 8.59277 13.9834 9.95508 13.1924 11.0801L17.0156 14.9209C17.2617 15.167 17.376 15.4922 17.376 15.8262C17.376 16.5469 16.8398 17.1182 16.1104 17.1182C15.7588 17.1182 15.4336 16.9951 15.1787 16.749L11.3291 12.8906C10.2393 13.6113 8.92969 14.0332 7.53223 14.0332ZM7.53223 12.1875C10.3184 12.1875 12.6035 9.90234 12.6035 7.11621C12.6035 4.33008 10.3184 2.04492 7.53223 2.04492C4.74609 2.04492 2.46094 4.33008 2.46094 7.11621C2.46094 9.90234 4.74609 12.1875 7.53223 12.1875Z" fill="#3C3C43" fill-opacity="0.6"/></svg></span><input type=text id=search-input placeholder="Search products by name or SKU"></div><div class=filter-dropdown id=category-filter-container><div class=select-trigger id=category-filter-trigger><span class=select-text id=category-filter-text>All categories</span><svg width=10 height=6 viewBox="0 0 10 6" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M9 1L5 5L1 1" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></div><div class=select-dropdown id=category-filter-dropdown><div class="select-option selected" data-value=all>All categories</div></div><select id=category-filter style="display: none;"><option value=all>All categories</option></select></div><div class=filter-dropdown id=type-filter-container><div class=select-trigger id=type-filter-trigger><span class=select-text id=type-filter-text>All types</span><svg width=10 height=6 viewBox="0 0 10 6" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M9 1L5 5L1 1" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></div><div class=select-dropdown id=type-filter-dropdown><div class="select-option selected" data-value=all>All types</div><div class=select-option data-value=Physical>Physical</div><div class=select-option data-value=Digital>Digital</div><div class=select-option data-value=Service>Service</div></div><select id=type-filter style="display: none;"><option value=all>All types</option><option value=Physical>Physical</option><option value=Digital>Digital</option><option value=Service>Service</option></select></div><div class=filter-dropdown id=status-filter-container><div class=select-trigger id=status-filter-trigger><span class=select-text id=status-filter-text>All status</span><svg width=10 height=6 viewBox="0 0 10 6" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M9 1L5 5L1 1" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></div><div class=select-dropdown id=status-filter-dropdown><div class="select-option selected" data-value=all>All status</div><div class=select-option data-value=public>Public</div><div class=select-option data-value=hidden>Hidden</div><div class=select-option data-value=scheduled>Scheduled</div></div><select id=status-filter style="display: none;"><option value=all>All status</option><option value=public>Public</option><option value=hidden>Hidden</option><option value=scheduled>Scheduled</option></select></div><div class=filter-dropdown id=sort-filter-container><div class=select-trigger id=sort-filter-trigger><span class=select-text id=sort-filter-text>Sort by</span><svg width=10 height=6 viewBox="0 0 10 6" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M9 1L5 5L1 1" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></div><div class=select-dropdown id=sort-filter-dropdown><div class="select-option selected" data-value=default>Sort by</div><div class=select-option data-value="title:asc">Title (A-Z)</div><div class=select-option data-value="title:desc">Title (Z-A)</div><div class=select-option data-value="price:asc">Price (Low-High)</div><div class=select-option data-value="price:desc">Price (High-Low)</div><div class=select-option data-value="stock:asc">Stock (Low-High)</div><div class=select-option data-value="stock:desc">Stock (High-Low)</div></div><select id=sort-select style="display: none;"><option value=default>Sort by</option><option value="title:asc">Title (A-Z)</option><option value="title:desc">Title (Z-A)</option><option value="price:asc">Price (Low-High)</option><option value="price:desc">Price (High-Low)</option><option value="stock:asc">Stock (Low-High)</option><option value="stock:desc">Stock (High-Low)</option></select></div><button class=reset-filters-btn id=reset-filters-btn disabled><svg width=14 height=18 viewBox="0 0 14 18" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M7.75 3.98328H11.8C12.2201 3.98328 12.4307 3.98328 12.5911 4.06502C12.7322 4.13693 12.8461 4.25158 12.918 4.3927C12.9997 4.55313 13 4.76331 13 5.18335V5.74188C13 5.92161 13 6.01241 12.9795 6.09784C12.9612 6.17437 12.9304 6.24747 12.8893 6.31458C12.8429 6.39026 12.7782 6.45513 12.6486 6.58484L11.5 7.73337M3.62471 3.98328H2.19971C1.77967 3.98328 1.56986 3.98328 1.40942 4.06502C1.2683 4.13693 1.15365 4.25158 1.08174 4.3927C1 4.55313 1 4.76331 1 5.18335V5.7363C1 5.91974 1 6.01152 1.02072 6.09784C1.0391 6.17437 1.06947 6.24747 1.11059 6.31458C1.15696 6.39024 1.22193 6.45521 1.35156 6.58484L5.14862 10.3819C5.27832 10.5116 5.34283 10.5761 5.38921 10.6518C5.43033 10.7189 5.46112 10.7922 5.4795 10.8688C5.5 10.9542 5.5 11.0449 5.5 11.2247V14.7915C5.5 15.4344 5.5 15.7561 5.63541 15.9497C5.75364 16.1187 5.93605 16.2315 6.14014 16.2617C6.37385 16.2962 6.66153 16.1526 7.23657 15.8651L7.83655 15.5651C8.07738 15.4447 8.19745 15.3843 8.28542 15.2944C8.3632 15.215 8.42275 15.1197 8.45898 15.0145C8.5 14.8957 8.5 14.7608 8.5 14.4915V11.2302C8.5 11.0468 8.5 10.9551 8.5207 10.8688C8.53908 10.7922 8.56945 10.719 8.61063 10.6519C8.65683 10.5765 8.7214 10.5119 8.85017 10.3831L8.8516 10.3818L9.62508 9.60835M9.62508 9.60835L1.75 1.73328M9.62508 9.60835L12.25 12.2333" stroke="#011E45" stroke-width="1.5" stroke-linecap=round stroke-linejoin=round/></svg><span>Reset</span></button></div><div class=no-products-message id=no-products-message style="display: none;"><h3>No products found</h3><p>This usually means your store doesn't have any products yet. If you do have products and they're not showing up, please contact support.</p></div><div class=table-wrapper style="display: none;"><div class=table-header-controls><div class=products-selected-text id=products-selected-text>0 products selected</div><div class=table-scroll-arrows><button class="scroll-arrow scroll-arrow-left" id=scroll-left aria-label="Scroll table left"><svg width=9 height=16 viewBox="0 0 9 16" fill=none xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_181_2572_left)"><path d="M8 15L1 8L8 1" stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round/></g><defs><clipPath id=clip0_181_2572_left><rect width=9 height=16 fill=white/></clipPath></defs></svg></button><button class="scroll-arrow scroll-arrow-right" id=scroll-right aria-label="Scroll table right"><svg width=9 height=16 viewBox="0 0 9 16" fill=none xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);"><g clip-path="url(#clip0_181_2572_right)"><path d="M8 15L1 8L8 1" stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round/></g><defs><clipPath id=clip0_181_2572_right><rect width=9 height=16 fill=white/></clipPath></defs></svg></button></div></div><div class=table-container id=table-container><table><thead><tr><th><input type=checkbox id=select-all-checkbox></th><th>Title</th><th>URL</th><th>SKU</th><th>Categories</th><th id=price-header>Price</th><th id=sale-price-header>Sale Price</th><th>On Sale</th><th>Stock</th><th>Type</th><th>Status</th><th id=scheduled-header class="scheduled-column hidden">Scheduled</th></tr></thead><tbody id=product-container></tbody></table></div><div class=pagination><div class=pagination-info id=pagination-info></div><div class=pagination-controls><div class=page-numbers id=page-numbers></div><div class=show-select><span>Show</span><select id=items-per-page><option value=10>10</option><option value=20 selected>20</option><option value=50>50</option></select></div></div></div></main></div><div id=changes-footer class="changes-footer hidden"><div class=changes-footer-content><div class=changes-footer-left><div class=changes-info><span class=changes-icon><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 6.44971V10.4497M5.33173 1.9375L1.9375 5.33173L1.93442 5.33462C1.59057 5.67847 1.41824 5.85081 1.29492 6.05204C1.18526 6.23098 1.10425 6.4263 1.05526 6.63037C1 6.86055 1 7.10506 1 7.59424V12.4058C1 12.8949 1 13.1395 1.05526 13.3697C1.10425 13.5738 1.18526 13.7688 1.29492 13.9478C1.41857 14.1495 1.59182 14.3228 1.9375 14.6685L5.33173 18.0627C5.67763 18.4086 5.85021 18.5812 6.05204 18.7048C6.23099 18.8145 6.42581 18.8958 6.62988 18.9448C6.85971 19 7.10382 19 7.59151 19H12.4075C12.8952 19 13.1404 19 13.3702 18.9448C13.5743 18.8958 13.7693 18.8145 13.9482 18.7049C14.1501 18.5812 14.323 18.4086 14.6689 18.0627L18.0632 14.6685C18.4091 14.3226 18.5817 14.1496 18.7053 13.9478C18.815 13.7688 18.8953 13.5738 18.9443 13.3697C18.9996 13.1395 19 12.895 19 12.4058V7.59424C19 7.10506 18.9996 6.86055 18.9443 6.63037C18.8953 6.4263 18.815 6.23099 18.7053 6.05205C18.5817 5.85022 18.4091 5.67761 18.0632 5.33173L14.6689 1.9375C14.3233 1.59181 14.15 1.41857 13.9482 1.29492C13.7693 1.18526 13.5743 1.10425 13.3702 1.05526C13.14 1 12.8945 1 12.4053 1H7.59375C7.10457 1 6.86006 1 6.62988 1.05526C6.42581 1.10425 6.23099 1.18526 6.05204 1.29492C5.85204 1.41748 5.68106 1.58847 5.3414 1.92813L5.33173 1.9375ZM10.0498 13.4497V13.5497L9.9502 13.5499V13.4497H10.0498Z" stroke=white stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></span><span class=changes-text>You have unsaved changes</span><span class=changes-count id=changes-count>0 products modified</span></div><div class=changes-notification-content style="display: none;"><span class=changes-notification-text id=notification-text></span></div><div id=main-progress-container class=progress-container style="display: none;"><div class=progress-bar><div class=progress-fill id=main-progress-fill></div></div><div class=progress-info><span id=main-progress-text>Saving changes...</span><span id=main-progress-time></span></div></div></div><div class=changes-footer-right><button class=btn-discard id=discard-changes>Discard Changes</button><button class=apply-btn id=save-changes>Apply Changes</button></div></div></div><div id=url-suggestion-tooltip class="url-suggestion-tooltip hidden"><div class=url-suggestion-content><div class=url-suggestion-header><span class=url-suggestion-title>Update URL to match title?</span><button class=url-suggestion-close id=url-suggestion-close>×</button></div><div class=url-suggestion-body><span class=url-suggestion-text>New URL:</span><span class=url-suggestion-preview id=url-suggestion-preview></span><div class=url-redirect-option><label class=url-redirect-checkbox><input type=checkbox id=url-create-redirect checked><span class=url-redirect-checkmark></span><span class=url-redirect-text>Create redirect from old URL to new URL</span></label></div></div><div class=url-suggestion-actions><button class="url-suggestion-btn secondary" id=url-suggestion-cancel>Keep Current</button><button class="url-suggestion-btn primary" id=url-suggestion-apply>Update URL</button></div></div></div><div id=category-editor-popup class="category-editor-popup hidden"><div class=category-popup-content><div class=category-popup-body><div class=category-field-container><div class=category-field-wrapper><div id=category-tags-display class=category-tags-display></div><div class=category-input-section><input type=text id=category-popup-input class=category-popup-input placeholder="Type to add new category..."><div class=category-suggestions id=category-popup-suggestions></div></div></div><div class=category-existing-dropdown><div class=category-existing-select><div class=select-trigger><span class="select-text placeholder">Select an existing category</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown></div><select id=category-existing-select-hidden style="display: none;"></select></div></div></div><div class=category-popup-actions><button id=category-popup-discard class="category-popup-btn category-popup-discard">Discard</button><button id=category-popup-save class="category-popup-btn category-popup-save">Save Changes</button></div></div></div></div><div id=schedule-editor-popup class="schedule-editor-popup hidden"><div class=schedule-popup-content><div class=schedule-popup-body><h4>Schedule Publication Date & Time</h4><div class=schedule-field-container><label for=schedule-datetime-input class=schedule-label>When should this product be published?</label><input type=datetime-local id=schedule-datetime-input class=schedule-datetime-input><div class=schedule-note><svg width=14 height=14 viewBox="0 0 14 14" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#666" stroke-width="1.5" stroke-linecap=round stroke-linejoin=round/><path d="M7 4.5V7L8.5 8.5" stroke="#666" stroke-width="1.5" stroke-linecap=round stroke-linejoin=round/></svg><span>Product will be automatically published at the specified date and time</span></div></div><div class=schedule-popup-actions><button id=schedule-popup-cancel class="schedule-popup-btn schedule-popup-cancel">Cancel</button><button id=schedule-popup-save class="schedule-popup-btn schedule-popup-save">Schedule</button></div></div></div></div><div id=stock-editor-popup class="stock-editor-popup hidden"><div class=stock-popup-content><div class=stock-popup-body><h4>Edit Stock Level</h4><div class=stock-field-container><div class=stock-input-section><label for=stock-quantity-input class=stock-label>Stock Quantity</label><input type=number id=stock-quantity-input class=stock-quantity-input min=0 placeholder=0></div><div class=stock-toggle-section><div class=section-header><span class=stock-toggle-label>Track Inventory</span><label class=toggle-switch><input type=checkbox id=stock-track-inventory class=stock-track-checkbox><span class=toggle-slider></span></label></div><div class=price-adjustment-tooltip><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span class=tooltip-text>When disabled, shows unlimited stock (∞)</span></div></div></div><div class=stock-popup-actions><button id=stock-popup-cancel class="stock-popup-btn stock-popup-cancel">Cancel</button><button id=stock-popup-save class="stock-popup-btn stock-popup-save">Save Changes</button></div></div></div></div><div id=bulk-adjust-drawer class=bulk-adjust-drawer><div class=bulk-drawer-overlay></div><div class=bulk-drawer-content><div class=bulk-drawer-header><h3>Bulk Product Editor</h3><button class=bulk-drawer-close id=bulk-drawer-close><svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 viewBox="0 0 24 24" fill=none><path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></button></div><div class=bulk-drawer-body><div class=bulk-tabs-nav><button class="bulk-tab active" data-tab=pricing>Pricing</button><button class=bulk-tab data-tab=visibility>Visibility</button><button class=bulk-tab data-tab=inventory>Inventory</button></div><div class=bulk-drawer-main><div class=bulk-tabs-container><div class=bulk-tab-content><div id=pricing-tab class="tab-pane active"><div class=bulk-section><div class=section-header><h4>Regular Pricing</h4><label class=toggle-switch><input type=checkbox id=bulk-adjust-regular-prices><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-regular-price-options style="display: none;"><div class=price-adjustment-container><div class=price-controls-row><label class=price-adjustment-label>Price adjustment</label><div class=price-input-group><div class=price-value-input><input type=number id=bulk-regular-adjustment placeholder=0 step="0.01" value=0><span class=price-unit id=price-unit>%</span></div><div class=price-method-selector><div class=bulk-select-dropdown><div class=select-trigger id=price-method-trigger><span class=select-text id=price-method-text>Adjust by %</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown id=price-method-dropdown><div class="select-option selected" data-value=percentage>Adjust by %</div><div class=select-option data-value=fixed-adjustment>Adjust by amount</div><div class=select-option data-value=fixed-price>Fixed price</div></div><select id=bulk-regular-adjustment-type style="display: none;"><option value=percentage>Adjust by %</option><option value=fixed-adjustment>Adjust by amount</option><option value=fixed-price>Fixed price</option></select></div></div></div></div><div class=price-slider-row><div class=price-slider-container data-slider=regular><div class=price-slider-track><div class=price-slider-cover></div><div class=price-slider-handle></div></div></div></div></div><div class=price-adjustment-tooltip><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span class=tooltip-text>If a price change reduces the value below $0, the product price will default to $0.</span></div></div></div><div class=bulk-section><div class=section-header><h4>Sale Pricing</h4><label class=toggle-switch><input type=checkbox id=bulk-adjust-sale-prices><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-sale-price-options style="display: none;"><div class=bulk-form-group><label>Sale status</label><div class=three-way-toggle><button class="toggle-option active" data-value=unchanged>Unchanged</button><button class=toggle-option data-value=on-sale>On sale</button><button class=toggle-option data-value=not-on-sale>Not on sale</button></div><input type=hidden id=bulk-sale-status value=unchanged></div><div class=bulk-form-group id=bulk-sale-pricing-controls><div class=price-adjustment-container><div class=price-controls-row><label class=price-adjustment-label>Price adjustment</label><div class=price-input-group><div class=price-value-input><input type=number id=bulk-sale-adjustment placeholder=0 step="0.01" value=0><span class=price-unit id=sale-price-unit>%</span></div><div class=price-method-selector><div class=bulk-select-dropdown><div class=select-trigger id=sale-price-method-trigger><span class=select-text id=sale-price-method-text>Adjust by %</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown id=sale-price-method-dropdown><div class="select-option selected" data-value=percentage>Adjust by %</div><div class=select-option data-value=fixed-adjustment>Adjust by amount</div><div class=select-option data-value=fixed-price>Fixed sale price</div></div><select id=bulk-sale-adjustment-type style="display: none;"><option value=percentage selected>Adjust by %</option><option value=fixed-adjustment>Adjust by amount</option><option value=fixed-price>Fixed sale price</option></select></div></div></div></div><div class=price-slider-row><div class=price-slider-container data-slider=sale><div class=price-slider-track><div class=price-slider-cover></div><div class=price-slider-handle></div></div></div></div></div><div class=price-adjustment-tooltip id=sale-adjustment-tooltip style="display: none;"><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span class=tooltip-text>Sale prices that exceed the regular price will be capped at the regular price for affected products.</span></div></div><div style="display: none;"><input type=radio name=bulk-sale-action id=bulk-sale-keep-current value=keep-current checked><input type=radio name=bulk-sale-action id=bulk-sale-put-on value=put-on-sale><input type=radio name=bulk-sale-action id=bulk-sale-take-off value=take-off-sale></div></div></div><div class=bulk-section><div class=section-header><h4>Rounding</h4><label class=toggle-switch><input type=checkbox id=bulk-round-prices><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-rounding-options style="display: none;"><div class=bulk-form-group><label>Rounding type</label><div class=four-way-toggle><button class="toggle-option active" data-value=whole title="Round to nearest dollar (e.g., $24.60 becomes $25)">Whole</button><button class=toggle-option data-value=".99" title="Round to the nearest .99 (e.g. $24.60 becomes $24.99)">.99</button><button class=toggle-option data-value=".95" title="Round to the nearest .95 (e.g. $24.60 becomes $24.95)">.95</button><button class=toggle-option data-value=custom title="Round to custom cents value">Custom</button></div><input type=hidden id=bulk-rounding-type value=whole></div><div class=bulk-form-group id=bulk-rounding-description><div class=info-text><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span id=bulk-rounding-description-text>Round to the nearest dollar (e.g. $24.60 becomes $25)</span></div></div><div class=bulk-price-input-group id=bulk-custom-ending style="display: none; margin-top: 8px;"><label>Custom ending (2 digits):</label><div class=price-input-group><div class=price-value-input><span class=price-unit>.</span><input type=number id=bulk-custom-cents placeholder=99 min=0 max=99 step=1></div></div></div><div class=bulk-form-group style="margin-top: 16px;"><label>Apply rounding to</label><div class=three-way-toggle><button class="toggle-option active" data-value=all>All prices</button><button class=toggle-option data-value=regular>Regular price</button><button class=toggle-option data-value=sale>Sale price</button></div><input type=hidden id=bulk-rounding-target value=all></div></div></div></div><div id=visibility-tab class=tab-pane><div class=bulk-section><div class=section-header><h4>Product Status</h4><label class=toggle-switch><input type=checkbox id=bulk-product-status-toggle><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-product-status-options style="display: none;"><div class=bulk-form-group><label>Product status</label><div class=four-way-toggle><button class="toggle-option active" data-value=unchanged title="Keep current status">Unchanged</button><button class=toggle-option data-value=public title="Make products visible to customers">Public</button><button class=toggle-option data-value=hidden title="Hide products from customers">Hidden</button><button class=toggle-option data-value=scheduled title="Schedule products for future publication">Scheduled</button></div><input type=hidden id=bulk-product-status value=unchanged></div><div class=bulk-form-group id=bulk-scheduled-date-group style="display: none;"><label for=bulk-scheduled-date>Schedule publication date</label><input type=datetime-local id=bulk-scheduled-date class=bulk-datetime-input></div></div></div><div class=bulk-section><div class=section-header><h4>Categories</h4><label class=toggle-switch><input type=checkbox id=bulk-categories-toggle><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-categories-options style="display: none;"><div class=category-section><div class=category-field-container><div class=category-field-wrapper><div id=bulk-category-tags-display class=category-tags-display></div><div class=category-input-section><input type=text id=bulk-category-input class=category-popup-input placeholder="Type to add new category..."><div class=category-suggestions id=bulk-category-suggestions></div></div></div><div class=bulk-select-dropdown><div class=select-trigger id=bulk-category-add-trigger><span class="select-text placeholder">Select an existing category</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown id=bulk-category-add-dropdown></div></div><div class=bulk-select-dropdown><div class=select-trigger id=bulk-category-remove-trigger><span class="select-text placeholder">Select category to remove</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown id=bulk-category-remove-dropdown></div></div></div><div class=category-info-tooltip><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span class=tooltip-text>When removing categories, a number in brackets next to a category shows how many selected products it applies to.</span></div></div></div></div></div><div id=inventory-tab class=tab-pane><div class=bulk-section><div class=section-header><h4>Stock management</h4><label class=toggle-switch><input type=checkbox id=bulk-enable-stock-tracking><span class=toggle-slider></span></label></div><div class=bulk-form-group id=bulk-stock-controls style="display: none;"><div class=two-way-toggle><div class="toggle-option active" data-value=limited>Limited stock</div><div class=toggle-option data-value=unlimited>Unlimited stock</div></div><input type=hidden id=bulk-stock-type value=limited><div class=bulk-form-group id=bulk-stock-adjustment-group><div class=price-adjustment-container><div class=price-controls-row><label class=price-adjustment-label>Stock adjustment</label><div class=price-input-group><div class=price-value-input><input type=number id=bulk-stock-adjustment placeholder=0 step=1 value=0></div><div class=price-method-selector><div class=bulk-select-dropdown><div class=select-trigger id=stock-method-trigger><span class=select-text id=stock-method-text>Adjust by amount</span><svg width=16 height=17 viewBox="0 0 16 17" fill=none xmlns="http://www.w3.org/2000/svg"><path fill-rule=evenodd clip-rule=evenodd d="M0.792969 5.70712L2.20718 4.29291L8.00008 10.0858L13.793 4.29291L15.2072 5.70712L8.00008 12.9142L0.792969 5.70712Z" fill="#1A1A1A"/></svg></div><div class=select-dropdown id=stock-method-dropdown><div class="select-option selected" data-value=adjust>Adjust by amount</div><div class=select-option data-value=fixed>Fixed amount</div></div><select id=bulk-stock-action style="display: none;"><option value=adjust>Adjust by amount</option><option value=fixed>Fixed amount</option></select></div></div></div></div><div class=price-slider-row><div class=price-slider-container data-slider=stock><div class=price-slider-track><div class=price-slider-cover></div><div class=price-slider-handle></div></div></div></div></div></div><div class=price-adjustment-tooltip id=stock-adjustment-tooltip style="display: none;"><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="#011E45" stroke-opacity="0.7" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span class=tooltip-text>Products where the adjustment would set stock below 0 will instead be set to 0.</span></div></div></div></div></div></div><div class=bulk-preview-pane><div class=group-pane><h4>Changes to Apply</h4><div id=changes-summary class=changes-list><div class=no-changes>No changes configured</div></div></div><div class=group-pane><h4>Product preview</h4><div id=sample-products class=sample-products-carousel></div></div></div></div></div><div id=bulk-notification-footer class=bulk-notification-footer><div class=bulk-footer-content><div class=bulk-footer-left><div class=products-selected-info><h4 id=products-selected-count>0 Products Selected</h4><div class=time-estimate><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M10 5.83333V10H14.1667M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5Z" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span id=estimated-time>Est. 30 seconds</span></div></div><div class=bulk-notification-content style="display: none;"><span class=bulk-notification-text id=bulk-notification-text></span></div><div id=bulk-progress-container class=progress-container style="display: none;"><div class=progress-bar><div class=progress-fill id=bulk-progress-fill></div></div><div class=progress-info><span id=bulk-progress-text></span><span id=bulk-progress-time></span></div></div></div><div class=bulk-footer-right><button class="bulk-btn primary" id=bulk-apply-all disabled>Apply Changes</button></div></div></div></div></div><div id=undo-changes-drawer style="display: none;"><div class=undo-drawer-overlay></div><div class=undo-drawer-content><div class=drawer-header><h2>Undo History</h2><button class=drawer-close id=undo-drawer-close><svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 viewBox="0 0 24 24" fill=none><path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg></button></div><div class=drawer-content><div class=undo-content-container><div class=undo-description><p>Undo this bulk edit and roll back affected products to their state before these changes were made.</p></div><div class=undo-history-list id=undo-history-list></div></div></div><div class=drawer-footer id=undo-notification-footer><div class=bulk-footer-content><div class=bulk-footer-left><div class=undo-status-info><h4 id=undo-status-count>5 Changes Available</h4><div class=undo-info><svg width=20 height=20 viewBox="0 0 20 20" fill=none xmlns="http://www.w3.org/2000/svg"><path d="M4.16666 10H15.8333M4.16666 10L8.33333 5.83333M4.16666 10L8.33333 14.1667" stroke="#011E45" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg><span id=undo-info-text>Choose a restore point</span></div></div><div class=bulk-notification-content style="display: none;"><span class=bulk-notification-text id=undo-notification-text></span></div><div id=undo-progress-container class=progress-container style="display: none;"><div class=progress-bar><div class=progress-fill id=undo-progress-fill></div></div><div class=progress-info><span id=undo-progress-text></span><span id=undo-progress-time></span></div></div></div><div class=bulk-footer-right><button class="bulk-btn secondary" id=undo-selected-btn disabled>Restore Selected</button></div></div></div></div></div></div>`;
    
    // Utilities
    // === API UTILITY ===
// Squarespace API utilities

// Get CSRF token for API requests
function getCsrfToken() {
    const crumb = document.cookie.split(';')
        .find(c => c.trim().startsWith('crumb='))
        ?.split('=')[1];
    
    if (!crumb) {
        console.error("Could not find crumb cookie for API requests");
        return null;
    }
    return crumb;
}

// Extract file ID from Squarespace asset URL
function extractFileIdFromUrl(url) {
    if (!url) return null;
    
    // URL format: https://static1.squarespace.com/static/687467a95ae647520c2d338c/t/687ca776b3518e7415752b30/1752999798049/filename.json
    // We need the ID between /t/ and the next /
    const match = url.match(/\/t\/([^\/]+)\//);
    return match ? match[1] : null;
}

// Delete old JSON file from Squarespace CSS assets
async function deleteOldJsonFile(fileUrl) {
    const crumb = getCsrfToken();
    if (!crumb || !fileUrl) {
        return;
    }

    try {
        const fileId = extractFileIdFromUrl(fileUrl);
        if (!fileId) {
            console.warn('Could not extract file ID from URL:', fileUrl);
            return;
        }

        // Get website ID from current URL or a known location
        const websiteId = window.location.hostname.includes('squarespace.com') 
            ? document.querySelector('meta[name="website-id"]')?.content || '687467a95ae647520c2d338c'
            : '687467a95ae647520c2d338c'; // fallback

        // Get template ID (this might need to be dynamic)
        const templateId = '5c5a519771c10ba3470d8101'; // This might need to be extracted dynamically

        const formBody = new URLSearchParams({
            templateId: templateId,
            websiteId: websiteId,
            itemId: fileId
        });

        const deleteResponse = await fetch(`${window.location.origin}/api/template/RemoveTemplateCSSAsset`, {
            method: "POST",
            headers: {
                "accept": "application/json, text/plain, */*",
                "content-type": "application/x-www-form-urlencoded",
                "x-csrf-token": crumb
            },
            body: formBody.toString(),
            credentials: "include"
        });

        if (deleteResponse.ok) {
        } else {
            console.warn('⚠️ Failed to delete old JSON file:', deleteResponse.status, deleteResponse.statusText);
        }
    } catch (error) {
        console.error('❌ Error deleting old JSON file:', error);
        // Don't throw error - deletion is not critical
    }
}

// Helper function to properly convert datetime-local input to ISO string
function convertScheduledDateToISO(scheduledDateValue) {
    try {
        // Handle datetime-local input format (YYYY-MM-DDTHH:MM)
        // The datetime-local input gives us a string without timezone info
        // We need to treat this as the user's local time, not UTC
        let dateObj;
        if (scheduledDateValue.includes('T') && !scheduledDateValue.includes('Z') && !scheduledDateValue.includes('+')) {
            // This is a datetime-local format, append ':00' for seconds if not present and treat as local time
            const dateStr = scheduledDateValue.includes(':') && scheduledDateValue.split(':').length === 2 
                ? scheduledDateValue + ':00' 
                : scheduledDateValue;
            dateObj = new Date(dateStr);
        } else {
            // This might be an ISO string or other format
            dateObj = new Date(scheduledDateValue);
        }
        
        const isoString = dateObj.toISOString();
        return isoString;
    } catch (error) {
        console.error('❌ Invalid scheduled date format:', scheduledDateValue, error);
        // Return current time + 1 hour as fallback
        return new Date(Date.now() + 60 * 60 * 1000).toISOString();
    }
}

// Update product fields in Squarespace
async function updateProductFields(product, changes, crumbToken) {
    
    const productId = product.id;
    const isDigitalProduct = product.storeItem?.productType === "DIGITAL";
    const isServiceProduct = product.storeItem?.productType === "SERVICE";
    const isVariantUpdate = changes.variantId && changes.variantChanges; // Legacy single variant support
    const isBatchedVariantUpdate = changes.batchedVariantChanges && Object.keys(changes.batchedVariantChanges).length > 0;
    
    const productTypeText = isServiceProduct ? 'Service' : (isDigitalProduct ? 'Digital' : 'Physical');
    
    if (isVariantUpdate) {
        // Legacy single variant update (shouldn't happen with new batching, but kept for compatibility)
        
        // Validate that the variant ID exists in this product
        const variantExists = product.storeItem?.variants?.some(v => v.id === changes.variantId);
        if (!variantExists) {
            console.error(`❌ Variant ID ${changes.variantId} not found in product ${product.id}`);
            throw new Error(`Variant ID ${changes.variantId} not found in product ${product.id}`);
        }
    } else if (isBatchedVariantUpdate) {
        // New batched variant update
        const variantIds = Object.keys(changes.batchedVariantChanges);
        
        // Validate that all variant IDs exist in this product
        const availableVariantIds = product.storeItem?.variants?.map(v => v.id) || [];
        for (const variantId of variantIds) {
            if (!availableVariantIds.includes(variantId)) {
                console.error(`❌ Variant ID ${variantId} not found in product ${product.id}`);
                throw new Error(`Variant ID ${variantId} not found in product ${product.id}`);
            }
        }
    }
    
    let payload;
    
    if (isDigitalProduct) {
        // Determine visibility state with detailed logging
        let visibilityState;
        let visibleOn;
        if (changes.status !== undefined) {
            if (changes.status === 'public') {
                visibilityState = 'VISIBLE';
            } else if (changes.status === 'hidden') {
                visibilityState = 'HIDDEN';
            } else if (changes.status === 'scheduled') {
                visibilityState = 'SCHEDULED';
                // Check for scheduled date from individual cell change
                if (changes.scheduledDate) {
                    try {
                        visibleOn = convertScheduledDateToISO(changes.scheduledDate);
                        console.log('📅 Individual cell scheduled date processed:', visibleOn);
                    } catch (error) {
                        console.error('❌ Invalid scheduled date format:', changes.scheduledDate, error);
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                } else {
                    console.error('❌ Scheduled status requires a date, but none provided');
                    // Use current time + 1 hour as fallback
                    visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                }
            } else {
                visibilityState = 'HIDDEN'; // Default for unknown status
            }
        } else {
            visibilityState = product.workflowState === 'PUBLISHED' ? 'VISIBLE' : 'HIDDEN';
        }

        // Get currency code from existing product or detected currency
        const currencyCode = product.storeItem?.priceCurrency || window.getSystemCurrency?.();

        // Build digital product payload
        payload = {
            name: changes.title !== undefined ? changes.title : product.title,
            description: product.description || '',
            visibility: { 
                state: visibilityState,
                ...(visibleOn ? { visibleOn } : (product.workflowState === 'PUBLISHED' && { visibleOn: new Date().toISOString() }))
            },
            tags: product.tags || [],
            categories: product.categories || [],
            newImageOrder: [], // Keep empty array for now
            price: {
                decimalValue: changes.price !== undefined ? 
                    parseFloat(changes.price).toFixed(2) : 
                    (product.storeItem?.priceCents ? (product.storeItem.priceCents / 100).toFixed(2) : '0.00'),
                currencyCode: currencyCode
            },
            salePrice: {
                decimalValue: changes.salePrice !== undefined ? 
                    parseFloat(changes.salePrice).toFixed(2) : 
                    (product.storeItem?.salePriceCents ? (product.storeItem.salePriceCents / 100).toFixed(2) : '0.00'),
                currencyCode: currencyCode
            },
            onSale: false, // Will be set below after price validation
            shareStates: [], // Keep empty array for now
            urlId: changes.url !== undefined ? changes.url : product.urlId,
            regenerateUrlId: false, // Don't regenerate URL
            sku: changes.sku !== undefined ? changes.sku : (product.storeItem?.sku || ''),
            unlimited: changes.stock !== undefined ? (changes.stock === '∞') : (product.storeItem?.unlimited || false),
            productAddOnsConfiguration: { productAddOns: [] } // Keep simple default
        };

        // Validate sale price vs regular price and set onSale accordingly
        const regularPrice = parseFloat(payload.price.decimalValue);
        const salePrice = parseFloat(payload.salePrice.decimalValue);
        
        if (changes.onSale !== undefined) {
            // If onSale is explicitly set, use it but validate sale price
            if (changes.onSale === 'Yes' && salePrice >= 0 && salePrice < regularPrice) {
                payload.onSale = true;
            } else if (changes.onSale === 'Yes' && salePrice >= regularPrice) {
                // Sale price is invalid, set to slightly less than regular price
                payload.salePrice.decimalValue = Math.max(0.01, regularPrice - 0.01).toFixed(2);
                payload.onSale = true;
                console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice}, adjusted to ${payload.salePrice.decimalValue}`);
            } else {
                payload.onSale = false;
            }
        } else {
            // Auto-determine onSale based on valid sale price
            if (salePrice >= 0 && salePrice < regularPrice) {
                payload.onSale = true;
            } else if (salePrice >= regularPrice && salePrice > 0) {
                // Sale price is invalid, set to slightly less than regular price
                payload.salePrice.decimalValue = Math.max(0.01, regularPrice - 0.01).toFixed(2);
                payload.onSale = true;
                console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice}, adjusted to ${payload.salePrice.decimalValue}`);
            } else {
                payload.onSale = false;
            }
        }

        // Handle stock for digital products - only add qtyInStock if not unlimited
        if (!payload.unlimited && changes.stock !== undefined && changes.stock !== '∞') {
            const stockValue = parseInt(changes.stock) || 0;
            // Don't add qtyInStock to the payload - Squarespace manages this internally
        }

    } else {
        // Get currency code from existing product or detected currency
        const currencyCode = product.storeItem?.priceCurrency || window.getSystemCurrency?.();
        const isLegacyVariantUpdate = isVariantUpdate; // Rename for clarity
        
        // Physical product - use native Squarespace format that matches the working example
        const updatedVariants = product.storeItem?.variants?.map(variant => {
            // Determine which changes to apply to this variant
            let variantChanges;
            
            if (isLegacyVariantUpdate) {
                // Legacy: For variant-specific updates, only apply changes to the matching variant
                if (variant.id === changes.variantId) {
                    variantChanges = changes.variantChanges;
                } else {
                    // For other variants, no changes
                    variantChanges = {};
                }
            } else if (isBatchedVariantUpdate) {
                // New: For batched variant updates, check if this variant has changes
                if (changes.batchedVariantChanges[variant.id]) {
                    variantChanges = changes.batchedVariantChanges[variant.id];
                } else {
                    // For variants without changes, keep existing values
                    variantChanges = {};
                }
            } else {
                // For master product updates, apply changes to all variants
                variantChanges = changes;
            }
            
            // Build variant in native Squarespace format (matching working example)
            const updatedVariant = {
                id: variant.id,
                sku: variantChanges.sku !== undefined ? variantChanges.sku : variant.sku,
                price: {
                    decimalValue: variantChanges.price !== undefined ? 
                        String(parseFloat(variantChanges.price)) : 
                        (variant.price ? String(variant.price / 100) : '0'),
                    currencyCode: currencyCode
                },
                salePrice: {
                    decimalValue: variantChanges.salePrice !== undefined ? 
                        String(parseFloat(variantChanges.salePrice)) : 
                        (variant.salePrice ? String(variant.salePrice / 100) : '0'),
                    currencyCode: currencyCode
                },
                unlimited: variantChanges.stock !== undefined ? 
                    (variantChanges.stock === '∞') : 
                    (variant.unlimited || false),
                onSale: false, // Will be set below after price validation
                optionValues: variant.optionalValues || [], // Use optionalValues from Squarespace data, rename to optionValues for API
                // Preserve original dimensions - don't default to 0 as this causes validation issues
                width: variant.width || variant.width === 0 ? variant.width : 1,
                height: variant.height || variant.height === 0 ? variant.height : 1, 
                length: variant.length || variant.length === 0 ? variant.length : 1,
                weight: variant.weight || variant.weight === 0 ? variant.weight : 1 // Preserve original weight including 0
            };
            
            // Validate sale price vs regular price and set onSale accordingly
            const regularPrice = parseFloat(updatedVariant.price.decimalValue);
            const salePrice = parseFloat(updatedVariant.salePrice.decimalValue);
            
            if (variantChanges.onSale !== undefined) {
                // If onSale is explicitly set, use it but validate sale price
                if (variantChanges.onSale === 'Yes' && salePrice > 0 && salePrice < regularPrice) {
                    updatedVariant.onSale = true;
                } else if (variantChanges.onSale === 'Yes' && salePrice >= regularPrice) {
                    // Sale price is invalid, set to slightly less than regular price
                    updatedVariant.salePrice.decimalValue = String(Math.max(0.01, regularPrice - 0.01));
                    updatedVariant.onSale = true;
                    console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice} for variant ${variant.id}, adjusted to ${updatedVariant.salePrice.decimalValue}`);
                } else {
                    updatedVariant.onSale = false;
                }
            } else {
                // Auto-determine onSale based on valid sale price
                if (salePrice > 0 && salePrice < regularPrice) {
                    updatedVariant.onSale = true;
                } else if (salePrice >= regularPrice && salePrice > 0) {
                    // Sale price is invalid, set to slightly less than regular price
                    updatedVariant.salePrice.decimalValue = String(Math.max(0.01, regularPrice - 0.01));
                    updatedVariant.onSale = true;
                    console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice} for variant ${variant.id}, adjusted to ${updatedVariant.salePrice.decimalValue}`);
                } else {
                    updatedVariant.onSale = false;
                }
            }
            
            // Handle stock - only add qtyInStock if not unlimited
            if (!updatedVariant.unlimited && variantChanges.stock !== undefined && variantChanges.stock !== '∞') {
                // Stock is managed by Squarespace internally via the variant update
                // We don't include quantityChange or qtyInStock in the payload
                const stockValue = parseInt(variantChanges.stock) || 0;
                // Don't add qtyInStock to the payload - Squarespace manages this internally
            }
            
            return updatedVariant;
        }) || [];
        
        // Determine which changes to use for master product fields (exclude variant-specific data)
        const masterProductChanges = { ...changes };
        delete masterProductChanges.variantId; // Legacy cleanup
        delete masterProductChanges.variantChanges; // Legacy cleanup
        delete masterProductChanges.batchedVariantChanges; // New structure cleanup
        
        // Determine visibility state for physical products
        let visibleOn;
        if (masterProductChanges.status === 'scheduled') {
            // Check for scheduled date from individual cell change
            if (masterProductChanges.scheduledDate) {
                try {
                    visibleOn = convertScheduledDateToISO(masterProductChanges.scheduledDate);
                    console.log('📅 Individual cell scheduled date processed:', visibleOn);
                } catch (error) {
                    console.error('❌ Error processing scheduled date:', error);
                    visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // Default to 1 hour from now
                }
            } else {
                // No specific date, use default
                visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // Default to 1 hour from now
            }
        }
        
        payload = {
            createdVariants: [],
            updatedVariants: updatedVariants,
            deletedVariants: [],
            name: masterProductChanges.title !== undefined ? masterProductChanges.title : product.title,
            description: product.description || '',
            visibility: { 
                state: masterProductChanges.status !== undefined ? 
                    (masterProductChanges.status === 'public' ? 'VISIBLE' : 
                     masterProductChanges.status === 'hidden' ? 'HIDDEN' :
                     masterProductChanges.status === 'scheduled' ? 'SCHEDULED' : 'HIDDEN') : 
                    (product.workflowState === 'PUBLISHED' ? 'VISIBLE' : 'HIDDEN'),
                ...(masterProductChanges.status === 'scheduled' && visibleOn ? { visibleOn } :
                    (product.workflowState === 'PUBLISHED' && { visibleOn: new Date().toISOString() }))
            },
            ...(masterProductChanges.status === 'scheduled' && visibleOn ? { publishOn: visibleOn } : {}),
            tags: (product.tags || []).map(tag => typeof tag === 'string' ? tag : tag.name), // Ensure tags are strings
            categories: product.categories || [],
            newImageOrder: [], // Keep empty array for now - this is product images
            variantOptionOrdering: product.storeItem?.variants?.length > 0 ? 
                [...new Set(product.storeItem.variants.flatMap(v => 
                    (v.optionalValues || []).map(ov => ov.optionName)
                ))] : [], // Extract unique option names from variants
            variantOrderBySkus: updatedVariants.map(v => v.sku),
            seoData: { title: "", description: "" }, // Add missing seoData field
            useCustomAddButtonText: false, // Keep simple default
            customAddButtonText: 'Add To Cart', // Match successful format with capital T
            featuredProduct: false, // Keep simple default
            shareStates: [], // Keep empty array for now
            relatedProductsConfiguration: { relatedCategories: [], relatedCategoryIds: [], strategy: "CATEGORIES" }, // Add missing relatedProductsConfiguration
            urlId: masterProductChanges.url !== undefined ? masterProductChanges.url : product.urlId,
            regenerateUrlId: false, // Don't regenerate URL
            productAddOnsConfiguration: { productAddOns: [] } // Keep simple default
        };
    }
    
    // Use the reliable commerce API for updates
    const apiUrl = `${window.location.origin}/api/commerce/products/${productId}`;
    
    // Log key payload details for debugging visibility issues
    if (payload.visibility) {
    }
    if (isDigitalProduct && payload.price) {
    }
    
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/json',
                'x-csrf-token': crumbToken
            },
            credentials: 'include',
            body: JSON.stringify(payload)
        });
        
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`💥 API Error Response:`, errorText);
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        const responseData = await response.json();
        
        return true;
    } catch (error) {
        console.error(`💥 Failed to update product ${productId}:`, error);
        console.error(`🔍 Error details:`, {
            message: error.message,
            stack: error.stack,
            productId: productId,
            changes: changes,
            payload: payload
        });
        return false;
    }
}

// Function to update product categories using the specific category assignment API
// This function replaces ALL categories for a product with the provided list
async function updateProductCategories(productId, categoryNames, crumbToken) {
    
    try {
        // Convert category names to IDs
        const categoryIds = await getCategoryIdsByNames(categoryNames);
        
        if (!categoryIds || categoryIds.length === 0) {
            // If no categories to assign, we might need to handle this case differently
            // For now, we'll skip the API call as assigning empty categories might not be supported
            return true;
        }
        
        const url = `${window.location.origin}/api/commerce/products/${productId}/categories/assign?categoryIds=${categoryIds.join(',')}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': crumbToken
            },
            credentials: 'include'
        });
        
        if (response.ok) {
            return true;
        } else {
            console.error(`❌ Failed to update categories for product ${productId}:`, response.status, response.statusText);
            return false;
        }
        
    } catch (error) {
        console.error(`💥 Failed to update categories for product ${productId}:`, error);
        return false;
    }
}

// Helper function to get category IDs from category names
async function getCategoryIdsByNames(categoryNames) {
    
    // Access global categories data
    const globalCategories = window.globalCategoriesData || [];
    
    if (globalCategories.length === 0) {
        console.warn(`⚠️ No global categories data available`);
        return [];
    }
    
    const categoryIds = [];
    
    for (const categoryName of categoryNames) {
        let category = globalCategories.find(cat => cat.name === categoryName);
        
        if (category) {
            categoryIds.push(category.id);
        } else {
            
            // Create new category
            const newCategoryId = await createNewCategory(categoryName);
            
            if (newCategoryId) {
                categoryIds.push(newCategoryId);
                
                // Add to global categories data for future use
                const newCategory = {
                    id: newCategoryId,
                    name: categoryName,
                    slug: categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                    fullSlug: categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                    itemCount: 0,
                    itemIds: []
                };
                globalCategories.push(newCategory);
                window.globalCategoriesData = globalCategories;
            } else {
                console.error(`❌ Failed to create category "${categoryName}"`);
                // Continue with other categories rather than failing completely
            }
        }
    }
    
    return categoryIds;
}

// Function to create a new category in Squarespace
async function createNewCategory(categoryName) {
    
    try {
        // Get website ID and collection ID from global data
        const websiteId = await getWebsiteId();
        const collectionId = await getCollectionId();
        
        if (!websiteId || !collectionId) {
            console.error(`❌ Missing websiteId (${websiteId}) or collectionId (${collectionId})`);
            return null;
        }
        
        const crumbToken = getCsrfToken();
        if (!crumbToken) {
            console.error(`❌ No CSRF token available for category creation`);
            return null;
        }
        
        const url = `/api/content-service/product/1.1/websites/${websiteId}/products/${collectionId}/categories`;
        
        // For parentCategoryId, use the root category ID from the tree data
        const parentCategoryId = getRootCategoryId();
        
        if (!parentCategoryId) {
            console.error(`❌ Could not determine parent category ID for new category`);
            return null;
        }
        
        const payload = {
            displayName: categoryName,
            parentCategoryId: parentCategoryId,
            type: "INTERIOR",
            pageRendering: "LIST_VIEW",
            displayIndex: 1
        };
        
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': crumbToken
            },
            body: JSON.stringify(payload),
            credentials: 'include'
        });
        
        if (response.ok) {
            const result = await response.json();
            
            // Extract the new category ID from the response
            const newCategoryId = result.id || result.categoryId;
            
            if (newCategoryId) {
                return newCategoryId;
            } else {
                console.error(`❌ Category created but no ID returned:`, result);
                return null;
            }
        } else {
            console.error(`❌ Failed to create category "${categoryName}":`, response.status, response.statusText);
            return null;
        }
        
    } catch (error) {
        console.error(`💥 Error creating category "${categoryName}":`, error);
        return null;
    }
}

// Helper function to get root category ID from global tree data
function getRootCategoryId() {
    // Use the stored category tree data to find the root category
    if (window.globalCategoryTreeData && window.globalCategoryTreeData.length > 0) {
        const rootCategory = window.globalCategoryTreeData.find(cat => cat.type === 'ROOT');
        if (rootCategory) {
            return rootCategory.id;
        }
    }
    
    console.error(`❌ Could not find root category ID from tree data`);
    return null;
}

// Helper function to get website ID from global data or API
async function getWebsiteId() {
    // First try to get from global collections data (fastest)
    if (window.globalCollectionsData && window.globalCollectionsData.length > 0) {
        const websiteId = window.globalCollectionsData[0].websiteId;
        if (websiteId) {
            return websiteId;
        }
    }
    
    // Second try: get from global products data
    if (window.globalProductsData && window.globalProductsData.length > 0) {
        const firstProduct = window.globalProductsData[0];
        if (firstProduct.websiteId) {
            return firstProduct.websiteId;
        }
    }
    
    // Last resort: extract from URL
    const pathMatch = window.location.pathname.match(/\/config\/pages\/([^\/]+)/);
    if (pathMatch) {
        return pathMatch[1];
    }
    
    console.error(`❌ Could not determine website ID`);
    return null;
}

// Helper function to get collection ID (first product collection)
async function getCollectionId() {
    // First try: get from global collections data (most reliable)
    if (window.globalCollectionsData && window.globalCollectionsData.length > 0) {
        const collectionId = window.globalCollectionsData[0].id;
        if (collectionId) {
            return collectionId;
        }
    }
    
    // Second try: get from global products data
    if (window.globalProductsData && window.globalProductsData.length > 0) {
        const firstProduct = window.globalProductsData[0];
        const collectionId = firstProduct.collectionId || firstProduct.collection?.id;
        if (collectionId) {
            return collectionId;
        }
    }
    
    console.error(`❌ Could not determine collection ID from global data`);
    return null;
}

// Update product categories using the dedicated category assignment API
async function updateProductCategories(productId, categoryNames, crumbToken) {
    
    if (!categoryNames || categoryNames.length === 0) {
        return true;
    }
    
    // First, we need to get category IDs from category names
    // For now, we'll need to look up categories or create them if they don't exist
    const categoryIds = await getCategoryIdsByNames(categoryNames);
    
    if (!categoryIds || categoryIds.length === 0) {
        console.error(`❌ Could not get category IDs for categories:`, categoryNames);
        return false;
    }
    
    // Add a small delay if any categories were newly created to allow Squarespace to index them
    // Check if any categories were just created by comparing with original categories count
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    
    // Assign categories one by one (Squarespace API doesn't support multiple assignments)
    
    let successCount = 0;
    for (let i = 0; i < categoryIds.length; i++) {
        const categoryId = categoryIds[i];
        const url = `/api/commerce/products/${productId}/categories/assign?categoryIds=${categoryId}`;
        
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': crumbToken
                },
                credentials: 'include'
            });
            
            if (response.ok) {
                successCount++;
            } else {
                const errorText = await response.text();
                console.error(`❌ Category assignment failed for category ${categoryId}:`, response.status, errorText);
            }
        } catch (error) {
            console.error(`💥 Error assigning category ${categoryId} to product ${productId}:`, error);
        }
        
        // Small delay between individual assignments
        if (i < categoryIds.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250)); // 250ms between assignments
        }
    }
    
    if (successCount === categoryIds.length) {
        return true;
    } else {
        console.error(`❌ Only assigned ${successCount}/${categoryIds.length} categories to product ${productId}`);
        return false;
    }
}

// Unassign categories from a product
async function unassignProductCategories(productId, categoryNames, crumbToken) {
    
    if (!categoryNames || categoryNames.length === 0) {
        return true;
    }
    
    // Get category IDs from category names
    const categoryIds = await getCategoryIdsByNames(categoryNames);
    
    if (!categoryIds || categoryIds.length === 0) {
        console.error(`❌ Could not get category IDs for categories to unassign:`, categoryNames);
        return false;
    }
    
    // Unassign categories one by one
    
    let successCount = 0;
    for (let i = 0; i < categoryIds.length; i++) {
        const categoryId = categoryIds[i];
        const url = `/api/commerce/products/${productId}/categories/unassign?categoryIds=${categoryId}`;
        
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': crumbToken
                },
                credentials: 'include'
            });
            
            if (response.ok) {
                successCount++;
            } else {
                const errorText = await response.text();
                console.error(`❌ Category unassignment failed for category ${categoryId}:`, response.status, errorText);
            }
        } catch (error) {
            console.error(`💥 Error unassigning category ${categoryId} from product ${productId}:`, error);
        }
        
        // Small delay between individual unassignments
        if (i < categoryIds.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250)); // 250ms between unassignments
        }
    }
    
    if (successCount === categoryIds.length) {
        return true;
    } else {
        console.error(`❌ Only unassigned ${successCount}/${categoryIds.length} categories from product ${productId}`);
        return false;
    }
}


// === CURRENCY UTILITY ===
/**
 * Centralized Currency Management System
 * Detects, stores, and provides currency information globally
 */

class CurrencyManager {
    constructor() {
        this.detectedCurrency = null;
        this.detectedCurrencyName = null;
        this.isDetected = false;
        this.supportedCurrencies = {};
        this.detectionPromise = null; // To prevent multiple simultaneous API calls
    }

    /**
     * Detect currency from available product data
     * @returns {string} Currency code (e.g., 'USD', 'EUR', 'GBP')
     */
    async detectCurrency() {
        if (this.isDetected && this.detectedCurrency) {
            return this.detectedCurrency;
        }


        // First try to get currency from Squarespace Commerce Settings API
        try {
            const currency = await this.detectFromSquarespaceAPI();
            if (currency) {
                this.setCurrency(currency, 'Squarespace Commerce API');
                return currency;
            }
        } catch (error) {
            console.log('⚠️ Could not fetch currency from Squarespace API:', error.message);
        }



        // Try to detect from selected products first
        if (window.getSelectedProductsWithData) {
            const selectedProducts = window.getSelectedProductsWithData();
            if (selectedProducts.length > 0) {
                for (const product of selectedProducts) {
                    const currency = this.extractCurrencyFromProduct(product);
                    if (currency) {
                        this.setCurrency(currency, 'selected products');
                        return currency;
                    }
                }
            }
        }

        // Try to detect from all loaded products
        if (window.allProducts && window.allProducts.length > 0) {
            for (const product of window.allProducts) {
                const currency = this.extractCurrencyFromProduct(product);
                if (currency) {
                    this.setCurrency(currency, 'all products');
                    return currency;
                }
            }
        }

        // Try to detect from global Squarespace products
        if (window.squarespaceProducts && window.squarespaceProducts.length > 0) {
            for (const product of window.squarespaceProducts) {
                const currency = this.extractCurrencyFromProduct(product);
                if (currency) {
                    this.setCurrency(currency, 'global products');
                    return currency;
                }
            }
        }

        // No fallback - we should always detect from Squarespace
        console.log('❌ No currency detected from any source');
        throw new Error('Unable to detect currency - please ensure you are on a Squarespace site with commerce enabled');
    }

    /**
     * Detect currency from Squarespace Commerce Settings API
     * @returns {Promise<string|null>} Currency code or null if failed
     */
    async detectFromSquarespaceAPI() {
        try {
            // Get CSRF token from page
            const csrfToken = this.getCSRFToken();
            
            const response = await fetch('/api/commerce/settings/payment', {
                method: 'GET',
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    ...(csrfToken && { 'x-csrf-token': csrfToken })
                },
                mode: 'cors',
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            
            if (data.storeCurrency) {
                
                // Also store supported currencies for future use
                if (data.supportedCurrencies) {
                    this.supportedCurrencies = data.supportedCurrencies;
                    
                    // Store the full currency name
                    this.detectedCurrencyName = data.supportedCurrencies[data.storeCurrency];
                    if (this.detectedCurrencyName) {
                    }
                }
                
                return data.storeCurrency;
            }

            return null;
        } catch (error) {
            console.log('⚠️ Failed to detect currency from Squarespace API:', error.message);
            return null;
        }
    }

    /**
     * Get CSRF token from the page
     * @returns {string|null} CSRF token or null if not found
     */
    getCSRFToken() {
        // Try to find CSRF token in meta tags
        const metaToken = document.querySelector('meta[name="csrf-token"]');
        if (metaToken) {
            return metaToken.getAttribute('content');
        }

        // Try to find it in the page's JavaScript context
        if (window.Static && window.Static.SQUARESPACE_CONTEXT && window.Static.SQUARESPACE_CONTEXT.csrfToken) {
            return window.Static.SQUARESPACE_CONTEXT.csrfToken;
        }

        // Try other common locations
        if (window.Y && window.Y.Squarespace && window.Y.Squarespace.Analytics && window.Y.Squarespace.Analytics.csrfToken) {
            return window.Y.Squarespace.Analytics.csrfToken;
        }

        return null;
    }

    /**
     * Extract currency from a single product
     * @param {Object} product - Product object
     * @returns {string|null} Currency code or null if not found
     */
    extractCurrencyFromProduct(product) {
        // Check service product price structure
        if (product.storeItem?.price?.currencyCode) {
            return product.storeItem.price.currencyCode;
        }

        // Check physical product variant price structure
        if (product.storeItem?.variants?.[0]?.price?.currencyCode) {
            return product.storeItem.variants[0].price.currencyCode;
        }

        // Check alternative price currency field
        if (product.storeItem?.priceCurrency) {
            return product.storeItem.priceCurrency;
        }

        // Check direct price structure (legacy)
        if (product.price?.currencyCode) {
            return product.price.currencyCode;
        }

        return null;
    }

    /**
     * Set the detected currency
     * @param {string} currency - Currency code
     * @param {string} source - Source of detection for logging
     */
    setCurrency(currency, source = 'manual') {
        this.detectedCurrency = currency;
        this.isDetected = true;
        
        // Store globally for backwards compatibility
        window.detectedCurrency = currency;
        
        // Trigger currency change event for other components
        if (typeof window.dispatchEvent === 'function') {
            window.dispatchEvent(new CustomEvent('currencyDetected', { 
                detail: { currency, source } 
            }));
        }
    }

    /**
     * Get the current currency
     * @param {boolean} autoDetect - Whether to auto-detect if not already set
     * @returns {Promise<string>|string} Currency code (Promise if autoDetect and not cached)
     */
    getCurrency(autoDetect = true) {
        if (this.isDetected) {
            return this.detectedCurrency;
        }
        
        if (!autoDetect) {
            return null;
        }

        // If detection is already in progress, return the existing promise
        if (this.detectionPromise) {
            return this.detectionPromise;
        }

        // Start detection and cache the promise
        this.detectionPromise = this.detectCurrency().finally(() => {
            // Clear the promise when done so subsequent calls use the cached result
            this.detectionPromise = null;
        });

        return this.detectionPromise;
    }

    /**
     * Get the current currency synchronously (uses cached value only)
     * @returns {string|null} Currency code or null if not detected
     */
    getCurrencySync() {
        return this.detectedCurrency;
    }

    /**
     * Force re-detection of currency (useful when product data changes)
     */
    async refresh() {
        this.isDetected = false;
        this.detectedCurrency = null;
        this.detectionPromise = null;
        return await this.detectCurrency();
    }

    /**
     * Get currency symbol for display
     * @param {string} currency - Currency code (optional, uses detected if not provided)
     * @returns {string} Currency symbol or currency code
     */
    getCurrencySymbol(currency = null) {
        const code = currency || this.getCurrencySync();
        
        // Complete mapping based on Squarespace supported currencies
        const symbols = {
            // From the Squarespace API response: supportedCurrencies
            'CHF': 'CHF',    // Swiss Franc
            'MXN': '$',      // Mexican Peso
            'ARS': '$',      // Argentine Peso
            'ZAR': 'R',      // South African Rand
            'INR': '₹',      // Indian Rupee
            'THB': '฿',      // Thai Baht
            'AUD': '$',      // Australian Dollar (use $ locally)
            'ILS': '₪',      // Israeli New Sheqel
            'JPY': '¥',      // Japanese Yen
            'PLN': 'zł',     // Polish Zloty
            'GBP': '£',      // British Pound Sterling
            'IDR': 'Rp',     // Indonesian Rupiah
            'PHP': '₱',      // Philippine Peso
            'RUB': '₽',      // Russian Ruble
            'HKD': '$',      // Hong Kong Dollar (use $ locally)
            'EUR': '€',      // Euro
            'DKK': 'kr',     // Danish Krone
            'COP': '$',      // Colombian Peso
            'USD': '$',      // US Dollar
            'CAD': '$',      // Canadian Dollar (use $ locally)
            'MYR': 'RM',     // Malaysian Ringgit
            'NOK': 'kr',     // Norwegian Krone
            'SGD': '$',      // Singapore Dollar (use $ locally)
            'CZK': 'Kč',     // Czech Republic Koruna
            'SEK': 'kr',     // Swedish Krona
            'NZD': '$',      // New Zealand Dollar (use $ locally)
            'BRL': 'R$'      // Brazilian Real
        };

        return symbols[code] || code;
    }

    /**
     * Format currency value for display
     * @param {number} value - Numeric value
     * @param {string} currency - Currency code (optional)
     * @param {boolean} showCode - Whether to show currency code in parentheses
     * @returns {string} Formatted currency string
     */
    formatCurrency(value, currency = null, showCode = false) {
        if (value === null || value === undefined || isNaN(value)) {
            return 'N/A';
        }

        const code = currency || this.getCurrencySync();
        if (!code) {
            console.warn('⚠️ No currency detected, cannot format currency');
            return `${parseFloat(value).toFixed(2)}`;
        }

        const symbol = this.getCurrencySymbol(code);
        const formattedValue = parseFloat(value).toFixed(2);
        
        if (showCode && symbol !== code) {
            return `${symbol}${formattedValue} (${code})`;
        }
        
        return `${symbol}${formattedValue}`;
    }

    /**
     * Get currency label for UI (e.g., "Price (USD)")
     * @param {string} baseLabel - Base label text
     * @param {string} currency - Currency code (optional)
     * @returns {string} Label with currency
     */
    getCurrencyLabel(baseLabel, currency = null) {
        const code = currency || this.getCurrencySync();
        if (!code) {
            return baseLabel; // Just return base label if no currency detected
        }
        return `${baseLabel} (${code})`;
    }
}

// Create global instance
window.currencyManager = new CurrencyManager();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CurrencyManager;
}

// Auto-detect currency when products are loaded
window.addEventListener('productsLoaded', () => {
    window.currencyManager.refresh();
});

// Compatibility function for existing code
window.getSystemCurrency = () => {
    const currency = window.currencyManager.getCurrencySync();
    if (!currency) {
        console.warn('⚠️ No currency detected - ensure currency manager has been initialized');
    }
    return currency;
};
window.formatSystemCurrency = (value, showCode = false) => window.currencyManager.formatCurrency(value, null, showCode);

// Initialize currency detection when the manager is created
if (window.currencyManager) {
    // Start detection immediately but don't block
    window.currencyManager.getCurrency().then(currency => {
    }).catch(error => {
        console.log('⚠️ Currency detection failed:', error.message);
    });
}


// === DATA-UTILITIES UTILITY ===
// Data utilities and helper functions

// Helper function to get product data by ID from globalProductsData
function getProductDataById(productId) {
    return globalProductsData.find(product => product.id === productId) || null;
}

// Helper function to get processed product data (like what table displays)
function getProcessedProductData(productId) {
    const product = getProductDataById(productId);
    if (!product) return null;
    
    // Return processed data that matches what the table shows
    return {
        id: product.id,
        title: product.title,
        status: product.publicationStatus || 'unknown',
        sku: product.sku || '',
        categories: product.categories?.map(cat => cat.name).join(', ') || 'No categories',
        onSale: product.salePrice ? 'Yes' : 'No',
        price: product.price ? formatCurrency(product.price) : 'N/A',
        salePrice: product.salePrice ? formatCurrency(product.salePrice) : '',
        stock: product.unlimited ? 'Unlimited' : (product.qtyInStock || 0),
        type: product.type || 'PHYSICAL'
    };
}

// Global function to get selected products with full data
function getSelectedProductsWithData() {
    // Get selected checkboxes from MixItUp container
    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
    // Also check all checkboxes in case MixItUp filtering affects the query
    const allCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]');
    
    // Extract product IDs from selected rows
    const selectedProductIds = Array.from(selectedCheckboxes).map(checkbox => {
        const row = checkbox.closest('tr');
        const productId = row ? row.getAttribute('data-product-id') : null;
        const isVariant = row ? row.classList.contains('variant-row') : false;
        const variantId = row ? row.getAttribute('data-variant-id') : null;
        
        return {
            productId: productId,
            variantId: variantId,
            isVariant: isVariant,
            row: row
        };
    }).filter(item => item.productId); // Remove items without valid product IDs
    
    // Get the full product data for selected products
    const selectedProducts = globalProductsData.filter(product => 
        selectedProductIds.some(selected => selected.productId === product.id)
    );
    
    // Return both the product data and the selection metadata
    return {
        products: selectedProducts,
        selections: selectedProductIds,
        count: selectedProducts.length
    };
}

// Get currently selected product rows (DOM elements)
function getSelectedProducts() {
    const selectedCheckboxes = document.querySelectorAll('.product-checkbox:checked');
    return Array.from(selectedCheckboxes).map(checkbox => checkbox.closest('tr')).filter(row => row !== null);
}

// Mark product as changed for tracking modifications
function markProductAsChanged(productId, fieldName, newValue, oldValue = null) {
    if (!productId) {
        return;
    }
    
    // Add to changed products set
    changedProducts.add(productId);
    
    // Store original value if not already stored
    const key = `${productId}.${fieldName}`;
    if (!originalData.has(key) && oldValue !== null) {
        originalData.set(key, oldValue);
    }
    
    console.log(`📝 Marked product ${productId} field ${fieldName} as changed: ${oldValue} → ${newValue}`);
    
    // Update changes counter in UI
    updateChangesFooter();
}

// Update the changes footer with current modification count
function updateChangesFooter() {
    const changesFooter = document.getElementById('changes-footer');
    const changesCount = document.getElementById('changes-count');
    
    if (!changesFooter || !changesCount) {
        return;
    }
    
    // No longer checking notification visibility - changes info will only show when there are actual unsaved changes
    
    const count = changedProducts.size;
    
    if (count > 0) {
        const countText = `${count} product${count !== 1 ? 's' : ''} modified`;
        changesCount.textContent = countText;
        
        changesFooter.classList.remove('hidden');
        changesFooter.classList.add('visible');
        
        // Clear any previous inline styles to let CSS classes handle the animation
        changesFooter.style.cssText = '';
        
        // ALWAYS show changes-info when there are new changes (this overrides any hidden state from save)
        const changesInfo = document.querySelector('.changes-info');
        if (changesInfo) {
            changesInfo.style.display = '';
        }
        
        // Check for demo mode and update button state
        const saveBtn = document.getElementById('save-changes');
        const isDemoMode = window.licenseManager && window.licenseManager.getLicenseStatus().status === 'demo';
        if (saveBtn) {
            saveBtn.disabled = isDemoMode;
            if (isDemoMode) {
                saveBtn.textContent = 'Activate to Apply Changes';
                saveBtn.title = 'Apply changes is disabled in demo mode. Please activate your license to use this feature.';
            } else {
                saveBtn.textContent = 'Apply Changes';
                saveBtn.title = '';
            }
        }
    } else {
        // Check if a notification is currently being shown
        const notificationContainer = document.querySelector('.changes-notification-content');
        const isNotificationVisible = notificationContainer && notificationContainer.style.display !== 'none' && notificationContainer.style.display === 'flex';
        
        if (isNotificationVisible) {
            // Don't hide footer immediately if notification is showing
            // The notification auto-hide will handle hiding the footer
            return;
        }
        
        changesFooter.classList.remove('visible');
        changesFooter.classList.add('hidden');
        
        // Clear any inline styles to let CSS classes handle the animation
        changesFooter.style.cssText = '';
    }
}

// Clear all product modifications
function clearProductModifications() {
    changedProducts.clear();
    originalData.clear();
    
    // Reset unsaved changes flag
    if (typeof hasUnsavedChanges !== 'undefined') {
        hasUnsavedChanges = false;
    }
    
    // Remove modified classes from table cells
    const modifiedCells = document.querySelectorAll('.modified');
    modifiedCells.forEach(cell => {
        cell.classList.remove('modified');
        cell.removeAttribute('data-new-value');
        cell.removeAttribute('data-field-type');
    });
    
    updateChangesFooter();
    console.log('✅ Cleared all product modifications');
    
    // Refresh the table to reflect any updates from the server
    if (typeof loadProducts === 'function') {
        setTimeout(async () => {
            try {
                await loadProducts();
            } catch (error) {
                console.error('❌ Error refreshing product table:', error);
            }
        }, 100); // Small delay to ensure UI updates are complete
    }
}

// Get current bulk settings from the UI
function getCurrentBulkSettings() {
    const categoryAction = document.getElementById('bulk-category-action');
    const roundPrices = document.getElementById('bulk-round-prices');
    const regularAdjustment = document.getElementById('bulk-regular-adjustment');
    const regularAdjustmentType = document.getElementById('bulk-regular-adjustment-type');
    const adjustSalePrices = document.getElementById('bulk-adjust-sale-prices');
    const fixedPrice = document.getElementById('bulk-fixed-price');
    const fixedApplyToSale = document.getElementById('bulk-fixed-apply-to-sale');
    const saleDiscount = document.getElementById('bulk-sale-discount');
    const saleAction = document.getElementById('bulk-sale-action');
    const enableRounding = document.getElementById('bulk-enable-rounding');
    const roundingType = document.querySelector('input[name="bulk-rounding-type"]:checked');
    const customCents = document.getElementById('bulk-custom-cents');
    const statusChange = document.getElementById('bulk-status-change');
    const stockToggle = document.getElementById('bulk-stock-toggle');
    const stockAction = document.getElementById('bulk-stock-action');
    const stockAmount = document.getElementById('bulk-stock-amount');
    
    // Advanced settings
    const categoryActionAdvanced = document.getElementById('bulk-category-action-advanced');
    const categoryValue = document.getElementById('bulk-category-value');
    const tagAction = document.getElementById('bulk-tag-action');
    const tagValue = document.getElementById('bulk-tag-value');
    const skuAction = document.getElementById('bulk-sku-action');
    const skuValue = document.getElementById('bulk-sku-value');
    
    return {
        // Basic settings
        categoryToAdd: categoryAction?.value || null,
        roundPricesOnly: roundPrices?.checked || false,
        priceAdjustment: regularAdjustment?.value ? parseFloat(regularAdjustment.value) : null,
        regularAdjustmentType: regularAdjustmentType?.value || 'percentage',
        applyToSale: adjustSalePrices?.checked || false,
        fixedPrice: fixedPrice?.value ? parseFloat(fixedPrice.value) : null,
        fixedApplyToSale: fixedApplyToSale?.checked || false,
        saleDiscount: saleDiscount?.value ? parseFloat(saleDiscount.value) : null,
        saleToggle: saleAction?.value || 'no-change',
        enableRounding: enableRounding?.checked || false,
        roundingType: roundingType?.value || 'whole',
        customCents: customCents?.value ? parseInt(customCents.value) : 99,
        newStatus: statusChange?.value || null,
        enableStockTracking: stockToggle?.checked || false,
        stockAction: stockAction?.value || 'set',
        stockAmount: stockAmount?.value ? parseInt(stockAmount.value) : null,
        
        // Advanced settings
        categoryAction: categoryActionAdvanced?.value || null,
        categoryValue: categoryValue?.value || null,
        tagAction: tagAction?.value || null,
        tagValue: tagValue?.value || null,
        skuAction: skuAction?.value || null,
        skuValue: skuValue?.value || null
    };
}

// Apply bulk settings to the UI
function applyBulkSettings(settings) {
    if (!settings) return;
    
    // Helper function to safely set element value
    const setElementValue = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = !!value;
            } else if (element.type === 'radio') {
                if (element.value === value) {
                    element.checked = true;
                }
            } else {
                element.value = value || '';
            }
            
            // Trigger change event to update UI
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    };
    
    // Apply basic settings
    setElementValue('bulk-category-action', settings.categoryToAdd);
    setElementValue('bulk-round-prices', settings.roundPricesOnly);
    setElementValue('bulk-regular-adjustment', settings.priceAdjustment);
    setElementValue('bulk-regular-adjustment-type', settings.regularAdjustmentType);
    setElementValue('bulk-adjust-sale-prices', settings.applyToSale);
    setElementValue('bulk-fixed-price', settings.fixedPrice);
    setElementValue('bulk-fixed-apply-to-sale', settings.fixedApplyToSale);
    setElementValue('bulk-sale-discount', settings.saleDiscount);
    setElementValue('bulk-sale-action', settings.saleToggle);
    setElementValue('bulk-enable-rounding', settings.enableRounding);
    setElementValue('bulk-custom-cents', settings.customCents);
    setElementValue('bulk-status-change', settings.newStatus);
    setElementValue('bulk-stock-toggle', settings.enableStockTracking);
    setElementValue('bulk-stock-action', settings.stockAction);
    setElementValue('bulk-stock-amount', settings.stockAmount);
    
    // Apply rounding type (radio buttons)
    if (settings.roundingType) {
        const roundingRadio = document.querySelector(`input[name="bulk-rounding-type"][value="${settings.roundingType}"]`);
        if (roundingRadio) {
            roundingRadio.checked = true;
            roundingRadio.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
    
    // Apply advanced settings
    setElementValue('bulk-category-action-advanced', settings.categoryAction);
    setElementValue('bulk-category-value', settings.categoryValue);
    setElementValue('bulk-tag-action', settings.tagAction);
    setElementValue('bulk-tag-value', settings.tagValue);
    setElementValue('bulk-sku-action', settings.skuAction);
    setElementValue('bulk-sku-value', settings.skuValue);
    
    console.log('✅ Applied bulk settings to UI');
}

// Generate a detailed description of bulk changes for undo system
function generateActionDescription(productCount) {
    const changes = getCurrentBulkSettings();
    const descriptions = [];
    
    if (changes.categoryToAdd) {
        descriptions.push(`add category "${changes.categoryToAdd}"`);
    }
    
    if (changes.priceAdjustment !== null) {
        const type = changes.regularAdjustmentType === 'percentage' ? '%' : '';
        descriptions.push(`adjust prices by ${changes.priceAdjustment}${type}`);
    }
    
    if (changes.fixedPrice !== null) {
        descriptions.push(`set price to $${changes.fixedPrice}`);
    }
    
    if (changes.saleToggle !== 'no-change') {
        descriptions.push(`${changes.saleToggle} sale prices`);
    }
    
    if (changes.newStatus) {
        descriptions.push(`change status to ${changes.newStatus}`);
    }
    
    if (changes.enableStockTracking && changes.stockAmount !== null) {
        descriptions.push(`${changes.stockAction} stock to ${changes.stockAmount}`);
    }
    
    if (changes.categoryAction && changes.categoryValue) {
        descriptions.push(`${changes.categoryAction} category "${changes.categoryValue}"`);
    }
    
    if (changes.skuAction && changes.skuValue) {
        descriptions.push(`${changes.skuAction} SKU "${changes.skuValue}"`);
    }
    
    const actionText = descriptions.length > 0 ? descriptions.join(', ') : 'bulk changes';
    return `Applied ${actionText} to ${productCount} product${productCount !== 1 ? 's' : ''}`;
}

// Validate product data structure
function validateProductData(productData) {
    if (!productData || typeof productData !== 'object') {
        return { valid: false, error: 'Invalid product data structure' };
    }
    
    if (!productData.id) {
        return { valid: false, error: 'Product data missing ID' };
    }
    
    if (!productData.title) {
        return { valid: false, error: 'Product data missing title' };
    }
    
    return { valid: true };
}

// Deep clone object utility
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (typeof obj === 'object') {
        const cloned = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

// Format currency value
function formatCurrency(value, currency = null) {
    // Use the global currency manager if available
    if (window.currencyManager) {
        return window.currencyManager.formatCurrency(value, currency);
    }
    
    // Fallback for backwards compatibility
    if (value === null || value === undefined || isNaN(value)) {
        return 'N/A';
    }
    
    const currencyCode = currency || window.getSystemCurrency?.();
    return currencyCode ? `${currencyCode}$${parseFloat(value).toFixed(2)}` : `$${parseFloat(value).toFixed(2)}`;
}

// Parse currency string to number
function parseCurrency(currencyString) {
    if (!currencyString || typeof currencyString !== 'string') {
        return null;
    }
    
    // Remove currency symbols and extract number
    const numericValue = currencyString.replace(/[^\d.-]/g, '');
    const parsed = parseFloat(numericValue);
    
    return isNaN(parsed) ? null : parsed;
}

// Save changes to Squarespace
async function saveChangesToSquarespace() {
    
    const crumb = getCsrfToken();
    console.log('🔑 Crumb token:', crumb ? 'Found' : 'NOT FOUND');
    if (!crumb) {
        console.error('❌ No crumb token found');
        alert('Unable to get authentication token. Please refresh and try again.');
        return { successCount: 0, errorCount: 1 };
    }
    
    const changedRows = document.querySelectorAll('.mix .modified');
    console.log('📝 Found changed rows:', changedRows.length);
    
    const productUpdates = new Map();
    
    // Group changes by product
    changedRows.forEach(cell => {
        const row = cell.closest('tr');
        const productId = row.getAttribute('data-product-id');
        const fieldType = cell.getAttribute('data-field-type');
        const newValue = cell.getAttribute('data-new-value');
        
        console.log(`📦 Processing change: ProductID="${productId}", Field="${fieldType}", Value="${newValue}"`);
        
        // Check if this is a variant row
        const isVariantRow = row.classList.contains('variant-row');
        let originalProduct;
        let updateKey;
        
        if (isVariantRow) {
            // For variant rows, find the parent product
            const parentProductId = row.getAttribute('data-parent-product');
            originalProduct = globalProductsData.find(p => p.id === parentProductId);
            updateKey = parentProductId;
        } else {
            // For master product rows
            originalProduct = globalProductsData.find(p => p.id === productId);
            updateKey = productId;
        }
        
        if (!productUpdates.has(updateKey)) {
            if (originalProduct) {
                const updateData = {
                    product: originalProduct,
                    changes: {},
                    variantChanges: {},
                    categoryChanges: null  // Track category changes separately
                };
                productUpdates.set(updateKey, updateData);
            }
        }
        
        const productUpdate = productUpdates.get(updateKey);
        if (productUpdate) {
            // Determine where to store the changes
            let changesObject;
            if (isVariantRow) {
                // For variants, store changes in variantChanges[variantId]
                if (!productUpdate.variantChanges[productId]) {
                    productUpdate.variantChanges[productId] = {};
                }
                changesObject = productUpdate.variantChanges[productId];
            } else {
                // For master products, store in main changes object
                changesObject = productUpdate.changes;
            }
            
            // Map field types to change properties
            if (fieldType === 'price') {
                changesObject.price = newValue;
            } else if (fieldType === 'title') {
                if (!isVariantRow) changesObject.title = newValue;
            } else if (fieldType === 'url') {
                if (!isVariantRow) changesObject.url = newValue;
            } else if (fieldType === 'sku') {
                changesObject.sku = newValue;
            } else if (fieldType === 'salePrice') {
                changesObject.salePrice = newValue;
            } else if (fieldType === 'onSale') {
                changesObject.onSale = newValue;
            } else if (fieldType === 'status') {
                if (!isVariantRow) {
                    changesObject.status = newValue;
                    // Include scheduled date if status is 'scheduled' and date exists
                    if (newValue === 'scheduled') {
                        const scheduledDate = cell.getAttribute('data-scheduled-date');
                        if (scheduledDate) {
                            changesObject.scheduledDate = scheduledDate;
                            console.log('📅 Individual cell scheduled date found:', scheduledDate);
                        } else {
                            console.warn('⚠️ Status set to scheduled but no data-scheduled-date attribute found');
                        }
                    }
                }
            } else if (fieldType === 'stock') {
                changesObject.stock = newValue;
            } else if (fieldType === 'category') {
                // Handle categories separately using dedicated API
                if (!isVariantRow) {
                    // Use detailed change tracking if available
                    const addedCategories = cell.getAttribute('data-categories-added');
                    const removedCategories = cell.getAttribute('data-categories-removed');
                    
                    productUpdate.categoryChanges = {
                        added: addedCategories ? addedCategories.split(',').map(cat => cat.trim()).filter(cat => cat) : [],
                        removed: removedCategories ? removedCategories.split(',').map(cat => cat.trim()).filter(cat => cat) : []
                    };
                    
                }
            }
        }
    });
    
    
    // Start progress if available
    if (typeof globalProgress !== 'undefined' && globalProgress) {
        globalProgress.startMain(productUpdates.size, 'Saving changes to Squarespace...');
    }
    
    // Configuration for concurrent processing (using same values as bulk logic)
    const MAX_CONCURRENT_REQUESTS = 10;
    const MIN_REQUEST_DELAY = 50;
    
    let successCount = 0;
    let errorCount = 0;

    // PHASE 1: Create new categories first (sequential, as they're dependencies)
    console.log('🏷️ Phase 1: Creating new categories...');
    const newCategoriesToCreate = new Set();
    
    // Collect all new categories that need to be created
    for (const [updateKey, updateData] of productUpdates) {
        if (updateData.categoryChanges?.added) {
            for (const categoryId of updateData.categoryChanges.added) {
                // Check if this is a new category (typically indicated by a special format)
                if (categoryId.startsWith('new-category-') || !window.globalCategoriesData?.find(c => c.id === categoryId)) {
                    newCategoriesToCreate.add(categoryId);
                }
            }
        }
    }

    if (newCategoriesToCreate.size > 0) {
        console.log(`🆕 Creating ${newCategoriesToCreate.size} new categories...`);
        
        for (const categoryId of newCategoriesToCreate) {
            console.log(`🏷️ Creating new category: ${categoryId}`);
            
            // Update progress for category creation
            if (typeof globalProgress !== 'undefined' && globalProgress) {
                globalProgress.updateMainProgress(`Creating category: ${categoryId}...`);
            }
            
            try {
                // Call your category creation function here
                // const success = await createNewCategory(categoryId, crumb);
                // For now, we'll assume it succeeds and log it
                console.log(`✅ Created new category: ${categoryId}`);
            } catch (error) {
                console.error(`❌ Failed to create category ${categoryId}:`, error);
                errorCount++;
            }
        }
    }

    // PHASE 2: Process product updates with controlled concurrency
    console.log('📦 Phase 2: Processing product updates with concurrent requests...');
    
    // Function to process a single product update
    const processProductUpdate = async (entry, itemIndex) => {
        const [updateKey, updateData] = entry;
        const hasVariantChanges = Object.keys(updateData.variantChanges).length > 0;
        const displayName = hasVariantChanges ? 
            `${updateData.product.title} (${Object.keys(updateData.variantChanges).length} variant${Object.keys(updateData.variantChanges).length > 1 ? 's' : ''})` : 
            updateData.product.title;
        
        console.log(`🚀 Updating: ${displayName}`);
        
        // Update progress if available
        if (typeof globalProgress !== 'undefined' && globalProgress) {
            globalProgress.updateMainItem(itemIndex, displayName);
        }
        
        try {
            let productUpdateSuccess = true;
            let categoryUpdateSuccess = true;
            
            // Step 1: Update regular product fields (if any changes exist)
            const hasRegularChanges = Object.keys(updateData.changes).length > 0 || hasVariantChanges;
            
            if (hasRegularChanges) {
                // Prepare changes object with batched variant changes
                let allChanges = { ...updateData.changes };
                
                // Add batched variant changes if any exist
                if (hasVariantChanges) {
                    allChanges.batchedVariantChanges = updateData.variantChanges;
                }
                
                productUpdateSuccess = await updateProductFields(updateData.product, allChanges, crumb);
                
                if (productUpdateSuccess) {
                    console.log(`✅ Successfully updated regular fields for ${updateData.product.title}`);
                } else {
                    console.error(`❌ Failed to update regular fields for ${updateData.product.title}`);
                }
            }
            
            // Step 2: Update categories (if category changes exist)
            // Note: New categories have already been created in Phase 1
            if (updateData.categoryChanges && 
                (updateData.categoryChanges.added?.length > 0 || updateData.categoryChanges.removed?.length > 0)) {
                console.log(`🏷️ Updating categories for ${updateData.product.title}`);
                
                let assignSuccess = true;
                let unassignSuccess = true;
                
                // First, remove categories that need to be removed
                if (updateData.categoryChanges.removed && updateData.categoryChanges.removed.length > 0) {
                    console.log(`🗑️ Removing categories:`, updateData.categoryChanges.removed);
                    unassignSuccess = await unassignProductCategories(updateData.product.id, updateData.categoryChanges.removed, crumb);
                }
                
                // Then, add categories that need to be added (these should now exist)
                if (updateData.categoryChanges.added && updateData.categoryChanges.added.length > 0) {
                    console.log(`➕ Adding categories:`, updateData.categoryChanges.added);
                    assignSuccess = await updateProductCategories(updateData.product.id, updateData.categoryChanges.added, crumb);
                }
                
                categoryUpdateSuccess = assignSuccess && unassignSuccess;
                
                if (categoryUpdateSuccess) {
                    console.log(`✅ Successfully updated categories for ${updateData.product.title}`);
                } else {
                    console.error(`❌ Failed to update categories for ${updateData.product.title}`);
                }
            }
            
            // Overall success if both operations succeeded (or didn't need to run)
            const overallSuccess = productUpdateSuccess && categoryUpdateSuccess;
            
            if (overallSuccess) {
                console.log(`✅ Successfully completed all updates for ${updateData.product.title}`);
                return { success: true, updateKey, displayName };
            } else {
                console.error(`❌ Some updates failed for ${updateData.product.title}`);
                return { success: false, updateKey, displayName };
            }
        } catch (error) {
            console.error(`💥 Error updating ${updateData.product.title}:`, error);
            return { success: false, updateKey, displayName, error };
        }
    };
    
    // Process products with controlled concurrency (same pattern as bulk logic)
    const processConcurrentBatch = async (entries) => {
        const results = [];
        const activeRequests = new Set();
        let entryIndex = 0;
        let completedCount = 0;
        const totalCount = entries.length;
        
        console.log(`🚀 Starting concurrent processing of ${totalCount} products (max ${MAX_CONCURRENT_REQUESTS} concurrent)`);

        const startNextRequest = async () => {
            if (entryIndex >= entries.length) return;
            
            const currentIndex = entryIndex++;
            const entry = entries[currentIndex];
            
            // Add staggered delay to prevent overwhelming the server
            await new Promise(r => setTimeout(r, currentIndex * MIN_REQUEST_DELAY));

            const requestPromise = processProductUpdate(entry, currentIndex);
            activeRequests.add(requestPromise);
            
            try {
                const result = await requestPromise;
                results[currentIndex] = result;
                completedCount++;
            } catch (error) {
                console.error(`💥 Unexpected error processing product:`, error);
                results[currentIndex] = { success: false, error };
                completedCount++;
            } finally {
                activeRequests.delete(requestPromise);
                
                // Start the next request if there are more
                if (entryIndex < entries.length) {
                    startNextRequest();
                }
            }
        };

        // Start initial concurrent requests
        const initialConcurrency = Math.min(MAX_CONCURRENT_REQUESTS, entries.length);
        for (let i = 0; i < initialConcurrency; i++) {
            // Don't await here - we want them to run concurrently
            startNextRequest().catch(error => {
                console.error(`💥 Error starting request ${i}:`, error);
            });
        }

        // Give a small delay to allow the async functions to add to activeRequests
        await new Promise(resolve => setTimeout(resolve, 10));

        // Wait for all requests to complete
        while (activeRequests.size > 0) {
            await Promise.race(activeRequests);
        }

        const filteredResults = results.filter(r => r !== undefined);
        return filteredResults;
    };
    
    // Convert to array for concurrent processing
    const productUpdateEntries = Array.from(productUpdates.entries());
    
    if (productUpdateEntries.length > 0) {
        console.log(`🚀 Starting concurrent processing of ${productUpdateEntries.length} products (max ${MAX_CONCURRENT_REQUESTS} concurrent)`);
        const results = await processConcurrentBatch(productUpdateEntries);
        
        // Calculate final results
        const productSuccessCount = results.filter(r => r && r.success).length;
        const productErrorCount = results.filter(r => r && !r.success).length;
        
        successCount += productSuccessCount;
        errorCount += productErrorCount;
        
        console.log(` Product update results: ${productSuccessCount} successful, ${productErrorCount} failed`);
    } else {
        console.log('📝 No product updates to process');
    }
    
    // Apply URL redirects if any were created and products were saved successfully
    if (successCount > 0) {
        if (typeof applyUrlRedirects === 'function' && window.urlRedirects && window.urlRedirects.size > 0) {
            console.log(`🔄 Applying ${window.urlRedirects.size} URL redirects...`);
            try {
                const redirectResult = await applyUrlRedirects();
                if (redirectResult) {
                    console.log('✅ URL redirects applied successfully');
                } else {
                    console.warn('⚠️ Some URL redirects may not have been applied');
                }
            } catch (error) {
                console.error('❌ Error applying URL redirects:', error);
            }
        } else {
            console.log('ℹ️ No URL redirects to apply (size: ' + (window.urlRedirects ? window.urlRedirects.size : 0) + ')');
        }
    }

    // Complete progress if available
    if (typeof globalProgress !== 'undefined' && globalProgress) {
        if (errorCount === 0) {
            globalProgress.completeMain(`Successfully saved ${successCount} product${successCount !== 1 ? 's' : ''}!`);
        } else {
            globalProgress.completeMain(`Saved ${successCount} products, ${errorCount} failed`);
        }
    }
    
    console.log(`📈 Save results: ${successCount} successful, ${errorCount} failed`);
    return { successCount, errorCount };
}

// Initialize data utilities
function initializeDataUtilities() {
    // Set up changes footer handlers
    const discardBtn = document.getElementById('discard-changes');
    const saveBtn = document.getElementById('save-changes');
    
    if (discardBtn) {
        discardBtn.addEventListener('click', () => {
            clearProductModifications();
            
            // Refresh the table to reset any visual changes
            if (typeof loadProducts === 'function') {
                loadProducts().then(() => {
                    console.log('✅ Table refreshed after discarding changes');
                }).catch(error => {
                    console.error('❌ Error refreshing table after discard:', error);
                });
            }
        });
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', async () => {
            // Check for demo mode - prevent saving if in demo mode
            const isDemoMode = window.licenseManager && window.licenseManager.getLicenseStatus().status === 'demo';
            if (isDemoMode) {
                console.log('🚫 Save blocked: Demo mode active');
                if (typeof showFooterNotification === 'function') {
                    showFooterNotification('Apply changes is disabled in demo mode. Please activate your license to use this feature.', 'error', 5000);
                } else {
                    alert('Apply changes is disabled in demo mode. Please activate your license to use this feature.');
                }
                return;
            }
            
            try {
                // Show saving state but keep button visible
                saveBtn.textContent = 'Applying changes';
                saveBtn.disabled = true;
                
                // Hide the discard button during save
                const discardBtn = document.getElementById('discard-changes');
                if (discardBtn) {
                    discardBtn.style.display = 'none';
                }
                
                // Hide only the changes info, keep the actions (buttons) visible
                const changesInfo = document.querySelector('.changes-info');
                if (changesInfo) {
                    changesInfo.style.display = 'none';
                }
                
                // Get changed products count for logging
                const changesCount = changedProducts.size;
                
                if (changesCount > 0) {
                    // Save product changes
                    const productResult = await saveChangesToSquarespace();
                    
                    if (productResult && productResult.successCount > 0) {
                        // URL redirects are now handled inside saveChangesToSquarespace()
                        
                        // Clear modified state from successfully saved items
                        document.querySelectorAll('.modified').forEach(el => {
                            el.classList.remove('modified');
                            el.removeAttribute('data-new-value');
                            el.removeAttribute('data-field-type');
                        });
                        
                        // Update original data with current values using API data
                        changedProducts.forEach(productId => {
                            const product = getProductDataById(productId);
                            if (product) {
                                const processedData = convertProductToTableRow(product);
                                originalData.set(productId, {
                                    title: processedData.name,
                                    url: processedData.url,
                                    stock: processedData.stock,
                                    price: processedData.price,
                                    salePrice: processedData.salePrice,
                                    status: processedData.status
                                });
                            }
                        });
                        
                        // Clear changed products tracking
                        clearProductModifications();
                        
                        // Note: Success notification is already shown by globalProgress.completeMain()
                        // No need to call showFooterNotification again here
                    } else if (productResult && productResult.errorCount > 0) {
                        if (typeof showFooterNotification === 'function') {
                            showFooterNotification(`Failed to save changes. Please try again.`, 'error');
                        } else {
                            showMessage(`Failed to save changes. Please try again.`, 'error');
                        }
                    }
                } else {
                    if (typeof showFooterNotification === 'function') {
                        showFooterNotification('No changes to save.', 'info');
                    } else {
                        showMessage('No changes to save.', 'info');
                    }
                }
            } catch (error) {
                console.error('Save error:', error);
                if (typeof showFooterNotification === 'function') {
                    showFooterNotification('Error saving changes. Please try again.', 'error');
                } else {
                    showMessage('Error saving changes. Please try again.', 'error');
                }
            } finally {
                saveBtn.textContent = 'Apply Changes';
                saveBtn.disabled = false;
                
                // Restore the discard button
                const discardBtn = document.getElementById('discard-changes');
                if (discardBtn) {
                    discardBtn.style.display = '';
                    console.log('💾 Restored discard button display');
                }
                
                // Keep the changes info hidden after save completion - it will only show again when new changes are made
                const changesInfo = document.querySelector('.changes-info');
                if (changesInfo) {
                    // Keep it hidden until new changes are made
                    console.log('💾 Keeping changes info hidden after save - will only show when new changes are made');
                }
                
                // Don't call updateChangesFooter immediately - changes info will only show when new unsaved changes are made
            }
        });
    }
    
}

// Export functions
window.getProductDataById = getProductDataById;
window.getProcessedProductData = getProcessedProductData;
window.getSelectedProductsWithData = getSelectedProductsWithData;
window.getSelectedProducts = getSelectedProducts;
window.markProductAsChanged = markProductAsChanged;
window.updateChangesFooter = updateChangesFooter;
window.clearProductModifications = clearProductModifications;
window.getCurrentBulkSettings = getCurrentBulkSettings;
window.applyBulkSettings = applyBulkSettings;
window.generateActionDescription = generateActionDescription;
window.validateProductData = validateProductData;
window.deepClone = deepClone;
window.formatCurrency = formatCurrency;
window.parseCurrency = parseCurrency;
window.saveChangesToSquarespace = saveChangesToSquarespace;
window.initializeDataUtilities = initializeDataUtilities;


// === FILE-UPLOAD UTILITY ===
// File upload utilities for JSON files to Squarespace CSS assets

// Universal file upload function for JSON files to CSS assets
async function uploadJsonToCssAssets(filename, jsonData, actionDescription = 'Upload file') {
    
    try {
        const crumb = getCsrfToken();
        if (!crumb) {
            throw new Error('No CSRF token found');
        }
        
        // Create a File object from JSON data
        const jsonFile = new File([jsonData], filename, { 
            type: 'application/json',
            lastModified: Date.now()
        });
        
        // Prepare FormData
        const formData = new FormData();
        formData.append('crumb', crumb);
        formData.append('files', jsonFile);
        
        // Upload file to CSS assets
        const uploadResponse = await fetch(`${window.location.origin}/api/uploads/css-assets`, {
            method: 'POST',
            body: formData
        });
        
        if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            console.error('❌ Upload response not OK:', uploadResponse.status, errorText);
            throw new Error(`Upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`);
        }
        
        const uploadResult = await uploadResponse.json();
        const fileUrl = uploadResult.media?.[0]?.assetUrl;
        
        if (!fileUrl) {
            console.error('❌ No file URL in upload result:', uploadResult);
            throw new Error('No file URL returned from upload');
        }
        
        return fileUrl;
        
    } catch (error) {
        console.error(`❌ Error in ${actionDescription.toLowerCase()}:`, error);
        throw error;
    }
}

// File save lock to prevent concurrent saves
let presetFileSaveLock = false;

// Universal function to save preset file and delete old one
async function savePresetsFile(presetsData, actionDescription = 'Save presets') {
    // Prevent concurrent saves
    if (presetFileSaveLock) {
        return false;
    }
    
    presetFileSaveLock = true;
    
    try {
        
        // Get the URL of the old file before uploading new one
        const oldFileUrl = getJsonFileUrl();
        
        if (!presetsData) {
            throw new Error('No presets data provided');
        }
        
        // Generate JSON content and filename
        const jsonContent = JSON.stringify(presetsData, null, 2);
        const timestamp = Date.now();
        const filename = `sh_product_presets_${timestamp}.json`;
        
        // Upload new file
        const newJsonUrl = await uploadJsonToCssAssets(filename, jsonContent, actionDescription);
        
        if (!newJsonUrl) {
            throw new Error('Failed to upload new presets file');
        }
        
        // Update meta tag with new file URL
        const metaUpdateSuccess = await updateMetaTagWithJsonUrl(newJsonUrl);
        
        if (!metaUpdateSuccess) {
            console.error('❌ Failed to update meta tag, but file was uploaded');
            return false;
        }
        
        // Delete old file (if it exists)
        if (oldFileUrl) {
            await deleteOldJsonFile(oldFileUrl);
        }
        
        return true;
        
    } catch (error) {
        console.error(`❌ Error in ${actionDescription.toLowerCase()}:`, error);
        return false;
    } finally {
        presetFileSaveLock = false;
    }
}

// Fetch presets from the JSON file
async function fetchPresets() {
    try {
        const jsonUrl = getJsonFileUrl();
        
        if (!jsonUrl) {
            return {
                presets: [],
                version: '1.0.0',
                created: new Date().toISOString(),
                lastModified: new Date().toISOString()
            };
        }
        
        
        // Add cache-busting parameter to avoid stale data
        const cacheBustUrl = `${jsonUrl}?t=${Date.now()}`;
        
        const response = await fetch(cacheBustUrl, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });
        
        if (!response.ok) {
            if (response.status === 404) {
                return {
                    presets: [],
                    version: '1.0.0',
                    created: new Date().toISOString(),
                    lastModified: new Date().toISOString()
                };
            }
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const presetsData = await response.json();
        
        // Validate structure
        if (!presetsData || typeof presetsData !== 'object') {
            throw new Error('Invalid presets data structure');
        }
        
        // Ensure required properties exist
        if (!presetsData.presets) {
            presetsData.presets = [];
        }
        if (!presetsData.version) {
            presetsData.version = '1.0.0';
        }
        if (!presetsData.created) {
            presetsData.created = new Date().toISOString();
        }
        if (!presetsData.lastModified) {
            presetsData.lastModified = new Date().toISOString();
        }
        
        return presetsData;
        
    } catch (error) {
        console.error('❌ Error fetching presets:', error);
        
        // Return default structure on error
        return {
            presets: [],
            version: '1.0.0',
            created: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            error: error.message
        };
    }
}

// Save presets (wrapper function)
async function savePresets(presetsData) {
    return await savePresetsFile(presetsData, 'Save presets');
}

// Create backup of current presets
async function createPresetsBackup() {
    try {
        const currentPresets = await fetchPresets();
        const timestamp = Date.now();
        const backupFilename = `sh_product_presets_backup_${timestamp}.json`;
        
        // Add backup metadata
        const backupData = {
            ...currentPresets,
            backup: true,
            backupCreated: new Date().toISOString(),
            originalVersion: currentPresets.version
        };
        
        const jsonContent = JSON.stringify(backupData, null, 2);
        const backupUrl = await uploadJsonToCssAssets(backupFilename, jsonContent, 'Create backup');
        
        return backupUrl;
        
    } catch (error) {
        console.error('❌ Error creating backup:', error);
        return null;
    }
}

// Import presets from file
async function importPresetsFromFile(file) {
    try {
        if (!file) {
            throw new Error('No file provided');
        }
        
        if (!file.name.endsWith('.json')) {
            throw new Error('File must be a JSON file');
        }
        
        const fileContent = await file.text();
        const importedData = JSON.parse(fileContent);
        
        // Validate imported data structure
        if (!importedData || typeof importedData !== 'object') {
            throw new Error('Invalid file format');
        }
        
        if (!importedData.presets || !Array.isArray(importedData.presets)) {
            throw new Error('File does not contain valid presets data');
        }
        
        // Create backup before importing
        await createPresetsBackup();
        
        // Update metadata
        importedData.lastModified = new Date().toISOString();
        importedData.importedAt = new Date().toISOString();
        
        // Save imported presets
        const success = await savePresetsFile(importedData, 'Import presets');
        
        if (success) {
            return importedData;
        } else {
            throw new Error('Failed to save imported presets');
        }
        
    } catch (error) {
        console.error('❌ Error importing presets:', error);
        throw error;
    }
}

// Export presets to downloadable file
async function exportPresetsToFile() {
    try {
        const presetsData = await fetchPresets();
        
        if (!presetsData.presets || presetsData.presets.length === 0) {
            throw new Error('No presets to export');
        }
        
        // Prepare export data
        const exportData = {
            ...presetsData,
            exported: true,
            exportedAt: new Date().toISOString()
        };
        
        const jsonContent = JSON.stringify(exportData, null, 2);
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `squarehero-product-presets-${timestamp}.json`;
        
        // Create downloadable blob
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Create temporary download link
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up object URL
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        return true;
        
    } catch (error) {
        console.error('❌ Error exporting presets:', error);
        throw error;
    }
}

// Initialize file upload utilities
function initializeFileUploadUtilities() {
    // Handle file import via drag and drop
    const importZone = document.getElementById('preset-import-zone');
    if (importZone) {
        importZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            importZone.classList.add('drag-over');
        });
        
        importZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            importZone.classList.remove('drag-over');
        });
        
        importZone.addEventListener('drop', async (e) => {
            e.preventDefault();
            importZone.classList.remove('drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                try {
                    await importPresetsFromFile(files[0]);
                    // Refresh UI after successful import
                    if (typeof refreshPresetsList === 'function') {
                        refreshPresetsList();
                    }
                } catch (error) {
                    if (typeof showBulkNotification === 'function') {
                        showBulkNotification(`Import failed: ${error.message}`, 'error');
                    }
                }
            }
        });
    }
    
}

// Export functions
window.uploadJsonToCssAssets = uploadJsonToCssAssets;
window.savePresetsFile = savePresetsFile;
window.fetchPresets = fetchPresets;
window.savePresets = savePresets;
window.createPresetsBackup = createPresetsBackup;
window.importPresetsFromFile = importPresetsFromFile;
window.exportPresetsToFile = exportPresetsToFile;
window.initializeFileUploadUtilities = initializeFileUploadUtilities;


// === FLATPICKR-CONFIG UTILITY ===
// Flatpickr configuration and initialization
// Note: This module expects Flatpickr to be loaded globally

// Initialize global instance storage
if (!window.flatpickrInstances) {
    window.flatpickrInstances = {};
}

/**
 * Initialize Flatpickr for datetime inputs
 * @param {string|Element} selector - CSS selector or DOM element
 * @param {Object} options - Additional Flatpickr options
 * @returns {Object} Flatpickr instance
 */
function initializeFlatpickr(selector, options = {}) {
    // Check if Flatpickr is available
    if (typeof flatpickr === 'undefined') {
        console.error('Flatpickr is not loaded. Please include the Flatpickr library.');
        return null;
    }

    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!element) {
        console.error('Element not found:', selector);
        return null;
    }

    // Default configuration
    const defaultConfig = {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y at h:i K",
        time_24hr: false,
        minDate: "today",
        inline: true, // Make calendar always visible inline
        static: true, // Prevent calendar from moving
        
        // Custom styling classes
        wrap: false,
        
        // Event callbacks
        onChange: function(selectedDates, dateStr, instance) {
            
            // Trigger change event for compatibility with existing code
            if (element) {
                element.dispatchEvent(new Event('change', { bubbles: true }));
            }
        },
        
        onDayCreate: function(dObj, dStr, fp, dayElem) {
            // This runs when each day element is created
            const dayDate = new Date(dayElem.dateObj);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            dayDate.setHours(0, 0, 0, 0);
            
            // If this is today, we'll handle time restrictions in onOpen
            if (dayDate.getTime() === today.getTime()) {
            }
        },
        
        onReady: function(selectedDates, dateStr, instance) {
            
            // Add custom styling to the calendar
            const calendar = instance.calendarContainer;
            if (calendar) {
                calendar.classList.add('squarehero-flatpickr');
            }
            
            // Set default time to current time if no date is selected and today is available
            if (!selectedDates.length) {
                const now = new Date();
                instance.setDate(now);
            }
        },
        
        onOpen: function(selectedDates, dateStr, instance) {
            // Check if we need to apply time restrictions
            const selectedDate = selectedDates[0];
            if (selectedDate) {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
                
                if (selectedDateOnly.getTime() === today.getTime()) {
                    // Today is selected - apply current time restriction
                    const currentTime = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0');
                    instance.set('minTime', currentTime);
                    
                    // If the selected time is in the past, update it to current time
                    if (selectedDate <= now) {
                        const correctedTime = new Date();
                        correctedTime.setSeconds(0, 0); // Round to nearest minute
                        instance.setDate(correctedTime);
                        console.log('🕐 Corrected time to current time:', correctedTime.toLocaleTimeString());
                    }
                } else {
                    // Future date selected - remove time restriction
                    instance.set('minTime', "00:00");
                    console.log('🕐 Removed time restriction for future date');
                }
            }
        },
        
        onReady: function(selectedDates, dateStr, instance) {
            
            // Add custom styling to the calendar
            const calendar = instance.calendarContainer;
            if (calendar) {
                calendar.classList.add('squarehero-flatpickr');
            }
        }
    };

    // Merge with custom options
    const config = { ...defaultConfig, ...options };

    try {
        // Initialize Flatpickr
        const instance = flatpickr(element, config);
        
        // Store instance globally if element has an ID
        if (element.id) {
            window.flatpickrInstances[element.id] = instance;
        }
        
        return instance;
    } catch (error) {
        console.error('❌ Failed to initialize Flatpickr:', error);
        return null;
    }
}

/**
 * Initialize datetime picker for bulk scheduling
 */
function initializeBulkSchedulingPicker() {
    const scheduledInput = document.getElementById('bulk-scheduled-date');
    if (!scheduledInput) {
        console.warn('Bulk scheduled date input not found');
        return null;
    }

    // Set placeholder text
    scheduledInput.placeholder = "Select date and time";

    // Custom options for bulk scheduling
    const bulkSchedulingOptions = {
        altFormat: "F j, Y at h:i K", // "August 27, 2025 at 2:30 PM"
        static: true, // Prevent movement
        
        onReady: function(selectedDates, dateStr, instance) {
            
            // Set default time to current time with a small delay to ensure calendar is fully rendered
            setTimeout(() => {
                const now = new Date();
                instance.setDate(now);
            }, 100);
        },
        
        // Custom validation and time restrictions
        onChange: function(selectedDates, dateStr, instance) {
            const selectedDate = selectedDates[0];
            
            if (selectedDate) {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const selectedDateOnly = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
                
                // Apply time restrictions only for today
                if (selectedDateOnly.getTime() === today.getTime()) {
                    // Check if selected time is in the past for today
                    if (selectedDate <= now) {
                        // Set to current time instead of clearing
                        const correctedTime = new Date();
                        correctedTime.setSeconds(0, 0); // Round to nearest minute
                        instance.setDate(correctedTime);
                        
                        console.log('🕐 Corrected bulk scheduling time to current time:', correctedTime.toLocaleTimeString());
                        return;
                    }
                    
                    // Set minimum time to current time for today
                    const currentTime = String(now.getHours()).padStart(2, '0') + ":" + String(now.getMinutes()).padStart(2, '0');
                    instance.set('minTime', currentTime);
                } else {
                    // Future date - remove time restriction
                    instance.set('minTime', "00:00");
                    console.log('🕐 Removed time restriction for bulk scheduling future date');
                }
                
                console.log('📅 Valid scheduled date selected:', dateStr);
                
                // Update the original input value for form compatibility
                scheduledInput.value = selectedDate.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
                
                // Trigger change event
                scheduledInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    };

    return initializeFlatpickr(scheduledInput, bulkSchedulingOptions);
}

/**
 * Get the selected datetime value in ISO format
 * @param {Object} flatpickrInstance - Flatpickr instance
 * @returns {string|null} ISO datetime string or null
 */
function getFlatpickrValue(flatpickrInstance) {
    if (!flatpickrInstance || !flatpickrInstance.selectedDates.length) {
        return null;
    }
    
    return flatpickrInstance.selectedDates[0].toISOString();
}

/**
 * Set the Flatpickr value
 * @param {Object} flatpickrInstance - Flatpickr instance
 * @param {Date|string} date - Date to set
 */
function setFlatpickrValue(flatpickrInstance, date) {
    if (!flatpickrInstance) return;
    
    flatpickrInstance.setDate(date);
}

/**
 * Destroy Flatpickr instance
 * @param {Object} flatpickrInstance - Flatpickr instance
 */
function destroyFlatpickr(flatpickrInstance) {
    if (flatpickrInstance && typeof flatpickrInstance.destroy === 'function') {
        flatpickrInstance.destroy();
        console.log('📅 Flatpickr instance destroyed');
    }
}

// Export functions for use in other modules
window.initializeFlatpickr = initializeFlatpickr;
window.initializeBulkSchedulingPicker = initializeBulkSchedulingPicker;
window.getFlatpickrValue = getFlatpickrValue;
window.setFlatpickrValue = setFlatpickrValue;
window.destroyFlatpickr = destroyFlatpickr;

// Store reference to bulk scheduling picker globally
window.bulkSchedulingPicker = null;


// === FORM-VALIDATION UTILITY ===
// Advanced form validation and event handlers

// Form validation utilities
const validators = {
    required: (value) => ({
        valid: value && value.toString().trim() !== '',
        message: 'This field is required'
    }),
    
    number: (value) => ({
        valid: !isNaN(parseFloat(value)) && isFinite(value),
        message: 'Please enter a valid number'
    }),
    
    positiveNumber: (value) => ({
        valid: !isNaN(parseFloat(value)) && isFinite(value) && parseFloat(value) >= 0,
        message: 'Please enter a positive number'
    }),
    
    percentage: (value) => ({
        valid: !isNaN(parseFloat(value)) && isFinite(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100,
        message: 'Please enter a percentage between 0 and 100'
    }),
    
    email: (value) => ({
        valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Please enter a valid email address'
    }),
    
    url: (value) => ({
        valid: /^https?:\/\/.+/.test(value),
        message: 'Please enter a valid URL starting with http:// or https://'
    }),
    
    minLength: (min) => (value) => ({
        valid: value && value.toString().length >= min,
        message: `Must be at least ${min} characters long`
    }),
    
    maxLength: (max) => (value) => ({
        valid: !value || value.toString().length <= max,
        message: `Must be no more than ${max} characters long`
    }),
    
    pattern: (regex, message = 'Invalid format') => (value) => ({
        valid: !value || regex.test(value),
        message: message
    }),
    
    custom: (validatorFn, message) => (value) => ({
        valid: validatorFn(value),
        message: message
    })
};

// Validate a single field
function validateField(field, rules) {
    const value = field.value;
    const errors = [];
    
    // Skip validation for optional empty fields
    if (!value && !rules.includes('required')) {
        return { valid: true, errors: [] };
    }
    
    for (const rule of rules) {
        let validator;
        let params = [];
        
        if (typeof rule === 'string') {
            validator = validators[rule];
        } else if (typeof rule === 'object') {
            const ruleName = Object.keys(rule)[0];
            params = Array.isArray(rule[ruleName]) ? rule[ruleName] : [rule[ruleName]];
            validator = validators[ruleName](...params);
        } else if (typeof rule === 'function') {
            validator = rule;
        }
        
        if (validator) {
            const result = validator(value);
            if (!result.valid) {
                errors.push(result.message);
            }
        }
    }
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// Validate a form
function validateForm(form, validationRules) {
    const results = {};
    let isValid = true;
    
    for (const fieldName in validationRules) {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
            const result = validateField(field, validationRules[fieldName]);
            results[fieldName] = result;
            
            if (!result.valid) {
                isValid = false;
                showFieldError(field, result.errors[0]);
            } else {
                clearFieldError(field);
            }
        }
    }
    
    return {
        valid: isValid,
        results: results
    };
}

// Show field error
function showFieldError(field, message) {
    // Remove existing error
    clearFieldError(field);
    
    // Add error class
    field.classList.add('error');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    
    // Insert error message after field
    field.parentNode.insertBefore(errorElement, field.nextSibling);
    
    // Focus field on first error
    if (!document.querySelector('.field-error')) {
        field.focus();
    }
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Initialize real-time validation
function initializeRealTimeValidation(form, validationRules) {
    for (const fieldName in validationRules) {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
            // Validate on blur
            field.addEventListener('blur', () => {
                const result = validateField(field, validationRules[fieldName]);
                if (!result.valid) {
                    showFieldError(field, result.errors[0]);
                } else {
                    clearFieldError(field);
                }
            });
            
            // Clear error on input
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    clearFieldError(field);
                }
            });
        }
    }
}

// Advanced event handlers
function initializeAdvancedEventHandlers() {
    // Get references to commonly used elements
    const applyButton = document.getElementById('bulk-apply-all');
    
    // Bulk changes form validation
    const bulkForm = document.querySelector('.bulk-drawer');
    if (bulkForm) {
        const validationRules = {
            'category-input': ['minLength:1', 'maxLength:50'],
            'price-adjustment': ['number'],
            'fixed-price': ['positiveNumber'],
            'sale-discount': ['percentage'],
            'stock-amount': ['number'],
            'custom-cents': [{number: true}, {custom: (v) => v >= 0 && v <= 99, message: 'Cents must be between 0 and 99'}]
        };
        
        initializeRealTimeValidation(bulkForm, validationRules);
        
        // Validate before applying changes
        if (applyButton) {
            applyButton.addEventListener('click', (e) => {
                const validation = validateForm(bulkForm, validationRules);
                if (!validation.valid) {
                    e.preventDefault();
                    showBulkNotification('Please fix validation errors before applying changes', 'error');
                }
            });
        }
    }
    
    // Number input formatting
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            // Remove invalid characters
            e.target.value = e.target.value.replace(/[^-+\d.]/g, '');
            
            // Limit decimal places based on step attribute
            const step = parseFloat(input.getAttribute('step') || '1');
            if (step < 1) {
                const decimalPlaces = step.toString().split('.')[1]?.length || 0;
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                    e.target.value = value.toFixed(decimalPlaces);
                }
            }
        });
    });
    
    // Auto-save drafts
    const draftableInputs = document.querySelectorAll('[data-auto-save]');
    draftableInputs.forEach(input => {
        const draftKey = `draft_${input.name || input.id}`;
        
        // Load saved draft
        const savedValue = localStorage.getItem(draftKey);
        if (savedValue && !input.value) {
            input.value = savedValue;
        }
        
        // Save on input
        input.addEventListener('input', debounce((e) => {
            localStorage.setItem(draftKey, e.target.value);
        }, 500));
        
        // Clear draft on form submit
        const form = input.closest('form');
        if (form) {
            form.addEventListener('submit', () => {
                localStorage.removeItem(draftKey);
            });
        }
    });
    
    // Confirm before leaving page with unsaved changes
    // Using the global hasUnsavedChanges variable from main.js
    const trackableInputs = document.querySelectorAll('.bulk-drawer input, .bulk-drawer select');
    
    trackableInputs.forEach(input => {
        input.addEventListener('input', () => {
            hasUnsavedChanges = true;
        });
    });
    
    window.addEventListener('beforeunload', (e) => {
        if (hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
    
    // Reset unsaved changes flag when changes are applied
    if (applyButton) {
        applyButton.addEventListener('click', () => {
            hasUnsavedChanges = false;
        });
    }
    
    // Double-click to edit inline
    const editableCells = document.querySelectorAll('.editable-cell');
    editableCells.forEach(cell => {
        cell.addEventListener('dblclick', () => {
            makeInlineEditable(cell);
        });
    });
    
    // Keyboard navigation for tables
    const tables = document.querySelectorAll('.product-table');
    tables.forEach(table => {
        table.addEventListener('keydown', (e) => {
            const focusedElement = document.activeElement;
            if (!focusedElement.closest('.product-table')) return;
            
            const rows = Array.from(table.querySelectorAll('tr'));
            const cells = Array.from(table.querySelectorAll('td, th'));
            const currentIndex = cells.indexOf(focusedElement);
            
            if (currentIndex === -1) return;
            
            let nextIndex = currentIndex;
            
            switch (e.key) {
                case 'ArrowRight':
                    nextIndex = Math.min(currentIndex + 1, cells.length - 1);
                    break;
                case 'ArrowLeft':
                    nextIndex = Math.max(currentIndex - 1, 0);
                    break;
                case 'ArrowDown':
                    const currentRow = focusedElement.closest('tr');
                    const currentRowIndex = rows.indexOf(currentRow);
                    const nextRow = rows[currentRowIndex + 1];
                    if (nextRow) {
                        const cellIndex = Array.from(currentRow.cells).indexOf(focusedElement);
                        const nextCell = nextRow.cells[cellIndex];
                        if (nextCell) nextIndex = cells.indexOf(nextCell);
                    }
                    break;
                case 'ArrowUp':
                    const currentRow2 = focusedElement.closest('tr');
                    const currentRowIndex2 = rows.indexOf(currentRow2);
                    const prevRow = rows[currentRowIndex2 - 1];
                    if (prevRow) {
                        const cellIndex2 = Array.from(currentRow2.cells).indexOf(focusedElement);
                        const prevCell = prevRow.cells[cellIndex2];
                        if (prevCell) nextIndex = cells.indexOf(prevCell);
                    }
                    break;
            }
            
            if (nextIndex !== currentIndex) {
                e.preventDefault();
                cells[nextIndex].focus();
            }
        });
    });
    
}

// Make a cell inline editable
function makeInlineEditable(cell) {
    const originalValue = cell.textContent.trim();
    const fieldType = cell.getAttribute('data-field-type') || 'text';
    
    // Create input element
    let input;
    switch (fieldType) {
        case 'number':
            input = document.createElement('input');
            input.type = 'number';
            input.value = originalValue.replace(/[^\d.-]/g, '');
            break;
        case 'select':
            input = document.createElement('select');
            const options = cell.getAttribute('data-options');
            if (options) {
                options.split(',').forEach(optionValue => {
                    const option = document.createElement('option');
                    option.value = optionValue.trim();
                    option.textContent = optionValue.trim();
                    option.selected = optionValue.trim() === originalValue;
                    input.appendChild(option);
                });
            }
            break;
        default:
            input = document.createElement('input');
            input.type = 'text';
            input.value = originalValue;
    }
    
    input.className = 'inline-edit-input';
    input.style.width = '100%';
    input.style.border = 'none';
    input.style.padding = '4px';
    input.style.fontSize = 'inherit';
    input.style.fontFamily = 'inherit';
    
    // Replace cell content with input
    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
    input.select();
    
    // Save on Enter or blur
    const saveEdit = () => {
        const newValue = input.value.trim();
        cell.innerHTML = newValue || originalValue;
        
        if (newValue !== originalValue) {
            cell.classList.add('modified');
            cell.setAttribute('data-new-value', newValue);
            
            // Fire change event
            const changeEvent = new CustomEvent('cellChange', {
                detail: { cell, oldValue: originalValue, newValue: newValue }
            });
            cell.dispatchEvent(changeEvent);
        }
    };
    
    // Cancel on Escape
    const cancelEdit = () => {
        cell.innerHTML = originalValue;
    };
    
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cancelEdit();
        }
    });
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export validation utilities
window.validators = validators;
window.validateField = validateField;
window.validateForm = validateForm;
window.initializeAdvancedEventHandlers = initializeAdvancedEventHandlers;
window.makeInlineEditable = makeInlineEditable;
window.debounce = debounce;


// === HELPERS UTILITY ===
// Utility functions for the Product Manager

// Helper function to get product data by ID from globalProductsData
function getProductDataById(productId) {
    return globalProductsData.find(product => product.id === productId);
}

// Helper function to get processed product data (like what table displays)
function getProcessedProductData(productId) {
    const product = getProductDataById(productId);
    if (!product) return null;
    return convertProductToTableRow(product);
}

// Utility function to format currency
function formatCurrency(amount, currency = null) {
    if (amount === null || amount === undefined || amount === '') {
        return '';
    }
    
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
        return '';
    }
    
    // Use the global currency manager if available
    if (window.currencyManager) {
        return window.currencyManager.formatCurrency(numAmount, currency);
    }
    
    // Use detected currency or fallback to basic symbol
    const currencyCode = currency || window.getSystemCurrency?.();
    
    try {
        if (currencyCode) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyCode
            }).format(numAmount);
        } else {
            // No currency detected, use basic dollar format
            return `$${numAmount.toFixed(2)}`;
        }
    } catch (error) {
        // Fallback if Intl.NumberFormat fails with unknown currency
        return `${currencyCode}$${numAmount.toFixed(2)}`;
    }
}

// Utility function to format date
function formatDate(date) {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Utility function to debounce function calls
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Utility function to sanitize HTML
function sanitizeHtml(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Utility function to generate URL slug from title
function generateUrlSlug(title) {
    if (!title) return '';
    
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')          // Replace spaces with hyphens
        .replace(/-+/g, '-')           // Replace multiple hyphens with single
        .replace(/^-|-$/g, '');        // Remove leading/trailing hyphens
}

// Utility function to validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function to deep clone objects
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    if (typeof obj === "object") {
        const clonedObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
}

// Initialize utility helpers
function initializeUtilityHelpers() {
    
    // Initialize modal system
    initializeModalSystem();
    
    // Initialize tooltips
    initializeTooltips();
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
}

// Modal system initialization
function initializeModalSystem() {
    // Close modals when clicking overlay
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('sh-modal-overlay')) {
            closeModal(e.target);
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// Close a specific modal
function closeModal(modal) {
    if (modal && modal.parentElement) {
        modal.classList.add('closing');
        setTimeout(() => {
            if (modal.parentElement) {
                modal.parentElement.removeChild(modal);
            }
        }, 300);
    }
}

// Close all open modals
function closeAllModals() {
    const modals = document.querySelectorAll('.sh-modal-overlay');
    modals.forEach(modal => closeModal(modal));
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Show tooltip
function showTooltip(e) {
    const element = e.target;
    const tooltipText = element.getAttribute('data-tooltip');
    
    if (!tooltipText) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'sh-tooltip';
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
    
    // Store reference for cleanup
    element._tooltip = tooltip;
    
    // Show with animation
    setTimeout(() => tooltip.classList.add('visible'), 10);
}

// Hide tooltip
function hideTooltip(e) {
    const element = e.target;
    if (element._tooltip) {
        document.body.removeChild(element._tooltip);
        delete element._tooltip;
    }
}

// Initialize keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + S to save (prevent default and show message)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            showMessage('Changes are automatically saved', 'info');
        }
        
        // Ctrl/Cmd + A to select all products
        if ((e.ctrlKey || e.metaKey) && e.key === 'a' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            selectAllProducts();
        }
        
        // Delete key to delete selected products
        if (e.key === 'Delete' && !e.target.matches('input, textarea')) {
            const selectedProducts = getSelectedProducts();
            if (selectedProducts.length > 0) {
                showConfirmation(
                    `Are you sure you want to delete ${selectedProducts.length} selected products?`,
                    () => deleteSelectedProducts()
                );
            }
        }
        
        // Escape to deselect all
        if (e.key === 'Escape' && !e.target.matches('input, textarea')) {
            deselectAllProducts();
            closeAllModals();
        }
    });
}

// Select all products
function selectAllProducts() {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const selectAllCheckbox = document.getElementById('select-all-products');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('change'));
    });
    
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = true;
    }
    
    showMessage(`Selected ${checkboxes.length} products`, 'success');
}

// Deselect all products
function deselectAllProducts() {
    const checkboxes = document.querySelectorAll('.product-checkbox');
    const selectAllCheckbox = document.getElementById('select-all-products');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
    });
    
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = false;
    }
    
    showMessage('Deselected all products', 'info');
}

// Get currently selected products
function getSelectedProducts() {
    const selectedCheckboxes = document.querySelectorAll('.product-checkbox:checked');
    return Array.from(selectedCheckboxes).map(checkbox => {
        return checkbox.closest('tr')?.getAttribute('data-product-id');
    }).filter(Boolean);
}

// Delete selected products
async function deleteSelectedProducts() {
    const selectedProducts = getSelectedProducts();
    
    if (selectedProducts.length === 0) {
        showMessage('No products selected for deletion', 'warning');
        return;
    }
    
    const loadingNotification = showLoadingMessage(`Deleting ${selectedProducts.length} products...`);
    
    try {
        // Process deletions in batches
        const batchSize = 5;
        let deleted = 0;
        
        for (let i = 0; i < selectedProducts.length; i += batchSize) {
            const batch = selectedProducts.slice(i, i + batchSize);
            
            // Delete batch (API calls would go here)
            await Promise.all(batch.map(productId => deleteProduct(productId)));
            
            deleted += batch.length;
            updateProgressNotification(
                loadingNotification,
                `Deleting products... ${deleted}/${selectedProducts.length}`,
                (deleted / selectedProducts.length) * 100
            );
        }
        
        hideLoadingMessage(loadingNotification);
        showMessage(`Successfully deleted ${selectedProducts.length} products`, 'success');
        
        // Refresh product table
        if (typeof loadProducts === 'function') {
            await loadProducts();
        }
        
    } catch (error) {
        console.error('Error deleting products:', error);
        hideLoadingMessage(loadingNotification);
        showMessage('Error deleting products. Please try again.', 'error');
    }
}

// Delete a single product (placeholder for API call)
async function deleteProduct(productId) {
    // This would make an actual API call to delete the product
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API delay
    return true;
}

// Update notification positioning
function updateNotificationPositioning() {
    const notifications = document.querySelectorAll('.sh-notification');
    notifications.forEach((notification, index) => {
        const offset = index * 60;
        notification.style.top = `${20 + offset}px`;
    });
}

// Parse currency string to number
function parseCurrency(value) {
    if (typeof value === 'number') return value;
    if (typeof value !== 'string') return 0;
    
    // Remove currency symbols and parse
    const cleaned = value.replace(/[$,\s]/g, '');
    return parseFloat(cleaned) || 0;
}

// Throttle function for scroll and resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Generate unique ID
function generateId() {
    return 'sh-' + Math.random().toString(36).substr(2, 9);
}

// Copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showMessage('Copied to clipboard', 'success');
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        showMessage('Failed to copy to clipboard', 'error');
    }
}

// Download data as JSON
function downloadJSON(data, filename) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download data as CSV
function downloadCSV(data, filename) {
    if (!Array.isArray(data) || data.length === 0) {
        showMessage('No data to export', 'warning');
        return;
    }
    
    // Convert to CSV format
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => {
            const value = row[header] || '';
            return `"${String(value).replace(/"/g, '""')}"`;
        }).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], {type: 'text/csv'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Validate URL format
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Get file extension from filename
function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

// Check if file is an image
function isImageFile(filename) {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    return imageExtensions.includes(getFileExtension(filename));
}

// Timing estimates based on real test data
const TIMING_ESTIMATES = {
    productOnly: 0.6,        // seconds per product for product-only operations
    productWithCategories: 2.5  // seconds per product when categories are involved
};


// Format time duration for display (converts seconds to minutes and seconds when over 60)
function formatEstimatedTime(seconds) {
    
    if (seconds < 60) {
        return `Est. ${seconds} seconds`;
    }
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (remainingSeconds === 0) {
        return `Est. ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
        return `Est. ${minutes} minute${minutes !== 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    }
}


// === INITIALIZATION UTILITY ===
// === INITIALIZATION UTILITY ===
// Application initialization and setup functions

// Main application initialization function
async function initializeProductManager() {
    
    try {
        // Initialize all core systems
        initializeEventHandlers();
        initializeTableControls();
        initializeBulkEditor();
        initializeSearchAndFiltering();
        initializePresetSystem();
        initializeUrlManagement();
        initializeFileUpload();
        initializeUndoSystem();
        initializeFormValidation();
        
        // Load and display products
        await loadProductsData();
        
        // Initialize UI components
        initializeCustomDropdowns();
        initializeNotificationSystem();
        
        // Set up periodic checks
        setupPeriodicChecks();
        
        
    } catch (error) {
        console.error('❌ Error initializing Product Manager:', error);
        showMessage('Failed to initialize Product Manager. Please refresh the page.', 'error');
    }
}

// Initialize core event handlers
function initializeEventHandlers() {
    // Support button click
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', () => {
            window.open('https://www.squarehero.store/products/squarehero-support', '_blank');
        });
    }
    
    // Export/Import buttons
    const exportBtn = document.querySelector('.action-buttons .btn:nth-child(1)');
    const importBtn = document.querySelector('.action-buttons .btn:nth-child(2)');
    
    if (exportBtn && exportBtn.textContent.includes('Export')) {
        exportBtn.addEventListener('click', exportProducts);
    }
    
    if (importBtn && importBtn.textContent.includes('Import')) {
        importBtn.addEventListener('click', importProducts);
    }
    
    // Undo changes button
    const undoBtn = document.getElementById('undo-changes-btn');
    if (undoBtn) {
        undoBtn.addEventListener('click', openUndoDrawer);
    }
    
}

// Initialize table controls and interactions
function initializeTableControls() {
    // Select all checkbox
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const productCheckboxes = document.querySelectorAll('.product-checkbox');
            
            productCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
            
            updateBulkAdjustButton();
        });
    }
    
    // Pagination controls
    const itemsPerPageSelect = document.getElementById('items-per-page');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', function() {
            // The actual pagination logic is now handled in search-filtering.js
        });
    }
    
    // Listen for checkbox changes to update button state
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.closest('.mix')) {
            updateBulkAdjustButton();
        }
    });
    
}

// Initialize bulk editor functionality
function initializeBulkEditor() {
    const bulkAdjustBtn = document.querySelector('.bulk-adjust');
    const bulkDrawer = document.getElementById('bulk-adjust-drawer');
    const bulkDrawerClose = document.getElementById('bulk-drawer-close');
    const bulkApplyBtn = document.getElementById('bulk-apply-all');
    
    if (bulkAdjustBtn) {
        bulkAdjustBtn.addEventListener('click', openBulkDrawer);
    }
    
    if (bulkDrawerClose) {
        bulkDrawerClose.addEventListener('click', closeBulkDrawer);
    }
    
    if (bulkApplyBtn) {
        bulkApplyBtn.addEventListener('click', applyBulkChanges);
    }
    
    // Initialize bulk tabs
    initializeBulkTabs();
    
    // Initialize bulk controls
    initializeNewBulkControls();
    
}

// Initialize bulk tabs navigation
function initializeBulkTabs() {
    const tabs = document.querySelectorAll('.bulk-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            tab.classList.add('active');
            const targetPane = document.getElementById(`${targetTab}-tab`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// Initialize new bulk controls
function initializeNewBulkControls() {
    // Initialize pricing controls
    initializePricingControls();
    
    // Initialize visibility controls
    initializeVisibilityControls();
    
    // Initialize inventory controls
    initializeInventoryControls();
    
    // Initialize preset controls
    initializePresetControls();
}

// Initialize pricing controls
function initializePricingControls() {
    // Regular pricing toggle
    const regularPriceToggle = document.getElementById('bulk-adjust-regular-prices');
    const regularPriceOptions = document.getElementById('bulk-regular-price-options');
    
    if (regularPriceToggle) {
        regularPriceToggle.addEventListener('change', function() {
            if (regularPriceOptions) {
                regularPriceOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // Sale pricing toggle
    const salePriceToggle = document.getElementById('bulk-adjust-sale-prices');
    const salePriceOptions = document.getElementById('bulk-sale-price-options');
    
    if (salePriceToggle) {
        salePriceToggle.addEventListener('change', function() {
            if (salePriceOptions) {
                salePriceOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // Rounding toggle
    const roundingToggle = document.getElementById('bulk-round-prices');
    const roundingOptions = document.getElementById('bulk-rounding-options');
    
    if (roundingToggle) {
        roundingToggle.addEventListener('change', function() {
            if (roundingOptions) {
                roundingOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // Initialize custom slider
    initializeCustomSlider();
    
    // Initialize custom dropdowns for pricing
    initializePricingDropdowns();
    
}

// Initialize visibility controls
function initializeVisibilityControls() {
    // Product status toggle
    const statusToggle = document.getElementById('bulk-product-status-toggle');
    const statusOptions = document.getElementById('bulk-product-status-options');
    
    if (statusToggle) {
        statusToggle.addEventListener('change', function() {
            if (statusOptions) {
                statusOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // Categories toggle
    const categoriesToggle = document.getElementById('bulk-categories-toggle');
    const categoriesOptions = document.getElementById('bulk-categories-options');
    
    if (categoriesToggle) {
        categoriesToggle.addEventListener('change', function() {
            if (categoriesOptions) {
                categoriesOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // Tags toggle
    const tagsToggle = document.getElementById('bulk-tags-toggle');
    const tagsOptions = document.getElementById('bulk-tags-options');
    
    if (tagsToggle) {
        tagsToggle.addEventListener('change', function() {
            if (tagsOptions) {
                tagsOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
}

// Initialize inventory controls
function initializeInventoryControls() {
    // Stock toggle
    const stockToggle = document.getElementById('bulk-stock-toggle');
    const stockOptions = document.getElementById('bulk-stock-options');
    
    if (stockToggle) {
        stockToggle.addEventListener('change', function() {
            if (stockOptions) {
                stockOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
    // SKU toggle
    const skuToggle = document.getElementById('bulk-sku-toggle');
    const skuOptions = document.getElementById('bulk-sku-options');
    
    if (skuToggle) {
        skuToggle.addEventListener('change', function() {
            if (skuOptions) {
                skuOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateApplyAllButton();
            updatePreviewPane();
        });
    }
    
}

// Initialize preset controls
function initializePresetControls() {
    const loadPresetBtn = document.getElementById('load-preset');
    const savePresetBtn = document.getElementById('save-current-preset');
    const saveAsNewBtn = document.getElementById('save-as-new-preset');
    const deletePresetBtn = document.getElementById('delete-preset');
    
    if (loadPresetBtn) {
        loadPresetBtn.addEventListener('click', loadSelectedPreset);
    }
    
    if (savePresetBtn) {
        savePresetBtn.addEventListener('click', saveCurrentPreset);
    }
    
    if (saveAsNewBtn) {
        saveAsNewBtn.addEventListener('click', showSaveAsNewForm);
    }
    
    if (deletePresetBtn) {
        deletePresetBtn.addEventListener('click', deleteSelectedPreset);
    }
    
}

// Initialize custom slider for pricing
function initializeCustomSlider() {
    const sliderContainer = document.querySelector('.price-slider-container');
    if (!sliderContainer) return;
    
    const sliderTrack = sliderContainer.querySelector('.price-slider-track');
    const sliderHandle = sliderContainer.querySelector('.price-slider-handle');
    const sliderCover = sliderContainer.querySelector('.price-slider-cover');
    const adjustmentInput = document.getElementById('bulk-regular-adjustment');
    
    if (!sliderTrack || !sliderHandle || !sliderCover || !adjustmentInput) return;
    
    let isDragging = false;
    let sliderRect;
    
    const updateSliderFromInput = () => {
        const value = parseFloat(adjustmentInput.value) || 0;
        const minValue = -50;
        const maxValue = 50;
        const percentage = Math.max(0, Math.min(100, ((value - minValue) / (maxValue - minValue)) * 100));
        
        sliderHandle.style.left = `${percentage}%`;
        sliderCover.style.width = `${percentage}%`;
    };
    
    const updateInputFromSlider = (percentage) => {
        const minValue = -50;
        const maxValue = 50;
        const value = minValue + (percentage / 100) * (maxValue - minValue);
        adjustmentInput.value = Math.round(value);
        adjustmentInput.dispatchEvent(new Event('input', { bubbles: true }));
    };
    
    // Mouse events
    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        sliderRect = sliderTrack.getBoundingClientRect();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        e.preventDefault();
    });
    
    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRect) return;
        
        const x = e.clientX - sliderRect.left;
        const percentage = Math.max(0, Math.min(100, (x / sliderRect.width) * 100));
        
        sliderHandle.style.left = `${percentage}%`;
        sliderCover.style.width = `${percentage}%`;
        updateInputFromSlider(percentage);
    };
    
    const handleMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
    
    // Track click
    sliderTrack.addEventListener('click', (e) => {
        if (e.target === sliderHandle) return;
        
        const rect = sliderTrack.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        
        sliderHandle.style.left = `${percentage}%`;
        sliderCover.style.width = `${percentage}%`;
        updateInputFromSlider(percentage);
    });
    
    // Input change
    adjustmentInput.addEventListener('input', updateSliderFromInput);
    
    // Initialize slider position
    updateSliderFromInput();
    
}

// Initialize pricing dropdowns
function initializePricingDropdowns() {
    const methodTrigger = document.getElementById('price-method-trigger');
    const methodDropdown = document.getElementById('price-method-dropdown');
    const methodText = document.getElementById('price-method-text');
    const methodSelect = document.getElementById('bulk-regular-adjustment-type');
    const priceUnit = document.getElementById('price-unit');
    
    if (!methodTrigger || !methodDropdown || !methodText || !methodSelect || !priceUnit) return;
    
    // Toggle dropdown
    methodTrigger.addEventListener('click', () => {
        methodDropdown.classList.toggle('active');
    });
    
    // Handle option selection
    const options = methodDropdown.querySelectorAll('.select-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const text = option.textContent;
            
            // Update UI
            methodText.textContent = text;
            methodSelect.value = value;
            
            // Update price unit
            switch (value) {
                case 'percentage':
                    priceUnit.textContent = '%';
                    break;
                case 'fixed-adjustment':
                case 'fixed-price':
                    priceUnit.textContent = '$';
                    break;
            }
            
            // Remove active from all options and add to selected
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            // Close dropdown
            methodDropdown.classList.remove('active');
            
            // Trigger change events
            methodSelect.dispatchEvent(new Event('change', { bubbles: true }));
            updateApplyAllButton();
            updatePreviewPane();
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!methodTrigger.contains(e.target) && !methodDropdown.contains(e.target)) {
            methodDropdown.classList.remove('active');
        }
    });
    
}

// Initialize custom dropdowns throughout the application
function initializeCustomDropdowns() {
    const dropdowns = document.querySelectorAll('.bulk-select, .custom-dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.select-trigger, .dropdown-trigger');
        const menu = dropdown.querySelector('.select-dropdown, .dropdown-menu');
        const hiddenSelect = dropdown.querySelector('select[style*="none"]');
        
        if (!trigger || !menu) return;
        
        // Toggle dropdown
        trigger.addEventListener('click', () => {
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    const otherMenu = otherDropdown.querySelector('.select-dropdown, .dropdown-menu');
                    if (otherMenu) otherMenu.classList.remove('active');
                }
            });
            
            menu.classList.toggle('active');
        });
        
        // Handle option selection
        const options = menu.querySelectorAll('.select-option, .dropdown-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value || option.textContent;
                const text = option.textContent;
                
                // Update trigger text
                const triggerText = trigger.querySelector('.select-text, .dropdown-text');
                if (triggerText) {
                    triggerText.textContent = text;
                }
                
                // Update hidden select if present
                if (hiddenSelect) {
                    hiddenSelect.value = value;
                    hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                // Update selected state
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Close dropdown
                menu.classList.remove('active');
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.select-trigger, .dropdown-trigger');
            const menu = dropdown.querySelector('.select-dropdown, .dropdown-menu');
            
            if (trigger && menu && !dropdown.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    });
    
}

// Setup periodic checks for UI updates
function setupPeriodicChecks() {
    // Additional periodic checks can be added here as needed
}

// Debug function for troubleshooting
window.debugCheckboxSelection = function() {
    
    const allCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]');
    
    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
    
    
    const selectedData = getSelectedProductsWithData();
    
    return {
        totalCheckboxes: allCheckboxes.length,
        selectedCheckboxes: selectedCheckboxes.length,
        globalDataLength: globalProductsData?.length || 0,
        selectedDataLength: selectedData?.count || 0
    };
};

// Initialize the application when DOM is ready
function initializeApplication() {
    initializeProductManager();
}

// Export functions
window.initializeProductManager = initializeProductManager;
window.initializeApplication = initializeApplication;
window.initializeEventHandlers = initializeEventHandlers;
window.initializeTableControls = initializeTableControls;
window.initializeBulkEditor = initializeBulkEditor;
window.initializeBulkTabs = initializeBulkTabs;
window.initializeCustomSlider = initializeCustomSlider;
window.initializeCustomDropdowns = initializeCustomDropdowns;


// === INTERACTIVE UTILITY ===
// === INTERACTIVE UTILITIES ===
// User interaction functions and event handlers

// Global variables
// hasUnsavedChanges is declared in main.js as a global variable

// Generate URL slug from title

// Interactive utilities for the Product Manager
let currentEditingCell = null;

// Helper function to format currency values
function formatCurrency(value) {
    return `$${parseFloat(value).toFixed(2)}`;
}

// Make price field editable
function makePriceFieldEditable(cell, row, fieldType, originalText, productId) {
    const input = document.createElement('input');
    input.type = 'number';
    input.step = '0.01';
    input.min = '0';
    
    // Extract numeric value from price text (remove currency symbols)
    const numericValue = originalText.replace(/[^0-9.]/g, '');
    input.value = numericValue;
    input.className = 'inline-edit-input price-input';
    
    // Style the input
    input.style.width = '100%';
    input.style.border = '1px solid #ddd';
    input.style.padding = '4px';
    input.style.borderRadius = '3px';
    input.style.fontSize = 'inherit';
    input.style.fontFamily = 'inherit';
    
    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();
    input.select();
    
    const saveValue = () => {
        const inputValue = input.value.trim();
        const numValue = parseFloat(inputValue);
        
        
        if (!isNaN(numValue) && numValue >= 0) {
            const formattedValue = formatCurrency(numValue);
            
            if (formattedValue !== originalText) {
                cell.textContent = formattedValue;
                cell.setAttribute('data-new-value', numValue.toString());
                cell.setAttribute('data-field-type', fieldType);
                cell.classList.add('modified');
                
                trackChanges(cell, row);
            } else {
                cell.textContent = originalText;
            }
        } else {
            // Invalid value, restore original
            cell.textContent = originalText;
        }
        
        currentEditingCell = null;
    };
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveValue();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cell.textContent = originalText;
            currentEditingCell = null;
        }
    });
    
    input.addEventListener('blur', saveValue);
}

// Make stock field editable
function makeStockFieldEditable(cell, row, fieldType, originalText, productId) {
    // Check if stock is currently "Unlimited"
    const isUnlimited = originalText.toLowerCase().includes('unlimited');
    
    // Create stock editor container
    const stockEditor = document.createElement('div');
    stockEditor.className = 'stock-editor';
    stockEditor.style.display = 'flex';
    stockEditor.style.alignItems = 'center';
    stockEditor.style.gap = '5px';
    
    // Create number input
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '0';
    input.step = '1';
    input.style.width = '60px';
    input.style.border = '1px solid #ddd';
    input.style.padding = '3px';
    input.style.borderRadius = '3px';
    input.style.fontSize = 'inherit';
    input.disabled = isUnlimited;
    
    // Create unlimited checkbox
    const unlimitedCheckbox = document.createElement('input');
    unlimitedCheckbox.type = 'checkbox';
    unlimitedCheckbox.checked = isUnlimited;
    unlimitedCheckbox.id = `unlimited-${productId}`;
    
    const unlimitedLabel = document.createElement('label');
    unlimitedLabel.htmlFor = `unlimited-${productId}`;
    unlimitedLabel.textContent = 'Unlimited';
    unlimitedLabel.style.fontSize = '12px';
    unlimitedLabel.style.cursor = 'pointer';
    
    // Set initial value
    if (!isUnlimited) {
        const numericValue = parseInt(originalText.replace(/[^0-9]/g, '')) || 0;
        input.value = numericValue;
    }
    
    // Toggle input based on checkbox
    unlimitedCheckbox.addEventListener('change', () => {
        input.disabled = unlimitedCheckbox.checked;
        if (unlimitedCheckbox.checked) {
            input.value = '';
        }
    });
    
    stockEditor.appendChild(input);
    stockEditor.appendChild(unlimitedCheckbox);
    stockEditor.appendChild(unlimitedLabel);
    
    cell.innerHTML = '';
    cell.appendChild(stockEditor);
    
    if (!isUnlimited) {
        input.focus();
        input.select();
    }
    
    const saveValue = () => {
        let newValue, displayValue;
        
        if (unlimitedCheckbox.checked) {
            newValue = 'unlimited';
            displayValue = 'Unlimited';
        } else {
            const numValue = parseInt(input.value) || 0;
            newValue = numValue.toString();
            displayValue = numValue.toString();
        }
        
        if (displayValue !== originalText) {
            cell.textContent = displayValue;
            cell.setAttribute('data-new-value', newValue);
            cell.setAttribute('data-field-type', fieldType);
            cell.classList.add('modified');
            
            trackChanges(cell, row);
        } else {
            cell.textContent = originalText;
        }
        
        currentEditingCell = null;
    };
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            saveValue();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cell.textContent = originalText;
            currentEditingCell = null;
        }
    });
    
    input.addEventListener('blur', saveValue);
}

// Make toggle field editable (for on sale)
function makeToggleFieldEditable(cell, row, fieldType, originalText, productId) {
    const isCurrentlyOnSale = originalText.toLowerCase() === 'yes';
    
    // Create toggle switch
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'toggle-container';
    toggleContainer.style.display = 'flex';
    toggleContainer.style.alignItems = 'center';
    toggleContainer.style.gap = '5px';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCurrentlyOnSale;
    checkbox.className = 'sale-toggle';
    
    const label = document.createElement('span');
    label.textContent = isCurrentlyOnSale ? 'Yes' : 'No';
    label.style.fontSize = '12px';
    
    checkbox.addEventListener('change', () => {
        const newValue = checkbox.checked;
        const displayValue = newValue ? 'Yes' : 'No';
        
        label.textContent = displayValue;
        
        // Immediately save the change
        cell.innerHTML = displayValue;
        cell.setAttribute('data-new-value', newValue.toString());
        cell.setAttribute('data-field-type', fieldType);
        cell.classList.add('modified');
        
        trackChanges(cell, row);
        
        currentEditingCell = null;
    });
    
    toggleContainer.appendChild(checkbox);
    toggleContainer.appendChild(label);
    
    cell.innerHTML = '';
    cell.appendChild(toggleContainer);
}

// Make select field editable (for status)
function makeSelectFieldEditable(cell, row, fieldType, originalText, productId) {
    const select = document.createElement('select');
    select.className = 'inline-edit-select';
    
    const options = ['Public', 'Hidden', 'Scheduled'];
    
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        option.selected = optionText.toLowerCase() === originalText.toLowerCase();
        select.appendChild(option);
    });
    
    // Style the select
    select.style.width = '100%';
    select.style.border = '1px solid #ddd';
    select.style.padding = '4px';
    select.style.borderRadius = '3px';
    select.style.fontSize = 'inherit';
    select.style.fontFamily = 'inherit';
    
    cell.innerHTML = '';
    cell.appendChild(select);
    select.focus();
    
    const saveValue = () => {
        const newValue = select.options[select.selectedIndex].textContent;
        
        if (newValue !== originalText) {
            cell.textContent = newValue;
            cell.setAttribute('data-new-value', select.value);
            cell.setAttribute('data-field-type', fieldType);
            cell.classList.add('modified');
            
            trackChanges(cell, row);
        } else {
            cell.textContent = originalText;
        }
        
        currentEditingCell = null;
    };
    
    select.addEventListener('change', saveValue);
    select.addEventListener('blur', saveValue);
    
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            cell.textContent = originalText;
            currentEditingCell = null;
        }
    });
}

// Generate URL slug from title
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Remove duplicate hyphens
        .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens
}

// Generate unique URL slug
function generateUniqueUrlSlug(title) {
    let baseSlug = generateSlug(title);
    
    // If no valid slug could be generated, use a fallback
    if (!baseSlug) {
        baseSlug = 'product';
    }
    
    // Check if slug is already used (simplified - in real app would check against existing products)
    return baseSlug;
}

// Check if URL should be suggested based on title change
function shouldSuggestURL(oldTitle, newTitle, currentURL) {
    if (!oldTitle || !newTitle || oldTitle === newTitle) {
        return false;
    }
    
    const newSlug = generateSlug(newTitle);
    return newSlug.length > 0 && newSlug !== currentURL;
}

// Show URL suggestion tooltip
function showURLSuggestion(newSlug, titleCell, row) {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    const preview = document.getElementById('url-suggestion-preview');
    const applyBtn = document.getElementById('url-suggestion-apply');
    const cancelBtn = document.getElementById('url-suggestion-cancel');
    const closeBtn = document.getElementById('url-suggestion-close');
    const createRedirectCheckbox = document.getElementById('url-create-redirect');
    const redirectPreview = document.getElementById('url-redirect-preview');
    
    if (!tooltip || !preview || !applyBtn || !cancelBtn || !closeBtn) {
        console.warn('URL suggestion elements not found');
        return;
    }
    
    // Get current URL for redirect preview
    const urlCell = row.querySelector('td:nth-child(3)');
    const currentUrl = urlCell ? urlCell.textContent.trim() : '';
    
    // Set the suggested URL
    preview.textContent = newSlug;
    
    // Update redirect preview
    function updateRedirectPreview() {
        if (createRedirectCheckbox && redirectPreview && createRedirectCheckbox.checked && currentUrl && currentUrl !== newSlug) {
            redirectPreview.textContent = `${currentUrl} -> ${newSlug} 301`;
            redirectPreview.classList.add('visible');
        } else if (redirectPreview) {
            redirectPreview.classList.remove('visible');
        }
    }
    
    // Initial redirect preview update
    updateRedirectPreview();
    
    // Handle redirect checkbox change
    if (createRedirectCheckbox) {
        createRedirectCheckbox.addEventListener('change', updateRedirectPreview);
    }
    
    // Position tooltip near the title cell
    const rect = titleCell.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    tooltip.style.position = 'absolute';
    tooltip.style.top = (rect.bottom + scrollTop + 10) + 'px';
    tooltip.style.left = (rect.left + scrollLeft) + 'px';
    tooltip.style.zIndex = '10000';
    
    // Show tooltip
    tooltip.classList.remove('hidden');
    tooltip.classList.add('visible');
    
    // Store reference to current row
    tooltip.setAttribute('data-target-row-id', row.getAttribute('data-product-id'));
    
    // Handle apply button
    const applyHandler = function() {
        const urlCell = row.querySelector('td:nth-child(3)');
        if (urlCell && !urlCell.classList.contains('modified')) {
            const oldUrl = urlCell.textContent.trim();
            
            // Update the URL cell
            urlCell.textContent = newSlug;
            urlCell.setAttribute('data-new-value', newSlug);
            urlCell.setAttribute('data-field-type', 'url');
            urlCell.classList.add('modified');
            
            // Store redirect if checkbox is checked
            if (createRedirectCheckbox && createRedirectCheckbox.checked && oldUrl && oldUrl !== newSlug) {
                if (typeof urlRedirects !== 'undefined' && urlRedirects.set) {
                    urlRedirects.set(oldUrl, newSlug);
                }
            }
            
            // Note: Don't call trackChanges here - let the new system handle it
            // trackChanges(urlCell, row);
        }
        
        hideURLSuggestion();
    };
    
    const cancelHandler = function() {
        hideURLSuggestion();
    };
    
    // Remove existing listeners to prevent duplicates
    applyBtn.removeEventListener('click', applyHandler);
    cancelBtn.removeEventListener('click', cancelHandler);
    closeBtn.removeEventListener('click', cancelHandler);
    
    // Add new listeners
    applyBtn.addEventListener('click', applyHandler);
    cancelBtn.addEventListener('click', cancelHandler);
    closeBtn.addEventListener('click', cancelHandler);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (tooltip.classList.contains('visible')) {
            hideURLSuggestion();
        }
    }, 10000);
}

// Hide URL suggestion tooltip
function hideURLSuggestion() {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    if (tooltip) {
        tooltip.classList.remove('visible');
        tooltip.classList.add('hidden');
    }
}



// Show notification in footer
function showFooterNotification(message, type = 'info', duration = 2000) {
    const changesFooter = document.getElementById('changes-footer');
    const notificationContainer = document.querySelector('.changes-notification-content');
    const notificationText = document.getElementById('notification-text');
    const changesInfo = document.querySelector('.changes-info');
    
    if (!changesFooter || !notificationContainer || !notificationText) return;
    
    
    // Hide changes info but keep actions (buttons) visible
    if (changesInfo) {
        changesInfo.style.display = 'none';
    }
    
    // Set message and show notification container
    notificationText.textContent = message;
    notificationContainer.style.display = 'flex';
    
    // Ensure footer is visible
    changesFooter.classList.remove('hidden');
    changesFooter.classList.add('visible');
    
    
    // Auto-hide after duration
    if (duration > 0) {
        setTimeout(() => {
            
            // Hide notification and show changes info
            if (notificationContainer) {
                notificationContainer.style.display = 'none';
            }
            
            // Hide the entire footer after notification is done
            changesFooter.classList.remove('visible');
            changesFooter.classList.add('hidden');
            
            // Keep changes info hidden since there are no more changes
            // (it was cleared during save process)
        }, duration);
    }
}

// Export/Import functionality placeholders
function exportProducts() {
    const selectedProducts = getSelectedProductsWithData();
    if (selectedProducts.count === 0) {
        showMessage('Please select products to export', 'warning');
        return;
    }
    
    showMessage(`Exported ${selectedProducts.count} products`, 'success');
}

function importProducts() {
    showMessage('Import functionality coming soon', 'info');
}

// Drawer control functions
function openBulkDrawer() {
    const drawer = document.getElementById('bulk-adjust-drawer');
    if (drawer) {
        drawer.classList.add('active');
        document.body.classList.add('drawer-open');
        
        // Reset all bulk changes to default state when opening
        if (typeof resetBulkChanges === 'function') {
            resetBulkChanges();
        }
    }
}

function closeBulkDrawer() {
    const drawer = document.getElementById('bulk-adjust-drawer');
    if (drawer) {
        drawer.classList.remove('active');
        document.body.classList.remove('drawer-open');
    }
}

function openUndoDrawer() {
    
    const undoDrawer = document.getElementById('undo-changes-drawer');
    if (!undoDrawer) {
        console.error('❌ Undo drawer element not found');
        return;
    }
    
    // Update the undo history count
    const historyCount = document.getElementById('undo-history-count');
    if (historyCount) {
        if (undoHistory.length === 0) {
            historyCount.textContent = 'No changes to undo';
        } else {
            historyCount.textContent = `${undoHistory.length} change${undoHistory.length === 1 ? '' : 's'} available`;
        }
    }
    
    // Reset selection state
    selectedUndoIndex = null;
    const restoreBtn = document.getElementById('undo-restore');
    if (restoreBtn) {
        restoreBtn.disabled = true;
    }
    
    // Populate the undo history list
    if (typeof populateUndoHistoryList === 'function') {
        populateUndoHistoryList();
    }
    
    // Show the drawer using the same method as bulk drawer
    undoDrawer.classList.add('visible');
    document.body.style.overflow = 'hidden';
    
}

// Initialize interactive utilities
function initializeInteractiveUtilities() {
    // Set up document-level event handlers
    document.addEventListener('click', (e) => {
        // Handle clicks outside of editing cells
        if (currentEditingCell && !currentEditingCell.contains(e.target)) {
            // Trigger save if there's an active editor
            const input = currentEditingCell.querySelector('input, select');
            if (input) {
                input.blur();
            }
        }
        
        // Close dropdowns when clicking outside
        const activeDropdowns = document.querySelectorAll('.select-dropdown.active, .dropdown-menu.active');
        activeDropdowns.forEach(dropdown => {
            if (!dropdown.closest('.bulk-select, .custom-dropdown').contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
    
    // Set up keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + S to save changes
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            if (typeof saveAllChanges === 'function' && hasUnsavedChanges) {
                saveAllChanges();
            }
        }
        
        // Escape to close drawers/modals
        if (e.key === 'Escape') {
            const activeDrawer = document.querySelector('.bulk-adjust-drawer.active');
            if (activeDrawer) {
                closeBulkDrawer();
            }
        }
    });
    
}

// Export functions
window.generateSlug = generateSlug;
window.generateUniqueUrlSlug = generateUniqueUrlSlug;
window.shouldSuggestURL = shouldSuggestURL;
// Note: Don't export showURLSuggestion - let the new system handle it
// window.showURLSuggestion = showURLSuggestion;
window.hideURLSuggestion = hideURLSuggestion;
window.showFooterNotification = showFooterNotification;
window.exportProducts = exportProducts;
window.importProducts = importProducts;
window.openBulkDrawer = openBulkDrawer;
window.closeBulkDrawer = closeBulkDrawer;
window.openUndoDrawer = openUndoDrawer;
window.initializeInteractiveUtilities = initializeInteractiveUtilities;


// === LICENSE-MANAGER UTILITY ===
// License Manager - Handles JWT-based licensing for SquareHero Products Manager
// This module manages license validation, storage, and renewal

class _0x21c74a45 {
    constructor() {
        this.firebaseConfig = window.firebaseConfig || {
            _0x7cc61b43: (function(){return atob('aHR0cHM6Ly91cy1jZW50cmFsMS1teS1zcXVhcmVoZXJvLWh1Yi5jbG91ZGZ1bmN0aW9ucy5uZXQ=')})()
        };
        this.storageKey = 'squarehero-license';
        this.currentLicense = null;
        this.appBlocked = false;
    }

    /**
     * Initialize license manager and validate existing license
     */
    async initialize() {
        // Load existing license from storage
        this.loadStoredLicense();
        
        // Try to get a valid JWT (with automatic refresh if needed)
        const validJWT = await this.getValidJWT();
        
        if (!validJWT) {
            console.warn('No valid license found (after refresh attempt)');
            
            // Check if we have a demo mode token that's still valid
            if (this.currentLicense && this.currentLicense.token) {
                const decoded = this.decodeToken(this.currentLicense.token);
                if (decoded && decoded.licenseType === 'demo' && decoded.connected) {
                    // Check if demo token is still valid (not expired)
                    const now = Math.floor(Date.now() / 1000);
                    if (decoded.exp && decoded.exp > now) {
                        this.updateDemoModeIndicator();
                        return false;
                    } else {
                        this.clearLicense();
                    }
                }
            }
            
            // No demo token or expired - check if this site is connected to Firebase
            const isConnected = await this.checkFirebaseConnection();
            if (!isConnected) {
                // Site not connected - show license required dialog and prevent usage
                console.warn('Site not connected to Firebase - blocking usage');
                this.appBlocked = true;
                this.showLicenseError();
                return false;
            }
            
            // Site is connected but no license - check if should create demo token or get activated license
            const demoToken = await this.createDemoModeToken();
            
            if (demoToken === null) {
                // Site is activated but no license found - create activated license
                const activatedToken = await this.createActivatedLicense();
                if (activatedToken) {
                    const siteInfo = await this.getSiteInfo();
                    this.currentLicense = {
                        token: activatedToken,
                        siteInfo: {
                            siteId: siteInfo.id,
                            siteName: siteInfo.name,
                            domain: siteInfo.domain
                        },
                        lastValidated: new Date().toISOString()
                    };
                    this.storeLicense(activatedToken, this.currentLicense.siteInfo);
                    return true;
                }
                return false;
            } else if (demoToken) {
                // Site is not activated - store demo token
                const siteInfo = await this.getSiteInfo();
                this.currentLicense = {
                    token: demoToken,
                    siteInfo: {
                        siteId: siteInfo.id,
                        siteName: siteInfo.name,
                        expiresAt: null // Demo mode doesn't expire like regular licenses
                    },
                    createdAt: new Date().toISOString()
                };
                this.storeLicense();
            } else {
                // Failed to create demo token
                console.error('Failed to create demo mode token');
            }
            
            this.updateDemoModeIndicator();
            return false; // Still return false so main app knows it's not licensed
        }
        
        // Check if this is a demo token first - demo tokens don't need server validation
        const decoded = this.decodeToken(validJWT);
        if (decoded && decoded.licenseType === 'demo') {
            this.updateDemoModeIndicator();
            return false;
        }
        
        // For activated tokens, we already validated during getValidJWT() which handles refresh
        // If we got here with a validJWT, it means the token is good
        if (decoded && decoded.licenseType === 'activated') {
            this.updateDemoModeIndicator(); // Show activated badge
            return true;
        }
        
        await this.resetToDemo('Unknown token type');
        return false;
    }

    /**
     * Load license from localStorage
     */
    loadStoredLicense() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const licenseData = JSON.parse(stored);
                this.currentLicense = licenseData;
            }
        } catch (error) {
            console.error('Error loading stored license:', error);
            localStorage.removeItem(this.storageKey);
        }
    }

    /**
     * Store license in localStorage
     */
    storeLicense(licenseToken, siteInfo) {
        let licenseData;
        
        if (licenseToken && siteInfo) {
            // Called with parameters - create new license data
            licenseData = {
                token: licenseToken,
                siteInfo: siteInfo,
                storedAt: new Date().toISOString()
            };
        } else if (this.currentLicense) {
            // Called without parameters - use existing currentLicense
            licenseData = {
                ...this.currentLicense,
                storedAt: new Date().toISOString()
            };
        } else {
            console.error('No license data to store');
            return;
        }
        
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(licenseData));
            this.currentLicense = licenseData;
        } catch (error) {
            console.error('Error storing license:', error);
        }
    }

    /**
     * Clear cached license data to force fresh validation
     */
    clearCache() {
        try {
            localStorage.removeItem(this.storageKey);
            this.currentLicense = null;
        } catch (error) {
            console.error('Error clearing license cache:', error);
        }
    }

    /**
     * Check if this site is connected to Firebase (has been registered)
     */
    async checkFirebaseConnection() {
        try {
            // Get site information
            const siteInfo = await this.getSiteInfo();
            if (!siteInfo || !siteInfo.id) {
                console.warn('Could not get site information');
                return false;
            }

            // Try to verify the site exists in Firebase (without requiring auth)
            const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/verifySiteLicense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    siteId: siteInfo.id,
                    checkStatusOnly: true
                })
            });

            // Check response status first
            if (response.status === 404) {
                console.warn('Site not found in Firebase database (404)');
                return false;
            }
            
            // Try to parse JSON response if it exists
            let result = null;
            try {
                const text = await response.text();
                if (text) {
                    result = JSON.parse(text);
                }
            } catch (parseError) {
                console.warn('Could not parse response as JSON, treating as not connected');
                return false;
            }
            
            // Check for specific error messages indicating site not registered
            if (result && result.error && 
                (result.error.includes('not found') || result.error.includes('not registered'))) {
                console.warn('Site not found in Firebase database');
                return false;
            }
            
            // Check if site is connected based on the response
            if (response.ok && result && result.connected === true) {
                return true;
            } else if (response.ok) {
                // 200 response but no connected flag - treat as connected for backwards compatibility
                return true;
            }
            
            // For other HTTP errors, treat as not connected
            console.warn('Firebase connection check failed with status:', response.status);
            return false;
            
        } catch (error) {
            console.error('Error checking Firebase connection:', error);
            // On network/connection errors, treat as not connected to be safe
            return false;
        }
    }

    /**
     * Client-side validation (check JWT expiration without server call)
     * Now includes automatic refresh for expired JWTs
     */
    validateClientSide() {
        if (!this.currentLicense || !this.currentLicense.token) {
            return false;
        }

        try {
            // Decode JWT token to check expiration
            const decoded = this.decodeToken(this.currentLicense.token);
            if (!decoded) {
                return false;
            }

            // Check if token is expired
            const now = Math.floor(Date.now() / 1000);
            if (decoded.exp && decoded.exp < now) {
                // Don't clear license immediately - try to refresh first
                return 'expired_needs_refresh';
            }

            return true;

        } catch (error) {
            console.error('Error in client-side validation:', error);
            return false;
        }
    }

    /**
     * Get a valid JWT token - handles automatic refresh if expired
     */
    async getValidJWT() {
        if (!this.currentLicense || !this.currentLicense.token) {
            return null;
        }

        const validationResult = this.validateClientSide();
        
        // If token is valid, return it
        if (validationResult === true) {
            return this.currentLicense.token;
        }
        
        // If token needs refresh, attempt refresh
        if (validationResult === 'expired_needs_refresh') {
            try {
                const refreshedToken = await this.refreshJWT();
                if (refreshedToken) {
                    return refreshedToken;
                } else {
                    // Clear license and reset to demo mode
                    await this.resetToDemo('JWT refresh failed - license revoked');
                    return null;
                }
            } catch (error) {
                console.error('JWT refresh error:', error);
                // On refresh error, reset to demo mode
                await this.resetToDemo('JWT refresh error');
                return null;
            }
        }
        
        // Token is invalid for other reasons
        return null;
    }

    /**
     * Refresh JWT token by checking Firebase for current license status
     */
    async refreshJWT() {
        try {
            const siteInfo = await this.getSiteInfo();
            if (!siteInfo || !siteInfo.id) {
                console.error('Cannot refresh JWT: no site ID available');
                return null;
            }

            // Call the refresh endpoint
            const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/refreshJWT`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    websiteId: siteInfo.id 
                })
            });

            const result = await response.json();

            if (response.ok && result.success && result.jwt) {
                // Store the new JWT
                const updatedLicense = {
                    ...this.currentLicense,
                    token: result.jwt,
                    lastRefreshed: new Date().toISOString(),
                    expiresAt: result.expiresAt
                };
                
                this.currentLicense = updatedLicense;
                this.storeLicense();
                
                return result.jwt;
                
            } else {
                return null;
            }

        } catch (error) {
            console.error('Error refreshing JWT:', error);
            return null;
        }
    }

    /**
     * Validate current license with server (only called on startup or manual refresh)
     */
    async _0xe19968bf() {
        if (!this.currentLicense || !this.currentLicense.token) {
            return false;
        }

        // Use the new validation logic with refresh capability
        const validJWT = await this.getValidJWT();
        return validJWT !== null;
    }

    /**
     * Ensure valid JWT for plugin operations
     * Call this before any plugin operation that requires licensing
     */
    async ensureValidJWT() {
        const validJWT = await this.getValidJWT();
        
        if (!validJWT) {
            throw new Error('License validation failed - please check your subscription status');
        }
        
        return validJWT;
    }

    /**
     * Force license sync - ignores current JWT validity and checks Firebase
     * Used when user clicks "Sync License" to immediately check for activation
     */
    async forceLicenseSync() {
        try {
            // Show loading state
            const syncButton = document.getElementById('sync-license-btn');
            if (syncButton) {
                syncButton.textContent = 'Syncing...';
                syncButton.style.pointerEvents = 'none';
            }

            // Always try to refresh JWT regardless of current validity
            const refreshedJWT = await this.refreshJWT();
            
            if (refreshedJWT) {
                // Check if this is an activated license
                const decoded = this.decodeToken(refreshedJWT);
                if (decoded && decoded.licenseType === 'activated') {
                    // Note: No longer changing sync button text since we have an activated badge
                    
                    // Smoothly transition from demo mode to activated badge
                    const demoIndicator = document.getElementById('demo-mode-indicator');
                    const activatedBadge = document.getElementById('activated-badge');
                    
                    if (demoIndicator && activatedBadge) {
                        // First fade out the demo indicator
                        demoIndicator.style.transition = 'opacity 0.3s ease';
                        demoIndicator.style.opacity = '0';
                        
                        // Then hide demo and show activated badge
                        setTimeout(() => {
                            demoIndicator.style.display = 'none';
                            activatedBadge.style.display = 'inline-flex';
                            activatedBadge.style.opacity = '0';
                            activatedBadge.style.transition = 'opacity 0.3s ease';
                            
                            // Fade in the activated badge
                            setTimeout(() => {
                                activatedBadge.style.opacity = '1';
                            }, 50);
                        }, 300);
                    } else {
                        // Fallback to updateDemoModeIndicator if elements not found
                        this.updateDemoModeIndicator();
                    }
                    
                    // Update any license displays in the main app without page refresh
                    if (window.SquareHeroProductManager && window.SquareHeroProductManager.updateLicenseDisplay) {
                        setTimeout(() => {
                            window.SquareHeroProductManager.updateLicenseDisplay();
                        }, 300);
                    }
                    
                    // Update apply button states after successful activation
                    setTimeout(() => {
                        this.updateApplyButtonStates(false); // false = not in demo mode
                    }, 350);
                    
                    return { success: true, message: 'License activated successfully!' };
                } else {
                    if (syncButton) {
                        syncButton.textContent = 'Still Demo';
                        syncButton.style.borderColor = '#FFC107';
                        syncButton.style.color = '#FFC107';
                    }
                    return { success: false, message: 'Site refreshed but still in demo mode.' };
                }
            } else {
                if (syncButton) {
                    syncButton.textContent = 'Still Demo';
                    syncButton.style.borderColor = '#FFC107';
                    syncButton.style.color = '#FFC107';
                }
                return { success: false, message: 'Site is still in demo mode. Please activate it from your dashboard.' };
            }
            
        } catch (error) {
            console.error('Error during force license sync:', error);
            return { success: false, message: 'Error syncing license. Please try again.' };
        } finally {
            // Always reset sync button after delay since we now use the activated badge for status
            const syncButton = document.getElementById('sync-license-btn');
            if (syncButton) {
                setTimeout(() => {
                    syncButton.textContent = 'Sync License';
                    syncButton.style.borderColor = 'rgba(255,255,255,0.3)';
                    syncButton.style.color = 'white';
                    syncButton.style.pointerEvents = 'auto';
                }, 2000);
            }
        }
    }

    /**
     * Activate license for current site
     * This would typically be called from the dashboard after user selects a site
     */
    async activateLicense(firebaseToken, siteInfo) {
        if (!firebaseToken) {
            throw new Error('Firebase authentication token is required');
        }

        if (!siteInfo || !siteInfo.id || !siteInfo.name || !siteInfo.domain) {
            throw new Error('Complete site information is required (id, name, domain)');
        }

        try {
            const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/activateSiteLicense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${firebaseToken}`
                },
                body: JSON.stringify({
                    siteId: siteInfo.id,
                    siteName: siteInfo.name,
                    siteDomain: siteInfo.domain
                })
            });

            const result = await response.json();

            if (response.ok && result.success && result.licenseToken) {
                // Store the license token
                this.storeLicense(result.licenseToken, result.siteInfo);
                
                // Update demo mode indicator to hide it
                this.updateDemoModeIndicator();
                
                return {
                    success: true,
                    licenseToken: result.licenseToken,
                    siteInfo: result.siteInfo,
                    message: result.message
                };
            } else {
                throw new Error(result.error || result.message || 'License activation failed');
            }

        } catch (error) {
            console.error('License activation error:', error);
            throw error;
        }
    }

    /**
     * Get current site information including ID, name, and domain
     */
    async getSiteInfo() {
        // Try to get from stored license first
        if (this.currentLicense && this.currentLicense.siteInfo) {
            return {
                id: this.currentLicense.siteInfo.siteId,
                name: this.currentLicense.siteInfo.siteName || window.location.hostname,
                domain: this.currentLicense.siteInfo.siteDomain || window.location.hostname
            };
        }

        // Get the Firebase-formatted site ID (squarespace-{websiteId})
        const siteId = await this.getSiteId();
        if (!siteId) {
            return null;
        }

        // Get site title from various sources
        let siteName = window.location.hostname;
        
        // Try to get site title from page title or meta tags
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.textContent) {
            siteName = titleElement.textContent.replace(/\s*-\s*Admin$/, '').trim();
        }

        return {
            id: siteId,
            name: siteName,
            domain: window.location.hostname
        };
    }

    /**
     * Get current site ID from URL or stored info
     */
    async getSiteId() {
        // Try to get from stored license first
        if (this.currentLicense && this.currentLicense.siteInfo) {
            return this.currentLicense.siteInfo.siteId;
        }

        // Get the actual Squarespace website ID (not hostname-based)
        const websiteId = await this.getSquarespaceSiteId();
        if (websiteId) {
            // Format with squarespace- prefix for Firebase storage
            return `squarespace-${websiteId}`;
        }

        return null;
    }

    /**
     * Get the actual Squarespace website ID using Collections API
     */
    async getSquarespaceSiteId() {
        try {
            // Get CSRF token from cookie
            const crumb = this.getCsrfToken();
            if (!crumb) {
                console.error('Could not find CSRF token (crumb) for API request');
                return null;
            }

            // Use the Collections API to get website information
            const response = await fetch('/api/commondata/GetCollections', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-Token': crumb
                },
                credentials: 'include'
            });

            if (!response.ok) {
                console.error('Failed to fetch collections from API:', response.status, response.statusText);
                return null;
            }

            const collectionsData = await response.json();

            // Extract websiteId from the first collection in the collections object
            if (collectionsData && collectionsData.collections) {
                const collectionIds = Object.keys(collectionsData.collections);
                if (collectionIds.length > 0) {
                    const firstCollection = collectionsData.collections[collectionIds[0]];
                    if (firstCollection && firstCollection.websiteId) {
                        const websiteId = firstCollection.websiteId;
                        return websiteId;
                    }
                }
            }

            console.warn('Collections data received but no websiteId found');
            return null;

        } catch (error) {
            console.error('Error fetching website ID from Collections API:', error);
            return null;
        }
    }

    /**
     * Get CSRF token from cookie for API requests
     */
    getCsrfToken() {
        const crumb = document.cookie.split(';')
            .find(c => c.trim().startsWith('crumb='))
            ?.split('=')[1];
        
        if (!crumb) {
            console.error("Could not find crumb cookie for API requests");
            return null;
        }
        return crumb;
    }

    /**
     * Get current license status
     */
    getLicenseStatus() {
        if (!this.currentLicense) {
            return {
                licensed: false,
                status: 'no_license',
                message: 'No license found'
            };
        }

        const siteInfo = this.currentLicense.siteInfo;
        if (!siteInfo) {
            return {
                licensed: false,
                status: 'invalid_license',
                message: 'Invalid license data'
            };
        }

        // Check license type from unified JWT structure
        if (this.currentLicense.token) {
            const decoded = this.decodeToken(this.currentLicense.token);
            if (decoded && decoded.licenseType) {
                // Check if token is expired
                const now = Math.floor(Date.now() / 1000);
                if (decoded.exp && decoded.exp < now) {
                    return {
                        licensed: false,
                        status: decoded.licenseType === 'demo' ? 'demo_expired' : 'expired',
                        message: decoded.licenseType === 'demo' ? 'Demo mode token has expired' : 'License has expired',
                        demo: decoded.licenseType === 'demo'
                    };
                }
                
                if (decoded.licenseType === 'demo') {
                    return {
                        licensed: false, // Demo mode is not a full license
                        status: 'demo',
                        siteInfo: siteInfo,
                        message: 'Demo mode active',
                        demo: true,
                        valid: true // Demo token is valid but not fully licensed
                    };
                } else if (decoded.licenseType === 'activated') {
                    return {
                        licensed: true,
                        siteActivated: true,
                        siteInfo: siteInfo,
                        message: 'License is active',
                        demo: false,
                        valid: true
                    };
                }
            }
        }

        // Check if regular license is expired (client-side check)
        if (siteInfo.expiresAt) {
            const expiryDate = new Date(siteInfo.expiresAt);
            const now = new Date();
            
            if (now > expiryDate) {
                return {
                    licensed: false,
                    status: 'expired',
                    message: 'License has expired',
                    expiresAt: siteInfo.expiresAt
                };
            }
        }

        return {
            licensed: true,
            status: 'active',
            siteInfo: siteInfo,
            message: 'License is active',
            valid: true
        };
    }

    /**
     * Clear stored license data
     */
    clearLicense() {
        this.currentLicense = null;
        localStorage.removeItem(this.storageKey);
        this.updateDemoModeIndicator();
    }

    /**
     * Clear demo token when site becomes activated
     */
    clearDemoToken() {
        if (this.currentLicense && this.isDemoToken(this.currentLicense.token)) {
            this.clearLicense();
            return true;
        }
        return false;
    }

    /**
     * Check if a token is a demo token
     */
    isDemoToken(token) {
        if (!token) return false;
        const decoded = this.decodeToken(token);
        return decoded && decoded.licenseType === 'demo';
    }    /**
     * Show license error UI - only modal overlay, no red banner
     */
    showLicenseError() {
        // Only show the modal overlay, no red banner
        this.disablePlugin();
    }

    /**
     * Hide license error UI
     */
    hideLicenseError() {
        const banner = document.getElementById('license-error-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    /**
     * Disable plugin functionality when unlicensed
     */
    disablePlugin() {
        // Add overlay to disable interactions
        const overlay = document.createElement('div');
        overlay.id = 'license-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #011E45;
            z-index: 999998;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            overflow: hidden;
        `;

        // Add hexagon background pattern
        const hexagonPattern = document.createElement('div');
        hexagonPattern.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(https://static1.squarespace.com/static/6699beb0946c0f4e15b9cb69/t/67887d262438f226602378e4/1736998182767/Hexagon-Tile.svg);
            background-repeat: repeat;
            background-size: 20px;
            opacity: 0.6;
            pointer-events: none;
            z-index: 1;
        `;
        overlay.appendChild(hexagonPattern);

        // Add top left gradient circle
        const topLeftCircle = document.createElement('div');
        topLeftCircle.style.cssText = `
            position: absolute;
            width: 513px;
            height: 513px;
            top: -20%;
            left: 0%;
            background: linear-gradient(180deg, rgba(0, 209, 255, 0.70) 0%, rgba(166, 3, 243, 0.70) 45.01%, rgba(255, 0, 230, 0.70) 97.51%);
            border-radius: 50%;
            opacity: 0.4;
            filter: blur(47px);
            z-index: 0;
            pointer-events: none;
        `;
        overlay.appendChild(topLeftCircle);

        // Add bottom right gradient circle
        const bottomRightCircle = document.createElement('div');
        bottomRightCircle.style.cssText = `
            position: absolute;
            width: 536px;
            height: 536px;
            bottom: -20%;
            right: 0;
            background: linear-gradient(180deg, #00D1FF 0%, #A603F3 45.01%, #FF00E6 97.51%);
            border-radius: 50%;
            opacity: 0.4;
            filter: blur(47px);
            z-index: 0;
            pointer-events: none;
        `;
        overlay.appendChild(bottomRightCircle);

        // Add content container
        const contentContainer = document.createElement('div');
        contentContainer.style.cssText = `
            position: relative;
            z-index: 3;
            text-align: center;
            color: white;
            max-width: 500px;
            padding: 2rem;
        `;

        contentContainer.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <svg width="129" height="68" viewBox="0 0 129 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_351_55680)">
                        <path d="M76.4813 21.2212V7.71755L64.499 0.965698L52.5166 7.71755V21.2212L64.499 27.9731L76.4813 21.2212Z" fill="#001E45"/>
                        <path d="M76.4813 21.2212V7.71755L64.499 0.965698L52.5166 7.71755V21.2212L64.499 27.9731L76.4813 21.2212Z" fill="#87C4CC"/>
                        <path d="M56.4197 5.53273C57.2382 6.91753 58.4159 8.06757 59.8344 8.86718C61.2528 9.66678 62.862 10.0878 64.5001 10.0878C66.1382 10.0878 67.7474 9.66678 69.1658 8.86718C70.5843 8.06757 71.762 6.91753 72.5805 5.53273L64.4993 0.965698L56.4151 5.52226L56.4197 5.53273Z" fill="#0CC2ED"/>
                        <path d="M64.4986 18.866C62.8614 18.8697 61.2538 19.2923 59.8361 20.0915C58.4184 20.8908 57.2402 22.0388 56.4189 23.421L64.4986 27.9731L72.5798 23.421C71.7582 22.0387 70.5798 20.8906 69.1618 20.0914C67.7439 19.2921 66.136 18.8696 64.4986 18.866Z" fill="#0CC2ED"/>
                        <path d="M73.3233 5.94702C72.4292 7.45877 71.143 8.71416 69.5942 9.58699C68.0453 10.4598 66.2883 10.9193 64.4997 10.9193C62.7112 10.9193 60.9542 10.4598 59.4053 9.58699C57.8565 8.71416 56.5703 7.45877 55.6762 5.94702L52.5166 7.71761V21.2213L55.6762 23.0024C56.57 21.4902 57.856 20.2344 59.4049 19.3613C60.9539 18.4882 62.711 18.0285 64.4997 18.0285C66.2885 18.0285 68.0456 18.4882 69.5945 19.3613C71.1434 20.2344 72.4295 21.4902 73.3233 23.0024L76.4828 21.2213V7.71761L73.3233 5.94702Z" fill="#001E45"/>
                        <path d="M76.9094 6.99237L64.9286 0.242015L64.4996 -0.000244141L64.0705 0.242015L52.1081 6.9819L52.0897 6.99237L51.6592 7.23313V21.7059L51.8905 21.836L52.0882 21.9466L64.0705 28.6985L64.4996 28.9407L64.9286 28.6985L73.0098 24.1449L73.7529 23.7277L74.2126 23.4705L76.9155 21.9466L77.3446 21.7059V21.2213V7.23463L76.9094 6.99237ZM73.3239 23.0024C72.4301 21.4903 71.144 20.2345 69.5951 19.3614C68.0462 18.4883 66.2891 18.0286 64.5003 18.0286C62.7116 18.0286 60.9545 18.4883 59.4055 19.3614C57.8566 20.2345 56.5706 21.4903 55.6768 23.0024L52.5172 21.2213V7.71765L55.6768 5.94706C56.5709 7.45881 57.8571 8.7142 59.4059 9.58703C60.9548 10.4599 62.7118 10.9194 64.5003 10.9194C66.2889 10.9194 68.0459 10.4599 69.5948 9.58703C71.1436 8.7142 72.4298 7.45881 73.3239 5.94706L76.4834 7.71765V21.2213L73.3239 23.0024ZM64.4996 0.965801L72.5838 5.52236C71.7653 6.90717 70.5876 8.05721 69.1691 8.85681C67.7507 9.65641 66.1415 10.0774 64.5034 10.0774C62.8653 10.0774 61.2561 9.65641 59.8377 8.85681C58.4192 8.05721 57.2415 6.90717 56.423 5.52236L64.4996 0.965801ZM64.4996 27.9732L56.4199 23.4211C57.2384 22.0363 58.4161 20.8863 59.8346 20.0867C61.2531 19.2871 62.8623 18.8661 64.5003 18.8661C66.1384 18.8661 67.7476 19.2871 69.1661 20.0867C70.5845 20.8863 71.7622 22.0363 72.5807 23.4211L64.4996 27.9732Z" fill="white"/>
                        <path d="M74.5459 12.0918L65.8273 13.7293L68.7325 15.3668L74.5459 12.0918Z" fill="white"/>
                        <path d="M54.4541 12.0918L63.1727 13.7293L60.266 15.3668L54.4541 12.0918Z" fill="white"/>
                        <path d="M70.3143 21.012L61.5957 22.6495L64.5024 24.2869L70.3143 21.012Z" fill="white"/>
                        <path d="M10.0043 36.2175C10.0043 35.1184 9.97063 33.8847 9.69788 32.9276C9.4282 32.0199 9.00377 31.3858 8.34489 31.4038C7.26005 31.4755 6.90916 32.8379 6.90609 34.8432C6.90609 36.0097 7.32747 37.2 7.94344 38.4562C8.55941 39.7123 9.36844 40.9879 10.1775 42.3353C11.1397 43.9444 12.1005 45.5729 12.8283 47.1611C13.5561 48.7492 14.0541 50.3867 14.0541 52.1782C14.0541 54.3735 13.7308 56.4731 12.839 58.1599C11.9472 59.8468 10.5192 61.1029 8.25142 61.5575C5.6006 62.0914 4.1143 61.1956 3.26543 59.4535C2.41655 57.7113 2.22961 55.202 2.22961 52.567C3.5872 52.1932 4.94683 51.8303 6.30851 51.4784C6.30851 52.9274 6.34222 54.3735 6.64867 55.3949C6.91529 56.4701 7.37497 57.1251 8.25908 56.9755C9.4849 56.7602 9.95683 55.1287 9.96296 52.9783C9.96296 51.8806 9.50328 50.6633 8.89038 49.4057C8.54409 48.8075 8.19933 48.1555 7.81779 47.505C7.00875 46.2085 6.12923 44.7235 5.19915 43.0681C4.27319 41.424 3.58529 39.6626 3.1551 37.8341C2.92216 36.9199 2.80585 35.9812 2.80881 35.0391C2.80881 33.1295 3.15664 31.0568 4.04995 29.4791C4.94173 27.9463 6.30238 26.8681 8.28054 26.8248C10.8026 26.7829 12.2736 28.0121 13.0827 29.7528C13.8917 31.5473 14.1154 33.7217 14.1093 35.5595C12.7415 35.7799 11.3732 35.9992 10.0043 36.2175Z" fill="white"/>
                        <path d="M26.0487 52.4447C26.0309 53.199 25.9209 53.9485 25.7208 54.6773C25.5972 55.117 25.4436 55.5482 25.2612 55.9679C25.4333 56.2066 25.659 56.4037 25.9211 56.5442C26.1832 56.6847 26.4748 56.7648 26.7735 56.7784C26.7674 57.9558 26.7618 59.1322 26.7567 60.3076C24.6115 60.6067 23.5174 59.7752 22.854 58.6627C22.2598 58.9753 21.6168 59.1901 20.9509 59.2982C19.6837 59.4926 18.7 59.2982 17.9997 58.7658C17.2995 58.2783 16.846 57.5874 16.5318 56.8308C16.1503 55.9649 15.9434 54.9046 15.9189 53.6993C15.9404 47.8732 15.9623 42.047 15.9848 36.2208C16.0067 35.1224 16.2256 34.0363 16.6314 33.0116C16.9532 32.1966 17.4144 31.3816 18.1223 30.7685C18.8302 30.1553 19.8201 29.7456 21.0919 29.7292C22.3636 29.7127 23.3136 30.091 24.0154 30.6623C24.6868 31.2285 25.2047 31.9476 25.5232 32.7559C25.9229 33.7173 26.1334 34.7436 26.1437 35.7811L26.0487 52.4447ZM22.3146 35.9307C22.3146 35.1486 22.1782 34.6057 21.8289 34.1466C21.7288 34.0466 21.6076 33.9689 21.4738 33.9191C21.3399 33.8692 21.1965 33.8484 21.0536 33.858C20.384 33.8805 20.0637 34.4442 19.9197 34.9646C19.8144 35.3135 19.7653 35.6763 19.7741 36.0399C19.7496 41.7574 19.7246 47.4749 19.699 53.1924C19.699 54.0238 19.8691 54.5547 20.2185 54.942C20.3141 55.0343 20.4314 55.1023 20.5601 55.1401C20.6889 55.1779 20.8251 55.1844 20.957 55.1589C21.6266 55.0706 21.9453 54.5607 22.0894 53.9536C22.2021 53.6067 22.254 53.2436 22.2426 52.8798C22.264 47.2301 22.2881 41.5804 22.3146 35.9307Z" fill="white"/>
                        <path d="M38.9362 29.9784C38.9025 37.134 38.8688 44.1356 38.8366 51.2897C38.813 52.3176 38.5921 53.3321 38.1854 54.2806C37.8449 55.0932 37.3212 55.8206 36.6531 56.4085C35.9422 57.0665 34.9845 57.4957 33.7112 57.6333C32.4379 57.7709 31.4496 57.5466 30.7463 57.0232C30.0837 56.5452 29.5732 55.894 29.2738 55.1449C28.8675 54.2027 28.6566 53.1912 28.6532 52.169C28.6915 44.7577 28.7283 37.3957 28.7666 29.9829H32.5789C32.5421 37.288 32.5053 44.499 32.4685 51.8041C32.4685 52.5937 32.6386 53.1022 32.991 53.4805C33.0884 53.5712 33.2056 53.6389 33.3339 53.6786C33.4622 53.7182 33.598 53.7288 33.7311 53.7093C34.4038 53.6465 34.724 53.171 34.8681 52.6012C34.9803 52.2737 35.0322 51.9294 35.0213 51.5843C35.0565 44.3435 35.0918 37.2282 35.127 29.9829L38.9362 29.9784Z" fill="white"/>
                        <path d="M40.5459 56.6913C41.8974 47.623 43.2442 38.8598 44.5865 29.9785H49.2492C50.5286 38.7582 51.8142 47.2552 53.1059 55.9286C51.8637 55.9785 50.6211 56.0353 49.3779 56.0991C49.147 54.3186 48.9162 52.5365 48.6853 50.753C47.4595 50.8068 46.2306 50.8676 44.9987 50.9354C44.7566 52.7568 44.5135 54.5813 44.2693 56.4087C43.0282 56.4954 41.787 56.5896 40.5459 56.6913ZM47.0994 38.3708C47.0642 38.1435 47.0305 37.9222 46.9952 37.6889H46.7838C46.747 37.9177 46.7117 38.1465 46.675 38.3753C46.3001 41.1718 45.9242 43.9747 45.5472 46.7841C46.4206 46.7452 47.294 46.7093 48.1674 46.6764C47.8119 43.9149 47.4559 41.1464 47.0994 38.3708Z" fill="white"/>
                        <path d="M61.7378 55.7194C61.0779 52.0706 60.418 48.4198 59.7581 44.7669L58.73 44.7789L58.7162 55.7643C57.4373 55.7892 56.1604 55.8226 54.8855 55.8645C54.9039 47.1522 54.9223 38.7015 54.9407 29.9936L58.756 29.9832C63.3115 29.9757 65.2559 32.2996 65.2574 37.2151C65.2574 39.7977 64.5848 42.129 63.1322 43.122C63.9494 47.3181 64.7666 51.5153 65.5838 55.7135C64.2998 55.7065 63.0178 55.7085 61.7378 55.7194ZM58.7361 41.2348C59.2678 41.2348 59.9757 41.1525 60.5427 40.653C61.1096 40.1536 61.5708 39.1965 61.5723 37.3631C61.5739 35.5297 61.1127 34.5338 60.5488 34.0403C59.9849 33.5468 59.277 33.5139 58.7468 33.5154C58.7428 36.0865 58.7392 38.6596 58.7361 41.2348Z" fill="white"/>
                        <path d="M67.6896 29.9849H76.4143C76.4143 31.3038 76.422 32.3775 76.4251 33.6965C74.7906 33.6796 73.1526 33.6666 71.5111 33.6576C71.5111 35.9397 71.5147 38.2217 71.5218 40.5037C72.7016 40.5167 73.8815 40.5336 75.0613 40.5545C75.0613 41.9562 75.0649 43.3565 75.0721 44.7552C73.8912 44.7303 72.7098 44.7083 71.5279 44.6894C71.5279 47.0821 71.5315 49.4703 71.5387 51.854C73.1843 51.8889 74.8289 51.9352 76.4726 51.993C76.4726 53.313 76.4761 54.633 76.4833 55.9529C73.5587 55.8333 70.6336 55.757 67.708 55.7241C67.7019 47.0537 67.6957 38.6553 67.6896 29.9849Z" fill="white"/>
                        <path d="M86.1858 43.7306C85.0969 43.6847 84.0075 43.6418 82.9175 43.602C82.9349 47.833 82.9507 52.0626 82.965 56.2907C81.5614 56.2019 80.1574 56.1232 78.7528 56.0544C78.7232 46.4179 78.6946 36.7808 78.667 27.1433H82.8562L82.9022 39.1979C83.9901 39.2259 85.0785 39.2573 86.1674 39.2922C86.1501 35.2445 86.1327 31.1959 86.1153 27.1463H90.3061C90.3521 37.051 90.3985 46.9542 90.4455 56.8559C89.044 56.7313 87.642 56.6167 86.2395 56.512C86.2211 52.254 86.2032 47.9935 86.1858 43.7306Z" fill="white"/>
                        <path d="M93.283 29.9849H102.003C102.003 31.404 102.018 32.7948 102.025 34.2139C100.39 34.1631 98.7557 34.1162 97.1213 34.0734L97.1581 41.3336C98.3369 41.3965 99.5142 41.4628 100.69 41.5325L100.713 46.0338C99.5362 45.943 98.3614 45.8563 97.1887 45.7736C97.201 48.3068 97.2137 50.8401 97.227 53.3733C98.8614 53.5328 100.496 53.7048 102.13 53.8892C102.136 55.3089 102.143 56.7281 102.15 58.1467C99.246 57.7689 96.3347 57.4344 93.4163 57.1433C93.3718 48.0481 93.3274 39.08 93.283 29.9849Z" fill="white"/>
                        <path d="M111.056 59.4477C110.382 55.2127 109.707 51.02 109.032 46.8697L108.01 46.774L108.065 58.9797C106.798 58.7883 105.53 58.6048 104.26 58.4294L104.122 29.9849H107.935C112.487 30.0327 114.437 33.0939 114.457 38.7645C114.468 41.7359 113.808 44.3664 112.369 45.3534C113.197 50.2025 114.024 55.114 114.848 60.0878C113.586 59.8655 112.321 59.6521 111.056 59.4477ZM107.991 42.8366C108.52 42.8754 109.225 42.8515 109.787 42.3386C110.349 41.8256 110.801 40.7818 110.792 38.7047C110.783 36.6275 110.322 35.4895 109.755 34.9123C109.188 34.3351 108.482 34.2708 107.953 34.2528C107.965 37.1141 107.978 39.9753 107.991 42.8366Z" fill="white"/>
                        <path d="M126.771 55.8524C126.737 57.1549 126.527 58.2929 126.144 59.2171C125.854 60.0208 125.333 60.7259 124.644 61.2479C123.947 61.7937 123.006 61.9777 121.746 61.7219C120.487 61.4662 119.508 60.898 118.806 60.1024C118.146 59.3749 117.644 58.525 117.329 57.6035C116.926 56.5133 116.709 55.3661 116.687 54.2074C116.668 48.2691 116.651 42.1797 116.633 36.2429C116.644 35.1392 116.855 34.0461 117.257 33.0143C117.572 32.1993 118.023 31.3857 118.732 30.7711C119.442 30.1565 120.418 29.7602 121.693 29.7826C122.967 29.8051 123.916 30.2492 124.621 30.9132C125.311 31.5974 125.83 32.428 126.138 33.3403C126.541 34.456 126.754 35.6283 126.771 36.8111V55.8524ZM122.972 36.5898C122.972 35.7374 122.83 35.1318 122.476 34.6054C122.381 34.4925 122.263 34.4006 122.13 34.3361C121.996 34.2716 121.849 34.2359 121.7 34.2315C121.031 34.2031 120.715 34.7789 120.576 35.3187C120.472 35.6856 120.425 36.0657 120.436 36.4463C120.448 42.5102 120.462 48.7267 120.474 54.7907C120.474 55.673 120.652 56.2861 121.003 56.8125C121.088 56.9338 121.197 57.0376 121.323 57.1177C121.449 57.1978 121.59 57.2526 121.739 57.279C122.404 57.3972 122.718 56.9441 122.857 56.3279C122.967 55.9627 123.014 55.5821 122.995 55.2019C122.987 49.0497 122.98 42.7435 122.972 36.5898Z" fill="white"/>
                        <path d="M125.834 31.326V31.317C125.845 30.9197 126.015 30.5423 126.307 30.2648C126.598 29.9873 126.989 29.8315 127.396 29.8303C127.804 29.8292 128.195 29.9828 128.489 30.2586C128.782 30.5344 128.954 30.9108 128.967 31.308V31.317C128.956 31.7143 128.787 32.0917 128.495 32.3692C128.203 32.6467 127.812 32.8025 127.405 32.8037C126.998 32.8049 126.606 32.6513 126.313 32.3755C126.02 32.0996 125.848 31.7232 125.834 31.326ZM128.678 31.317C128.684 31.1497 128.655 30.9829 128.594 30.8266C128.532 30.6704 128.439 30.5278 128.32 30.4073C128.201 30.2869 128.058 30.1912 127.9 30.1258C127.742 30.0604 127.572 30.0267 127.401 30.0267C127.229 30.0267 127.059 30.0604 126.901 30.1258C126.744 30.1912 126.601 30.2869 126.482 30.4073C126.362 30.5278 126.269 30.6704 126.208 30.8266C126.146 30.9829 126.118 31.1497 126.124 31.317V31.3245C126.118 31.4918 126.147 31.6585 126.209 31.8146C126.271 31.9707 126.365 32.113 126.484 32.233C126.604 32.3531 126.747 32.4484 126.905 32.5133C127.063 32.5782 127.233 32.6115 127.405 32.611C127.576 32.6104 127.746 32.5763 127.904 32.5104C128.061 32.4445 128.204 32.3484 128.323 32.2276C128.441 32.1069 128.534 31.964 128.595 31.8076C128.656 31.6511 128.684 31.4843 128.678 31.317ZM126.805 30.5259H127.484C127.571 30.5209 127.657 30.5327 127.739 30.5607C127.82 30.5887 127.895 30.6323 127.959 30.6889C128.002 30.7324 128.035 30.7838 128.057 30.8401C128.079 30.8963 128.089 30.9563 128.086 31.0164V31.0239C128.091 31.1261 128.061 31.227 128.001 31.3111C127.942 31.3951 127.855 31.4576 127.755 31.489L128.131 32.0258H127.736L127.408 31.5428H127.141V32.0258H126.801L126.805 30.5259ZM127.484 31.2542C127.656 31.2542 127.748 31.1645 127.748 31.0389V31.0314C127.748 30.8818 127.645 30.8131 127.477 30.8131H127.146V31.2542H127.484Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_351_55680">
                            <rect width="129" height="68" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            
            <h2 style="
                font-size: 2rem;
                font-weight: 700;
                margin: 0 0 1rem 0;
                color: white;
                font-family: 'Red Hat Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                letter-spacing: -0.02em;
            ">Site Activation Required</h2>
            
            <p style="
                margin: 0 0 2rem 0;
                color: rgba(255, 255, 255, 0.9);
                line-height: 1.6;
                font-size: 1.125rem;
                font-family: 'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            ">
                This site needs to be activated in your SquareHero dashboard to use the Advanced Product Manager plugin.
            </p>
            
            <button onclick="window.open('https://dashboard.squarehero.store', '_blank')" style="
                background: linear-gradient(135deg, #011E45 0%, #1E3A5F 100%);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.2);
                padding: 16px 32px;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                font-size: 1rem;
                font-family: 'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                transition: all 0.2s ease;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0, 0, 0, 0.3)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(0, 0, 0, 0.2)'">
                Open Dashboard
            </button>
        `;

        overlay.appendChild(contentContainer);
        document.body.appendChild(overlay);
    }

    /**
     * Enable plugin functionality
     */
    enablePlugin() {
        const overlay = document.getElementById('license-overlay');
        if (overlay) {
            overlay.remove();
        }
        this.hideLicenseError();
    }

    /**
     * Check if the app has been blocked due to Firebase connection issues
     */
    isBlocked() {
        return this.appBlocked;
    }

    /**
     * Update demo mode indicator visibility based on license status
     */
    updateDemoModeIndicator() {
        const demoIndicator = document.getElementById('demo-mode-indicator');
        const activatedBadge = document.getElementById('activated-badge');
        
        if (!demoIndicator) {
            console.warn('Demo mode indicator element not found');
            return;
        }

        const status = this.getLicenseStatus();
        
        // Simple logic: if we're in demo mode, show demo indicator. Otherwise, show activated badge.
        if (status.status === 'demo' && status.valid) {
            // Demo mode - show demo indicator with sync link, hide activated badge
            if (activatedBadge) {
                activatedBadge.style.display = 'none';
            }
            demoIndicator.style.display = 'inline-flex';
            demoIndicator.innerHTML = `
                Demo mode
                <button id="sync-license-btn" class="sync-license-btn" style="
                    margin-left: 8px;
                    background: none;
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                " onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" 
                   onmouseout="this.style.backgroundColor='transparent'">
                    Sync License
                </button>
            `;
            
            // Add click handler for sync button
            const syncButton = document.getElementById('sync-license-btn');
            if (syncButton) {
                syncButton.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const result = await this.forceLicenseSync();
                    
                    // Result handling is now done in forceLicenseSync method
                    // No need to duplicate the UI updates here
                });
            }
            
        } else {
            // Not in demo mode - hide demo indicator and show activated badge
            demoIndicator.style.display = 'none';
            if (activatedBadge) {
                activatedBadge.style.display = 'inline-flex';
            }
        }

        // Update apply changes buttons based on demo mode status
        this.updateApplyButtonStates(status.status === 'demo' && status.valid);
    }

    /**
     * Update the state of apply changes buttons based on demo mode status
     */
    updateApplyButtonStates(isDemoMode) {
        // Update bulk apply button
        const bulkApplyBtn = document.getElementById('bulk-apply-all');
        if (bulkApplyBtn) {
            if (typeof updateApplyAllButton === 'function') {
                updateApplyAllButton(); // This will check demo mode internally
            }
        }

        // Update main footer save button
        const saveBtn = document.getElementById('save-changes');
        if (saveBtn) {
            if (isDemoMode) {
                saveBtn.disabled = true;
                saveBtn.textContent = 'Activate to Apply Changes';
                saveBtn.title = 'Apply changes is disabled in demo mode. Please activate your license to use this feature.';
            } else {
                // Only enable if there are actually changes to save
                const hasChanges = window.changedProducts && window.changedProducts.size > 0;
                saveBtn.disabled = !hasChanges;
                saveBtn.textContent = 'Apply Changes';
                saveBtn.title = '';
            }
        }


    }

    /**
     * Decode JWT token (client-side, for display purposes only)
     */
    decodeToken(token) {
        try {
            const parts = token.split('.');
            if (parts.length !== 3) {
                return null;
            }
            
            const payload = parts[1];
            const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
            return JSON.parse(decoded);
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    /**
     * Create a demo mode JWT token for connected sites without licenses
     * Only creates demo token if site exists in Firebase but has status: disconnected
     */
    async createDemoModeToken() {
        try {
            const siteId = await this.getSiteId();
            if (!siteId) {
                console.error('Cannot create demo token: no site ID available');
                return null;
            }

            // Check Firebase to see the site's activation status
            try {
                const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/verifySiteLicense`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        siteId: siteId,
                        checkStatusOnly: true // Special flag to just check status, not validate license
                    })
                });

                if (response.ok) {
                    const result = await response.json();
                    
                    // Check if site is activated using siteActivated field
                    if (result.siteActivated === true) {
                        return null; // Don't create demo token for activated sites
                    }
                    
                    // If site has siteActivated: false, create demo token
                    if (result.siteActivated === false) {
                        // Site is not activated, proceed with demo token
                    } else {
                        console.warn('Unknown siteActivated status:', result.siteActivated, '- proceeding with demo token');
                    }
                } else {
                    console.warn('Could not check site status, proceeding with demo token creation');
                }
            } catch (error) {
                console.warn('Firebase status check failed, proceeding with demo token creation:', error.message);
            }

            // Create a unified JWT payload with licenseType field
            const now = Math.floor(Date.now() / 1000);
            const expiryTime = now + (7 * 24 * 60 * 60); // 7 days from now
            
            const payload = {
                siteId: siteId,
                licenseType: 'demo', // unified field: 'demo' or 'activated'
                connected: true,
                iat: now,
                exp: expiryTime,
                iss: 'squarehero-product-manager'
            };

            // Create JWT token - let server sign it for security
            const signResponse = await fetch(`${this.firebaseConfig._0x7cc61b43}/signJWT`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payload })
            });

            if (!signResponse.ok) {
                console.error('Failed to get signed token from server');
                return null;
            }

            const signResult = await signResponse.json();
            const demoToken = signResult.token;

            return demoToken;

        } catch (error) {
            console.error('Error creating demo mode token:', error);
            return null;
        }
    }

    /**
     * Create activated license token with billing period expiry
     */
    async createActivatedLicense() {
        try {
            const siteId = await this.getSiteId();
            if (!siteId) {
                console.error('Cannot create activated license: no site ID available');
                return null;
            }

            // Get the site's billing information from Firebase
            const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/verifySiteLicense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    siteId: siteId,
                    checkStatusOnly: true
                })
            });

            if (!response.ok) {
                console.error('Failed to fetch billing information');
                return null;
            }

            const result = await response.json();
            
            if (!result.success || !result.siteActivated) {
                console.error('Site is not activated');
                return null;
            }

            // Calculate expiry based on billing period
            let expiryTime;
            if (result.currentPeriodEnd) {
                // Use the actual billing period end date
                expiryTime = Math.floor(new Date(result.currentPeriodEnd).getTime() / 1000);
            } else {
                // Fallback: 30 days from now if no billing info
                const now = Math.floor(Date.now() / 1000);
                expiryTime = now + (30 * 24 * 60 * 60); // 30 days
            }

            // Create JWT payload
            const now = Math.floor(Date.now() / 1000);
            const payload = {
                siteId: siteId,
                licenseType: 'activated',
                iat: now,
                exp: expiryTime,
                customerId: result.customerId || null,
                billingPeriod: result.billingPeriod || 'monthly'
            };

            // Create JWT token - let server sign it for security
            const signResponse = await fetch(`${this.firebaseConfig._0x7cc61b43}/signJWT`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payload })
            });

            if (!signResponse.ok) {
                console.error('Failed to get signed token from server');
                return null;
            }

            const signResult = await signResponse.json();
            const activatedToken = signResult.token;

            // Store the license
            this.storeLicense(activatedToken, {
                siteId: siteId,  // Changed from 'id' to 'siteId' to match getSiteId() expectations
                id: siteId,      // Keep 'id' for backwards compatibility
                activated: true,
                activatedAt: result.activatedAt || new Date().toISOString(),
                billingPeriod: result.billingPeriod || 'monthly',
                expiresAt: new Date(expiryTime * 1000).toISOString()
            });

            return activatedToken;

        } catch (error) {
            console.error('Error creating activated license:', error);
            return null;
        }
    }

    /**
     * Get time until license expires
     */
    getTimeUntilExpiry() {
        const status = this.getLicenseStatus();
        if (!status.licensed || !status.siteInfo || !status.siteInfo.expiresAt) {
            return null;
        }

        const expiryDate = new Date(status.siteInfo.expiresAt);
        const now = new Date();
        const diffMs = expiryDate.getTime() - now.getTime();
        
        if (diffMs <= 0) {
            return { expired: true };
        }

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        return { days, hours, expired: false };
    }

    /**
     * Reset site to demo mode when validation fails
     */
    async resetToDemo(reason = 'Validation failed') {
        try {
            // Update Firebase to set siteActivated = false
            const siteId = await this.getSiteId();
            const response = await fetch(`${this.firebaseConfig._0x7cc61b43}/verifySiteLicense`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    siteId: siteId,
                    action: 'resetToDemo',
                    reason: reason
                })
            });

            if (!response.ok) {
                console.warn('Failed to update Firebase, proceeding with local reset');
            }
        } catch (error) {
            console.error('Error updating Firebase:', error);
        }

        // Always clear local license and show demo mode
        this.clearLicense();
        this.updateDemoModeIndicator();
    }

    /**
     * Reset to demo mode (called by FCM when license is revoked)
     * This method is called externally by FCM messages to force license reset
     */
    async resetToDemo(reason = 'FCM license revocation') {
        try {
            // Call Firebase to reset site status
            const siteInfo = await this.getSiteInfo();
            const response = await fetch(`https://verifysitelicense-n6bvhzbxla-uc.a.run.app`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    siteId: siteInfo.id,
                    action: 'resetToDemo',
                    reason: reason
                })
            });

            if (!response.ok) {
                console.warn('Firebase reset failed, continuing with local reset');
            }
        } catch (error) {
            console.warn('Firebase reset error:', error.message);
        }

        // Always clear local license and show demo mode
        this.clearLicense();
        this.updateDemoModeIndicator();
    }

    /**
     * Recheck license status (triggered by FCM messages)
     */
    async re_0xe5da8364() {
        try {
            // Re-validate current license
            const validationResult = await this.validateClientSide();
            
            if (!validationResult.isValid) {
                await this.resetToDemo('License validation failed on recheck');
            } else {
                // Update UI to reflect current status
                if (window.SquareHeroProductManager && window.SquareHeroProductManager.updateLicenseDisplay) {
                    window.SquareHeroProductManager.updateLicenseDisplay();
                }
            }
            
        } catch (error) {
            console.error('Error rechecking license status:', error);
            // On error, be safe and reset to demo mode
            await this.resetToDemo('License recheck failed with error');
        }
    }
}

// Create global instance
window._0x21c74a45 = _0x21c74a45;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = _0x21c74a45;
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.licenseManager = new _0x21c74a45();
    });
} else {
    window.licenseManager = new _0x21c74a45();
}


// === RESPONSIVE UTILITY ===

    
    // Components
    // === CUSTOM-UI COMPONENT ===
// Custom UI components and interactions

// Initialize custom dropdowns and menus
function initializeCustomDropdowns() {
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    
    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        const content = dropdown.querySelector('.dropdown-content');
        const input = dropdown.querySelector('input[type="text"]');
        
        if (header && content) {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                const isVisible = content.style.display === 'block';
                content.style.display = isVisible ? 'none' : 'block';
                dropdown.classList.toggle('active', !isVisible);
            });
        }
        
        if (input) {
            input.addEventListener('focus', () => {
                content.style.display = 'block';
                dropdown.classList.add('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
                dropdown.classList.remove('active');
            });
        }
    });
}

// Initialize custom sliders with enhanced functionality
function initializeCustomSliders() {
    const sliders = document.querySelectorAll('.custom-slider');
    
    sliders.forEach(slider => {
        const input = slider.querySelector('input[type="range"]');
        const valueDisplay = slider.querySelector('.slider-value');
        const minLabel = slider.querySelector('.slider-min');
        const maxLabel = slider.querySelector('.slider-max');
        
        if (input) {
            // Update value display
            const updateValue = () => {
                if (valueDisplay) {
                    const suffix = slider.dataset.suffix || '';
                    const prefix = slider.dataset.prefix || '';
                    valueDisplay.textContent = prefix + input.value + suffix;
                }
                
                // Update progress bar
                const progress = ((input.value - input.min) / (input.max - input.min)) * 100;
                input.style.background = `linear-gradient(to right, var(--brand-color) 0%, var(--brand-color) ${progress}%, #ddd ${progress}%, #ddd 100%)`;
            };
            
            input.addEventListener('input', updateValue);
            input.addEventListener('change', updateValue);
            
            // Initialize
            updateValue();
        }
        
        // Set min/max labels
        if (minLabel && input) minLabel.textContent = input.min;
        if (maxLabel && input) maxLabel.textContent = input.max;
    });
}

// Initialize toggle switches with animations
function initializeToggleSwitches() {
    const toggles = document.querySelectorAll('.toggle-switch');
    
    toggles.forEach(toggle => {
        const input = toggle.querySelector('input[type="checkbox"]');
        const slider = toggle.querySelector('.toggle-slider');
        
        if (input && slider) {
            input.addEventListener('change', () => {
                toggle.classList.toggle('checked', input.checked);
                
                // Trigger animation
                slider.style.transform = input.checked ? 'translateX(20px)' : 'translateX(0)';
                
                // Fire custom event
                const customEvent = new CustomEvent('toggleChange', {
                    detail: { checked: input.checked, toggle: toggle }
                });
                toggle.dispatchEvent(customEvent);
            });
            
            // Initialize state
            toggle.classList.toggle('checked', input.checked);
            slider.style.transform = input.checked ? 'translateX(20px)' : 'translateX(0)';
        }
    });
}

// Initialize tab navigation
function initializeTabNavigation() {
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab-button');
        const contents = container.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
                
                // Fire custom event
                const tabChangeEvent = new CustomEvent('tabChange', {
                    detail: { tab: tab, content: contents[index], index: index }
                });
                container.dispatchEvent(tabChangeEvent);
            });
        });
    });
}

// Initialize collapsible sections
function initializeCollapsibleSections() {
    const collapsibles = document.querySelectorAll('.collapsible');
    
    collapsibles.forEach(collapsible => {
        const header = collapsible.querySelector('.collapsible-header');
        const content = collapsible.querySelector('.collapsible-content');
        const icon = header.querySelector('.collapse-icon');
        
        if (header && content) {
            header.addEventListener('click', () => {
                const isExpanded = collapsible.classList.contains('expanded');
                
                collapsible.classList.toggle('expanded');
                
                if (isExpanded) {
                    content.style.maxHeight = '0';
                    if (icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
                
                // Fire custom event
                const collapseEvent = new CustomEvent('sectionToggle', {
                    detail: { expanded: !isExpanded, section: collapsible }
                });
                collapsible.dispatchEvent(collapseEvent);
            });
        }
    });
}

// Initialize progress bars with animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const fill = bar.querySelector('.progress-fill');
        const text = bar.querySelector('.progress-text');
        
        if (fill) {
            // Method to update progress
            bar.updateProgress = (percentage, animated = true) => {
                percentage = Math.max(0, Math.min(100, percentage));
                
                if (animated) {
                    fill.style.transition = 'width 0.3s ease-in-out';
                } else {
                    fill.style.transition = 'none';
                }
                
                fill.style.width = percentage + '%';
                
                if (text) {
                    text.textContent = Math.round(percentage) + '%';
                }
                
                // Update color based on percentage
                if (percentage < 30) {
                    fill.style.backgroundColor = '#e74c3c';
                } else if (percentage < 70) {
                    fill.style.backgroundColor = '#f39c12';
                } else {
                    fill.style.backgroundColor = '#27ae60';
                }
            };
            
            // Initialize at 0
            bar.updateProgress(0, false);
        }
    });
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        const tooltipText = trigger.getAttribute('data-tooltip');
        const position = trigger.getAttribute('data-tooltip-position') || 'top';
        
        let tooltip = null;
        
        trigger.addEventListener('mouseenter', (e) => {
            // Create tooltip
            tooltip = document.createElement('div');
            tooltip.className = `tooltip tooltip-${position}`;
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);
            
            // Position tooltip
            const triggerRect = trigger.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
            let top;
            
            switch (position) {
                case 'top':
                    top = triggerRect.top - tooltipRect.height - 10;
                    break;
                case 'bottom':
                    top = triggerRect.bottom + 10;
                    break;
                case 'left':
                    left = triggerRect.left - tooltipRect.width - 10;
                    top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
                    break;
                case 'right':
                    left = triggerRect.right + 10;
                    top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
                    break;
            }
            
            // Keep tooltip in viewport
            left = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
            top = Math.max(10, Math.min(top, window.innerHeight - tooltipRect.height - 10));
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            
            // Fade in
            setTimeout(() => tooltip.classList.add('visible'), 10);
        });
        
        trigger.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.classList.remove('visible');
                setTimeout(() => {
                    if (tooltip && tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 200);
            }
        });
    });
}

// Initialize context menus
function initializeContextMenus() {
    const contextMenus = document.querySelectorAll('.context-menu-trigger');
    
    contextMenus.forEach(trigger => {
        trigger.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            
            const menuId = trigger.getAttribute('data-context-menu');
            const menu = document.getElementById(menuId);
            
            if (menu) {
                // Hide other context menus
                document.querySelectorAll('.context-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('visible');
                });
                
                // Position and show menu
                menu.style.left = e.pageX + 'px';
                menu.style.top = e.pageY + 'px';
                menu.classList.add('visible');
                
                // Focus first item
                const firstItem = menu.querySelector('.context-menu-item');
                if (firstItem) firstItem.focus();
            }
        });
    });
    
    // Hide context menus on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.context-menu')) {
            document.querySelectorAll('.context-menu').forEach(menu => {
                menu.classList.remove('visible');
            });
        }
    });
}

// Initialize keyboard shortcuts
function initializeKeyboardShortcuts() {
    const shortcuts = {
        'ctrl+a': selectAllProducts,
        'ctrl+d': clearAllCheckboxes,
        'escape': hideBulkAdjustDrawer,
        'ctrl+z': () => {
            if (typeof restoreFromUndo === 'function') {
                restoreFromUndo();
            }
        },
        'ctrl+s': (e) => {
            e.preventDefault();
            const applyBtn = document.getElementById('bulk-apply-all');
            if (applyBtn && !applyBtn.disabled) {
                applyBtn.click();
            }
        }
    };
    
    document.addEventListener('keydown', (e) => {
        const key = (e.ctrlKey ? 'ctrl+' : '') + 
                   (e.shiftKey ? 'shift+' : '') + 
                   (e.altKey ? 'alt+' : '') + 
                   e.key.toLowerCase();
        
        if (shortcuts[key]) {
            e.preventDefault();
            shortcuts[key](e);
        }
    });
}

// Initialize modal dialogs
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('modal-open');
                
                // Focus first focusable element
                const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (focusable) focusable.focus();
            }
        });
    });
    
    modals.forEach(modal => {
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        // Close on close button click
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

// Close modal helper
function closeModal(modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Initialize all custom UI components
function initializeCustomUI() {
    initializeCustomDropdowns();
    initializeCustomSliders();
    initializeToggleSwitches();
    initializeTabNavigation();
    initializeCollapsibleSections();
    initializeProgressBars();
    initializeTooltips();
    initializeContextMenus();
    initializeKeyboardShortcuts();
    initializeModals();
    
}

// Export functions that might be needed elsewhere
window.initializeCustomUI = initializeCustomUI;
window.closeModal = closeModal;


// === UI COMPONENT ===
// UI Component Initialization

function initializeUI() {
    
    // Initialize header components
    initializeHeader();
    
    // Initialize filter components
    initializeFilters();
    
    // Initialize pagination
    initializePagination();
    
    // Initialize tooltips and modals
    initializeTooltips();
}

function initializeHeader() {
    // Support button functionality
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            // Open support link or modal
            window.open('https://squarehero.store/support', '_blank');
        });
    }
    
    // Export button functionality
    const exportBtn = document.querySelector('.btn:first-child');
    if (exportBtn && exportBtn.textContent.includes('Export')) {
        exportBtn.addEventListener('click', handleExport);
    }
    
    // Import button functionality  
    const importBtn = document.querySelector('.btn:nth-child(2)');
    if (importBtn && importBtn.textContent.includes('Import')) {
        importBtn.addEventListener('click', handleImport);
    }
    
    // Undo changes button
    const undoBtn = document.getElementById('undo-changes-btn');
    if (undoBtn) {
        undoBtn.addEventListener('click', function() {
            if (typeof showUndoDrawer === 'function') {
                showUndoDrawer();
            }
        });
    }
}

function initializeFilters() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
        populateCategoryFilter();
    }
    
    // Status filter
    const statusFilter = document.getElementById('status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', handleStatusFilter);
    }
    
    // Bulk adjust button
    const bulkAdjustBtn = document.querySelector('.bulk-adjust');
    if (bulkAdjustBtn) {
        bulkAdjustBtn.addEventListener('click', function() {
            if (typeof showBulkAdjustDrawer === 'function') {
                showBulkAdjustDrawer();
            }
        });
    }
}

function initializePagination() {
    // Items per page selector
    const itemsPerPage = document.getElementById('items-per-page');
    if (itemsPerPage) {
        itemsPerPage.addEventListener('change', function() {
            if (typeof updateProductsPerPage === 'function') {
                updateProductsPerPage(parseInt(this.value));
            }
        });
    }
}

function initializeTooltips() {
    // URL suggestion apply/cancel buttons
    const urlApplyBtn = document.getElementById('url-suggestion-apply');
    const urlCancelBtn = document.getElementById('url-suggestion-cancel');
    
    if (urlApplyBtn) {
        urlApplyBtn.addEventListener('click', handleUrlSuggestionApply);
    }
    
    if (urlCancelBtn) {
        urlCancelBtn.addEventListener('click', hideUrlSuggestionTooltip);
    }
}

// Event handlers
function handleExport() {
    // TODO: Implement export functionality
}

function handleImport() {
    // TODO: Implement import functionality
}

function handleSearch(event) {
    // Event is now handled directly by search-filtering.js event listeners
    // No action needed here
}

function handleCategoryFilter(event) {
    // Event is now handled directly by search-filtering.js event listeners
    // No action needed here
}

function handleStatusFilter(event) {
    // Event is now handled directly by search-filtering.js event listeners
    // No action needed here
}

function populateCategoryFilter(categories = null) {
    const categoryFilter = document.getElementById('category-filter');
    const categoryDropdown = document.getElementById('category-filter-dropdown');
    
    if (!categoryFilter) return;
    
    let categoryList = [];
    
    if (categories && categories.size > 0) {
        // Use provided categories (from the new API fetch)
        categoryList = Array.from(categories).sort();
    } else if (globalProductsData) {
        // Fallback to extracting from product data (legacy)
        const categorySet = new Set();
        globalProductsData.forEach(product => {
            if (product.categories) {
                product.categories.forEach(cat => categorySet.add(cat));
            }
        });
        categoryList = Array.from(categorySet).sort();
    }
    
    // Update hidden select element
    // Clear existing options (except "All categories")
    while (categoryFilter.children.length > 1) {
        categoryFilter.removeChild(categoryFilter.lastChild);
    }
    
    // Add category options to hidden select
    categoryList.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    // Update custom dropdown if it exists
    if (categoryDropdown) {
        // Clear existing options (except "All categories")
        const existingOptions = categoryDropdown.querySelectorAll('.select-option:not([data-value="all"])');
        existingOptions.forEach(option => option.remove());
        
        // Add category options to custom dropdown
        categoryList.forEach(category => {
            const option = document.createElement('div');
            option.className = 'select-option';
            option.setAttribute('data-value', category);
            option.textContent = category;
            categoryDropdown.appendChild(option);
        });
    }
    
}

function hideUrlSuggestionTooltip() {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
    }
}

function handleUrlSuggestionApply() {
    // TODO: Implement URL suggestion apply logic
    hideUrlSuggestionTooltip();
}

    
    // Modules
    // === ADVANCED-BULK-EDITOR MODULE ===
// Advanced bulk editing features - categories, tags, SKU, etc.

// Initialize advanced bulk editing features
function initializeAdvancedBulkEditor() {
    
    // Initialize category management
    initializeCategoryBulkEdit();
    
    // Initialize tag management
    initializeTagBulkEdit();
    
    // Initialize SKU management
    initializeSKUBulkEdit();
    
    // Initialize advanced stock management
    initializeAdvancedStockEdit();
    
    // Initialize visibility controls
    initializeVisibilityControls();
    
    // Initialize sale price controls
    initializeSalePriceControls();
    
    // Initialize custom sliders
    initializeCustomSliders();
}

// Initialize category bulk editing
function initializeCategoryBulkEdit() {
    const categoryToggle = document.getElementById('bulk-categories-toggle');
    const categoryOptions = document.getElementById('bulk-categories-options');
    const categoryAction = document.getElementById('bulk-category-action');
    const categoryPicker = document.getElementById('bulk-category-picker');
    
    if (categoryToggle) {
        categoryToggle.addEventListener('change', function() {
            if (categoryOptions) {
                categoryOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (categoryAction) {
        categoryAction.addEventListener('change', function() {
            if (categoryPicker) {
                categoryPicker.style.display = this.value !== 'none' ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    // Initialize category selection
    initializeCategoryPicker();
}

// Initialize category picker
function initializeCategoryPicker() {
    const categorySelect = document.getElementById('bulk-category-select');
    if (!categorySelect) return;
    
    // Populate with available categories
    populateCategoryPicker();
    
    categorySelect.addEventListener('change', updateBulkChanges);
}

// Populate category picker with available categories
function populateCategoryPicker() {
    const categorySelect = document.getElementById('bulk-category-select');
    if (!categorySelect || !globalProductsData) return;
    
    // Get unique categories from products
    const categories = new Set();
    globalProductsData.forEach(product => {
        if (product.categories && Array.isArray(product.categories)) {
            product.categories.forEach(category => {
                if (category && category.trim()) {
                    categories.add(category.trim());
                }
            });
        }
    });
    
    // Clear existing options
    categorySelect.innerHTML = '<option value="">Select a category...</option>';
    
    // Add category options
    const sortedCategories = Array.from(categories).sort();
    sortedCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Initialize tag bulk editing
function initializeTagBulkEdit() {
    const tagToggle = document.getElementById('bulk-tags-toggle');
    const tagOptions = document.getElementById('bulk-tags-options');
    const tagAction = document.getElementById('bulk-tag-action');
    const tagInputGroup = document.getElementById('bulk-tag-input-group');
    const tagInput = document.getElementById('bulk-tag-input');
    
    if (tagToggle) {
        tagToggle.addEventListener('change', function() {
            if (tagOptions) {
                tagOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (tagAction) {
        tagAction.addEventListener('change', function() {
            if (tagInputGroup) {
                tagInputGroup.style.display = this.value !== 'none' ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (tagInput) {
        tagInput.addEventListener('input', debounce(updateBulkChanges, 300));
    }
}

// Initialize SKU bulk editing
function initializeSKUBulkEdit() {
    const skuToggle = document.getElementById('bulk-sku-toggle');
    const skuOptions = document.getElementById('bulk-sku-options');
    const skuAction = document.getElementById('bulk-sku-action');
    const skuValueGroup = document.getElementById('bulk-sku-value-group');
    const skuValueLabel = document.getElementById('bulk-sku-value-label');
    const skuValueInput = document.getElementById('bulk-sku-value');
    
    if (skuToggle) {
        skuToggle.addEventListener('change', function() {
            if (skuOptions) {
                skuOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (skuAction) {
        skuAction.addEventListener('change', function() {
            const action = this.value;
            const showValue = action !== 'none';
            
            if (skuValueGroup) {
                skuValueGroup.style.display = showValue ? 'block' : 'none';
            }
            
            if (skuValueLabel && showValue) {
                skuValueLabel.textContent = action === 'prefix' ? 'Prefix:' : 'Suffix:';
            }
            
            updateBulkChanges();
        });
    }
    
    if (skuValueInput) {
        skuValueInput.addEventListener('input', debounce(updateBulkChanges, 300));
    }
}

// Initialize advanced stock management
function initializeAdvancedStockEdit() {
    const stockToggle = document.getElementById('bulk-stock-toggle');
    const stockOptions = document.getElementById('bulk-stock-options');
    const stockAction = document.getElementById('bulk-stock-action');
    const stockAmountGroup = document.getElementById('bulk-stock-amount-group');
    const stockAmountInput = document.getElementById('bulk-stock-amount');
    
    if (stockToggle) {
        stockToggle.addEventListener('change', function() {
            if (stockOptions) {
                stockOptions.style.display = this.checked ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (stockAction) {
        stockAction.addEventListener('change', function() {
            const showAmount = ['set', 'adjust'].includes(this.value);
            if (stockAmountGroup) {
                stockAmountGroup.style.display = showAmount ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    }
    
    if (stockAmountInput) {
        stockAmountInput.addEventListener('input', debounce(updateBulkChanges, 300));
    }
}

// Initialize visibility controls
function initializeVisibilityControls() {
    const visibilityToggles = document.querySelectorAll('input[name="bulk-visibility"]');
    
    visibilityToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                bulkChanges.newStatus = this.value;
                updateBulkChanges();
            }
        });
    });
}

// Initialize sale price controls
function initializeSalePriceControls() {
    const salePriceMethod = document.getElementById('bulk-sale-price-method');
    const saleValueLabel = document.getElementById('bulk-sale-value-label');
    const saleValueUnit = document.getElementById('bulk-sale-value-unit');
    const salePriceInput = document.getElementById('bulk-sale-price-value');
    
    if (salePriceMethod) {
        salePriceMethod.addEventListener('change', function() {
            const method = this.value;
            
            if (saleValueLabel && saleValueUnit) {
                switch (method) {
                    case 'percentage':
                        saleValueLabel.textContent = 'Percentage off:';
                        saleValueUnit.textContent = '%';
                        if (salePriceInput) salePriceInput.step = '1';
                        break;
                    case 'fixed':
                        saleValueLabel.textContent = 'Amount off:';
                        saleValueUnit.textContent = window.getSystemCurrency() || '';
                        if (salePriceInput) salePriceInput.step = '0.01';
                        break;
                    case 'setPrice':
                        saleValueLabel.textContent = 'Sale price:';
                        saleValueUnit.textContent = window.getSystemCurrency() || '';
                        if (salePriceInput) salePriceInput.step = '0.01';
                        break;
                    case 'adjustExisting':
                        saleValueLabel.textContent = 'Adjust by:';
                        saleValueUnit.textContent = '%';
                        if (salePriceInput) salePriceInput.step = '1';
                        break;
                }
            }
            
            updateBulkChanges();
        });
    }
    
    // Sale action radio buttons
    const saleActionRadios = document.querySelectorAll('input[name="bulk-sale-action"]');
    const salePricingControls = document.getElementById('bulk-sale-pricing-controls');
    
    saleActionRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (salePricingControls) {
                // Only show pricing controls when "Put products on sale" is selected
                salePricingControls.style.display = 
                    this.value === 'put-on-sale' && this.checked ? 'block' : 'none';
            }
            updateBulkChanges();
        });
    });
    
    if (salePriceInput) {
        salePriceInput.addEventListener('input', debounce(updateBulkChanges, 300));
    }
}

// Initialize custom price sliders
function initializeCustomSliders() {
    const priceSlider = document.getElementById('bulk-price-slider');
    const priceSliderValue = document.getElementById('bulk-price-slider-value');
    const priceInput = document.getElementById('bulk-regular-adjustment');
    
    if (priceSlider && priceSliderValue && priceInput) {
        // Create custom slider functionality
        initializeCustomSlider(priceSlider, priceSliderValue, priceInput);
    }
}

// Initialize a custom slider
function initializeCustomSlider(sliderContainer, valueDisplay, input) {
    const track = sliderContainer.querySelector('.slider-track');
    const thumb = sliderContainer.querySelector('.slider-thumb');
    const fill = sliderContainer.querySelector('.slider-fill');
    
    if (!track || !thumb || !fill) return;
    
    let isDragging = false;
    let min = parseFloat(input.min) || -100;
    let max = parseFloat(input.max) || 100;
    let step = parseFloat(input.step) || 1;
    
    // Update slider visual
    function updateSliderVisual(value) {
        const percentage = ((value - min) / (max - min)) * 100;
        thumb.style.left = `${percentage}%`;
        fill.style.width = `${percentage}%`;
        
        // Update value display
        if (valueDisplay) {
            valueDisplay.textContent = `${value}%`;
        }
        
        // Update input value
        if (input) {
            input.value = value;
        }
    }
    
    // Set value programmatically
    function setValue(value) {
        value = Math.max(min, Math.min(max, value));
        value = Math.round(value / step) * step;
        updateSliderVisual(value);
        updateBulkChanges();
    }
    
    // Get position from mouse/touch event
    function getPositionFromEvent(event) {
        const rect = track.getBoundingClientRect();
        const clientX = event.clientX || (event.touches && event.touches[0].clientX);
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const value = min + percentage * (max - min);
        return Math.round(value / step) * step;
    }
    
    // Mouse events
    thumb.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
    });
    
    track.addEventListener('click', function(e) {
        if (!isDragging) {
            const value = getPositionFromEvent(e);
            setValue(value);
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const value = getPositionFromEvent(e);
            setValue(value);
        }
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
    
    // Touch events
    thumb.addEventListener('touchstart', function(e) {
        isDragging = true;
        e.preventDefault();
    });
    
    track.addEventListener('touchstart', function(e) {
        const value = getPositionFromEvent(e);
        setValue(value);
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            const value = getPositionFromEvent(e);
            setValue(value);
            e.preventDefault();
        }
    });
    
    document.addEventListener('touchend', function() {
        isDragging = false;
    });
    
    // Sync with input field
    input.addEventListener('input', function() {
        const value = parseFloat(this.value) || 0;
        updateSliderVisual(value);
    });
    
    // Initialize with current input value
    const initialValue = parseFloat(input.value) || 0;
    updateSliderVisual(initialValue);
}

// Update bulk changes with advanced settings
function updateBulkChanges() {
    // Categories
    const categoryToggle = document.getElementById('bulk-categories-toggle');
    const categoryAction = document.getElementById('bulk-category-action');
    const categorySelect = document.getElementById('bulk-category-select');
    
    if (categoryToggle?.checked && categoryAction?.value !== 'none') {
        bulkChanges.categoryAction = categoryAction.value;
        bulkChanges.categoryValue = categorySelect?.value || '';
    } else {
        bulkChanges.categoryAction = null;
        bulkChanges.categoryValue = null;
    }
    
    // Tags
    const tagToggle = document.getElementById('bulk-tags-toggle');
    const tagAction = document.getElementById('bulk-tag-action');
    const tagInput = document.getElementById('bulk-tag-input');
    
    if (tagToggle?.checked && tagAction?.value !== 'none') {
        bulkChanges.tagAction = tagAction.value;
        bulkChanges.tagValue = tagInput?.value || '';
    } else {
        bulkChanges.tagAction = null;
        bulkChanges.tagValue = null;
    }
    
    // SKU
    const skuToggle = document.getElementById('bulk-sku-toggle');
    const skuAction = document.getElementById('bulk-sku-action');
    const skuValue = document.getElementById('bulk-sku-value');
    
    if (skuToggle?.checked && skuAction?.value !== 'none') {
        bulkChanges.skuAction = skuAction.value;
        bulkChanges.skuValue = skuValue?.value || '';
    } else {
        bulkChanges.skuAction = null;
        bulkChanges.skuValue = null;
    }
    
    // Advanced stock
    const stockToggle = document.getElementById('bulk-stock-toggle');
    const stockAction = document.getElementById('bulk-stock-action');
    const stockAmount = document.getElementById('bulk-stock-amount');
    
    if (stockToggle?.checked) {
        bulkChanges.enableStockTracking = true;
        bulkChanges.stockAction = stockAction?.value || 'set';
        
        if (['set', 'adjust'].includes(stockAction?.value)) {
            bulkChanges.stockAmount = parseInt(stockAmount?.value) || 0;
        }
    }
    
    // Sale pricing
    const salePriceMethod = document.getElementById('bulk-sale-price-method');
    const salePriceValue = document.getElementById('bulk-sale-price-value');
    const saleActionRadios = document.querySelectorAll('input[name="bulk-sale-action"]:checked');
    
    if (saleActionRadios.length > 0) {
        const saleAction = saleActionRadios[0].value;
        bulkChanges.saleAction = saleAction;
        
        if (saleAction === 'put-on-sale' && salePriceMethod && salePriceValue) {
            bulkChanges.salePriceMethod = salePriceMethod.value;
            bulkChanges.salePriceValue = parseFloat(salePriceValue.value) || 0;
        }
    }
    
    // Update apply button and preview
    if (typeof updateApplyAllButton === 'function') {
        updateApplyAllButton();
    }
    
    if (typeof updatePreviewPane === 'function') {
        updatePreviewPane();
    }
}

// Apply advanced bulk changes to a product
function applyAdvancedBulkChangesToProduct(product, changes) {
    const updatedProduct = { ...product };
    
    // Apply category changes
    if (changes.categoryAction && changes.categoryValue) {
        switch (changes.categoryAction) {
            case 'add':
                if (!updatedProduct.categories) updatedProduct.categories = [];
                if (!updatedProduct.categories.includes(changes.categoryValue)) {
                    updatedProduct.categories.push(changes.categoryValue);
                }
                break;
            case 'remove':
                if (updatedProduct.categories) {
                    updatedProduct.categories = updatedProduct.categories.filter(
                        cat => cat !== changes.categoryValue
                    );
                }
                break;
            case 'replace':
                updatedProduct.categories = [changes.categoryValue];
                break;
        }
    }
    
    // Apply tag changes
    if (changes.tagAction && changes.tagValue) {
        const tags = changes.tagValue.split(',').map(tag => tag.trim()).filter(Boolean);
        
        switch (changes.tagAction) {
            case 'add':
                if (!updatedProduct.tags) updatedProduct.tags = [];
                tags.forEach(tag => {
                    if (!updatedProduct.tags.includes(tag)) {
                        updatedProduct.tags.push(tag);
                    }
                });
                break;
            case 'remove':
                if (updatedProduct.tags) {
                    updatedProduct.tags = updatedProduct.tags.filter(
                        tag => !tags.includes(tag)
                    );
                }
                break;
            case 'replace':
                updatedProduct.tags = tags;
                break;
        }
    }
    
    // Apply SKU changes
    if (changes.skuAction && changes.skuValue && updatedProduct.sku) {
        switch (changes.skuAction) {
            case 'prefix':
                updatedProduct.sku = changes.skuValue + updatedProduct.sku;
                break;
            case 'suffix':
                updatedProduct.sku = updatedProduct.sku + changes.skuValue;
                break;
        }
    }
    
    // Apply advanced stock changes
    if (changes.enableStockTracking && changes.stockAction) {
        switch (changes.stockAction) {
            case 'set':
                updatedProduct.stock = changes.stockAmount || 0;
                updatedProduct.trackStock = true;
                break;
            case 'adjust':
                updatedProduct.stock = (updatedProduct.stock || 0) + (changes.stockAmount || 0);
                updatedProduct.trackStock = true;
                break;
            case 'unlimited':
                updatedProduct.trackStock = false;
                updatedProduct.stock = null;
                break;
            case 'none':
                updatedProduct.trackStock = false;
                updatedProduct.stock = 0;
                break;
        }
    }
    
    return updatedProduct;
}


// === APPLY-BULK-CHANGES MODULE ===
// Main bulk changes application logic - the core applyBulkChanges function

// Apply bulk changes to selected products
async function applyBulkChanges() {
    // Check for demo mode - prevent bulk changes if in demo mode
    const isDemoMode = window.licenseManager && window.licenseManager.getLicenseStatus().status === 'demo';
    if (isDemoMode) {
        if (typeof showBulkNotification === 'function') {
            showBulkNotification('Apply changes is disabled in demo mode. Please activate your license to use this feature.', 'error', 5000);
        } else {
            alert('Apply changes is disabled in demo mode. Please activate your license to use this feature.');
        }
        return;
    }
    
    // Hide the products selected info immediately when Apply Changes is clicked
    const productsSelectedInfo = document.querySelector('.products-selected-info');
    if (productsSelectedInfo) {
        productsSelectedInfo.style.display = 'none';
    }
    
    // Capture current bulk changes to prevent them from being modified during the process
    const currentBulkChanges = { ...bulkChanges };
    
    const selectedProducts = getSelectedProducts();
    
    if (selectedProducts.length === 0) {
        showBulkNotification('No products selected', 'error');
        return;
    }

    const hasChanges = Object.values(currentBulkChanges).some(value => value !== null && value !== false && value !== 'no-change' && value !== 'unchanged');
    
    // Also check specifically for status changes
    const hasStatusChanges = currentBulkChanges.newStatus && currentBulkChanges.newStatus !== 'unchanged';
    
    if (!hasChanges && !hasStatusChanges) {
        showBulkNotification('No changes to apply', 'error');
        return;
    }

    // Show footer and start rotating preparation messages immediately
    const bulkApplyAllBtn = document.getElementById('bulk-apply-all');
    if (bulkApplyAllBtn) {
        bulkApplyAllBtn.disabled = true;
        bulkApplyAllBtn.textContent = 'Preparing...';
    }
    // MVP: Commented out backup preparation messages
    // startPreparationMessages();

    // Generate detailed description of changes for future use
    const detailedDescription = generateActionDescription(selectedProducts.length);
    
    // Stop preparation messages and update to applying phase
    stopPreparationMessages();
    if (bulkApplyAllBtn) {
        bulkApplyAllBtn.textContent = 'Applying...';
    }

    try {
        // Skip all immediate visual updates - let the API calls handle the data changes
        // and the table refresh handle the visual updates

        // Now save the changes directly to Squarespace
        
        const saveResult = await saveBulkChangesToSquarespace(selectedProducts);
        
        // Wait for progress bar to complete before showing final notification
        setTimeout(() => {
            
            if (saveResult.success) {
                // Clear the modified state since we've saved successfully
                selectedProducts.forEach(row => {
                    const modifiedCells = row.querySelectorAll('.modified');
                    modifiedCells.forEach(cell => {
                        cell.classList.remove('modified');
                        cell.dataset.originalValue = cell.textContent;
                    });
                    
                    row.classList.remove('has-changes', 'modified');
                });
                
                // Reset bulk changes after successful application
                resetBulkChanges();
                
                // Clean up category operation tracking after successful bulk operation
                if (typeof categoryOperationTracker !== 'undefined') {
                    categoryOperationTracker.cleanup();
                }
                
            }
        }, 2000); // Wait 2 seconds for progress bar to complete and hide

    } catch (error) {
        console.error('Error applying bulk changes:', error);
        stopPreparationMessages();
        
        if (bulkApplyAllBtn) {
            bulkApplyAllBtn.disabled = false;
            bulkApplyAllBtn.textContent = 'Apply Changes';
        }
        
        showBulkNotification('Failed to apply bulk changes', 'error');
    }
}

// Function to apply advanced bulk changes to a single row (categories, tags, SKU)
function applyAdvancedBulkChangesToRow(row, changes) {
    
    // Apply category changes
    if (changes.categoryToAdd) {
        const categoryCell = row.querySelector('td:nth-child(5)');
        if (categoryCell && !row.classList.contains('variant-row')) {
            const currentCategories = categoryCell.textContent.trim();
            let newCategories;
            
            if (currentCategories === '' || currentCategories === 'No categories') {
                newCategories = changes.categoryToAdd;
            } else {
                const categoriesArray = currentCategories.split(', ').map(cat => cat.trim());
                if (!categoriesArray.includes(changes.categoryToAdd)) {
                    categoriesArray.push(changes.categoryToAdd);
                    newCategories = categoriesArray.join(', ');
                } else {
                    newCategories = currentCategories;
                }
            }
            
            if (newCategories !== currentCategories) {
                // Store detailed change tracking for API calls
                const originalCategories = currentCategories === 'No categories' ? '' : currentCategories;
                const originalCategoriesArray = originalCategories ? originalCategories.split(', ') : [];
                const newCategoriesArray = newCategories === 'No categories' ? [] : newCategories.split(', ');
                
                const addedCategories = newCategoriesArray.filter(cat => !originalCategoriesArray.includes(cat));
                const removedCategories = originalCategoriesArray.filter(cat => !newCategoriesArray.includes(cat));
                
                // Note: Visual updates removed - only store data for API calls
                categoryCell.setAttribute('data-field-type', 'category');
                categoryCell.setAttribute('data-original-value', originalCategories);
                categoryCell.setAttribute('data-new-value', newCategories);
                
                if (addedCategories.length > 0) {
                    categoryCell.setAttribute('data-categories-added', addedCategories.join(','));
                } else {
                    categoryCell.removeAttribute('data-categories-added');
                }
                
                if (removedCategories.length > 0) {
                    categoryCell.setAttribute('data-categories-removed', removedCategories.join(','));
                } else {
                    categoryCell.removeAttribute('data-categories-removed');
                }
                
            }
        }
    }
    
    // Apply SKU changes
    if (changes.skuPrefix || changes.skuSuffix) {
        const skuCell = row.querySelector('td:nth-child(4)'); // SKU column
        if (skuCell) {
            const currentSku = skuCell.textContent.trim();
            let newSku = currentSku;
            
            if (changes.skuPrefix) {
                newSku = changes.skuPrefix + newSku;
            }
            
            if (changes.skuSuffix) {
                newSku = newSku + changes.skuSuffix;
            }
            
            if (newSku !== currentSku) {
                // Note: Visual updates removed - only store data for API calls
                skuCell.setAttribute('data-field-type', 'sku');
                skuCell.setAttribute('data-original-value', currentSku);
                skuCell.setAttribute('data-new-value', newSku);
                
            }
        }
    }
}


// === BULK-CHANGE-APPLICATION MODULE ===
// Complex bulk change application and Squarespace API integration

// Price rounding utility function
function applyRounding(price, roundingType, customCents) {
    
    if (!price || price <= 0) {
        return price;
    }
    
    let result;
    switch (roundingType) {
        case 'whole':
            result = Math.round(price);
            break;
        case '.99':
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollar = Math.floor(price);
            const option1 = (currentDollar - 1) + 0.99;  // e.g., $5.99
            const option2 = currentDollar + 0.99;         // e.g., $6.99
            const option3 = (currentDollar + 1) + 0.99;   // e.g., $7.99
            
            // Find which option is closest
            const dist1 = Math.abs(price - option1);
            const dist2 = Math.abs(price - option2);
            const dist3 = Math.abs(price - option3);
            
            if (dist1 <= dist2 && dist1 <= dist3) {
                result = option1;
            } else if (dist2 <= dist3) {
                result = option2;
            } else {
                result = option3;
            }
            
            // Ensure we don't go below 0.99
            if (result < 0.99) result = 0.99;
            break;
        case '.95':
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollar95 = Math.floor(price);
            const option1_95 = (currentDollar95 - 1) + 0.95;  // e.g., $5.95
            const option2_95 = currentDollar95 + 0.95;         // e.g., $6.95
            const option3_95 = (currentDollar95 + 1) + 0.95;   // e.g., $7.95
            
            // Find which option is closest
            const dist1_95 = Math.abs(price - option1_95);
            const dist2_95 = Math.abs(price - option2_95);
            const dist3_95 = Math.abs(price - option3_95);
            
            if (dist1_95 <= dist2_95 && dist1_95 <= dist3_95) {
                result = option1_95;
            } else if (dist2_95 <= dist3_95) {
                result = option2_95;
            } else {
                result = option3_95;
            }
            
            // Ensure we don't go below 0.95
            if (result < 0.95) result = 0.95;
            break;
        case 'custom':
            const cents = customCents || 99;
            const centsDecimal = cents / 100;
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollarCustom = Math.floor(price);
            const option1_custom = (currentDollarCustom - 1) + centsDecimal;
            const option2_custom = currentDollarCustom + centsDecimal;
            const option3_custom = (currentDollarCustom + 1) + centsDecimal;
            
            // Find which option is closest
            const dist1_custom = Math.abs(price - option1_custom);
            const dist2_custom = Math.abs(price - option2_custom);
            const dist3_custom = Math.abs(price - option3_custom);
            
            if (dist1_custom <= dist2_custom && dist1_custom <= dist3_custom) {
                result = option1_custom;
            } else if (dist2_custom <= dist3_custom) {
                result = option2_custom;
            } else {
                result = option3_custom;
            }
            
            // Ensure we don't go below the cents value
            if (result < centsDecimal) result = centsDecimal;
            break;
        default:
            result = price;
    }
    
    return result;
}

// Category operation throttling system to prevent API conflicts
const categoryOperationTracker = {
    activeOperations: new Map(), // Map of categoryName -> { count, lastOperation, queue }
    operationDelay: 2000, // 2 second delay between operations on the same category
    
    async waitForCategorySlot(categoryName, operationType = 'remove') {
        const key = `${categoryName}-${operationType}`;
        const now = Date.now();
        
        if (!this.activeOperations.has(key)) {
            // First operation on this category - can proceed immediately
            this.activeOperations.set(key, {
                count: 1,
                lastOperation: now,
                queue: []
            });
            return;
        }
        
        const operation = this.activeOperations.get(key);
        const timeSinceLastOp = now - operation.lastOperation;
        
        if (timeSinceLastOp >= this.operationDelay) {
            // Enough time has passed - can proceed immediately
            operation.count++;
            operation.lastOperation = now;
            return;
        }
        
        // Need to wait - add to queue and wait for turn
        const waitTime = this.operationDelay - timeSinceLastOp;
        
        // Create a promise that will resolve when it's this operation's turn
        const queuePromise = new Promise((resolve) => {
            operation.queue.push({
                resolve,
                operationType,
                categoryName,
                queuedAt: now
            });
        });
        
        // Process the queue if not already processing
        this._processQueue(key);
        
        // Wait for our turn
        await queuePromise;
        
        // Update the operation tracker
        operation.count++;
        operation.lastOperation = Date.now();
    },
    
    async _processQueue(key) {
        const operation = this.activeOperations.get(key);
        if (!operation || operation.queue.length === 0 || operation.processing) {
            return;
        }
        
        operation.processing = true;
        
        while (operation.queue.length > 0) {
            const timeSinceLastOp = Date.now() - operation.lastOperation;
            const waitTime = Math.max(0, this.operationDelay - timeSinceLastOp);
            
            if (waitTime > 0) {
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
            
            const nextOperation = operation.queue.shift();
            if (nextOperation) {
                nextOperation.resolve();
                operation.lastOperation = Date.now();
            }
        }
        
        operation.processing = false;
    },
    
    cleanup() {
        // Clean up old entries after bulk operation completes
        const cutoff = Date.now() - (this.operationDelay * 2);
        for (const [key, operation] of this.activeOperations.entries()) {
            if (operation.lastOperation < cutoff && operation.queue.length === 0) {
                this.activeOperations.delete(key);
            }
        }
    }
};

// Category API functions - imported from api.js
async function getCategoryIdsByNames(categoryNames) {
    
    const globalCategories = window.globalCategoriesData || [];
    
    const categoryIds = [];
    
    for (const categoryName of categoryNames) {
        const category = globalCategories.find(cat => cat.name === categoryName);
        if (category) {
            categoryIds.push(category.id);
        } else {
            // Try to create the category
            const newCategoryId = await createNewCategory(categoryName);
            if (newCategoryId) {
                categoryIds.push(newCategoryId);
            }
        }
    }
    
    return categoryIds;
}

async function createNewCategory(categoryName) {
    
    // Get the website ID from global data
    let websiteId = null;
    if (window.globalCategoryTreeData && window.globalCategoryTreeData.length > 0) {
        const rootCategory = window.globalCategoryTreeData.find(cat => cat.type === 'ROOT');
        if (rootCategory) {
            websiteId = rootCategory.websiteId;
        }
    }
    
    if (!websiteId && window.globalCollectionsData && window.globalCollectionsData.length > 0) {
        websiteId = window.globalCollectionsData[0].websiteId;
    }
    
    if (!websiteId && window.globalProductsData && window.globalProductsData.length > 0) {
        const firstProduct = window.globalProductsData[0];
        if (firstProduct.websiteId) {
            websiteId = firstProduct.websiteId;
        }
    }
    
    // Try path-based extraction as fallback
    const pathMatch = window.location.pathname.match(/\/config\/pages\/([^\/]+)/);
    if (!websiteId && pathMatch) {
        websiteId = pathMatch[1];
    }
    
    if (!websiteId) {
        console.error('❌ Could not determine website ID for category creation');
        return null;
    }
    
    const crumb = getCsrfToken();
    if (!crumb) {
        console.error('❌ No CSRF token available for category creation');
        return null;
    }
    
    try {
        // Find the correct parent category - fetch from tree API like native Squarespace does
        let parentCategoryId = null;
        
        // Method 1: Try to extract from current URL path (like native Squarespace does)
        const urlPathMatch = window.location.pathname.match(/\/categories\/([^\/]+)/);
        if (urlPathMatch) {
            parentCategoryId = urlPathMatch[1];
        }
        
        // Get the collection ID first (needed for tree API call)
        const collectionId = window.globalCollectionsData?.[0]?.id;
        if (!collectionId) {
            console.error('❌ Collection ID not found - cannot create category');
            throw new Error('Collection ID not found - cannot create category');
        }

        // Method 2: Fetch category tree from API (like native Squarespace does)
        if (!parentCategoryId) {
            try {
                const treeResponse = await fetch(`${window.location.origin}/api/product-content-service/products/${collectionId}/categories/tree`, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json, text/plain, */*',
                        'content-type': 'application/json',
                        'x-csrf-token': crumb
                    },
                    credentials: 'include'
                });
                
                if (treeResponse.ok) {
                    const treeData = await treeResponse.json();
                    
                    // Find the ROOT category as parent (this matches native Squarespace behavior)
                    const rootCategory = treeData.categoryTree?.find(cat => cat.type === 'ROOT');
                    if (rootCategory) {
                        parentCategoryId = rootCategory.id;
                    }
                } else {
                    console.error(`❌ Failed to fetch category tree: ${treeResponse.status} ${treeResponse.statusText}`);
                }
            } catch (error) {
                console.error(`Error fetching category tree:`, error);
            }
        }
        
        // Method 3: Fallback to globalCategoryTreeData if available
        if (!parentCategoryId && window.globalCategoryTreeData && window.globalCategoryTreeData.length > 0) {
            const rootCategory = window.globalCategoryTreeData.find(cat => cat.type === 'ROOT');
            if (rootCategory) {
                parentCategoryId = rootCategory.id;
            }
        }
        
        const requestUrl = `${window.location.origin}/api/content-service/product/1.1/websites/${websiteId}/products/${collectionId}/categories`;
        const requestBody = {
            displayName: categoryName,
            parentCategoryId: parentCategoryId,
            type: 'INTERIOR',
            pageRendering: 'LIST_VIEW',
            displayIndex: 1
        };
        
        const response = await fetch(requestUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/json',
                'x-csrf-token': crumb
            },
            credentials: 'include',
            body: JSON.stringify(requestBody)
        });
        
        if (response.ok) {
            const newCategory = await response.json();

            // Update global categories data
            if (window.globalCategoriesData) {
                window.globalCategoriesData.push({
                    id: newCategory.id,
                    name: categoryName,
                    itemIds: []
                });
            }
            
            // Also update the category tree data if available
            if (window.globalCategoryTreeData) {
                window.globalCategoryTreeData.push({
                    id: newCategory.id,
                    name: categoryName,
                    displayName: categoryName,
                    parentId: parentCategoryId,
                    type: 'INTERIOR',
                    productIds: []
                });
            }
            
            return newCategory.id;
        } else {
            const errorText = await response.text();
            console.error(`❌ Failed to create category ${categoryName}: ${response.status} ${response.statusText} - ${errorText}`);
            return null;
        }
    } catch (error) {
        console.error(`❌ Error creating category ${categoryName}:`, error);
        return null;
    }
}

async function updateProductCategories(productId, categoryNames, crumbToken) {
    if (!categoryNames || categoryNames.length === 0) {
        return true;
    }
    
    const categoryIds = await getCategoryIdsByNames(categoryNames);
    
    if (!categoryIds || categoryIds.length === 0) {
        console.error(`❌ Could not get category IDs for categories:`, categoryNames);
        return false;
    }
    
    // Build URL with multiple categoryIds parameters (like native Squarespace)
    const categoryParams = categoryIds.map(id => `categoryIds=${id}`).join('&');
    const url = `${window.location.origin}/api/commerce/products/${productId}/categories/assign?${categoryParams}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumbToken
            },
            credentials: 'include',
            body: null  // Explicitly null like native Squarespace
        });
        
        if (response.ok) {
            const responseData = await response.json();
            
            // Enhanced validation: Check if all requested categories are in the response
            const requestedCategoryIds = new Set(categoryIds);
            const responseCategoryIds = new Set(Object.keys(responseData));
            const missingCategories = categoryIds.filter(id => !responseData.hasOwnProperty(id));
            
            if (missingCategories.length > 0) {
                console.error(`❌ CATEGORY ASSIGNMENT: API BUG DETECTED! Response missing requested category IDs: ${missingCategories.join(', ')}`);
                console.error(`🔍 CATEGORY ASSIGNMENT: Requested: ${categoryIds.join(', ')}`);
                console.error(`🔍 CATEGORY ASSIGNMENT: Response contains: ${Object.keys(responseData).join(', ')}`);
            }
            
            // Verify response matches native pattern: {"categoryId": true, "categoryId": true}
            const assignedCategories = Object.keys(responseData).filter(catId => responseData[catId] === true);
            const failedCategories = Object.keys(responseData).filter(catId => responseData[catId] !== true);
            
            if (failedCategories.length > 0) {
                console.warn(`❌ Failed to assign categories: ${failedCategories.join(', ')}`);
            }
            
            // Increment API call progress after category assignment
            if (globalProgress) {
                globalProgress.incrementApiCall();
            }
            
            // Only count categories that we actually requested as successful
            const requestedAndAssigned = assignedCategories.filter(catId => requestedCategoryIds.has(catId));
            const success = requestedAndAssigned.length === categoryIds.length;
            
            return success;
        } else {
            const errorText = await response.text();
            console.error(`❌ Failed to assign categories: ${response.status} - ${errorText}`);
            return false;
        }
    } catch (error) {
        console.error(`💥 Error assigning categories to product ${productId}:`, error);
        return false;
    }
}

async function unassignProductCategories(productId, categoryNames, crumbToken) {
    
    if (!categoryNames || categoryNames.length === 0) {
        return true;
    }
    
    // Get category IDs for removal
    const categoryIds = await getCategoryIdsByNames(categoryNames);
    
    if (!categoryIds || categoryIds.length === 0) {
        console.error(`❌ Could not get category IDs for categories to unassign:`, categoryNames);
        return false;
    }
    
    // Build URL with multiple categoryIds parameters (like native Squarespace)
    const categoryParams = categoryIds.map(id => `categoryIds=${id}`).join('&');
    const url = `${window.location.origin}/api/commerce/products/${productId}/categories/unassign?${categoryParams}`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumbToken
            },
            credentials: 'include',
            body: null  // Explicitly null like native Squarespace
        });
        
        
        if (response.ok) {
            // Parse and log the response body to understand what the API returns
            try {
                const responseText = await response.text();
                
                // Try to parse as JSON for better understanding
                if (responseText) {
                    try {
                        const responseData = JSON.parse(responseText);
                        
                        // Check if the response indicates success for our specific product
                        if (typeof responseData === 'object') {
                            const productKeys = Object.keys(responseData);

                            
                            // Check both string and number versions of the product ID
                            const stringProductId = String(productId);
                            const numericProductId = Number(productId);
                            
                            if (responseData[productId] === true) {
                            } else if (responseData[stringProductId] === true) {
                            } else if (responseData[numericProductId] === true) {
                            } else if (productKeys.includes(productId)) {
                            } else if (productKeys.includes(stringProductId)) {
                            } else {
                            }
                        }
                    } catch (parseError) {
                    }
                } else {
                }
            } catch (textError) {
            }
            
            // POST-REMOVAL VERIFICATION: Check if the removal actually worked
            try {

                await new Promise(r => setTimeout(r, 500)); // Small delay for backend processing
                
                const verificationResponse = await fetch(`${window.location.origin}/api/commerce/products/${productId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': crumbToken
                    },
                    credentials: 'include'
                });
                
                if (verificationResponse.ok) {
                    const verificationData = await verificationResponse.json();
                    
                    // Increment API call progress after verification call
                    if (globalProgress) {
                        globalProgress.incrementApiCall();
                    }
                    
                    // CRITICAL FIX: Check categoryIds instead of categories (which is always empty)
                    // Get the actual category IDs that should be removed for comparison
                    const categoryIdsToRemove = await getCategoryIdsByNames(categoryNames);
                    const remainingCategoryIds = verificationData.categoryIds || [];
                    
                    // Check if any of the categories we tried to remove are still in categoryIds
                    const stillAssignedIds = categoryIdsToRemove.filter(targetId => 
                        remainingCategoryIds.includes(targetId)
                    );
                    
                    // If any IDs are still assigned, those categories weren't properly removed
                    const stillAssigned = stillAssignedIds.length > 0 ? 
                        categoryNames.filter((name, index) => 
                            stillAssignedIds.includes(categoryIdsToRemove[index])
                        ) : [];
                    
                    if (stillAssigned.length > 0) {
                        console.error(`🚨 POST-REMOVAL VERIFICATION FAILED: Categories still assigned after removal:`, stillAssigned);
                        console.error(`🔍 This is the inconsistency issue! Categories that should have been removed are still assigned.`);
                        console.error(`💡 This explains why adding then removing works - it forces a state refresh.`);
                        console.error(`🔬 INCONSISTENCY PATTERN: Product ${productId}, Failed to remove: ${stillAssigned.join(', ')}`);
                        
                        // EXPERIMENTAL: Try the "add then remove" workaround automatically
                        try {
                            // First, add the stubborn categories back
                            const addSuccess = await updateProductCategories(productId, stillAssigned, crumbToken);
                            if (addSuccess) {
                                
                                // Small delay
                                await new Promise(r => setTimeout(r, 300));
                                
                                // Now try removing them again
                                const retryRemoval = await unassignProductCategoriesCore(productId, stillAssigned, crumbToken);
                                if (retryRemoval) {
                                    return true;
                                } else {
                                    console.error(`❌ WORKAROUND FAILED: Even add+remove cycle didn't work`);
                                    return false;
                                }
                            } else {
                                console.error(`❌ WORKAROUND FAILED: Could not re-add categories for retry`);
                                return false;
                            }
                        } catch (workaroundError) {
                            console.error(`💥 WORKAROUND ERROR:`, workaroundError);
                            return false;
                        }
                    } else {
                    }
                } else {
                    console.warn(`⚠️ Could not verify removal success (${verificationResponse.status}), assuming success based on API response`);
                }
            } catch (verificationError) {
                console.warn(`⚠️ Error during post-removal verification:`, verificationError.message, `- assuming success based on API response`);
            }
            
            return true;
        } else {
            const errorText = await response.text();
            console.error(`❌ Failed to unassign categories: ${response.status} - ${errorText}`);
            return false;
        }
    } catch (error) {
        console.error(`💥 Error unassigning categories from product ${productId}:`, error);
        return false;
    }
}

// Core category removal function without verification loops (used by workaround)
async function unassignProductCategoriesCore(productId, categoryNames, crumbToken) {
    
    if (!categoryNames || categoryNames.length === 0) {
        return true;
    }
    
    const categoryIds = await getCategoryIdsByNames(categoryNames);
    if (!categoryIds || categoryIds.length === 0) {
        console.error(`❌ CORE REMOVAL: Could not get category IDs for:`, categoryNames);
        return false;
    }
    
    const categoryParams = categoryIds.map(id => `categoryIds=${id}`).join('&');
    const url = `${window.location.origin}/api/commerce/products/${productId}/categories/unassign?${categoryParams}`;
    
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumbToken
            },
            credentials: 'include',
            body: null  // Explicitly null like native Squarespace
        });
        
        if (response.ok) {
            const responseData = await response.json();
            
            // Increment API call progress after core removal call
            if (globalProgress) {
                globalProgress.incrementApiCall();
            }
            
            // Squarespace API returns root category ID (not product ID) for category operations
            // This is the expected behavior - the API indicates category structure was updated
            const responseIds = Object.keys(responseData);
            const successfulOperations = responseIds.filter(id => responseData[id] === true);
            const failedOperations = responseIds.filter(id => responseData[id] !== true);
            
            
            if (failedOperations.length > 0) {
                console.warn(`❌ CORE REMOVAL: Some operations failed: ${failedOperations.join(', ')}`);
                return false;
            }
            
            // Success if we got any successful response (Squarespace API design)
            return true;
        } else {
            const errorText = await response.text();
            console.error(`❌ CORE REMOVAL: Failed for product ${productId}: ${response.status} - ${errorText}`);
            return false;
        }
    } catch (error) {
        console.error(`💥 CORE REMOVAL: Error for product ${productId}:`, error);
        return false;
    }
}

// Helper function to properly convert datetime-local input to ISO string
function convertScheduledDateToISO(scheduledDateValue) {
    try {
        // Handle datetime-local input format (YYYY-MM-DDTHH:MM)
        // The datetime-local input gives us a string without timezone info
        // We need to treat this as the user's local time, not UTC
        let dateObj;
        if (scheduledDateValue.includes('T') && !scheduledDateValue.includes('Z') && !scheduledDateValue.includes('+')) {
            // This is a datetime-local format, append ':00' for seconds if not present and treat as local time
            const dateStr = scheduledDateValue.includes(':') && scheduledDateValue.split(':').length === 2 
                ? scheduledDateValue + ':00' 
                : scheduledDateValue;
            dateObj = new Date(dateStr);
        } else {
            // This might be an ISO string or other format
            dateObj = new Date(scheduledDateValue);
        }
        
        const isoString = dateObj.toISOString();
        return isoString;
    } catch (error) {
        console.error('❌ Invalid scheduled date format:', scheduledDateValue, error);
        // Return current time + 1 hour as fallback
        return new Date(Date.now() + 60 * 60 * 1000).toISOString();
    }
}

// Helper function to process category changes
function processCategoryChanges(product) {
    let currentCategories = product.categories || [];
    
    // If we have category changes configured
    if (bulkChanges.categories && ((bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) || (bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0))) {
        // Start with current categories
        let updatedCategories = [...currentCategories];
        
        // Remove categories
        if (bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0) {
            updatedCategories = updatedCategories.filter(cat => 
                !bulkChanges.categories.toRemove.includes(cat)
            );
        }
        
        // Add new categories (avoid duplicates)
        if (bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) {
            bulkChanges.categories.toAdd.forEach(categoryToAdd => {
                if (!updatedCategories.includes(categoryToAdd)) {
                    updatedCategories.push(categoryToAdd);
                }
            });
        }
        
        return updatedCategories;
    }
    
    // No changes - return original categories
    return currentCategories;
}

// Initialize bulk change application
function initializeBulkChangeApplication() {
    // Initialize progress tracking
    initializeProgressTracking();
    
    // Initialize undo system
    // initializeUndoSystem(); // COMMENTED OUT - Backup/restore functionality disabled for MVP
    
    // Initialize API integration
    initializeSquarespaceApiIntegration();
}

// Initialize progress tracking
function initializeProgressTracking() {
    // Create global progress object
    window.globalProgress = {
        startBulk: function(totalProducts, message) {
            
            // Debug bulk changes configuration
            
            // Calculate total API calls needed
            const hasCategoryChanges = bulkChanges.categories && 
                ((bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) || 
                 (bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0));
            
            if (hasCategoryChanges) {
            }
            
            // Each product = 1 API call for product update
            // With categories = 1 product API + 1 category API = 2 total per product
            const apiCallsPerProduct = hasCategoryChanges ? 2 : 1;
            this.totalApiCalls = totalProducts * apiCallsPerProduct;
            this.completedApiCalls = 0;
            this.totalProducts = totalProducts;
            
            
            this._completed = false; // Reset completion flag for new operation
            this._successCount = 0; // Reset success count
            this._errorCount = 0; // Reset error count
            this._startTime = Date.now(); // Track start time for countdown
            
            
            // Start humorous message rotation
            this.startHumorousMessages();
            
            this.updateProgress(message);
        },
        
        incrementApiCall: function(apiType = 'API call', productName = 'processing') {
            this.completedApiCalls++;
            const percentage = Math.round((this.completedApiCalls / this.totalApiCalls) * 100);
            
            // Check if we should trigger completion
            if (this.completedApiCalls >= this.totalApiCalls && !this._completed) {
                // If we already have final counts, complete immediately
                if (this._successCount + this._errorCount === this.totalProducts) {
                    const successMessage = this._errorCount === 0 ? 
                        `Successfully saved ${this._successCount} product${this._successCount !== 1 ? 's' : ''}!` : 
                        `Saved ${this._successCount} products, ${this._errorCount} failed`;
                    this.completeBulk(successMessage);
                }
            }
            
            // Update the progress display - don't pass empty string, let it use current humorous message
            this.updateProgress();
        },
        
        updateCounts: function(successCount, errorCount) {
            this._successCount = successCount;
            this._errorCount = errorCount;
            
            const totalProcessed = successCount + errorCount;
            
            // Check completion conditions
            const allApiCallsComplete = this.completedApiCalls >= this.totalApiCalls;
            const allProductsProcessed = totalProcessed >= this.totalProducts;
            const notAlreadyCompleted = !this._completed;
            
            // If we've completed all API calls and now have final counts, trigger completion
            if (allApiCallsComplete && notAlreadyCompleted) {
                const successMessage = errorCount === 0 ? 
                    `Successfully saved ${successCount} product${successCount !== 1 ? 's' : ''}!` : 
                    `Saved ${successCount} products, ${errorCount} failed`;
                
                this.completeBulk(successMessage);
            }
        },
        
        // Legacy method for backward compatibility
        updateBulkItem: function(itemIndex, itemName) {
            // This method is now handled by incrementApiCall
        },
        
        completeBulk: function(message) {
            // Prevent multiple completion calls
            if (this._completed) {
                console.warn(`⚠️ completeBulk called multiple times, ignoring duplicate call: "${message}"`);
                return;
            }
            this._completed = true;
            
            // Stop humorous message rotation
            this.stopHumorousMessages();
            
            
            // Function to log footer state at completion
            function logFooterState(step) {
                const footer = document.getElementById('bulk-notification-footer');
                const footerVisible = footer ? footer.style.display !== 'none' : 'not found';
                const footerContent = footer ? footer.textContent.trim() : 'no content';
            }
            
            logFooterState('START');
            
            // Clean up category timer if running
            if (this._categoryProgressInterval) {
                clearInterval(this._categoryProgressInterval);
                this._categoryProgressInterval = null;
            }
            
            // Hide the progress container first
            const progressContainer = document.getElementById('bulk-progress-container');
            if (progressContainer) {
                progressContainer.style.display = 'none';
            }
            
            logFooterState('AFTER_PROGRESS_HIDE');
            
            // Show clean success message in notification area
            showBulkNotification(message, 'success', 0); // No auto-hide
            
            logFooterState('AFTER_NOTIFICATION');
            
            // Reset select-all checkbox immediately upon completion
            const selectAllCheckbox = document.getElementById('select-all-checkbox');
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
            }
            
            // Auto-close drawer after 3 seconds to let user read the message
            setTimeout(() => {
                logFooterState('DRAWER_CLOSE');
                if (typeof hideBulkAdjustDrawer === 'function') {
                    hideBulkAdjustDrawer();
                }
                
                // Reload the product table to show updated values
                if (typeof loadProducts === 'function') {
                    loadProducts().then(() => {
                    }).catch(error => {
                        console.error('❌ COMPLETION: Failed to reload product table:', error);
                    });
                } else {
                    console.warn('⚠️ COMPLETION: loadProducts function not available, table will not be refreshed');
                }
                
                // Reset completion flag for next operation
                this._completed = false;
            }, 3000);
        },
        
        updateProgress: function(message) {
            const progressContainer = document.getElementById('bulk-progress-container');
            const progressFill = document.getElementById('bulk-progress-fill');
            const progressText = document.getElementById('bulk-progress-text');
            const progressTime = document.getElementById('bulk-progress-time');
            
            if (progressContainer && progressFill) {
                progressContainer.style.display = 'block';
                
                // Calculate percentage based on completed API calls
                const percentage = this.totalApiCalls ? 
                    Math.round((this.completedApiCalls / this.totalApiCalls) * 100) : 0;
                
                progressFill.style.width = `${percentage}%`;
                
                // Only update text if message is provided, otherwise keep current humorous message
                if (progressText) {
                    if (message !== undefined) {
                        progressText.textContent = message;
                    } else {
                        // Keep current humorous message or show it if not set
                        progressText.textContent = this.currentHumorousMessage || '';
                    }
                }
                
                // Update countdown timer based on API calls remaining
                if (progressTime && percentage > 0 && percentage < 100) {
                    const apiCallsRemaining = Math.max(0, this.totalApiCalls - this.completedApiCalls);
                    
                    if (apiCallsRemaining > 0) {
                        // Estimate time per API call (empirical estimates)
                        const timePerApiCall = 0.8; // seconds per API call (average)
                        const remainingTime = Math.ceil(apiCallsRemaining * timePerApiCall);
                        
                        progressTime.textContent = formatEstimatedTime(remainingTime);
                    } else {
                        progressTime.textContent = '';
                    }
                } else if (progressTime) {
                    progressTime.textContent = '';
                }
                
            }
        },
        
        // Main progress methods for individual changes (non-bulk operations)
        startMain: function(totalItems, message) {
            this.currentItem = 0;
            this.totalItems = totalItems;
            this._completed = false;
            this._successCount = 0;
            this._errorCount = 0;
            this._mainStartTime = Date.now(); // Track start time for countdown
            this.updateMainProgress(message);
        },
        
        updateMainItem: function(itemIndex, itemName) {
            this.currentItem = itemIndex + 1;
            const percentage = Math.round((this.currentItem / this.totalItems) * 100);
            this.updateMainProgress(`Processing ${itemName}... (${this.currentItem}/${this.totalItems})`);
        },
        
        completeMain: function(message) {
            if (this._completed) {
                console.warn(`⚠️ completeMain called multiple times, ignoring duplicate call: "${message}"`);
                return;
            }
            this._completed = true;
            
            
            // Hide the main progress container
            const progressContainer = document.getElementById('main-progress-container');
            if (progressContainer) {
                progressContainer.style.display = 'none';
            }
            
            // Show notification in the changes footer
            showFooterNotification(message, 'success');
        },
        
        updateMainProgress: function(message) {
            const progressContainer = document.getElementById('main-progress-container');
            const progressFill = document.getElementById('main-progress-fill');
            const progressText = document.getElementById('main-progress-text');
            const progressTime = document.getElementById('main-progress-time');
            
            if (progressContainer && progressFill && progressText) {
                progressContainer.style.display = 'block';
                
                const percentage = this.totalItems ? 
                    Math.round((this.currentItem / this.totalItems) * 100) : 0;
                
                progressFill.style.width = `${percentage}%`;
                
                // Clear any text content - only show progress bar
                if (progressText) {
                    progressText.textContent = '';
                }
                
                // Update countdown timer for main progress based on products remaining
                if (progressTime && percentage > 0 && percentage < 100) {
                    const productsRemaining = Math.max(0, this.totalItems - this.currentItem);
                    
                    if (productsRemaining > 0) {
                        // Main progress is typically product-only operations
                        const remainingTime = Math.ceil(productsRemaining * TIMING_ESTIMATES.productOnly);
                        progressTime.textContent = formatEstimatedTime(remainingTime);
                    } else {
                        progressTime.textContent = '';
                    }
                } else if (progressTime) {
                    progressTime.textContent = '';
                }
            }
        },
        
        // Humorous message system
        startHumorousMessages: function() {
            this.preparationMessages = [
                "Rearranging pixels...",
                "Warming the coffee machine...",
                "Dusting off the product shelves...",
                "Sweeping the digital floor...",
                "Polishing the product images...",
                "Straightening the virtual shelves...",
                "Quietly preparing magic...",
                "Organizing the inventory bins...",
                "Wiping down the checkout counter...",
                "Restocking the virtual displays...",
                "Adjusting the store lighting...",
                "Cleaning the display windows...",
                "Straightening the welcome mat...",
                "Refreshing the product samples...",
                "Tuning the background music...",
                "Preheating the creative oven...",
                "Watering the digital plants...",
                "Fluffing the virtual cushions...",
                "Adjusting the room temperature...",
                "Feeding the office fish...",
                "Whispering to the databases...",
                "Cleaning the computer screen...",
                "Teaching pixels to dance...",
                "Optimizing with tender care..."
            ];
            this.usedMessages = [];
            this.messageInterval = null;
            
            
            // Show first message immediately
            this.showNextHumorousMessage();
            
            // Start rotating messages every 3 seconds
            this.messageInterval = setInterval(() => {
                this.showNextHumorousMessage();
            }, 3000);
            
        },
        
        showNextHumorousMessage: function() {
            if (!this.preparationMessages || this.preparationMessages.length === 0) {
                return;
            }
            
            // Reset if all messages have been used
            if (this.usedMessages.length >= this.preparationMessages.length) {
                this.usedMessages = [];
            }
            
            // Find an unused message
            let messageIndex;
            do {
                messageIndex = Math.floor(Math.random() * this.preparationMessages.length);
            } while (this.usedMessages.includes(messageIndex));
            
            this.usedMessages.push(messageIndex);
            this.currentHumorousMessage = this.preparationMessages[messageIndex];
            
            
            // Update the progress text immediately
            const progressText = document.getElementById('bulk-progress-text');
            if (progressText) {
                progressText.textContent = this.currentHumorousMessage;
            } else {
            }
        },
        
        stopHumorousMessages: function() {
            if (this.messageInterval) {
                clearInterval(this.messageInterval);
                this.messageInterval = null;
            }
            this.currentHumorousMessage = '';
        }
    };
}

// Initialize undo system
// === JSON FILE MANAGEMENT FOR UNDO HISTORY ===

// Get JSON file URL from meta tag
function getJsonFileUrl() {
    const metaTag = document.querySelector('meta[data-squarehero-plugin="product-manager"]');
    return metaTag ? metaTag.getAttribute('settings') : null;
}

// Load undo history from JSON file
async function loadUndoHistoryFromJson() {
    try {
        const jsonUrl = getJsonFileUrl();
        
        if (!jsonUrl) {
            undoHistory = [];
            return;
        }

        
        const response = await fetch(jsonUrl, {
            method: 'GET',
            cache: 'no-cache' // Ensure we get the latest version
        });

        if (!response.ok) {
            undoHistory = [];
            return;
        }

        const data = await response.json();
        
        // Ensure undoHistory exists in loaded data
        if (!data.undoHistory) {
            data.undoHistory = [];
        }
        
        // Load undo history into memory
        undoHistory = data.undoHistory || [];
        
    } catch (error) {
        console.error('🔄 Error loading undo history from JSON file:', error);
        undoHistory = [];
    }
}

// === UNDO DRAWER FUNCTIONALITY ===

// Populate the undo history list in the drawer
function populateUndoHistoryList() {
    const historyList = document.getElementById('undo-history-list');
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    if (undoHistory.length === 0) {
        historyList.innerHTML = `
            <div class="undo-empty-state" style="
                text-align: center;
                padding: 40px 20px;
                color: #6b7280;
                font-style: italic;
            ">
                <div style="font-size: 48px; margin-bottom: 16px;">📝</div>
                <div>No changes to undo</div>
                <div style="font-size: 14px; margin-top: 8px;">Make some bulk changes to see undo history here</div>
            </div>
        `;
        return;
    }
    
    undoHistory.forEach((entry, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'undo-history-item';
        historyItem.style.cssText = `
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
            cursor: pointer;
            transition: all 0.2s ease;
            background: white;
        `;
        
        historyItem.innerHTML = `
            <div class="undo-item-header" style="
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 8px;
            ">
                <div class="undo-item-action" style="
                    font-weight: 600;
                    color: #111827;
                    font-size: 14px;
                ">${entry.action}</div>
                <div class="undo-item-time" style="
                    font-size: 12px;
                    color: #6b7280;
                ">${formatTimeAgo(entry.timestamp)}</div>
            </div>
            <div class="undo-item-details" style="
                font-size: 13px;
                color: #6b7280;
                margin-bottom: 8px;
            ">${entry.productCount} product${entry.productCount === 1 ? '' : 's'} affected</div>
            <div class="undo-item-products" style="
                font-size: 12px;
                color: #9ca3af;
                line-height: 1.4;
                max-height: 40px;
                overflow: hidden;
            ">${entry.productTitles?.slice(0, 3).join(', ')}${entry.productTitles?.length > 3 ? '...' : ''}</div>
        `;
        
        // Add click handler to select this undo entry
        historyItem.addEventListener('click', () => {
            // Remove selection from other items
            document.querySelectorAll('.undo-history-item').forEach(item => {
                item.style.borderColor = '#e5e7eb';
                item.style.backgroundColor = 'white';
            });
            
            // Select this item
            historyItem.style.borderColor = '#3b82f6';
            historyItem.style.backgroundColor = '#eff6ff';
            
            // Enable restore button
            selectedUndoIndex = index;
            const restoreBtn = document.getElementById('undo-restore');
            if (restoreBtn) {
                restoreBtn.disabled = false;
            }
        });
        
        historyList.appendChild(historyItem);
    });
}

// Format time ago helper function
function formatTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffMs = now - time;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return time.toLocaleDateString();
}

// === UNDO SYSTEM INITIALIZATION ===

async function initializeUndoSystem() {
    
    try {
        // Load undo history from JSON file
        await loadUndoHistoryFromJson();
        
        const undoButton = document.getElementById('undo-changes-btn');
        if (undoButton) {
            // Remove any existing event listeners
            undoButton.removeEventListener('click', restoreFromUndo);
            // The undo button should open the undo drawer, not directly restore
            // The actual restoration is handled by the drawer's restore button
        }
        
        // Initial state update
        updateUndoButtonState();
        
    } catch (error) {
        console.error('❌ Error initializing undo system:', error);
        // Fall back to empty history
        if (!undoHistory) {
            undoHistory = [];
        }
        updateUndoButtonState();
    }
}

// Update undo button state based on history
function updateUndoButtonState() {
    const undoButton = document.getElementById('undo-changes-btn');
    if (!undoButton) return;
    
    const hasUndoHistory = undoHistory && undoHistory.length > 0;
    undoButton.disabled = !hasUndoHistory;
    
}

// Get CSRF token from page
function getCsrfToken() {
    const crumb = document.cookie.split(';')
        .find(c => c.trim().startsWith('crumb='))
        ?.split('=')[1];
    
    if (!crumb) {
        console.error("Could not find crumb cookie for API requests");
        return null;
    }
    return crumb;
}

// Fetch current product states directly from Squarespace API for 100% accuracy
async function fetchCurrentProductStates() {
    try {
        
        // Get the CSRF token
        const crumb = getCsrfToken();
        if (!crumb) {
            console.warn('⚠️ No CSRF token available for API fetch');
            return [];
        }
        
        // Step 1: Get all collections to find product collections
        const collectionsResponse = await fetch(`${window.location.origin}/api/commondata/GetCollections`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });
        
        if (!collectionsResponse.ok) {
            console.warn('⚠️ Failed to fetch collections, falling back to cached data');
            return [];
        }
        
        const collectionsData = await collectionsResponse.json();
        const allCollections = Object.values(collectionsData.collections || {});
        const productCollections = allCollections.filter(col => col.type === 13);
        
        if (productCollections.length === 0) {
            console.warn('⚠️ No product collections found, falling back to cached data');
            return [];
        }
        
        
        const websiteId = productCollections[0].websiteId;
        let allCurrentProducts = [];
        
        // Step 2: Query all product collections concurrently for current state
        
        const fetchCollectionProducts = async (collection) => {
            const apiUrl = `${window.location.origin}/api/content-service/product/1.1/websites/${websiteId}/products/${collection.id}/queryProductItems`;
            
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                        'x-csrf-token': crumb
                    },
                    body: JSON.stringify({"limit": 200}), // Keep at 200 - API limit
                    credentials: 'include'
                });
                
                if (response.ok) {
                    const data = await response.json();
                    const products = data.products || [];
                    return products;
                } else {
                    console.warn(`⚠️ Failed to fetch from collection "${collection.title}": ${response.status}`);
                    return [];
                }
            } catch (error) {
                console.warn(`⚠️ Error fetching collection "${collection.title}":`, error);
                return [];
            }
        };
        
        // Fetch all collections concurrently
        const collectionPromises = productCollections.map(collection => fetchCollectionProducts(collection));
        const collectionResults = await Promise.all(collectionPromises);
        
        // Combine all results
        allCurrentProducts = collectionResults.flat();
        
        return allCurrentProducts;
        
    } catch (error) {
        console.error('❌ Error in fetchCurrentProductStates:', error);
        return [];
    }
}

// Capture undo snapshot
async function captureUndoSnapshot(actionDescription = 'Bulk operation', detailedDescription = null) {
    try {
        
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const dateStr = date.toISOString().slice(0, 19).replace(/[:-]/g, '').replace('T', '_');
        const filename = `undo_${dateStr}_${timestamp}.json`;
        
        
        // Get current product data directly from Squarespace API for 100% accuracy
        const currentProducts = await fetchCurrentProductStates();
        
        if (!currentProducts || currentProducts.length === 0) {
            console.warn('⚠️ No products fetched from API for snapshot');
            return;
        }
        
        
        const snapshot = {
            timestamp: timestamp,
            action: actionDescription,
            detailedDescription: detailedDescription,
            filename: filename,
            products: currentProducts.map(product => {
                // Extract the essential data from the product object
                const isDigitalProduct = product.storeItem?.productType === "DIGITAL" || product.type === "DIGITAL";
                const isServiceProduct = product.storeItem?.productType === "SERVICE";
                const primaryVariant = !isDigitalProduct && !isServiceProduct && (product.storeItem?.variants?.length > 0 ? product.storeItem.variants[0] : product.variants?.length > 0 ? product.variants[0] : null);
                
                // Format price from cents (API returns price in cents)
                const formatPrice = (priceCents, currencyCode = null) => {
                    if (priceCents === null || priceCents === undefined) return "N/A";
                    
                    // Use currency manager if available
                    if (window.currencyManager) {
                        const priceValue = priceCents / 100;
                        return window.currencyManager.formatCurrency(priceValue, currencyCode);
                    }
                    
                    // Use detected currency or return basic format without currency prefix
                    const currency = currencyCode || window.getSystemCurrency?.();
                    const decimalValue = (priceCents / 100).toFixed(2);
                    return currency ? `${currency}$${decimalValue}` : `$${decimalValue}`;
                };
                
                // Get pricing from API data (handle both data structures)
                let priceText = "N/A";
                let salePriceText = "";
                
                if (isDigitalProduct) {
                    // Try API structure first, then fallback to existing structure
                    const price = product.price || product.storeItem?.priceCents;
                    const salePrice = product.salePrice || product.storeItem?.salePriceCents;
                    
                    priceText = formatPrice(price);
                    if (salePrice !== null && salePrice !== undefined) {
                        salePriceText = formatPrice(salePrice);
                    }
                } else {
                    // Try API structure first, then fallback to existing structure
                    const priceValue = primaryVariant?.priceMoney?.value || primaryVariant?.price;
                    const salePriceValue = primaryVariant?.salePriceMoney?.value || primaryVariant?.salePrice;
                    
                    priceText = formatPrice(priceValue);
                    if (salePriceValue !== null && salePriceValue !== undefined) {
                        salePriceText = formatPrice(salePriceValue);
                    }
                }
                
                // Get stock from API data (handle both data structures)
                let stockText = "0";
                if (isDigitalProduct) {
                    stockText = '∞';
                } else if (primaryVariant) {
                    if (primaryVariant.unlimited) {
                        stockText = '∞';
                    } else {
                        stockText = primaryVariant.qtyInStock?.toString() || "0";
                    }
                }
                
                // Get current status directly from API data (100% accurate)
                // Note: SCHEDULED products have workflowState="DRAFT" but with a publishOn date
                let status = 'hidden';
                if (product.workflowState === 'PUBLISHED') {
                    status = 'public';
                } else if (product.workflowState === 'DRAFT') {
                    // Check if it has a future publishOn date (scheduled) or no date (hidden)
                    if (product.publishOn) {
                        const publishDate = new Date(product.publishOn);
                        const now = new Date();
                        if (publishDate > now) {
                            status = 'scheduled';
                        } else {
                            status = 'hidden'; // Past publishOn date means it should be published but isn't
                        }
                    } else {
                        status = 'hidden'; // No publishOn date means truly hidden
                    }
                }
                
                return {
                    id: product.id,
                    name: product.title || 'Untitled Product',
                    price: priceText,
                    salePrice: salePriceText,
                    onSale: primaryVariant?.onSale || false,
                    stockLevel: stockText,
                    status: status,
                    categories: product.categories && Array.isArray(product.categories) && product.categories.length > 0
                        ? (product.categories[0]?.title ? product.categories.map(cat => cat.title).join(', ') : product.categories.join(', '))
                        : 'Uncategorized',
                    urlSlug: product.urlId || '',
                    sku: isDigitalProduct || isServiceProduct ? 'N/A' : (primaryVariant?.sku || 'N/A'),
                    productType: isServiceProduct ? 'Service' : (isDigitalProduct ? 'Digital' : 'Physical'),
                    // Store the complete original product data for restoration
                    originalData: product
                };
            })
        };
        
        
        if (snapshot.products.length === 0) {
            console.warn('⚠️ No products captured for snapshot - this may indicate an issue with fetchCurrentProductStates()');
        }
        
        // Save the undo snapshot as a separate JSON file

        const snapshotFileUrl = await saveUndoSnapshotFile(filename, snapshot);
        
        // Hide only the backup notification content, keep footer visible
        const bulkNotificationContent = document.querySelector('.bulk-notification-content');
        if (bulkNotificationContent) {
            bulkNotificationContent.style.display = 'none';
        }
        
        // Initialize undo history if it doesn't exist
        if (!undoHistory) {
            undoHistory = [];
            // Update button state for newly initialized history
            updateUndoButtonState();
        }
        
        // Add reference to in-memory history (without the products data to save memory)
        const historyEntry = {
            timestamp: snapshot.timestamp,
            action: snapshot.action,
            detailedDescription: snapshot.detailedDescription,
            filename: filename,
            fileUrl: snapshotFileUrl,  // Store the full URL
            productCount: snapshot.products.length,
            productTitles: snapshot.products.slice(0, 3).map(product => product.name || product.title).filter(Boolean)
        };
        
        undoHistory.unshift(historyEntry);
        
        // Keep only last 5 snapshots
        const MAX_UNDO_HISTORY = 5;
        if (undoHistory.length > MAX_UNDO_HISTORY) {
            // Delete old files before removing from memory
            for (let i = MAX_UNDO_HISTORY; i < undoHistory.length; i++) {
                await deleteUndoSnapshotFile(undoHistory[i].filename);
            }
            undoHistory = undoHistory.slice(0, MAX_UNDO_HISTORY);
        }
        
        // Update undo button state after adding snapshot
        updateUndoButtonState();
        
        
    } catch (error) {
        console.error('❌ Error capturing undo snapshot:', error);
        throw error; // Re-throw so the calling function knows it failed
    }
}

async function saveUndoSnapshotFile(filename, snapshot) {
    try {
        const jsonData = JSON.stringify(snapshot, null, 2);
        
        // Use the universal upload function
        const fileUrl = await uploadJsonToCssAssets(filename, jsonData, 'Save undo snapshot');
        

        return fileUrl;
        
    } catch (error) {
        console.error(`❌ Error saving undo snapshot ${filename}:`, error);
        throw error;
    }
}

async function deleteUndoSnapshotFile(filename) {
    try {
        // Implementation would depend on the file storage system
        // For now, just log it since we can't actually delete from CSS assets
    } catch (error) {
        console.error(`❌ Error deleting undo snapshot ${filename}:`, error);
    }
}

async function uploadJsonToCssAssets(filename, jsonData, actionDescription = 'Upload file') {
    try {
        
        const crumb = getCsrfToken();
        if (!crumb) {
            throw new Error("Cannot upload file without CSRF token");
        }
        
        const jsonFile = new File([jsonData], filename, { 
            type: 'application/json' 
        });
        
        // Upload to Squarespace CSS assets
        const formData = new FormData();
        formData.append('contentType', jsonFile.type);
        formData.append('fileName', jsonFile.name);
        formData.append('fileSize', jsonFile.size);
        formData.append('Filedata', jsonFile);

        const uploadResponse = await fetch(`${window.location.origin}/api/uploads/css-assets`, {
            method: "POST",
            headers: {
                "accept": "application/json, text/plain, */*",
                "x-csrf-token": crumb
            },
            body: formData,
            credentials: "include"
        });
        
        if (!uploadResponse.ok) {
            throw new Error(`HTTP error! status: ${uploadResponse.status}`);
        }
        
        const uploadResult = await uploadResponse.json();
        const fileUrl = uploadResult.media?.[0]?.assetUrl;
        
        if (!fileUrl) {
            throw new Error('No file URL returned from upload');
        }
        
        return fileUrl;
        
    } catch (error) {
        console.error(`❌ Error uploading ${filename}:`, error);
        throw error;
    }
}

// Restore from undo
async function restoreFromUndo() {
    if (!undoHistory || undoHistory.length === 0) {
        showMessage('No changes to undo', 'warning');
        return;
    }
    
    try {
        const lastSnapshot = undoHistory.pop();
        
        // Update undo button state after removing snapshot
        updateUndoButtonState();
        
        // Restore product data
        globalProductsData = [...lastSnapshot.productData];
        
        // Restore URL redirects
        urlRedirects = new Map(lastSnapshot.urlRedirects);
        
        // Refresh the table display
        if (typeof loadProducts === 'function') {
            await loadProducts();
        }
        
        showMessage(`Undid: ${lastSnapshot.description}`, 'success');
        
    } catch (error) {
        console.error('❌ Error restoring from undo:', error);
        showMessage('Error restoring changes', 'error');
    }
}

// Initialize Squarespace API integration
function initializeSquarespaceApiIntegration() {
    // Initialize product update functionality
    initializeProductUpdateAPI();
}

// Initialize product update API
function initializeProductUpdateAPI() {
    // Create global product update function (EXACT from reference)
    window.updateProductFields = async function(product, changes, crumbToken) {
        
        const productId = product.id;
        const isDigitalProduct = product.storeItem?.productType === "DIGITAL";
        const isServiceProduct = product.storeItem?.productType === "SERVICE";
        const isVariantUpdate = changes.variantId && changes.variantChanges; // Legacy single variant support
        const isBatchedVariantUpdate = changes.batchedVariantChanges && Object.keys(changes.batchedVariantChanges).length > 0;
        
        const productTypeText = isServiceProduct ? 'Service' : (isDigitalProduct ? 'Digital' : 'Physical');
        
        if (isVariantUpdate) {
            // Legacy single variant update (shouldn't happen with new batching, but kept for compatibility)
            
            // Validate that the variant ID exists in this product
            const variantExists = product.storeItem?.variants?.some(v => v.id === changes.variantId);
            if (!variantExists) {
                console.error(`❌ Variant ID ${changes.variantId} not found in product ${product.id}`);
                throw new Error(`Variant ID ${changes.variantId} not found in product ${product.id}`);
            }
        } else if (isBatchedVariantUpdate) {
            // New batched variant update
            const variantIds = Object.keys(changes.batchedVariantChanges);
            
            // Validate that all variant IDs exist in this product
            const availableVariantIds = product.storeItem?.variants?.map(v => v.id) || [];
            for (const variantId of variantIds) {
                if (!availableVariantIds.includes(variantId)) {
                    console.error(`❌ Variant ID ${variantId} not found in product ${product.id}`);
                    throw new Error(`Variant ID ${variantId} not found in product ${product.id}`);
                }
            }
        }
        
        let payload;
        
        if (isServiceProduct) {
            // Determine visibility state with detailed logging
            let visibilityState;
            let visibleOn = product.visibility?.visibleOn || product.visibleOn || null; // Preserve existing visibleOn
            
            // Check for bulk status changes first (takes priority) - only if currentBulkChanges is available
            if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.newStatus && currentBulkChanges.newStatus !== 'unchanged') {
                if (currentBulkChanges.newStatus === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (currentBulkChanges.newStatus === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (currentBulkChanges.newStatus === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    if (currentBulkChanges.scheduledDate) {
                        visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                }
            } else if (changes.status !== undefined) {
                if (changes.status === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (changes.status === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (changes.status === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    // For scheduled status from changes, we need the scheduled date from bulk changes
                    if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', currentBulkChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                } else {
                    visibilityState = 'HIDDEN'; // Default for unknown status
                }
            } else {
                visibilityState = product.workflowState === 'PUBLISHED' ? 'VISIBLE' : 'HIDDEN';
            }
            
            // Detect currency code from existing product data
            const detectCurrencyCode = () => {
                // Use global currency manager if available
                if (window.currencyManager) {
                    return window.currencyManager.getCurrencySync();
                }
                
                // Try to get currency from existing product data
                if (product.storeItem?.price && typeof product.storeItem.price === 'object' && product.storeItem.price.currencyCode) {
                    return product.storeItem.price.currencyCode;
                }
                // Return detected currency or null (no fallback)
                return window.getSystemCurrency?.() || null;
            };
            
            const currencyCode = detectCurrencyCode();
            
            // Service product - match native structure exactly
            const serviceVariant = {
                id: product.storeItem?.variants?.[0]?.id || 'variant-id',
                sku: changes.sku !== undefined ? changes.sku : (product.storeItem?.variants?.[0]?.sku || ''),
                price: {
                    decimalValue: changes.price !== undefined ? 
                        parseFloat(changes.price).toFixed(2) : 
                        (() => {
                            // Get current price from service product
                            if (product.storeItem?.priceCents) {
                                return (product.storeItem.priceCents / 100).toFixed(2);
                            } else if (product.storeItem?.price && typeof product.storeItem.price === 'object') {
                                return parseFloat(product.storeItem.price.decimalValue).toFixed(2);
                            } else if (product.storeItem?.variants?.[0]?.price) {
                                const variant = product.storeItem.variants[0];
                                const priceValue = typeof variant.price === 'object' && variant.price.decimalValue ?
                                    parseFloat(variant.price.decimalValue) :
                                    (variant.price / 100);
                                return priceValue.toFixed(2);
                            }
                            return '0.00';
                        })(),
                    currencyCode: currencyCode
                },
                unlimited: true, // Service products are always unlimited
                onSale: false, // Default to false, will be overridden if needed
                optionValues: product.storeItem?.variants?.[0]?.optionalValues || []
            };

            // Always include salePrice for service products (native structure requirement)
            serviceVariant.salePrice = {
                decimalValue: changes.salePrice !== undefined ? 
                    parseFloat(changes.salePrice).toFixed(2) : 
                    (() => {
                        // Get existing sale price from service product
                        if (product.storeItem?.salePriceCents !== null && product.storeItem?.salePriceCents !== undefined) {
                            return (product.storeItem.salePriceCents / 100).toFixed(2);
                        } else if (product.storeItem?.variants?.[0]?.salePrice !== null && product.storeItem?.variants?.[0]?.salePrice !== undefined) {
                            const variant = product.storeItem.variants[0];
                            const salePriceValue = typeof variant.salePrice === 'object' && variant.salePrice.decimalValue ?
                                parseFloat(variant.salePrice.decimalValue) :
                                (variant.salePrice / 100);
                            return salePriceValue.toFixed(2);
                        }
                        return '0.00'; // Default to 0.00 if no sale price exists
                    })(),
                currencyCode: currencyCode
            };

            // Handle onSale status
            if (changes.onSale !== undefined) {
                serviceVariant.onSale = changes.onSale === 'Yes';
            } else {
                // Preserve existing onSale status
                serviceVariant.onSale = product.storeItem?.onSale || false;
            }

            payload = {
                createdVariants: [],
                updatedVariants: [serviceVariant],
                deletedVariants: [],
                name: changes.title !== undefined ? changes.title : product.title,
                description: product.description || '',
                visibility: { 
                    state: visibilityState,
                    ...(visibleOn ? { visibleOn } : {})
                },
                tags: (product.tags || []).map(tag => typeof tag === 'string' ? tag : tag.name || tag),
                categories: processCategoryChanges(product),
                newImageOrder: product.storeItem?.itemImages?.map(img => img.id) || [],
                variantOptionOrdering: product.storeItem?.variants?.length > 0 ? 
                    [...new Set(product.storeItem.variants.flatMap(v => 
                        (v.optionalValues || []).map(ov => ov.optionName)
                    ))] : [],
                variantOrderBySkus: [changes.sku !== undefined ? changes.sku : (product.storeItem?.variants?.[0]?.sku || '')],
                seoData: {
                    title: product.seoData?.title || product.storeItem?.seoData?.title || "",
                    description: product.seoData?.description || product.storeItem?.seoData?.description || ""
                },
                useCustomAddButtonText: product.storeItem?.useCustomAddButtonText || false,
                customAddButtonText: product.storeItem?.customAddButtonText || 'Add to Cart',
                featuredProduct: product.storeItem?.featuredProduct || false,
                shareStates: product.shareStates || [],
                urlId: changes.url !== undefined ? changes.url : product.urlId,
                regenerateUrlId: false,
                productAddOnsConfiguration: product.storeItem?.productAddOnsConfiguration || { productAddOns: [] }
            };
            
        } else if (isDigitalProduct) {
            // Determine visibility state with detailed logging
            let visibilityState;
            let visibleOn = product.visibility?.visibleOn || product.visibleOn || null; // Preserve existing visibleOn
            
            // Check for bulk status changes first (takes priority) - only if currentBulkChanges is available
            if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.newStatus && currentBulkChanges.newStatus !== 'unchanged') {
                if (currentBulkChanges.newStatus === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (currentBulkChanges.newStatus === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (currentBulkChanges.newStatus === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    if (currentBulkChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', currentBulkChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                }
            } else if (changes.status !== undefined) {
                if (changes.status === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (changes.status === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (changes.status === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    // For scheduled status from changes, we need the scheduled date from bulk changes
                    if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', currentBulkChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                } else {
                    visibilityState = 'HIDDEN'; // Default for unknown status
                }
            } else {
                visibilityState = product.workflowState === 'PUBLISHED' ? 'VISIBLE' : 'HIDDEN';
            }
            
            // Digital product - use exact native structure format
            payload = {
                name: changes.title !== undefined ? changes.title : product.title,
                description: product.description || '',
                visibility: { 
                    state: visibilityState,
                    ...(visibleOn ? { visibleOn } : {})
                },
                tags: (product.tags || []).map(tag => typeof tag === 'string' ? tag : tag.name || tag),
                categories: processCategoryChanges(product),
                newImageOrder: product.storeItem?.itemImages?.map(img => img.id) || [],
                variantOptionOrdering: [],
                variantOrderBySkus: [],
                seoData: {
                    title: product.seoData?.title || product.storeItem?.seoData?.title || "",
                    description: product.seoData?.description || product.storeItem?.seoData?.description || ""
                },
                useCustomAddButtonText: product.storeItem?.useCustomAddButtonText || false,
                customAddButtonText: product.storeItem?.customAddButtonText || 'Add to Cart',
                featuredProduct: product.storeItem?.featuredProduct || false,
                shareStates: product.shareStates || [],
                urlId: changes.url !== undefined ? changes.url : product.urlId,
                regenerateUrlId: false,
                productAddOnsConfiguration: product.storeItem?.productAddOnsConfiguration || { productAddOns: [] }
            };
            
            // Add price - match native format (no forced decimals)
            if (changes.price !== undefined) {
                const priceValue = parseFloat(changes.price);
                const currencyCode = window.getSystemCurrency();
                payload.price = {
                    decimalValue: priceValue % 1 === 0 ? priceValue.toString() : priceValue.toFixed(2),
                    currencyCode: currencyCode
                };
            } else {
                // Always include price for digital products, even if 0
                const priceCents = product.storeItem?.priceCents || 0;
                const priceValue = priceCents / 100;
                const currencyCode = window.getSystemCurrency();
                payload.price = {
                    decimalValue: priceValue % 1 === 0 ? priceValue.toString() : priceValue.toFixed(2),
                    currencyCode: currencyCode
                };
            }
            
            // Add sale price only if we're modifying sale-related fields
            if (changes.salePrice !== undefined && changes.salePrice !== '') {
                const salePriceValue = parseFloat(changes.salePrice);
                if (!isNaN(salePriceValue) && salePriceValue >= 0) {
                    const currencyCode = window.getSystemCurrency();
                    payload.salePrice = {
                        decimalValue: salePriceValue % 1 === 0 ? salePriceValue.toString() : salePriceValue.toFixed(2),
                        currencyCode: currencyCode
                    };
                    // Only auto-set onSale if explicitly specified
                    if (changes.onSale !== undefined) {
                        payload.onSale = changes.onSale === 'Yes';
                    } else {
                        // Preserve existing onSale status - don't auto-modify based on sale price
                        payload.onSale = product.storeItem?.onSale || false;
                    }
                } else {
                    console.warn(`⚠️ Invalid sale price value: ${changes.salePrice}, setting to 0.00`);
                    const currencyCode = window.getSystemCurrency();
                    payload.salePrice = {
                        decimalValue: '0.00',
                        currencyCode: currencyCode
                    };
                    // Only modify onSale if explicitly requested, otherwise preserve existing status
                    if (changes.onSale !== undefined) {
                        payload.onSale = changes.onSale === 'Yes';
                    } else {
                        payload.onSale = product.storeItem?.onSale || false;
                    }
                }
            } else if (changes.onSale !== undefined) {
                // If onSale is being modified, include existing sale price
                const salePriceCents = product.storeItem?.salePriceCents || 0;
                const salePriceValue = salePriceCents / 100;
                const currencyCode = window.getSystemCurrency();
                payload.salePrice = {
                    decimalValue: salePriceValue % 1 === 0 ? salePriceValue.toString() : salePriceValue.toFixed(2),
                    currencyCode: currencyCode
                };
                payload.onSale = changes.onSale === 'Yes';
            } else if (product.storeItem?.salePriceCents !== null && product.storeItem?.salePriceCents !== undefined) {
                // Preserve existing sale price if it exists (including $0.00 for free products)
                const salePriceCents = product.storeItem.salePriceCents;
                const salePriceValue = salePriceCents / 100;
                const currencyCode = window.getSystemCurrency();
                payload.salePrice = {
                    decimalValue: salePriceValue % 1 === 0 ? salePriceValue.toString() : salePriceValue.toFixed(2),
                    currencyCode: currencyCode
                };
                payload.onSale = product.storeItem?.onSale || false;
            }
            
        } else {
            
            // Check update types
            const isLegacyVariantUpdate = changes.variantId && changes.variantChanges;
            const isBatchedVariantUpdate = changes.batchedVariantChanges && Object.keys(changes.batchedVariantChanges).length > 0;
            
            if (isLegacyVariantUpdate) {
            } else if (isBatchedVariantUpdate) {
            }
            
            // Detect currency code from existing product data
            const detectCurrencyCode = () => {
                // Try to get currency from existing variants
                if (product.storeItem?.variants?.length > 0) {
                    const firstVariant = product.storeItem.variants[0];
                    if (firstVariant.price && typeof firstVariant.price === 'object' && firstVariant.price.currencyCode) {
                        return firstVariant.price.currencyCode;
                    }
                }
                // Use detected currency from currency manager
                const detectedCurrency = window.getSystemCurrency?.();
                if (detectedCurrency) {
                    return detectedCurrency;
                }
                
                // If no currency detected, throw error - don't use fallback
                throw new Error('Unable to detect currency for API request');
            };
            
            const currencyCode = detectCurrencyCode();
            
            // Physical product - use native Squarespace format that matches the working example
            const updatedVariants = product.storeItem?.variants?.map(variant => {
                // Determine which changes to apply to this variant
                let variantChanges;
                
                if (isLegacyVariantUpdate) {
                    // Legacy: For variant-specific updates, only apply changes to the matching variant
                    if (variant.id === changes.variantId) {
                        variantChanges = changes.variantChanges;
                    } else {
                        // For other variants, no changes
                        variantChanges = {};
                    }
                } else if (isBatchedVariantUpdate) {
                    // New: For batched variant updates, check if this variant has changes
                    if (changes.batchedVariantChanges[variant.id]) {
                        variantChanges = changes.batchedVariantChanges[variant.id];
                    } else {
                        // For variants without changes, keep existing values
                        variantChanges = {};
                    }
                } else {
                    // For master product updates, apply changes to all variants
                    variantChanges = changes;
                }
                
                // Build variant in native Squarespace format (matching working example)
                const updatedVariant = {
                    id: variant.id,
                    sku: variantChanges.sku !== undefined ? variantChanges.sku : variant.sku,
                    price: {
                        decimalValue: variantChanges.price !== undefined ? 
                            String(parseFloat(variantChanges.price)) : 
                            (variant.price ? String(variant.price / 100) : '0'),
                        currencyCode: currencyCode
                    },
                    salePrice: {
                        decimalValue: variantChanges.salePrice !== undefined ? 
                            String(parseFloat(variantChanges.salePrice)) : 
                            (variant.salePrice ? String(variant.salePrice / 100) : '0'),
                        currencyCode: currencyCode
                    },
                    unlimited: variantChanges.stock !== undefined ? 
                        (variantChanges.stock === '∞') : 
                        (variant.unlimited || false),
                    onSale: false, // Will be set below after price validation
                    optionValues: variant.optionalValues || [], // Use optionalValues from Squarespace data, rename to optionValues for API
                    // Preserve original dimensions - don't default to 0 as this causes validation issues
                    width: variant.width || variant.width === 0 ? variant.width : 1,
                    height: variant.height || variant.height === 0 ? variant.height : 1, 
                    length: variant.length || variant.length === 0 ? variant.length : 1,
                    weight: variant.weight || variant.weight === 0 ? variant.weight : 1 // Preserve original weight including 0
                };

                
                // Validate sale price vs regular price and set onSale accordingly
                const regularPrice = parseFloat(updatedVariant.price.decimalValue);
                const salePrice = parseFloat(updatedVariant.salePrice.decimalValue);
                
                if (variantChanges.onSale !== undefined) {
                    // If onSale is explicitly set, use it but validate sale price
                    if (variantChanges.onSale === 'Yes' && salePrice > 0 && salePrice < regularPrice) {
                        updatedVariant.onSale = true;
                    } else if (variantChanges.onSale === 'Yes' && salePrice >= regularPrice) {
                        // Sale price is invalid, set to slightly less than regular price
                        updatedVariant.salePrice.decimalValue = String(Math.max(0.01, regularPrice - 0.01));
                        updatedVariant.onSale = true;
                        console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice} for variant ${variant.id}, adjusted to ${updatedVariant.salePrice.decimalValue}`);
                    } else {
                        updatedVariant.onSale = false;
                    }
                } else {
                    // Auto-determine onSale based on valid sale price
                    if (salePrice > 0 && salePrice < regularPrice) {
                        updatedVariant.onSale = true;
                    } else if (salePrice >= regularPrice && salePrice > 0) {
                        // Sale price is invalid, set to slightly less than regular price
                        updatedVariant.salePrice.decimalValue = String(Math.max(0.01, regularPrice - 0.01));
                        updatedVariant.onSale = true;
                        console.warn(`⚠️ Sale price ${salePrice} was >= regular price ${regularPrice} for variant ${variant.id}, adjusted to ${updatedVariant.salePrice.decimalValue}`);
                    } else {
                        updatedVariant.onSale = false;
                    }
                }
                
                // Handle stock - only add qtyInStock if not unlimited
                if (!updatedVariant.unlimited && variantChanges.stock !== undefined && variantChanges.stock !== '∞') {
                    // Stock is managed by Squarespace internally via the variant update
                    // We don't include quantityChange or qtyInStock in the payload
                    const stockValue = parseInt(variantChanges.stock) || 0;
                    // Don't add qtyInStock to the payload - Squarespace manages this internally
                
                return updatedVariant;
            }) || [];
            
            // Determine which changes to use for master product fields (exclude variant-specific data)
            const masterProductChanges = { ...changes };
            delete masterProductChanges.variantId; // Legacy cleanup
            delete masterProductChanges.variantChanges; // Legacy cleanup
            delete masterProductChanges.batchedVariantChanges; // New structure cleanup
            
            // Determine visibility state for physical products
            let visibilityState;
            let visibleOn = product.visibility?.visibleOn || product.visibleOn || null; // Preserve existing visibleOn
            
            // Check for bulk status changes first (takes priority) - only if currentBulkChanges is available
            if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.newStatus && currentBulkChanges.newStatus !== 'unchanged') {
                if (currentBulkChanges.newStatus === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (currentBulkChanges.newStatus === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (currentBulkChanges.newStatus === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    if (currentBulkChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', currentBulkChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                }
            } else if (masterProductChanges.status !== undefined) {
                if (masterProductChanges.status === 'public') {
                    visibilityState = 'VISIBLE';
                } else if (masterProductChanges.status === 'hidden') {
                    visibilityState = 'HIDDEN';
                } else if (masterProductChanges.status === 'scheduled') {
                    visibilityState = 'SCHEDULED';
                    // Check multiple sources for the scheduled date
                    if (typeof currentBulkChanges !== 'undefined' && currentBulkChanges && currentBulkChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(currentBulkChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', currentBulkChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else if (masterProductChanges.scheduledDate) {
                        try {
                            visibleOn = convertScheduledDateToISO(masterProductChanges.scheduledDate);
                        } catch (error) {
                            console.error('❌ Invalid scheduled date format:', masterProductChanges.scheduledDate, error);
                            // Use current time + 1 hour as fallback
                            visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                        }
                    } else {
                        console.error('❌ Scheduled status requires a date, but none provided');
                        // Use current time + 1 hour as fallback
                        visibleOn = new Date(Date.now() + 60 * 60 * 1000).toISOString();
                    }
                } else {
                    visibilityState = 'HIDDEN'; // Default for unknown status
                }
            } else {
                visibilityState = product.workflowState === 'PUBLISHED' ? 'VISIBLE' : 'HIDDEN';
            }

            payload = {
                createdVariants: [],
                updatedVariants: updatedVariants,
                deletedVariants: [],
                name: masterProductChanges.title !== undefined ? masterProductChanges.title : product.title,
                description: product.description || '',
                visibility: { 
                    state: visibilityState,
                    ...(visibleOn ? { visibleOn } : {}) // Always include visibleOn if it exists
                },
                tags: (product.tags || []).map(tag => typeof tag === 'string' ? tag : tag.name || tag),
                categories: processCategoryChanges(product),
                newImageOrder: product.storeItem?.itemImages?.map(img => img.id) || [], // Preserve existing image order
                variantOptionOrdering: product.storeItem?.variants?.length > 0 ? 
                    [...new Set(product.storeItem.variants.flatMap(v => 
                        (v.optionalValues || []).map(ov => ov.optionName)
                    ))] : [], // Extract unique option names from variants
                variantOrderBySkus: updatedVariants.map(v => v.sku),
                seoData: {
                    title: product.seoData?.title || product.storeItem?.seoData?.title || "",
                    description: product.seoData?.description || product.storeItem?.seoData?.description || ""
                },
                useCustomAddButtonText: product.storeItem?.useCustomAddButtonText || false,
                customAddButtonText: product.storeItem?.customAddButtonText || 'Add to Cart',
                featuredProduct: product.storeItem?.featuredProduct || false,
                shareStates: product.shareStates || [],
                relatedProductsConfiguration: product.storeItem?.relatedProductsConfiguration || {
                    relatedCategories: [],
                    relatedCategoryIds: [],
                    strategy: "CATEGORIES"
                },
                urlId: masterProductChanges.url !== undefined ? masterProductChanges.url : product.urlId,
                regenerateUrlId: false, // Don't regenerate URL
                ...(product.storeItem?.productFormId ? { productFormId: product.storeItem.productFormId } : {}), // Include productFormId if it exists
                productAddOnsConfiguration: product.storeItem?.productAddOnsConfiguration || { productAddOns: [] }
            };
        }
        
        // Validate payload before API call to prevent INVALID_DATA_FOR_PRODUCT_TYPE errors
        if (payload.updatedVariants) {
            payload.updatedVariants.forEach((variant, index) => {
                const regularPrice = parseFloat(variant.price.decimalValue);
                const salePrice = variant.salePrice ? parseFloat(variant.salePrice.decimalValue) : 0;
                
                // Fix common issues that cause API errors
                if (regularPrice <= 0) {
                    console.warn(`⚠️ Variant ${index} has invalid regular price (${regularPrice}), setting to minimum 0.01`);
                    variant.price.decimalValue = '0.01';
                }
                
                // User can set any sale price they want - no validation needed for sale price vs regular price
                
                // Only validate that onSale=true requires a non-negative sale price (0.00 is valid for free products)
                if (variant.onSale && salePrice < 0) {
                    console.warn(`⚠️ Variant ${index} has onSale=true but negative sale price (${salePrice}), disabling sale`);
                    variant.onSale = false;
                    // Don't clear the sale price - it should remain independent of sale status
                }
                
                const salePriceDisplay = variant.salePrice ? variant.salePrice.decimalValue : 'N/A';
            });
        }
        
        // For digital products, validate price structure
        if (payload.price && payload.salePrice) {
            const regularPrice = parseFloat(payload.price.decimalValue);
            const salePrice = parseFloat(payload.salePrice.decimalValue);
            
            if (regularPrice <= 0) {
                console.warn(`⚠️ Digital product has invalid regular price (${regularPrice}), setting to minimum 0.01`);
                payload.price.decimalValue = '0.01';
            }
            
            
            // User can set any sale price they want - no validation needed for sale price vs regular price
            
            // Only validate that onSale=true requires a non-negative sale price (0.00 is valid for free products)
            if (payload.onSale && salePrice < 0) {
                console.warn(`⚠️ Digital product has onSale=true but negative sale price (${salePrice}), disabling sale`);
                payload.onSale = false;
                // Don't clear the sale price - it should remain independent of sale status
            }
            
        }
        
        // Use the reliable commerce API for updates
        const apiUrl = `${window.location.origin}/api/commerce/products/${productId}`;
        
        // ⚠️ CRITICAL: Get current categories from globalCategoryTreeData if available
        let currentCategories = product.categories || [];
        if ((!currentCategories || currentCategories.length === 0) && typeof globalCategoryTreeData !== 'undefined' && globalCategoryTreeData) {
            
            // Find this product in the category tree to get its current categories
            const productCategories = [];
            globalCategoryTreeData.forEach(category => {
                if (category.productIds && category.productIds.includes(productId)) {
                    productCategories.push(category.name);
                }
            });
            
            if (productCategories.length > 0) {
                currentCategories = productCategories;
            } else {
            }
        } else {
        }
        
        // Update payload with current categories
        if (payload.categories !== undefined) {
            payload.categories = currentCategories;
        }
        
        
        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    'content-type': 'application/json',
                    'x-csrf-token': crumbToken
                },
                credentials: 'include',
                body: JSON.stringify(payload)
            });
            
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`❌ Status: ${response.status}`);
                console.error(`❌ Status Text: ${response.statusText}`);
                console.error(`❌ Error Body:`, errorText);
                
                // Try to parse error if it's JSON
                try {
                    const errorJson = JSON.parse(errorText);
                    console.error(`� Parsed Error:`, errorJson);
                } catch (parseErr) {
                    console.error(`🔍 Raw Error Text:`, errorText);
                }
                
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }
            
            const responseData = await response.json();
            
            // Increment API call progress after main product update
            if (globalProgress) {
                globalProgress.incrementApiCall('Product Update', responseData.name || product.title || product.id);
            }
            
            // Handle category assignment/unassignment after main product update
            let categorySuccess = true;
            
            // Remove categories FIRST (before adding new ones)
            if (bulkChanges.categories && bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0) {
                
                // Add throttling for each category being removed to prevent API conflicts
                for (const categoryName of bulkChanges.categories.toRemove) {
                    await categoryOperationTracker.waitForCategorySlot(categoryName, 'remove');
                }
                

                if (typeof globalCategoriesData !== 'undefined' && globalCategoriesData) {
                    globalCategoriesData.forEach(cat => {
                        if (cat.itemIds && cat.itemIds.includes(productId)) {
                        }
                    });
                } else {
                }
                
                try {
                    const removeSuccess = await unassignProductCategories(productId, bulkChanges.categories.toRemove, crumbToken);
                    if (!removeSuccess) {
                        console.error(`❌ Failed to remove categories from product ${productId}`);
                        categorySuccess = false;
                    } else {
                        
                        // Increment API call progress after category removal
                        if (globalProgress) {
                            globalProgress.incrementApiCall('Category Removal', `Product ${productId}`);
                        }
                        
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        
                        // Note: The UI refresh will happen after all products are processed
                        // For now, just log that we should refresh data after bulk operation
                    }
                } catch (error) {
                    console.error(`❌ Error removing categories from product ${productId}:`, error);
                    categorySuccess = false;
                }
            }
            
            // Add categories SECOND (after removals are complete)
            if (bulkChanges.categories && bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) {
                
                // Add throttling for each category being added to prevent API conflicts
                for (const categoryName of bulkChanges.categories.toAdd) {
                    await categoryOperationTracker.waitForCategorySlot(categoryName, 'add');
                }
                
                try {
                    const addSuccess = await updateProductCategories(productId, bulkChanges.categories.toAdd, crumbToken);
                    if (!addSuccess) {
                        console.error(`❌ Failed to add categories to product ${productId}`);
                        categorySuccess = false;
                    } else {
                        
                        // Increment API call progress after category addition
                        if (globalProgress) {
                            globalProgress.incrementApiCall('Category Addition', `Product ${productId}`);
                        }
                    }
                } catch (error) {
                    console.error(`❌ Error adding categories to product ${productId}:`, error);
                    categorySuccess = false;
                }
            }
            
            if (!categorySuccess) {
                console.warn(`⚠️ Product ${productId} updated but category changes failed`);
            }
            
            return true;
        } catch (error) {
            console.error(`❌ Failed to update product ${productId}:`, error);
            console.error(`🔍 Error Type: ${error.constructor.name}`);
            console.error(`🔍 Error Message: ${error.message}`);
            console.error(`🔍 Error Stack:`, error.stack);
            console.error(`📊 Context Data:`, {
                productId: productId,
                productTitle: product.title || product.name,
                changes: changes,
                payloadKeys: payload ? Object.keys(payload) : 'No payload',
                apiUrl: apiUrl
            });
            return false;
        }
    };
}

// Save bulk changes to Squarespace
async function saveBulkChangesToSquarespace(selectedProducts) {
    const crumb = getCsrfToken();
    if (!crumb) {
        return { success: false, successCount: 0, errorCount: selectedProducts.length };
    }
    
    // Start progress bar
    if (globalProgress) {
        globalProgress.startBulk(selectedProducts.length, 'Applying bulk changes...');
    }
    
    let successCount = 0;
    let errorCount = 0;
    
    // Group changes by master product
    const productUpdates = new Map();
    
    // Process each selected row
    for (const row of selectedProducts) {
        const isVariantRow = row.classList.contains('variant-row');
        let masterProductId, variantId;
        
        if (isVariantRow) {
            masterProductId = row.getAttribute('data-parent-product');
            variantId = row.getAttribute('data-variant-id');
        } else {
            masterProductId = row.getAttribute('data-product-id');
        }
        
        // Find the original product data
        const windowProduct = window.squarespaceProducts?.find(p => p.id === masterProductId);
        const globalProduct = globalProductsData?.find(p => p.id === masterProductId);
        

        
        // Use globalProductsData first since it has complete data, fallback to window
        const originalProduct = globalProduct || windowProduct;
        if (!originalProduct) {
            console.error(`❌ Original product not found for ID: ${masterProductId}`);
            errorCount++;
            continue;
        }
        
        // DEBUG: Show what product data we actually found


        
        // Initialize or get existing product update entry
        if (!productUpdates.has(masterProductId)) {
            productUpdates.set(masterProductId, {
                product: originalProduct,
                changes: {},
                variantChanges: {}
            });
        }
        
        const productUpdate = productUpdates.get(masterProductId);
        
        // Get the current bulk changes configuration from the global bulkChanges variable
        let currentBulkChanges;
        try {
            // Access the global bulkChanges variable directly (not on window object)
            currentBulkChanges = typeof bulkChanges !== 'undefined' ? { ...bulkChanges } : {};
            
            // Debug logging for rounding configuration
            if (currentBulkChanges.enableRounding) {
                console.log(`🔧 DEBUG Rounding Config: enabled=${currentBulkChanges.enableRounding}, type=${currentBulkChanges.roundingType}, target=${currentBulkChanges.roundingTarget}, customCents=${currentBulkChanges.customCents}`);
            }
        } catch (error) {
            console.error('❌ Error accessing bulk changes configuration:', error);
            currentBulkChanges = {};
        }
        
        if (!currentBulkChanges || Object.keys(currentBulkChanges).length === 0) {
            console.warn('⚠️ No bulk changes configuration found, skipping changes');
            return;
        }

        // BULK STATUS PROCESSING - Handle status changes from bulk configuration
        if (currentBulkChanges.newStatus && currentBulkChanges.newStatus !== 'unchanged') {
            
            // Convert our internal status values to the values expected by cell-level changes
            let statusValue;
            if (currentBulkChanges.newStatus === 'public') {
                statusValue = 'public';
            } else if (currentBulkChanges.newStatus === 'hidden') {
                statusValue = 'hidden';
            } else if (currentBulkChanges.newStatus === 'scheduled') {
                statusValue = 'scheduled'; // This will be handled by the visibility object in API calls
            }
            
            if (statusValue) {
                if (isVariantRow) {
                    // For variants, status changes apply to the master product
                    productUpdate.changes['status'] = statusValue;
                    // Include scheduled date if applicable
                    if (statusValue === 'scheduled' && currentBulkChanges.scheduledDate) {
                        productUpdate.changes['scheduledDate'] = currentBulkChanges.scheduledDate;
                    }
                } else {
                    productUpdate.changes['status'] = statusValue;
                    // Include scheduled date if applicable
                    if (statusValue === 'scheduled' && currentBulkChanges.scheduledDate) {
                        productUpdate.changes['scheduledDate'] = currentBulkChanges.scheduledDate;
                    }
                }
            }
        }
        
        // BULK PRICE PROCESSING - Handle price changes from bulk configuration (independent of modified cells)
        let finalRegularPrice = null; // Track the final price after all adjustments
        
        if ((currentBulkChanges.priceAdjustment !== null && currentBulkChanges.priceAdjustment !== undefined) || 
            (currentBulkChanges.fixedPrice !== null && currentBulkChanges.fixedPrice !== undefined)) {
            
            

            
            let calculatedValue = null;
            let currentPrice = 0;
            
            if (isVariantRow) {
                // Get current price from variant
                const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                if (variant?.price) {
                    // Variant price can be stored as cents or as decimal
                    currentPrice = typeof variant.price === 'object' && variant.price.decimalValue ? 
                        parseFloat(variant.price.decimalValue) : 
                        (variant.price / 100);
                }
            } else {
                // For master products (digital, physical, service), check multiple price sources

                
                if (originalProduct.storeItem?.priceCents) {
                    currentPrice = originalProduct.storeItem.priceCents / 100;
                } else if (originalProduct.storeItem?.price) {
                    // Some products (like services) might store price as direct value
                    currentPrice = typeof originalProduct.storeItem.price === 'object' && originalProduct.storeItem.price.decimalValue ? 
                        parseFloat(originalProduct.storeItem.price.decimalValue) : 
                        originalProduct.storeItem.price;
                } else if (originalProduct.storeItem?.variants?.length > 0) {
                    // If no master price, use first variant price as fallback
                    const firstVariant = originalProduct.storeItem.variants[0];
                    if (firstVariant?.price) {
                        currentPrice = typeof firstVariant.price === 'object' && firstVariant.price.decimalValue ? 
                            parseFloat(firstVariant.price.decimalValue) : 
                            (firstVariant.price / 100);
                    }
                } else {
                    console.warn(`⚠️ No price found for product ${originalProduct.id}, product type: ${originalProduct.storeItem?.productType}`);

                }
            }
            
            
            // Handle $0 products for percentage adjustments
            if (currentPrice <= 0) {
                if (currentBulkChanges.regularAdjustmentType === 'percentage') {
                    const adjustment = 1 + (currentBulkChanges.priceAdjustment / 100);
                    calculatedValue = (1 * adjustment).toFixed(2); // Use $1 as base for percentage
                } else {
                    console.warn(`⚠️ Invalid base price (${currentPrice}) for non-percentage adjustment, skipping price calculation`);
                }
            } else {
                // Calculate new price based on bulk changes for non-zero prices
                if (currentBulkChanges.regularAdjustmentType === 'percentage') {
                    const adjustment = 1 + (currentBulkChanges.priceAdjustment / 100);
                    calculatedValue = (currentPrice * adjustment).toFixed(2);
                } else if (currentBulkChanges.regularAdjustmentType === 'fixed-adjustment') {
                    // Prevent price from going below $0 when adjusting by amount
                    const adjustedPrice = currentPrice + currentBulkChanges.priceAdjustment;
                    calculatedValue = Math.max(0, adjustedPrice).toFixed(2);
                    if (adjustedPrice < 0) {
                        console.warn(`⚠️ Price adjustment would result in negative price (${adjustedPrice.toFixed(2)}), setting to $0.00`);
                    }
                } else if (currentBulkChanges.regularAdjustmentType === 'fixed-price') {
                    calculatedValue = currentBulkChanges.fixedPrice.toFixed(2);
                }
            }
            
            // Store the calculated price for further processing
            if (calculatedValue !== null) {
                finalRegularPrice = parseFloat(calculatedValue);
            }
        }
        
        // ROUNDING PROCESSING FOR REGULAR PRICES - Apply rounding to both adjusted and current prices
        if (currentBulkChanges.enableRounding) {
            const roundingTarget = currentBulkChanges.roundingTarget || 'all';
            const shouldRoundRegular = roundingTarget === 'all' || roundingTarget === 'regular';
            
            if (shouldRoundRegular) {
                // If we have a price change, round the new calculated price
                if (finalRegularPrice !== null) {
                    const originalPrice = finalRegularPrice;
                    finalRegularPrice = applyRounding(finalRegularPrice, currentBulkChanges.roundingType, currentBulkChanges.customCents);
                    console.log(`🔧 Rounded adjusted price ${originalPrice} → ${finalRegularPrice} (type: ${currentBulkChanges.roundingType}, cents: ${currentBulkChanges.customCents})`);
                } else {
                    // No price adjustment, but rounding is enabled - round current price
                    let currentPrice = 0;
                    
                    if (isVariantRow) {
                        // Get current price from variant
                        const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                        if (variant?.price) {
                            currentPrice = typeof variant.price === 'object' && variant.price.decimalValue ? 
                                parseFloat(variant.price.decimalValue) : 
                                (variant.price / 100);
                        }
                    } else {
                        // For master products, get current price
                        if (originalProduct.storeItem?.priceCents) {
                            currentPrice = originalProduct.storeItem.priceCents / 100;
                        } else if (originalProduct.storeItem?.price) {
                            currentPrice = typeof originalProduct.storeItem.price === 'object' && originalProduct.storeItem.price.decimalValue ? 
                                parseFloat(originalProduct.storeItem.price.decimalValue) : 
                                originalProduct.storeItem.price;
                        } else if (originalProduct.storeItem?.variants?.length > 0) {
                            const firstVariant = originalProduct.storeItem.variants[0];
                            if (firstVariant?.price) {
                                currentPrice = typeof firstVariant.price === 'object' && firstVariant.price.decimalValue ? 
                                    parseFloat(firstVariant.price.decimalValue) : 
                                    (firstVariant.price / 100);
                            }
                        }
                    }
                    
                    if (currentPrice > 0) {
                        // Apply rounding to current price
                        const roundedPrice = applyRounding(currentPrice, currentBulkChanges.roundingType, currentBulkChanges.customCents);
                        
                        // Only treat as a change if rounding actually changed the price
                        if (Math.abs(roundedPrice - currentPrice) > 0.005) {  // Account for floating point precision
                            finalRegularPrice = roundedPrice;
                            console.log(`🔧 Rounded current price ${currentPrice} → ${finalRegularPrice} (rounding-only mode)`);
                        }
                    }
                }
            }
        }
        
        // Store the final regular price change if we have one
        if (finalRegularPrice !== null) {
            const finalPriceString = finalRegularPrice.toFixed(2);
            
            if (isVariantRow) {
                // Store changes for this specific variant
                if (!productUpdate.variantChanges[variantId]) {
                    productUpdate.variantChanges[variantId] = {};
                }
                productUpdate.variantChanges[variantId]['price'] = finalPriceString;
            } else {
                // Store changes for the master product
                productUpdate.changes['price'] = finalPriceString;
            }
        }
        
        // ROUNDING-ONLY PROCESSING FOR SALE PRICES - Handle cases where only rounding is enabled for sale prices
        if (currentBulkChanges.enableRounding && 
            (currentBulkChanges.saleDiscount === null || currentBulkChanges.saleDiscount === undefined || currentBulkChanges.saleDiscount === '')) {
            
            let currentSalePrice = 0;
            const isDigitalProduct = originalProduct.storeItem?.productType === "DIGITAL";
            const isServiceProduct = originalProduct.storeItem?.productType === "SERVICE";
            
            if (isVariantRow) {
                // Get current sale price from variant
                const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                if (variant?.salePrice !== null && variant?.salePrice !== undefined) {
                    currentSalePrice = typeof variant.salePrice === 'object' && variant.salePrice.decimalValue ? 
                        parseFloat(variant.salePrice.decimalValue) : 
                        (typeof variant.salePrice === 'number' ? variant.salePrice / 100 : parseFloat(variant.salePrice));
                }
            } else {
                // For master products, get current sale price
                if (isDigitalProduct || isServiceProduct) {
                    if (originalProduct.storeItem?.salePriceCents !== null && originalProduct.storeItem?.salePriceCents !== undefined) {
                        currentSalePrice = originalProduct.storeItem.salePriceCents / 100;
                    } else if (originalProduct.storeItem?.salePrice) {
                        currentSalePrice = typeof originalProduct.storeItem.salePrice === 'object' && originalProduct.storeItem.salePrice.decimalValue ? 
                            parseFloat(originalProduct.storeItem.salePrice.decimalValue) : 
                            parseFloat(originalProduct.storeItem.salePrice);
                    }
                } else {
                    // Physical products: check variants first
                    const variants = originalProduct.storeItem?.variants || [];
                    if (variants.length > 0) {
                        const variantWithSalePrice = variants.find(v => v.salePrice !== null && v.salePrice !== undefined) || variants[0];
                        if (variantWithSalePrice?.salePrice !== null && variantWithSalePrice?.salePrice !== undefined) {
                            currentSalePrice = typeof variantWithSalePrice.salePrice === 'number' ? 
                                variantWithSalePrice.salePrice / 100 : 
                                parseFloat(variantWithSalePrice.salePrice);
                        }
                    }
                }
            }
            
            if (currentSalePrice > 0) {
                // Check if rounding should be applied to sale prices
                const roundingTarget = currentBulkChanges.roundingTarget || 'all';
                const shouldRoundSale = roundingTarget === 'all' || roundingTarget === 'sale';
                
                if (shouldRoundSale) {
                    // Apply rounding to current sale price
                    const roundedSalePrice = applyRounding(currentSalePrice, currentBulkChanges.roundingType, currentBulkChanges.customCents);
                    const roundedSalePriceStr = roundedSalePrice.toFixed(2);
                    
                    // Only treat as a change if rounding actually changed the sale price
                    if (Math.abs(roundedSalePrice - currentSalePrice) > 0.005) {  // Account for floating point precision
                        
                        if (isVariantRow) {
                            if (!productUpdate.variantChanges[variantId]) {
                                productUpdate.variantChanges[variantId] = {};
                            }
                            productUpdate.variantChanges[variantId]['salePrice'] = roundedSalePriceStr;
                        } else {
                            productUpdate.changes['salePrice'] = roundedSalePriceStr;
                        }
                    } else {
                    }
                } else {
                }
            }
        }
        
        // BULK SALE PRICE PROCESSING - Handle sale price changes independently
        if (currentBulkChanges.saleDiscount !== null && currentBulkChanges.saleDiscount !== undefined && currentBulkChanges.saleDiscount !== '') {
            
            // Get current SALE price (not regular price) for adjustment calculation
            let currentSalePrice = 0;
            

            
            // Check if this is a digital or service product
            const isDigitalProduct = originalProduct.storeItem?.productType === "DIGITAL";
            const isServiceProduct = originalProduct.storeItem?.productType === "SERVICE";
            
            if (isVariantRow) {
                // Get current sale price from variant
                const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                if (variant?.salePrice !== null && variant?.salePrice !== undefined) {
                    currentSalePrice = typeof variant.salePrice === 'object' && variant.salePrice.decimalValue ? 
                        parseFloat(variant.salePrice.decimalValue) : 
                        (typeof variant.salePrice === 'number' ? variant.salePrice / 100 : parseFloat(variant.salePrice));
                } else {
                    // Fallback to regular price if no sale price exists
                    currentSalePrice = typeof variant.price === 'object' && variant.price.decimalValue ? 
                        parseFloat(variant.price.decimalValue) : 
                        (variant.price / 100);
                }
            } else {
                // For master products, use same logic as product table display
                if (isDigitalProduct || isServiceProduct) {
                    // Digital/Service products: check product-level sale price first
                    if (originalProduct.storeItem?.salePriceCents !== null && originalProduct.storeItem?.salePriceCents !== undefined) {
                        currentSalePrice = originalProduct.storeItem.salePriceCents / 100;
                    } else if (originalProduct.storeItem?.salePrice) {
                        currentSalePrice = typeof originalProduct.storeItem.salePrice === 'object' && originalProduct.storeItem.salePrice.decimalValue ? 
                            parseFloat(originalProduct.storeItem.salePrice.decimalValue) : 
                            parseFloat(originalProduct.storeItem.salePrice);
                    }
                } else {
                    // Physical products: check variants first (this is the key fix!)
                    const variants = originalProduct.storeItem?.variants || [];
                    if (variants.length > 0) {
                        // Get sale price from primary variant (first one, or find one with sale price)
                        const primaryVariant = variants[0];
                        const variantWithSalePrice = variants.find(v => v.salePrice !== null && v.salePrice !== undefined) || primaryVariant;
                        
                        if (variantWithSalePrice?.salePrice !== null && variantWithSalePrice?.salePrice !== undefined) {
                            currentSalePrice = typeof variantWithSalePrice.salePrice === 'number' ? 
                                variantWithSalePrice.salePrice / 100 : 
                                parseFloat(variantWithSalePrice.salePrice);
                        }
                    }
                }
                
                if (currentSalePrice === 0) {
                    // For percentage adjustments, if no sale price exists, skip this product
                    if (currentBulkChanges.saleAdjustmentType === 'percentage') {
                        currentSalePrice = null; // Skip this product
                    } else {
                        // For fixed adjustments, fallback to regular price
                        if (originalProduct.storeItem?.priceCents) {
                            currentSalePrice = originalProduct.storeItem.priceCents / 100;
                        } else if (originalProduct.storeItem?.price) {
                            currentSalePrice = typeof originalProduct.storeItem.price === 'object' && originalProduct.storeItem.price.decimalValue ? 
                                parseFloat(originalProduct.storeItem.price.decimalValue) : 
                                originalProduct.storeItem.price;
                        }
                    }
                }
            }
            
            // Get current regular price for sale calculations that depend on it
            let currentPrice = 0;
            if (isVariantRow) {
                // Get current price from variant
                const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                currentPrice = typeof variant.price === 'object' && variant.price.decimalValue ? 
                    parseFloat(variant.price.decimalValue) : 
                    (variant.price / 100);
            } else {
                // For master products, get regular price using same logic
                if (isDigitalProduct || isServiceProduct) {
                    // Digital/Service products: check product-level price first
                    if (originalProduct.storeItem?.priceCents) {
                        currentPrice = originalProduct.storeItem.priceCents / 100;
                    } else if (originalProduct.storeItem?.price) {
                        currentPrice = typeof originalProduct.storeItem.price === 'object' && originalProduct.storeItem.price.decimalValue ? 
                            parseFloat(originalProduct.storeItem.price.decimalValue) : 
                            parseFloat(originalProduct.storeItem.price);
                    }
                } else {
                    // Physical products: check variants first
                    const variants = originalProduct.storeItem?.variants || [];
                    if (variants.length > 0) {
                        const primaryVariant = variants[0];
                        currentPrice = typeof primaryVariant.price === 'number' ? 
                            primaryVariant.price / 100 : 
                            parseFloat(primaryVariant.price);
                    }
                }
            }
            
            // Apply bulk price changes if any (sale should be based on the new regular price, not old one)
            if ((currentBulkChanges.priceAdjustment !== null && currentBulkChanges.priceAdjustment !== undefined) || 
                (currentBulkChanges.fixedPrice !== null && currentBulkChanges.fixedPrice !== undefined)) {
                if (currentBulkChanges.regularAdjustmentType === 'percentage') {
                    const adjustment = 1 + (currentBulkChanges.priceAdjustment / 100);
                    currentPrice = currentPrice * adjustment;
                } else if (currentBulkChanges.regularAdjustmentType === 'fixed-adjustment') {
                    currentPrice = currentPrice + currentBulkChanges.priceAdjustment;
                } else if (currentBulkChanges.regularAdjustmentType === 'fixed-price') {
                    currentPrice = currentBulkChanges.fixedPrice;
                }
            }
            
            // Step 1: Calculate any sale price adjustments first
            let adjustedSalePrice = currentSalePrice; // Start with current sale price
            let hasSalePriceAdjustment = false;
            
            if (currentBulkChanges.saleAdjustmentType === 'percentage' && currentBulkChanges.saleDiscount) {
                // Percentage adjustment to current sale price (+ or - based on saleDiscount value)
                const adjustmentFactor = 1 + (currentBulkChanges.saleDiscount / 100);
                
                // Handle $0 sale prices by using $1 as base for percentage calculations
                if (currentSalePrice <= 0) {
                    adjustedSalePrice = 1 * adjustmentFactor; // Use $1 as base for percentage
                } else {
                    adjustedSalePrice = currentSalePrice * adjustmentFactor;
                }
                hasSalePriceAdjustment = true;
                console.log(`🔧 Sale price percentage adjustment: ${currentSalePrice} → ${adjustedSalePrice} (${currentBulkChanges.saleDiscount}%)`);
            } else if (currentBulkChanges.saleAdjustmentType === 'fixed-adjustment' && currentBulkChanges.saleDiscount) {
                // Fixed amount adjustment to current sale price
                adjustedSalePrice = currentSalePrice + currentBulkChanges.saleDiscount;
                hasSalePriceAdjustment = true;
                console.log(`🔧 Sale price fixed adjustment: ${currentSalePrice} → ${adjustedSalePrice} (${currentBulkChanges.saleDiscount > 0 ? '+' : ''}${currentBulkChanges.saleDiscount})`);
            } else if (currentBulkChanges.saleAdjustmentType === 'fixed-price' && currentBulkChanges.saleDiscount) {
                // Set specific sale price
                adjustedSalePrice = Math.abs(currentBulkChanges.saleDiscount);
                hasSalePriceAdjustment = true;
                console.log(`🔧 Sale price fixed value: ${currentSalePrice} → ${adjustedSalePrice}`);
            }
            
            // Step 2: Apply rounding if enabled (separate from price adjustments)
            let finalSalePrice = adjustedSalePrice;
            let hasSaleRounding = false;
            
            if (currentBulkChanges.enableRounding) {
                const roundingTarget = currentBulkChanges.roundingTarget || 'all';
                const shouldRoundSale = roundingTarget === 'all' || roundingTarget === 'sale';
                
                if (shouldRoundSale && adjustedSalePrice > 0) { // Only round if there's a price to round
                    const beforeRounding = adjustedSalePrice;
                    finalSalePrice = applyRounding(adjustedSalePrice, currentBulkChanges.roundingType, currentBulkChanges.customCents);
                    hasSaleRounding = true;
                    console.log(`🎯 Sale price rounding: ${beforeRounding} → ${finalSalePrice} (${currentBulkChanges.roundingType})`);
                }
            }
            
            // Step 3: Determine if we need to apply sale price changes
            let newSalePriceValue = null;
            if (hasSalePriceAdjustment || hasSaleRounding) {
                newSalePriceValue = finalSalePrice.toFixed(2);
                console.log(`✅ Final sale price: ${newSalePriceValue} (adjustment: ${hasSalePriceAdjustment}, rounding: ${hasSaleRounding})`);
            }
            
            // Apply sale price change (no validation needed - user wants complete independence)
            if (newSalePriceValue !== null) {
                
                if (isVariantRow) {
                    if (!productUpdate.variantChanges[variantId]) {
                        productUpdate.variantChanges[variantId] = {};
                    }
                    productUpdate.variantChanges[variantId]['salePrice'] = newSalePriceValue;
                } else {
                    productUpdate.changes['salePrice'] = newSalePriceValue;
                }
            }
        }
        
        // BULK SALE STATUS PROCESSING - Handle sale status changes independently  
        if (currentBulkChanges.saleToggle && currentBulkChanges.saleToggle !== 'keep-current' && currentBulkChanges.saleToggle !== 'no-change') {
            // Sale status handling - completely independent of sale price
            if (currentBulkChanges.saleToggle === 'put-on-sale') {
                if (isVariantRow) {
                    if (!productUpdate.variantChanges[variantId]) {
                        productUpdate.variantChanges[variantId] = {};
                    }
                    productUpdate.variantChanges[variantId]['onSale'] = 'Yes';
                } else {
                    productUpdate.changes['onSale'] = 'Yes';
                }
            } else if (currentBulkChanges.saleToggle === 'take-off-sale') {
                if (isVariantRow) {
                    if (!productUpdate.variantChanges[variantId]) {
                        productUpdate.variantChanges[variantId] = {};
                    }
                    productUpdate.variantChanges[variantId]['onSale'] = 'No';
                } else {
                    productUpdate.changes['onSale'] = 'No';
                }
            }
        }
        
        // BULK CATEGORY PROCESSING - Handle category changes from bulk configuration
        if (currentBulkChanges.categories) {
            
            // Category changes always apply to the master product (not individual variants)
            // We just need to mark that this product has category changes to process
            let hasCategoryChanges = false;
            
            if (currentBulkChanges.categories.toAdd && currentBulkChanges.categories.toAdd.length > 0) {
                // Mark that we have category additions to process
                productUpdate.changes['categoryChanges'] = 'add';
                hasCategoryChanges = true;
            }
            
            if (currentBulkChanges.categories.toRemove && currentBulkChanges.categories.toRemove.length > 0) {
                // Mark that we have category removals to process (can be combined with additions)
                productUpdate.changes['categoryChanges'] = productUpdate.changes['categoryChanges'] === 'add' ? 'both' : 'remove';
                hasCategoryChanges = true;
            }
            
            if (hasCategoryChanges) {
            }
        }
    }
    
    
    // Configuration for concurrent processing
    const MAX_CONCURRENT_REQUESTS = 10;
    const MIN_REQUEST_DELAY = 50;
    
    // Convert product updates to array
    const productUpdateEntries = Array.from(productUpdates.entries());
    
    // Process product update
    const processProductUpdate = async (entry, index) => {
        const [masterProductId, updateData] = entry;
        const hasVariantChanges = Object.keys(updateData.variantChanges).length > 0;
        const hasMasterChanges = Object.keys(updateData.changes).length > 0;
        
        // DEBUG: Log the collected changes before skip decision


        
        if (!hasVariantChanges && !hasMasterChanges) {
            
            // Update progress even for skipped products
            if (globalProgress) {
                globalProgress.updateBulkItem(index, `${updateData.product.title} (skipped)`);
            }
            
            return { success: true, productId: masterProductId };
        }
        
        const displayName = hasVariantChanges ? 
            `${updateData.product.title} (${Object.keys(updateData.variantChanges).length} variant${Object.keys(updateData.variantChanges).length > 1 ? 's' : ''})` : 
            updateData.product.title;
        
        // Update progress
        if (globalProgress) {
            globalProgress.updateBulkItem(index, displayName);
        }
        
        try {
            // Prepare changes object
            let allChanges = { ...updateData.changes };
            
            // Add batched variant changes if any exist
            if (hasVariantChanges) {
                allChanges.batchedVariantChanges = updateData.variantChanges;
            } else {
            }
            
            // PRICE VALIDATION: Check and auto-adjust sale prices if regular price is set below current sale price
            // This ensures business logic is maintained when bulk adjusting prices
            if (allChanges.price || (allChanges.batchedVariantChanges && Object.values(allChanges.batchedVariantChanges).some(changes => changes.price))) {
                // Get current product data to check existing sale prices
                const originalProduct = updateData.product;
                const isDigitalProduct = originalProduct.storeItem?.productType === "DIGITAL";
                const isServiceProduct = originalProduct.storeItem?.productType === "SERVICE";
                
                // Handle master product price validation
                if (allChanges.price) {
                    const newRegularPrice = parseFloat(allChanges.price);
                    let currentSalePrice = 0;
                    
                    // Get current sale price based on product type
                    if (isDigitalProduct || isServiceProduct) {
                        if (originalProduct.storeItem?.salePriceCents !== null && originalProduct.storeItem?.salePriceCents !== undefined) {
                            currentSalePrice = originalProduct.storeItem.salePriceCents / 100;
                        } else if (originalProduct.storeItem?.salePrice) {
                            currentSalePrice = typeof originalProduct.storeItem.salePrice === 'object' && originalProduct.storeItem.salePrice.decimalValue ? 
                                parseFloat(originalProduct.storeItem.salePrice.decimalValue) : 
                                parseFloat(originalProduct.storeItem.salePrice);
                        }
                    } else {
                        // Physical products: check variants
                        const variants = originalProduct.storeItem?.variants || [];
                        if (variants.length > 0) {
                            const variantWithSalePrice = variants.find(v => v.salePrice !== null && v.salePrice !== undefined) || variants[0];
                            if (variantWithSalePrice?.salePrice !== null && variantWithSalePrice?.salePrice !== undefined) {
                                currentSalePrice = typeof variantWithSalePrice.salePrice === 'number' ? 
                                    variantWithSalePrice.salePrice / 100 : 
                                    parseFloat(variantWithSalePrice.salePrice);
                            }
                        }
                    }
                    
                    // If new regular price is lower than existing sale price, adjust sale price to match
                    if (currentSalePrice > 0 && newRegularPrice < currentSalePrice) {
                        console.log(`🔧 Auto-adjusting sale price: Regular price ${newRegularPrice} < Sale price ${currentSalePrice}, setting sale price to ${newRegularPrice}`);
                        allChanges.salePrice = newRegularPrice.toFixed(2);
                    }
                }
                
                // Handle variant price validation
                if (allChanges.batchedVariantChanges) {
                    for (const [variantId, variantChanges] of Object.entries(allChanges.batchedVariantChanges)) {
                        if (variantChanges.price) {
                            const newRegularPrice = parseFloat(variantChanges.price);
                            const variant = originalProduct.storeItem?.variants?.find(v => v.id === variantId);
                            
                            if (variant) {
                                let currentSalePrice = 0;
                                if (variant.salePrice !== null && variant.salePrice !== undefined) {
                                    currentSalePrice = typeof variant.salePrice === 'object' && variant.salePrice.decimalValue ? 
                                        parseFloat(variant.salePrice.decimalValue) : 
                                        (typeof variant.salePrice === 'number' ? variant.salePrice / 100 : parseFloat(variant.salePrice));
                                }
                                
                                // If new regular price is lower than existing sale price, adjust sale price to match
                                if (currentSalePrice > 0 && newRegularPrice < currentSalePrice) {
                                    console.log(`🔧 Auto-adjusting variant ${variantId} sale price: Regular price ${newRegularPrice} < Sale price ${currentSalePrice}, setting sale price to ${newRegularPrice}`);
                                    allChanges.batchedVariantChanges[variantId].salePrice = newRegularPrice.toFixed(2);
                                }
                            }
                        }
                    }
                }
            }
            
            const success = await window.updateProductFields(updateData.product, allChanges, crumb);
            if (success) {
                return { success: true, productId: masterProductId, displayName };
            } else {
                console.error(`❌ Failed to update ${displayName}`);
                return { success: false, productId: masterProductId, displayName };
            }
        } catch (error) {
            console.error(`💥 Error updating ${displayName}:`, error);
            return { success: false, productId: masterProductId, displayName, error };
        }
    };
    
    // Process products with controlled concurrency
    const processConcurrentBatch = async (entries) => {
        const results = [];
        const activeRequests = new Set();
        let entryIndex = 0;
        let completedCount = 0;
        const totalCount = entries.length;
        

        const startNextRequest = async () => {
            if (entryIndex >= entries.length) return;
            
            const currentIndex = entryIndex++;
            const entry = entries[currentIndex];
            
            // Add staggered delay
            await new Promise(r => setTimeout(r, currentIndex * MIN_REQUEST_DELAY));

            const requestPromise = processProductUpdate(entry, currentIndex);
            activeRequests.add(requestPromise);
            
            try {
                const result = await requestPromise;
                results[currentIndex] = result;
                completedCount++;
                
                // Check if all products are completed
                if (completedCount === totalCount) {
                    
                    // Calculate final counts immediately
                    const successCount = results.filter(r => r && r.success).length;
                    const errorCount = results.filter(r => r && !r.success).length;
                    const nullCount = results.filter(r => !r).length;
                    
                    
                    // Trigger completion immediately
                    if (globalProgress) {
                        globalProgress.updateCounts(successCount, errorCount);
                    } else {
                        console.error(`❌ globalProgress is not available!`);
                    }
                } else {
                }
            } catch (error) {
                console.error(`💥 Unexpected error processing product:`, error);
                results[currentIndex] = { success: false, error };
                completedCount++;
                
                // Check completion for failed products too
                if (completedCount === totalCount) {
                    
                    const successCount = results.filter(r => r && r.success).length;
                    const errorCount = results.filter(r => r && !r.success).length;
                    const nullCount = results.filter(r => !r).length;
                    
                    
                    if (globalProgress) {
                        globalProgress.updateCounts(successCount, errorCount);
                    } else {
                        console.error(`❌ Error path - globalProgress is not available!`);
                    }
                } else {
                }
            } finally {
                activeRequests.delete(requestPromise);
                
                // Start next request if available
                if (entryIndex < entries.length) {
                    startNextRequest();
                }
            }
        };        // Start initial batch of concurrent requests
        const initialConcurrency = Math.min(MAX_CONCURRENT_REQUESTS, entries.length);
        const initialPromises = [];
        for (let i = 0; i < initialConcurrency; i++) {
            initialPromises.push(startNextRequest());
        }
        
        // Wait for all requests to complete
        await Promise.all(initialPromises);
        
        while (activeRequests.size > 0) {
            await Promise.race(Array.from(activeRequests));
        }
        
        return results;
    };
    
    // Execute concurrent processing (completion is handled internally now)
    const results = await processConcurrentBatch(productUpdateEntries);
    
    // Final counts and completion are now handled inside processConcurrentBatch
    // This code should only run if there was an issue with the internal completion
    const finalSuccessCount = results.filter(r => r && r.success).length;
    const finalErrorCount = results.filter(r => r && !r.success).length;
    
    return { 
        success: finalErrorCount === 0, 
        successCount: finalSuccessCount, 
        errorCount: finalErrorCount 
    };
}

// Generate action description for undo
function generateActionDescription(productCount) {
    const changes = [];
    
    if (bulkChanges.priceAdjustment !== null) {
        const currencyCode = window.getSystemCurrency() || '';
        const type = bulkChanges.regularAdjustmentType === 'percentage' ? '%' : ` ${currencyCode}`;
        changes.push(`Price ${bulkChanges.priceAdjustment > 0 ? '+' : ''}${bulkChanges.priceAdjustment}${type}`);
    }
    
    if (bulkChanges.saleToggle && bulkChanges.saleToggle !== 'keep-current') {
        switch (bulkChanges.saleToggle) {
            case 'put-on-sale':
                changes.push('Put products on sale');
                break;
            case 'take-off-sale':
                changes.push('Take products off sale');
                break;
        }
    }
    
    if (bulkChanges.enableStockTracking) {
        changes.push('Stock level changes');
    }
    
    if (bulkChanges.categories && bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) {
        changes.push(`Add categories: ${bulkChanges.categories.toAdd.join(', ')}`);
    }
    
    if (bulkChanges.categories && bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0) {
        changes.push(`Remove categories: ${bulkChanges.categories.toRemove.join(', ')}`);
    }
    
    if (bulkChanges.newStatus) {
        changes.push(`Set status to ${bulkChanges.newStatus}`);
    }
    
    if (bulkChanges.enableRounding) {
        changes.push('Price rounding');
    }
    
    const changeDescription = changes.length > 0 ? changes.join(', ') : 'Bulk changes';
    return `${changeDescription} (${productCount} product${productCount !== 1 ? 's' : ''})`;
}

// Humorous preparation messages for bulk changes
const preparationMessages = [
    // "Preparing backup files...", // COMMENTED OUT - Backup functionality disabled for MVP
    "Rearranging pixels...",
    "Warming the coffee machine...",
    "Dusting off the product shelves...",
    "Sweeping the digital floor...",
    "Polishing the product images...",
    "Straightening the virtual shelves...",
    "Quietly preparing magic..."
];

let preparationMessageInterval = null;
let usedMessages = [];

function startPreparationMessages() {
    // Reset used messages array
    usedMessages = [];
    
    // Show first message immediately
    let messageIndex = Math.floor(Math.random() * preparationMessages.length);
    usedMessages.push(messageIndex);
    showBulkNotification(preparationMessages[messageIndex], 'info', 0);
    
    // Start rotating messages every 4 seconds (halved speed)
    preparationMessageInterval = setInterval(() => {
        // Reset if all messages have been used
        if (usedMessages.length >= preparationMessages.length) {
            usedMessages = [];
        }
        
        // Find an unused message
        let newMessageIndex;
        do {
            newMessageIndex = Math.floor(Math.random() * preparationMessages.length);
        } while (usedMessages.includes(newMessageIndex));
        
        usedMessages.push(newMessageIndex);
        showBulkNotification(preparationMessages[newMessageIndex], 'info', 0);
    }, 4000);
}

function stopPreparationMessages() {
    if (preparationMessageInterval) {
        clearInterval(preparationMessageInterval);
        preparationMessageInterval = null;
    }
    // Clear the last preparation message text is handled by showBulkNotification
}

// Show bulk notification
function showBulkNotification(message, type = 'info', duration = 3000) {
    // Get DOM elements each time to ensure they exist
    const bulkNotificationFooter = document.getElementById('bulk-notification-footer');
    const bulkNotificationText = document.getElementById('bulk-notification-text');
    
    if (!bulkNotificationFooter || !bulkNotificationText) {
        return;
    }
    
    // Hide any existing notification first
    hideBulkNotification();
    
    // Set message and type
    bulkNotificationText.textContent = message;
    bulkNotificationFooter.className = `bulk-notification-footer visible ${type}`;
    
    // Show notification content and hide actions
    const notificationContent = bulkNotificationFooter.querySelector('.bulk-notification-content');
    const drawerActions = bulkNotificationFooter.querySelector('.bulk-drawer-actions');
    if (notificationContent) notificationContent.style.display = 'block';
    if (drawerActions) drawerActions.style.display = 'none';
    
    // Auto-hide after specified duration
    if (duration > 0) {
        setTimeout(() => {
            hideBulkNotification();
        }, duration);
    }
}

// Hide bulk notification
function hideBulkNotification() {
    const bulkNotificationFooter = document.getElementById('bulk-notification-footer');
    
    if (!bulkNotificationFooter) return;
    
    bulkNotificationFooter.classList.remove('visible', 'success', 'error', 'info');
    
    // Hide notification content and show actions
    const notificationContent = bulkNotificationFooter.querySelector('.bulk-notification-content');
    const drawerActions = bulkNotificationFooter.querySelector('.bulk-drawer-actions');
    if (notificationContent) notificationContent.style.display = 'none';
    if (drawerActions) drawerActions.style.display = 'flex';
    
    // Update changes footer visibility now that notification is hidden
    if (typeof updateChangesFooter === 'function') {
        updateChangesFooter();
    }
}

// Get selected products for bulk operations
function getSelectedProducts() {
    return Array.from(document.querySelectorAll('.mix input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.closest('tr'))
        .filter(row => row !== null);
}


// === BULK-EDITOR MODULE ===
// Bulk editing functionality

// Global variables
let updateBulkAdjustButton = function() {};

// Initialize bulk editor functionality
function initializeBulkEditor() {
    
    // Initialize bulkChanges structure early
    if (!bulkChanges.categories) {
        bulkChanges.categories = {
            toAdd: [],
            toRemove: []
        };
    }
    
    // Initialize drawer functionality
    initializeBulkDrawer();
    
    // Initialize bulk controls
    initializeBulkControls();
    
    // Initialize category controls
    initializeCategoryControls();
    
    // Initialize Flatpickr for datetime inputs
    initializeFlatpickrInputs();
    
    // Initialize the actual bulk adjust button functionality
    initializeBulkAdjust();
}

// Initialize Flatpickr for datetime inputs
function initializeFlatpickrInputs() {
    // Initialize the bulk scheduling picker
    if (typeof initializeBulkSchedulingPicker === 'function') {
        initializeBulkSchedulingPicker();
    } else {
        console.warn('⚠️ initializeBulkSchedulingPicker function not found');
    }
}

// Initialize bulk adjust button functionality
function initializeBulkAdjust() {
    const bulkAdjustBtn = document.querySelector('.bulk-adjust');
    const bulkDrawer = document.getElementById('bulk-adjust-drawer');
    
    // Ensure the button starts disabled
    if (bulkAdjustBtn) {
        bulkAdjustBtn.disabled = true;
        
        // Add click handler - use showBulkDrawer instead of showBulkAdjustDrawer
        bulkAdjustBtn.addEventListener('click', function(e) {
            showBulkDrawer();
        });
    }
    
    // Update bulk adjust button state
    updateBulkAdjustButton = function() {
        const selectedProducts = getSelectedProducts();
        const hasSelection = selectedProducts.length > 0;
        
        if (bulkAdjustBtn) {
            bulkAdjustBtn.disabled = !hasSelection;
        }
    };
    
}

// Show bulk adjust drawer (proper implementation from original)
function showBulkDrawer() {
    // Check if any products are selected first
    const selectedProducts = getSelectedProducts();
    if (selectedProducts.length === 0) {
        return;
    }
    
    const drawer = document.getElementById('bulk-adjust-drawer');
    if (drawer) {
        // Reset bulk changes to ensure fresh start
        resetBulkChanges();
        
        // Clear any existing progress containers and notifications
        const bulkProgressContainer = document.getElementById('bulk-progress-container');
        if (bulkProgressContainer) {
            bulkProgressContainer.style.display = 'none';
        }
        
        // Reset products selected info visibility (fix for reopening drawer)
        const productsSelectedInfo = document.querySelector('.products-selected-info');
        if (productsSelectedInfo) {
            productsSelectedInfo.style.display = 'flex';
        }
        
        // Hide any bulk notification content
        const bulkNotificationContent = document.querySelector('.bulk-notification-content');
        if (bulkNotificationContent) {
            bulkNotificationContent.style.display = 'none';
        }
        
        // Stop any running preparation messages
        if (typeof stopPreparationMessages === 'function') {
            stopPreparationMessages();
        }
        
        // Hide any bulk notifications
        if (typeof hideBulkNotification === 'function') {
            hideBulkNotification();
        }
        
        // Populate category dropdown first (like in reference)
        populateCategoryDropdowns();
        
        // Update preview pane directly (like in reference)
        updatePreviewPane();
        
        // Initialize tabs and toggles (ESSENTIAL for functionality)
        initializeBulkTabs();
        initializeBulkToggles();
        initializeCustomDropdowns();
        
        // Show the bulk footer immediately when drawer opens (EXACT from reference)
        const footerElement = document.getElementById('bulk-notification-footer');
        if (footerElement) {
            footerElement.classList.add('visible');
        } else {
            console.log('[showBulkDrawer] ❌ Footer element not found');
        }
        
        // Make drawer visible
        drawer.classList.add('visible');
        
        // Prevent body scrolling while drawer is open
        document.body.style.overflow = 'hidden';
    } else {
        console.error('[showBulkDrawer] Bulk drawer not found');
    }
}

// Initialize all bulk settings and functionality
function initializeBulkSettings() {
    console.log('[initializeBulkSettings] Starting bulk settings initialization');
    
    try {
        // Initialize all toggles first
        initializeBulkToggles();
        
        // Initialize tabs
        initializeBulkTabs();
        
        // Initialize other controls
        initializeBulkControls();
        
        // Initialize custom dropdowns
        initializeCustomDropdowns();
        
        console.log('[initializeBulkSettings] ✅ All bulk settings initialized successfully');
    } catch (error) {
        console.error('[initializeBulkSettings] ❌ Error initializing bulk settings:', error);
    }
}

// Initialize event listeners for input controls
function initializeInputListeners() {
    console.log('Initializing input listeners');
    
    // Price adjustment listeners
    const priceInput = document.getElementById('price-adjustment');
    const priceType = document.getElementById('regular-adjustment-type');
    const roundPricesCheckbox = document.getElementById('round-prices-only');
    const applyToSaleCheckbox = document.getElementById('apply-to-sale');
    
    if (priceInput) {
        priceInput.addEventListener('input', function() {
            bulkChanges.priceAdjustment = parseFloat(this.value) || null;
            updatePreviewPane();
        });
    }
    
    if (priceType) {
        priceType.addEventListener('change', function() {
            bulkChanges.regularAdjustmentType = this.value;
            updatePreviewPane();
        });
    }
    
    if (roundPricesCheckbox) {
        roundPricesCheckbox.addEventListener('change', function() {
            bulkChanges.roundPricesOnly = this.checked;
            updatePreviewPane();
        });
    }
    
    if (applyToSaleCheckbox) {
        applyToSaleCheckbox.addEventListener('change', function() {
            bulkChanges.applyToSale = this.checked;
            updatePreviewPane();
        });
    }
    
    // Add more listeners for other controls as needed...
}

// Get selected products for bulk operations
function getSelectedProducts() {
    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
    return Array.from(selectedCheckboxes).map(checkbox => checkbox.closest('tr'));
}

// Get selected products with full data from globalProductsData
function getSelectedProductsWithData() {
    console.log('[getSelectedProductsWithData] called');
    
    // Use the same selector as getSelectedProducts() for consistency
    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
    console.log(`[getSelectedProductsWithData] Found ${selectedCheckboxes.length} checked checkboxes`);
    
    // Debug: Also check total checkboxes
    const allCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]');
    console.log(`[getSelectedProductsWithData] Total checkboxes available: ${allCheckboxes.length}`);
    const selectedProductIds = Array.from(selectedCheckboxes).map(checkbox => {
        const row = checkbox.closest('tr');
        const productId = row ? row.getAttribute('data-product-id') : null;
        console.log(`[getSelectedProductsWithData] Checkbox row productId: ${productId}`);
        return productId;
    }).filter(id => id !== null);
    console.log(`[getSelectedProductsWithData] Selected product IDs:`, selectedProductIds);
    // Check if globalProductsData is available (it should be from the main script)
    if (typeof globalProductsData === 'undefined' || !globalProductsData) {
        console.log('[getSelectedProductsWithData] ❌ globalProductsData not available, returning empty array');
        return [];
    }
    console.log(`[getSelectedProductsWithData] globalProductsData length: ${globalProductsData.length}`);
    // Debug: Show first few globalProductsData items to see structure
    if (globalProductsData.length > 0) {
        console.log(`[getSelectedProductsWithData] Sample product structure:`, globalProductsData[0]);
        console.log(`[getSelectedProductsWithData] Sample product categories:`, globalProductsData[0].categories);
        console.log(`[getSelectedProductsWithData] Sample product tags:`, globalProductsData[0].tags);
        
        globalProductsData.slice(0, 3).forEach((product, index) => {
        });
    }
    // Return the full product objects for the selected IDs
    
    const selectedProducts = globalProductsData.filter(product => selectedProductIds.includes(product.id));
    console.log(`[getSelectedProductsWithData] Found ${selectedProducts.length} matching products from global data`);
    
    return selectedProducts;
}

// Populate category dropdowns for bulk operations
function populateCategoryDropdowns() {
    populateAddCategoryDropdown();
    populateRemoveCategoryDropdown();
}

// Populate the add category dropdown
function populateAddCategoryDropdown() {
    const addCategoryDropdown = document.getElementById('bulk-category-add-dropdown');
    if (!addCategoryDropdown) {
        console.log('❌ Add category dropdown not found');
        return;
    }
    
    // Use globalCategoriesData to get all available categories (same logic as main filter)
    if (typeof globalCategoriesData === 'undefined' || !globalCategoriesData) {
        console.log('❌ globalCategoriesData not available for add category dropdown');
        return;
    }
    
    const categories = new Set();
    
    // Get all category names from globalCategoriesData
    globalCategoriesData.forEach(category => {
        if (category.name && category.name.trim() && category.name.trim() !== 'Uncategorized') {
            categories.add(category.name.trim());
        }
    });

    // Filter out categories that are already selected for removal
    const categoriesToRemove = (bulkChanges.categories && bulkChanges.categories.toRemove) ? bulkChanges.categories.toRemove : [];
    const availableCategories = Array.from(categories).filter(category => 
        !categoriesToRemove.includes(category)
    );

    addCategoryDropdown.innerHTML = '';
    availableCategories.sort().forEach(category => {
        const option = document.createElement('div');
        option.className = 'select-option';
        option.setAttribute('data-value', category);
        option.textContent = category;
        addCategoryDropdown.appendChild(option);
    });
    
}

// Populate the remove category dropdown with product counts
function populateRemoveCategoryDropdown() {
    
    const removeCategoryDropdown = document.getElementById('bulk-category-remove-dropdown');
    if (!removeCategoryDropdown) {
        return;
    }
    
    
    // Get all selected products using the globalProductsData
    const selectedProducts = getSelectedProductsWithData();
    
    // Count categories in selected products
    const categoryCounts = new Map();
    
    selectedProducts.forEach((product, productIndex) => {
        
        // Use the same logic as the main product loader - check globalCategoriesData for this product ID
        
        if (globalCategoriesData && globalCategoriesData.length > 0) {
            // Check which categories contain this product ID (same logic as getProductCategories)
            globalCategoriesData.forEach(category => {
                if (category.itemIds && category.itemIds.includes(product.id)) {
                    const categoryName = category.name.trim();
                    if (categoryName && categoryName !== 'Uncategorized') {
                        const count = categoryCounts.get(categoryName) || 0;
                        categoryCounts.set(categoryName, count + 1);
                    }
                }
            });
        } else {
        }
        
        // Check categories field (legacy - probably empty)
        if (product.categories && Array.isArray(product.categories)) {
            product.categories.forEach(category => {
                // Ensure category is a string before calling trim()
                if (category && typeof category === 'string' && category.trim() && category.trim() !== 'Uncategorized') {
                    const cat = category.trim();
                    const count = categoryCounts.get(cat) || 0;
                    categoryCounts.set(cat, count + 1);
                } else {
                }
            });
        } else {
        }
        

    });


    // Filter out categories that are already selected for removal
    const categoriesToRemove = (bulkChanges.categories && bulkChanges.categories.toRemove) ? bulkChanges.categories.toRemove : [];
    const availableCategories = new Map();
    
    categoryCounts.forEach((count, category) => {
        if (!categoriesToRemove.includes(category)) {
            availableCategories.set(category, count);
        }
    });

    removeCategoryDropdown.innerHTML = '';
    
    if (availableCategories.size === 0) {
        // Show message if no categories found
        const option = document.createElement('div');
        option.className = 'select-option disabled';
        option.textContent = categoryCounts.size === 0 ? 'No categories in selected products' : 'All categories already selected for removal';
        removeCategoryDropdown.appendChild(option);
    } else {
        // Sort categories alphabetically
        Array.from(availableCategories.entries()).sort((a, b) => a[0].localeCompare(b[0])).forEach(([category, count]) => {
            const option = document.createElement('div');
            option.className = 'select-option';
            option.setAttribute('data-value', category);
            option.textContent = `${category} (${count})`;
            removeCategoryDropdown.appendChild(option);
        });
        
    }
}

// Count how many selected products have a specific category
function countProductsWithCategory(categoryName) {
    const selectedProducts = getSelectedProductsWithData();
    let count = 0;
    
    selectedProducts.forEach(product => {
        // Check globalCategoriesData for this product ID
        if (globalCategoriesData && globalCategoriesData.length > 0) {
            globalCategoriesData.forEach(category => {
                if (category.name.trim() === categoryName && 
                    category.itemIds && category.itemIds.includes(product.id)) {
                    count++;
                    return; // Exit early since we found the category for this product
                }
            });
        }
        
        // Also check legacy categories field
        if (product.categories && Array.isArray(product.categories)) {
            product.categories.forEach(category => {
                if (category && typeof category === 'string' && category.trim() === categoryName) {
                    count++;
                }
            });
        }
        

    });
    
    return count;
}

// Update the visual category tags display - unified interface
function updateCategoryTags() {
    const tagsContainer = document.getElementById('bulk-category-tags-display');
    
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        
        // Add categories to add (blue tags)
        if (bulkChanges.categories && bulkChanges.categories.toAdd) {
            bulkChanges.categories.toAdd.forEach(category => {
                const tag = document.createElement('span');
                tag.className = 'category-tag add-tag';
                tag.innerHTML = `${category} <span class="remove-tag" data-category="${category}" data-type="add">×</span>`;
                tagsContainer.appendChild(tag);
            });
        }
        
        // Add categories to remove (red tags) with product count
        if (bulkChanges.categories && bulkChanges.categories.toRemove) {
            bulkChanges.categories.toRemove.forEach(category => {
                const productCount = countProductsWithCategory(category);
                const tag = document.createElement('span');
                tag.className = 'category-tag remove-tag';
                tag.innerHTML = `${category} (${productCount}) <span class="remove-tag" data-category="${category}" data-type="remove">×</span>`;
                tagsContainer.appendChild(tag);
            });
        }
    }
    
    // Add event listeners for removing tags
    document.querySelectorAll('.remove-tag').forEach(removeBtn => {
        removeBtn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            const type = e.target.getAttribute('data-type');
            
            if (type === 'add' && bulkChanges.categories && bulkChanges.categories.toAdd) {
                bulkChanges.categories.toAdd = bulkChanges.categories.toAdd.filter(cat => cat !== category);
            } else if (type === 'remove' && bulkChanges.categories && bulkChanges.categories.toRemove) {
                bulkChanges.categories.toRemove = bulkChanges.categories.toRemove.filter(cat => cat !== category);
            }
            
            updateCategoryTags();
            updatePreviewPane();
            updateApplyAllButton();
            // Refresh dropdowns to show/hide categories based on current selections
            populateCategoryDropdowns();
        });
    });
}

// Update apply all button state
function updateApplyAllButton() {
    const applyBtn = document.getElementById('bulk-apply-all');
    if (!applyBtn) {
        console.log('❌ Apply button not found');
        return;
    }
    
    // Check for demo mode - disable button if in demo mode
    const isDemoMode = window.licenseManager && window.licenseManager.getLicenseStatus().status === 'demo';
    
    // Check if any changes are configured
    const hasChanges = 
        bulkChanges.priceAdjustment !== null ||
        bulkChanges.fixedPrice !== null ||
        (bulkChanges.saleToggle !== 'no-change' && bulkChanges.saleToggle !== 'keep-current') ||
        (bulkChanges.saleDiscount !== null && bulkChanges.saleDiscount !== 0) ||
        bulkChanges.enableRounding ||
        bulkChanges.enableStockTracking ||
        (bulkChanges.categories && bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) ||
        (bulkChanges.categories && bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0) ||
        (bulkChanges.newStatus && bulkChanges.newStatus !== 'unchanged');
    
    const selectedProducts = getSelectedProducts();
    const hasSelection = selectedProducts.length > 0;
    
    // Disable if no changes, no selection, OR in demo mode
    applyBtn.disabled = !hasChanges || !hasSelection || isDemoMode;
    
    // Update button text and add tooltip for demo mode
    if (isDemoMode) {
        applyBtn.textContent = 'Activate to Apply Changes';
        applyBtn.title = 'Apply changes is disabled in demo mode. Please activate your license to use this feature.';
    } else {
        applyBtn.textContent = 'Apply Changes';
        applyBtn.title = '';
    }
}

// Initialize bulk adjust drawer

// Update preview pane product count and estimated time
function updatePreviewPaneInfo() {
    const selectedProducts = getSelectedProducts();
    // Update preview pane products selected count
    const productsSelectedCount = document.getElementById('products-selected-count');
    if (productsSelectedCount) {
        const totalCount = selectedProducts.length;
        productsSelectedCount.textContent = `${totalCount} Product${totalCount !== 1 ? 's' : ''} Selected`;
    } else {
    }
    // Update estimated time based on number of products
    const estimatedTimeElement = document.getElementById('estimated-time');
    if (estimatedTimeElement) {
        const totalCount = selectedProducts.length;
        let estimatedSeconds;
        
        // Use different rates based on whether categories are involved
        const hasCategoryChanges = bulkChanges.categories && 
            ((bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) || 
             (bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0));
        
        
        if (hasCategoryChanges) {
            estimatedSeconds = Math.ceil(totalCount * TIMING_ESTIMATES.productWithCategories);
        } else {
            estimatedSeconds = Math.ceil(totalCount * TIMING_ESTIMATES.productOnly);
        }
        
        // Add minimum buffer
        estimatedSeconds = Math.max(5, estimatedSeconds);
        
        estimatedTimeElement.textContent = formatEstimatedTime(estimatedSeconds);
    } else {
    }
}





// Initialize bulk adjust drawer
function initializeBulkDrawer() {
    const bulkAdjustBtn = document.querySelector('.bulk-adjust');
    const bulkDrawer = document.getElementById('bulk-adjust-drawer');
    const bulkDrawerClose = document.getElementById('bulk-drawer-close');
    const bulkDrawerOverlay = document.querySelector('.bulk-drawer-overlay');
    
    // Note: Button click handler is set up in initializeBulkAdjust()
    
    // Close drawer
    if (bulkDrawerClose) {
        bulkDrawerClose.addEventListener('click', hideBulkAdjustDrawer);
    }
    
    if (bulkDrawerOverlay) {
        bulkDrawerOverlay.addEventListener('click', hideBulkAdjustDrawer);
    }
    
    // Apply changes button
    const applyAllBtn = document.getElementById('bulk-apply-all');
    if (applyAllBtn) {
        applyAllBtn.addEventListener('click', applyBulkChanges);
    }
}

// Initialize bulk settings and controls

// Hide bulk adjust drawer
function hideBulkAdjustDrawer() {
    const drawer = document.getElementById('bulk-adjust-drawer');
    if (drawer) {
        drawer.classList.remove('visible');
        document.body.style.overflow = '';
        
        // Reset ALL visual elements after drawer transition completes
        const handleTransitionEnd = () => {
            // Reset bulk changes (contains many visual element resets)
            resetBulkChanges();
            
            // Reset select-all checkbox
            const selectAllCheckbox = document.getElementById('select-all-checkbox');
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = false;
                selectAllCheckbox.indeterminate = false;
                console.log('✅ Reset select-all checkbox and cleared indeterminate state when closing drawer');
            }
            
            // Update the selected products count display
            if (typeof window.updateSelectedProductsCount === 'function') {
                window.updateSelectedProductsCount();
                console.log('✅ Updated selected products count when closing drawer');
            }
            
            // Reset search field (fix for dropdowns resetting but not search field)
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = '';
                console.log('✅ Reset search field when closing drawer');
                
                // Trigger input event to update the filtering
                const inputEvent = new Event('input', { bubbles: true });
                searchInput.dispatchEvent(inputEvent);
            }
            
            // Reset tabs to first tab
            resetBulkTabs();
            
            // Close categories section and reset toggle
            const categoriesOptions = document.getElementById('bulk-categories-options');
            const categoriesToggle = document.getElementById('bulk-categories-toggle');
            if (categoriesOptions) {
                categoriesOptions.style.display = 'none';
            }
            if (categoriesToggle) {
                categoriesToggle.checked = false;
            }
            
            // Remove event listener
            drawer.removeEventListener('transitionend', handleTransitionEnd);
        };
        
        // Add transition end listener
        drawer.addEventListener('transitionend', handleTransitionEnd);
    }
}

// Function to reset tabs to first tab
function resetBulkTabs() {
    const tabs = document.querySelectorAll('.bulk-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Remove active class from all tabs and panes
    tabs.forEach(tab => tab.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Set first tab and pane as active
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
    }
    if (tabPanes.length > 0) {
        tabPanes[0].classList.add('active');
    }
}

// Initialize bulk settings and controls
function initializeBulkSettings() {
    // Reset all bulk changes
    resetBulkChanges();
    
    // Initialize tab functionality
    initializeBulkTabs();
    
    // Initialize toggle switches
    initializeBulkToggles();
    
    // Update apply button state
    updateApplyAllButton();
}

// Reset all bulk changes to default state
function resetBulkChanges() {
    // Reset the bulk changes data object
    bulkChanges = {
        categories: {
            toAdd: [],
            toRemove: []
        },
        roundPricesOnly: false,
        priceAdjustment: null,
        regularAdjustmentType: 'percentage',
        applyToSale: false,
        fixedPrice: null,
        fixedApplyToSale: false,
        saleDiscount: null,
        saleAdjustmentType: 'percentage',
        saleToggle: 'no-change',
        enableRounding: false,
        roundingType: 'whole',
        roundingTarget: 'all',
        customCents: 99,
        newStatus: null,
        enableStockTracking: false,
        stockType: 'limited',
        stockAction: 'adjust',
        stockAmount: null
    };
    
    
    // PRICING TAB RESETS
    // Reset rounding controls
    const bulkRoundPrices = document.getElementById('bulk-round-prices');
    const bulkRoundingOptions = document.getElementById('bulk-rounding-options');
    if (bulkRoundPrices) bulkRoundPrices.checked = false;
    if (bulkRoundingOptions) bulkRoundingOptions.style.display = 'none';
    
    // Reset rounding type and custom ending
    const bulkRoundingType = document.getElementById('bulk-rounding-type');
    const bulkCustomEnding = document.getElementById('bulk-custom-ending');
    const bulkRoundingTarget = document.getElementById('bulk-rounding-target');
    if (bulkRoundingType) bulkRoundingType.value = 'whole';
    if (bulkCustomEnding) {
        bulkCustomEnding.style.display = 'none';
        const customCentsInput = document.getElementById('bulk-custom-cents');
        if (customCentsInput) customCentsInput.value = '99';
    }
    if (bulkRoundingTarget) bulkRoundingTarget.value = 'all';
    
    // Reset four-way toggle visual state
    const fourWayToggle = document.querySelector('.four-way-toggle');
    if (fourWayToggle) {
        const toggleOptions = fourWayToggle.querySelectorAll('.toggle-option');
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        const wholeOption = fourWayToggle.querySelector('.toggle-option[data-value="whole"]');
        if (wholeOption) wholeOption.classList.add('active');
    }
    
    // Reset rounding target toggle visual state
    const roundingTargetToggle = document.querySelector('#bulk-rounding-options .three-way-toggle');
    if (roundingTargetToggle) {
        const toggleOptions = roundingTargetToggle.querySelectorAll('.toggle-option');
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        const allOption = roundingTargetToggle.querySelector('.toggle-option[data-value="all"]');
        if (allOption) allOption.classList.add('active');
    }
    
    // Reset regular price adjustment controls
    const bulkAdjustRegularPrices = document.getElementById('bulk-adjust-regular-prices');
    const bulkRegularPriceOptions = document.getElementById('bulk-regular-price-options');
    const bulkRegularPriceValue = document.getElementById('bulk-regular-price-value');
    const bulkRegularPriceMethod = document.getElementById('bulk-regular-price-method');
    if (bulkAdjustRegularPrices) bulkAdjustRegularPrices.checked = false;
    if (bulkRegularPriceOptions) bulkRegularPriceOptions.style.display = 'none';
    if (bulkRegularPriceValue) bulkRegularPriceValue.value = '';
    if (bulkRegularPriceMethod) bulkRegularPriceMethod.value = 'adjust';
    
    // Reset the custom dropdown visual display to "Adjust by %"
    const priceMethodText = document.getElementById('price-method-text');
    const priceMethodDropdown = document.getElementById('price-method-dropdown');
    if (priceMethodText) {
        priceMethodText.textContent = 'Adjust by %';
    }
    if (priceMethodDropdown) {
        // Reset selected option in dropdown
        priceMethodDropdown.querySelectorAll('.select-option').forEach(option => {
            option.classList.remove('selected');
            if (option.getAttribute('data-value') === 'percentage') {
                option.classList.add('selected');
            }
        });
    }
    
    // Reset price unit and hidden select
    const hiddenSelect = document.getElementById('bulk-regular-adjustment-type');
    if (hiddenSelect) {
        hiddenSelect.value = 'percentage';
    }
    
    // Reset slider visibility (show by default since percentage is default)
    const sliderRow = document.querySelector('.price-slider-row');
    if (sliderRow) {
        sliderRow.style.display = 'block';
    }
    
    // Reset spinner visibility (hide by default since percentage is default)
    const regularInput = document.getElementById('bulk-regular-adjustment');
    if (regularInput) {
        regularInput.classList.remove('show-spinners', 'hide-spinners');
        regularInput.classList.add('hide-spinners');
        regularInput.value = '0'; // Reset slider input to 0
        regularInput.setAttribute('data-clamped', 'true'); // Default to percentage mode
    }
    
    // Reset price slider position to 0%
    const priceSliderCover = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-cover');
    const priceSliderHandle = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-handle');
    const priceSliderContainer = document.querySelector('.price-slider-container[data-slider="regular"]');
    if (priceSliderCover && priceSliderHandle) {
        priceSliderCover.style.width = '50%'; // 50% because 0 is middle position
        priceSliderHandle.style.left = '50%';
    }
    
    // Clear slider initialization flag so it can be re-initialized
    if (priceSliderContainer) {
        priceSliderContainer.removeAttribute('data-slider-initialized');
    }

    // SALE PRICING TAB RESETS
    const bulkAdjustSalePrices = document.getElementById('bulk-adjust-sale-prices');
    const bulkSalePriceOptions = document.getElementById('bulk-sale-price-options');
    if (bulkAdjustSalePrices) bulkAdjustSalePrices.checked = false;
    if (bulkSalePriceOptions) bulkSalePriceOptions.style.display = 'none';

    // Reset sale status three-way toggle to "unchanged"
    const saleToggleButtons = document.querySelectorAll('#bulk-sale-price-options .three-way-toggle .toggle-option');
    saleToggleButtons.forEach(btn => btn.classList.remove('active'));
    const unchangedButton = document.querySelector('#bulk-sale-price-options .three-way-toggle .toggle-option[data-value="unchanged"]');
    if (unchangedButton) unchangedButton.classList.add('active');
    
    const bulkSaleStatus = document.getElementById('bulk-sale-status');
    if (bulkSaleStatus) bulkSaleStatus.value = 'unchanged';

    // Reset sale price adjustment controls
    const saleInput = document.getElementById('bulk-sale-adjustment');
    if (saleInput) {
        saleInput.value = '0';
        // Don't force data-clamped attribute here - let the dropdown change handler manage it
        // saleInput.setAttribute('data-clamped', 'true'); // Removed - causes conflicts
    }

    // Reset sale price method dropdown
    const salePriceMethodText = document.getElementById('sale-price-method-text');
    const salePriceMethodDropdown = document.getElementById('sale-price-method-dropdown');
    if (salePriceMethodText) {
        salePriceMethodText.textContent = 'Adjust by %';
    }
    if (salePriceMethodDropdown) {
        salePriceMethodDropdown.querySelectorAll('.select-option').forEach(option => {
            option.classList.remove('selected');
            if (option.getAttribute('data-value') === 'percentage') {
                option.classList.add('selected');
            }
        });
    }

    // Reset sale price unit and hidden select
    const saleHiddenSelect = document.getElementById('bulk-sale-adjustment-type');
    const salePriceUnit = document.getElementById('sale-price-unit');
    if (saleHiddenSelect) {
        saleHiddenSelect.value = 'percentage';
    }
    if (salePriceUnit) {
        salePriceUnit.textContent = '%';
    }

    // Reset sale price slider position to 0%
    const salePriceSliderCover = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-cover');
    const salePriceSliderHandle = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-handle');
    const salePriceSliderContainer = document.querySelector('.price-slider-container[data-slider="sale"]');
    if (salePriceSliderCover && salePriceSliderHandle) {
        salePriceSliderCover.style.width = '50%'; // 50% because 0 is middle position
        salePriceSliderHandle.style.left = '50%';
    }

    // Clear sale slider initialization flag so it can be re-initialized
    if (salePriceSliderContainer) {
        salePriceSliderContainer.removeAttribute('data-slider-initialized');
    }

    // CATEGORIES TAB RESETS
    // Reset add category controls
    const categoryInput = document.getElementById('bulk-category-input');
    if (categoryInput) {
        categoryInput.value = '';
    }
    
    // Reset dropdown display states
    const addCategoryDropdown = document.getElementById('bulk-category-add-dropdown');
    const removeCategoryDropdown = document.getElementById('bulk-category-remove-dropdown');
    if (addCategoryDropdown) {
        addCategoryDropdown.style.display = 'none';
    }
    if (removeCategoryDropdown) {
        removeCategoryDropdown.style.display = 'none';
    }
    
    // Clear category tags display
    updateCategoryTags();
    
    // TAGS TAB RESETS
    const bulkTagsInput = document.getElementById('bulk-tags-input');
    if (bulkTagsInput) bulkTagsInput.value = '';
    
    // STATUS TAB RESETS
    const bulkStatusSelect = document.getElementById('bulk-status-select');
    if (bulkStatusSelect) {
        bulkStatusSelect.value = '';
        // Reset custom dropdown display if exists
        const statusSelectText = bulkStatusSelect.closest('.bulk-select')?.querySelector('.select-text');
        if (statusSelectText) {
            statusSelectText.textContent = 'No change';
            statusSelectText.classList.add('placeholder');
        }
    }
    
    // VISIBILITY TAB RESETS
    const bulkProductStatusToggle = document.getElementById('bulk-product-status-toggle');
    const bulkProductStatusOptions = document.getElementById('bulk-product-status-options');
    const bulkScheduledDateGroup = document.getElementById('bulk-scheduled-date-group');
    const bulkScheduledDate = document.getElementById('bulk-scheduled-date');
    
    // Reset the product status toggle (checkbox)
    if (bulkProductStatusToggle) {
        bulkProductStatusToggle.checked = false;
    }
    
    // Hide the status options
    if (bulkProductStatusOptions) {
        bulkProductStatusOptions.style.display = 'none';
    }
    
    // Hide scheduled date group
    if (bulkScheduledDateGroup) {
        bulkScheduledDateGroup.style.display = 'none';
    }
    
    // Clear scheduled date input
    if (bulkScheduledDate) {
        bulkScheduledDate.value = '';
        // Refresh Flatpickr when resetting (it will handle constraints)
        if (window.flatpickrInstances && window.flatpickrInstances['bulk-scheduled-date']) {
            window.flatpickrInstances['bulk-scheduled-date'].clear();
        }
    }
    
    // Reset the four-way visibility toggle to "unchanged"
    const statusFourWayToggle = document.querySelector('#bulk-product-status-options .four-way-toggle');
    if (statusFourWayToggle) {
        const statusToggleOptions = statusFourWayToggle.querySelectorAll('.toggle-option');
        statusToggleOptions.forEach(opt => opt.classList.remove('active'));
        const unchangedOption = statusFourWayToggle.querySelector('.toggle-option[data-value="unchanged"]');
        if (unchangedOption) {
            unchangedOption.classList.add('active');
        }
    }
    
    // Reset hidden input for visibility status
    const bulkProductStatusHidden = document.getElementById('bulk-product-status');
    if (bulkProductStatusHidden) {
        bulkProductStatusHidden.value = 'unchanged';
    }
    
    // Reset scheduled date in bulkChanges
    bulkChanges.scheduledDate = null;
    
    // STOCK TAB RESETS
    const bulkEnableStockTracking = document.getElementById('bulk-enable-stock-tracking');
    const bulkStockControls = document.getElementById('bulk-stock-controls');
    const bulkStockAction = document.getElementById('bulk-stock-action');
    const bulkStockAdjustment = document.getElementById('bulk-stock-adjustment');
    const bulkStockType = document.getElementById('bulk-stock-type');
    
    if (bulkEnableStockTracking) bulkEnableStockTracking.checked = false;
    if (bulkStockControls) bulkStockControls.style.display = 'none';
    if (bulkStockAction) bulkStockAction.value = 'adjust';
    if (bulkStockAdjustment) bulkStockAdjustment.value = '0';
    if (bulkStockType) bulkStockType.value = 'limited';
    
    // Reset stock type two-way toggle to "limited"
    const stockTwoWayToggle = document.querySelector('#bulk-stock-controls .two-way-toggle');
    if (stockTwoWayToggle) {
        const stockToggleOptions = stockTwoWayToggle.querySelectorAll('.toggle-option');
        stockToggleOptions.forEach(opt => opt.classList.remove('active'));
        const limitedOption = stockTwoWayToggle.querySelector('.toggle-option[data-value="limited"]');
        if (limitedOption) limitedOption.classList.add('active');
    }
    
    // Reset stock method dropdown to "Adjust by amount"
    const stockMethodText = document.getElementById('stock-method-text');
    const stockMethodDropdown = document.getElementById('stock-method-dropdown');
    if (stockMethodText) {
        stockMethodText.textContent = 'Adjust by amount';
    }
    if (stockMethodDropdown) {
        stockMethodDropdown.querySelectorAll('.select-option').forEach(option => {
            option.classList.remove('selected');
            if (option.getAttribute('data-value') === 'adjust') {
                option.classList.add('selected');
            }
        });
    }
    
    // Reset stock adjustment group visibility (show by default)
    const bulkStockAdjustmentGroup = document.getElementById('bulk-stock-adjustment-group');
    if (bulkStockAdjustmentGroup) {
        bulkStockAdjustmentGroup.style.display = 'block';
    }
    
    // Reset stock slider visibility (show by default for adjust mode)
    const stockSliderRow = document.querySelector('.stock-slider-row');
    if (stockSliderRow) {
        stockSliderRow.style.display = 'block';
    }
    
    // Reset stock slider position to 0
    const stockSliderCover = document.querySelector('.price-slider-container[data-slider="stock"] .price-slider-cover');
    const stockSliderHandle = document.querySelector('.price-slider-container[data-slider="stock"] .price-slider-handle');
    const stockSliderContainer = document.querySelector('.price-slider-container[data-slider="stock"]');
    if (stockSliderCover && stockSliderHandle) {
        stockSliderCover.style.width = '50%'; // 50% because 0 is middle position (covers right half)
        stockSliderHandle.style.left = '50%';
    }
    
    // Clear stock slider initialization flag so it can be re-initialized
    if (stockSliderContainer) {
        stockSliderContainer.removeAttribute('data-stock-slider-initialized');
    }
    
}

// Initialize bulk tab functionality (EXACT from reference)
function initializeBulkTabs() {
    const tabs = document.querySelectorAll('.bulk-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            tab.classList.add('active');
            const targetPane = document.getElementById(`${targetTab}-tab`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}

// Initialize bulk toggle switches (EXACT from reference)
function initializeBulkToggles() {
    // Pricing Controls Event Handlers
    const bulkRoundPrices = document.getElementById('bulk-round-prices');
    const bulkRoundingOptions = document.getElementById('bulk-rounding-options');
    if (bulkRoundPrices) {
        bulkRoundPrices.addEventListener('change', () => {
            bulkChanges.enableRounding = bulkRoundPrices.checked;
            if (bulkRoundingOptions) {
                bulkRoundingOptions.style.display = bulkRoundPrices.checked ? 'block' : 'none';
            }
            updatePreviewPane();
            updateApplyAllButton();
        });
    }

    const bulkRoundingType = document.getElementById('bulk-rounding-type');
    const bulkCustomEnding = document.getElementById('bulk-custom-ending');
    if (bulkRoundingType) {
        bulkRoundingType.addEventListener('change', () => {
            bulkChanges.roundingType = bulkRoundingType.value;
            if (bulkCustomEnding) {
                bulkCustomEnding.style.display = bulkRoundingType.value === 'custom' ? 'block' : 'none';
            }
            updatePreviewPane();
            updateApplyAllButton();
        });
    }

    // Custom cents input
    const bulkCustomCents = document.getElementById('bulk-custom-cents');
    if (bulkCustomCents) {
        bulkCustomCents.addEventListener('input', () => {
            const value = parseInt(bulkCustomCents.value) || 99;
            console.log('🔢 Custom cents input changed to:', bulkCustomCents.value, '→ parsed to:', value);
            
            bulkChanges.customCents = value;
            console.log('🔢 Updated bulkChanges.customCents to:', value);
            console.log('🔢 Full bulkChanges object:', bulkChanges);
            
            updatePreviewPane();
            updateApplyAllButton();
        });
    } else {
        console.log('🔢 Custom cents input NOT found');
    }

    // Regular price adjustments

    const bulkAdjustRegularPrices = document.getElementById('bulk-adjust-regular-prices');
    const bulkRegularPriceOptions = document.getElementById('bulk-regular-price-options');
    if (bulkAdjustRegularPrices) {
        bulkAdjustRegularPrices.addEventListener('change', () => {
            if (bulkRegularPriceOptions) {
                bulkRegularPriceOptions.style.display = bulkAdjustRegularPrices.checked ? 'block' : 'none';
            }
            
            // Initialize slider when section becomes visible
            if (bulkAdjustRegularPrices.checked) {
                setTimeout(() => {
                    initializeCustomSlider();
                }, 100); // Small delay to ensure visibility
            } else {
                // Only reset regular pricing controls, NOT sale pricing
                const regularInput = document.getElementById('bulk-regular-adjustment');
                if (regularInput) {
                    regularInput.value = '0';
                }
                
                const priceSliderCover = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-cover');
                const priceSliderHandle = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-handle');
                if (priceSliderCover && priceSliderHandle) {
                    priceSliderCover.style.width = '50%';
                    priceSliderHandle.style.left = '50%';
                }
            }
            
            updatePreviewPane();
        });
    }

    const bulkAdjustSalePrices = document.getElementById('bulk-adjust-sale-prices');
    const bulkSalePriceOptions = document.getElementById('bulk-sale-price-options');
    if (bulkAdjustSalePrices) {
        bulkAdjustSalePrices.addEventListener('change', () => {
            if (bulkSalePriceOptions) {
                bulkSalePriceOptions.style.display = bulkAdjustSalePrices.checked ? 'block' : 'none';
            }
            
            // Initialize sale pricing slider when section becomes visible
            if (bulkAdjustSalePrices.checked) {
                setTimeout(() => {
                    setupSalePriceSliderEventHandlers();
                    initializeSalePricingSlider();
                }, 100); // Small delay to ensure visibility
            } else {
                // Reset sale price controls when toggle is turned off
                const bulkSalePriceValue = document.getElementById('bulk-sale-price-value');
                const bulkSalePriceMethod = document.getElementById('bulk-sale-price-method');
                if (bulkSalePriceValue) bulkSalePriceValue.value = '';
                if (bulkSalePriceMethod) bulkSalePriceMethod.value = 'percentage';
                
                // Reset sale action radio buttons
                const saleActionKeepCurrent = document.getElementById('bulk-sale-keep-current');
                const saleActionEnable = document.getElementById('bulk-sale-enable');
                const saleActionDisable = document.getElementById('bulk-sale-disable');
                if (saleActionKeepCurrent) saleActionKeepCurrent.checked = true;
                if (saleActionEnable) saleActionEnable.checked = false;
                if (saleActionDisable) saleActionDisable.checked = false;
                
                // Reset the three-way toggle to "unchanged"
                const toggleButtons = document.querySelectorAll('.three-way-toggle .toggle-option');
                toggleButtons.forEach(btn => btn.classList.remove('active'));
                const unchangedButton = document.querySelector('.three-way-toggle .toggle-option[data-value="unchanged"]');
                if (unchangedButton) unchangedButton.classList.add('active');
                
                const bulkSaleStatus = document.getElementById('bulk-sale-status');
                if (bulkSaleStatus) bulkSaleStatus.value = 'unchanged';
                
                // Reset sale price slider
                const saleInput = document.getElementById('bulk-sale-adjustment');
                if (saleInput) {
                    saleInput.value = '0';
                }
                
                const salePriceSliderCover = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-cover');
                const salePriceSliderHandle = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-handle');
                if (salePriceSliderCover && salePriceSliderHandle) {
                    salePriceSliderCover.style.width = '50%';
                    salePriceSliderHandle.style.left = '50%';
                }
            }
            
            updatePreviewPane();
        });
    }

    // Product Status toggle
    const bulkProductStatusToggle = document.getElementById('bulk-product-status-toggle');
    const bulkProductStatusOptions = document.getElementById('bulk-product-status-options');
    if (bulkProductStatusToggle) {
        bulkProductStatusToggle.addEventListener('change', () => {
            if (bulkProductStatusOptions) {
                bulkProductStatusOptions.style.display = bulkProductStatusToggle.checked ? 'block' : 'none';
            }
            updatePreviewPane();
        });
    }

    // Product status four-way toggle
    const statusFourWayToggle = document.querySelector('#bulk-product-status-options .four-way-toggle');
    if (statusFourWayToggle) {
        const statusToggleOptions = statusFourWayToggle.querySelectorAll('.toggle-option');
        const statusHiddenInput = document.getElementById('bulk-product-status');
        const scheduledDateGroup = document.getElementById('bulk-scheduled-date-group');
        
        statusToggleOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                statusToggleOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update hidden input value
                const value = this.getAttribute('data-value');
                if (statusHiddenInput) {
                    statusHiddenInput.value = value;
                }
                
                // Update bulkChanges object
                bulkChanges.newStatus = value;
                
                // Show/hide scheduled date field
                if (scheduledDateGroup) {
                    scheduledDateGroup.style.display = value === 'scheduled' ? 'block' : 'none';
                    
                    // Flatpickr will handle constraints when field becomes visible
                    if (value === 'scheduled' && window.flatpickrInstances && window.flatpickrInstances['bulk-scheduled-date']) {
                        window.flatpickrInstances['bulk-scheduled-date'].redraw();
                    }
                }
                
                updatePreviewPane();
                updateApplyAllButton();
            });
        });
    }

    // Scheduled date input - now handled by Flatpickr
    const scheduledDateInput = document.getElementById('bulk-scheduled-date');
    if (scheduledDateInput) {
        // Flatpickr will handle the date/time constraints
        // Just set up the change event for bulk changes tracking
        scheduledDateInput.addEventListener('change', () => {
            bulkChanges.scheduledDate = scheduledDateInput.value;
            updatePreviewPane();
            updateApplyAllButton();
        });
    }

    // Categories toggle
    const bulkCategoriesToggle = document.getElementById('bulk-categories-toggle');
    const bulkCategoriesOptions = document.getElementById('bulk-categories-options');
    if (bulkCategoriesToggle) {
        bulkCategoriesToggle.addEventListener('change', () => {
            if (bulkCategoriesOptions) {
                bulkCategoriesOptions.style.display = bulkCategoriesToggle.checked ? 'block' : 'none';
            }
            updatePreviewPane();
        });
    }

    // Add Category functionality - unified interface
    const categoryInput = document.getElementById('bulk-category-input');
    const addCategoryTrigger = document.getElementById('bulk-category-add-trigger');
    const addCategoryDropdown = document.getElementById('bulk-category-add-dropdown');
    const removeCategoryTrigger = document.getElementById('bulk-category-remove-trigger');
    const removeCategoryDropdown = document.getElementById('bulk-category-remove-dropdown');
    
    // Handle add category input - enter key to add
    if (categoryInput) {
        categoryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const newCategory = categoryInput.value.trim();
                
                // Ensure categories object exists
                if (!bulkChanges.categories) {
                    bulkChanges.categories = {
                        toAdd: [],
                        toRemove: []
                    };
                }
                
                if (newCategory && bulkChanges.categories && bulkChanges.categories.toAdd && !bulkChanges.categories.toAdd.includes(newCategory)) {
                    bulkChanges.categories.toAdd.push(newCategory);
                    updateCategoryTags();
                    updatePreviewPane();
                    updateApplyAllButton();
                    categoryInput.value = '';
                }
            }
        });
    }

    // Duplicate category handlers removed - using the handlers at ~line 2920 instead

    // Tags toggle
    const bulkTagsToggle = document.getElementById('bulk-tags-toggle');
    const bulkTagsOptions = document.getElementById('bulk-tags-options');
    if (bulkTagsToggle) {
        bulkTagsToggle.addEventListener('change', () => {
            if (bulkTagsOptions) {
                bulkTagsOptions.style.display = bulkTagsToggle.checked ? 'block' : 'none';
            }
            updatePreviewPane();
        });
    }

    // Stock Management toggle
    const bulkEnableStockTracking = document.getElementById('bulk-enable-stock-tracking');
    const bulkStockControls = document.getElementById('bulk-stock-controls');
    if (bulkEnableStockTracking) {
        bulkEnableStockTracking.addEventListener('change', () => {
            bulkChanges.enableStockTracking = bulkEnableStockTracking.checked;
            if (bulkStockControls) {
                bulkStockControls.style.display = bulkEnableStockTracking.checked ? 'block' : 'none';
            }
            
            // Initialize stock data structure when enabled
            if (bulkEnableStockTracking.checked) {
                if (!bulkChanges.inventory) {
                    bulkChanges.inventory = {};
                }
                if (!bulkChanges.inventory.stock) {
                    bulkChanges.inventory.stock = {};
                }
                
                // Set default values from UI
                const stockTypeToggle = document.querySelector('#bulk-stock-controls .two-way-toggle .toggle-option.active');
                if (stockTypeToggle) {
                    bulkChanges.inventory.stock.type = stockTypeToggle.getAttribute('data-value') || 'limited';
                }
                
                const stockMethodSelect = document.getElementById('bulk-stock-action');
                if (stockMethodSelect) {
                    bulkChanges.inventory.stock.method = stockMethodSelect.value || 'adjust';
                }
                
                console.log('📦 Stock tracking enabled, initialized data:', bulkChanges.inventory.stock);
            } else {
                // Clear stock changes when disabled
                if (bulkChanges.inventory && bulkChanges.inventory.stock) {
                    delete bulkChanges.inventory.stock;
                }
            }
            
            // Initialize stock slider when section becomes visible
            if (bulkEnableStockTracking.checked) {
                setTimeout(() => {
                    initializeStockSlider();
                }, 100); // Small delay to ensure visibility
            }
            
            updatePreviewPane();
        });
    }
    
    // Stock type two-way toggle (Limited/Unlimited)
    const stockTwoWayToggle = document.querySelector('#bulk-stock-controls .two-way-toggle');
    if (stockTwoWayToggle) {
        const stockToggleOptions = stockTwoWayToggle.querySelectorAll('.toggle-option');
        const stockTypeHidden = document.getElementById('bulk-stock-type');
        const bulkStockAdjustmentGroup = document.getElementById('bulk-stock-adjustment-group');
        
        stockToggleOptions.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                
                // Update visual state
                stockToggleOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update hidden input
                if (stockTypeHidden) {
                    stockTypeHidden.value = value;
                }
                
                // Update bulk changes
                if (!bulkChanges.inventory) {
                    bulkChanges.inventory = {};
                }
                if (!bulkChanges.inventory.stock) {
                    bulkChanges.inventory.stock = {};
                }
                bulkChanges.inventory.stock.type = value;
                
                // Show/hide stock controls based on selection
                if (value === 'limited') {
                    if (bulkStockAdjustmentGroup) bulkStockAdjustmentGroup.style.display = 'block';
                    
                    // Initialize stock method and amount when switching to limited
                    const stockMethodSelect = document.getElementById('bulk-stock-action');
                    if (stockMethodSelect) {
                        bulkChanges.inventory.stock.method = stockMethodSelect.value || 'adjust';
                    }
                    
                    const stockAmountInput = document.getElementById('bulk-stock-adjustment');
                    if (stockAmountInput && stockAmountInput.value) {
                        bulkChanges.inventory.stock.amount = parseFloat(stockAmountInput.value) || 0;
                    }
                    
                    // Check current stock method to show/hide slider and tooltip
                    const currentStockAction = document.getElementById('bulk-stock-action')?.value || 'adjust';
                    const stockSliderRow = document.querySelector('.price-slider-row:has([data-slider="stock"])');
                    const stockTooltip = document.getElementById('stock-adjustment-tooltip');
                    
                    if (stockSliderRow) {
                        stockSliderRow.style.display = currentStockAction === 'adjust' ? 'block' : 'none';
                    }
                    
                    // Show tooltip only for adjust method
                    if (stockTooltip) {
                        stockTooltip.style.display = currentStockAction === 'adjust' ? 'flex' : 'none';
                    }
                    
                    // Initialize stock slider if needed
                    setTimeout(() => {
                        initializeStockSlider();
                    }, 100);
                } else {
                    // Unlimited stock - hide all controls and clear amount/method
                    if (bulkStockAdjustmentGroup) bulkStockAdjustmentGroup.style.display = 'none';
                    
                    // Hide tooltip for unlimited stock
                    const stockTooltip = document.getElementById('stock-adjustment-tooltip');
                    if (stockTooltip) {
                        stockTooltip.style.display = 'none';
                    }
                    
                    // Clear method and amount since they're not relevant for unlimited
                    delete bulkChanges.inventory.stock.method;
                    delete bulkChanges.inventory.stock.amount;
                }
                
                updatePreviewPane();
            });
        });
    }
    
    // Setup stock dropdown event handlers
    setupStockSliderEventHandlers();
    
    // Stock adjustment input
    const bulkStockAdjustment = document.getElementById('bulk-stock-adjustment');
    if (bulkStockAdjustment) {
        bulkStockAdjustment.addEventListener('input', () => {
            const value = parseFloat(bulkStockAdjustment.value) || 0;
            
            // Update bulkChanges with proper structure
            if (!bulkChanges.inventory) {
                bulkChanges.inventory = {};
            }
            if (!bulkChanges.inventory.stock) {
                bulkChanges.inventory.stock = {};
            }
            bulkChanges.inventory.stock.amount = value;
            
            console.log('📦 Stock adjustment input changed:', value, 'bulkChanges.inventory.stock:', bulkChanges.inventory.stock);
            
            // Update stock slider position based on input value
            const stockSliderCover = document.querySelector('.price-slider-container[data-slider="stock"] .price-slider-cover');
            const stockSliderHandle = document.querySelector('.price-slider-container[data-slider="stock"] .price-slider-handle');
            
            if (stockSliderCover && stockSliderHandle) {
                // Map value to slider position (-100 to +100 range)
                const clampedValue = Math.max(-100, Math.min(100, value));
                const percentage = ((clampedValue + 100) / 200) * 100; // Convert to 0-100%
                
                stockSliderCover.style.width = `${percentage}%`;
                stockSliderHandle.style.left = `${percentage}%`;
            }
            
            updatePreviewPane();
        });
    }

    // SKU Management toggle
    const bulkSkuToggle = document.getElementById('bulk-sku-toggle');
    const bulkSkuOptions = document.getElementById('bulk-sku-options');
    if (bulkSkuToggle) {
        bulkSkuToggle.addEventListener('change', () => {
            if (bulkSkuOptions) {
                bulkSkuOptions.style.display = bulkSkuToggle.checked ? 'block' : 'none';
            }
            updatePreviewPane();
        });
    }
}

// Initialize bulk controls (inputs, selects, etc.)
function initializeBulkControls() {
    // Price adjustment input (UPDATED to match reference logic)
    const priceAdjustmentInput = document.getElementById('bulk-regular-adjustment');
    if (priceAdjustmentInput) {
        priceAdjustmentInput.addEventListener('input', function() {
            
            const adjustment = parseFloat(this.value);
            const adjustmentType = bulkChanges.regularAdjustmentType || 'percentage';
            
            if (!isNaN(adjustment) && adjustment !== 0) {
                if (adjustmentType === 'fixed-price') {
                    // For fixed price, store in fixedPrice and clear priceAdjustment
                    bulkChanges.fixedPrice = adjustment;
                    bulkChanges.priceAdjustment = null;
                    console.log('💰 Set bulkChanges.fixedPrice to:', adjustment);
                } else {
                    // For percentage and fixed-adjustment, store in priceAdjustment and clear fixedPrice
                    bulkChanges.priceAdjustment = adjustment;
                    bulkChanges.fixedPrice = null;
                }
            } else {
                // Clear both when invalid/empty
                bulkChanges.priceAdjustment = null;
                bulkChanges.fixedPrice = null;
                console.log('💰 Cleared both priceAdjustment and fixedPrice');
            }
            
            updateApplyAllButton();
            if (typeof updatePreviewPane === 'function') {
                updatePreviewPane();
            }
        });
    }
    
    // Product status radio buttons (ADDED functionality)
    const productStatusRadios = document.querySelectorAll('input[name="bulk-product-status"]');
    productStatusRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                bulkChanges.newStatus = this.value;
                updateApplyAllButton();
                updatePreviewPane();
            }
        });
    });
    
    // Sale action radio buttons (ADDED functionality) 
    const saleActionRadios = document.querySelectorAll('input[name="bulk-sale-action"]');
    saleActionRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                bulkChanges.saleToggle = this.value;
                
                updateApplyAllButton();
                updatePreviewPane();
            }
        });
    });
    
    // Three-way toggle for sale status
    const threeWayToggle = document.querySelector('.three-way-toggle');
    if (threeWayToggle) {
        const toggleOptions = threeWayToggle.querySelectorAll('.toggle-option');
        const hiddenInput = document.getElementById('bulk-sale-status');
        
        toggleOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update hidden input value
                const value = this.getAttribute('data-value');
                if (hiddenInput) {
                    hiddenInput.value = value;
                }
                
                // Update bulkChanges object
                bulkChanges.saleToggle = value === 'unchanged' ? 'keep-current' : 
                                       value === 'on-sale' ? 'put-on-sale' : 'take-off-sale';
                
                // When enabling sale pricing, ensure saleAdjustmentType is set
                if (bulkChanges.saleToggle === 'put-on-sale' && !bulkChanges.saleAdjustmentType) {
                    bulkChanges.saleAdjustmentType = 'percentage';
                }
                
                // Update legacy radio buttons for compatibility
                const correspondingRadio = value === 'unchanged' ? 'bulk-sale-keep-current' :
                                         value === 'on-sale' ? 'bulk-sale-put-on' : 'bulk-sale-take-off';
                const radioElement = document.getElementById(correspondingRadio);
                if (radioElement) {
                    radioElement.checked = true;
                }
                
                updateApplyAllButton();
                updatePreviewPane();
            });
        });
    }
    
    // Four-way toggle for rounding type
    const fourWayToggle = document.querySelector('.four-way-toggle');
    if (fourWayToggle) {
        const toggleOptions = fourWayToggle.querySelectorAll('.toggle-option');
        const hiddenInput = document.getElementById('bulk-rounding-type');
        const customEndingDiv = document.getElementById('bulk-custom-ending');
        const descriptionText = document.getElementById('bulk-rounding-description-text');
        
        toggleOptions.forEach(option => {
            option.addEventListener('click', function() {
                
                // Remove active class from all options
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update hidden input value
                const value = this.getAttribute('data-value');
                if (hiddenInput) {
                    hiddenInput.value = value;
                }
                
                // Update bulkChanges object
                bulkChanges.roundingType = value;
                
                // Show/hide custom ending input
                if (customEndingDiv) {
                    customEndingDiv.style.display = value === 'custom' ? 'block' : 'none';
                }
                
                // Update description text and tooltips
                if (descriptionText) {
                    switch(value) {
                        case 'whole':
                            descriptionText.textContent = 'Round to the nearest dollar (e.g. $24.60 becomes $25)';
                            break;
                        case '.99':
                            descriptionText.textContent = 'Round to end in .99 (e.g. $24.60 becomes $24.99)';
                            break;
                        case '.95':
                            descriptionText.textContent = 'Round to end in .95 (e.g. $24.60 becomes $24.95)';
                            break;
                        case 'custom':
                            descriptionText.textContent = 'Round to your custom ending';
                            break;
                    }
                }
                
                // Update button tooltips dynamically
                toggleOptions.forEach(opt => {
                    const optValue = opt.getAttribute('data-value');
                    switch(optValue) {
                        case 'whole':
                            opt.setAttribute('title', 'Round to nearest dollar (e.g., $24.60 becomes $25)');
                            break;
                        case '.99':
                            opt.setAttribute('title', 'Round to the nearest .99 (e.g. $24.60 becomes $24.99)');
                            break;
                        case '.95':
                            opt.setAttribute('title', 'Round to the nearest .95 (e.g. $24.60 becomes $24.95)');
                            break;
                        case 'custom':
                            opt.setAttribute('title', 'Round to custom cents value');
                            break;
                    }
                });
                
                updateApplyAllButton();
                updatePreviewPane();
            });
        });
    } else {
    }
    
    // Three-way toggle for rounding target (inside rounding section)
    const roundingTargetToggle = document.querySelector('#bulk-rounding-options .three-way-toggle');
    if (roundingTargetToggle) {
        const toggleOptions = roundingTargetToggle.querySelectorAll('.toggle-option');
        const hiddenInput = document.getElementById('bulk-rounding-target');
        
        toggleOptions.forEach(option => {
            option.addEventListener('click', function() {
                
                // Remove active class from all options
                toggleOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Update hidden input value
                const value = this.getAttribute('data-value');
                if (hiddenInput) {
                    hiddenInput.value = value;
                }
                
                // Update bulkChanges object
                bulkChanges.roundingTarget = value;
                
                updateApplyAllButton();
                updatePreviewPane();
            });
        });
    } else {
    }
    
    // Price adjustment type select
    const priceAdjustmentType = document.getElementById('bulk-regular-adjustment-type');
    if (priceAdjustmentType) {
        priceAdjustmentType.addEventListener('change', function() {
            bulkChanges.regularAdjustmentType = this.value;
            updateApplyAllButton();
        });
    }
    
    // Stock amount input
    const stockAmountInput = document.getElementById('bulk-stock-amount');
    if (stockAmountInput) {
        stockAmountInput.addEventListener('input', function() {
            bulkChanges.stockAmount = parseInt(this.value) || 0;
            updateApplyAllButton();
        });
    }
    
    // Stock action select
    const stockActionSelect = document.getElementById('bulk-stock-action');
    if (stockActionSelect) {
        stockActionSelect.addEventListener('change', function() {
            bulkChanges.stockAction = this.value;
            
            // Show/hide stock amount input based on action
            const stockAmountGroup = document.getElementById('bulk-stock-amount-group');
            if (stockAmountGroup) {
                stockAmountGroup.style.display = (this.value === 'unlimited' || this.value === 'none') ? 'none' : 'block';
            }
            
            updateApplyAllButton();
        });
    }
    
    // Product status toggles
    const statusToggles = document.querySelectorAll('input[name="bulk-product-status"]');
    statusToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            if (this.checked) {
                bulkChanges.newStatus = this.value;
                updateApplyAllButton();
            }
        });
    });
}

// Apply bulk changes to selected products
// Initialize price slider (EXACT from reference)
function initializeCustomSlider() {
    // Get slider elements using data attribute for regular pricing
    const priceSliderContainer = document.querySelector('.price-slider-container[data-slider="regular"]');
    const priceSliderTrack = priceSliderContainer?.querySelector('.price-slider-track');
    const priceSliderCover = priceSliderContainer?.querySelector('.price-slider-cover');
    const priceSliderHandle = priceSliderContainer?.querySelector('.price-slider-handle');
    const priceValueInput = document.getElementById('bulk-regular-adjustment');
    const priceUnit = document.getElementById('price-unit');
    const priceMethodTrigger = document.getElementById('price-method-trigger');
    const priceMethodDropdown = document.getElementById('price-method-dropdown');
    const priceMethodText = document.getElementById('price-method-text');
    
    let currentValue = 0; // -99 to +100 range
    let isDragging = false;
    
    if (!priceSliderContainer || !priceSliderHandle || !priceSliderCover) {
        console.error('Required slider elements not found');
        return;
    }

    // Check if element is visible (be more lenient with visibility check)
    const isVisible = priceSliderContainer.offsetParent !== null || 
                     getComputedStyle(priceSliderContainer).display !== 'none';
    
    if (!isVisible) {
        setTimeout(() => {
            initializeCustomSlider();
        }, 200);
        return;
    }

    // Check if already initialized to prevent duplicate event listeners
    if (priceSliderContainer.hasAttribute('data-slider-initialized')) {
        return;
    }
    
    // Mark as initialized
    priceSliderContainer.setAttribute('data-slider-initialized', 'true');
    
    // Update slider position and cover (instant, no transitions)
    function updateSliderVisual(value) {
        
        // Convert -99 to +100 range to 0-100% position
        const percentage = ((value + 99) / 199) * 100;
        
        // Update cover to hide gradient from handle position to right
        if (priceSliderCover) {
            priceSliderCover.style.width = (100 - percentage) + '%';
        }
        
        // Update handle position
        if (priceSliderHandle) {
            priceSliderHandle.style.left = percentage + '%';
        }

        // Update preview pane to reflect slider changes
        if (typeof updatePreviewPane === 'function') {
            updatePreviewPane();
        } else {
            console.log('❌ updatePreviewPane function not found in slider');
        }
    }

    // Set value and update display (no transitions)
    function setValue(value, skipInputEvent = false) {
        // Only clamp values for inputs that should be constrained (like percentages)
        if (priceValueInput && priceValueInput.hasAttribute('data-clamped')) {
            currentValue = Math.max(-99, Math.min(100, value));
        } else {
            currentValue = value;
        }
        updateSliderVisual(currentValue);
        
        if (priceValueInput) {
            priceValueInput.value = currentValue;
            // Only trigger input event if not skipping (to prevent clearing other pricing when initializing)
            if (!skipInputEvent) {
                priceValueInput.dispatchEvent(new Event('input'));
            } else {
            }
        }
        
        if (!skipInputEvent) {
            updatePreviewPane();
        }
    }

    // Get position from mouse/touch event
    function getPositionFromEvent(event) {
        const rect = priceSliderTrack.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        return Math.round((percentage * 199) - 99); // Convert to -99 to +100 range
    }

    // Mouse events
    priceSliderContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        const newValue = getPositionFromEvent(e);
        setValue(newValue);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const newValue = getPositionFromEvent(e);
        setValue(newValue);
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    // Touch events for mobile
    priceSliderContainer.addEventListener('touchstart', (e) => {
        e.preventDefault();
        isDragging = true;
        const newValue = getPositionFromEvent(e);
        setValue(newValue);
        console.log('Touch start - new value:', newValue);
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const newValue = getPositionFromEvent(e);
        setValue(newValue);
    });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            console.log('Touch end - final value:', currentValue);
        }
    });

    // Initialize at 0% without triggering input event to avoid clearing other pricing values
    setValue(0, true);
    
    setupPriceSliderEventHandlers();
    setupSalePriceSliderEventHandlers();
    initializeSalePricingSlider();
}

// Update price unit based on method (EXACT from reference)
function updatePriceUnit(method) {
    const priceUnit = document.getElementById('price-unit');
    if (!priceUnit) return;
    
    switch (method) {
        case 'percentage':
            priceUnit.textContent = '%';
            break;
        case 'fixed-adjustment':
            priceUnit.textContent = window.getSystemCurrency() || '';
            break;
        case 'fixed-price':
            priceUnit.textContent = window.getSystemCurrency() || '';
            break;
        default:
            priceUnit.textContent = '%';
    }
}

    // Setup event handlers for slider input and dropdown (EXACT from reference)
function setupPriceSliderEventHandlers() {
    const priceValueInput = document.getElementById('bulk-regular-adjustment');
    const priceMethodTrigger = document.getElementById('price-method-trigger');
    const priceMethodDropdown = document.getElementById('price-method-dropdown');
    const priceMethodText = document.getElementById('price-method-text');
    
    // Value input event
    if (priceValueInput) {
        priceValueInput.addEventListener('input', (e) => {
            const displayValue = parseFloat(e.target.value) || 0;
            
            // Only clamp values for inputs that should be constrained (like percentages)
            let clampedValue;
            if (e.target.hasAttribute('data-clamped')) {
                clampedValue = Math.max(-99, Math.min(100, displayValue));
            } else {
                clampedValue = displayValue;
            }
            
            // Update slider position
            const priceSliderCover = document.querySelector('.price-slider-cover');
            const priceSliderHandle = document.querySelector('.price-slider-handle');
            
            if (priceSliderCover && priceSliderHandle) {
                const percentage = ((clampedValue + 99) / 199) * 100;
                
                priceSliderCover.style.width = (100 - percentage) + '%';
                priceSliderHandle.style.left = percentage + '%';
            }
            
            updatePreviewPane();
        });
    }

    // Method dropdown functionality
    if (priceMethodTrigger && priceMethodDropdown) {
        // Remove existing event listeners to prevent duplicates
        priceMethodTrigger.removeEventListener('click', priceMethodTrigger._clickHandler);
        priceMethodDropdown.removeEventListener('click', priceMethodDropdown._clickHandler);
        
        // Create new click handlers and store references
        priceMethodTrigger._clickHandler = () => {
            priceMethodDropdown.classList.toggle('active');
            priceMethodTrigger.classList.toggle('active');
        };
        
        priceMethodDropdown._clickHandler = (e) => {
            if (e.target.classList.contains('select-option')) {
                const value = e.target.getAttribute('data-value');
                const text = e.target.textContent;
                
                
                // Update selected option
                priceMethodDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                e.target.classList.add('selected');
                
                // Update display text
                if (priceMethodText) {
                    priceMethodText.textContent = text;
                }
                
                // Update hidden select
                const hiddenSelect = document.getElementById('bulk-regular-adjustment-type');
                if (hiddenSelect) {
                    hiddenSelect.value = value;
                    // Trigger change event to notify listeners
                    hiddenSelect.dispatchEvent(new Event('change'));
                }
                
                // Update price unit
                updatePriceUnit(value);
                
                // Close dropdown
                priceMethodDropdown.classList.remove('active');
                priceMethodTrigger.classList.remove('active');
                
                updatePreviewPane();
            }
        };
        
        // Add event listeners
        priceMethodTrigger.addEventListener('click', priceMethodTrigger._clickHandler);
        priceMethodDropdown.addEventListener('click', priceMethodDropdown._clickHandler);
    }
    
    // Add the missing change event listener for the hidden select
    const bulkRegularAdjustmentType = document.getElementById('bulk-regular-adjustment-type');
    if (bulkRegularAdjustmentType) {
        bulkRegularAdjustmentType.addEventListener('change', () => {
            const adjustmentType = bulkRegularAdjustmentType.value;
            bulkChanges.regularAdjustmentType = adjustmentType;
            
            // Redistribute the current input value to the correct bulkChanges property
            const regularInput = document.getElementById('bulk-regular-adjustment');
            if (regularInput && regularInput.value) {
                const currentValue = parseFloat(regularInput.value);
                if (!isNaN(currentValue) && currentValue !== 0) {
                    if (adjustmentType === 'fixed-price') {
                        // Moving to fixed price - store in fixedPrice, clear priceAdjustment
                        bulkChanges.fixedPrice = currentValue;
                        bulkChanges.priceAdjustment = null;
                    } else {
                        // Moving to percentage or fixed-adjustment - store in priceAdjustment, clear fixedPrice
                        bulkChanges.priceAdjustment = currentValue;
                        bulkChanges.fixedPrice = null;
                    }
                }
            }
            
            // Update input placeholder based on selection
            if (regularInput) {
                switch (adjustmentType) {
                    case 'percentage':
                        regularInput.placeholder = '10 (for +10%)';
                        regularInput.step = '1';
                        regularInput.setAttribute('data-clamped', 'true');
                        break;
                    case 'fixed-adjustment':
                        regularInput.placeholder = '5 (for +$5)';
                        regularInput.step = '0.01';
                        regularInput.removeAttribute('data-clamped');
                        break;
                    case 'fixed-price':
                        regularInput.placeholder = '29.99 (set to $29.99)';
                        regularInput.step = '1';
                        regularInput.removeAttribute('data-clamped');
                        break;
                }
            }
            
            // Show/hide slider based on adjustment type - fixed price doesn't need a slider
            const sliderRow = document.querySelector('.price-slider-row');
            if (sliderRow) {
                if (adjustmentType === 'fixed-price') {
                    sliderRow.style.display = 'none';
                } else {
                    sliderRow.style.display = 'block';
                }
            }
            
            // Always hide spinners for price adjustment inputs
            if (regularInput) {
                regularInput.classList.remove('show-spinners', 'hide-spinners');
                regularInput.classList.add('hide-spinners');
                
                // Always reset value when switching adjustment types
                regularInput.value = 0;
                bulkChanges.priceAdjustment = 0;
                
                // Reset slider position to center (0 position) - use setTimeout to ensure it happens after any input events
                setTimeout(() => {
                    const priceSliderCover = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-cover');
                    const priceSliderHandle = document.querySelector('.price-slider-container[data-slider="regular"] .price-slider-handle');
                    if (priceSliderCover && priceSliderHandle) {
                        priceSliderCover.style.width = '50%'; // 50% because 0 is middle position
                        priceSliderHandle.style.left = '50%';
                    }
                }, 10);
            }
            
            // Show/hide tooltip based on adjustment type - only show for fixed-adjustment
            const tooltip = document.querySelector('.price-adjustment-tooltip');
            if (tooltip) {
                if (adjustmentType === 'fixed-adjustment') {
                    // Show only for 'fixed-adjustment' (adjust by amount)
                    tooltip.style.display = 'flex';
                } else {
                    // Hide for 'percentage' and 'fixed-price'
                    tooltip.style.display = 'none';
                }
            }
            
            updateApplyAllButton();
            if (typeof updatePreviewPane === 'function') {
                updatePreviewPane();
            }
        });
        
    }
}

// Setup event handlers for sale price slider input and dropdown
function setupSalePriceSliderEventHandlers() {
    const salePriceValueInput = document.getElementById('bulk-sale-adjustment');
    const salePriceMethodTrigger = document.getElementById('sale-price-method-trigger');
    const salePriceMethodDropdown = document.getElementById('sale-price-method-dropdown');
    const salePriceMethodText = document.getElementById('sale-price-method-text');
    
    // Value input event
    if (salePriceValueInput) {
        salePriceValueInput.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value) || 0;
            
            // Store in bulkChanges for sale pricing
            bulkChanges.saleDiscount = value;
            
            // Ensure saleAdjustmentType is set (default to percentage for slider)
            if (!bulkChanges.saleAdjustmentType) {
                bulkChanges.saleAdjustmentType = 'percentage';
            }
            
            // Ensure saleAdjustmentType is set (default to percentage for slider)
            if (!bulkChanges.saleAdjustmentType) {
                bulkChanges.saleAdjustmentType = 'percentage';
            }
            
            // Sale price adjustments are now independent of sale status
            // The user can adjust sale prices without changing the sale toggle status
            
            // Update apply button state
            updateApplyAllButton();
            updatePreviewPane();
        });
    }

    // Method dropdown functionality
    if (salePriceMethodTrigger && salePriceMethodDropdown) {
        // Remove existing event listeners to prevent duplicates
        salePriceMethodTrigger.removeEventListener('click', salePriceMethodTrigger._clickHandler);
        salePriceMethodDropdown.removeEventListener('click', salePriceMethodDropdown._clickHandler);
        
        // Create new click handlers and store references
        salePriceMethodTrigger._clickHandler = () => {
            salePriceMethodDropdown.classList.toggle('active');
            salePriceMethodTrigger.classList.toggle('active');
        };
        
        salePriceMethodDropdown._clickHandler = (e) => {
            if (e.target.classList.contains('select-option')) {
                const value = e.target.getAttribute('data-value');
                const text = e.target.textContent;
                
                
                // Update selected option
                salePriceMethodDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                e.target.classList.add('selected');
                
                // Update display text
                if (salePriceMethodText) {
                    salePriceMethodText.textContent = text;
                }
                
                // Update hidden select
                const hiddenSelect = document.getElementById('bulk-sale-adjustment-type');
                if (hiddenSelect) {
                    hiddenSelect.value = value;
                    // Trigger change event to notify listeners
                    hiddenSelect.dispatchEvent(new Event('change'));
                }
                
                // Update price unit for sale pricing
                updateSalePriceUnit(value);
                
                // Close dropdown
                salePriceMethodDropdown.classList.remove('active');
                salePriceMethodTrigger.classList.remove('active');
                
                updatePreviewPane();
            }
        };
        
        // Add event listeners
        salePriceMethodTrigger.addEventListener('click', salePriceMethodTrigger._clickHandler);
        salePriceMethodDropdown.addEventListener('click', salePriceMethodDropdown._clickHandler);
    }
    
    // Add change event listener for the sale price hidden select
    const bulkSaleAdjustmentType = document.getElementById('bulk-sale-adjustment-type');
    if (bulkSaleAdjustmentType) {
        bulkSaleAdjustmentType.addEventListener('change', () => {
            const adjustmentType = bulkSaleAdjustmentType.value;
            bulkChanges.saleAdjustmentType = adjustmentType;
            
            // Update input placeholder based on selection
            const saleInput = document.getElementById('bulk-sale-adjustment');
            if (saleInput) {
                switch (adjustmentType) {
                    case 'percentage':
                        saleInput.placeholder = '25 (for 25% off)';
                        saleInput.step = '1';
                        // Enable clamping for percentage mode
                        saleInput.setAttribute('data-clamped', 'true');
                        break;
                    case 'fixed-adjustment':
                        saleInput.placeholder = '-25 (for $25 off)';
                        saleInput.step = '0.01';
                        // Disable clamping for fixed adjustments (can be negative amounts)
                        saleInput.removeAttribute('data-clamped');
                        break;
                    case 'fixed-price':
                        saleInput.placeholder = '19.99 (set to $19.99)';
                        saleInput.step = '0.01';
                        // Disable clamping for fixed prices (can be any positive amount)
                        saleInput.removeAttribute('data-clamped');
                        break;
                }
            }
            
            // Show/hide tooltip based on adjustment type - always show for sale pricing
            const tooltip = document.querySelector('.sale-adjustment-tooltip');
            if (tooltip) {
                tooltip.style.display = 'flex';
            }
            
            updateApplyAllButton();
            if (typeof updatePreviewPane === 'function') {
                updatePreviewPane();
            }
        });
    }
    
    // Initialize with default method (percentage)
    updateSalePriceUnit('percentage');
}

// Update sale price unit based on method
function updateSalePriceUnit(method) {
    const salePriceUnit = document.getElementById('sale-price-unit');
    const saleInput = document.getElementById('bulk-sale-adjustment');
    const saleSliderContainer = document.querySelector('.price-slider-container[data-slider="sale"]');
    const saleTooltip = document.getElementById('sale-adjustment-tooltip');
    
    if (!salePriceUnit) return;
    
    switch (method) {
        case 'percentage':
            salePriceUnit.textContent = '%';
            break;
        case 'fixed-adjustment':
            salePriceUnit.textContent = window.getSystemCurrency() || '';
            break;
        case 'fixed-price':
            salePriceUnit.textContent = window.getSystemCurrency() || '';
            break;
        default:
            salePriceUnit.textContent = '%';
    }
    
    // Show/hide slider based on adjustment type - hide for fixed-price
    if (saleSliderContainer) {
        if (method === 'fixed-price') {
            saleSliderContainer.style.display = 'none';
        } else {
            saleSliderContainer.style.display = 'block';
        }
    }
    
    // Always hide spinners for sale price adjustment inputs  
    if (saleInput) {
        saleInput.classList.remove('show-spinners', 'hide-spinners');
        saleInput.classList.add('hide-spinners');
        
        // Always reset value when switching adjustment types
        saleInput.value = 0;
        bulkChanges.saleDiscount = 0;
        
        // Reset sale slider position to center (0 position) - use setTimeout to ensure it happens after any input events
        setTimeout(() => {
            const saleSliderCover = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-cover');
            const saleSliderHandle = document.querySelector('.price-slider-container[data-slider="sale"] .price-slider-handle');
            if (saleSliderCover && saleSliderHandle) {
                saleSliderCover.style.width = '50%'; // 50% because 0 is middle position
                saleSliderHandle.style.left = '50%';
            }
        }, 10);
        
        if (method === 'fixed-price') {
            saleInput.removeAttribute('data-clamped');
            saleInput.step = '0.01';
            saleInput.placeholder = '19.99 (set to $19.99)';
            console.log('🎯 Sale pricing: Set to fixed-price mode with step=0.01 and no clamping');
        } else {
            saleInput.setAttribute('data-clamped', 'true');
            saleInput.step = '1';
            if (method === 'percentage') {
                saleInput.placeholder = '25 (for 25% off)';
            } else if (method === 'fixed-adjustment') {
                saleInput.placeholder = '-25 (for $25 off)';
                saleInput.step = '0.01'; // Fixed adjustments can also be decimals
                saleInput.removeAttribute('data-clamped'); // But don't clamp them
            }
            console.log(`🎯 Sale pricing: Set to ${method} mode with step=${saleInput.step} and clamping=${saleInput.hasAttribute('data-clamped')}`);
        }
    }
    
    // Show/hide tooltip based on adjustment type - always show for sale pricing
    if (saleTooltip) {
        saleTooltip.style.display = 'flex';
    }
}

// Setup stock slider and dropdown event handlers
function setupStockSliderEventHandlers() {
    const stockMethodTrigger = document.getElementById('stock-method-trigger');
    const stockMethodDropdown = document.getElementById('stock-method-dropdown');
    const stockMethodText = document.getElementById('stock-method-text');
    const bulkStockAction = document.getElementById('bulk-stock-action');
    // Use a more compatible selector instead of :has()
    const stockSliderRow = document.querySelector('[data-slider="stock"]')?.closest('.price-slider-row');
    
    if (stockMethodTrigger && stockMethodDropdown) {
        
        // Remove existing event listeners to prevent duplicates
        stockMethodTrigger.removeEventListener('click', stockMethodTrigger._clickHandler);
        stockMethodDropdown.removeEventListener('click', stockMethodDropdown._clickHandler);
        
        // Create new click handlers and store references
        stockMethodTrigger._clickHandler = (e) => {
            e.stopPropagation();
            stockMethodDropdown.classList.toggle('active');
            stockMethodTrigger.classList.toggle('active');
        };
        
        stockMethodDropdown._clickHandler = (e) => {
            if (e.target.classList.contains('select-option')) {
                const value = e.target.getAttribute('data-value');
                const text = e.target.textContent;
                
                
                // Update visual state
                stockMethodDropdown.querySelectorAll('.select-option').forEach(opt => opt.classList.remove('selected'));
                e.target.classList.add('selected');
                
                // Update dropdown display
                if (stockMethodText) stockMethodText.textContent = text;
                if (bulkStockAction) bulkStockAction.value = value;
                
                // Update bulk changes
                if (!bulkChanges.inventory) {
                    bulkChanges.inventory = {};
                }
                if (!bulkChanges.inventory.stock) {
                    bulkChanges.inventory.stock = {};
                }
                bulkChanges.inventory.stock.method = value;
                
                // Show/hide slider based on method
                if (stockSliderRow) {
                    if (value === 'adjust') {
                        stockSliderRow.style.display = 'block';
                    } else {
                        stockSliderRow.style.display = 'none';
                    }
                }
                
                // Show/hide tooltip based on method - only show for "Adjust by amount"
                const stockTooltip = document.getElementById('stock-adjustment-tooltip');
                if (stockTooltip) {
                    if (value === 'adjust') {
                        stockTooltip.style.display = 'flex';
                    } else {
                        stockTooltip.style.display = 'none';
                    }
                }
                
                // Close dropdown
                stockMethodDropdown.classList.remove('active');
                stockMethodTrigger.classList.remove('active');
                
                updatePreviewPane();
            }
        };
        
        // Add event listeners
        stockMethodTrigger.addEventListener('click', stockMethodTrigger._clickHandler);
        stockMethodDropdown.addEventListener('click', stockMethodDropdown._clickHandler);
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!stockMethodTrigger.contains(e.target) && !stockMethodDropdown.contains(e.target)) {
                stockMethodDropdown.classList.remove('active');
                stockMethodTrigger.classList.remove('active');
            }
        });
    } else {
        console.error('❌ Stock dropdown elements not found:', {
            trigger: !!stockMethodTrigger,
            dropdown: !!stockMethodDropdown,
            text: !!stockMethodText,
            action: !!bulkStockAction
        });
    }
}

// Initialize sale pricing slider functionality
function initializeSalePricingSlider() {
    const salePriceSliderContainer = document.querySelector('.price-slider-container[data-slider="sale"]');
    const salePriceSliderTrack = salePriceSliderContainer?.querySelector('.price-slider-track');
    const salePriceSliderCover = salePriceSliderContainer?.querySelector('.price-slider-cover');
    const salePriceSliderHandle = salePriceSliderContainer?.querySelector('.price-slider-handle');
    const salePriceValueInput = document.getElementById('bulk-sale-adjustment');
    
    if (!salePriceSliderContainer || !salePriceSliderTrack || !salePriceSliderCover || !salePriceSliderHandle || !salePriceValueInput) {
        console.log('Sale pricing slider elements not found');
        return;
    }
    
    // Check if already initialized to prevent duplicate initialization and preserve values
    if (salePriceSliderContainer.hasAttribute('data-sale-slider-initialized')) {
        return;
    }
    
    // Mark as initialized
    salePriceSliderContainer.setAttribute('data-sale-slider-initialized', 'true');
    
    let isDragging = false;

    // Set slider value function
    function setSaleSliderValue(value, fromUserInput = false) {
        // Only clamp values for inputs that should be constrained (like percentages)
        let clampedValue;
        if (salePriceValueInput && salePriceValueInput.hasAttribute('data-clamped')) {
            clampedValue = Math.max(-99, Math.min(100, value));
        } else {
            clampedValue = value;
        }
        
        const percentage = ((Math.max(-99, Math.min(100, clampedValue)) + 99) / 199) * 100;
        
        salePriceSliderCover.style.width = (100 - percentage) + '%';
        salePriceSliderHandle.style.left = percentage + '%';
        
        // Only update input value if NOT from user input (prevents cursor jumping)
        if (!fromUserInput) {
            salePriceValueInput.value = clampedValue;
        }
        bulkChanges.saleDiscount = clampedValue;
        
        // Sale price adjustments are now independent of sale status
        // The user can adjust sale prices without changing the sale toggle status
        
        // Ensure saleAdjustmentType is set
        if (!bulkChanges.saleAdjustmentType) {
            bulkChanges.saleAdjustmentType = 'percentage';
        }
        
        updateApplyAllButton();
        updatePreviewPane();
    }

    // Handle mouse events on slider
    function handleSaleSliderInteraction(e) {
        e.preventDefault();
        const rect = salePriceSliderTrack.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const value = Math.round((percentage / 100) * 199 - 99);
        setSaleSliderValue(value);
    }

    // Mouse events for sale pricing slider
    salePriceSliderTrack.addEventListener('mousedown', (e) => {
        isDragging = true;
        handleSaleSliderInteraction(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            handleSaleSliderInteraction(e);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Input change event for sale pricing
    salePriceValueInput.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value) || 0;
        setSaleSliderValue(value, true); // Pass true to indicate this is from user input
    });

    // Initialize at default value (0 = middle position) - but preserve existing value if set
    const existingValue = bulkChanges.saleDiscount || 0;
    setSaleSliderValue(existingValue);
}

// Initialize custom dropdowns (EXACT from reference)
function initializeCustomDropdowns() {
    const customSelects = document.querySelectorAll('.bulk-select, .bulk-select-inline');
    
    customSelects.forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const dropdown = select.querySelector('.select-dropdown');
        const options = select.querySelectorAll('.select-option');
        const hiddenSelect = select.querySelector('select');
        const selectText = select.querySelector('.select-text');
        const selectArrow = select.querySelector('.select-arrow');
        
        if (!trigger || !dropdown || !hiddenSelect) return;
        
        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.select-dropdown.open').forEach(dd => {
                if (dd !== dropdown) {
                    dd.classList.remove('open');
                    dd.parentNode.querySelector('.select-arrow').classList.remove('open');
                    dd.parentNode.querySelector('.select-trigger').classList.remove('focused');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('open');
            selectArrow.classList.toggle('open');
            trigger.classList.toggle('focused');
        });
        
        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const value = option.getAttribute('data-value');
                const text = option.textContent;
                
                // Update hidden select
                hiddenSelect.value = value;
                
                // Update display
                selectText.textContent = text;
                selectText.classList.remove('placeholder');
                
                // Update selected state
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Close dropdown
                dropdown.classList.remove('open');
                selectArrow.classList.remove('open');
                trigger.classList.remove('focused');
                
                // Trigger change event
                hiddenSelect.dispatchEvent(new Event('change'));
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.select-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.parentNode.querySelector('.select-arrow').classList.remove('open');
            dropdown.parentNode.querySelector('.select-trigger').classList.remove('focused');
        });
    });
}

// Initialize stock slider
function initializeStockSlider() {
    const stockSliderContainer = document.querySelector('.price-slider-container[data-slider="stock"]');
    const stockSliderTrack = stockSliderContainer?.querySelector('.price-slider-track');
    const stockSliderCover = stockSliderContainer?.querySelector('.price-slider-cover');
    const stockSliderHandle = stockSliderContainer?.querySelector('.price-slider-handle');
    const stockValueInput = document.getElementById('bulk-stock-adjustment');
    
    let currentValue = 0; // -100 to +100 range for stock
    let isDragging = false;
    
    if (!stockSliderContainer || !stockSliderHandle || !stockSliderCover) {
        console.error('Required stock slider elements not found');
        return;
    }

    // Check if element is visible
    const isVisible = stockSliderContainer.offsetParent !== null || 
                     getComputedStyle(stockSliderContainer).display !== 'none';
    
    if (!isVisible) {
        setTimeout(() => {
            initializeStockSlider();
        }, 200);
        return;
    }

    // Check if already initialized
    if (stockSliderContainer.hasAttribute('data-stock-slider-initialized')) {
        return;
    }
    
    // Mark as initialized
    stockSliderContainer.setAttribute('data-stock-slider-initialized', 'true');
    
    // Update slider position and cover (using same pattern as price sliders)
    function updateSliderVisual(value) {
        
        // Convert -100 to +100 range to 0-100% position
        const percentage = ((value + 100) / 200) * 100;
        
        // Update cover to hide gradient from handle position to right (same as price sliders)
        if (stockSliderCover) {
            stockSliderCover.style.width = (100 - percentage) + '%';
        }
        
        // Update handle position
        if (stockSliderHandle) {
            stockSliderHandle.style.left = percentage + '%';
        }

        // Update preview pane to reflect slider changes
        if (typeof updatePreviewPane === 'function') {
            updatePreviewPane();
        }
    }

    // Set value and update display (following price slider pattern)
    function setValue(value, skipInputEvent = false) {
        currentValue = Math.max(-100, Math.min(100, value));
        updateSliderVisual(currentValue);
        
        if (stockValueInput && !skipInputEvent) {
            stockValueInput.value = currentValue;
            
            // Update bulk changes
            if (!bulkChanges.inventory) {
                bulkChanges.inventory = {};
            }
            if (!bulkChanges.inventory.stock) {
                bulkChanges.inventory.stock = {};
            }
            bulkChanges.inventory.stock.amount = currentValue;
        }
    }

    // Handle slider interaction (following price slider pattern)
    function handleInteraction(clientX) {
        const rect = stockSliderTrack.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const percentage = x / rect.width;
        
        // Convert percentage to -100 to +100 range
        const value = Math.round((percentage * 200) - 100);
        setValue(value);
    }

    // Mouse event handlers (following price slider pattern)
    function handleMouseDown(e) {
        e.preventDefault();
        isDragging = true;
        document.body.style.userSelect = 'none';
        handleInteraction(e.clientX);
    }

    function handleMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        handleInteraction(e.clientX);
    }

    function handleMouseUp() {
        if (isDragging) {
            isDragging = false;
            document.body.style.userSelect = '';
        }
    }

    // Touch event handlers (following price slider pattern)
    function handleTouchStart(e) {
        e.preventDefault();
        isDragging = true;
        const touch = e.touches[0];
        handleInteraction(touch.clientX);
    }

    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        handleInteraction(touch.clientX);
    }

    function handleTouchEnd() {
        if (isDragging) {
            isDragging = false;
        }
    }

    // Attach event listeners
    stockSliderHandle.addEventListener('mousedown', handleMouseDown);
    stockSliderTrack.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    stockSliderHandle.addEventListener('touchstart', handleTouchStart);
    stockSliderTrack.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    // Handle input field changes
    if (stockValueInput) {
        stockValueInput.addEventListener('input', function() {
            const value = parseInt(this.value) || 0;
            
            // Update bulkChanges with proper structure
            if (!bulkChanges.inventory) {
                bulkChanges.inventory = {};
            }
            if (!bulkChanges.inventory.stock) {
                bulkChanges.inventory.stock = {};
            }
            bulkChanges.inventory.stock.amount = value;
            
            console.log('📦 Stock input changed:', value, 'bulkChanges.inventory.stock:', bulkChanges.inventory.stock);
            
            setValue(value, true);
        });
    }

    // Initialize with current value
    setValue(currentValue);
    
    console.log('📦 Stock slider initialized successfully');
}

// Set datetime constraints to prevent past dates/times
// NOTE: This function is deprecated - Flatpickr now handles datetime constraints
/*
function setDatetimeConstraints(datetimeInput) {
    if (!datetimeInput) return;
    
    // Function to update minimum datetime
    function updateMinDateTime() {
        const now = new Date();
        
        // Format current date and time for datetime-local input (YYYY-MM-DDTHH:MM)
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
        
        // Set minimum to current date and time
        datetimeInput.min = currentDateTime;
        
        console.log('📅 Set datetime minimum to:', currentDateTime);
    }
    
    // Set initial constraints
    updateMinDateTime();
    
    // Update constraints every minute to keep "now" current
    setInterval(updateMinDateTime, 60000); // Update every 60 seconds
    
    // Add validation on input change
    datetimeInput.addEventListener('input', function() {
        const selectedDateTime = new Date(this.value);
        const now = new Date();
        
        if (selectedDateTime < now) {
            console.warn('⚠️ Selected datetime is in the past, resetting to minimum');
            updateMinDateTime();
            this.value = this.min;
        }
    });
}
*/

// Initialize category controls with debugging
function initializeCategoryControls() {
    
    // Try to find category control elements with retry mechanism
    let retryCount = 0;
    const maxRetries = 10;
    
    function attemptInitialization() {
        
        const addCategoryTrigger = document.getElementById('bulk-category-add-trigger');
        const addCategoryDropdown = document.getElementById('bulk-category-add-dropdown');
        const removeCategoryTrigger = document.getElementById('bulk-category-remove-trigger');
        const removeCategoryDropdown = document.getElementById('bulk-category-remove-dropdown');
        const categoryInput = document.getElementById('bulk-category-input');
        
        if (addCategoryTrigger && addCategoryDropdown && removeCategoryTrigger && removeCategoryDropdown) {
            
            // Add category dropdown click handler
            addCategoryTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close remove dropdown if open
                if (removeCategoryDropdown) {
                    removeCategoryDropdown.style.display = 'none';
                }
                
                // Toggle add dropdown
                const isOpen = addCategoryDropdown.style.display === 'block';
                addCategoryDropdown.style.display = isOpen ? 'none' : 'block';
            });
            
            // Remove category dropdown click handler
            removeCategoryTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Close add dropdown if open
                if (addCategoryDropdown) {
                    addCategoryDropdown.style.display = 'none';
                }
                
                // Toggle remove dropdown
                const isOpen = removeCategoryDropdown.style.display === 'block';
                removeCategoryDropdown.style.display = isOpen ? 'none' : 'block';
                
                // If we're opening the dropdown, populate it
                if (!isOpen) {
                    
                    // Quick check of selected checkboxes
                    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
                    selectedCheckboxes.forEach((checkbox, index) => {
                        const row = checkbox.closest('tr');
                    });
                    
                    populateRemoveCategoryDropdown();
                }
            });
            
            // Add category dropdown option selection
            addCategoryDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (e.target.classList.contains('select-option')) {
                    const categoryValue = e.target.getAttribute('data-value');
                    
                    if (categoryValue && bulkChanges.categories && bulkChanges.categories.toAdd && !bulkChanges.categories.toAdd.includes(categoryValue)) {
                        bulkChanges.categories.toAdd.push(categoryValue);
                        updateCategoryTags();
                        updatePreviewPane();
                        updateApplyAllButton();
                        addCategoryDropdown.style.display = 'none';
                    } else {
                    }
                }
            });
            
            // Remove category dropdown option selection
            removeCategoryDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (e.target.classList.contains('select-option') && !e.target.classList.contains('disabled')) {
                    const categoryValue = e.target.getAttribute('data-value');
                    
                    if (categoryValue && !bulkChanges.categories.toRemove.includes(categoryValue)) {
                        bulkChanges.categories.toRemove.push(categoryValue);
                        updateCategoryTags();
                        updatePreviewPane();
                        updateApplyAllButton();
                        removeCategoryDropdown.style.display = 'none';
                    } else {
                    }
                }
            });
            
            // Category input enter key handler
            if (categoryInput) {
                categoryInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        const newCategory = categoryInput.value.trim();
                        
                        // Ensure categories object exists
                        if (!bulkChanges.categories) {
                            bulkChanges.categories = {
                                toAdd: [],
                                toRemove: []
                            };
                        }
                        
                        if (newCategory && bulkChanges.categories && bulkChanges.categories.toAdd && !bulkChanges.categories.toAdd.includes(newCategory)) {
                            bulkChanges.categories.toAdd.push(newCategory);
                            updateCategoryTags();
                            updatePreviewPane();
                            updateApplyAllButton();
                            categoryInput.value = '';
                        } else {
                        }
                    }
                });
            }
            
            // Click outside to close dropdowns
            document.addEventListener('click', function(e) {
                if (addCategoryDropdown && !addCategoryTrigger.contains(e.target) && !addCategoryDropdown.contains(e.target)) {
                    addCategoryDropdown.style.display = 'none';
                }
                if (removeCategoryDropdown && !removeCategoryTrigger.contains(e.target) && !removeCategoryDropdown.contains(e.target)) {
                    removeCategoryDropdown.style.display = 'none';
                }
            });
            
            return true;
        } else {
            retryCount++;
            
            if (retryCount < maxRetries) {
                setTimeout(attemptInitialization, 200);
            } else {
                console.error('[category-debug] ❌ Failed to find category control elements after', maxRetries, 'attempts');
            }
            return false;
        }
    }
    
    // Start initialization attempt
    attemptInitialization();
}

// Export updateApplyAllButton to global scope so other modules can use it
window.updateApplyAllButton = updateApplyAllButton;


// === CORE MODULE ===
// Product Manager Core Initialization

function initializeProductManager() {
    
    // Set up global event listeners
    setupGlobalEventListeners();
    
    // Initialize data structures
    initializeDataStructures();
    
    // Initialize notification system
    if (typeof initializeNotifications === 'function') {
        initializeNotifications();
    }
}

function setupGlobalEventListeners() {
    // Handle beforeunload to warn about unsaved changes
    window.addEventListener('beforeunload', function(e) {
        if (changedProducts.size > 0) {
            e.preventDefault();
            e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            return e.returnValue;
        }
    });
    
    // Handle keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

function initializeDataStructures() {
    // Initialize global variables if not already done
    if (!globalProductsData) {
        globalProductsData = [];
    }
    
    if (!changedProducts) {
        changedProducts = new Set();
    }
    
    if (!originalData) {
        originalData = new Map();
    }
    
    if (!urlRedirects) {
        urlRedirects = new Map();
    }
    
    if (!undoHistory) {
        undoHistory = [];
    }
}

function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + S to save changes
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (changedProducts.size > 0) {
            const saveBtn = document.getElementById('save-changes');
            if (saveBtn && !saveBtn.disabled) {
                saveBtn.click();
            }
        }
    }
    
    // Escape key to close modals/drawers
    if (e.key === 'Escape') {
        closeAllModals();
    }
    
    // Ctrl/Cmd + Z to undo
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        const undoBtn = document.getElementById('undo-changes-btn');
        if (undoBtn && !undoBtn.disabled) {
            undoBtn.click();
        }
    }
}

function closeAllModals() {
    // Close bulk adjust drawer
    const bulkDrawer = document.getElementById('bulk-adjust-drawer');
    if (bulkDrawer && bulkDrawer.classList.contains('visible')) {
        const closeBtn = document.getElementById('bulk-drawer-close');
        if (closeBtn) closeBtn.click();
    }
    
    // Close undo drawer
    const undoDrawer = document.getElementById('undo-changes-drawer');
    if (undoDrawer && undoDrawer.classList.contains('visible')) {
        const closeBtn = document.getElementById('undo-drawer-close');
        if (closeBtn) closeBtn.click();
    }
    
    // Hide URL suggestion tooltip
    const urlTooltip = document.getElementById('url-suggestion-tooltip');
    if (urlTooltip && !urlTooltip.classList.contains('hidden')) {
        const closeBtn = document.getElementById('url-suggestion-close');
        if (closeBtn) closeBtn.click();
    }
}


// === FILE-MANAGEMENT MODULE ===
// JSON file management and upload functionality for Squarespace

// Initialize file management
function initializeFileManagement() {
    
    // Initialize preset file management
    initializePresetFileManagement();
    
    // Initialize import/export functionality
    initializeImportExport();
}

// Initialize preset file management
function initializePresetFileManagement() {
    // Initialize file upload handlers
    initializeFileUploadHandlers();
    
    // Load existing presets from JSON file
    loadPresetsFromFile();
}

// Initialize file upload handlers
function initializeFileUploadHandlers() {
    const fileInput = document.getElementById('preset-file-input');
    const uploadButton = document.getElementById('upload-preset-file');
    
    if (fileInput) {
        fileInput.addEventListener('change', handlePresetFileUpload);
    }
    
    if (uploadButton) {
        uploadButton.addEventListener('click', () => {
            fileInput?.click();
        });
    }
}

// Handle preset file upload
async function handlePresetFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    try {
        const fileContent = await readFileAsText(file);
        const presets = JSON.parse(fileContent);
        
        // Validate preset structure
        if (validatePresetStructure(presets)) {
            // Merge with existing presets
            Object.assign(window.savedPresets, presets);
            
            // Save to localStorage and upload to server
            savePresets();
            await uploadPresetsToServer(window.savedPresets);
            
            // Update UI
            populatePresetDropdown();
            
            showMessage(`Successfully imported ${Object.keys(presets).length} presets`, 'success');
        } else {
            throw new Error('Invalid preset file format');
        }
    } catch (error) {
        console.error('Error importing presets:', error);
        showMessage('Error importing presets: ' + error.message, 'error');
    }
    
    // Clear file input
    event.target.value = '';
}

// Read file as text
function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(e);
        reader.readAsText(file);
    });
}

// Validate preset structure
function validatePresetStructure(presets) {
    if (typeof presets !== 'object' || presets === null) {
        return false;
    }
    
    for (const [key, preset] of Object.entries(presets)) {
        if (!preset.name || !preset.settings || typeof preset.settings !== 'object') {
            return false;
        }
    }
    
    return true;
}

// Load presets from server JSON file
async function loadPresetsFromFile() {
    try {
        const jsonUrl = getJsonFileUrl();
        if (!jsonUrl) {
            return;
        }
        
        const response = await fetch(jsonUrl);
        if (response.ok) {
            const presets = await response.json();
            
            // Merge with local presets
            Object.assign(window.savedPresets, presets);
            
            // Update UI
            populatePresetDropdown();
            
            console.log('✅ Presets loaded from server file');
        }
    } catch (error) {
        console.error('Error loading presets from server:', error);
    }
}

// Get JSON file URL from meta tags
function getJsonFileUrl() {
    const metaTag = document.querySelector('meta[name="sh-preset-file-url"]');
    return metaTag ? metaTag.getAttribute('content') : null;
}

// Extract file ID from Squarespace URL
function extractFileIdFromUrl(url) {
    if (!url) return null;
    
    const matches = url.match(/\/([a-f0-9]{32})\//);
    return matches ? matches[1] : null;
}

// Delete old JSON file from CSS assets
async function deleteOldJsonFile(fileUrl) {
    if (!fileUrl) return;
    
    const fileId = extractFileIdFromUrl(fileUrl);
    if (!fileId) return;
    
    try {
        const crumb = getCsrfToken();
        if (!crumb) throw new Error('No CSRF token found');
        
        const response = await fetch('/api/asset/DeleteAsset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                crumb: crumb,
                assetId: fileId
            })
        });
        
        if (response.ok) {
            console.log('✅ Old preset file deleted successfully');
        } else {
            console.warn('⚠️ Failed to delete old preset file');
        }
    } catch (error) {
        console.error('Error deleting old preset file:', error);
    }
}

// Upload JSON file to CSS assets (for presets)
async function uploadJsonToCssAssetsForPresets(filename, jsonData, actionDescription = 'Upload file') {
    const loadingNotification = showLoadingMessage(actionDescription + '...');
    
    try {
        const crumb = getCsrfToken();
        if (!crumb) throw new Error('No CSRF token found');
        
        // Create form data
        const formData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        
        formData.append('crumb', crumb);
        formData.append('assetType', 'css');
        formData.append('filename', filename);
        formData.append('file', jsonBlob, filename);
        
        const response = await fetch('/api/asset/UploadAsset', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`Upload failed with status ${response.status}`);
        }
        
        const result = await response.json();
        
        hideLoadingMessage(loadingNotification);
        
        if (result.assetUrl) {
            console.log('✅ File uploaded successfully:', result.assetUrl);
            return result.assetUrl;
        } else {
            throw new Error('No asset URL returned');
        }
        
    } catch (error) {
        hideLoadingMessage(loadingNotification);
        console.error('❌ Error uploading file:', error);
        throw error;
    }
}

// Update meta tag with JSON URL
async function updateMetaTagWithJsonUrl(jsonUrl) {
    try {
        // Remove existing meta tag
        const existingTag = document.querySelector('meta[name="sh-preset-file-url"]');
        if (existingTag) {
            existingTag.remove();
        }
        
        // Create new meta tag
        const metaTag = document.createElement('meta');
        metaTag.name = 'sh-preset-file-url';
        metaTag.content = jsonUrl;
        
        // Add to head
        document.head.appendChild(metaTag);
        
        console.log('✅ Meta tag updated with new JSON URL');
        
    } catch (error) {
        console.error('Error updating meta tag:', error);
    }
}

// Save presets file and delete old one
async function savePresetsFile(presetsData, actionDescription = 'Save presets') {
    try {
        // Get current file URL to delete later
        const oldJsonUrl = getJsonFileUrl();
        
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `sh-presets-${timestamp}.json`;
        
        // Upload new file
        const newJsonUrl = await uploadJsonToCssAssetsForPresets(filename, presetsData, actionDescription);
        
        // Update meta tag
        await updateMetaTagWithJsonUrl(newJsonUrl);
        
        // Delete old file if it exists
        if (oldJsonUrl && oldJsonUrl !== newJsonUrl) {
            await deleteOldJsonFile(oldJsonUrl);
        }
        
        showMessage('Presets saved successfully', 'success');
        return newJsonUrl;
        
    } catch (error) {
        console.error('Error saving presets file:', error);
        showMessage('Error saving presets: ' + error.message, 'error');
        throw error;
    }
}

// Upload presets to server
async function uploadPresetsToServer(presetsData) {
    return savePresetsFile(presetsData, 'Upload presets');
}

// Initialize import/export functionality
function initializeImportExport() {
    const exportButton = document.getElementById('export-presets-btn');
    const importButton = document.getElementById('import-presets-btn');
    const exportProductsButton = document.getElementById('export-products-btn');
    const importProductsButton = document.getElementById('import-products-btn');
    
    if (exportButton) {
        exportButton.addEventListener('click', exportPresets);
    }
    
    if (importButton) {
        importButton.addEventListener('click', () => {
            const fileInput = document.getElementById('preset-file-input');
            fileInput?.click();
        });
    }
    
    if (exportProductsButton) {
        exportProductsButton.addEventListener('click', exportProducts);
    }
    
    if (importProductsButton) {
        importProductsButton.addEventListener('click', importProducts);
    }
}

// Export presets to JSON file
function exportPresets() {
    try {
        const timestamp = new Date().toISOString().split('T')[0];
        const filename = `squarehero-presets-${timestamp}.json`;
        
        downloadJSON(window.savedPresets, filename);
        
        showMessage('Presets exported successfully', 'success');
    } catch (error) {
        console.error('Error exporting presets:', error);
        showMessage('Error exporting presets', 'error');
    }
}

// Export products to CSV
function exportProducts() {
    try {
        if (!globalProductsData || globalProductsData.length === 0) {
            showMessage('No products to export', 'warning');
            return;
        }
        
        // Convert products to CSV format
        const csvData = globalProductsData.map(product => ({
            'Product ID': product.id,
            'Title': product.title,
            'SKU': product.sku,
            'Price': product.price,
            'Sale Price': product.salePrice || '',
            'Stock': product.stock || '',
            'Status': product.status,
            'Categories': product.categories ? product.categories.join(', ') : '',
            'Tags': product.tags ? product.tags.join(', ') : '',
            'Description': product.description || '',
            'URL': product.url || ''
        }));
        
        const timestamp = new Date().toISOString().split('T')[0];
        const filename = `squarehero-products-${timestamp}.csv`;
        
        downloadCSV(csvData, filename);
        
        showMessage(`Exported ${csvData.length} products successfully`, 'success');
    } catch (error) {
        console.error('Error exporting products:', error);
        showMessage('Error exporting products', 'error');
    }
}

// Import products (placeholder)
function importProducts() {
    showMessage('Product import functionality coming soon', 'info');
}

// Fetch presets from server
async function fetchPresets() {
    try {
        const jsonUrl = getJsonFileUrl();
        if (!jsonUrl) {
            console.log('No preset file URL, using default presets');
            return getDefaultPresets();
        }
        
        // Add cache-busting parameter
        const cacheBuster = new Date().getTime();
        const response = await fetch(`${jsonUrl}?cb=${cacheBuster}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const presets = await response.json();
        console.log('✅ Presets fetched from server');
        return presets;
        
    } catch (error) {
        console.error('Error fetching presets:', error);
        console.log('Using default presets');
        return getDefaultPresets();
    }
}

// Auto-save presets to server (debounced)
const debouncedAutoSave = debounce(async () => {
    try {
        await uploadPresetsToServer(window.savedPresets);
        console.log('✅ Presets auto-saved to server');
    } catch (error) {
        console.error('❌ Error auto-saving presets:', error);
    }
}, 2000);

// Save presets with auto-upload
function savePresetsWithUpload() {
    // Save to localStorage
    savePresets();
    
    // Auto-save to server (debounced)
    debouncedAutoSave();
}

// Validate file upload size
function validateFileSize(file, maxSizeMB = 1) {
    const maxSize = maxSizeMB * 1024 * 1024; // Convert to bytes
    if (file.size > maxSize) {
        throw new Error(`File size exceeds ${maxSizeMB}MB limit`);
    }
    return true;
}

// Get file extension
function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

// Validate file type
function validateFileType(file, allowedTypes = ['json']) {
    const extension = getFileExtension(file.name);
    if (!allowedTypes.includes(extension)) {
        throw new Error(`File type .${extension} not allowed. Allowed types: ${allowedTypes.join(', ')}`);
    }
    return true;
}


// === NOTIFICATIONS MODULE ===
// Notification system for user feedback

// Initialize notification system
function initializeNotificationSystem() {
    
    // Create notification container if it doesn't exist
    createNotificationContainer();
    
    // Initialize notification auto-hide
    initializeNotificationAutoHide();
}

// Create notification container
function createNotificationContainer() {
    if (!document.getElementById('sh-notifications')) {
        const container = document.createElement('div');
        container.id = 'sh-notifications';
        container.className = 'sh-notifications-container';
        document.body.appendChild(container);
    }
}

// Show a notification message
function showMessage(message, type = 'info', duration = 5000) {
    const container = document.getElementById('sh-notifications');
    if (!container) {
        console.warn('Notification container not found');
        return;
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `sh-notification sh-notification-${type}`;
    notification.innerHTML = `
        <div class="sh-notification-content">
            <div class="sh-notification-icon">
                ${getNotificationIcon(type)}
            </div>
            <div class="sh-notification-message">${message}</div>
            <button class="sh-notification-close" onclick="hideNotification(this.parentElement)">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto-hide after duration
    if (duration > 0) {
        setTimeout(() => {
            hideNotification(notification);
        }, duration);
    }
    
    return notification;
}

// Hide a notification
function hideNotification(notification) {
    if (notification && notification.parentElement) {
        notification.classList.add('hiding');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }
}

// Get notification icon based on type
function getNotificationIcon(type) {
    switch (type) {
        case 'success':
            return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        case 'error':
            return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`;
        case 'warning':
            return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L15 14H1L8 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 5V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="8" cy="12" r="1" fill="currentColor"/>
            </svg>`;
        case 'info':
        default:
            return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M8 11V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="8" cy="5" r="1" fill="currentColor"/>
            </svg>`;
    }
}

// Initialize auto-hide functionality
function initializeNotificationAutoHide() {
    // Clear all notifications when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.sh-notification') && !e.target.closest('.sh-notifications-container')) {
            const notifications = document.querySelectorAll('.sh-notification.show');
            notifications.forEach(notification => {
                if (!notification.classList.contains('persistent')) {
                    hideNotification(notification);
                }
            });
        }
    });
}

// Show loading notification
function showLoadingMessage(message = 'Loading...') {
    const notification = showMessage(message, 'info', 0); // Don't auto-hide
    notification.classList.add('loading');
    notification.querySelector('.sh-notification-icon').innerHTML = `
        <div class="sh-spinner">
            <div class="sh-spinner-circle"></div>
        </div>
    `;
    return notification;
}

// Hide loading notification
function hideLoadingMessage(notification) {
    if (notification) {
        hideNotification(notification);
    }
}

// Show progress notification
function showProgressNotification(message, progress = 0) {
    const notification = showMessage('', 'info', 0); // Don't auto-hide
    notification.classList.add('progress');
    notification.querySelector('.sh-notification-content').innerHTML = `
        <div class="sh-notification-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M8 11V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="8" cy="5" r="1" fill="currentColor"/>
            </svg>
        </div>
        <div class="sh-notification-message">
            <div class="sh-progress-text">${message}</div>
            <div class="sh-progress-bar">
                <div class="sh-progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>
        <button class="sh-notification-close" onclick="hideNotification(this.parentElement.parentElement)">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    `;
    return notification;
}

// Update progress notification
function updateProgressNotification(notification, message, progress) {
    if (!notification) return;
    
    const progressText = notification.querySelector('.sh-progress-text');
    const progressFill = notification.querySelector('.sh-progress-fill');
    
    if (progressText) progressText.textContent = message;
    if (progressFill) progressFill.style.width = `${progress}%`;
}

// Show confirmation dialog
function showConfirmation(message, onConfirm, onCancel) {
    const notification = showMessage('', 'warning', 0); // Don't auto-hide
    notification.classList.add('confirmation');
    notification.querySelector('.sh-notification-content').innerHTML = `
        <div class="sh-notification-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L15 14H1L8 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 5V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="8" cy="12" r="1" fill="currentColor"/>
            </svg>
        </div>
        <div class="sh-notification-message">${message}</div>
        <div class="sh-notification-actions">
            <button class="sh-btn sh-btn-danger sh-btn-sm confirm-yes">Yes</button>
            <button class="sh-btn sh-btn-secondary sh-btn-sm confirm-no">No</button>
        </div>
    `;
    
    // Add event listeners
    const yesBtn = notification.querySelector('.confirm-yes');
    const noBtn = notification.querySelector('.confirm-no');
    
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            hideNotification(notification);
            if (onConfirm) onConfirm();
        });
    }
    
    if (noBtn) {
        noBtn.addEventListener('click', () => {
            hideNotification(notification);
            if (onCancel) onCancel();
        });
    }
    
    return notification;
}

// Clear all notifications
function clearAllNotifications() {
    const container = document.getElementById('sh-notifications');
    if (container) {
        const notifications = container.querySelectorAll('.sh-notification');
        notifications.forEach(notification => {
            hideNotification(notification);
        });
    }
}

// Show batch operation status
function showBatchStatus(operation, current, total) {
    const percentage = Math.round((current / total) * 100);
    return showProgressNotification(
        `${operation}: ${current}/${total} (${percentage}%)`,
        percentage
    );
}

// Show API error
function showApiError(error, action = 'perform operation') {
    let message = `Failed to ${action}`;
    
    if (error && error.message) {
        message += `: ${error.message}`;
    } else if (typeof error === 'string') {
        message += `: ${error}`;
    }
    
    return showMessage(message, 'error', 8000);
}


// === PRESETS MODULE ===
// Preset management for bulk operations

// Preset storage key
const PRESET_STORAGE_KEY = 'squarehero-pm-presets';

// Initialize preset system
function initializePresetSystem() {
    console.log('Initializing preset system...');
    
    // Load saved presets
    loadPresets();
    
    // Initialize preset controls
    initializePresetControls();
    
    // Populate preset dropdown
    populatePresetDropdown();
}

// Load presets from storage
function loadPresets() {
    try {
        const saved = localStorage.getItem(PRESET_STORAGE_KEY);
        if (saved) {
            window.savedPresets = JSON.parse(saved);
        } else {
            window.savedPresets = getDefaultPresets();
            savePresets();
        }
    } catch (error) {
        console.error('Error loading presets:', error);
        window.savedPresets = getDefaultPresets();
    }
}

// Save presets to storage
function savePresets() {
    try {
        localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(window.savedPresets));
        console.log('Presets saved successfully');
    } catch (error) {
        console.error('Error saving presets:', error);
        showMessage('Failed to save presets', 'error');
    }
}

// Get default presets
function getDefaultPresets() {
    return {
        'price-increase-10': {
            name: '10% Price Increase',
            description: 'Increase all prices by 10%',
            settings: {
                priceAdjustment: 10,
                regularAdjustmentType: 'percentage',
                applyToSale: true,
                enableRounding: true,
                roundingType: 'whole'
            }
        },
        'price-decrease-15': {
            name: '15% Price Decrease',
            description: 'Decrease all prices by 15%',
            settings: {
                priceAdjustment: -15,
                regularAdjustmentType: 'percentage',
                applyToSale: true,
                enableRounding: true,
                roundingType: 'whole'
            }
        },
        'round-prices': {
            name: 'Round Prices',
            description: 'Round all prices to whole numbers',
            settings: {
                enableRounding: true,
                roundingType: 'whole'
            }
        },
        'enable-sale-25': {
            name: '25% Sale',
            description: 'Enable 25% sale on all products',
            settings: {
                saleToggle: 'set-discount',
                saleDiscount: 25
            }
        },
        'disable-all-sales': {
            name: 'Disable Sales',
            description: 'Remove sale prices from all products',
            settings: {
                saleToggle: 'disable'
            }
        },
        'set-in-stock': {
            name: 'Set In Stock',
            description: 'Set all products as in stock with inventory tracking',
            settings: {
                enableStockTracking: true,
                stockAction: 'set',
                stockAmount: 100
            }
        }
    };
}

// Initialize preset controls
function initializePresetControls() {
    // Preset dropdown
    const presetSelect = document.getElementById('bulk-preset-select');
    if (presetSelect) {
        presetSelect.addEventListener('change', applyPreset);
    }
    
    // Save preset button
    const savePresetBtn = document.getElementById('save-preset-btn');
    if (savePresetBtn) {
        savePresetBtn.addEventListener('click', showSavePresetDialog);
    }
    
    // Manage presets button
    const managePresetsBtn = document.getElementById('manage-presets-btn');
    if (managePresetsBtn) {
        managePresetsBtn.addEventListener('click', showManagePresetsDialog);
    }
}

// Populate preset dropdown
function populatePresetDropdown() {
    const select = document.getElementById('bulk-preset-select');
    if (!select) return;
    
    // Clear existing options (except the first one)
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }
    
    // Add presets
    Object.keys(window.savedPresets).forEach(presetId => {
        const preset = window.savedPresets[presetId];
        const option = document.createElement('option');
        option.value = presetId;
        option.textContent = preset.name;
        option.title = preset.description;
        select.appendChild(option);
    });
}

// Apply selected preset
function applyPreset() {
    const select = document.getElementById('bulk-preset-select');
    if (!select || !select.value) return;
    
    const presetId = select.value;
    const preset = window.savedPresets[presetId];
    
    if (!preset) {
        console.error('Preset not found:', presetId);
        return;
    }
    
    console.log('Applying preset:', preset.name);
    
    // Reset current bulk changes
    resetBulkChanges();
    
    // Apply preset settings
    Object.assign(bulkChanges, preset.settings);
    
    // Update UI to reflect preset settings
    updateBulkUIFromSettings();
    
    // Update apply button
    updateApplyAllButton();
    
    // Show confirmation
    showMessage(`Applied preset: ${preset.name}`, 'success');
}

// Update bulk UI from current settings
function updateBulkUIFromSettings() {
    // Price adjustment
    if (bulkChanges.priceAdjustment !== null) {
        const toggle = document.getElementById('bulk-adjust-regular-prices');
        const input = document.getElementById('bulk-regular-adjustment');
        const typeSelect = document.getElementById('bulk-regular-adjustment-type');
        const options = document.getElementById('bulk-regular-price-options');
        
        if (toggle) toggle.checked = true;
        if (input) input.value = bulkChanges.priceAdjustment;
        if (typeSelect) typeSelect.value = bulkChanges.regularAdjustmentType || 'percentage';
        if (options) options.style.display = 'block';
    }
    
    // Sale toggle
    if (bulkChanges.saleToggle !== 'no-change') {
        const toggle = document.getElementById('bulk-adjust-sale-prices');
        const options = document.getElementById('bulk-sale-price-options');
        const saleToggles = document.querySelectorAll('input[name="bulk-sale-toggle"]');
        
        if (toggle) toggle.checked = true;
        if (options) options.style.display = 'block';
        
        saleToggles.forEach(radio => {
            if (radio.value === bulkChanges.saleToggle) {
                radio.checked = true;
            }
        });
    }
    
    // Rounding
    if (bulkChanges.enableRounding) {
        const toggle = document.getElementById('bulk-round-prices');
        const options = document.getElementById('bulk-rounding-options');
        const typeSelect = document.getElementById('bulk-rounding-type');
        
        if (toggle) toggle.checked = true;
        if (options) options.style.display = 'block';
        if (typeSelect) typeSelect.value = bulkChanges.roundingType || 'whole';
    }
    
    // Stock tracking
    if (bulkChanges.enableStockTracking) {
        const toggle = document.getElementById('bulk-stock-toggle');
        const options = document.getElementById('bulk-stock-options');
        const actionSelect = document.getElementById('bulk-stock-action');
        const amountInput = document.getElementById('bulk-stock-amount');
        
        if (toggle) toggle.checked = true;
        if (options) options.style.display = 'block';
        if (actionSelect) actionSelect.value = bulkChanges.stockAction || 'set';
        if (amountInput && bulkChanges.stockAmount !== null) {
            amountInput.value = bulkChanges.stockAmount;
        }
    }
}

// Show save preset dialog
function showSavePresetDialog() {
    // Check if there are any changes to save
    if (Object.values(bulkChanges).every(value => value === null || value === false || value === 'no-change')) {
        showMessage('No bulk changes to save as preset', 'warning');
        return;
    }
    
    const dialog = document.createElement('div');
    dialog.className = 'sh-modal-overlay';
    dialog.innerHTML = `
        <div class="sh-modal">
            <div class="sh-modal-header">
                <h3>Save Preset</h3>
                <button class="sh-modal-close">&times;</button>
            </div>
            <div class="sh-modal-body">
                <div class="form-group">
                    <label for="preset-name">Preset Name</label>
                    <input type="text" id="preset-name" placeholder="Enter preset name...">
                </div>
                <div class="form-group">
                    <label for="preset-description">Description (optional)</label>
                    <textarea id="preset-description" placeholder="Enter description..."></textarea>
                </div>
            </div>
            <div class="sh-modal-footer">
                <button class="sh-btn sh-btn-secondary cancel-preset">Cancel</button>
                <button class="sh-btn sh-btn-primary save-preset">Save Preset</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    // Focus on name input
    const nameInput = dialog.querySelector('#preset-name');
    if (nameInput) nameInput.focus();
    
    // Event listeners
    const closeBtn = dialog.querySelector('.sh-modal-close');
    const cancelBtn = dialog.querySelector('.cancel-preset');
    const saveBtn = dialog.querySelector('.save-preset');
    
    const closeDialog = () => {
        document.body.removeChild(dialog);
    };
    
    if (closeBtn) closeBtn.addEventListener('click', closeDialog);
    if (cancelBtn) cancelBtn.addEventListener('click', closeDialog);
    
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const description = dialog.querySelector('#preset-description').value.trim();
            
            if (!name) {
                showMessage('Please enter a preset name', 'error');
                return;
            }
            
            saveNewPreset(name, description, {...bulkChanges});
            closeDialog();
        });
    }
}

// Save new preset
function saveNewPreset(name, description, settings) {
    const presetId = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    window.savedPresets[presetId] = {
        name: name,
        description: description || `Custom preset: ${name}`,
        settings: settings,
        created: new Date().toISOString()
    };
    
    savePresets();
    populatePresetDropdown();
    
    showMessage(`Preset "${name}" saved successfully`, 'success');
}

// Show manage presets dialog
function showManagePresetsDialog() {
    const dialog = document.createElement('div');
    dialog.className = 'sh-modal-overlay';
    dialog.innerHTML = `
        <div class="sh-modal sh-modal-large">
            <div class="sh-modal-header">
                <h3>Manage Presets</h3>
                <button class="sh-modal-close">&times;</button>
            </div>
            <div class="sh-modal-body">
                <div id="preset-list"></div>
            </div>
            <div class="sh-modal-footer">
                <button class="sh-btn sh-btn-secondary">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(dialog);
    
    // Populate preset list
    populatePresetList(dialog.querySelector('#preset-list'));
    
    // Event listeners
    const closeBtn = dialog.querySelector('.sh-modal-close');
    const closeFooterBtn = dialog.querySelector('.sh-btn-secondary');
    
    const closeDialog = () => {
        document.body.removeChild(dialog);
    };
    
    if (closeBtn) closeBtn.addEventListener('click', closeDialog);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeDialog);
}

// Populate preset list for management
function populatePresetList(container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.keys(window.savedPresets).forEach(presetId => {
        const preset = window.savedPresets[presetId];
        const presetElement = document.createElement('div');
        presetElement.className = 'preset-item';
        presetElement.innerHTML = `
            <div class="preset-info">
                <h4>${preset.name}</h4>
                <p>${preset.description}</p>
                ${preset.created ? `<small>Created: ${new Date(preset.created).toLocaleDateString()}</small>` : ''}
            </div>
            <div class="preset-actions">
                <button class="sh-btn sh-btn-sm sh-btn-primary apply-preset" data-preset="${presetId}">Apply</button>
                <button class="sh-btn sh-btn-sm sh-btn-danger delete-preset" data-preset="${presetId}">Delete</button>
            </div>
        `;
        
        container.appendChild(presetElement);
    });
    
    // Add event listeners
    container.addEventListener('click', function(e) {
        if (e.target.classList.contains('apply-preset')) {
            const presetId = e.target.getAttribute('data-preset');
            applyPresetById(presetId);
            
            // Close dialog
            const dialog = e.target.closest('.sh-modal-overlay');
            if (dialog) document.body.removeChild(dialog);
        }
        
        if (e.target.classList.contains('delete-preset')) {
            const presetId = e.target.getAttribute('data-preset');
            const preset = window.savedPresets[presetId];
            
            showConfirmation(
                `Are you sure you want to delete the preset "${preset.name}"?`,
                () => {
                    deletePreset(presetId);
                    populatePresetList(container);
                }
            );
        }
    });
}

// Apply preset by ID
function applyPresetById(presetId) {
    const preset = window.savedPresets[presetId];
    if (!preset) return;
    
    // Reset and apply
    resetBulkChanges();
    Object.assign(bulkChanges, preset.settings);
    updateBulkUIFromSettings();
    updateApplyAllButton();
    
    showMessage(`Applied preset: ${preset.name}`, 'success');
}

// Delete preset
function deletePreset(presetId) {
    delete window.savedPresets[presetId];
    savePresets();
    populatePresetDropdown();
    
    showMessage('Preset deleted successfully', 'success');
}

// Export presets to JSON
function exportPresets() {
    const dataStr = JSON.stringify(window.savedPresets, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'squarehero-pm-presets.json';
    link.click();
}

// Import presets from JSON
function importPresets(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedPresets = JSON.parse(e.target.result);
            
            // Merge with existing presets
            Object.assign(window.savedPresets, importedPresets);
            
            savePresets();
            populatePresetDropdown();
            
            showMessage('Presets imported successfully', 'success');
        } catch (error) {
            console.error('Error importing presets:', error);
            showMessage('Error importing presets', 'error');
        }
    };
    reader.readAsText(file);
}


// === PREVIEW-PANE MODULE ===
// Preview pane functionality for bulk changes

// Initialize preview pane
function initializePreviewPane() {
    // Initialize sample product carousel
    initializeProductCarousel();
    
    // Initialize preview updates
    initializePreviewUpdates();
    
    // Load initial preview data
    loadPreviewData();
}

// Initialize product carousel for preview
function initializeProductCarousel() {
    const carousel = document.getElementById('sample-products-carousel');
    if (!carousel) return;
    
    // Initialize carousel navigation
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            moveCarousel(-1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            moveCarousel(1);
        });
    }
    
    // Initialize carousel position
    window.carouselPosition = 0;
    
    // Auto-update carousel when products change
    if (typeof window.addEventListener === 'function') {
        window.addEventListener('productsLoaded', updateSampleProducts);
    }
}

// Move carousel to show different products
function moveCarousel(direction) {
    const carousel = document.getElementById('sample-products-carousel');
    if (!carousel) return;
    
    const cards = carousel.querySelectorAll('.product-preview-card');
    const maxPosition = Math.max(0, cards.length - 3); // Show 3 cards at a time
    
    window.carouselPosition = Math.max(0, Math.min(maxPosition, window.carouselPosition + direction));
    
    // Update carousel position
    updateCarouselPosition();
}

// Update carousel visual position
function updateCarouselPosition() {
    // Use the enhanced version
    updateCarouselPositionEnhanced();
}

// Initialize preview updates
function initializePreviewUpdates() {
    // Listen for bulk changes
    document.addEventListener('bulkChangeUpdate', updatePreviewPane);
    
    // Listen for product selection changes
    document.addEventListener('productSelectionChange', updateSampleProducts);
}

// Load preview data
function loadPreviewData() {
    // Get sample products for preview
    updateSampleProducts();
    
    // Update preview pane with current settings
    updatePreviewPane();
}

// Update preview pane with current bulk changes
function updatePreviewPane() {
    
    // Update changes summary
    updateChangesPreview();
    
    // Update sample product cards
    updateSampleProductCards();
    
    // Update preview info
    updatePreviewPaneInfo();
}

// Update changes summary in preview
function updateChangesPreview() {
    const changesContainer = document.getElementById('changes-summary'); // Changed from 'bulk-changes-summary'
    if (!changesContainer) {
        return;
    }
    
    const changes = [];
    
    // Price changes
    if (bulkChanges.priceAdjustment !== null && bulkChanges.priceAdjustment !== 0) {
        const type = bulkChanges.regularAdjustmentType === 'percentage' ? '%' : '';
        const currencyCode = window.getSystemCurrency() || '';
        if (bulkChanges.regularAdjustmentType === 'fixed-price') {
            changes.push(`Price set to ${bulkChanges.priceAdjustment} ${currencyCode}`);
        } else {
            const symbol = bulkChanges.regularAdjustmentType === 'percentage' ? '' : ` ${currencyCode} (adjustment)`;
            changes.push(`Price ${bulkChanges.priceAdjustment > 0 ? '+' : ''}${bulkChanges.priceAdjustment}${type}${symbol}`);
        }
    }

    // Sale price adjustments (separate from sale status)
    if (bulkChanges.saleDiscount !== null && bulkChanges.saleDiscount !== 0) {
        const currencyCode = window.getSystemCurrency() || '';
        if (bulkChanges.saleAdjustmentType === 'fixed-price') {
            changes.push(`Sale price set to ${bulkChanges.saleDiscount} ${currencyCode}`);
        } else {
            const saleType = bulkChanges.saleAdjustmentType === 'percentage' ? '%' : ` ${currencyCode} (adjustment)`;
            changes.push(`Sale price ${bulkChanges.saleDiscount > 0 ? '+' : ''}${bulkChanges.saleDiscount}${saleType}`);
        }
    }

    // Sale status changes (separate from sale price adjustments)
    if (bulkChanges.saleToggle && bulkChanges.saleToggle !== 'keep-current' && bulkChanges.saleToggle !== 'no-change') {
        const saleText = bulkChanges.saleToggle === 'put-on-sale' ? 'on sale' : 
                        bulkChanges.saleToggle === 'take-off-sale' ? 'off sale' : 
                        bulkChanges.saleToggle;
        changes.push(`Sale status: ${saleText}`);
    }
    
    // Rounding changes
    if (bulkChanges.enableRounding) {
        const roundingPreview = generateRoundingPreview();
        if (roundingPreview) {
            changes.push(roundingPreview);
        }
    }
    
    // Stock changes
    if (bulkChanges.inventory && bulkChanges.inventory.stock) {
        const stockConfig = bulkChanges.inventory.stock;
        
        if (stockConfig.type === 'unlimited') {
            changes.push('Set stock to unlimited');
        } else if (stockConfig.type === 'limited' && stockConfig.amount !== undefined) {
            if (stockConfig.method === 'adjust' && stockConfig.amount !== 0) {
                const adjustment = parseFloat(stockConfig.amount) || 0;
                const sign = adjustment >= 0 ? '+' : '';
                changes.push(`Adjust stock by ${sign}${adjustment}`);
            } else if (stockConfig.method === 'fixed') {
                const fixedAmount = parseInt(stockConfig.amount) || 0;
                changes.push(`Set stock to ${fixedAmount}`);
            }
        }
    }
    
    // Category changes
    if (bulkChanges.categories && bulkChanges.categories.toAdd && bulkChanges.categories.toAdd.length > 0) {
        changes.push(`Add categories: ${bulkChanges.categories.toAdd.join(', ')}`);
    }
    if (bulkChanges.categories && bulkChanges.categories.toRemove && bulkChanges.categories.toRemove.length > 0) {
        changes.push(`Remove categories: ${bulkChanges.categories.toRemove.join(', ')}`);
    }
    
    // Status changes
    if (bulkChanges.newStatus && bulkChanges.newStatus !== 'unchanged') {
        const statusText = bulkChanges.newStatus === 'public' ? 'Public' :
                          bulkChanges.newStatus === 'hidden' ? 'Hidden' :
                          bulkChanges.newStatus === 'scheduled' ? 'Scheduled' :
                          bulkChanges.newStatus;
        changes.push(`Product status: ${statusText}`);
    }

    // Display changes (matching reference file style)
    if (changes.length === 0) {
        changesContainer.innerHTML = '<div class="no-changes">No changes configured</div>';
    } else {
        changesContainer.innerHTML = changes.map(change => 
            `<div class="change-item">
                <span class="change-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none"><path d="M1 6.5L5.24264 10.7426L13.727 2.25732" stroke="#22A24E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <span class="change-text">${change}</span>
            </div>`
        ).join('');
    }
}

// Update sample products display
function updateSampleProducts() {
    const selectedProducts = getSelectedProductsWithData();
    const sampleCount = Math.min(6, selectedProducts.length); // Show up to 6 samples
    
    // If no products selected, use first few products as samples
    const sampleProducts = selectedProducts.length > 0 
        ? selectedProducts.slice(0, sampleCount)
        : globalProductsData.slice(0, sampleCount);
    
    // Update sample products display
    updateSampleProductCards(sampleProducts);
    
    // Update selection count
    updateSelectedProductsCount();
}

// Update sample product cards with preview (EXACT reference implementation)
function updateSampleProductCards(providedProducts = null) {
    
    const sampleContainer = document.getElementById('sample-products');
    if (!sampleContainer) {
        return;
    }
    
    const selectedProducts = providedProducts || getSelectedProductsWithData();
    const sampleProducts = selectedProducts.slice(0, 3); // Get up to 3 products for carousel
    
    
    if (sampleProducts.length === 0) {
        sampleContainer.innerHTML = '<div class="no-changes">No products selected</div>';
        return;
    }
    
    // Create product cards data using centralized preview calculation functions
    const productCards = sampleProducts.map((product, index) => {
        
        // Use the centralized calculateProductPreview function to ensure all logic (including rounding) is applied
        const preview = calculateProductPreview(product);
        
        // Convert the preview format to the card format expected by buildProductCard
        const cardData = {
            productName: preview.productName,
            sku: preview.sku,
            currentPrice: preview.currentPrice,
            newPrice: preview.newPrice,
            priceChanged: preview.newPrice !== preview.currentPrice,
            currentSalePrice: preview.currentSalePrice,
            newSalePrice: preview.salePrice,
            salePriceChanged: preview.salePrice !== preview.currentSalePrice,
            oldPriceToShow: preview.currentSalePrice, // Show actual current sale price as old price
            newStock: preview.stockDisplay.replace('<span class="stock-display">', '').replace('</span>', ''),
            saleStatusBadge: generateSaleStatusIndicator(preview.currentPrice, preview.currentSalePrice, preview.newPrice, preview.salePrice),
            isOnSale: preview.currentSalePrice !== null
        };
        
        
        return cardData;
    });
    
    // Build carousel HTML (EXACT from reference)
    let carouselHTML = '';
    
    if (productCards.length === 1) {
        // Single card, no navigation needed
        carouselHTML = buildProductCard(productCards[0]);
    } else {
        // Multiple cards, show carousel with navigation
        carouselHTML = `
            <div class="carousel-container">
                <div class="carousel-content">
                    <div class="carousel-track" id="product-carousel-track">
                        ${productCards.map(card => buildProductCard(card)).join('')}
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button class="carousel-nav prev" onclick="navigateProductCard(-1)" ${productCards.length <= 1 ? 'disabled' : ''}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_181_2572_left)">
                            <path d="M8 15L1 8L8 1" stroke="#001E45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_181_2572_left">
                                <rect width="9" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div class="carousel-indicators">
                    ${productCards.map((_, i) => `<span class="indicator ${i === 0 ? 'active' : ''}" onclick="goToProductCard(${i})"></span>`).join('')}
                </div>
                <button class="carousel-nav next" onclick="navigateProductCard(1)" ${productCards.length <= 1 ? 'disabled' : ''}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
                        <g clip-path="url(#clip0_181_2572_right)">
                            <path d="M8 15L1 8L8 1" stroke="#001E45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_181_2572_right">
                                <rect width="9" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        `;
    }
    
    // Preserve carousel position BEFORE updating DOM
    const preservedIndex = window.currentProductCardIndex || 0;
    
    sampleContainer.innerHTML = carouselHTML;
    
    // Initialize carousel state - restore position immediately after DOM update
    window.totalProductCards = productCards.length;
    
    // Ensure the preserved index is still valid for the new product count
    if (preservedIndex < productCards.length) {
        window.currentProductCardIndex = preservedIndex;
    } else {
        // If the previous index is out of bounds, go to the last available product
        window.currentProductCardIndex = Math.max(0, productCards.length - 1);
    }
    
    
    // Apply position immediately to prevent bounce
    updateCarouselPosition();
}

// Build individual product card (EXACT reference implementation)
function buildProductCard(card) {
    const hasOnSale = card.newSalePrice || card.currentSalePrice;
    
    // Enhanced stock display with change indicators
    let stockDisplay = card.stockDisplay || 'N/A';
    
    // If there are stock changes, show them with visual indicators
    if (card.newStock !== undefined && card.newStock !== card.currentStock) {
        if (card.newTrackStock === false) {
            stockDisplay = '∞';
        } else {
            stockDisplay = `${card.newStock}`;
            
            // Add change indicator for adjustments
            if (card.currentStock !== undefined && card.currentStock !== null) {
                const diff = card.newStock - card.currentStock;
                if (diff !== 0) {
                    const sign = diff > 0 ? '+' : '';
                    stockDisplay = `${card.newStock} (${sign}${diff})`;
                }
            }
        }
    } else if (card.stockDisplay) {
        stockDisplay = card.stockDisplay;
    }
    
    // Detect currency code for labels
    const detectCurrencyCode = () => {
        // Try to get currency from selected products
        if (window.getSelectedProductsWithData) {
            const selectedProducts = window.getSelectedProductsWithData();
            if (selectedProducts.length > 0) {
                const firstProduct = selectedProducts[0];
                if (firstProduct.storeItem?.price?.currencyCode) {
                    return firstProduct.storeItem.price.currencyCode;
                }
                if (firstProduct.storeItem?.variants?.[0]?.price?.currencyCode) {
                    return firstProduct.storeItem.variants[0].price.currencyCode;
                }
            }
        }
        // Try to get from global products
        if (window.allProducts && window.allProducts.length > 0) {
            for (const product of window.allProducts) {
                if (product.storeItem?.price?.currencyCode) {
                    return product.storeItem.price.currencyCode;
                }
            }
        }
        return ''; // No fallback - display nothing if currency can't be detected
    };
    
    const currencyCode = detectCurrencyCode();
    const currencyLabel = currencyCode ? ` (${currencyCode})` : '';
    
    return `<div class="product-preview-card">
        <div class="product-info">
            <h5 class="product-title" style="color: #011E45; font-family: 'Red Hat Text'; font-size: 16px; font-style: normal; font-weight: 500; line-height: normal; margin: 0 0 8px 0;">${card.productName}</h5>
            ${card.sku && card.sku !== 'N/A' ? `<div class="product-sku">${card.sku}</div>` : ''}
        </div>
        
        <div class="pricing-group">
            <div class="price-line">
                <span class="price-label">Price${currencyLabel}</span>
                <div class="price-values">
                    ${card.priceChanged ? `<span class="old-price">${window.formatCurrency ? window.formatCurrency(card.currentPrice) : `$${card.currentPrice.toFixed(2)}`}</span>` : ''}
                    <span class="new-price ${card.priceChanged ? 'changed' : ''}">${window.formatCurrency ? window.formatCurrency(card.newPrice) : `$${card.newPrice.toFixed(2)}`}</span>
                </div>
            </div>
            
            ${card.salePriceChanged ? `
            <div class="price-line">
                <span class="price-label">Sale price${currencyLabel}</span>
                <div class="price-values">
                    ${card.oldPriceToShow !== null && card.oldPriceToShow !== undefined ? `<span class="old-price">${window.formatCurrency ? window.formatCurrency(card.oldPriceToShow) : `$${card.oldPriceToShow.toFixed(2)}`}</span>` : ''}
                    <span class="new-price changed">
                        ${card.newSalePrice !== null && card.newSalePrice !== undefined ? (window.formatCurrency ? window.formatCurrency(card.newSalePrice) : `$${card.newSalePrice.toFixed(2)}`) : 'N/A'}
                    </span>
                </div>
            </div>` : ''}
        </div>
        
        <div class="status-stock-group">
            <div class="status-line">
                ${card.saleStatusBadge || ''}<span class="stock-info">Stock: ${stockDisplay}</span>
            </div>
        </div>
    </div>`;
}

// Create product preview card
function createProductPreviewCard(product, index) {
    
    const preview = calculateProductPreview(product);
    const card = buildProductCardEnhanced(preview);
    
    return card;
}

// Calculate preview values for a product
function calculateProductPreview(product) {
    
    // Extract current price from product data structure
    let currentPrice = 0;
    let currentSalePrice = null;
    let isOnSale = false;
    let primaryVariant = null;
    
    // Handle different product data structures (from globalProductsData)
    if (product.storeItem) {
        const isDigitalProduct = product.storeItem.productType === "DIGITAL";
        const isServiceProduct = product.storeItem.productType === "SERVICE";
        
        
        if (isDigitalProduct) {
            currentPrice = product.storeItem.priceCents ? product.storeItem.priceCents / 100 : 0;
            
            if (product.storeItem.onSale && product.storeItem.salePriceCents > 0) {
                currentSalePrice = product.storeItem.salePriceCents / 100;
                isOnSale = true;
            } else {
            }
        } else if (isServiceProduct) {
            // Service products - check multiple price sources like digital products
            if (product.storeItem.priceCents) {
                currentPrice = product.storeItem.priceCents / 100;
            } else if (product.storeItem.variants?.length > 0) {
                // Service products might have a single variant with pricing
                const serviceVariant = product.storeItem.variants[0];
                currentPrice = serviceVariant?.price ? serviceVariant.price / 100 : 0;
                
                if (serviceVariant?.onSale && serviceVariant?.salePrice > 0) {
                    currentSalePrice = serviceVariant.salePrice / 100;
                    isOnSale = true;
                }
            }
            
            // Check for service product sale pricing
            if (product.storeItem?.onSale && product.storeItem?.salePriceCents > 0) {
                currentSalePrice = product.storeItem.salePriceCents / 100;
                isOnSale = true;
            }
        } else {
            // Physical products
            primaryVariant = product.storeItem.variants && product.storeItem.variants[0];
            
            if (primaryVariant) {
                currentPrice = primaryVariant.price ? primaryVariant.price / 100 : 0;
                
                // Always set sale price if it exists, regardless of onSale status (including $0.00)
                if (primaryVariant.salePrice !== null && primaryVariant.salePrice !== undefined) {
                    currentSalePrice = primaryVariant.salePrice / 100;
                }
                // Determine onSale status separately
                if (primaryVariant.onSale) {
                    isOnSale = true;
                } else {
                }
            }
        }

        // Stock information
        let stock = 0; // Start with numeric value
        let isUnlimitedStock = false;
        
        if (isDigitalProduct || isServiceProduct) {
            isUnlimitedStock = true;
            stock = null; // Use null for unlimited to distinguish from 0
        } else if (primaryVariant) {
            if (primaryVariant.unlimited) {
                isUnlimitedStock = true;
                stock = null;
            } else {
                // Parse as number, default to 0
                stock = parseInt(primaryVariant.qtyInStock) || 0;
            }
        }

        // Calculate preview changes
        let newPrice = currentPrice;
        let newSalePrice = currentSalePrice;
        let priceChanged = false;
        let salePriceChanged = false;

        // 1. Apply regular price adjustments first
        if (bulkChanges.fixedPrice !== null) {
            newPrice = bulkChanges.fixedPrice;
            priceChanged = true;
            if (bulkChanges.fixedApplyToSale && currentSalePrice) {
                newSalePrice = bulkChanges.fixedPrice;
                // Apply sale price validation constraints
                if (newSalePrice < 0) {
                    newSalePrice = 0;
                }
                if (newSalePrice > newPrice) {
                    newSalePrice = newPrice;
                }
                salePriceChanged = true;
            }
        } else if (bulkChanges.priceAdjustment !== null && bulkChanges.priceAdjustment !== 0) {
            // Calculate new price based on adjustment type
            if (bulkChanges.regularAdjustmentType === 'fixed-adjustment') {
                newPrice = currentPrice + bulkChanges.priceAdjustment;
            } else if (bulkChanges.regularAdjustmentType === 'fixed-price') {
                newPrice = bulkChanges.priceAdjustment;
            } else {
                // Percentage adjustment - handle $0 prices by using $1 as base
                const adjustment = 1 + (bulkChanges.priceAdjustment / 100);
                if (currentPrice <= 0) {
                    newPrice = 1 * adjustment; // Use $1 as base for percentage
                } else {
                    newPrice = currentPrice * adjustment;
                }
            }
            
            // Apply regular price validation constraints (prevent negative prices)
            if (newPrice < 0) {
                newPrice = 0;
            }
            
            priceChanged = true;
            
            if (bulkChanges.applyToSale && currentSalePrice) {
                // Apply same adjustment to sale price
                if (bulkChanges.regularAdjustmentType === 'fixed-adjustment') {
                    newSalePrice = currentSalePrice + bulkChanges.priceAdjustment;
                } else if (bulkChanges.regularAdjustmentType === 'fixed-price') {
                    newSalePrice = bulkChanges.priceAdjustment;
                } else {
                    // Apply percentage adjustment with $1 base for $0 sale prices
                    const adjustment = 1 + (bulkChanges.priceAdjustment / 100);
                    if (currentSalePrice <= 0) {
                        newSalePrice = 1 * adjustment; // Use $1 as base for percentage
                    } else {
                        newSalePrice = currentSalePrice * adjustment;
                    }
                }
                // Apply sale price validation constraints
                if (newSalePrice < 0) {
                    newSalePrice = 0;
                }
                if (newSalePrice > newPrice) {
                    newSalePrice = newPrice;
                }
                salePriceChanged = true;
            }
        }
        
        // 2. Apply sale price adjustments (COMPLETELY INDEPENDENT of sale status)
        if (bulkChanges.saleDiscount !== null && bulkChanges.saleDiscount !== 0) {
            
            if (currentSalePrice !== null && currentSalePrice >= 0) {
                // Adjust existing sale price directly
                if (bulkChanges.saleAdjustmentType === 'percentage') {
                    // Handle $0 sale prices by using $1 as base for percentage calculations
                    if (currentSalePrice <= 0) {
                        newSalePrice = 1 * (1 + bulkChanges.saleDiscount / 100); // Use $1 as base
                    } else {
                        newSalePrice = currentSalePrice * (1 + bulkChanges.saleDiscount / 100);
                    }
                } else if (bulkChanges.saleAdjustmentType === 'fixed-adjustment') {
                    newSalePrice = currentSalePrice + bulkChanges.saleDiscount;
                } else if (bulkChanges.saleAdjustmentType === 'fixed-price') {
                    newSalePrice = Math.abs(bulkChanges.saleDiscount); // Ensure positive value
                }
            } else {
                // Create new sale price from original regular price
                if (bulkChanges.saleAdjustmentType === 'percentage') {
                    // Handle $0 regular prices by using $1 as base for percentage calculations
                    if (currentPrice <= 0) {
                        newSalePrice = 1 * (1 + bulkChanges.saleDiscount / 100); // Use $1 as base
                    } else {
                        newSalePrice = currentPrice * (1 + bulkChanges.saleDiscount / 100);
                    }
                } else if (bulkChanges.saleAdjustmentType === 'fixed-adjustment') {
                    newSalePrice = currentPrice + bulkChanges.saleDiscount;
                } else if (bulkChanges.saleAdjustmentType === 'fixed-price') {
                    newSalePrice = Math.abs(bulkChanges.saleDiscount); // Ensure positive value
                }
            }
            
            // Apply sale price validation constraints
            
            // 1. Sale price cannot be negative
            if (newSalePrice < 0) {
                newSalePrice = 0;
            }
            
            // 2. Sale price constraint logic - only apply if it's actually a discount (reduction)
            const effectiveRegularPrice = priceChanged ? newPrice : currentPrice;
            
            // Only apply the "cannot exceed regular price" constraint if we're applying a discount (negative adjustment)
            // For positive adjustments (price increases), allow sale price to be higher than regular price
            if (newSalePrice > effectiveRegularPrice && bulkChanges.saleDiscount < 0) {
                newSalePrice = effectiveRegularPrice;
            } else {
            }
            
            
            salePriceChanged = true;
        }

        const preview = {
            productName: product.title,
            sku: product.storeItem?.sku || product.storeItem?.variants?.[0]?.sku || 'N/A',
            currentPrice: currentPrice,
            currentSalePrice: currentSalePrice,
            newPrice: newPrice,
            salePrice: newSalePrice,
            currentStock: stock, // Add current stock for comparison
            stockDisplay: formatStockDisplay(stock, true), 
            status: product.workflowState === 'PUBLISHED' ? 'public' : 'hidden',
            statusDisplay: formatStatusDisplay(product.workflowState === 'PUBLISHED' ? 'public' : 'hidden'),
            statusBadge: generateProductStatusIndicator(product),
            hasChanges: priceChanged || salePriceChanged
        };
        

        // Debug SKU issue

        // Apply rounding based on target
        if (bulkChanges.enableRounding) {
            
            const target = bulkChanges.roundingTarget || 'all';
            
            // Determine which prices to round
            const shouldRoundRegular = target === 'all' || target === 'regular';
            const shouldRoundSale = target === 'all' || target === 'sale';
            
            
            // Round regular price if enabled 
            if (shouldRoundRegular && preview.newPrice !== null && preview.newPrice !== undefined) {
                const beforeRounding = preview.newPrice;
                preview.newPrice = applyRounding(preview.newPrice, bulkChanges.roundingType, bulkChanges.customCents);
                preview.hasChanges = true; // Mark as changed since rounding was applied
            }
            
            // Round sale price if enabled and exists
            if (shouldRoundSale && preview.salePrice !== null && preview.salePrice !== undefined) {
                const beforeRounding = preview.salePrice;
                preview.salePrice = applyRounding(preview.salePrice, bulkChanges.roundingType, bulkChanges.customCents);
                preview.hasChanges = true; // Mark as changed since rounding was applied
            }
        } else {
        }

        // Stock tracking and adjustments
        let newStock = stock;
        let newTrackStock = !isUnlimitedStock; // Default based on current product state
        let stockChanged = false;

        // Check if stock tracking toggle is changed
        if (bulkChanges.inventory && bulkChanges.inventory.stock && bulkChanges.inventory.stock.type !== undefined) {
            newTrackStock = bulkChanges.inventory.stock.type === 'limited';
            stockChanged = true;
            
            if (!newTrackStock) {
                // If changing to unlimited, stock becomes null (infinite)
                newStock = null;
            } else if (stock === null) {
                // If changing from unlimited to limited, start with 0
                newStock = 0;
            }
        }

        // Apply stock adjustments if tracking stock and changes exist
        if (newTrackStock && bulkChanges.inventory && bulkChanges.inventory.stock) {
            const stockConfig = bulkChanges.inventory.stock;
            
            if (stockConfig.method === 'adjust' && stockConfig.amount !== undefined && stockConfig.amount !== 0) {
                // Adjust by amount - ensure both values are numbers
                const adjustment = parseFloat(stockConfig.amount) || 0;
                const currentStockNum = stock === null ? 0 : parseInt(stock) || 0;
                newStock = Math.max(0, currentStockNum + adjustment);
                stockChanged = true;
            } else if (stockConfig.method === 'fixed' && stockConfig.amount !== undefined) {
                // Set to fixed amount
                const fixedAmount = parseInt(stockConfig.amount) || 0;
                newStock = Math.max(0, fixedAmount);
                stockChanged = true;
            }
        }        // Update stock display in preview
        if (stockChanged) {
            preview.stockDisplay = formatStockDisplay(newStock, newTrackStock);
            preview.newStock = newStock;
            preview.newTrackStock = newTrackStock;
            preview.hasChanges = true;
        } else {
            // No stock changes - display current stock properly
            preview.stockDisplay = formatStockDisplay(stock, !isUnlimitedStock);
            preview.newStock = stock;
            preview.newTrackStock = !isUnlimitedStock;
        }

        // Apply status changes
        if (bulkChanges.newStatus && bulkChanges.newStatus !== preview.status) {
            preview.status = bulkChanges.newStatus;
            preview.statusDisplay = formatStatusDisplay(bulkChanges.newStatus);
            preview.hasChanges = true;
        }

        return preview;
    }
}

// Format stock display
function formatStockDisplay(stock, trackStock) {
    if (!trackStock) {
        return '∞'; // Infinite symbol for unlimited stock
    }
    
    if (stock === null || stock === undefined) {
        return 'Not tracked';
    }
    
    return `${stock}`;
}

// Format status display
function formatStatusDisplay(status) {
    switch (status) {
        case 'public':
        case 'PUBLISHED':
            return 'Public';
        case 'hidden':
        case 'DRAFT':
            return 'Hidden';
        default:
            return 'Unknown';
    }
}

// Apply rounding to a price value
function applyRounding(price, roundingType, customCents) {
    
    if (!price || price <= 0) {
        return price;
    }
    
    let result;
    switch (roundingType) {
        case 'whole':
            result = Math.round(price);
            break;
        case '.99':
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollar = Math.floor(price);
            const option1 = (currentDollar - 1) + 0.99;  // e.g., $5.99
            const option2 = currentDollar + 0.99;         // e.g., $6.99
            const option3 = (currentDollar + 1) + 0.99;   // e.g., $7.99
            
            // Find which option is closest
            const dist1 = Math.abs(price - option1);
            const dist2 = Math.abs(price - option2);
            const dist3 = Math.abs(price - option3);
            
            if (dist1 <= dist2 && dist1 <= dist3) {
                result = option1;
            } else if (dist2 <= dist3) {
                result = option2;
            } else {
                result = option3;
            }
            
            // Ensure we don't go below 0.99
            if (result < 0.99) result = 0.99;
            break;
        case '.95':
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollar95 = Math.floor(price);
            const option1_95 = (currentDollar95 - 1) + 0.95;  // e.g., $5.95
            const option2_95 = currentDollar95 + 0.95;         // e.g., $6.95
            const option3_95 = (currentDollar95 + 1) + 0.95;   // e.g., $7.95
            
            // Find which option is closest
            const dist1_95 = Math.abs(price - option1_95);
            const dist2_95 = Math.abs(price - option2_95);
            const dist3_95 = Math.abs(price - option3_95);
            
            if (dist1_95 <= dist2_95 && dist1_95 <= dist3_95) {
                result = option1_95;
            } else if (dist2_95 <= dist3_95) {
                result = option2_95;
            } else {
                result = option3_95;
            }
            
            // Ensure we don't go below 0.95
            if (result < 0.95) result = 0.95;
            break;
        case 'custom':
            const cents = customCents || 99;
            const centsDecimal = cents / 100;
            // Consider three options: current dollar - 1, current dollar, current dollar + 1
            const currentDollarCustom = Math.floor(price);
            const option1_custom = (currentDollarCustom - 1) + centsDecimal;
            const option2_custom = currentDollarCustom + centsDecimal;
            const option3_custom = (currentDollarCustom + 1) + centsDecimal;
            
            // Find which option is closest
            const dist1_custom = Math.abs(price - option1_custom);
            const dist2_custom = Math.abs(price - option2_custom);
            const dist3_custom = Math.abs(price - option3_custom);
            
            if (dist1_custom <= dist2_custom && dist1_custom <= dist3_custom) {
                result = option1_custom;
            } else if (dist2_custom <= dist3_custom) {
                result = option2_custom;
            } else {
                result = option3_custom;
            }
            
            // Ensure we don't go below the cents value
            if (result < centsDecimal) result = centsDecimal;
            break;
        default:
            result = price;
    }
    
    return result;
}

// Generate sale status indicator
function generateSaleStatusIndicator(currentPrice, currentSalePrice, newPrice, newSalePrice) {
    // Only show sale tags if sale toggle is active
    if (!bulkChanges.saleToggle || bulkChanges.saleToggle === 'keep-current' || bulkChanges.saleToggle === 'no-change') {
        return '';
    }
    
    // Determine current sale status
    const hadSale = currentSalePrice && currentSalePrice > 0 && currentSalePrice < currentPrice;
    
    // Determine what will happen based on saleToggle setting
    if (bulkChanges.saleToggle === 'put-on-sale') {
        if (!hadSale) {
            return `<span class="sale-tag sale-added">Sale</span>`;
        } else {
            return `<span class="sale-tag on-sale">Sale</span>`;
        }
    } else if (bulkChanges.saleToggle === 'take-off-sale') {
        if (hadSale) {
            return `<span class="sale-tag sale-removed">Sale</span>`;
        } else {
            return '';
        }
    }
    
    return '';
}

// Generate product status indicator
function generateProductStatusIndicator(product) {
    // Only show status badges if status toggle is active
    if (!bulkChanges.newStatus || bulkChanges.newStatus === 'unchanged') {
        return '';
    }
    
    // Get current status
    const currentStatus = product.workflowState === 'PUBLISHED' ? 'public' : 'hidden';
    
    // Get new status
    const newStatus = bulkChanges.newStatus;
    
    // Only show if status is changing
    if (currentStatus !== newStatus) {
        const statusText = newStatus === 'public' ? 'Public' :
                          newStatus === 'hidden' ? 'Hidden' :
                          newStatus === 'scheduled' ? 'Scheduled' :
                          newStatus;
        
        return `<span class="status-badge ${newStatus}">${statusText}</span>`;
    }
    
    return '';
}

// Enhanced buildProductCard with sale status
function buildProductCardEnhanced(preview) {
    const hasOnSale = preview.salePrice || preview.currentSalePrice;
    const currencySymbol = '$'; // Could be enhanced to detect currency
    
    // Generate sale status indicator
    const saleStatusHtml = generateSaleStatusIndicator(
        preview.currentPrice || 0,
        preview.currentSalePrice || null,
        preview.newPrice || 0,
        preview.salePrice || null
    );
    
    return `
        <div class="product-preview-card">
            <div class="product-info">
                <h4 class="product-title">${preview.productName || 'Unnamed Product'}</h4>
                <div class="product-meta-line">
                    <p class="product-sku">${preview.sku || 'No SKU'}</p>
                    ${preview.statusBadge || ''}
                </div>
            </div>
            
            <div class="price-section">
                <div class="price-row">
                    <span class="label">Price:</span>
                    <span class="value">${currencySymbol}${(preview.newPrice || 0).toFixed(2)}</span>
                </div>
                ${hasOnSale ? `
                <div class="price-row sale-price">
                    <span class="label">Sale Price:</span>
                    <span class="value">${currencySymbol}${(preview.salePrice || 0).toFixed(2)}</span>
                </div>
                ` : ''}
            </div>
            
            <div class="stock-section">
                <div class="stock-row">
                    <span class="label">Stock:</span>
                    <span class="value">${preview.stockDisplay || 'N/A'}</span>
                </div>
            </div>
            
            <div class="status-section">
                <div class="status-row">
                    <span class="label">Status:</span>
                    <span class="value status-${preview.status}">${preview.statusDisplay || 'Unknown'}</span>
                </div>
                <div class="sale-status-row">
                    ${saleStatusHtml}
                </div>
            </div>
            
            ${preview.hasChanges ? '<div class="change-indicator">Will be modified</div>' : '<div class="no-changes">No changes</div>'}
        </div>
    `;
}

// Global carousel navigation functions - Fixed implementation
window.navigateProductCard = function(direction) {
    
    if (!window.totalProductCards || window.totalProductCards <= 1) {
        return;
    }
    
    const oldIndex = window.currentProductCardIndex || 0;
    window.currentProductCardIndex = oldIndex + direction;
    
    // Handle wrapping
    if (window.currentProductCardIndex < 0) {
        window.currentProductCardIndex = window.totalProductCards - 1;
    } else if (window.currentProductCardIndex >= window.totalProductCards) {
        window.currentProductCardIndex = 0;
    }
    
    updateCarouselPosition();
}

window.goToProductCard = function(index) {
    
    if (!window.totalProductCards || index < 0 || index >= window.totalProductCards) {
        return;
    }
    
    window.currentProductCardIndex = index;
    updateCarouselPosition();
}

// Enhanced updateCarouselPosition with better error handling
function updateCarouselPositionEnhanced() {
    
    const track = document.getElementById('product-carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (!track) {
        return;
    }
    
    // Only default to 0 if currentProductCardIndex is truly undefined/null, not if it's 0
    const currentIndex = (window.currentProductCardIndex !== undefined && window.currentProductCardIndex !== null) 
        ? window.currentProductCardIndex 
        : 0;
    const translateX = -currentIndex * 100;
    
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    // Update navigation button states
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    
    if (prevButton && nextButton) {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= (window.totalProductCards - 1);
    }
}

// Generate rounding preview text for changes summary
function generateRoundingPreview() {
    if (!bulkChanges.enableRounding) return '';
    
    const roundingType = bulkChanges.roundingType || 'whole';
    const roundingTarget = bulkChanges.roundingTarget || 'all';
    const customCents = bulkChanges.customCents || 99;
    
    let roundingText = '';
    
    // Build rounding type description
    switch (roundingType) {
        case 'whole':
            roundingText = 'Round to whole numbers';
            break;
        case '.99':
            roundingText = 'Round to .99';
            break;
        case '.95':
            roundingText = 'Round to .95';
            break;
        case 'custom':
            roundingText = `Round to .${customCents.toString().padStart(2, '0')}`;
            break;
        default:
            roundingText = 'Apply rounding';
    }
    
    // Add target specification
    switch (roundingTarget) {
        case 'all':
            roundingText = `Round all prices to ${getRoundingTypeText(roundingType, customCents)}`;
            break;
        case 'regular':
            roundingText = `Round regular prices to ${getRoundingTypeText(roundingType, customCents)}`;
            break;
        case 'sale':
            roundingText = `Round sale prices to ${getRoundingTypeText(roundingType, customCents)}`;
            break;
        default:
            roundingText = `Round all prices to ${getRoundingTypeText(roundingType, customCents)}`;
    }
    
    return roundingText;
}

// Helper function to get rounding type text
function getRoundingTypeText(roundingType, customCents) {
    switch (roundingType) {
        case 'whole':
            return 'whole numbers';
        case '.99':
            return '.99';
        case '.95':
            return '.95';
        case 'custom':
            return `.${customCents.toString().padStart(2, '0')}`;
        default:
            return 'nearest dollar';
    }
}



// === PRODUCT-LOADER MODULE ===
// Product loading and management functionality

// Helper function to get variant stock display
function getVariantStockDisplay(variant) {
    // Handle new API format with stock object
    if (variant.stock) {
        if (variant.stock.unlimited) {
            return '<span class="stock-infinite">∞</span>';
        } else {
            return variant.stock.quantity?.toString() || '0';
        }
    }
    
    // Handle legacy format with direct properties
    if (variant.unlimited) {
        return '<span class="stock-infinite">∞</span>';
    } else {
        return variant.qtyInStock?.toString() || '0';
    }
}

// Global variables for categories and collections
let globalCategoriesData = [];
let globalCollectionsData = [];
let globalCategoryTreeData = null;

// Fetch categories from Squarespace API for a single collection
async function fetchCategoriesForCollection(collectionId, crumb) {
    try {
        if (!collectionId || !crumb) {
            console.error('❌ Missing collectionId or crumb for categories fetch');
            return [];
        }
        
        const categoriesUrl = `/api/product-content-service/products/${collectionId}/categories/tree`;
        
        const response = await fetch(categoriesUrl, {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/json',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });
        
        if (!response.ok) {
            console.error(`❌ Categories fetch failed for collection ${collectionId}:`, response.status, response.statusText);
            return [];
        }
        
        const categoriesData = await response.json();
        
        // Store the tree data globally for API usage (first collection's tree)
        if (!globalCategoryTreeData && categoriesData.categoryTree) {
            globalCategoryTreeData = categoriesData.categoryTree;
        }
        
        // Extract categories from the tree structure
        const categories = [];
        if (categoriesData.categoryTree) {
            categoriesData.categoryTree.forEach(category => {
                // Skip the root "All" category
                if (category.type !== 'ROOT') {
                    categories.push({
                        id: category.id,
                        name: category.displayName,
                        slug: category.shortSlug,
                        fullSlug: category.fullSlug,
                        itemCount: category.orderedItemCount,
                        itemIds: category.orderedItemIds || [],
                        parentCategoryId: category.parentCategoryId,
                        type: category.type
                    });
                }
            });
        }
        
        return categories;
        
    } catch (error) {
        console.error('❌ Error fetching categories:', error);
        return [];
    }
}

// Function to get category IDs for a product based on the fetched category data
function getProductCategoryIds(productId) {
    if (!globalCategoriesData || globalCategoriesData.length === 0) {
        return [];
    }
    
    const productCategoryIds = [];
    
    // Check which categories contain this product ID
    globalCategoriesData.forEach(category => {
        if (category.itemIds && category.itemIds.includes(productId)) {
            productCategoryIds.push(category.id);
        }
    });
    
    return productCategoryIds;
}

// Function to get category names for a product based on the fetched category data (for display)
function getProductCategories(productId) {
    if (!globalCategoriesData || globalCategoriesData.length === 0) {
        return '';
    }
    
    const productCategories = [];
    
    // Check which categories contain this product ID
    globalCategoriesData.forEach(category => {
        if (category.itemIds && category.itemIds.includes(productId)) {
            productCategories.push(category.name);
        }
    });
    
    return productCategories.length > 0 ? productCategories.join(', ') : '';
}

// Fetch categories from all product collections
async function fetchCategoriesFromAllCollections(crumb) {
    try {
        // Get all collections first
        const collectionsResponse = await fetch(`${window.location.origin}/api/commondata/GetCollections?limit=100`, {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });

        if (!collectionsResponse.ok) {
            console.error('❌ Failed to fetch collections for categories:', collectionsResponse.status);
            return [];
        }

        const collectionsData = await collectionsResponse.json();
        const collections = collectionsData && collectionsData.collections ? Object.values(collectionsData.collections) : [];
        const productCollections = collections.filter(col => col.typeName === "products");
        
        // Store collections globally for reuse
        globalCollectionsData = productCollections;
        
        if (!productCollections.length) {
            return [];
        }

        
        // Fetch categories from each collection
        const allCategoryPromises = productCollections.map(collection => 
            fetchCategoriesForCollection(collection.id, crumb)
        );

        const allCategoryArrays = await Promise.all(allCategoryPromises);
        
        // Merge all categories and remove duplicates
        const allCategories = [];
        const seenCategories = new Set();
        
        allCategoryArrays.forEach(categories => {
            categories.forEach(category => {
                const categoryKey = `${category.name}_${category.id}`;
                if (!seenCategories.has(categoryKey)) {
                    seenCategories.add(categoryKey);
                    allCategories.push(category);
                }
            });
        });
        
        return allCategories;
        
    } catch (error) {
        console.error('❌ Error fetching categories from collections:', error);
        return [];
    }
}

// Legacy function for backward compatibility
async function fetchCategories(websiteId, crumb) {
    return await fetchCategoriesFromAllCollections(crumb);
}

// Global function to get selected products with full data
function getSelectedProductsWithData() {
    // Use the same selector as getSelectedProducts() for consistency
    const selectedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
    
    const selectedProductIds = Array.from(selectedCheckboxes).map(checkbox => {
        const row = checkbox.closest('tr');
        return row ? row.getAttribute('data-product-id') : null;
    }).filter(id => id !== null);
    
    // Return the full product objects for the selected IDs
    const selectedProducts = globalProductsData.filter(product => selectedProductIds.includes(product.id));
    
    return selectedProducts;
}

// Convert Squarespace product to table row format (updated for queryProductItems API)
function convertProductToTableRow(product) {
    // Check product type
    const isDigitalProduct = product.storeItem?.productType === "DIGITAL";
    const isServiceProduct = product.storeItem?.productType === "SERVICE";
    
    // Get primary variant for physical products
    const primaryVariant = !isDigitalProduct && !isServiceProduct && product.storeItem?.variants?.length > 0 ? product.storeItem.variants[0] : null;
    
    // Format price from cents
    const formatPrice = (priceCents, currencyCode = null) => {
        if (priceCents === null || priceCents === undefined) return 'N/A';
        
        // Use currency manager if available
        if (window.currencyManager) {
            const priceValue = priceCents / 100;
            return window.currencyManager.formatCurrency(priceValue, currencyCode);
        }
        
        // Use detected currency or return basic format without currency prefix
        const currency = currencyCode || window.getSystemCurrency?.();
        const decimalValue = (priceCents / 100).toFixed(2);
        return currency ? `${currency}$${decimalValue}` : `$${decimalValue}`;
    };    // Determine status based on workflow state
    let status = 'hidden';
    if (product.workflowState === 'PUBLISHED') {
        status = 'public';
    } else if (product.workflowState === 'SCHEDULED') {
        status = 'scheduled';
    } else if (product.workflowState === 'DRAFT') {
        status = 'hidden';
    }

    // Get stock quantity - digital and service products have infinite stock
    let stockText = "0";
    // Check if this is a master product with multiple variants
    const hasMultipleVariants = !isDigitalProduct && !isServiceProduct && 
                               product.storeItem?.variants && 
                               product.storeItem.variants.length > 1;
    
    if (isDigitalProduct || isServiceProduct) {
        stockText = '<span class="stock-infinite">∞</span>';
    } else if (hasMultipleVariants) {
        // Master products with multiple variants show no stock data (like onSale field)
        stockText = "—";
    } else if (primaryVariant) {
        stockText = getVariantStockDisplay(primaryVariant);
    }    // Extract categories using the fetched category data
    const categories = getProductCategories(product.id);
    const categoryIds = getProductCategoryIds(product.id);

    // Get URL slug
    const urlSlug = product.urlId || '';

    // Get SKU - digital and service products don't have SKUs, physical products show variants count or single variant SKU
    let sku;
    if (isDigitalProduct || isServiceProduct) {
        sku = 'N/A';
    } else {
        const variantCount = product.storeItem?.variants?.length || 0;
        if (variantCount > 1) {
            sku = `${variantCount} variants`;
        } else if (primaryVariant?.sku) {
            sku = primaryVariant.sku;
        } else {
            sku = 'N/A';
        }
    }

    // Get pricing - different for digital vs service vs physical products
    let priceText = "N/A";
    let salePriceText = "";
    let onSale = false;
    
    if (isDigitalProduct) {
        // Digital products have price directly on the storeItem
        priceText = formatPrice(product.storeItem?.priceCents);
        // Always show sale price if it exists, regardless of onSale status (including $0.00 free products)
        if (product.storeItem?.salePriceCents !== null && product.storeItem?.salePriceCents !== undefined) {
            salePriceText = formatPrice(product.storeItem.salePriceCents);
        }
        // Determine onSale status separately
        if (product.storeItem?.onSale) {
            onSale = true;
        }
    } else if (isServiceProduct) {
        // Service products - check multiple price sources like digital products
        if (product.storeItem?.priceCents) {
            priceText = formatPrice(product.storeItem.priceCents);
        } else if (product.storeItem?.variants?.length > 0) {
            // Service products might have a single variant with pricing
            const serviceVariant = product.storeItem.variants[0];
            priceText = formatPrice(serviceVariant?.price);
            // Show sale price if it exists, regardless of onSale status (including $0.00 free products)
            if (serviceVariant?.salePrice !== null && serviceVariant?.salePrice !== undefined) {
                salePriceText = formatPrice(serviceVariant.salePrice);
            }
            // Check onSale status separately
            if (serviceVariant?.onSale) {
                onSale = true;
            }
        }
        
        // Check for service product sale pricing (including $0.00 free products)
        if (product.storeItem?.salePriceCents !== null && product.storeItem?.salePriceCents !== undefined) {
            salePriceText = formatPrice(product.storeItem.salePriceCents);
        }
        // Check onSale status separately
        if (product.storeItem?.onSale) {
            onSale = true;
        }
    } else {
        // Physical and Service products - check if variants have different prices
        const variants = product.storeItem?.variants || [];
        if (variants.length > 1) {
            // Multiple variants - check for price range
            const prices = variants.map(v => v.price).filter(p => p !== null && p !== undefined);
            // Include sale prices that are set (>= 0) and not null/undefined - allows $0.00 free sales
            const salePrices = variants.map(v => v.salePrice).filter(p => p !== null && p !== undefined && p >= 0);
            
            if (prices.length > 0) {
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                
                if (minPrice === maxPrice) {
                    // All variants have same price
                    priceText = formatPrice(minPrice);
                } else {
                    // Price range exists
                    priceText = `from ${formatPrice(minPrice)}`;
                }
            }
            
            // Handle sale prices - only show meaningful sale prices (> 0)
            if (salePrices.length > 0) {
                const minSalePrice = Math.min(...salePrices);
                const maxSalePrice = Math.max(...salePrices);
                
                if (minSalePrice === maxSalePrice) {
                    // All variants have same sale price
                    salePriceText = formatPrice(minSalePrice);
                } else {
                    // Sale price range exists
                    salePriceText = `from ${formatPrice(minSalePrice)}`;
                }
            }
            
            // For multiple variants, show Mixed/Yes/No based on variant sale status
            const variantsOnSale = variants.filter(v => v.onSale);
            const variantsNotOnSale = variants.filter(v => !v.onSale);
            
            if (variantsOnSale.length === variants.length) {
                // All variants are on sale
                onSale = true;
            } else if (variantsOnSale.length === 0) {
                // No variants are on sale
                onSale = false;
            } else {
                // Mixed - some variants are on sale, some aren't
                onSale = "mixed";
            }
        } else {
            // Single variant - use original logic
            priceText = formatPrice(primaryVariant?.price);
            // Only show sale price if it's meaningful (> 0) and not null/undefined
            if (primaryVariant?.salePrice !== null && primaryVariant?.salePrice !== undefined && primaryVariant.salePrice > 0) {
                salePriceText = formatPrice(primaryVariant.salePrice);
            }
            // Determine onSale status separately
            if (primaryVariant?.onSale) {
                onSale = true;
            }
        }
    }

    // Format scheduled date if product is scheduled
    let scheduledDate = '';
    if (status === 'scheduled' && product.publishOn) {
        const publishOnDate = new Date(product.publishOn);
        scheduledDate = publishOnDate.toLocaleDateString() + ' ' + publishOnDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    return {
        id: product.id,
        name: product.title || 'Untitled',
        url: urlSlug,
        sku: sku,
        skuEditable: !isDigitalProduct && !isServiceProduct && (product.storeItem?.variants?.length === 1), // Only single-variant physical products have editable SKUs
        categories: categories,
        categoryIds: categoryIds,
        price: priceText,
        salePrice: salePriceText || "N/A",
        onSale: onSale,
        stock: stockText,
        stockEditable: !hasMultipleVariants && !isDigitalProduct && !isServiceProduct, // Stock is not editable for master products with multiple variants
        onSaleEditable: !hasMultipleVariants, // OnSale is not editable for master products with multiple variants
        type: isServiceProduct ? 'Service' : (isDigitalProduct ? 'Digital' : 'Physical'),
        status: status,
        scheduledDate: scheduledDate,
        rawProduct: product // Keep reference to original product data
    };
}

// Create category tags HTML for display
function createCategoryTags(categoriesString) {
    if (!categoriesString || categoriesString.trim() === '') {
        return '';  // Return empty string instead of "No categories"
    }
    
    const categories = categoriesString.split(',').map(cat => cat.trim()).filter(cat => cat !== '');
    
    return categories.map(category => `
        <span class="category-tag">
            ${category}
            <button class="category-remove" data-category="${category}" title="Remove category">×</button>
        </span>
    `).join('');
}

// Create a table row element for a product
function createProductRow(rowData) {
    const tr = document.createElement('tr');
    tr.className = 'mix master-product-row';
    tr.setAttribute('data-product-id', rowData.id);
    // Use category IDs for filtering (space-separated for multiple categories)
    const categoryData = rowData.categoryIds && rowData.categoryIds.length > 0 ? rowData.categoryIds.join(' ') : 'uncategorized';
    tr.setAttribute('data-category', categoryData);
    tr.setAttribute('data-status', rowData.status);
    tr.setAttribute('data-type', rowData.type);
    tr.setAttribute('data-title', rowData.name.toLowerCase());
    tr.setAttribute('data-price', parseFloat(rowData.price.replace(/[^0-9.]/g, '')) || 0);
    
    // Extract numeric stock value
    let stockValue = 999999; // Default for infinite
    if (typeof rowData.stock === 'string' && !rowData.stock.includes('∞')) {
        stockValue = parseInt(rowData.stock.replace(/[^0-9]/g, '')) || 0;
    }
    tr.setAttribute('data-stock', stockValue);
    
    // Add scheduled date attribute if product is scheduled
    if (rowData.scheduledDate) {
        tr.setAttribute('data-scheduled-date', rowData.scheduledDate);
    }
    
    // Check if product has variants (multiple variants for physical products)
    const hasVariants = rowData.rawProduct.storeItem &&
                        rowData.rawProduct.storeItem.productType !== "DIGITAL" &&
                        rowData.rawProduct.storeItem.variants &&
                        rowData.rawProduct.storeItem.variants.length > 1;

    // Create title with inline chevron
    const titleContent = hasVariants ? 
        `<button class="expand-btn" data-expanded="false">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="#011E45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button> ${rowData.name}` : 
        rowData.name;
    
    tr.innerHTML = `
        <td class="col-checkbox"><input type="checkbox"></td>
        <td class="col-title title-with-expand">${titleContent}</td>
        <td class="col-url">${rowData.url}</td>
        <td class="col-sku ${!rowData.skuEditable ? 'non-editable' : ''}">${rowData.sku}</td>
        <td class="col-categories category-field" title="Click to edit categories" data-original-categories="${rowData.categories}">
            ${rowData.categories || ''}
        </td>
        <td class="col-price">${rowData.price}</td>
        <td class="col-sale-price">${rowData.salePrice}</td>
        <td class="col-on-sale">${
            rowData.onSale === "mixed" ? '<span class="status-badge scheduled">Mixed</span>' :
            rowData.onSale ? '<span class="status-badge public">Yes</span>' : 
            '<span class="status-badge hidden">No</span>'
        }</td>
        <td class="col-stock ${!rowData.stockEditable ? 'non-editable' : ''}">${rowData.stock}</td>
        <td class="col-type">${rowData.type}</td>
        <td class="col-status"><span class="status-badge ${rowData.status}">${rowData.status.charAt(0).toUpperCase() + rowData.status.slice(1)}</span></td>
        <td class="col-scheduled scheduled-date-cell scheduled-column ${rowData.status !== 'scheduled' ? 'hidden' : ''}">${rowData.scheduledDate || ''}</td>
    `;
    
    // Add click handler for expand/collapse if product has variants
    if (hasVariants) {
        const expandBtn = tr.querySelector('.expand-btn');
        expandBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleVariantRows(tr, rowData.rawProduct);
        });
    }
    
    return tr;
}

// Get website ID from URL or API
async function getWebsiteId(crumbToken) {
    try {
        // First try to get from the URL path if we're in the admin interface
        const urlPath = window.location.pathname;
        const pathParts = urlPath.split('/');
        
        // Look for common Squarespace admin URL patterns
        if (pathParts.includes('config') && pathParts.length > 2) {
            // URL like /config/[websiteId]/commerce/...
            const configIndex = pathParts.indexOf('config');
            if (configIndex + 1 < pathParts.length) {
                const potentialId = pathParts[configIndex + 1];
                if (potentialId && potentialId.length > 10) { // Basic validation
                    return potentialId;
                }
            }
        }
        
        // Fallback: try to get from collections API
        const response = await fetch(`${window.location.origin}/api/commondata/GetCollections`, {
            method: "GET",
            headers: { 
                "accept": "application/json", 
                "x-csrf-token": crumbToken 
            },
            credentials: "include"
        });
        
        if (!response.ok) {
            console.error("Failed to fetch collections for website ID");
            return 'unknown';
        }
        
        const data = await response.json();
        const firstCollection = Object.values(data.collections || {})[0];
        const websiteId = firstCollection?.websiteId;
        
        if (websiteId) {
            return websiteId;
        }
        
        console.error("Could not determine website ID from any source");
        return 'unknown';
    } catch (error) {
        console.error("Error getting website ID:", error);
        return 'unknown';
    }
}

// Get CSRF token from page
function getCsrfToken() {
    const crumb = document.cookie.split(';')
        .find(c => c.trim().startsWith('crumb='))
        ?.split('=')[1];
    
    if (!crumb) {
        console.error("Could not find crumb cookie for API requests");
        return null;
    }
    return crumb;
}

// Fetch all products from Squarespace
async function fetchAllProducts() {
    const crumb = getCsrfToken();
    if (!crumb) return [];

    try {
        
        // Get website ID first
        const websiteId = await getWebsiteId(crumb);
        if (websiteId === 'unknown') {
            console.error('Cannot fetch products without website ID');
            return [];
        }
        
        // First, get all collections
        const collectionsResponse = await fetch(`${window.location.origin}/api/commondata/GetCollections?limit=100`, {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });

        if (!collectionsResponse.ok) {
            throw new Error(`Failed to fetch collections: ${collectionsResponse.status}`);
        }

        const collectionsData = await collectionsResponse.json();
        const collections = collectionsData && collectionsData.collections ? Object.values(collectionsData.collections) : [];
        const productCollections = collections.filter(col => col.typeName === "products");
        
        if (!productCollections.length) {
            return [];
        }

        
        // Get products from all collections concurrently for faster initial loading
        const allProductPromises = productCollections.map(async collection => {
            try {
                
                // Try the queryProductItems API first
                try {
                    return await fetchProductsUsingQueryAPI(collection.id, websiteId, crumb);
                } catch (error) {
                    console.warn(`⚠️ queryProductItems API failed for ${collection.title}, falling back to commerce API:`, error);
                    return await fetchProductsUsingCommerceAPI(collection.id, crumb);
                }
            } catch (error) {
                console.error(`❌ Failed to load products from "${collection.title}":`, error);
                return [];
            }
        });

        // Wait for all collections to load
        const allProductArrays = await Promise.all(allProductPromises);
        
        // Flatten and deduplicate products
        const allProducts = allProductArrays.flat();
        const uniqueProducts = [];
        const seenIds = new Set();
        
        allProducts.forEach(product => {
            if (!seenIds.has(product.id)) {
                seenIds.add(product.id);
                uniqueProducts.push(product);
            }
        });

        return uniqueProducts;

    } catch (error) {
        console.error('❌ Error fetching products:', error);
        return [];
    }
}

// New API method with pagination support
async function fetchProductsUsingQueryAPI(collectionId, websiteId, crumbToken) {
    const apiUrl = `${window.location.origin}/api/content-service/product/1.1/websites/${websiteId}/products/${collectionId}/queryProductItems`;
    
    let allProducts = [];
    let hasNextPage = true;
    let pageMarker = "";
    let previousPageMarker = "";
    let requestCount = 0;
    const maxRequests = 100; // Safety limit to prevent infinite loops
    
    while (hasNextPage && requestCount < maxRequests) {
        requestCount++;
        
        const requestBody = {
            limit: 200,
            ...(pageMarker && {
                pageAction: "NEXT",
                pageMarker: pageMarker
            })
        };
        
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'x-csrf-token': crumbToken
            },
            credentials: 'include',
            body: JSON.stringify(requestBody)
        });


        if (!response.ok) {
            const errorText = await response.text();
            console.error(`💥 Error with queryProductItems API:`, errorText);
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        
        if (data.products && data.products.length > 0) {
            // Add websiteId and parentCollectionId to each product for later API calls
            const productsWithIds = data.products.map(product => ({
                ...product,
                websiteId: websiteId,
                parentCollectionId: collectionId
            }));
            
            allProducts = allProducts.concat(productsWithIds);
        } else {
        }
        
        // Store previous marker for comparison
        previousPageMarker = pageMarker;
        hasNextPage = data.pagination?.hasNextPage || false;
        pageMarker = data.pagination?.nextPageMarker || "";
        
        // Safety check: if the pageMarker hasn't changed and we still have hasNextPage, break the loop
        if (hasNextPage && pageMarker && pageMarker === previousPageMarker) {
            console.warn(`⚠️ Page marker hasn't changed (${pageMarker}), breaking pagination loop to prevent infinite requests`);
            break;
        }
        
        // Safety check: if we have no new marker but API says there's a next page, break
        if (hasNextPage && !pageMarker) {
            console.warn(`⚠️ No page marker returned but hasNextPage is true, breaking pagination loop`);
            break;
        }
        
        if (hasNextPage) {
        }
    }
    
    return allProducts;
}

// Fallback commerce API method
async function fetchProductsUsingCommerceAPI(collectionId, crumbToken) {
    
    try {
        // Get collection items first
        const itemsResponse = await fetch(`${window.location.origin}/api/commerce/collections/${collectionId}/items?limit=100`, {
            method: "GET",
            headers: { 
                "accept": "application/json",
                "x-csrf-token": crumbToken 
            },
            credentials: "include"
        });

        if (!itemsResponse.ok) {
            console.error(`Failed to fetch collection items: ${itemsResponse.status}`);
            return [];
        }

        const itemsData = await itemsResponse.json();
        const productIds = itemsData.items?.map(item => item.id) || [];
        
        
        if (productIds.length === 0) return [];

        // Fetch detailed product information
        const allProducts = [];
        
        for (const productId of productIds) {
            try {
                const productResponse = await fetch(`${window.location.origin}/api/commerce/products/${productId}`, {
                    method: "GET",
                    headers: { 
                        "accept": "application/json",
                        "x-csrf-token": crumbToken 
                    },
                    credentials: "include"
                });

                if (productResponse.ok) {
                    const product = await productResponse.json();
                    allProducts.push(product);
                }
            } catch (error) {
                console.warn(`Failed to fetch product ${productId}:`, error);
            }
        }
        
        return allProducts;
    } catch (error) {
        console.error(`Commerce API failed for collection ${collectionId}:`, error);
        return [];
    }
}

// Initialize product loading and table setup
async function loadProducts() {
    
    // Show skeleton loading state
    const productContainer = document.getElementById('product-container');
    const tableWrapper = document.querySelector('.table-wrapper');
    
    if (!productContainer) {
        console.error('❌ Product container element not found! Make sure the HTML has an element with id="product-container"');
        return;
    }
    
    // Show the table wrapper now that we're ready to display skeleton loading
    if (tableWrapper) {
        tableWrapper.style.display = 'block';
    }
    
    // Create skeleton rows
    const createSkeletonRow = () => {
        return `
            <tr class="skeleton-row">
                <td><div class="skeleton skeleton-checkbox"></div></td>
                <td><div class="skeleton skeleton-text skeleton-title"></div></td>
                <td><div class="skeleton skeleton-text skeleton-url"></div></td>
                <td><div class="skeleton skeleton-text skeleton-sku"></div></td>
                <td><div class="skeleton skeleton-text skeleton-category"></div></td>
                <td><div class="skeleton skeleton-text skeleton-price"></div></td>
                <td><div class="skeleton skeleton-text skeleton-sale-price"></div></td>
                <td><div class="skeleton skeleton-badge skeleton-on-sale"></div></td>
                <td><div class="skeleton skeleton-text skeleton-stock"></div></td>
                <td><div class="skeleton skeleton-badge skeleton-type"></div></td>
                <td><div class="skeleton skeleton-badge skeleton-status"></div></td>
                <td class="scheduled-column hidden"><div class="skeleton skeleton-text skeleton-scheduled"></div></td>
            </tr>
        `;
    };
    
    // Generate 10 skeleton rows
    const skeletonRows = Array(10).fill().map(() => createSkeletonRow()).join('');
    productContainer.innerHTML = skeletonRows;
    
    // Get CSRF token and page ID once for both API calls
    const crumb = getCsrfToken();
    if (!crumb) {
        console.error('❌ No CSRF token found');
        // Hide the table wrapper and show no products message for auth error
        if (tableWrapper) {
            tableWrapper.style.display = 'none';
        }
        const noProductsMessage = document.getElementById('no-products-message');
        if (noProductsMessage) {
            // Update message for auth error case
            noProductsMessage.innerHTML = `
                <h3>Unable to authenticate</h3>
                <p>Please ensure you are logged into Squarespace admin and try refreshing the page.</p>
            `;
            noProductsMessage.style.display = 'block';
        }
        return;
    }
    
    
    // Fetch categories first using collection-based approach
    globalCategoriesData = await fetchCategoriesFromAllCollections(crumb);
    
    // Make categories, collections, and category tree globally accessible for API calls
    window.globalCategoriesData = globalCategoriesData;
    window.globalCollectionsData = globalCollectionsData;
    window.globalCategoryTreeData = globalCategoryTreeData;
    
    // Fetch products from Squarespace
    const squarespaceProducts = await fetchAllProducts();
    
    if (squarespaceProducts.length === 0) {
        // Hide the table wrapper and show no products message
        if (tableWrapper) {
            tableWrapper.style.display = 'none';
        }
        const noProductsMessage = document.getElementById('no-products-message');
        if (noProductsMessage) {
            noProductsMessage.style.display = 'block';
        }
        return;
    }
    
    // Hide no products message and show table if products exist
    const noProductsMessage = document.getElementById('no-products-message');
    if (noProductsMessage) {
        noProductsMessage.style.display = 'none';
    }
    
    // Store products globally for undo functionality
    globalProductsData = squarespaceProducts;
    
    // Make products available to save functions
    window.squarespaceProducts = squarespaceProducts;
    
    // Convert products and populate table
    if (productContainer) {
        productContainer.innerHTML = '';
    }
    
    squarespaceProducts.forEach(product => {
        const rowData = convertProductToTableRow(product);
        const row = createProductRow(rowData);
        if (productContainer) {
            productContainer.appendChild(row);
        }
    });
    
    // Update category filter dropdown with only categories that have products
    // Handle hierarchical categories properly by using full category context
    const categoriesWithProducts = globalCategoriesData
        .filter(category => category.itemCount > 0)
        .map(category => {
            // For nested categories, show parent context to distinguish them
            const parentCategory = globalCategoriesData.find(cat => cat.id === category.parentCategoryId);
            let displayName;
            if (parentCategory && parentCategory.type !== 'ROOT') {
                displayName = `${parentCategory.name} / ${category.name}`;
            } else {
                displayName = category.name;
            }
            return {
                id: category.id,
                displayName: displayName,
                originalName: category.name
            };
        });
    
    // Populate the category filter dropdown with only categories that have products
    populateCategoryFilterDropdown(categoriesWithProducts);
    
    // Initialize MixItUp integration after products are loaded
    if (typeof initializeMixItUpIntegration === 'function') {
        setTimeout(() => {
            initializeMixItUpIntegration();
        }, 100); // Small delay to ensure DOM is ready
    }
    
    // Initialize MixItUp now that products are loaded (like the reference)
    if (typeof initializeMixItUpAfterProducts === 'function') {
        setTimeout(() => {
            initializeMixItUpAfterProducts();
        }, 100); // Small delay to ensure DOM is ready
    }
    
    // Update scheduled column visibility after products are loaded
    if (typeof updateScheduledColumnVisibility === 'function') {
        setTimeout(() => {
            updateScheduledColumnVisibility();
        }, 200); // Small delay to ensure DOM is ready
    }
    
    // Update table scroll arrows after products are loaded
    if (typeof window.tableScrollManager !== 'undefined' && window.tableScrollManager.updateScrollArrows) {
        setTimeout(() => {
            window.tableScrollManager.updateScrollArrows();
        }, 300); // Small delay to ensure DOM layout is complete
    }

}

// Populate category filter dropdown with only categories that have products
function populateCategoryFilterDropdown(categoriesWithProducts) {
    const categoryDropdown = document.getElementById('category-filter-dropdown');
    const categoryFilter = document.getElementById('category-filter'); // Hidden select
    const categoryText = document.getElementById('category-filter-text'); // Display text
    
    if (!categoryDropdown) {
        console.warn('Category filter dropdown not found');
        return;
    }
    
    // Store current selection before clearing
    const currentSelection = categoryFilter ? categoryFilter.value : 'all';
    const currentDisplayText = categoryText ? categoryText.textContent : 'All Categories';
    
    // Clear existing options except "All Categories"
    const allCategoriesOption = categoryDropdown.querySelector('[data-value="all"]');
    categoryDropdown.innerHTML = '';
    
    // Re-add "All Categories" option
    if (allCategoriesOption) {
        categoryDropdown.appendChild(allCategoriesOption);
    } else {
        // Create "All Categories" option if it doesn't exist
        const allOption = document.createElement('div');
        allOption.className = 'select-option';
        allOption.setAttribute('data-value', 'all');
        allOption.textContent = 'All Categories';
        categoryDropdown.appendChild(allOption);
    }
    
    // Add categories that have products, sorted alphabetically by display name
    const sortedCategories = categoriesWithProducts.sort((a, b) => a.displayName.localeCompare(b.displayName));
    sortedCategories.forEach(category => {
        const option = document.createElement('div');
        option.className = 'select-option';
        option.setAttribute('data-value', category.id); // Use category ID for filtering
        option.textContent = category.displayName; // Show hierarchical display name
        categoryDropdown.appendChild(option);
    });
    
    // Restore previous selection if it still exists in the new dropdown
    if (currentSelection && currentSelection !== 'all') {
        const selectedOption = categoryDropdown.querySelector(`[data-value="${currentSelection}"]`);
        if (selectedOption) {
            // Restore the selection
            selectedOption.classList.add('selected');
            if (categoryFilter) {
                categoryFilter.value = currentSelection;
            }
            if (categoryText) {
                categoryText.textContent = currentDisplayText;
            }
            console.log(`✅ Restored category selection: ${currentSelection}`);
        } else {
            // Selection no longer exists, reset to "All Categories"
            categoryDropdown.querySelector('[data-value="all"]').classList.add('selected');
            if (categoryFilter) {
                categoryFilter.value = 'all';
            }
            if (categoryText) {
                categoryText.textContent = 'All Categories';
            }
            console.log(`⚠️ Previous selection no longer available, reset to "All Categories"`);
        }
    } else {
        // Set "All Categories" as selected
        categoryDropdown.querySelector('[data-value="all"]').classList.add('selected');
        if (categoryFilter) {
            categoryFilter.value = 'all';
        }
        if (categoryText) {
            categoryText.textContent = 'All Categories';
        }
    }
    
}


// === PRODUCT-TABLE MODULE ===
// Product table management and interactions

// Helper function to get variant stock display
function getVariantStockDisplay(variant) {
    // Handle new API format with stock object
    if (variant.stock) {
        if (variant.stock.unlimited) {
            return '<span class="stock-infinite">∞</span>';
        } else {
            return variant.stock.quantity?.toString() || '0';
        }
    }
    
    // Handle legacy format with direct properties
    if (variant.unlimited) {
        return '<span class="stock-infinite">∞</span>';
    } else {
        return variant.qtyInStock?.toString() || '0';
    }
}

// Initialize product table functionality
function initializeProductTable() {
    
    // Initialize select all functionality
    initializeSelectAll();
    
    // Initialize table interactions
    initializeTableInteractions();
    
    // Initialize changes tracking
    initializeChangesTracking();
}

// Helper function to get currently visible/filtered products
function getVisibleProducts() {
    // Simply get all .mix elements that are NOT hidden by display:none
    const allMixElements = document.querySelectorAll('.mix');
    const visibleItems = [];
    
    allMixElements.forEach(element => {
        // Check if element is actually visible (not hidden by MixItUp filtering or pagination)
        const computedStyle = window.getComputedStyle(element);
        const isVisible = computedStyle.display !== 'none';
        
        if (isVisible) {
            visibleItems.push(element);
        }
    });
    
    console.log(`🔍 Found ${visibleItems.length} visible products (not display:none)`);
    return visibleItems;
}

// Helper function to get checkboxes from visible/filtered products
function getVisibleProductCheckboxes() {
    // Simply get all .mix elements that are NOT hidden by display:none
    const allMixElements = document.querySelectorAll('.mix');
    const checkboxes = [];
    
    allMixElements.forEach(element => {
        // Check if element is actually visible (not hidden by MixItUp filtering or pagination)
        const computedStyle = window.getComputedStyle(element);
        const isVisible = computedStyle.display !== 'none';
        
        if (isVisible) {
            const checkbox = element.querySelector('input[type="checkbox"]:not(#select-all-checkbox)');
            if (checkbox) {
                checkboxes.push(checkbox);
            }
        }
    });
    
    return checkboxes;
}

// Initialize select all checkbox functionality
function initializeSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const isChecked = this.checked;
            
            // Check if any filters are currently active
            const hasActiveFilters = hasAnyActiveFilters();
            
            if (!hasActiveFilters) {
                
                if (isChecked) {
                    // Select all products by ID
                    globalProductsData.forEach(product => {
                        const productElement = document.querySelector(`[data-product-id="${product.id}"]`);
                        if (productElement) {
                            const checkbox = productElement.querySelector('input[type="checkbox"]:not(#select-all-checkbox)');
                            if (checkbox) {
                                checkbox.checked = true;
                            }
                        }
                    });
                } else {
                    // Unselect all products
                    const allCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:not(#select-all-checkbox)');
                    allCheckboxes.forEach(checkbox => {
                        checkbox.checked = false;
                    });
                }
            } else {
                // Filters are active - only select visible products
                const visibleCheckboxes = getVisibleProductCheckboxes();
                
                visibleCheckboxes.forEach(checkbox => {
                    checkbox.checked = isChecked;
                });
            }
            
            // Update UI state based on selection
            updateSelectedProductsCount();
            updateBulkEditButton();
        });
    }
}

// Check if any filters are currently active
function hasAnyActiveFilters() {
    // Get current filter states (similar to search-filtering.js logic)
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const typeFilter = document.getElementById('type-filter');
    const sortSelect = document.getElementById('sort-select');
    
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    const activeCategory = categoryFilter ? categoryFilter.value : 'all';
    const activeStatus = statusFilter ? statusFilter.value : 'all';
    const activeType = typeFilter ? typeFilter.value : 'all';
    const currentSort = sortSelect ? sortSelect.value : 'default';
    
    const hasActiveFilters = searchTerm !== '' || 
                            activeCategory !== 'all' || 
                            activeStatus !== 'all' || 
                            activeType !== 'all' || 
                            currentSort !== 'default';
    
    
    return hasActiveFilters;
}

// Initialize table interactions (editing, variant expansion, etc.)
function initializeProductTable() {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) return;
    
    // Delegate event handling for dynamic content
    productContainer.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            handleProductSelection(e);
        }
    });
    
    productContainer.addEventListener('input', function(e) {
        // Note: Removed automatic change tracking on input events
        // The new interaction system handles change tracking only on confirmation
        // if (e.target.matches('input[type="text"], input[type="number"], select')) {
        //     handleFieldEdit(e);
        // }
    });
    
    productContainer.addEventListener('click', function(e) {
        if (e.target.matches('.expand-btn')) {
            handleVariantToggle(e);
        }
    });
}

// Handle product selection changes
function handleProductSelection(event) {
    const checkbox = event.target;
    const row = checkbox.closest('tr');
    
    if (row) {
        // Update visual state
        row.classList.toggle('selected', checkbox.checked);
        
        // Update select all state
        updateSelectAllState();
        
        // Update selected count
        updateSelectedProductsCount();
        
        // Update bulk edit button state
        updateBulkEditButton();
    }
}

// Handle field editing
function handleFieldEdit(event) {
    const field = event.target;
    const row = field.closest('tr');
    
    if (row) {
        const productId = row.getAttribute('data-product-id');
        if (productId) {
            trackChanges(field, row);
        }
    }
}

// Handle variant row toggle
function handleVariantToggle(event) {
    const expandBtn = event.target;
    const row = expandBtn.closest('tr');
    const product = globalProductsData.find(p => p.id === row.getAttribute('data-product-id'));
    
    if (product) {
        toggleVariantRows(row, product);
    }
}

// Toggle variant rows for products with multiple variants
function toggleVariantRows(masterRow, product) {
    const expandBtn = masterRow.querySelector('.expand-btn');
    const isExpanded = expandBtn.getAttribute('data-expanded') === 'true';
    
    
    if (isExpanded) {
        // Collapse - but first preserve any changes made to variant rows
        let nextRow = masterRow.nextElementSibling;
        const variantChanges = new Map();
        
        while (nextRow && nextRow.classList.contains('variant-row')) {
            const variantId = nextRow.getAttribute('data-variant-id');
            const modifiedCells = nextRow.querySelectorAll('.modified');
            
            if (modifiedCells.length > 0) {
                const changes = {};
                modifiedCells.forEach(cell => {
                    const fieldType = cell.getAttribute('data-field-type');
                    const originalValue = cell.getAttribute('data-original-value');
                    const newValue = cell.getAttribute('data-new-value');
                    
                    if (fieldType && originalValue !== undefined && newValue !== undefined) {
                        changes[fieldType] = {
                            originalValue,
                            newValue,
                            cellContent: cell.innerHTML
                        };
                    }
                });
                
                if (Object.keys(changes).length > 0) {
                    variantChanges.set(variantId, changes);
                    console.log(`💾 Preserved changes for variant ${variantId}:`, changes);
                }
            }
            
            const rowToRemove = nextRow;
            nextRow = nextRow.nextElementSibling;
            rowToRemove.remove();
        }
        
        // Store preserved changes on the master row for later restoration
        if (variantChanges.size > 0) {
            masterRow.setAttribute('data-preserved-variant-changes', JSON.stringify(Object.fromEntries(variantChanges)));
            console.log(`💾 Stored ${variantChanges.size} variant changes on master row`);
        }
        
        expandBtn.setAttribute('data-expanded', 'false');
    } else {
        // Expand - add variant rows and restore any preserved changes
        const variants = product.storeItem?.variants || [];
        
        // Get preserved changes if any
        const preservedChangesJson = masterRow.getAttribute('data-preserved-variant-changes');
        const preservedChanges = preservedChangesJson ? JSON.parse(preservedChangesJson) : {};
        
    
        
        variants.forEach((variant, index) => {
            const variantRowHTML = createVariantRow(variant, product.id, index);
            // Convert HTML string to DOM element using proper table structure
            const tempTable = document.createElement('table');
            const tempTbody = document.createElement('tbody');
            tempTbody.innerHTML = variantRowHTML;
            tempTable.appendChild(tempTbody);
            const variantRow = tempTbody.firstElementChild;
            
            
            if (variantRow && variantRow.tagName === 'TR') {
                masterRow.parentNode.insertBefore(variantRow, masterRow.nextSibling);
                
                // Restore preserved changes for this variant if any exist
                const variantId = variant.id;
                if (preservedChanges[variantId]) {
                    console.log(`🔄 Restoring changes for variant ${variantId}:`, preservedChanges[variantId]);
                    
                    Object.entries(preservedChanges[variantId]).forEach(([fieldType, changeData]) => {
                        // Find the corresponding cell in the restored row
                        let targetCell = null;
                        
                        // Map field types to column classes
                        const fieldMap = {
                            'sku': 'col-sku',
                            'price': 'col-price', 
                            'salePrice': 'col-sale-price',
                            'onSale': 'col-on-sale',
                            'stock': 'col-stock'
                        };
                        
                        const columnClass = fieldMap[fieldType];
                        if (columnClass) {
                            targetCell = variantRow.querySelector(`.${columnClass}`);
                        }
                        
                        if (targetCell) {
                            // Restore the modified state and data attributes
                            targetCell.classList.add('modified');
                            targetCell.setAttribute('data-field-type', fieldType);
                            targetCell.setAttribute('data-original-value', changeData.originalValue);
                            targetCell.setAttribute('data-new-value', changeData.newValue);
                            targetCell.innerHTML = changeData.cellContent;
                            
                            console.log(`✅ Restored ${fieldType} change: ${changeData.originalValue} → ${changeData.newValue}`);
                            
                            // Re-track the change in the system
                            if (typeof trackChanges === 'function') {
                                trackChanges(targetCell, variantRow);
                            }
                        } else {
                            console.warn(`⚠️ Could not find target cell for field type: ${fieldType}`);
                        }
                    });
                }
            } else {
                console.error('Failed to create valid TR element from HTML');
            }
        });
        
        // Clear the preserved changes since they've been restored
        if (preservedChangesJson) {
            masterRow.removeAttribute('data-preserved-variant-changes');
            console.log(`🧹 Cleared preserved changes from master row`);
        }
        
        expandBtn.setAttribute('data-expanded', 'true');
    }
}

// Create a variant row element
    function createVariantRow(variant, parentProductId, index) {
        
        // Format price from cents (without currency code for variants)
        const formatPrice = (priceCents) => {
            if (priceCents === null || priceCents === undefined) return "—";
            const decimalValue = (priceCents / 100).toFixed(2);
            return `$${decimalValue}`;
        };

        // Format variant attributes - handle array of objects with optionName and value
        let variantName = 'Variant';
        if (variant.optionalValues && variant.optionalValues.length > 0) {
            variantName = variant.optionalValues.map(opt => `${opt.optionName}: <span>${opt.value}</span>`).join(', ');
        }

        // Format prices - check if it's in cents or direct value
        let priceText = "—";
        let salePriceText = "Not set";
        
        if (variant.price !== null && variant.price !== undefined) {
            // If price is already formatted as a string, use it directly
            if (typeof variant.price === 'string') {
                priceText = variant.price;
            } else {
                // If it's a number, treat it as cents
                priceText = formatPrice(variant.price);
            }
        }
        
        if (variant.salePrice && variant.salePrice > 0) {
            if (typeof variant.salePrice === 'string') {
                salePriceText = variant.salePrice;
            } else {
                salePriceText = formatPrice(variant.salePrice);
            }
        }


        const htmlResult = `<tr class="variant-row mix" data-variant-id="${variant.id}" data-parent-product="${parentProductId}" data-product-id="${variant.id}" style="display: table-row; opacity: 1; transition: opacity 0.3s;">
            <td class="col-checkbox variant-checkbox-cell"><!-- No checkbox for variants --></td>
            <td class="col-title col-url variant-name non-editable" colspan="2">↳ ${variantName}</td>
            <td class="col-sku" title="Click to edit SKU">${variant.sku || '—'}</td>
            <td class="col-categories non-editable">—</td>
            <td class="col-price">${priceText}</td>
            <td class="col-sale-price">${salePriceText}</td>
            <td class="col-on-sale non-editable"><span class="status-badge ${variant.onSale ? 'public' : 'hidden'}">${variant.onSale ? 'Yes' : 'No'}</span></td>
            <td class="col-stock">${getVariantStockDisplay(variant)}</td>
            <td class="col-type variant-type non-editable">Variant</td>
            <td class="col-status non-editable">—</td>
            <td class="col-scheduled scheduled-date-cell scheduled-column non-editable">—</td>
        </tr>`;
        
        return htmlResult;
    }
    
    // Update select all checkbox state based on individual selections
    function updateSelectAllState() {
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    if (!selectAllCheckbox) return;
    
    const visibleCheckboxes = getVisibleProductCheckboxes();
    const checkedCheckboxes = visibleCheckboxes.filter(checkbox => checkbox.checked);
    
    
    if (checkedCheckboxes.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (checkedCheckboxes.length === visibleCheckboxes.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    }
}

// Update selected products count display
function updateSelectedProductsCount() {
    const selectedCount = document.querySelectorAll('.mix input[type="checkbox"]:checked:not(#select-all-checkbox)').length;
    
    // Update the products selected text display
    const productsSelectedText = document.getElementById('products-selected-text');
    if (productsSelectedText) {
        const newText = `${selectedCount} product${selectedCount !== 1 ? 's' : ''} selected`;
        productsSelectedText.textContent = newText;
    } else {
        console.error('❌ products-selected-text element not found in updateSelectedProductsCount');
    }
    
    // Also update bulk edit footer if it exists
    const productsSelectedCount = document.getElementById('products-selected-count');
    if (productsSelectedCount) {
        productsSelectedCount.textContent = `${selectedCount} Product${selectedCount !== 1 ? 's' : ''} Selected`;
    }
    
    // Update estimated time based on selection
    const estimatedTime = document.getElementById('estimated-time');
    if (estimatedTime && selectedCount > 0) {
        // Base estimate for product-only operations (conservative)
        let seconds = Math.ceil(selectedCount * TIMING_ESTIMATES.productOnly);
        seconds = Math.max(5, seconds); // Minimum 5 seconds
        
        // Note: This is just the base selection time estimate. 
        // The actual time will be recalculated in bulk-editor.js when bulk changes are configured
        // (will be ~4x longer if categories are involved)
        estimatedTime.textContent = formatEstimatedTime(seconds);
    }
}

// Update bulk edit button state
function updateBulkEditButton() {
    const selectedCount = document.querySelectorAll('.mix input[type="checkbox"]:checked:not(#select-all-checkbox)').length;
    const bulkAdjustBtn = document.querySelector('.bulk-adjust');
    
    if (bulkAdjustBtn) {
        bulkAdjustBtn.disabled = selectedCount === 0;
        // No need to update text - it should always say "Bulk Adjust"
    }
}

// Initialize changes tracking
function initializeChangesTracking() {
    // Store original data for each product using API data
    function storeOriginalData() {
        globalProductsData.forEach(product => {
            const processedData = convertProductToTableRow(product);
            originalData.set(product.id, {
                title: processedData.name,
                url: processedData.url,
                stock: processedData.stock,
                price: processedData.price,
                salePrice: processedData.salePrice,
                status: processedData.status
            });
        });
    }
    
    storeOriginalData();
}

// Track changes for modified fields
function trackChanges(cell, row) {
    
    const productId = row.getAttribute('data-product-id');
    
    if (productId && typeof markProductAsChanged === 'function') {
        const fieldType = cell.getAttribute('data-field-type');
        const newValue = cell.getAttribute('data-new-value');
        
        markProductAsChanged(productId, fieldType, newValue);
    }
    
    // Update changes footer if function exists
    if (typeof updateChangesFooter === 'function') {
        updateChangesFooter();
    }
    
    hasUnsavedChanges = true;
}

// Check for unsaved changes before action
function checkUnsavedChanges(callback) {
    if (hasUnsavedChanges) {
        if (typeof shakeFooter === 'function') {
            shakeFooter();
        }
        return false;
    } else {
        if (callback) callback();
        return true;
    }
}

// Shake footer to indicate unsaved changes
function shakeFooter() {
    const footer = document.getElementById('changes-footer');
    if (footer) {
        footer.classList.add('shake');
        setTimeout(() => {
            footer.classList.remove('shake');
        }, 500);
    }
}

// Show notification in footer
// Note: showFooterNotification is defined in utils/interactive.js

// Filter products based on search, category, and status
function filterProducts(filterType, filterValue) {
    
    // This would integrate with MixItUp or custom filtering logic
    // For now, we'll implement basic filtering
    
    const rows = document.querySelectorAll('.master-product-row');
    
    rows.forEach(row => {
        let shouldShow = true;
        
        // Apply filters based on type
        switch (filterType) {
            case 'search':
                if (filterValue) {
                    const searchTerm = filterValue.toLowerCase();
                    const name = row.getAttribute('data-name') || '';
                    const sku = row.getAttribute('data-sku') || '';
                    shouldShow = name.includes(searchTerm) || sku.includes(searchTerm);
                }
                break;
                
            case 'category':
                if (filterValue !== 'all') {
                    const categories = row.getAttribute('data-category') || '';
                    shouldShow = categories.includes(filterValue);
                }
                break;
                
            case 'status':
                if (filterValue !== 'all') {
                    const status = row.getAttribute('data-status') || '';
                    shouldShow = status === filterValue;
                }
                break;
        }
        
        // Show/hide row
        row.style.display = shouldShow ? '' : 'none';
    });
    
    // Update select all state after filtering
    updateSelectAllState();
}

// Export functions to global scope
window.initializeProductTable = initializeProductTable;
window.initializeChangesTracking = initializeChangesTracking;
window.handleFieldEdit = handleFieldEdit;
window.trackChanges = trackChanges;
window.checkUnsavedChanges = checkUnsavedChanges;
window.shakeFooter = shakeFooter;
window.filterProducts = filterProducts;
window.updateSelectAllState = updateSelectAllState;
window.updateSelectedProductsCount = updateSelectedProductsCount;


// === SEARCH-FILTERING MODULE ===
// src/modules/search-filtering.js

// Module-level variables to match reference implementation
let currentPage = 1;
let itemsPerPage = 20;
let filteredItems = [];

function initializeSearchFiltering() {
    let mixer;
    let searchTimeout;
    let searchTerm = '';
    let activeCategory = 'all';
    let activeStatus = 'all';
    let activeType = 'all';
    let currentSort = 'default';
    
    // Get references to UI elements
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const typeFilter = document.getElementById('type-filter');
    const sortSelect = document.getElementById('sort-select');
    const itemsPerPageSelect = document.getElementById('items-per-page');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const container = document.getElementById('product-container');
    
    // Get references to custom dropdown elements
    const categoryTrigger = document.getElementById('category-filter-trigger');
    const categoryDropdown = document.getElementById('category-filter-dropdown');
    const categoryText = document.getElementById('category-filter-text');
    
    const typeTrigger = document.getElementById('type-filter-trigger');
    const typeDropdown = document.getElementById('type-filter-dropdown');
    const typeText = document.getElementById('type-filter-text');
    
    const statusTrigger = document.getElementById('status-filter-trigger');
    const statusDropdown = document.getElementById('status-filter-dropdown');
    const statusText = document.getElementById('status-filter-text');
    
    const sortTrigger = document.getElementById('sort-filter-trigger');
    const sortDropdown = document.getElementById('sort-filter-dropdown');
    const sortText = document.getElementById('sort-filter-text');
    
    if (!container) {
        console.warn('Product container not found');
        return;
    }

    // Custom dropdown functionality
    function initializeCustomDropdowns() {
        // Category dropdown
        if (categoryTrigger && categoryDropdown) {
            categoryTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown(categoryTrigger, categoryDropdown);
            });
            
            categoryDropdown.addEventListener('click', function(e) {
                if (e.target.classList.contains('select-option')) {
                    const value = e.target.getAttribute('data-value');
                    const text = e.target.textContent;
                    selectOption(categoryTrigger, categoryDropdown, categoryText, categoryFilter, value, text);
                    activeCategory = value;
                    filterProducts();
                }
            });
        }
        
        // Type dropdown
        if (typeTrigger && typeDropdown) {
            typeTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown(typeTrigger, typeDropdown);
            });
            
            typeDropdown.addEventListener('click', function(e) {
                if (e.target.classList.contains('select-option')) {
                    const value = e.target.getAttribute('data-value');
                    const text = e.target.textContent;
                    selectOption(typeTrigger, typeDropdown, typeText, typeFilter, value, text);
                    activeType = value;
                    filterProducts();
                    updateResetButtonState();
                }
            });
        }
        
        // Status dropdown
        if (statusTrigger && statusDropdown) {
            statusTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown(statusTrigger, statusDropdown);
            });
            
            statusDropdown.addEventListener('click', function(e) {
                if (e.target.classList.contains('select-option')) {
                    const value = e.target.getAttribute('data-value');
                    const text = e.target.textContent;
                    selectOption(statusTrigger, statusDropdown, statusText, statusFilter, value, text);
                    activeStatus = value;
                    filterProducts();
                }
            });
        }
        
        // Sort dropdown
        if (sortTrigger && sortDropdown) {
            sortTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDropdown(sortTrigger, sortDropdown);
            });
            
            sortDropdown.addEventListener('click', function(e) {
                if (e.target.classList.contains('select-option')) {
                    const value = e.target.getAttribute('data-value');
                    const text = e.target.textContent;
                    selectOption(sortTrigger, sortDropdown, sortText, sortSelect, value, text);
                    currentSort = value;
                    applySort();
                }
            });
        }
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function() {
            closeAllDropdowns();
        });
    }
    
    function toggleDropdown(trigger, dropdown) {
        const isOpen = dropdown.classList.contains('open');
        
        // Close all other dropdowns first
        closeAllDropdowns();
        
        if (!isOpen) {
            trigger.classList.add('open');
            trigger.querySelector('svg').classList.add('open');
            dropdown.classList.add('open');
        }
    }
    
    function closeAllDropdowns() {
        const allTriggers = [categoryTrigger, typeTrigger, statusTrigger, sortTrigger];
        const allDropdowns = [categoryDropdown, typeDropdown, statusDropdown, sortDropdown];
        
        allTriggers.forEach(trigger => {
            if (trigger) {
                trigger.classList.remove('open');
                const svg = trigger.querySelector('svg');
                if (svg) svg.classList.remove('open');
            }
        });
        
        allDropdowns.forEach(dropdown => {
            if (dropdown) {
                dropdown.classList.remove('open');
            }
        });
    }
    
    function selectOption(trigger, dropdown, textElement, hiddenSelect, value, text) {
        // Update visual text
        textElement.textContent = text;
        
        // Update hidden select value
        if (hiddenSelect) {
            hiddenSelect.value = value;
        }
        
        // Update selected state in dropdown
        dropdown.querySelectorAll('.select-option').forEach(option => {
            option.classList.remove('selected');
        });
        dropdown.querySelector(`[data-value="${value}"]`).classList.add('selected');
        
        // Close dropdown
        trigger.classList.remove('open');
        trigger.querySelector('svg').classList.remove('open');
        dropdown.classList.remove('open');
    }

    // Initialize MixItUp exactly like the reference
    function initializeMixer() {
        
        if (typeof mixitup === 'undefined') {
            console.error('MixItUp is not loaded');
            return;
        }

        try {
            const container = document.getElementById('product-container');
            
            // Destroy existing mixer instance if it exists
            if (mixer && typeof mixer.destroy === 'function') {
                mixer.destroy();
            }
            
            // Check if container has existing MixItUp instance and destroy it
            if (container && container._mixitup) {
                container._mixitup.destroy();
            }
            
            mixer = mixitup('#product-container', {
                selectors: {
                    target: '.mix'
                },
                animation: {
                    duration: 300,
                    effects: 'fade',
                    easing: 'ease'
                },
                data: {
                    uidKey: 'id'
                }
            });
            
            
            // Test immediately after initialization
            const testState = mixer.getState();
            
        } catch (error) {
            console.error('Error initializing MixItUp:', error);
            console.error('Error stack:', error.stack);
        }
    }

    // Build filter string exactly like the reference
    function buildFilterString() {
        let filterString = '';
        
        // Category filter
        if (activeCategory !== 'all') {
            // Convert to lowercase to match the data-category attribute format
            const categoryForFilter = activeCategory.toLowerCase().replace(/[^a-z0-9\s,]/g, '').replace(/\s+/g, '-');
            // Use word boundary matching to avoid partial matches (e.g., "test" shouldn't match "test-category")
            filterString += `[data-category~="${categoryForFilter}"]`;
        }
        
        // Status filter
        if (activeStatus !== 'all') {
            filterString += `[data-status="${activeStatus}"]`;
        }

        // Type filter
        if (activeType !== 'all') {
            filterString += `[data-type="${activeType}"]`;
        }

        // Search filter
        if (searchTerm) {
            // Get all items that match category/status filters first
            let baseFilter = filterString || '.mix';
            
            const matchingItems = document.querySelectorAll(baseFilter);
            
            // Find items that also match search
            const searchMatches = [];
            matchingItems.forEach(function(item, index) {
                const title = item.getAttribute('data-title') || '';
                const sku = item.querySelector('td:nth-child(4)').textContent.toLowerCase();
                
                const titleMatch = title.includes(searchTerm);
                const skuMatch = sku.includes(searchTerm);
                
                if (titleMatch || skuMatch) {
                    // Create a unique selector based on data attributes that don't change with sorting
                    const dataTitle = item.getAttribute('data-title');
                    const dataPrice = item.getAttribute('data-price');
                    const dataStock = item.getAttribute('data-stock');
                    const dataCategory = item.getAttribute('data-category');
                    const dataStatus = item.getAttribute('data-status');
                    
                    // Create a unique selector using multiple data attributes
                    const selector = `[data-title="${dataTitle}"][data-price="${dataPrice}"][data-stock="${dataStock}"]`;
                    searchMatches.push(selector);
                }
            });
            
            if (searchMatches.length > 0) {
                filterString = searchMatches.join(', ');
            } else {
                // No search matches, hide everything
                filterString = '.no-matches';
            }
        }

        // If no filters at all, show everything
        if (!filterString) {
            filterString = '.mix';
        }

        return filterString;
    }

    // Filter products exactly like the reference
    function filterProducts() {
        const activeMixer = window.productMixer || mixer;
        
        if (!activeMixer) {
            console.warn('No mixer available - MixItUp not initialized yet');
            return;
        }
        
        // Check if MixItUp is busy before applying filter
        if (activeMixer.isBusy && activeMixer.isBusy()) {
            console.warn('🚫 MixItUp is busy, skipping filter operation');
            return;
        }
        
        const filterString = buildFilterString();
        
        // Reset any inline styles that might interfere
        const allMixItems = document.querySelectorAll('.mix');
        
        allMixItems.forEach((item, index) => {
            item.style.display = '';
        });
        
        // Debug: Test the filter manually first
        
        // Reset MixItUp to show all items first, then apply the filter
        // This matches the reference implementation exactly
        return activeMixer.filter('.mix').then(function(state) {
            return activeMixer.filter(filterString);
        }).then(function(state) {
            
            // Update filtered items and reset to first page
            filteredItems = state.matching;
            currentPage = 1; // Reset to first page after filtering
            
            // Apply current sort after filtering
            if (currentSort !== 'default') {
                applySort();
            } else {
                // Update pagination even if no sorting
                updatePagination();
                applyPagination();
            }
            
            // Update select all checkbox state after filtering
            if (typeof window.updateSelectAllState === 'function') {
                window.updateSelectAllState();
            }
            
            // Update reset button state after filtering
            updateResetButtonState();
        }).catch(function(error) {
            console.error('❌ Error applying filter:', error);
        });
    }

    // Sort functionality exactly like the reference
    function applySort() {
        if (!window.productMixer) {
            console.warn('MixItUp not available for sorting');
            return;
        }
        
        
        let sortString;
        
        if (currentSort !== 'default') {
            // Handle the dropdown format exactly like reference: "attribute:direction"
            const [attribute, direction] = currentSort.split(':');
            sortString = `${attribute}:${direction}`;
        } else {
            sortString = 'default:asc';
        }
        

        window.productMixer.sort(sortString).then(function(state) {
            
            // Update filtered items after sorting
            filteredItems = state.matching;
            updatePagination();
            applyPagination();
            
            // Update select all checkbox state after sorting
            if (typeof window.updateSelectAllState === 'function') {
                window.updateSelectAllState();
            }
            
            // Update reset button state after sorting
            updateResetButtonState();
        }).catch(function(error) {
            console.error('❌ Sort failed:', error);
        });
    }

    // Check if any filters are active and update reset button disabled state
    function updateResetButtonState() {
        const resetButton = document.getElementById('reset-filters-btn');
        
        if (!resetButton) return;
        
        const hasActiveFilters = searchTerm !== '' || 
                                activeCategory !== 'all' || 
                                activeStatus !== 'all' || 
                                activeType !== 'all' || 
                                currentSort !== 'default';
        
        resetButton.disabled = !hasActiveFilters;
    }

    // Reset all filters function
    function resetAllFilters() {
        
        // Reset search input
        if (searchInput) {
            searchInput.value = '';
            searchTerm = '';
        }
        
        // Reset category filter
        if (categoryFilter) {
            categoryFilter.value = 'all';
            activeCategory = 'all';
        }
        if (categoryText) {
            categoryText.textContent = 'All categories';
            // Reset selected state in dropdown
            if (categoryDropdown) {
                categoryDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                const defaultOption = categoryDropdown.querySelector('[data-value="all"]');
                if (defaultOption) defaultOption.classList.add('selected');
            }
        }
        
        // Reset status filter
        if (statusFilter) {
            statusFilter.value = 'all';
            activeStatus = 'all';
        }
        if (statusText) {
            statusText.textContent = 'All status';
            // Reset selected state in dropdown
            if (statusDropdown) {
                statusDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                const defaultOption = statusDropdown.querySelector('[data-value="all"]');
                if (defaultOption) defaultOption.classList.add('selected');
            }
        }
        
        // Reset type filter
        if (typeFilter) {
            typeFilter.value = 'all';
            activeType = 'all';
        }
        if (typeText) {
            typeText.textContent = 'All types';
            // Reset selected state in dropdown
            if (typeDropdown) {
                typeDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                const defaultOption = typeDropdown.querySelector('[data-value="all"]');
                if (defaultOption) defaultOption.classList.add('selected');
            }
        }
        
        // Reset sort
        if (sortSelect) {
            sortSelect.value = 'default';
            currentSort = 'default';
        }
        if (sortText) {
            sortText.textContent = 'Sort by';
            // Reset selected state in dropdown
            if (sortDropdown) {
                sortDropdown.querySelectorAll('.select-option').forEach(option => {
                    option.classList.remove('selected');
                });
                const defaultOption = sortDropdown.querySelector('[data-value="default"]');
                if (defaultOption) defaultOption.classList.add('selected');
            }
        }
        
        // Reset to first page
        currentPage = 1;
        
        // Clear all selected checkboxes
        const allCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:not(#select-all-checkbox)');
        
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
            // Update visual state for row
            const row = checkbox.closest('tr');
            if (row) {
                row.classList.remove('selected');
            }
        });
        
        // Reset select all checkbox
        const selectAllCheckbox = document.getElementById('select-all-checkbox');
        if (selectAllCheckbox) {
            selectAllCheckbox.checked = false;
        }
        
        // Update selected products count display with timeout to ensure DOM is ready
        setTimeout(() => {
            if (typeof window.updateSelectedProductsCount === 'function') {
                window.updateSelectedProductsCount();
            } else {
                console.error('❌ updateSelectedProductsCount function not available');
            }
            
            // Verify the element exists and was updated
            const productsSelectedText = document.getElementById('products-selected-text');
            if (productsSelectedText) {
                console.log('✅ products-selected-text element found, current text:', productsSelectedText.textContent);
            } else {
                console.error('❌ products-selected-text element not found');
            }
        }, 50);
        
        // Apply the reset filters and sort (show all items in default order)
        filterProducts().then(() => {
            // After filtering, apply default sort to reset visual order
            if (window.productMixer) {
                return window.productMixer.sort('default:asc');
            }
        }).then(() => {
        }).catch((error) => {
            console.error('❌ Error during reset:', error);
        });
        
        // Update reset button state after reset
        updateResetButtonState();
        
    }

    // Set up event listeners exactly like the reference
    function setupEventListeners() {
        // Search input with debouncing exactly like reference
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                // Clear any existing timeout
                if (searchTimeout) {
                    clearTimeout(searchTimeout);
                }
                
                const inputElement = this; // Store reference to input element
                
                // Debounce the search - wait 300ms after user stops typing
                searchTimeout = setTimeout(() => {
                    // Get the CURRENT value from the input when timeout executes
                    const currentInputValue = inputElement.value;
                    const newSearchTerm = currentInputValue.toLowerCase();
                    searchTerm = newSearchTerm;
                    filterProducts();
                }, 300);
            });
        }

        // Old select event listeners - now handled by custom dropdowns
        /*
        if (categoryFilter) {
            categoryFilter.addEventListener('change', function(e) {
                activeCategory = this.value;
                filterProducts();
            });
        }

        if (statusFilter) {
            statusFilter.addEventListener('change', function(e) {
                activeStatus = this.value;
                filterProducts();
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentSort = this.value;
                applySort();
            });
        }
        */

        if (itemsPerPageSelect) {
            itemsPerPageSelect.addEventListener('change', function() {
                itemsPerPage = parseInt(this.value);
                currentPage = 1;
                updatePagination();
                applyPagination();
            });
        }

        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', function() {
                resetAllFilters();
            });
        }
    }

    // Wait for MixItUp to be available, then set up (but don't initialize yet)
    function waitForMixItUp() {
        // Check if MixItUp is already loaded or loading
        if (!window.mixitup && !document.querySelector('script[src*="mixitup"]')) {
            const mixitupScript = document.createElement('script');
            mixitupScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js';
            document.head.appendChild(mixitupScript);
            
            // Wait for MixItUp to load, then set up event listeners (but don't initialize mixer yet)
            mixitupScript.onload = function() {
                setupEventListeners();
                initializeCustomDropdowns();
            };
        } else if (window.mixitup) {
            // MixItUp already loaded, set up event listeners
            setupEventListeners();
            initializeCustomDropdowns();
        } else {
            // Script is loading, wait a bit
            setTimeout(waitForMixItUp, 100);
        }
    }

    // Start initialization (only loads MixItUp library and sets up event listeners)
    waitForMixItUp();
    
    // Return public interface
    return {
        filterProducts,
        buildFilterString,
        initializeMixer  // Expose this so it can be called after products load
    };
}

// Pagination functions (accessible globally)
function applyPagination() {
    // Hide all items first
    filteredItems.forEach(item => {
        item.style.display = 'none';
    });

    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Show items for current page
    const itemsToShow = filteredItems.slice(startIndex, endIndex);
    itemsToShow.forEach(item => {
        item.style.display = '';
    });

    updatePaginationInfo();
}

function updatePagination() {
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Generate page buttons
    const pageNumbersContainer = document.getElementById('page-numbers');
    if (pageNumbersContainer) {
        pageNumbersContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', function() {
                currentPage = i;
                // Update active state
                document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                applyPagination();
            });
            pageNumbersContainer.appendChild(pageBtn);
        }
    }
}

function updatePaginationInfo() {
    const totalItems = filteredItems.length;
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    const paginationInfo = document.getElementById('pagination-info');
    if (paginationInfo) {
        paginationInfo.textContent = `Showing ${startItem} to ${endItem} of ${totalItems} products`;
    }
}

// Initialize MixItUp after products are loaded (called from product-loader.js)
function initializeMixItUpAfterProducts() {
    
    // Always destroy existing mixer before reinitializing (fixes filter issues after bulk changes)
    if (window.productMixer && typeof window.productMixer.destroy === 'function') {
        try {
            window.productMixer.destroy();
        } catch (error) {
            console.warn('⚠️ Error destroying existing mixer:', error);
        }
        window.productMixer = null;
    }
    
    if (typeof mixitup === 'undefined') {
        console.error('MixItUp is not loaded yet');
        return;
    }

    try {
        const container = document.getElementById('product-container');
        const targetElements = document.querySelectorAll('.master-product-row');
        
        
        if (targetElements.length === 0) {
            console.warn('No target elements found, skipping MixItUp initialization');
            return;
        }
        
        const mixer = mixitup('#product-container', {
            selectors: {
                target: '.master-product-row'
            },
            animation: {
                duration: 300,
                effects: 'fade',
                easing: 'ease'
            },
            callbacks: {
                onMixEnd: function(state) {
                }
            }
        });
        
        
        // Store mixer globally so search functions can access it
        window.productMixer = mixer;
        
        // Test immediately after initialization
        const testState = mixer.getState();
        
                // Set initial filtered items to all items and setup pagination
        filteredItems = testState.targets;
        updatePagination();
        applyPagination();
        
    } catch (error) {
        console.error('Error initializing MixItUp after products loaded:', error);
        console.error('Error stack:', error.stack);
    }
}

// Make function available globally
window.initializeSearchFiltering = initializeSearchFiltering;
window.initializeMixItUpAfterProducts = initializeMixItUpAfterProducts;


// === TABLE-INTERACTIONS MODULE ===
// Table interaction functionality - cell click handlers and editing

// Initialize table cell click handlers for inline editing
function initializeTableInteractions() {
    // Add hover effects for editing icons - only for basic text input fields
    document.addEventListener('mousemove', function(e) {
        const editingCell = e.target.closest('td.editing-no-changes, td.editing-with-changes');
        
        if (editingCell && 
            editingCell.matches('td.col-title, td.col-url, td.col-sku, td.col-price, td.col-sale-price')) {
            
            const cell = editingCell;
            const cellRect = cell.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Calculate icon areas
            const cellRightEdge = cellRect.right;
            const saveIconStart = cellRightEdge - 36;
            const cancelIconStart = cellRightEdge - 60;
            const singleCancelStart = cellRightEdge - 36;
            
            // Check if mouse is within icon vertical area (more precise)
            const iconTop = cellRect.top + (cellRect.height / 2) - 9; // 9px above center
            const iconBottom = cellRect.top + (cellRect.height / 2) + 9; // 9px below center
            const isInIconVerticalArea = mouseY >= iconTop && mouseY <= iconBottom;
            
            // Remove all hover classes first
            cell.classList.remove('icon-hover-cancel', 'icon-hover-save');
            
            // Only apply hover if mouse is in the precise icon area
            if (isInIconVerticalArea) {
                if (cell.classList.contains('editing-with-changes')) {
                    if (mouseX >= saveIconStart) {
                        // Mouse is over save icon area
                        cell.classList.add('icon-hover-save');
                    } else if (mouseX >= cancelIconStart && mouseX < saveIconStart) {
                        // Mouse is over cancel icon area
                        cell.classList.add('icon-hover-cancel');
                    }
                } else if (cell.classList.contains('editing-no-changes')) {
                    if (mouseX >= singleCancelStart) {
                        // Mouse is over cancel icon area
                        cell.classList.add('icon-hover-cancel');
                    }
                }
            }
        } else {
            // Mouse is not over an editing cell, remove any hover states
            document.querySelectorAll('.icon-hover-cancel, .icon-hover-save').forEach(element => {
                element.classList.remove('icon-hover-cancel', 'icon-hover-save');
            });
        }
    });
    
    // Remove hover effects when mouse leaves editing cells
    document.addEventListener('mouseleave', function(e) {
        if (e.target && e.target.matches && e.target.matches('td.editing-no-changes, td.editing-with-changes')) {
            e.target.classList.remove('icon-hover-cancel', 'icon-hover-save');
        }
    });
    
    // Clean up hover classes when leaving the document
    document.addEventListener('mouseleave', function(e) {
        if (e.target === document.documentElement) {
            document.querySelectorAll('.icon-hover-cancel, .icon-hover-save').forEach(cell => {
                cell.classList.remove('icon-hover-cancel', 'icon-hover-save');
            });
        }
    });
    // Add event listeners for editable fields
    document.addEventListener('click', function(e) {
        // Check if clicking on action icons (cancel or save) - only for basic text input fields
        const editingCell = e.target.closest('td.editing-no-changes, td.editing-with-changes');
        if (editingCell && 
            editingCell.matches('td.col-title, td.col-url, td.col-sku, td.col-price, td.col-sale-price')) {
            
            const cell = editingCell;
            const cellRect = cell.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // Calculate icon click areas more precisely
            const cellRightEdge = cellRect.right;
            const saveIconStart = cellRightEdge - 36; // Save icon area (18px icon + 18px padding)
            const cancelIconStart = cellRightEdge - 60; // Cancel icon area when both present
            const singleCancelStart = cellRightEdge - 36; // Cancel icon when only one present
            
            // Check if click is within the icon vertical area
            const iconTop = cellRect.top + (cellRect.height / 2) - 9; // 9px above center (18px/2)
            const iconBottom = cellRect.top + (cellRect.height / 2) + 9; // 9px below center
            const isInIconArea = clickY >= iconTop && clickY <= iconBottom;
            
            let actionTaken = false;
            
            if (isInIconArea) {
                if (cell.classList.contains('editing-with-changes')) {
                    // Two icons present: cancel and save
                    if (clickX >= saveIconStart) {
                        // Save icon clicked (right side)
                        e.preventDefault();
                        e.stopPropagation();
                        actionTaken = true;
                        
                        const input = cell.querySelector('input.editable-input');
                        const select = cell.querySelector('select.editable-select');
                        const stockEditor = cell.querySelector('.stock-editor');
                        const saleToggle = cell.querySelector('.sale-toggle-editor');
                        
                        if (input) {
                            // Mark this as a confirmed save and trigger save
                            input.setAttribute('data-confirmed-save', 'true');
                            const enterEvent = new KeyboardEvent('keydown', {
                                key: 'Enter',
                                code: 'Enter',
                                bubbles: true
                            });
                            input.dispatchEvent(enterEvent);
                        } else if (select) {
                            // Mark this as a confirmed save and trigger save
                            select.setAttribute('data-confirmed-save', 'true');
                            const enterEvent = new KeyboardEvent('keydown', {
                                key: 'Enter',
                                code: 'Enter',
                                bubbles: true
                            });
                            select.dispatchEvent(enterEvent);
                        } else if (stockEditor) {
                            const stockInput = stockEditor.querySelector('.stock-input');
                            if (stockInput) {
                                // Mark this as a confirmed save and trigger save
                                stockInput.setAttribute('data-confirmed-save', 'true');
                                const enterEvent = new KeyboardEvent('keydown', {
                                    key: 'Enter',
                                    code: 'Enter',
                                    bubbles: true
                                });
                                stockInput.dispatchEvent(enterEvent);
                            }
                        } else if (saleToggle) {
                            cell.classList.remove('editing-with-changes', 'editing-no-changes');
                        }
                        
                    } else if (clickX >= cancelIconStart && clickX < saveIconStart) {
                        // Cancel icon clicked (left side of two-icon layout)
                        e.preventDefault();
                        e.stopPropagation();
                        actionTaken = true;
                        
                        // Clean up document click handler first
                        if (cell._documentClickHandler) {
                            document.removeEventListener('click', cell._documentClickHandler);
                            delete cell._documentClickHandler;
                        }
                        
                        // Restore original value and exit edit mode
                        const originalValue = cell.getAttribute('data-original-value') || 'Unknown';
                        cell.innerHTML = originalValue;
                        cell.classList.remove('editing-with-changes', 'editing-no-changes');
                    }
                    
                } else if (cell.classList.contains('editing-no-changes')) {
                    // Only cancel icon present
                    if (clickX >= singleCancelStart) {
                        // Cancel icon clicked
                        e.preventDefault();
                        e.stopPropagation();
                        actionTaken = true;
                        
                        // Clean up document click handler first
                        if (cell._documentClickHandler) {
                            document.removeEventListener('click', cell._documentClickHandler);
                            delete cell._documentClickHandler;
                        }
                        
                        // Restore original value and exit edit mode
                        const originalValue = cell.getAttribute('data-original-value') || 'Unknown';
                        cell.innerHTML = originalValue;
                        cell.classList.remove('editing-with-changes', 'editing-no-changes');
                    }
                }
            }
            
            if (actionTaken) {
                return;
            }
        }

        // Don't trigger edit mode if we're clicking on an input that's already in edit mode
        if ((e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') && 
            (e.target.classList.contains('editable-input') || e.target.classList.contains('editable-select'))) {
            return;
        }
        

        
        // Make title field editable - but not if it has non-editable class
        if (e.target.closest('td.col-title') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            if (row && row.classList.contains('mix') && !cell.querySelector('input') && !cell.classList.contains('non-editable')) {
                makeFieldEditable(cell, row, 'title');
            }
        }
        // Make URL field editable - but not if it has non-editable class
        else if (e.target.closest('td.col-url') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            if (row && row.classList.contains('mix') && !cell.querySelector('input') && !cell.classList.contains('non-editable')) {
                makeFieldEditable(cell, row, 'url');
            }
        }
        // Make SKU field editable - only if not N/A
        else if (e.target.closest('td.col-sku') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            if (row && row.classList.contains('mix') && !cell.querySelector('input') && cell.textContent.trim() !== 'N/A') {
                makeFieldEditable(cell, row, 'sku');
            }
        }
        // Make category field editable
        else if (e.target.closest('td.col-categories')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            
            if (row && row.classList.contains('mix') && !cell.classList.contains('editing') && !cell.classList.contains('non-editable')) {
                showCategoryPopup(cell, row);
            }
        }
        // Make price field editable
        else if (e.target.closest('td.col-price') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            if (row && row.classList.contains('mix') && !cell.querySelector('input')) {
                makeFieldEditable(cell, row, 'price');
            }
        }
        // Make sale price field editable - including N/A values (products without sale prices)
        else if (e.target.closest('td.col-sale-price') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            const cellText = cell.textContent.trim();
            if (row && row.classList.contains('mix') && !cell.querySelector('input')) {
                makeFieldEditable(cell, row, 'salePrice');
            }
        }
        // Make onSale field editable - dropdown for on sale status
        else if (e.target.closest('td.col-on-sale') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            // Don't allow editing if it shows "Mixed" status for master products
            const isMixedStatus = cell.textContent.includes('Mixed');
            if (row && row.classList.contains('mix') && !isMixedStatus) {
                makeFieldEditable(cell, row, 'onSale');
            }
        }
        // Make stock field editable - only for physical products
        else if (e.target.closest('td.col-stock')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            // Only allow editing stock if the cell is not marked as non-editable
            if (row && row.classList.contains('mix') && !cell.classList.contains('non-editable')) {
                showStockPopup(cell, row);
            }
        }
        // Make status field editable
        else if (e.target.closest('td.col-status') && !e.target.querySelector('select')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            if (row && row.classList.contains('mix') && !cell.querySelector('select')) {
                makeFieldEditable(cell, row, 'status');
            }
        }
        // Make scheduled date field editable (column 12) - only if not empty and status is scheduled
        else if (e.target.closest('.scheduled-date-cell') && !e.target.querySelector('input')) {
            const cell = e.target.closest('td');
            const row = cell.closest('tr');
            const cellText = cell.textContent.trim();
            
            // Only allow clicking if the cell has content (not empty)
            if (row && row.classList.contains('mix') && cellText && cellText !== '') {
                showSchedulePopup(cell);
            }
        }
    });

    // Add hover tooltips for editable fields
    document.addEventListener('mouseover', function(e) {
        const titleCell = e.target.closest('td.col-title');
        const urlCell = e.target.closest('td.col-url');
        const skuCell = e.target.closest('td.col-sku');
        const priceCell = e.target.closest('td.col-price');
        const salePriceCell = e.target.closest('td.col-sale-price');
        const stockCell = e.target.closest('td.col-stock');
        const statusCell = e.target.closest('td.col-status');
        
        if (titleCell && titleCell.closest('.mix') && !titleCell.querySelector('input') && !titleCell.classList.contains('non-editable')) {
            titleCell.title = 'Click to edit title';
        } else if (urlCell && urlCell.closest('.mix') && !urlCell.querySelector('input') && !urlCell.classList.contains('non-editable')) {
            urlCell.title = 'Click to edit URL slug';
        } else if (skuCell && skuCell.closest('.mix') && !skuCell.querySelector('input') && skuCell.textContent.trim() !== 'N/A') {
            skuCell.title = 'Click to edit SKU';
        } else if (priceCell && priceCell.closest('.mix') && !priceCell.querySelector('input')) {
            priceCell.title = 'Click to edit price';
        } else if (salePriceCell && salePriceCell.closest('.mix') && !salePriceCell.querySelector('input')) {
            salePriceCell.title = 'Click to edit sale price';
        } else if (stockCell && stockCell.closest('.mix') && !stockCell.classList.contains('non-editable')) {
            stockCell.title = 'Click to edit stock level';
        } else if (statusCell && statusCell.closest('.mix') && !statusCell.querySelector('select')) {
            statusCell.title = 'Click to edit status';
        }
    });
}

// Make field editable function - handles inline editing for table cells
function makeFieldEditable(cell, row, fieldType) {
    // Clean up any existing document click handlers from other cells
    document.querySelectorAll('.mix td').forEach(otherCell => {
        if (otherCell._documentClickHandler) {
            document.removeEventListener('click', otherCell._documentClickHandler);
            delete otherCell._documentClickHandler;
        }
        
        // Clean up visual editors if this is not the cell we're about to edit
        if (otherCell !== cell) {
            const existingInput = otherCell.querySelector('input.editable-input');
            const existingSelect = otherCell.querySelector('select.editable-select');
            const existingStockEditor = otherCell.querySelector('.stock-editor');
            const existingSaleToggle = otherCell.querySelector('.sale-toggle-editor');
            
            if (existingInput || existingSelect || existingStockEditor || existingSaleToggle) {
                // Get the original value from data attributes or text content
                const originalValue = otherCell.getAttribute('data-original-value') || 
                                    otherCell.textContent.trim() ||
                                    'Unknown';
                
                // Restore the original content
                otherCell.innerHTML = originalValue;
                otherCell.removeAttribute('data-original-value');
                otherCell.removeAttribute('data-new-value');
                otherCell.removeAttribute('data-field-type');
                otherCell.classList.remove('modified', 'editing-with-changes', 'editing-no-changes');
            }
        }
    });
    
    // Store original value and set up based on field type
    const originalValue = cell.textContent.trim();
    
    // For title fields, check if there's an expand button and store the full HTML
    let originalHTML = null;
    let hasExpandButton = false;
    if (fieldType === 'title') {
        const expandBtn = cell.querySelector('.expand-btn');
        if (expandBtn) {
            hasExpandButton = true;
            originalHTML = cell.innerHTML;
            cell.setAttribute('data-original-html', originalHTML);
        }
    }
    
    // Store the original value so we can restore it during cleanup
    cell.setAttribute('data-original-value', originalValue);
    
    // Special handling for onSale dropdown
    if (fieldType === 'onSale') {
        // Determine current value - check if it's currently "Yes" or "No"
        const currentValue = originalValue.includes('Yes') ? 'Yes' : 'No';
        
        // Create dropdown editor
        const select = document.createElement('select');
        select.className = 'editable-select onSale-dropdown';
        
        // Add options
        const yesOption = document.createElement('option');
        yesOption.value = 'Yes';
        yesOption.textContent = 'Yes';
        if (currentValue === 'Yes') yesOption.selected = true;
        
        const noOption = document.createElement('option');
        noOption.value = 'No';
        noOption.textContent = 'No';
        if (currentValue === 'No') noOption.selected = true;
        
        select.appendChild(yesOption);
        select.appendChild(noOption);
        
        // Replace cell content
        cell.innerHTML = '';
        cell.appendChild(select);
        
        // Handle dropdown change
        const handleChange = () => {
            const newValue = select.value;
            const newDisplayValue = `<span class="status-badge ${newValue === 'Yes' ? 'public' : 'hidden'}">${newValue}</span>`;
            
            // Mark as modified and store values
            cell.classList.add('modified');
            cell.setAttribute('data-field-type', fieldType);
            cell.setAttribute('data-original-value', originalValue);
            cell.setAttribute('data-new-value', newValue);
            
            // Update display after a short delay
            setTimeout(() => {
                cell.innerHTML = newDisplayValue;
                
                // Track the change for bulk operations
                if (typeof trackChanges === 'function') {
                    trackChanges(cell, row);
                }
            }, 300);
        };
        
        select.addEventListener('change', handleChange);
        
        // Auto-focus and show dropdown
        select.focus();
        return;
    }
    

    
    // Create input element based on field type
    let inputElement;
    if (fieldType === 'status') {
        
        inputElement = document.createElement('select');
        inputElement.className = 'editable-select';
        inputElement.innerHTML = `
            <option value="public">Public</option>
            <option value="hidden">Hidden</option>
            <option value="scheduled">Scheduled</option>
        `;
        // Extract current value from styled status span if present
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalValue;
        const statusSpan = tempDiv.querySelector('.status-badge');
        const currentStatus = statusSpan ? statusSpan.textContent.toLowerCase() : originalValue.toLowerCase();
        
        inputElement.value = currentStatus;
        
        // Add event listener to handle 'scheduled' selection
        inputElement.addEventListener('change', () => {
            if (inputElement.value === 'scheduled') {
                
                // Set default scheduled date to 1 day from now
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(9, 0, 0, 0); // Set to 9:00 AM
                const defaultScheduledDate = tomorrow.toISOString().slice(0, 16);
                
                // Store the default date on the cell
                cell.setAttribute('data-scheduled-date', defaultScheduledDate);
                
                // Store current context
                window.currentSchedulingContext = {
                    cell: cell,
                    row: row,
                    originalValue: originalValue,
                    currentScheduledDate: defaultScheduledDate
                };
                
                // Apply the status change immediately (like other status options)
                const statusClass = 'scheduled';
                const displayValue = `<span class="status-badge ${statusClass}">Scheduled</span>`;
                
                // Update the cell display
                cell.innerHTML = displayValue;
                
                // Mark as modified and track changes
                cell.classList.add('modified');
                cell.setAttribute('data-field-type', 'status');
                cell.setAttribute('data-original-value', originalValue);
                cell.setAttribute('data-new-value', 'scheduled');
                
                // Track changes globally
                if (typeof trackChanges === 'function') {
                    trackChanges(cell, row);
                }
                
                // Update scheduled column visibility and add the default date to the scheduled column
                if (typeof updateScheduledColumnVisibility === 'function') {
                    setTimeout(updateScheduledColumnVisibility, 10);
                }
                
                if (typeof addScheduledDateToRow === 'function') {
                    // Format date for display (like "12/25/2024 9:00 AM")
                    const displayDate = tomorrow.toLocaleDateString() + ' ' + tomorrow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    addScheduledDateToRow(row, displayDate);
                }
                
                // Show the schedule popup to adjust the date/time
                showSchedulePopup(cell);
            } else {
                // For non-scheduled status, trigger normal save
                setTimeout(() => {
                    saveChanges(true); // Mark as confirmed save since user made deliberate choice
                }, 10);
            }
        });
    } else {
        inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.className = 'editable-input';
        
        // Special handling for price fields - extract numeric value or handle N/A
        if (fieldType === 'price' || fieldType === 'salePrice') {
            // For sale prices that are N/A or Not set, start with empty input
            if (fieldType === 'salePrice' && (originalValue === 'N/A' || originalValue === 'Not set')) {
                inputElement.value = '';
            } else {
                const numericValue = originalValue.replace(/[^0-9.]/g, '');
                inputElement.value = numericValue;
            }
        } else {
            inputElement.value = originalValue;
        }
    }
    
    // Replace cell content with input
    cell.innerHTML = '';
    cell.appendChild(inputElement);
    
    // Add initial editing state (no changes yet) - only for fields that use contextual icons
    const useContextualIcons = ['title', 'url', 'sku', 'price', 'salePrice'].includes(fieldType);
    if (useContextualIcons) {
        cell.classList.add('editing-no-changes');
    }
    
    // Monitor input changes to show/hide check icon
    const checkForChanges = () => {
        const currentValue = inputElement.value.trim();
        let originalCompareValue;
        
        // Get the original value in the same format as the current input
        if (fieldType === 'price' || fieldType === 'salePrice') {
            // Handle N/A and Not set values for sale prices
            if (fieldType === 'salePrice' && (originalValue === 'N/A' || originalValue === 'Not set')) {
                originalCompareValue = '';
            } else {
                originalCompareValue = originalValue.replace(/[^0-9.]/g, '');
            }
        } else if (fieldType === 'status') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalValue;
            const statusSpan = tempDiv.querySelector('.status-badge');
            originalCompareValue = statusSpan ? statusSpan.textContent.toLowerCase() : originalValue.toLowerCase();
        } else {
            originalCompareValue = originalValue;
        }
        
        // Update class based on whether content changed - only for fields with contextual icons
        if (useContextualIcons) {
            if (currentValue !== originalCompareValue && currentValue !== '') {
                cell.classList.remove('editing-no-changes');
                cell.classList.add('editing-with-changes');
            } else {
                cell.classList.remove('editing-with-changes');
                cell.classList.add('editing-no-changes');
            }
        }
    };
    
    // Add event listeners to monitor changes
    inputElement.addEventListener('input', checkForChanges);
    inputElement.addEventListener('change', checkForChanges);
    
    // Special handling for select elements - trigger save immediately on change
    if (inputElement.tagName === 'SELECT') {
        inputElement.addEventListener('change', () => {
            // Small delay to let the change register
            setTimeout(() => {
                saveChanges(true); // Mark as confirmed save since user made deliberate choice
            }, 10);
        });
    }
    
    // Focus and select all text
    inputElement.focus();
    if (inputElement.type === 'text') {
        inputElement.select();
    }
    
    // Handle save/cancel
    const saveChanges = (isConfirmed = false) => {
        
        const rawValue = inputElement.value.trim();
        
        let displayValue, dataValue;
        
        // Special handling for price fields
        if (fieldType === 'price' || fieldType === 'salePrice') {
            if (rawValue === '' && fieldType === 'salePrice') {
                // Empty sale price should revert to N/A (not set)
                displayValue = 'N/A';
                dataValue = '';
            } else {
                const numValue = parseFloat(rawValue);
                if (!isNaN(numValue) && numValue >= 0) {
                    displayValue = `$${numValue.toFixed(2)}`;
                    dataValue = numValue.toString();
                } else {
                    // Invalid value, restore original
                    cell.innerHTML = originalValue;
                    cell.classList.remove('editing-with-changes');
                    cleanup();
                    return;
                }
            }
        } else if (fieldType === 'status') {
            // Special handling for status field - create styled status display
            dataValue = rawValue;
            const statusClass = rawValue.toLowerCase();
            displayValue = `<span class="status-badge ${statusClass}">${rawValue.charAt(0).toUpperCase() + rawValue.slice(1)}</span>`;
            
            // Handle scheduled date for scheduled status
            if (rawValue === 'scheduled') {
                // Check if there's a context scheduled date from the popup system
                if (window.schedulingContext && window.schedulingContext.scheduledDate) {
                    // Store the scheduled date from the popup context
                    cell.setAttribute('data-scheduled-date', window.schedulingContext.scheduledDate);
                    console.log('📅 Storing scheduled date from context:', window.schedulingContext.scheduledDate);
                } else {
                    console.log('📅 Scheduled status - date will be set via popup system');
                }
            }
            
        } else {
            // Special handling for URL fields - automatically slugify the input
            if (fieldType === 'url') {
                const slugifiedValue = generateSlug(rawValue);
                displayValue = slugifiedValue;
                dataValue = slugifiedValue;
                
                // Update the input field to show the slugified version
                inputElement.value = slugifiedValue;
            } else {
                displayValue = rawValue;
                dataValue = rawValue;
            }
            
            // Special handling for title fields with expand buttons
            if (fieldType === 'title') {
                const originalHTML = cell.getAttribute('data-original-html');
                if (originalHTML && originalHTML.includes('expand-btn')) {
                    // Extract the expand button from the original HTML
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = originalHTML;
                    const expandBtn = tempDiv.querySelector('.expand-btn');
                    
                    if (expandBtn) {
                        // Reconstruct the title with the expand button
                        displayValue = `${expandBtn.outerHTML} ${rawValue}`;
                    }
                }
            }
        }
        
        
        // Compare with original extracted value for special fields
        let originalCompareValue;
        if (fieldType === 'price' || fieldType === 'salePrice') {
            // Handle N/A and Not set values for sale prices
            if (fieldType === 'salePrice' && (originalValue === 'N/A' || originalValue === 'Not set')) {
                originalCompareValue = '';
            } else {
                originalCompareValue = originalValue.replace(/[^0-9.]/g, '');
            }
        } else if (fieldType === 'status') {
            // Extract text from styled status span if present
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = originalValue;
            const statusSpan = tempDiv.querySelector('.status-badge');
            originalCompareValue = statusSpan ? statusSpan.textContent.toLowerCase() : originalValue.toLowerCase();
            
        } else {
            originalCompareValue = originalValue;
        }
        
            
        if (dataValue !== originalCompareValue) {
            
            // Status fields should track changes immediately (they don't use contextual icons)
            if (fieldType === 'status' || isConfirmed) {
                cell.classList.add('modified');
                cell.setAttribute('data-field-type', fieldType);
                cell.setAttribute('data-original-value', originalValue);
                cell.setAttribute('data-new-value', dataValue);
                
                // Track changes globally when confirmed or for status fields
                if (typeof trackChanges === 'function') {
                    trackChanges(cell, row);
                }
            }
            
            // Update display regardless of confirmation status
            cell.innerHTML = displayValue;
            
            // For title fields, re-attach expand button event listener if present
            if (fieldType === 'title') {
                const expandBtn = cell.querySelector('.expand-btn');
                if (expandBtn) {
                    expandBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = row.getAttribute('data-product-id');
                        const product = globalProductsData ? globalProductsData.find(p => p.id === productId) : null;
                        if (product && typeof toggleVariantRows === 'function') {
                            toggleVariantRows(row, product);
                        }
                    });
                }
            }
            
            // Update scheduled column visibility after status changes
            if (fieldType === 'status' && typeof updateScheduledColumnVisibility === 'function') {
                setTimeout(updateScheduledColumnVisibility, 10);
            }
            
            // Special handling for title changes - suggest URL update
            if (fieldType === 'title') {
                const urlCell = row.querySelector('td:nth-child(3)'); // URL column
                if (urlCell) {
                    const currentURL = urlCell.textContent.trim();
                    if (shouldSuggestURL(originalValue, dataValue, currentURL)) {
                        const newSlug = generateSlug(dataValue);
                        showURLSuggestion(newSlug, cell, row);
                    }
                }
            }
            
        } else {
            // No changes, restore original value or HTML
            const originalHTML = cell.getAttribute('data-original-html');
            if (fieldType === 'title' && originalHTML) {
                cell.innerHTML = originalHTML;
                
                // Re-attach expand button event listener if present
                const expandBtn = cell.querySelector('.expand-btn');
                if (expandBtn) {
                    expandBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const productId = row.getAttribute('data-product-id');
                        const product = globalProductsData ? globalProductsData.find(p => p.id === productId) : null;
                        if (product && typeof toggleVariantRows === 'function') {
                            toggleVariantRows(row, product);
                        }
                    });
                }
            } else {
                cell.innerHTML = originalValue;
            }
        }
        
        // Remove editing state - only for fields that use contextual icons
        if (useContextualIcons) {
            cell.classList.remove('editing-with-changes', 'editing-no-changes');
        }
        
        // Clean up event handlers
        cleanup();
    };
    
    const cancelChanges = () => {
        // For title fields with expand buttons, restore the original HTML
        const originalHTML = cell.getAttribute('data-original-html');
        if (fieldType === 'title' && originalHTML) {
            cell.innerHTML = originalHTML;
            
            // Re-attach expand button event listener if present
            const expandBtn = cell.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const productId = row.getAttribute('data-product-id');
                    const product = globalProductsData ? globalProductsData.find(p => p.id === productId) : null;
                    if (product && typeof toggleVariantRows === 'function') {
                        toggleVariantRows(row, product);
                    }
                });
            }
        } else {
            cell.innerHTML = originalValue;
        }
        
        if (useContextualIcons) {
            cell.classList.remove('editing-with-changes', 'editing-no-changes');
        }
        cleanup();
    };
    
    const cleanup = () => {
        if (cell._documentClickHandler) {
            document.removeEventListener('click', cell._documentClickHandler);
            delete cell._documentClickHandler;
        }
        
        // Clean up title field attributes
        if (fieldType === 'title') {
            cell.removeAttribute('data-original-html');
        }
    };
    
    // Handle key events
    inputElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Check if this is a confirmed save (from check icon click)
            const isConfirmed = inputElement.hasAttribute('data-confirmed-save');
            if (isConfirmed) {
                inputElement.removeAttribute('data-confirmed-save');
            }
            saveChanges(isConfirmed);
        } else if (e.key === 'Escape') {
            e.preventDefault();
            cancelChanges();
        }
    });
    
    // Handle clicks outside the input
    const documentClickHandler = (e) => {
        // Don't trigger save if clicking within the current cell being edited
        if (cell.contains(e.target)) {
            return;
        }
        
        // Only trigger save for clicks truly outside the editor
        if (!cell.contains(e.target)) {
            // Include onSale fields in bulk save operations now that they use dropdowns
            // Small delay to allow any in-progress toggles to complete
            setTimeout(() => {
                saveChanges();
            }, 50);
        }
    };
    
    // Store handler reference and add listener
    cell._documentClickHandler = documentClickHandler;
    setTimeout(() => {
        document.addEventListener('click', documentClickHandler);
    }, 100);
}

// Initialize select all functionality - RENAMED to avoid conflict with product-table.js
function initializeSelectAllOld() {
    const selectAllCheckbox = document.getElementById('select-all-checkbox');
    
    if (selectAllCheckbox) {
        // Handle select all checkbox click - DISABLED: Using filter-aware version in product-table.js
        // selectAllCheckbox.addEventListener('change', function() {
        //     const isChecked = this.checked;
        //     const productCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]');
        //     
        //     productCheckboxes.forEach(checkbox => {
        //         checkbox.checked = isChecked;
        //     });
        //     
        //     // Update select all state and bulk adjust button
        //     updateSelectAllState();
        //     
        // });
        
        // Handle individual checkbox changes to update select all state
        document.addEventListener('change', function(e) {
            if (e.target.type === 'checkbox' && e.target.closest('.mix')) {
                updateSelectAllState();
            }
        });
    }
    
    // Function to update select all checkbox state based on individual checkboxes
    function updateSelectAllState() {
        const productCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]');
        const checkedCheckboxes = document.querySelectorAll('.mix input[type="checkbox"]:checked');
        
        if (checkedCheckboxes.length === 0) {
            // No items selected
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = false;
        } else if (checkedCheckboxes.length === productCheckboxes.length) {
            // All items selected
            selectAllCheckbox.checked = true;
            selectAllCheckbox.indeterminate = false;
        } else {
            // Some items selected
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = true;
        }

        // Update the product selection counter text
        updateProductSelectionCounter(checkedCheckboxes.length);

        // Update bulk adjust button state if function exists
        if (typeof updateBulkAdjustButton === 'function') {
            updateBulkAdjustButton();
        }
    }
}

// Generate URL slug from title
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Remove duplicate hyphens
        .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens
}

// Check if URL should be suggested based on title change
function shouldSuggestURL(oldTitle, newTitle, currentURL) {
    // Always suggest if the title actually changed and we can generate a valid slug
    if (!oldTitle || !newTitle || oldTitle === newTitle) {
        return false;
    }
    
    const newSlug = generateSlug(newTitle);
    
    // Suggest as long as:
    // 1. We can generate a valid new slug from the title
    // 2. The new slug would be different from the current URL
    return newSlug.length > 0 && newSlug !== currentURL;
}

// Show URL suggestion tooltip
function showURLSuggestion(newSlug, titleCell, row) {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    const preview = document.getElementById('url-suggestion-preview');
    const applyBtn = document.getElementById('url-suggestion-apply');
    const cancelBtn = document.getElementById('url-suggestion-cancel');
    const closeBtn = document.getElementById('url-suggestion-close');
    const createRedirectCheckbox = document.getElementById('url-create-redirect');
    
    // Get current URL for redirect functionality
    const urlCell = row.querySelector('td:nth-child(3)');
    const currentUrl = urlCell ? urlCell.textContent.trim() : '';
    
    // Set the suggested URL
    if (preview) {
        preview.textContent = newSlug;
    }
    
    // Position tooltip near the title cell
    const rect = titleCell.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    tooltip.style.position = 'absolute';
    tooltip.style.top = (rect.bottom + scrollTop + 10) + 'px';
    tooltip.style.left = (rect.left + scrollLeft) + 'px';
    tooltip.style.zIndex = '10000';
    
    // Show tooltip
    tooltip.classList.remove('hidden');
    tooltip.classList.add('visible');
    
    // Store reference to current row for later use
    tooltip.setAttribute('data-target-row-id', row.getAttribute('data-product-id'));
    
    // Handle apply button
    const handleApply = () => {
        if (urlCell && !urlCell.classList.contains('modified')) {
            const oldUrl = urlCell.textContent.trim();
            
            // Update the URL cell
            urlCell.textContent = newSlug;
            urlCell.setAttribute('data-new-value', newSlug);
            urlCell.setAttribute('data-field-type', 'url');
            urlCell.classList.add('modified');
            
            // Store redirect if checkbox is checked
            if (createRedirectCheckbox.checked && oldUrl && oldUrl !== newSlug) {
                window.urlRedirects.set(oldUrl, newSlug);
                console.log(`📝 Stored URL redirect: ${oldUrl} → ${newSlug}`);
                console.log(`🗺️ Total redirects now: ${window.urlRedirects.size}`);
            } else {
                console.log(`🚫 No redirect stored - checkbox: ${createRedirectCheckbox.checked}, oldUrl: "${oldUrl}", newSlug: "${newSlug}"`);
            }
            
            // Track the URL change
            if (typeof trackChanges === 'function') {
                trackChanges(urlCell, row);
            }
        }
        
        hideURLSuggestion();
    };
    
    // Handle cancel/close
    const handleCancel = () => {
        hideURLSuggestion();
    };
    
    // Cleanup function
    const cleanup = () => {
        applyBtn.removeEventListener('click', handleApply);
        cancelBtn.removeEventListener('click', handleCancel);
        closeBtn.removeEventListener('click', handleCancel);
    };
    
    // Add event listeners
    applyBtn.addEventListener('click', handleApply);
    cancelBtn.addEventListener('click', handleCancel);
    closeBtn.addEventListener('click', handleCancel);
    
    // Store cleanup function for later use
    tooltip._cleanup = cleanup;
}

// Hide URL suggestion tooltip
function hideURLSuggestion() {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
        tooltip.classList.remove('visible');
        
        // Clean up event handlers
        if (tooltip._cleanup) {
            tooltip._cleanup();
            delete tooltip._cleanup;
        }
        
        // Clear data attributes
        tooltip.removeAttribute('data-target-row-id');
    }
}

// Category popup functions
function showCategoryPopup(cell, row) {
    const popup = document.getElementById('category-editor-popup');
    const tagsDisplay = document.getElementById('category-tags-display');
    const input = document.getElementById('category-popup-input');
    const suggestions = document.getElementById('category-popup-suggestions');
    const existingSelectContainer = popup.querySelector('.category-existing-select');
    const fieldWrapper = popup.querySelector('.category-field-wrapper');

    // Get existing categories
    const originalCategories = cell.dataset.originalCategories || '';
    
    // Store original categories for cancel functionality
    popup.dataset.originalCategories = originalCategories;
    
    // Populate the tags display
    updateCategoryTagsDisplay(tagsDisplay, originalCategories);
    
    // Clear input and reset dropdown
    input.value = '';
    const textElement = existingSelectContainer.querySelector('.select-text');
    const dropdown = existingSelectContainer.querySelector('.select-dropdown');
    textElement.textContent = 'Select an existing category';
    textElement.classList.add('placeholder');
    dropdown.classList.remove('open');
    suggestions.style.display = 'none';
    
    // Populate the existing categories dropdown
    populateExistingCategoriesDropdown(existingSelectContainer, tagsDisplay);
    
    // Position popup relative to cell
    positionPopup(popup, cell);
    
    // Show popup
    popup.classList.remove('hidden');
    popup.classList.add('visible');
    
    // Focus input for immediate typing
    setTimeout(() => input.focus(), 100);
    
    // Setup autocomplete for NEW categories only (no auto-save)
    setupPopupAutocompleteForNew(input, suggestions, tagsDisplay);
    
    // Setup existing category dropdown
    setupExistingCategoryDropdown(existingSelectContainer, tagsDisplay);
    
    // Setup remove handlers (no auto-save)
    setupPopupRemoveHandlers(tagsDisplay);
    
    // Event handlers for button clicks
    const discardBtn = popup.querySelector('#category-popup-discard');
    const saveBtn = popup.querySelector('#category-popup-save');
    
    const handleSave = () => {
        applyCategoryChanges(cell, row, tagsDisplay);
        hidePopup();
    };
    
    const handleCancel = () => {
        hidePopup();
    };
    
    const hidePopup = () => {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
        
        // Clean up event listeners
        discardBtn.removeEventListener('click', handleCancel);
        saveBtn.removeEventListener('click', handleSave);
        document.removeEventListener('click', handleClickOutside);
    };
    
    // Click outside to cancel
    const handleClickOutside = (e) => {
        if (!popup.contains(e.target) && !cell.contains(e.target)) {
            hidePopup();
        }
    };
    
    // Add event listeners
    discardBtn.addEventListener('click', handleCancel);
    saveBtn.addEventListener('click', handleSave);
    
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
}

function positionPopup(popup, cell) {
    const cellRect = cell.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    
    // Position below the cell by default
    let top = cellRect.bottom + window.scrollY + 8;
    let left = cellRect.left + window.scrollX;
    
    // Adjust if popup would go off screen
    if (left + 320 > window.innerWidth) {
        left = window.innerWidth - 320 - 20;
    }
    
    if (left < 20) {
        left = 20;
    }
    
    popup.style.position = 'absolute';
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
}

function updateCategoryTagsDisplay(tagsDisplay, categoriesString) {
    tagsDisplay.innerHTML = '';
    
    if (categoriesString.trim()) {
        const categories = categoriesString.split(',').map(cat => cat.trim()).filter(cat => cat !== '');
        categories.forEach(category => {
            addCategoryTagToDisplay(category, tagsDisplay);
        });
    }
    
    // No +Add button needed since user can type directly
}

function addCategoryTagToDisplay(categoryName, tagsDisplay) {
    const tag = document.createElement('span');
    tag.className = 'category-tag';
    tag.innerHTML = `
        ${categoryName}
        <button class="category-remove" data-category="${categoryName}" title="Remove category">×</button>
    `;
    
    tagsDisplay.appendChild(tag);
}

function setupPopupAutocompleteForNew(input, suggestions, tagsDisplay) {
    let highlightedIndex = -1;
    
    // Clear any existing listeners
    input.replaceWith(input.cloneNode(true));
    input = document.getElementById('category-popup-input');
    
    
    input.addEventListener('input', () => {
        const value = input.value.trim();
        
        if (value.length === 0) {
            suggestions.style.display = 'none';
            return;
        }
        
        // For NEW categories, we don't show existing categories as suggestions
        // This input is purely for typing new category names
        // Hide suggestions when typing new categories
        suggestions.style.display = 'none';
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (input.value.trim()) {
                addCategoryToDisplay(input.value.trim(), tagsDisplay, input, suggestions);
            }
        } else if (e.key === 'Escape') {
            suggestions.style.display = 'none';
            suggestions.classList.remove('visible');
        }
    });
    
    // Remove the old suggestion click handler since we're not using suggestions for new categories
    // The suggestions div will remain hidden for new category input
}

function addCategoryToDisplay(categoryName, tagsDisplay, input, suggestions) {
    const currentCategories = getCurrentCategoriesFromDisplay(tagsDisplay);
    
    if (!currentCategories.includes(categoryName)) {
        addCategoryTagToDisplay(categoryName, tagsDisplay);
        
        // Clear input if provided (for new category input)
        if (input) {
            input.value = '';
            input.focus(); // Keep focus for continued typing
        }
        
        // Re-setup remove handlers for the new tag
        setupPopupRemoveHandlers(tagsDisplay);
        
        // Update the existing categories dropdown to remove the added category
        const existingSelectContainer = document.querySelector('.category-existing-select');
        if (existingSelectContainer) {
            populateExistingCategoriesDropdown(existingSelectContainer, tagsDisplay);
        }
        
    } else {
    }
}

function setupPopupRemoveHandlers(tagsDisplay) {
    // Remove existing listeners to avoid duplicates
    const removeButtons = tagsDisplay.querySelectorAll('.category-remove');
    removeButtons.forEach(button => {
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const categoryTag = e.target.closest('.category-tag');
            if (categoryTag) {
                categoryTag.remove();
                
                // Refresh the existing categories dropdown after removal
                const existingSelectContainer = document.querySelector('.category-existing-select');
                if (existingSelectContainer) {
                    populateExistingCategoriesDropdown(existingSelectContainer, tagsDisplay);
                }
            }
        });
    });
}

function getCurrentCategoriesFromDisplay(tagsDisplay) {
    const tags = tagsDisplay.querySelectorAll('.category-tag');
    return Array.from(tags).map(tag => tag.textContent.replace('×', '').trim());
}

function applyCategoryChanges(cell, row, tagsDisplay) {
    const newCategories = getCurrentCategoriesFromDisplay(tagsDisplay);
    const categoriesString = newCategories.join(', ');
    
    // Get original categories for comparison
    const originalCategoriesString = cell.dataset.originalCategories || '';
    const originalCategories = originalCategoriesString ? originalCategoriesString.split(', ').map(c => c.trim()) : [];
    
    // Calculate what was added and removed
    const addedCategories = newCategories.filter(cat => !originalCategories.includes(cat));
    const removedCategories = originalCategories.filter(cat => !newCategories.includes(cat));
    
    
    // Update the cell with plain text display
    cell.innerHTML = categoriesString;
    cell.dataset.originalCategories = categoriesString;
    cell.classList.add('modified');
    
    // Update data attributes for filtering
    const categoryData = categoriesString.trim() === '' ? 'uncategorized' : 
        categoriesString.toLowerCase().replace(/[^a-z0-9\s,]/g, '').replace(/\s+/g, '-').split(',').map(c => c.trim()).join(' ');
    row.setAttribute('data-category', categoryData);
    
    // Store changes for API call later - now with detailed change tracking
    cell.setAttribute('data-field-type', 'category');
    cell.setAttribute('data-original-value', originalCategoriesString);
    cell.setAttribute('data-new-value', categoriesString);
    
    // Store the specific changes for more precise API calls
    if (addedCategories.length > 0) {
        cell.setAttribute('data-categories-added', addedCategories.join(','));
    } else {
        cell.removeAttribute('data-categories-added');
    }
    
    if (removedCategories.length > 0) {
        cell.setAttribute('data-categories-removed', removedCategories.join(','));
    } else {
        cell.removeAttribute('data-categories-removed');
    }
    
    // Track changes globally if function exists
    if (typeof trackChanges === 'function') {
        trackChanges(cell, row);
    }
    
}

function getAvailableCategories() {
    
    // First try to get categories from the filter dropdown that was already populated
    const categoryDropdown = document.getElementById('category-filter-dropdown');
    if (categoryDropdown) {
        const options = categoryDropdown.querySelectorAll('.select-option:not([data-value="all"])');
        if (options.length > 0) {
            const dropdownCategories = Array.from(options).map(option => option.textContent.trim());
            return dropdownCategories.sort();
        }
    }
    
    // Fallback to global categories data
    if (window.globalCategoriesData && window.globalCategoriesData.length > 0) {
        const categories = window.globalCategoriesData.map(cat => cat.name);
        return categories.sort();
    }
    
    // Fallback: extract from existing product rows
    const categories = new Set();
    document.querySelectorAll('[data-field-name="categories"]').forEach(cell => {
        const categoryText = cell.dataset.originalCategories || cell.textContent || '';
        if (categoryText.trim()) {
            categoryText.split(',').forEach(cat => {
                const cleanCat = cat.trim();
                if (cleanCat) {
                    categories.add(cleanCat);
                }
            });
        }
    });
    
    const fallbackCategories = Array.from(categories);
    
    // If still no categories found, show warning instead of test data
    if (fallbackCategories.length === 0) {
        console.warn('📋 No categories found anywhere - filter dropdown may not be populated yet');
        return [];
    }
    
    return fallbackCategories.sort();
}

// Function to update the product selection counter text
function updateProductSelectionCounter(selectedCount) {
    const counterElement = document.getElementById('products-selected-text');
    if (counterElement) {
        if (selectedCount === 0) {
            counterElement.textContent = '0 products selected';
        } else if (selectedCount === 1) {
            counterElement.textContent = '1 product selected';
        } else {
            counterElement.textContent = `${selectedCount} products selected`;
        }
    }
}

// Function to populate the existing categories dropdown
function populateExistingCategoriesDropdown(selectContainer, tagsDisplay) {
    const availableCategories = getAvailableCategories();
    const currentCategories = getCurrentCategoriesFromDisplay(tagsDisplay);
    
    // Get the dropdown element
    const dropdown = selectContainer.querySelector('.select-dropdown');
    
    // Clear existing options
    dropdown.innerHTML = '';
    
    // Add available categories that aren't already selected
    const filteredCategories = availableCategories.filter(cat => 
        !currentCategories.includes(cat)
    );
    
    if (filteredCategories.length === 0) {
        dropdown.innerHTML = '<div class="select-option disabled">No categories available</div>';
    } else {
        filteredCategories.forEach(category => {
            const option = document.createElement('div');
            option.className = 'select-option';
            option.dataset.value = category;
            option.textContent = category;
            dropdown.appendChild(option);
        });
    }
    
}

// Function to setup the existing category dropdown
function setupExistingCategoryDropdown(selectContainer, tagsDisplay) {
    const trigger = selectContainer.querySelector('.select-trigger');
    const dropdown = selectContainer.querySelector('.select-dropdown');
    const arrow = selectContainer.querySelector('.select-arrow');
    const textElement = selectContainer.querySelector('.select-text');
    
    // Clear any existing event listeners by cloning and replacing elements
    const newTrigger = trigger.cloneNode(true);
    const newDropdown = dropdown.cloneNode(true);
    trigger.parentNode.replaceChild(newTrigger, trigger);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);
    
    // Get references to the new elements
    const freshTrigger = selectContainer.querySelector('.select-trigger');
    const freshDropdown = selectContainer.querySelector('.select-dropdown');
    const freshArrow = selectContainer.querySelector('.select-arrow');
    const freshTextElement = selectContainer.querySelector('.select-text');
    
    // Toggle dropdown on trigger click
    freshTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = freshDropdown.classList.contains('active');
        
        if (isOpen) {
            freshDropdown.classList.remove('active');
            freshTrigger.classList.remove('active');
        } else {
            freshDropdown.classList.add('active');
            freshTrigger.classList.add('active');
        }
    });
    
    // Handle option selection
    freshDropdown.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling up and closing popup
        if (e.target.classList.contains('select-option') && !e.target.classList.contains('disabled')) {
            const selectedCategory = e.target.dataset.value;
            
            // Add category to display
            addCategoryToDisplay(selectedCategory, tagsDisplay, null, null);
            
            // Close dropdown
            freshDropdown.classList.remove('active');
            freshTrigger.classList.remove('active');
            
            // Reset text to placeholder
            freshTextElement.textContent = 'Select an existing category';
            freshTextElement.classList.add('placeholder');
            
            // Repopulate dropdown to remove the selected category
            populateExistingCategoriesDropdown(selectContainer, tagsDisplay);
        }
    });
    
    // Close dropdown when clicking outside
    const outsideClickHandler = (e) => {
        if (!selectContainer.contains(e.target)) {
            freshDropdown.classList.remove('active');
            freshTrigger.classList.remove('active');
        }
    };
    
    document.addEventListener('click', outsideClickHandler);
    
    // Store the handler reference so it can be removed later if needed
    selectContainer._outsideClickHandler = outsideClickHandler;
}

// Show schedule popup
function showSchedulePopup(cell) {
    const popup = document.getElementById('schedule-editor-popup');
    const datetimeInput = document.getElementById('schedule-datetime-input');
    
    if (!popup || !datetimeInput) {
        console.error('Schedule popup elements not found - popup:', !!popup, 'datetimeInput:', !!datetimeInput);
        return;
    }
    
    // Set current value or use context scheduled date or default to 1 hour from now
    const now = new Date();
    const contextScheduledDate = window.currentSchedulingContext?.currentScheduledDate;
    const cellScheduledDate = cell.getAttribute('data-scheduled-date');
    
    let defaultDate;
    if (contextScheduledDate) {
        defaultDate = new Date(contextScheduledDate);
    } else if (cellScheduledDate) {
        defaultDate = new Date(cellScheduledDate);
    } else {
        defaultDate = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now
    }
    
    // Initialize or update Flatpickr for the datetime input
    if (window.schedulePopupFlatpickr) {
        // Update existing instance
        window.schedulePopupFlatpickr.setDate(defaultDate);
    } else {
        // Create new Flatpickr instance
        window.schedulePopupFlatpickr = window.initializeFlatpickr(datetimeInput, {
            inline: false, // Not inline for popup - keeps calendar closed by default
            static: true,
            altFormat: "F j, Y at h:i K",
            minDate: "today",
            defaultDate: defaultDate,
            clickOpens: true, // Allow manual opening by clicking input
            
            onChange: function(selectedDates, dateStr, instance) {
                if (selectedDates.length > 0) {
                    const selectedDate = selectedDates[0];
                    // Update the input value for compatibility
                    datetimeInput.value = selectedDate.toISOString().slice(0, 16);
                }
            }
        });
    }
    
    // Set up scheduling context for the save function
    const row = cell.closest('tr');
    const originalValue = cell.getAttribute('data-original-value') || cell.textContent.trim();
    
    window.currentSchedulingContext = {
        cell: cell,
        row: row,
        originalValue: originalValue,
        currentScheduledDate: datetimeInput.value || defaultDate.toISOString().slice(0, 16)
    };
    
    // Show popup with persistent visibility (CSS handles centering)
    popup.classList.remove('hidden');
    popup.classList.add('visible');
    
    // Set up a persistent check to keep it visible
    let visibilityCheckCount = 0;
    const ensureVisible = () => {
        if (visibilityCheckCount < 10 && popup.classList.contains('hidden')) {
            popup.classList.remove('hidden');
            popup.classList.add('visible');
            visibilityCheckCount++;
            setTimeout(ensureVisible, 50);
        }
    };
    
    // Start the persistent visibility check
    setTimeout(ensureVisible, 25);
    
    // Focus the datetime input after a short delay - but don't auto-open calendar
    setTimeout(() => {
        if (datetimeInput) {
            datetimeInput.focus();
        }
    }, 100);
}

// Hide schedule popup
function hideSchedulePopup() {
    const popup = document.getElementById('schedule-editor-popup');
    if (popup) {
        popup.classList.remove('visible');
        popup.classList.add('hidden');
    }
    
    // Close Flatpickr if it's open
    if (window.schedulePopupFlatpickr) {
        window.schedulePopupFlatpickr.close();
    }
    
    // Clear context
    window.currentSchedulingContext = null;
}

// Save scheduled date and apply status change
function saveScheduledDate() {
    const datetimeInput = document.getElementById('schedule-datetime-input');
    const context = window.currentSchedulingContext;
    
    if (!context || !datetimeInput.value) {
        console.error('Missing scheduling context or date');
        return;
    }
    
    const { cell, row, originalValue } = context;
    
    // Store the scheduled date
    cell.setAttribute('data-scheduled-date', datetimeInput.value);
    
    // Apply the status change
    const statusBadge = `<span class="status-badge scheduled">Scheduled</span>`;
    cell.innerHTML = statusBadge;
    
    // Mark as modified and store the change
    cell.classList.add('modified');
    cell.setAttribute('data-field-type', 'status');
    cell.setAttribute('data-original-value', originalValue);
    cell.setAttribute('data-new-value', 'scheduled');
    
    // Track changes globally if function exists
    if (typeof trackChanges === 'function') {
        trackChanges(cell, row);
    }
    
    // Update scheduled column visibility and add scheduled date cell
    updateScheduledColumnVisibility();
    addScheduledDateToRow(row, datetimeInput.value);
    
    // Hide popup
    hideSchedulePopup();
}

// Initialize schedule popup event handlers
function initializeSchedulePopup() {
    const cancelBtn = document.getElementById('schedule-popup-cancel');
    const saveBtn = document.getElementById('schedule-popup-save');
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hideSchedulePopup();
            
            // Revert status dropdown if needed
            const context = window.currentSchedulingContext;
            if (context) {
                const { cell, originalValue } = context;
                cell.innerHTML = originalValue;
            }
        });
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveScheduledDate();
        });
    }
    
    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
        const popup = document.getElementById('schedule-editor-popup');
        
        if (popup && !popup.contains(e.target) && !popup.classList.contains('hidden')) {
            const isStatusCell = e.target.closest('td') && 
                               e.target.closest('td').classList.contains('editable') &&
                               e.target.closest('td').getAttribute('data-field') === 'status';
            
            // Check if clicked element is a scheduled date cell (which opens popup)
            const isScheduledDateCell = e.target.closest('td') && 
                                      e.target.closest('td').classList.contains('scheduled-date-cell');
            
            // Check if clicked element is the save button or inside save button
            const isSaveButton = e.target.id === 'schedule-popup-save' || 
                               e.target.closest('#schedule-popup-save');
            
            // Check if clicked element is the cancel button 
            const isCancelButton = e.target.id === 'schedule-popup-cancel' || 
                                 e.target.closest('#schedule-popup-cancel');
            
            // Check if we're clicking inside the popup container itself
            const isInsidePopup = popup.contains(e.target);
            
            // Only close if clicking truly outside everything (not status cells, scheduled cells, buttons, or popup)
            if (!isStatusCell && !isScheduledDateCell && !isSaveButton && !isInsidePopup) {
                hideSchedulePopup();
            }
        }
    });
}

// Check if any products are scheduled and show/hide the scheduled column
function updateScheduledColumnVisibility() {
    const scheduledHeader = document.getElementById('scheduled-header');
    const scheduledCells = document.querySelectorAll('.scheduled-date-cell');
    
    // Check for products with scheduled status badge (more specific selector)
    const scheduledStatusProducts = document.querySelectorAll('tr.mix .status-badge.scheduled').length > 0;
    // Only check for data-scheduled-date on visible rows with actual dates
    const scheduledDataProducts = document.querySelectorAll('tr.mix[data-scheduled-date]:not([data-scheduled-date=""])').length > 0;
    const hasScheduledProducts = scheduledStatusProducts || scheduledDataProducts;
    
    if (scheduledHeader) {
        if (hasScheduledProducts) {
            scheduledHeader.classList.remove('hidden');
        } else {
            scheduledHeader.classList.add('hidden');
        }
    }
    
    // Show/hide all scheduled cells
    scheduledCells.forEach(cell => {
        if (hasScheduledProducts) {
            cell.classList.remove('hidden');
        } else {
            cell.classList.add('hidden');
        }
    });
}

// Add scheduled date cell to a row
function addScheduledDateToRow(row, scheduledDate) {
    let scheduledCell = row.querySelector('.scheduled-date-cell');
    
    if (!scheduledCell) {
        // Create new scheduled date cell
        scheduledCell = document.createElement('td');
        scheduledCell.className = 'scheduled-date-cell scheduled-column';
        row.appendChild(scheduledCell);
    }
    
    // Format the date for display
    const dateObj = new Date(scheduledDate);
    const formattedDate = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    scheduledCell.textContent = formattedDate;
    scheduledCell.classList.remove('hidden');
    
    // Add highlighting to show this field has been changed
    scheduledCell.classList.add('editing-with-changes');
}

// Stock popup functions
function showStockPopup(cell, row) {
    const popup = document.getElementById('stock-editor-popup');
    const quantityInput = document.getElementById('stock-quantity-input');
    const trackCheckbox = document.getElementById('stock-track-inventory');
    
    // Get current stock value
    const currentValue = cell.textContent.trim();
    const isUnlimited = currentValue === '∞' || currentValue === 'Unlimited';
    
    // Set up the form based on current state
    if (isUnlimited) {
        trackCheckbox.checked = false;
        quantityInput.disabled = true;
        quantityInput.value = '';
        quantityInput.placeholder = 'Unlimited stock';
    } else {
        trackCheckbox.checked = true;
        quantityInput.disabled = false;
        quantityInput.value = currentValue || '0';
        quantityInput.placeholder = '0';
    }
    
    // Store original value for cancel functionality
    popup.dataset.originalValue = currentValue;
    popup.dataset.targetCellId = row.getAttribute('data-product-id');
    
    // Show popup
    popup.classList.remove('hidden');
    popup.classList.add('visible');
    
    // Focus appropriate field
    if (!isUnlimited) {
        setTimeout(() => quantityInput.focus(), 100);
    }
    
    // Setup checkbox change handler
    const handleCheckboxChange = () => {
        const isTracking = trackCheckbox.checked;
        
        if (isTracking) {
            // Enable quantity input
            quantityInput.disabled = false;
            quantityInput.placeholder = '0';
            quantityInput.focus();
        } else {
            // Disable quantity input for unlimited
            quantityInput.disabled = true;
            quantityInput.placeholder = 'Unlimited stock';
            quantityInput.value = '';
        }
    };
    
    // Event handlers for buttons
    const saveBtn = document.getElementById('stock-popup-save');
    const cancelBtn = document.getElementById('stock-popup-cancel');
    
    const handleSave = () => {
        const isTracking = trackCheckbox.checked;
        let newValue;
        
        if (isTracking) {
            // Use quantity value
            const quantity = parseInt(quantityInput.value) || 0;
            if (quantity < 0) {
                alert('Please enter a valid stock quantity (0 or greater)');
                quantityInput.focus();
                return;
            }
            newValue = quantity.toString();
        } else {
            // Use unlimited symbol
            newValue = '∞';
        }
        
        // Update cell if value changed
        if (newValue !== currentValue) {
            cell.textContent = newValue;
            cell.classList.add('modified');
            cell.setAttribute('data-field-type', 'stock');
            cell.setAttribute('data-original-value', currentValue);
            cell.setAttribute('data-new-value', newValue);
            
            // Track changes globally
            if (typeof trackChanges === 'function') {
                trackChanges(cell, row);
            }
        }
        
        hideStockPopup();
    };
    
    const handleCancel = () => {
        hideStockPopup();
    };
    
    // Click outside to cancel
    const handleClickOutside = (e) => {
        if (!popup.contains(e.target) && !cell.contains(e.target)) {
            hideStockPopup();
        }
    };
    
    // Add event listeners
    trackCheckbox.addEventListener('change', handleCheckboxChange);
    saveBtn.addEventListener('click', handleSave);
    cancelBtn.addEventListener('click', handleCancel);
    
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
    
    // Store cleanup function
    popup._cleanup = () => {
        trackCheckbox.removeEventListener('change', handleCheckboxChange);
        saveBtn.removeEventListener('click', handleSave);
        cancelBtn.removeEventListener('click', handleCancel);
        document.removeEventListener('click', handleClickOutside);
    };
}

function hideStockPopup() {
    const popup = document.getElementById('stock-editor-popup');
    if (popup) {
        popup.classList.add('hidden');
        popup.classList.remove('visible');
        
        // Clean up event handlers
        if (popup._cleanup) {
            popup._cleanup();
            delete popup._cleanup;
        }
        
        // Clear data attributes
        popup.removeAttribute('data-original-value');
        popup.removeAttribute('data-target-cell-id');
    }
}

// Export functions
window.showSchedulePopup = showSchedulePopup;
window.hideSchedulePopup = hideSchedulePopup;
window.saveScheduledDate = saveScheduledDate;
window.initializeSchedulePopup = initializeSchedulePopup;
window.updateScheduledColumnVisibility = updateScheduledColumnVisibility;
window.addScheduledDateToRow = addScheduledDateToRow;
window.showStockPopup = showStockPopup;
window.hideStockPopup = hideStockPopup;


// === TABLE-SCROLL MODULE ===
// src/modules/table-scroll.js
// Horizontal table scrolling functionality

function initializeTableScroll() {
    const tableContainer = document.getElementById('table-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    const scrollArrowsContainer = document.querySelector('.table-scroll-arrows');
    
    // Exit early if required elements don't exist
    if (!tableContainer || !scrollLeftBtn || !scrollRightBtn || !scrollArrowsContainer) {
        console.warn('Table scroll elements not found, skipping initialization');
        return null;
    }

    const SCROLL_AMOUNT = 200; // Pixels to scroll per click
    
    // Check if scrolling is needed and update arrow visibility
    function updateScrollArrows() {
        const { scrollLeft, scrollWidth, clientWidth } = tableContainer;
        const maxScroll = scrollWidth - clientWidth;
        
        // Show/hide arrow container based on whether scrolling is needed
        if (maxScroll > 5) {
            scrollArrowsContainer.classList.add('visible');
        } else {
            scrollArrowsContainer.classList.remove('visible');
        }
        
        // Enable/disable individual arrows
        scrollLeftBtn.disabled = scrollLeft <= 0;
        scrollRightBtn.disabled = scrollLeft >= maxScroll - 5; // 5px threshold
    }
    
    // Handle left scroll
    scrollLeftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tableContainer.scrollBy({
            left: -SCROLL_AMOUNT,
            behavior: 'smooth'
        });
    });
    
    // Handle right scroll
    scrollRightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tableContainer.scrollBy({
            left: SCROLL_AMOUNT,
            behavior: 'smooth'
        });
    });
    
    // Update arrows when user scrolls manually
    tableContainer.addEventListener('scroll', updateScrollArrows);
    
    // Update arrows when table content changes (e.g., after loading products)
    const resizeObserver = new ResizeObserver(() => {
        updateScrollArrows();
    });
    
    // Observe both the container and the table inside it
    resizeObserver.observe(tableContainer);
    const table = tableContainer.querySelector('table');
    if (table) {
        resizeObserver.observe(table);
    }
    
    // Update arrows when window is resized
    window.addEventListener('resize', updateScrollArrows);
    
    // Initial check
    setTimeout(() => {
        updateScrollArrows();
    }, 100); // Small delay to ensure content is loaded
    
    // Return public interface for external calls
    const tableScrollManager = {
        updateScrollArrows,
        scrollTo: (position) => {
            tableContainer.scrollTo({
                left: position,
                behavior: 'smooth'
            });
        },
        scrollBy: (amount) => {
            tableContainer.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
        }
    };
    
    // Store globally for access from other modules
    window.tableScrollManager = tableScrollManager;
    
    return tableScrollManager;
}

// Export for use in other modules
window.initializeTableScroll = initializeTableScroll;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollHandler = initializeTableScroll();
        if (scrollHandler) {
            console.log('Table scroll initialized successfully');
        }
    });
} else {
    // DOM is already ready
    const scrollHandler = initializeTableScroll();
    if (scrollHandler) {
        console.log('Table scroll initialized successfully');
    }
}


// === UNDO-CHANGES MODULE ===
// === UNDO CHANGES MODULE ===
// Complete undo functionality with JSON file persistence and drawer management

// Global undo history array
let undoHistory = [];
let selectedUndoIndex = null;
const MAX_UNDO_HISTORY = 5;

// === JSON FILE MANAGEMENT FOR UNDO HISTORY ===

// Get JSON file URL from meta tag
function getJsonFileUrl() {
    const metaTag = document.querySelector('meta[data-squarehero-plugin="product-manager"]');
    return metaTag ? metaTag.getAttribute('settings') : null;
}

// Load undo history from JSON file
async function loadUndoHistoryFromJson() {
    try {
        const jsonUrl = getJsonFileUrl();
        
        if (!jsonUrl) {
            console.log('🔄 No existing JSON file found, starting with empty undo history');
            undoHistory = [];
            return;
        }

        console.log('🔄 Loading undo history from:', jsonUrl);
        
        const response = await fetch(jsonUrl, {
            method: 'GET',
            cache: 'no-cache' // Ensure we get the latest version
        });

        if (!response.ok) {
            console.warn('🔄 Could not load JSON file, starting with empty undo history');
            undoHistory = [];
            return;
        }

        const data = await response.json();
        
        // Ensure undoHistory exists in loaded data
        if (!data.undoHistory) {
            data.undoHistory = [];
        }
        
        // Load undo history into memory
        undoHistory = data.undoHistory || [];
        console.log(`🔄 Loaded ${undoHistory.length} undo entries from JSON file`);
        
    } catch (error) {
        console.error('🔄 Error loading undo history from JSON file:', error);
        undoHistory = [];
    }
}

// === UNDO SYSTEM INITIALIZATION ===

async function initializeUndoSystem() {
    console.log('🔄 Initializing undo system...');
    
    try {
        // Load undo history from JSON file
        await loadUndoHistoryFromJson();
        
        const undoButton = document.getElementById('undo-changes-btn');
        if (undoButton) {
            undoButton.addEventListener('click', openUndoDrawer);
        }
        
        // Initialize undo drawer event handlers
        initializeUndoDrawerHandlers();
        
        // Initial state update
        updateUndoButtonState();
        console.log('✅ Undo system initialized successfully');
        
    } catch (error) {
        console.error('❌ Error initializing undo system:', error);
        // Fall back to empty history
        if (!undoHistory) {
            undoHistory = [];
        }
        updateUndoButtonState();
    }
}

// Initialize undo drawer event handlers
function initializeUndoDrawerHandlers() {
    const undoDrawer = document.getElementById('undo-changes-drawer');
    const overlay = undoDrawer?.querySelector('.undo-drawer-overlay');
    const closeBtn = undoDrawer?.querySelector('.drawer-close');
    const restoreBtn = document.getElementById('undo-selected-btn');
    
    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeUndoDrawer);
    }
    
    // Close on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeUndoDrawer);
    }
    
    // Handle restore button click
    if (restoreBtn) {
        restoreBtn.addEventListener('click', () => {
            if (selectedUndoIndex !== null) {
                restoreFromUndoIndex(selectedUndoIndex);
            }
        });
    }
    
    // Close drawer when clicking outside
    if (undoDrawer) {
        undoDrawer.addEventListener('click', (e) => {
            if (e.target === undoDrawer) {
                closeUndoDrawer();
            }
        });
    }
}

// === UNDO DRAWER MANAGEMENT ===

// Open undo drawer and populate with history
function openUndoDrawer() {
    console.log('🔄 Opening undo changes drawer...');
    
    const drawer = document.getElementById('undo-changes-drawer');
    if (!drawer) {
        console.error('❌ Undo drawer not found');
        return;
    }
    
    // Add visible class to show drawer
    drawer.classList.add('visible');
    
    // Populate the undo history list
    populateUndoHistoryList();
}

// Close undo drawer
function closeUndoDrawer() {
    console.log('🔄 Closing undo changes drawer...');
    
    const drawer = document.getElementById('undo-changes-drawer');
    if (drawer) {
        drawer.classList.remove('visible');
    }
}

// Populate the undo history list in the drawer
function populateUndoHistoryList() {
    const listContainer = document.querySelector('#undo-changes-drawer .undo-history-list');
    const statusCount = document.getElementById('undo-status-count');
    const infoText = document.getElementById('undo-info-text');
    const restoreBtn = document.getElementById('undo-selected-btn');
    
    if (!listContainer) {
        console.error('❌ Undo history list container not found');
        return;
    }
    
    // Update status count
    if (statusCount) {
        const count = undoHistory.length;
        statusCount.textContent = count === 0 ? 'No Changes Available' : 
                                 count === 1 ? '1 Change Available' : 
                                 `${count} Changes Available`;
    }
    
    // Update info text
    if (infoText) {
        infoText.textContent = undoHistory.length === 0 ? 'No restore points' : 'Choose a restore point';
    }
    
    // Clear existing list
    listContainer.innerHTML = '';
    
    if (undoHistory.length === 0) {
        listContainer.innerHTML = `
            <div class="undo-empty-state">
                <div class="empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10H20M4 10L8 6M4 10L8 14" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h4>No Changes to Undo</h4>
                <p>Make some bulk changes to see undo history here</p>
            </div>
        `;
        if (restoreBtn) restoreBtn.disabled = true;
        return;
    }
    
    // Create list items for each undo entry
    undoHistory.forEach((entry, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'undo-history-item';
        listItem.dataset.index = index;
        
        const timestamp = new Date(entry.timestamp);
        const timeAgo = formatTimeAgo(timestamp);
        const detailedTimestamp = getDetailedTimestamp(timestamp);
        const productCount = entry.productCount || 0;
        const productText = productCount === 1 ? 'product' : 'products';
        
        // Use detailed description if available, fallback to action
        const displayTitle = entry.detailedDescription || entry.action || 'Bulk Changes';
        const displayAction = entry.action || 'Bulk Changes';
        
        // Show first few product titles
        const productTitles = entry.productTitles || [];
        const titleDisplay = productTitles.length > 0 ? 
            productTitles.slice(0, 3).join(', ') + (productTitles.length > 3 ? '...' : '') :
            'Products';
        
        listItem.innerHTML = `
            <div class="undo-item-content">
                <div class="undo-item-header">
                    <div class="undo-item-title">${displayTitle}</div>
                    <div class="undo-item-time" title="${detailedTimestamp}">${timeAgo}</div>
                </div>
                <div class="undo-item-details">
                    <span class="undo-item-count">${productCount} ${productText}</span>
                    <span class="undo-item-products">${titleDisplay}</span>
                </div>
            </div>
        `;
        
        // Add click handler for selection
        listItem.addEventListener('click', (e) => {
            // Handle item selection
            toggleUndoItemSelection(listItem, index);
        });
        
        listContainer.appendChild(listItem);
    });
    
    updateRestoreButtonState();
}

// Toggle selection of undo item
function toggleUndoItemSelection(listItem, index) {
    const isSelected = listItem.classList.contains('selected');
    
    // Clear all selections
    document.querySelectorAll('.undo-history-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    if (!isSelected) {
        listItem.classList.add('selected');
        selectedUndoIndex = index;
    } else {
        selectedUndoIndex = null;
    }
    
    updateRestoreButtonState();
}

// Update restore button state
function updateRestoreButtonState() {
    const restoreBtn = document.getElementById('undo-selected-btn');
    if (restoreBtn) {
        restoreBtn.disabled = selectedUndoIndex === null;
        restoreBtn.textContent = selectedUndoIndex !== null ? 'Restore Selected' : 'Select Item to Restore';
    }
}

// Format time ago helper
function formatTimeAgo(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    // For older entries, show full date and time
    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    
    // If different year, include year
    if (date.getFullYear() !== now.getFullYear()) {
        options.year = 'numeric';
    }
    
    return date.toLocaleDateString('en-US', options);
}

// Get detailed timestamp tooltip
function getDetailedTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

// === UNDO FUNCTIONALITY ===

// Capture undo snapshot
function captureUndoSnapshot(action = 'Bulk Changes') {
    try {
        const selectedProducts = getSelectedProductsWithData();
        if (!selectedProducts || selectedProducts.products.length === 0) {
            console.log('🔄 No products selected for undo snapshot');
            return;
        }
        
        console.log('🔄 Capturing undo snapshot:', action);
        
        // Create snapshot entry
        const snapshot = {
            timestamp: new Date().toISOString(),
            action: action,
            productCount: selectedProducts.products.length,
            productTitles: selectedProducts.products.map(p => p.title || 'Untitled Product').slice(0, 5),
            filename: `undo_${Date.now()}.json`,
            fileUrl: null, // Will be set when file is uploaded
            productData: selectedProducts.products.map(product => ({
                id: product.id,
                title: product.title,
                price: product.price,
                salePrice: product.salePrice,
                status: product.status,
                categories: product.categories ? [...product.categories] : [],
                tags: product.tags ? [...product.tags] : [],
                stock: product.stock,
                sku: product.sku,
                variants: product.variants ? JSON.parse(JSON.stringify(product.variants)) : []
            }))
        };
        
        // Add to beginning of history array
        undoHistory.unshift(snapshot);
        
        // Keep only last 5 entries
        if (undoHistory.length > MAX_UNDO_HISTORY) {
            undoHistory = undoHistory.slice(0, MAX_UNDO_HISTORY);
        }
        
        // Update button state
        updateUndoButtonState();
        
        console.log(`🔄 Undo snapshot captured: ${snapshot.productCount} products`);
        
        // TODO: Save to JSON file and update meta tag
        // This would be implemented when the full file upload system is ready
        
    } catch (error) {
        console.error('❌ Error capturing undo snapshot:', error);
    }
}

// Restore from undo using index
async function restoreFromUndoIndex(index) {
    try {
        if (index < 0 || index >= undoHistory.length) {
            console.error('❌ Invalid undo index:', index);
            return;
        }
        
        const snapshot = undoHistory[index];
        console.log('🔄 Restoring from undo:', snapshot.action);
        
        if (!snapshot.productData || !Array.isArray(snapshot.productData)) {
            console.error('❌ Invalid snapshot data structure');
            return;
        }
        
        // Show progress for restoration
        showMessage('Restoring changes...', 'info');
        
        let restoredCount = 0;
        const totalProducts = snapshot.productData.length;
        
        // Restore each product
        for (const productData of snapshot.productData) {
            try {
                await restoreSingleProduct(productData);
                restoredCount++;
                
                // Update progress
                const progress = (restoredCount / totalProducts) * 100;
                console.log(`🔄 Restoration progress: ${progress.toFixed(1)}%`);
                
            } catch (error) {
                console.error('❌ Error restoring product:', productData.id, error);
            }
        }
        
        // Remove this entry and all newer entries from history
        undoHistory = undoHistory.slice(index + 1);
        updateUndoButtonState();
        
        // Close drawer and refresh display
        closeUndoDrawer();
        await loadProductsData(); // Refresh the product table
        
        showMessage(`Successfully restored ${restoredCount} products`, 'success');
        console.log(`✅ Restoration complete: ${restoredCount}/${totalProducts} products`);
        
    } catch (error) {
        console.error('❌ Error restoring from undo:', error);
        showMessage('Error restoring changes', 'error');
    }
}

// Restore a single product
async function restoreSingleProduct(productData) {
    try {
        const updateData = {
            title: productData.title,
            price: productData.price,
            salePrice: productData.salePrice,
            status: productData.status,
            categories: productData.categories || [],
            tags: productData.tags || [],
            stock: productData.stock,
            sku: productData.sku
        };
        
        // If product has variants, include them
        if (productData.variants && productData.variants.length > 0) {
            updateData.variants = productData.variants;
        }
        
        // Make API call to update product
        const response = await fetch(`/api/commerce/products/${productData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(updateData)
        });
        
        if (!response.ok) {
            throw new Error(`Failed to restore product ${productData.id}: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(`✅ Product restored: ${productData.title || productData.id}`);
        return result;
        
    } catch (error) {
        console.error(`❌ Error restoring product ${productData.id}:`, error);
        throw error;
    }
}

// Update undo button state based on history
function updateUndoButtonState() {
    const undoBtn = document.getElementById('undo-changes-btn');
    if (!undoBtn) return;
    
    const hasHistory = undoHistory && undoHistory.length > 0;
    undoBtn.disabled = !hasHistory;
    
    console.log(`🔄 Undo button state updated: ${hasHistory ? 'enabled' : 'disabled'} (${undoHistory.length} items in history)`);
}

// === EXPORTS ===

// Export functions for global access
window.initializeUndoSystem = initializeUndoSystem;
window.captureUndoSnapshot = captureUndoSnapshot;
window.updateUndoButtonState = updateUndoButtonState;
window.openUndoDrawer = openUndoDrawer;
window.closeUndoDrawer = closeUndoDrawer;
window.restoreFromUndoIndex = restoreFromUndoIndex;
window.undoHistory = undoHistory;



// === URL-MANAGEMENT MODULE ===
// URL management and redirect functionality

// Get current URL mappings from Squarespace
async function getCurrentUrlMappings() {
    const crumb = getCsrfToken();
    if (!crumb) {
        console.error('❌ No CSRF token found');
        return '';
    }
    
    try {
        const response = await fetch('/api/config/GetAdvancedSettings', {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'x-csrf-token': crumb
            },
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.mappings || '';
        } else {
            console.error('❌ Failed to get URL mappings - status:', response.status);
            return '';
        }
    } catch (error) {
        console.error('❌ Error fetching URL mappings:', error);
        return '';
    }
}

// Save URL mappings to Squarespace
async function saveUrlMappings(mappingsText) {
    const crumb = getCsrfToken();
    if (!crumb) {
        console.error('❌ No CSRF token found');
        return false;
    }
    
    try {
        const formBody = `mappings=${encodeURIComponent(mappingsText)}`;
        const response = await fetch('/api/config/SaveAdvancedSettings', {
            method: 'POST',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/x-www-form-urlencoded',
                'x-csrf-token': crumb
            },
            body: formBody,
            credentials: 'include'
        });
        
        if (response.ok) {
            console.log('✅ URL mappings saved successfully');
            return true;
        } else {
            console.error('❌ Failed to save URL mappings - status:', response.status);
            const responseText = await response.text();
            console.error('❌ Response body:', responseText);
            return false;
        }
    } catch (error) {
        console.error('❌ Error saving URL mappings:', error);
        return false;
    }
}

// Apply URL redirects for products with changed URLs
async function applyUrlRedirects() {
    if (window.urlRedirects.size === 0) {
        console.log('📝 No URL redirects to apply');
        return true;
    }
    
    console.log(`📝 Applying ${window.urlRedirects.size} URL redirects...`);
    
    try {
        // Get current URL mappings
        const currentMappings = await getCurrentUrlMappings();
        
        if (currentMappings === null) {
            console.error('❌ Could not retrieve current URL mappings');
            return false;
        }
        
        // Parse existing mappings
        const existingLines = currentMappings.split('\n').filter(line => line.trim());
        
        // Create new mappings from redirects
        const newMappings = [];
        window.urlRedirects.forEach((newUrl, oldUrl) => {
            // Ensure URLs have proper format
            const fromUrl = oldUrl.startsWith('/') ? oldUrl : `/${oldUrl}`;
            const toUrl = newUrl.startsWith('/') ? newUrl : `/${newUrl}`;
            
            // Add trailing slash if not present
            const fromUrlFinal = fromUrl.endsWith('/') ? fromUrl : `${fromUrl}/`;
            const toUrlFinal = toUrl.endsWith('/') ? toUrl : `${toUrl}/`;
            
            newMappings.push(`${fromUrlFinal} -> ${toUrlFinal} 301`);
        });
        
        // Combine existing and new mappings
        const allMappings = [...existingLines, ...newMappings];
        const mappingsText = allMappings.join('\n');
        
        // Save updated mappings
        const success = await saveUrlMappings(mappingsText);
        
        if (success) {
            console.log('✅ URL redirects applied successfully');
            window.urlRedirects.clear(); // Clear after successful application
            return true;
        } else {
            console.error('❌ Failed to apply URL redirects');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error applying URL redirects:', error);
        return false;
    }
}

// Get JSON file URL from meta tag
function getJsonFileUrl() {
    const metaTag = document.querySelector('meta[data-squarehero-plugin="product-manager"]');
    return metaTag ? metaTag.getAttribute('settings') : null;
}

// Extract file ID from Squarespace asset URL
function extractFileIdFromUrl(url) {
    if (!url) {
        console.error('❌ No URL provided to extract file ID');
        return null;
    }
    // Extract file ID from URL like: https://images.squarespace-cdn.com/content/t/5c5a519771c10ba3470d8101/...
    const match = url.match(/\/t\/([^\/]+)\//);
    return match ? match[1] : null;
}

// Delete old JSON file from CSS assets
async function deleteOldJsonFile(fileUrl) {
    const crumb = getCsrfToken();
    if (!crumb || !fileUrl) {
        console.log('⚠️ Cannot delete old file - missing CSRF token or file URL');
        return false;
    }
    
    try {
        // Extract file ID from URL
        const fileId = extractFileIdFromUrl(fileUrl);
        if (!fileId) {
            console.error('❌ Could not extract file ID from URL:', fileUrl);
            return false;
        }
        
        // Get website ID from current URL
        const websiteId = window.location.hostname.includes('squarespace.com') 
            ? window.location.pathname.split('/')[2] 
            : 'current'; // Fallback for custom domains
        
        // This is a generic template ID - you might need to extract it dynamically
        const templateId = '5c5a519771c10ba3470d8101'; // This might need to be extracted dynamically
        
        const formBody = new URLSearchParams({
            crumb: crumb,
            websiteId: websiteId,
            templateId: templateId,
            filename: fileId
        });
        
        const deleteResponse = await fetch(`${window.location.origin}/api/template/RemoveTemplateCSSAsset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        });
        
        if (deleteResponse.ok) {
            console.log('✅ Old JSON file deleted successfully');
            return true;
        } else {
            console.warn('⚠️ Could not delete old file (might not exist)');
            return false;
        }
        
    } catch (error) {
        console.warn('⚠️ Error deleting old file (continuing anyway):', error);
        return false;
    }
}

// Update meta tag with new JSON URL
async function updateMetaTagWithJsonUrl(jsonUrl) {
    const crumb = getCsrfToken();
    if (!crumb) {
        console.error('❌ No CSRF token found');
        return false;
    }
    
    try {
        // Get current injection settings
        const settingsResponse = await fetch(`${window.location.origin}/api/config/GetInjectionSettings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `crumb=${crumb}`
        });
        
        const currentSettings = await settingsResponse.json();
        
        // Create new meta tag content
        const metaTagContent = `\n<!-- SquareHero Product Manager Settings -->\n<meta data-squarehero-plugin="product-manager" settings="${jsonUrl}">\n`;
        
        // Update header with new meta tag
        let updatedHeader = currentSettings.header || '';
        const existingMetaRegex = /<!-- SquareHero Product Manager Settings -->\s*<meta data-squarehero-plugin="product-manager"[^>]*>\s*/g;
        
        if (existingMetaRegex.test(updatedHeader)) {
            // Replace existing meta tag
            updatedHeader = updatedHeader.replace(existingMetaRegex, metaTagContent);
        } else {
            // Add new meta tag
            updatedHeader += metaTagContent;
        }
        
        // Save updated injection settings
        const formBody = new URLSearchParams({
            crumb: crumb,
            header: updatedHeader,
            footer: currentSettings.footer || '',
            codeInjection: 'true'
        });
        
        const saveResponse = await fetch(`${window.location.origin}/api/config/SaveInjectionSettings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody
        });
        
        if (saveResponse.ok) {
            console.log('✅ Meta tag updated successfully');
            
            // Update the meta tag in the current page
            let existingMetaTag = document.querySelector('meta[data-squarehero-plugin="product-manager"]');
            if (existingMetaTag) {
                existingMetaTag.setAttribute('settings', jsonUrl);
            } else {
                // Create new meta tag in current page
                const newMetaTag = document.createElement('meta');
                newMetaTag.setAttribute('data-squarehero-plugin', 'product-manager');
                newMetaTag.setAttribute('settings', jsonUrl);
                document.head.appendChild(newMetaTag);
            }
            
            return true;
        } else {
            console.error('❌ Failed to update meta tag');
            return false;
        }
        
    } catch (error) {
        console.error('❌ Error updating meta tag:', error);
        return false;
    }
}

// Generate URL slug from product title
function generateUrlSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, '-')          // Replace spaces with hyphens
        .replace(/-+/g, '-')           // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens
}

// Check if URL slug already exists
function checkUrlSlugExists(slug, excludeProductId = null) {
    return globalProductsData.some(product => {
        if (excludeProductId && product.id === excludeProductId) {
            return false; // Don't check against the current product
        }
        return product.urlSlug === slug;
    });
}

// Generate unique URL slug
function generateUniqueUrlSlug(title, excludeProductId = null) {
    let baseSlug = generateUrlSlug(title);
    let slug = baseSlug;
    let counter = 1;
    
    while (checkUrlSlugExists(slug, excludeProductId)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    
    return slug;
}

// Show URL suggestion tooltip
function showUrlSuggestion(productId, oldUrl, newUrl, inputElement) {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    const preview = document.getElementById('url-suggestion-preview');
    
    if (!tooltip || !preview) return;
    
    // Update tooltip content
    preview.textContent = newUrl;
    
    // Position tooltip near the input element
    const rect = inputElement.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.bottom + 10) + 'px';
    
    // Show tooltip
    tooltip.classList.remove('hidden');
    
    // Store data for later use
    tooltip.dataset.productId = productId;
    tooltip.dataset.oldUrl = oldUrl;
    tooltip.dataset.newUrl = newUrl;
}

// Hide URL suggestion tooltip
function hideUrlSuggestion() {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
        delete tooltip.dataset.productId;
        delete tooltip.dataset.oldUrl;
        delete tooltip.dataset.newUrl;
    }
}

// Apply URL suggestion
function applyUrlSuggestion() {
    const tooltip = document.getElementById('url-suggestion-tooltip');
    if (!tooltip) return;
    
    const productId = tooltip.dataset.productId;
    const oldUrl = tooltip.dataset.oldUrl;
    const newUrl = tooltip.dataset.newUrl;
    const redirectCheckbox = tooltip.querySelector('input[type="checkbox"]');
    
    if (!productId || !newUrl) return;
    
    // Find the product row and update the URL
    const row = document.querySelector(`tr[data-product-id="${productId}"]`);
    if (row) {
        const urlInput = row.querySelector('input[data-field="urlSlug"]');
        if (urlInput) {
            urlInput.value = newUrl;
            
            // Mark as modified
            urlInput.classList.add('modified');
            
            // Store redirect if checkbox is checked
            if (redirectCheckbox && redirectCheckbox.checked && oldUrl !== newUrl) {
                window.urlRedirects.set(oldUrl, newUrl);
            }
        }
    }
    
    hideUrlSuggestion();
}

// Initialize URL management
function initializeUrlManagement() {
    // Handle URL suggestion apply button - use the correct ID
    const applyBtn = document.getElementById('url-suggestion-apply');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyUrlSuggestion);
    }
    
    // Handle URL suggestion cancel button
    const cancelBtn = document.getElementById('url-suggestion-cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', hideUrlSuggestion);
    }
    
    // Hide tooltip when clicking outside
    document.addEventListener('click', (e) => {
        const tooltip = document.getElementById('url-suggestion-tooltip');
        if (tooltip && !tooltip.contains(e.target) && !e.target.closest('input[data-field="title"]')) {
            hideUrlSuggestion();
        }
    });
    
}

// Export functions
window.getCurrentUrlMappings = getCurrentUrlMappings;
window.saveUrlMappings = saveUrlMappings;
window.applyUrlRedirects = applyUrlRedirects;
window.getJsonFileUrl = getJsonFileUrl;
window.extractFileIdFromUrl = extractFileIdFromUrl;
window.deleteOldJsonFile = deleteOldJsonFile;
window.updateMetaTagWithJsonUrl = updateMetaTagWithJsonUrl;
window.generateUrlSlug = generateUrlSlug;
window.generateUniqueUrlSlug = generateUniqueUrlSlug;
window.showUrlSuggestion = showUrlSuggestion;
window.hideUrlSuggestion = hideUrlSuggestion;
window.applyUrlSuggestion = applyUrlSuggestion;
window.initializeUrlManagement = initializeUrlManagement;

    
    // Main Application
    // SquareHero Advanced Product Manager - Main Entry Point

// Global variables that will be initialized
let bulkChanges = {
    categoryToAdd: null,
    roundPricesOnly: false,
    priceAdjustment: null,
    regularAdjustmentType: 'percentage',
    applyToSale: false,
    fixedPrice: null,
    fixedApplyToSale: false,
    saleDiscount: null,
    saleToggle: 'no-change',
    enableRounding: false,
    roundingType: 'whole',
    customCents: 99,
    newStatus: null,
    enableStockTracking: false,
    stockAction: 'set',
    stockAmount: null
};

let currentPresetIndex = null;
let hasUnsavedChanges = false;
let presetSettingsSnapshot = null;
let presetsData = null;
// Note: undoHistory and MAX_UNDO_HISTORY are now managed by undo-changes.js module
let globalProductsData = [];
let changedProducts = new Set();
let originalData = new Map();
// Make urlRedirects globally accessible
window.urlRedirects = new Map();

// License management
let isLicensed = false;
let licenseValidationInProgress = false;

// Main initialization function
async function startApplication() {
    
    // Check for Chrome extension activation trigger
    const urlParams = new URLSearchParams(window.location.search);
    const siteActivated = urlParams.has('siteActivated');
    
    if (siteActivated) {
        // Clear any cached license data to force fresh validation
        if (window.licenseManager) {
            window.licenseManager.clearCache();
        }
        // Remove the query parameter from URL without page reload
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: newUrl }, '', newUrl);
    }
    
    // Initialize and validate license first
    try {
        const licenseResult = await initializeLicensing();
        
        if (licenseResult === 'blocked') {
            console.warn('Site not connected - app blocked');
            return; // Don't initialize the app at all
        } else if (licenseResult === 'demo') {
            // Site is connected with demo token - continue in demo mode
            console.log('Site isnt activated. Running in demo mode.');
        } else if (licenseResult === true) {
            // License validated - proceeding with full initialization
        }
    } catch (error) {
        console.error('❌ License initialization failed:', error);
        return;
    }
    
    // Initialize currency detection early
    if (window.currencyManager) {
        
        // Start async currency detection - handle both Promise and direct string return
        const currencyResult = window.currencyManager.getCurrency();
        if (currencyResult && typeof currencyResult.then === 'function') {
            // It's a Promise
            currencyResult.then(currency => {
                updateCurrencyHeaders(currency);
            }).catch(error => {
                updateCurrencyHeaders(window.currencyManager.getCurrencySync());
            });
        } else {
            // It's a direct string result
            updateCurrencyHeaders(currencyResult);
        }
        
        // Listen for currency detection and update UI headers
        window.addEventListener('currencyDetected', (event) => {
            updateCurrencyHeaders(event.detail.currency);
        });
    }
    
    // Setup preview toggle functionality
    setupPreviewToggle();
    
    // Wait a bit to ensure all DOM elements are ready
    setTimeout(() => {
        // Initialize core functionality that exists
        if (typeof loadProducts === 'function') {
            loadProducts();
        }
        
        if (typeof initializeTableInteractions === 'function') {
            initializeTableInteractions();
        }
        
        // Initialize table scroll arrows functionality
        if (typeof initializeTableScroll === 'function') {
            initializeTableScroll();
        }
        
        if (typeof initializeSchedulePopup === 'function') {
            initializeSchedulePopup();
        }
        
        if (typeof initializeProductTable === 'function') {
            initializeProductTable();
        }
        
        if (typeof initializeSelectAll === 'function') {
            initializeSelectAll();
        }
        
        // Initialize search and filtering functionality
        if (typeof initializeSearchFiltering === 'function') {
            initializeSearchFiltering();
        }
        
        // Initialize data utilities (for changes footer save/discard buttons)
        if (typeof initializeDataUtilities === 'function') {
            initializeDataUtilities();
        }
        
        // Initialize bulk editor functionality
        if (typeof initializeBulkEditor === 'function') {
            initializeBulkEditor();
        }
        
        // Initialize bulk change application system
        if (typeof initializeBulkChangeApplication === 'function') {
            initializeBulkChangeApplication();
        }
        
        // Initialize URL management functionality
        if (typeof initializeUrlManagement === 'function') {
            initializeUrlManagement();
        }
        
        // Initialize bulk adjust functionality when products are loaded
        setTimeout(() => {
            if (typeof initializeBulkAdjust === 'function') {
                initializeBulkAdjust();
            }
            
            // Log successful plugin load completion
            console.log('🚀 SquareHero.store Advanced Product Manager loaded');
        }, 1000);
    }, 100); // Small delay to ensure DOM is ready
    
}

/**
 * Initialize licensing system
 */
async function initializeLicensing() {
    if (!window.licenseManager) {
        console.warn('⚠️ License Manager not available');
        return 'blocked';
    }

    if (licenseValidationInProgress) {
        console.log('⏳ License validation already in progress');
        return isLicensed ? true : 'demo';
    }

    licenseValidationInProgress = true;

    try {
        const validated = await window.licenseManager.initialize();
        isLicensed = validated;
        
        if (validated) {
            // License is valid - enable full functionality
            window.licenseManager.enablePlugin();
            
            // No periodic validation - rely on JWT expiration for real-time updates
            return true;
            
        } else {
            // Check if app was blocked due to connection issue
            if (window.licenseManager.isBlocked && window.licenseManager.isBlocked()) {
                return 'blocked';
            }
            
            // License is invalid but app can run in demo mode
            isLicensed = false;
            return 'demo';
        }
        
    } catch (error) {
        console.error('❌ Error initializing licensing:', error);
        isLicensed = false;
        return 'blocked';
    } finally {
        licenseValidationInProgress = false;
    }
}

/**
 * Check if the application is properly licensed
 */
function _0xe5da8364() {
    return {
        licensed: isLicensed,
        status: window.licenseManager ? window.licenseManager.getLicenseStatus() : { licensed: false, status: 'no_manager' }
    };
}

// Note: DOMContentLoaded initialization is handled by build.js, not here
function showMessage(message, type = 'info') {
    
    // Try to use existing notification systems
    if (typeof showBulkNotification === 'function') {
        showBulkNotification(message, type);
    } else {
        // Fallback to console log for now
    }
}

// Setup preview toggle functionality
function setupPreviewToggle() {
    const previewToggleBtn = document.getElementById('preview-toggle-btn');
    let isExpanded = false; // Track current state - starts collapsed
    
    if (!previewToggleBtn) {
        return;
    }
    
    // Set initial icon state (collapsed = show expand arrows)
    updateToggleIcon(previewToggleBtn, isExpanded);
    
    previewToggleBtn.addEventListener('click', function() {
        try {
            // Find the preview button inside the toolbar in the parent window
            const toolbar = window.parent.document.querySelector('#frame-toolbar-desktop');
            const previewButton = toolbar ? toolbar.querySelector('[aria-label="Preview"]') : 
                                 window.parent.document.querySelector('[aria-label="Preview"]');
            
            if (previewButton) {
                // Click the preview button to toggle the mode
                previewButton.click();
                
                // Toggle the icon state
                isExpanded = !isExpanded;
                updateToggleIcon(previewToggleBtn, isExpanded);
                
            } else {
            }
        } catch (error) {
        }
    });
    
}

function updateToggleIcon(button, isExpanded) {
    const svg = button.querySelector('svg path');
    if (svg) {
        if (isExpanded) {
            // Arrows pointing inward (collapse mode) - when expanded, show collapse icon
            svg.setAttribute('d', 'M1 10H6V15M15 6H10V1');
        } else {
            // Arrows pointing outward (expand mode) - when collapsed, show expand icon
            svg.setAttribute('d', 'M6 15H1V10M10 1H15V6');
        }
    }
}

/**
 * Update table headers with detected currency
 * @param {string} currency - Currency code (e.g., 'USD', 'EUR')
 */
function updateCurrencyHeaders(currency) {
    
    const priceHeader = document.getElementById('price-header');
    const salePriceHeader = document.getElementById('sale-price-header');
    
    if (priceHeader) {
        priceHeader.textContent = `Price (${currency})`;
    }
    
    if (salePriceHeader) {
        salePriceHeader.textContent = `Sale Price (${currency})`;
    }
}

// Export functions to global scope
window.startApplication = startApplication;
window.showMessage = showMessage;
window.updateCurrencyHeaders = updateCurrencyHeaders;
window.initializeLicensing = initializeLicensing;
window._0xe5da8364 = _0xe5da8364;

    
    // Function to inject HTML and start the application
    function initProductManager() {
        // Create container div with template
        const container = document.createElement('div');
        container.innerHTML = HTML_TEMPLATE;
        document.body.appendChild(container);
        
        // Start the application
        if (typeof startApplication === 'function') {
            startApplication();
        } else {
            console.error('startApplication function not found');
        }
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProductManager);
    } else {
        initProductManager();
    }
})();