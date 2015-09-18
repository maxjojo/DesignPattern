/**
 * Created by jdevin on 18/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.ChangePhoneStrategy = function (vfirstname, vlastname, phone1, phone2) {
        this.substituate = function(ccontacts){
         var contact= ccontacts.search(
             new Contact.FromNameSearchStrategy(vfirstname,vlastname));
            for(var i=0;i<contact.phones().length;i++) {
                if (contact.phones()[i].number() == phone1) {
                    contact.phones()[i].setnumber(phone2);
                }
            }
            console.log("New Numé de tel :"+contact.phones())
        contact.notify();
        };

    };
    return self;
}(Contact || {}));
