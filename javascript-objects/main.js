var student = {
  firstName: 'Max',
  lastName: 'Cendalski',
  age: 44
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'gamer';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previous occupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Dodge',
  model: 'Challenger',
  year: 2020
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color]: ", vehicle['color']);
console.log('value of vehicle[isConvertible]: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'George',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
