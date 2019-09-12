(function(){

    document.write("hello from hangman-lite.js<br><br>");
    let word = "APPLE";
    
    let button = document.querySelector("#button");
    
    button.addEventListener("click", function () {
        let letter = document.querySelector("#guess").value.toUpperCase();
        document.innerHTML = "";
        let count = 0;

        //console.log("this button was clicked");
        //console.log(letter);
        if (word.includes(letter)) {
            console.log("Yeah, the letter " + letter + " exists " + count + " times in my word");
        }
    });
    
})();