// Colorindo os caracteres 



// 1°: adicionar um evento de trigger

// valor = document.getElementById("editor").value;
//     // var key = window.event.charCode;
//     // if(key == 47) {
//     //     window.event.preventDefault();
//     //     var input = document.getElementById('editor');
//     //     var position = input.selectionStart;
//     //     var caracter = String.fromCharCode(key);
//     //     position.innerHTML += caracter;
//     //     caracter.style.color = "red";
//     // }


    // for(var i = 0; i < valor.length ; i++) {
    //     if(valor.charAt(i) == "/") {
    //         valor[i].style.color = "red";
    //     }
    // }

// document.getElementById("editor").addEventListener("keyup", function() {

//         var key = window.event.charCode;
//         window.event.preventDefault();
//         var input = document.getElementById('editor');
//         var position = input.selectionStart;
//         var caracter = String.fromCharCode(key);
//         caracter.setAttribute('style', 'color: red');
//         position.innerHTML += caracter;

// });


// document.getElementById("editor").onkeyup = function (e) {
//     e.preventDefault(e);
//     alert(typeof(e.key));


    
// };


// }


textarea = document.getElementById("editor");
textarea.addEventListener('textarea', function() {
    const text = this.value;
    var coloredText = '';
  
    for (var i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      coloredText += `<span style="color: red;">${char}</span>`;
    }
  
    this.innerHTML = coloredText;
    
    // Selecionar o texto digitado
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
});