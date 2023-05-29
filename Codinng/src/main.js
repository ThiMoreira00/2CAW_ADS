preview = document.getElementById('preview-section');
editor = document.getElementById('editor');

function promptProgramar() {
    preview.style = '';
    preview.style.backgroundColor = 'white';
    preview.style.color = 'black';
    

    preview.innerHTML = editor.value;
    preview.style.all = 'unset';
}