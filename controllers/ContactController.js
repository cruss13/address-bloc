const inquirer = require('inquirer');
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

  addContact(name, phone) {
    return Contact.create({name, phone})
  }

}
