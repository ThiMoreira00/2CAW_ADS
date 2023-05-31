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

    promptProgramar();
}

  editor = document.getElementById("editor").innerHTML;

function promptProgramar() {

    
    preview.innerHTML = editor.value;
    preview.style.all = 'unset';
    preview.style = '';
    preview.style.backgroundColor = 'white';
    preview.style.color = 'black';
}