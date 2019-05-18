const MobileDetect = require('mobile-detect');

const device = new MobileDetect(navigator.userAgent || navigator.vendor || window.opera);

module.exports = device;
