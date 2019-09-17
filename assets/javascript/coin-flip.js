(function(){

    document.write("hello from coin-flip.js<br><br>");

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