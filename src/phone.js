/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.PhoneCategory = {PERSO: 1, PRO: 2};
    self.PhoneType = {FIXE: 1, MOBILE: 2};
    self.Phone = function (vnumber, vcategory, vtype) {
        var number;
        var category;
        var type;

        this.number = function () {
            return number;
        };
        this.category = function () {
            return category;
        };
        this.type = function () {
            return type;
        };

        var init = function (vnumber, vcategory, vtype) {
            number = vnumber;
            category = vcategory;
            type = vtype;
        };
        init(vnumber, vcategory, vtype);

    };
    return self;
}(Contact || {}));