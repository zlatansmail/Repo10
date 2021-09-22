var myPet = {
    species: 'Dog',
    name: 'Kiki',
    legs: 4,
    friends: ["Ari", "Daf", "Laf"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };