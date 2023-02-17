function submission_confirmation() { 
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var incident = document.getElementById("incident").value;
    console.log("Hi, Police HQ, There is a new lost report from the user.");
    console.log(name + " has lost the item near the location: " + location);
    console.log(incident);
    alert("Your request has been sucessfully sent to the police station.");
}
