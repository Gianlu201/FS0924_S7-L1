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
const addBtn = document.getElementById('addAnimal');
const petsList = document.getElementById('petsList');
const ownerAccordion = document.getElementById('ownerAccordion');
const pets = [];
let myOwnerArr = [];
let ownerCounter = 0;

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  checkOwnerRegistered(petsArr) {
    if (petsArr.length > 2) {
      for (let i = 0; i < petsArr.length - 1; i++) {
        if (this.ownerName === petsArr[i].ownerName) {
          console.log('true');
        }
      }
    }
  }
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  createNewPet();
  showPets(pets);
  drawOwnerAccordion(pets);
  addBtn.parentElement.reset();
});

function createNewPet() {
  const petName = document.getElementById('petName').value;
  const ownerName = document.getElementById('ownerName').value;
  const species = document.getElementById('species').value;
  const breed = document.getElementById('breed').value;
  pets.push(new Pet(petName, ownerName, species, breed));
  pets[pets.length - 1].checkOwnerRegistered(pets);
}

function showPets(petsArr) {
  const myLi = document.createElement('li');
  myLi.innerText = `Nome: ${
    petsArr[petsArr.length - 1].petName
  }, proprietario: ${petsArr[petsArr.length - 1].ownerName}`;
  petsList.appendChild(myLi);
}

function drawOwnerAccordion(petsArr) {
  ownerAccordion.innerHTML = '';
  for (let i = 0; i < petsArr.length; i++) {
    if (!myOwnerArr.includes(petsArr[i].ownerName)) {
      ownerCounter++;
      const element = createElem(petsArr[i]);
      ownerAccordion.appendChild(element);
      myOwnerArr.push(petsArr[i].ownerName);
    } else {
      const index = myOwnerArr.indexOf(petsArr[i].ownerName);
      const myLi = document.createElement('li');
      myLi.innerText = `Nome: ${petsArr[i].petName}, specie: ${petsArr[i].species}, razza: ${petsArr[i].breed}`;
      const myUl = document.querySelector(`#collapse${index + 1} .petsList`);
      myUl.appendChild(myLi);
    }
  }
  myOwnerArr = [];
  ownerCounter = 0;
}

function createElem(pet) {
  const myDiv = document.createElement('div');
  myDiv.classList.add('accordion-item');

  const myH2 = document.createElement('h2');
  myH2.classList.add('accordion-header');

  const myBtn = document.createElement('button');
  myBtn.classList.add('accordion-button', 'collapsed', 'bg-info');
  myBtn.setAttribute('type', 'button');
  myBtn.setAttribute('data-bs-toggle', 'collapse');
  myBtn.setAttribute('data-bs-target', `#collapse${ownerCounter}`);
  myBtn.setAttribute('aria-expanded', 'false');
  myBtn.setAttribute('aria-controls', `collapse${ownerCounter}`);
  myBtn.innerText = `${pet.ownerName}`;

  myH2.appendChild(myBtn);

  const myDiv2 = document.createElement('div');
  myDiv2.id = `collapse${ownerCounter}`;
  myDiv2.classList.add('accordion-collapse', 'collapse');
  myDiv2.setAttribute('data-bs-parent', '#ownerAccordion');

  const myDiv3 = document.createElement('div');
  myDiv3.classList.add('accordion-body');
  // myDiv3.innerText = `${pet.petName}`;
  const myUl = document.createElement('ul');
  myUl.classList.add('petsList');
  const myLi = document.createElement('li');
  myLi.innerText = `Nome: ${pet.petName}, specie: ${pet.species}, razza: ${pet.breed}`;

  myUl.appendChild(myLi);

  myDiv3.appendChild(myUl);

  myDiv2.appendChild(myDiv3);

  myDiv.appendChild(myH2);
  myDiv.appendChild(myDiv2);

  return myDiv;
}
