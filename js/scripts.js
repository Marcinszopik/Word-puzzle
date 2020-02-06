$(document).ready(function() {
  $("form.puzzle").submit(function(event) {
    event.preventDefault();
    
    let inputSentence = $("#sentence").val();
    var finalResult= $("#result").empty();
  

    // first method
    let vowels = /[aeiou]/gi;
    finalResult = inputSentence.replace(vowels,'-');


              // Alternative method
    // let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    // let sentence = inputSentence.split(""); 
    //   for (var i= 0; i<=sentence.length; i++){
    //     vowels.forEach(function(vowel) {
    //       if (sentence[i]===vowel) 
    //         sentence[i]= "-"; 
    //     })
    //   }
    //     let finalResult = sentence.join("");

      $("#result").append(finalResult);

  });
});








