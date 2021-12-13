
/* results and algortihms for the bike fit and results section */

window.onload = function () {
    document.getElementById("submit").onclick = displayResults;



    function displayResults()
    {

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var legSize = document.getElementById("legSize").value;
        var torsoLength = document.getElementById("torsoLength").value;
        var armLength = document.getElementById("armLength").value;


        var seatHeight = (legSize / 2);
        var reach = (armLength - 10);
        var drop = (torsoLength - 20);


        document.getElementById("results1").innerHTML = "<p>Hello " + fname + " " + lname +
        ", we have your results from the data that you entered in your form. Remeber that these are estimations and nothing beats a in person bike fit. Also all results are in cm!";

        document.getElementById("results2").innerHTML = "<p>Your seat height is: " + seatHeight + "cm </p>";
        document.getElementById("results3").innerHTML = "<p>Your reach is: " + reach + "cm </p>";
        document.getElementById("results4").innerHTML = "<p>Your drop is: " + drop + "cm </p>";


    }



}



/*first ajax call*/

$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "ajax1.json",
        beforeSend: function() {
            $("#right-ptagAjax").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#right-ptagAjax").html("");
            $.each(data, function(){
              $.each(this, function(key, value){
                $("#right-ptagAjax").append( 
                   "<h3>"+ value.name+ "</h3>" + 
                   value.bio)   
                })  
            })
        }
    });
});


/*second ajax call */


$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "ajax2.json",
        beforeSend: function() {
            $("#middle-bottom-ptagAjax").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#middle-bottom-ptagAjax").html("");
            $.each(data, function(){
              $.each(this, function(key, value){
                $("#middle-bottom-ptagAjax").append( 
                   "<h3>"+ value.name+ "</h3>" + 
                   value.tool + value.method)   
                })  
            })
        }
    });
});