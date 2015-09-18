/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';

    self.ProxyCache = function (listeContacts) {
        var historique = {};

        this.search = function (strategy) {
            var i = 0;
            var contact;
            while (i < listeContacts.length) {
                if (listeContacts[i].search(strategy) !== null) {
                    contact = listeContacts[i].search(strategy);
                }
                i++;
            }
            historique[strategy.getKey()] = contact;
            console.log("Contact :" + contact);
            console.log("Entrée clé;" + strategy.getKey());
            console.log("Entrée valeur;" + historique[strategy.getKey()]);
            return contact;
        };
        this.inCache = function (strategy) {
            var temp = false;
            for (var k in historique) {
                if (k == strategy.getKey()) {
                    temp = true;
                    break;
                }
            }
            return temp;
        };


    };

    return self;
}(Contact || {}));