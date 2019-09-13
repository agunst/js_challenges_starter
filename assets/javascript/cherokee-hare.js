(function () {

    document.write("hello from cherokee-hare.js<br><br>");

    let startingPopulation = 200;
    let birthRate = 0.1;
    let numberOfWeeks = 5;
    var newPopulation;

    newPopulation = startingPopulation * Math.pow(1 + birthRate, numberOfWeeks);
    console.log(newPopulation);

})();