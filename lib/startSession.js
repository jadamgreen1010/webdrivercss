'use strict';

module.exports = function() {

    var that = this,
        done = arguments[arguments.length - 1];

    that.instance.execute(function() {
        return {
            useragent: navigator.userAgent,
            screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            documentHeight: document.documentElement.scrollHeight
        };
    }).then(function(res) {
        that.useragent = res.value.useragent;
        that.displaySize = {
            width: that.screenWidth && that.screenWidth.length ? that.screenWidth[0] : res.value.screenWidth,
            height: res.value.documentHeight
        };

        return done();
    });
};
