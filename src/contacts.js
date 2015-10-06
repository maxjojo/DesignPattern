/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';

    var pInstance = null;

    var Contacts = function () {
        var listeContact = [];
        this.clear = function () {
            while (listeContact.length > 0) {
                listeContact.pop();
            }
        };
        this.size = function () {
            return listeContact.length;
        };
        this.add = function (contact) {
            listeContact.push(contact);
        };
        this.get = function (vid) {
            var i = 0;
            var bool = 0;
            while ((i < listeContact.length) && (bool != 1)) {
                if (listeContact[i].id() === vid) {
                    bool = 1;
                }
                else {
                    i++;
                }
            }
            if (bool == 1) {

                return listeContact[i];
            } else {
                console.log("Id pas trouvé");
            }
        };
        this.getFromName = function (vfirstname, vlastname) {
            var i = 0;
            var tab = [];
            while (i < listeContact.length)  {
                if ((listeContact[i].firstName() === vfirstname) && (listeContact[i].lastName() === vlastname)) {
                    tab.push(listeContact[i]);
                    i++;
                }
                else {
                    i++;
                }
            }
           return tab;
        };

        this.remove = function(vid){
            var i = 0;
            var bool = 0;
            while ((i < listeContact.length) && (bool != 1)) {
                console.log(" id contacts : "+ listeContact[i].id() + " et id cherché : "+vid);
                if (listeContact[i].id() === vid) {
                    bool = 1;
                }
                else {
                    i++;
                }
            }
            if (bool === 1) {
            listeContact.splice(i, 1);
            } else {
                console.log("Id pas trouvé");
            }
        };

        this.getListeContacts = function(){
            return listeContact;
        };

        this.search = function(strategy) {
        return strategy.get(this);
        };
        this.iterator=function(){
            return new Contact.Iterator(listeContact);
        };
    };

    self.Contacts = {
        instance: function () {
            if (!pInstance) {
                pInstance = new Contacts();
            }
            return pInstance;
        }
    };
    return self;
}
(Contact || {}));
/**
 * Created by jdevin on 10/09/15.
 */
