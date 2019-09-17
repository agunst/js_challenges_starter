(function () {

    document.write("hello from palindromes.js<br><br>");

    var word, newWord;
    word = "abcdedcba";

    newWord = word.split("");
    newWord = newWord.reverse();
    newWord = newWord.join("");

    console.log(word === newWord);

})();