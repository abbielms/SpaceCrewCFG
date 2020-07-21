function planetChoice() {
    var planetUser = prompt("What planet in our Solar System would you like to visit? (Remember, planets have capital letters!): ");
        if (planetUser == "Mercury") {
            return alert("Great choice!");
        } else if (planetUser == "Venus") {
            return  alert("Great choice!");
        } else if (planetUser == "Earth") {
            return  alert("Great choice!");
        } else if (planetUser == "Mars") {
            return  alert("Great choice!");
        } else if (planetUser == "Jupiter") {
            return  alert("Great choice!");
        } else if (planetUser == "Saturn") {
            return  alert("Great choice!");
        } else if (planetUser == "Uranus") {
            return  alert("Great choice!");
        } else if (planetUser == "Neptune") {
            return  alert("Great choice!");
        } else {
            var error = prompt("That is not a planet in our Solar System. Please try again (remember the planets have capital letters).");
            return error;
        }
}

console.log("The user's favorite planet in the Solar System is " + planetChoice());
