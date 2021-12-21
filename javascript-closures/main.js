function graduate(credential) {
  return function (fullName) {
    return ` ${fullName}, ${credential}.`;
  };
}

var medicalSchoold = graduate('M.D');
var lawSchool = graduate('Esq');

console.log(medicalSchoold('Max Cendalski'));
console.log(lawSchool('Max Cendalski'));
