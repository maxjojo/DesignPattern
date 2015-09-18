/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.RemoveCommand = function () {
        var contact;
        this.execute = function (idcontact) {
            contact = Contact.Contacts.instance().get(idcontact);
            Contact.Contacts.instance().remove(idcontact);
        };
        this.undo = function () {
            Contact.Contacts.instance().add(contact);
        };
    };
    return self;
}(Contact || {}));
