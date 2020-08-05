const whichSchool = function(age) {
  if (age < 13){
    return("You should go to Elementary School!");
  } else if (age >=13 && <= 18) {
    return("You should go to Secondary School!");
  } else{
    return("You should go to Lighthouse Labs!")
  }
}
console.log(function(16));