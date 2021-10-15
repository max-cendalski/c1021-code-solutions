/* exported getStudentNames */

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i <= students.length - 1; i++) {
    names.push(students[i].name);
  }
  return names;
}
