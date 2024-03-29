/**
 * Created by jdevin on 10/09/15.
 */
var Contact = Contact || {};
Contact = (function (self) {
    'use strict';
    self.Gender = {MR: 1, MME: 2};
    self.Contact = function (vgender, vfirstname, vlastname) {
        var id;
        var gender;
        var firstname;
        var lastname;
        var build_id = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        var mails = [];
        var phones = [];
        var cache;
        var tags= [];

        this.gender = function () {
            return gender;
        };
        this.firstName = function () {
            return firstname;
        };
        this.lastName = function () {
            return lastname;
        };
        this.id = function () {
            return id;

        };
        this.mails = function () {
            return mails;
        };
        this.phones = function () {
            return phones;
        };

        this.tags = function () {
            return tags;
        };
        this.tag=function(i){
          return tags[i];
        };
        this.cache = function(){
            return cache;
        };
        this.toObject=function(){
            return{
                _firstname:firstname,
                _lastname:lastname,
                _gender:gender,
                _id:id
            };
        };
        var init = function (vgender, vfirstname, vlastname) {
            gender = vgender;
            firstname = vfirstname;
            lastname = vlastname;
            id = build_id;
        };
        this.addMail = function (mail) {
            mails.push(mail);
        };
        this.addPhone = function (phone) {
            phones.push(phone);
        };

        this.addTag = function (tag) {
            tags.push(tag);
        };
        this.register=function(observeur){
           cache= observeur;
        };

        this.notify=function(){
            if(cache!=null){
                cache.update(this);
            }
        }
        init(vgender, vfirstname, vlastname);
    };
    return self;
}(Contact || {}));