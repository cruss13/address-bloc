const Contact = require('../db/models').Contact;

module.exports = class ContactController {

  constructor() {
    this.contacts = [];
    this.addContact.Questions = [
      {
        type: 'input',
        name: 'name',
        message: "Contact's name - ",
        validate(val){
          return val !== '';
        }
      }
    ];
  }

  addContact(name, phone, email) {
    return Contact.create({name, phone, email})
  }

  getContacts() {
    return Contact.findAll()
  }

}
