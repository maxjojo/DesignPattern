/*
* Created by jdevin on 10/09/15.
*/
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';



    var Storage = function (contacts) {
        this.save=function(contacts){
            var liste=contacts.getListeContacts();
            console.log("liste+ "+liste.length);
            for(var i=0;i<liste.length;i++){
                localStorage.setItem("contacts/"+liste[i].id(),JSON.stringify(liste[i].toObject()));
            }
        };
    };
    var pInstance = null;
    self.Storage = {
        instance: function () {
            if (!pInstance) {
                pInstance = new Storage();
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