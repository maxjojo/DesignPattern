/**
 * Created by jdevin on 09/10/15.
 */

var Contact = Contact || {};
Contact = (function (self) {

    self.View = function (model) {

        var init = function() {
            var table = $('<table />');

            table.appendTo($('#contacts'));

            var line = $('<tr/>');

            $('<th/>', {id: 'cellFirstName', html : "First name"}).appendTo(line);
            $('<th/>', {id: 'cellLastName', html : "Last name"}).appendTo(line);
            $('<th/>', {id: 'cellPhones', html : "Phones"}).appendTo(line);
            $('<th/>', {id: 'cellMails', html : "Mails"}).appendTo(line);
            $('<th/>', {id: 'cellTags', html : "Tags"}).appendTo(line);
            $('<th/>', {id: 'cellActions', html : "Actions"}).appendTo(line);
            line.appendTo(table);
            line = $('<tr/>');
            var adresses = model.getContacts().getListeContacts();
            for(var i=0;i<adresses.length;i++){
                line = $('<tr/>', {id: 'x'+adresses[i].id()});
                $('<td/>', {id:'cellFirstName',html : adresses[i].firstName()}).appendTo(line);
                $('<td/>', {id:'cellLastName',html : adresses[i].lastName()}).appendTo(line);
                var string="";
               for(var j=0;j<adresses[i].phones().length;j++){

                   string+=adresses[i].phones()[j].number()+"["+adresses[i].phones()[j].category()+"]["+adresses[i].phones()[j].type()+"]";
                   string+="/";
                }
            $('<td/>', {id: adresses[i].id(), html :string}).appendTo(line);
                line.appendTo(table);
            }





        };

        init();

    };

    return self;
}(Contact || {}));

