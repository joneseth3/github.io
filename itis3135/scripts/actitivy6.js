const number = window.prompt("Sage JellyFish wants you to enter a number 0-10 "); 
validateEntry(number);


//Validates the Entry an also kinda drives the code 
function validateEntry(number) {
    if(number <= 10 && number >= 0){
        getShape(number);
    } else {
        while(number > 10 || number < 0){
            number = window.prompt("Looks like your number is not valid, make sure the number is between 0 - 10.")
        }        
        getShape(number);
    }
}
//Gets the shape based of of number and rteturns the value to the screen
function getShape(number) {
    if(number == 0)
    {
        alert("you have no sides so there for you are no polygon");
    } else if(number == 1)
    {
        alert("Hesiagon");
    } else if(number == 2)
    {
        alert("Duoagon");
    } else if(number == 3)
    {
        alert("Treisagon");
    } else if(number == 4)
    {
        alert("Teteragon");
    } else if(number == 5)
    {
        alert("Pentagon");
    } else if(number == 6)
    {
        alert("Hexagon");
    } else if(number == 7)
    {
        alert("Heptagon");
    } else if(number == 8)
    {
        alert("Octogon");
    } else if(number == 9)
    {
        alert("Enneagon");
    } else if(number == 10)
    {
        alert("Dekagon");
    }
}


