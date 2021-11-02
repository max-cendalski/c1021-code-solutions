/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var firstName = this.firstName;
  var lastName = this.lastName;
  return firstName + ' ' + lastName;
};
Student.prototype.getIntroduction = function () {
  var firstName = this.firstName;
  var lastName = this.lastName;
  var subject = this.subject;
  return 'Hello, my name is ' + firstName + ' ' + lastName + ' and I am studying ' + subject + '.';
};
