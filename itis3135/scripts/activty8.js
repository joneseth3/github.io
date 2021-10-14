document.getElementById("employee-dropdown").focus();

var person = [];
var salaries = [];
person.push("Bobby B.","Joey J.","Timmy T.","Freddy F.","Sven S.", "Thalia T.");
salaries.push();

document.getElementById("display-results").onclick = displayResults;
document.getElementById("display-salary").onclick = displaySalary;
document.getElementById("add-salary").onclick = addSalary;


function addSalary()
{
    var newSalary = document.getElementById("new-salary").value;
    var dropDown = document.getElementById("employee-dropdown");
    var dropDownValue = dropDown.value;

    if(newSalary < 0 || newSalary === "")
    {
        alert("Please enter a number greater than 0");
    }
    salaries[dropDownValue] = newSalary;
    document.getElementById("employee-dropdown").focus()   
}


function displayResults()
{  
    var maxSalary = Math.max(...salaries);
    var sum = 0;
    for (i = 0; i < salaries.length; i++)
    {
        sum = (sum + parseInt(salaries[i]));
    }
        var average = (sum / salaries.length);

        document.getElementById("results").innerHTML = "<h2>Average of the salaries are:</h2> <p> $" + average + "</p>" +
        "<h2>The highest salary is:</h2> <p>$" + maxSalary + "</p>";
        document.getElementById("employee-dropdown").focus()
}


function displaySalary()
{
    var table = document.getElementById("results-table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr></thead><tbody>"
    for(i = 0; i < person.length; i++)
    {
        var newEntry = "<tr><th>" + person[i] +  "</th> <th> $" +  salaries[i] + "</th></tr>";
        table.innerHTML += newEntry;
    }
    document.getElementById("employee-dropdown").focus()
}

