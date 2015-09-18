/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.FromPhoneSearchStrategy = function (phone) {
        this.get = function(ccontacts){
            var contacts=ccontacts.getListeContacts();
            var i = 0;
            var j = 0;
            var tab = [];
            while (i < contacts.length)  {
                j=0;
                while(j<contacts[i].phones().length){
                    if (contacts[i].phones()[j].number() === phone){
                        tab.push(contacts[i]);
                        j++;
                    }
                    else {
                        j++;
                    }
                }
                i++;
            }
            if(tab.length === 1){
                return tab[0];
            }else{
                console.log("Problème de téléphone pas sérieux!!!");
                return null;
            }

        };
        this.getKey =function(){
            return phone;
        };
    };
    return self;
}(Contact || {}));
