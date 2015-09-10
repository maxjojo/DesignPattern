/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.MailCategory = {PERSO: 1, PRO: 2};
    self.Mail = function (vaddress, vcategory) {
        var address;
        var category;

        this.address = function () {
            return address;
        };
        this.category = function () {
            return category;
        };

        var init = function (vaddress, vcategory) {
            address = vaddress;
            category = vcategory;
        };
        init(vaddress, vcategory);

    };
    return self;
}(Contact || {}));