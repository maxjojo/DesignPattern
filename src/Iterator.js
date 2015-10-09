/**
 * Created by jdevin on 18/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';

    self.Iterator = function (vliste) {
        var position;
        var liste ;
        var init = function (vliste) {
            liste = vliste;
            position = 0;
        };
        init(vliste);
        this.hasNext = function () {
            return position < liste.length;
        };
        this.next = function () {
            return liste[position++];
        };


    };
    return self;
}(Contact || {}));
/**
 * Created by jdevin on 06/10/15.
 */
