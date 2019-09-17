(function(){

    let word = "APPLE";
    
    let button = document.querySelector("#button");
    let previousGuesses = new Array;

    button.addEventListener("click", function () {
        let letter = document.querySelector("#guess").value.toUpperCase();
        var count;

        
        if (word.includes(letter)) {
            let count = word.split(letter).length-1;
            
            console.log("Yeah, the letter " + letter + " exists " + count + " times in my word.");
        } else {
            console.log("Nope, that letter doesn't exist in my word.");
        }

        document.querySelector("#guess").value = "";
    });
    
})();