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

})();