/**
 * Created by jdevin on 18/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';

    self.Chain = function (handler) {
        var handlers;
        var init = function (handler) {
            handlers = handler;
        };
        this.processRequest=function(request) {
            handler.processRequest(request);
        };
        init(handler);
    };
    return self;
}(Contact || {}));