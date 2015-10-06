/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.Builder = function () {
        this.createMinimalContact = function (vgender, vfirstname, vlastname) {
            return new Contact.Contact(vgender, vfirstname, vlastname);
        };
        this.createContactWithProfessionalMail = function (vgender, vfirstname, vlastname, vmail) {
          var contact = new Contact.Contact(vgender, vfirstname, vlastname);
           contact.addMail(new Contact.Mail(vmail, Contact.MailCategory.PRO));
            return contact;
        };
        this.createContactWithProfessionalMobile = function (vgender, vfirstname, vlastname, vmobile) {
            var contact = new Contact.Contact(vgender, vfirstname, vlastname);
            contact.addPhone(new Contact.Phone(vmobile, Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));
            return contact;
        };
        this.createContactWithTag = function(genre,prenom,nom,tag){
            var contact = new Contact.Contact(genre,prenom,nom);
            contact.addTag(tag);
            return contact;
        };
    };
    return self;
}(Contact || {}));
