(function () {

    document.write("hello from change-machine.js<br><br>");

    var amount = 123;
    let change = new Array;

    change[0] = Math.trunc(amount / 20);
    amount = amount % 20;
    change[1] = Math.trunc(amount / 10);
    amount = amount % 10;
    change[2] = Math.trunc(amount / 5);
    change[3] = amount % 5;
    console.log(change);
    /*
    var amount, amountLeft, twenties, tens, fives, ones;
    let change = new Array;

    amount = 47;
    amountLeft = amount;
    console.log(amount);
    console.log(amountLeft);

    twenties = Math.trunc(amountLeft / 20); 
    console.log(twenties);
    amountLeft = amount % 20;
    console.log(amountLeft);

    tens = Math.trunc(amountLeft / 10);
    console.log(tens);
    amountLeft = amount % 20;
    console.log(amountLeft);

    fives = Math.trunc(amountLeft / 5);
    console.log(fives);
    amountLeft = amount % 20;
    console.log(amountLeft);

    ones = amountLeft;
    console.log(ones);

    console.log(change);
    */
})();