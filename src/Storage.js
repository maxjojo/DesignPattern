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

        this.load=function(contacts){
            for(var i=0;i<localStorage.length;i++){
                console.log("ahahahah "+localStorage.getItem(localStorage.key(i)));
                var contact=localStorage.getItem(localStorage.key(i));
                console.log("ok"+contact.substring(0,9));
              //  if(contact.substring(0,9)==="contacts/"){
                    contacts.add(contact.builder.createContactWithJson(JSON.parse(contact)));
                    console.log("bbbbb "+(JSON.parse(contact).firstName()));
                //}
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