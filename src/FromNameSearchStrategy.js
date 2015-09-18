/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.FromNameSearchStrategy = function (pname, name) {
        this.get = function (ccontacts) {
            var contacts = ccontacts.getListeContacts();
            var i = 0;
            var tab = [];
            while (i < contacts.length) {
                if ((contacts[i].firstName() === pname) && (contacts[i].lastName() === name)) {
                    tab.push(contacts[i]);
                    i++;
                }
                else {
                    i++;
                }
            }

            if (tab.length == 1) {
                return tab[0];
                console.log("tableau 0 : " + tab[0]);
            } else {
                console.log("Problème de jumeaux");
            }

        };
        this.getKey = function () {
            return name;
        };
    };
    return self;
}(Contact || {}));
