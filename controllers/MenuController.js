const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose from an option below: ',
        choices: [
          'Add new contact',
          'Get Date',
          'Exit'
        ]
      }
    ];
    this.contacts = [];
  }

  main() {
    console.log('Welcome to AddressBloc!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case 'Add new contact':
          this.addContact();
          break;
        case 'Get Date':
          this.getDate();
          break;
        case 'Exit':
          this.exit();
        default:
          console.log('Invalid Input');
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear() {
    console.log('\x1Bc');
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate() {
    var date = new Date();
    var current = date.toString();

    this.clear();
    console.log(current);
    this.main();
  }

  exit() {
    console.log('Thanks for using AddressBloc!');
    process.exit();
  }

}
