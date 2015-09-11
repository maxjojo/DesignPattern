/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.AddCommand = function () {
        var pcontact;
        this.execute=function(contact){
            pcontact=contact;
        Contact.Contacts.instance().add(contact);
        };
        this.undo=function(){
            Contact.Contacts.instance().remove(pcontact.id());
        };
    };
    return self;
}(Contact || {}));
