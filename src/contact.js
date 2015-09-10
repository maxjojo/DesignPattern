/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.Gender = {MR: 1, MME: 2};
    self.Contact = function (vgender, vfirstname, vlastname) {
        var id;
        var gender;
        var firstname;
        var lastname;
        var build_id = function () {
            'xxxx - xxxx - xxxx - xxxx - xxxx'.replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        this.gender = function () {
            return gender;
        };
        this.firstName = function () {
            return firstname;
        };
        this.lastName = function () {
            return lastname;
        };
        this.id = function () {
            return id;
        };
        var init = function (vgender, vfirstname, vlastname) {
            gender = vgender;
            firstname = vfirstname;
            lastname = vlastname;
            id = build_id();
        };
        init(vgender, vfirstname, vlastname);
    };
    return self;
}(Contact || {}));