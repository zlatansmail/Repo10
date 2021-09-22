var myFood = {
    vegetable: "carrot",
    fruits: "orange",
    drink: "water"
}

function myFunction(myObj) {
    var vegetableValue = myObj["vegetable"];
    var fruitValue = myObj["fruits"];
    var drinkValue = myObj["drink"];

    return { vegetableValue, fruitValue, drinkValue }
}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);