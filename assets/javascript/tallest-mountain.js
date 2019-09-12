(function(){

    document.write("hello from tallest-mountain.js<br><br>");

    let mountainHeights = [6993, 8848, 7756, 8201, 3062, 7672, 7329, 7308, 2925];
    let placeHolder = 0;
    let heighestHeight = 0;
    //Math.max()
    for(let i = 0; i < mountainHeights.length; i++) {
        if (mountainHeights[i] > heighestHeight) {
            heighestHeight = mountainHeights[i];
        }
        
    }
    document.write(heighestHeight);
})();