/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.FromMailSearchStrategy = function (mail) {
        this.get = function (ccontacts) {
            var contacts = ccontacts.getListeContacts();
            var i = 0;
            var j = 0;
            var tab = [];
            while (i < contacts.length) {
                j = 0;
                while (j < contacts[i].mails().length) {

                    if (contacts[i].mails()[j].address() === mail) {
                        tab.push(contacts[i]);
                        j++;
                    }
                    else {
                        j++;
                    }
                }
                i++;
            }
            console.log("Taille tableau : " + tab.length);
            if (tab.length == 1) {
                return tab[0];
            } else {
                console.log("Problème de mail pas sérieux!!!");
            }
        };
        this.getKey = function () {
            return mail;
        };
    };
    return self;
}(Contact || {}));
