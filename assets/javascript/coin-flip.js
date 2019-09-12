(function(){

    //outputs string to the body of the document
    //document.write("hello from coin-flip.js<br><br>");

    //outputs the string to the browsers console
    console.log("hello from coin-flip.js");
    
    let coinflipper = document.querySelector("#coinFlipper");
    
    coinflipper.addEventListener("click", function() {
        //console.log("Button Clicked");
        if (Math.random() >= 0.5) {
            console.log("Heads");
        } else {
            console.log("Tails");
        }
 
    }); 
})();