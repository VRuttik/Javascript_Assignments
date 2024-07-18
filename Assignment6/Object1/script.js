const dog = {};

document.write(dog + "<br><br>");
//console.log(dog);

dog.name = "Raju";
dog.legs = 4;
dog.color = "white";
dog.age = 2;
dog.bark = function() {
  return "woof woof";
}

document.write("Dog Name: "+dog.name +"<br>");
document.write("Legs "+ dog.legs + "<br>");
document.write("Color "+ dog.color+ "<br>");
document.write("Age "+ dog.age+ "<br>");
document.write("Bark "+ dog.bark()+ "<br><br>");

dog.breed = "German Shepherd";
dog.getDogInfo = function(){
  return "My dog name is " + dog.name + " and he is " + dog.age + " years old. He has " + dog.legs + " legs and his color is " + dog.color + ". He barks like this: " + dog.bark() + ". His breed is " + dog.breed + ".";
}

document.write(dog.getDogInfo());
