preview = document.getElementById('preview-section');
editor = document.getElementById('editor');

// Adicionando evento para incluir automaticamente o script de código
document.addEventListener("DOMContentLoaded", function () {
    loadingPrompt();
    
});

function loadingPrompt() {

    document.getElementById("editor").value = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>`;
    
    preview.style.backgroundColor = 'white';
    preview.style.color = 'black';
    promptProgramar();
}

function promptProgramar() {

    
    // preview.innerHTML = editor.value;
    // var previewHTML = preview.innerHTML;
    // // Fazendo split no código no formulário
    // var textoHTML = previewHTML.split("");

    
    // A partir daqui, o código não funciona.
    // textoHTML.forEach(
        //     function colorirHTML () {
            //         textoHTML[i].style.color = "blue";
            //         i++;
            //     }
            
            // );

            // BLOCO 2
            // var i = 0;
        
            // var codigoHTML;
            // codigoHTML = editor.value;


           

    alert(valorEditor = document.getElementById("editor[1]"));
              
};