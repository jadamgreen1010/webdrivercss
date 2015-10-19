'use strict';

module.exports = function(done) {

    /**
     * if screenwidth was set, get back to old resolution
     */
    if (!this.self.defaultScreenDimension) {
        return done();
    }
    this.instance.windowHandleSize({
        width: this.self.defaultScreenDimension.width,
        height: this.self.defaultScreenDimension.height
    }, done);

};
