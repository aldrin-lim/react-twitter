// export const timeago = function () {
//   var o = {
//     second: 1000,
//     minute: 60 * 1000,
//     hour: 60 * 1000 * 60,
//     day: 24 * 60 * 1000 * 60,
//     week: 7 * 24 * 60 * 1000 * 60,
//     month: 30 * 24 * 60 * 1000 * 60,
//     year: 365 * 24 * 60 * 1000 * 60
//   };
//   var obj = {};

//   obj.ago = function (nd) {
//     var r = Math.round,
//       pl = function (v, n) {
//         return n + ' ' + v + (n > 1 ? 's' : '') + ' ago'
//       },
//       ts = new Date().getTime() - new Date(nd).getTime(),
//       ii;
//     for (i in o) {
//       if (r(ts) < o[i]) return pl(ii || 'm', r(ts / (o[ii] || 1)))
//       ii = i;
//     }
//     return pl(i, r(ts / o[i]));
//   }

//   obj.today = function () {
//     var now = new Date();
//     var Weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
//     var Month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
//     return Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
//   }

//   obj.timefriendly = function (s) {
//     var t = s.match(/(\d).([a-z]*?)s?$/);
//     return t[1] * eval(o[t[2]]);
//   }

//   obj.mintoread = function (text, altcmt, wpm) {
//     var m = Math.round(text.split(' ').length / (wpm || 200));
//     return (m || '< 1') + (altcmt || ' min to read');
//   }

//   return obj;
// }

// (function timeAgo(selector) {

//       var templates = {
//           prefix: "",
//           suffix: " ago",
//           seconds: "less than a minute",
//           minute: "about a minute",
//           minutes: "%d minutes",
//           hour: "about an hour",
//           hours: "about %d hours",
//           day: "a day",
//           days: "%d days",
//           month: "about a month",
//           months: "%d months",
//           year: "about a year",
//           years: "%d years"
//       };
//       var template = function (t, n) {
//           return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
//       };

//       var timer = function (time) {
//           if (!time) return;
//           time = time.replace(/\.\d+/, ""); // remove milliseconds
//           time = time.replace(/-/, "/").replace(/-/, "/");
//           time = time.replace(/T/, " ").replace(/Z/, " UTC");
//           time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
//           time = new Date(time * 1000 || time);

//           var now = new Date();
//           var seconds = ((now.getTime() - time) * .001) >> 0;
//           var minutes = seconds / 60;
//           var hours = minutes / 60;
//           var days = hours / 24;
//           var years = days / 365;

//           return templates.prefix + (
//           seconds < 45 && template('seconds', seconds) || seconds < 90 && template('minute', 1) || minutes < 45 && template('minutes', minutes) || minutes < 90 && template('hour', 1) || hours < 24 && template('hours', hours) || hours < 42 && template('day', 1) || days < 30 && template('days', days) || days < 45 && template('month', 1) || days < 365 && template('months', days / 30) || years < 1.5 && template('year', 1) || template('years', years)) + templates.suffix;
//       };

//       var elements = document.getElementsByClassName('timeago');
//       for (var i in elements) {
//           var $this = elements[i];
//           if (typeof $this === 'object') {
//               $this.innerHTML = timer($this.getAttribute('title') || $this.getAttribute('datetime'));
//           }
//       }
//       // update time every minute
//       setTimeout(timeAgo, 60000);

//   })();

export const timeAgo = (date) => {
  var templates = {
    prefix: "",
    suffix: " ago",
    seconds: "less than a minute",
    minute: "about a minute",
    minutes: "%d minutes",
    hour: "about an hour",
    hours: "about %d hours",
    day: "a day",
    days: "%d days",
    month: "about a month",
    months: "%d months",
    year: "about a year",
    years: "%d years"
  };
  var template = function (t, n) {
    return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
  };

  var timer = function (time) {
    if (!time) return;
    time = time.replace(/\.\d+/, ""); // remove milliseconds
    time = time.replace(/-/, "/").replace(/-/, "/");
    time = time.replace(/T/, " ").replace(/Z/, " UTC");
    time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
    time = new Date(time * 1000 || time);

    var now = new Date();
    var seconds = ((now.getTime() - time) * .001) >> 0;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    return templates.prefix + (
      seconds < 45 && template('seconds', seconds) || seconds < 90 && template('minute', 1) || minutes < 45 && template('minutes', minutes) || minutes < 90 && template('hour', 1) || hours < 24 && template('hours', hours) || hours < 42 && template('day', 1) || days < 30 && template('days', days) || days < 45 && template('month', 1) || days < 365 && template('months', days / 30) || years < 1.5 && template('year', 1) || template('years', years)) + templates.suffix;
  };

  return timer(date);
}