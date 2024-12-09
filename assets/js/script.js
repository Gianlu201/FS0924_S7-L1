// ESERCIZIO 1
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(user) {
    switch (true) {
      case this.age > user.age:
        return `${this.firstName} è più vecchio di ${user.firstName}`;
        break;
      case this.age < user.age:
        return `${this.firstName} è più giovane di ${user.firstName}`;
        break;
      case this.age > user.age:
        return `${this.firstName} e ${user.firstName} hanno la stessa età`;
        break;
    }
  }
}

const x = new User('Eros', 'Ramazzotti', 50, 'Roma');
const y = new User('Vasco', 'Rossi', 65, 'Zocca');
const z = new User('Luciano', 'Ligabue', 60, 'Correggio');

console.log('ESERCIZIO 1');
console.log(y.compareAge(x));
console.log(z.compareAge(y));
console.log(x.compareAge(z));
console.log('------------------------------');
//----------------------------------------------------------------------------------

//ESERCIZIO 2
