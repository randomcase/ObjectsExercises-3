let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 10,
     move:  function(){
    return Math.floor(Math.random() * 11);
  }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 9,
     move:  function(){
    return Math.floor(Math.random() * 11);
    
  }
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 6,
   move:  function(){
    return Math.floor(Math.random() * 11);  
  }
};

let superCat = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 3,
   move:  function(){
   return Math.floor(Math.random() * 11);
  }
};

let superMicrobe = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 1,
  move: function(){
    return Math.floor(Math.random() * 11);
  }
};

// After you have created the other object literals, add the astronautID property to each one.

let animalAstronauts = [superChimpOne, superChimpTwo, salamander, superCat, superMicrobe]

// Create an array to hold the animal objects.
function crewReports(animalAstronauts){
  return console.log(`${animalAstronauts.name} is a ${animalAstronauts.species}.  They are ${animalAstronauts.age} years old and ${animalAstronauts.mass} kilograms. Their ID is ${animalAstronauts.astronautID}.`);
}

crewReports(superCat);

// Print out the relevant information about each animal.

// Start an animal race!
console.log(superMicrobe.move());


//console.log(speedRun)
function fitnessTest(animalAstronautsArr){
  let results = [];
  let numOfSteps;
  let turns;

  for(let i = 0; i < animalAstronauts.length; i++){
    numOfSteps = 0
    turns = 0
    while(numOfSteps < 20){
      numOfSteps += animalAstronautsArr[i].move();
      turns++;
    }
    //push the string to the results array
  results.push(`${animalAstronautsArr[i].name} took ${turns} turns to take 20 steps. `);
  }
  return results;
}
fitnessTest(animalAstronauts);


