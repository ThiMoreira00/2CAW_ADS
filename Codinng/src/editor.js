
// document.getElementById("editor").addEventListener("keyup", function() {
    
// });

// function tabulação() {
//     var key = window.event.charCode;

//     if (key == 45) {
//         window.event.preventDefault();
//         var input = document.getElementById('editor');
//         var position = input.selectionStart;
//         position.innerHTML += " ";
//     }
// }



document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById('editor');
    input.addEventListener("keydown", tabulacao);
  });
  
  function tabulacao(event) {
    var key = event.keyCode || event.charCode;
  
    if (key === 9) {
      event.preventDefault();
  
      var input = document.getElementById('editor');
      var position = input.selectionStart;
      var value = input.value;
      var spaces = "    "; // Quatro espaços para cada TAB
  
      input.value = value.substring(0, position) + spaces + value.substring(position);
      input.selectionStart = input.selectionEnd = position + spaces.length;
    }
  }