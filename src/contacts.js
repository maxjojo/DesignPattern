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
            var bool = 0;
            while ((i < listeContact.length) && (bool != 1)) {
                if ((listeContact[i].firstName() === vfirstname) && (listeContact[i].lastName() === vlastname)) {
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

        this.remove = function(vid){
            var i = 0;
            var bool = 0;
            while ((i < listeContact.length) && (bool != 1)) {
                if ((listeContact[i].firstName() === vfirstname) && (listeContact[i].lastName() === vlastname)) {
                    bool = 1;
                }
                else {
                    i++;
                }
            }
            if (bool == 1) {

           delete(listeContact.i);
            } else {
                console.log("Id pas trouvé");
            }
        };
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
