// Code your solution in this file.
//const studentNames = ['Adele' , 'Beyonce' , 'Lady' , 'Madonna' , 'Rihanna' , 'Taylor']

function hi(student) {
  return student.toLowerCase();
}
function lowerCaseStudentNames(list){
 return list.map(hi);
}