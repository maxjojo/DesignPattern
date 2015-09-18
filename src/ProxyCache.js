/**
 * Created by jdevin on 11/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';

    self.ProxyCache = function (listeContacts) {
        var historique = {};

        this.search = function (strategy) {
            if (!historique.hasOwnProperty(strategy.getKey())) {

                var i = 0;
                var contact=null;
                while (i < listeContacts.length) {
                    if (listeContacts[i].search(strategy) !== null) {
                        contact = listeContacts[i].search(strategy);
                    }
                    i++;
                }
                if(contact!==null){
                    contact.register(this);
                    historique[strategy.getKey()] = contact;
                }

            } else {
                contact = historique[strategy.getKey()];
            }
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
        this.update = function (contact) {
            for (var k in historique) {
                if (historique[k] == contact) {
                    delete historique[k];
                }
            }
        };

    };

    return self;
}(Contact || {}));