/*

    MÓDULO 02 - JAVASCRIPT

    FUNÇÕES UTILIZADAS:
        window.prompt - exibir uma caixa de alerta, com campo de resposta
        parseInt - conversão do valor para inteiro
        parseFloat - conversão do valor para real
        .toFixed(X) - exibir X casas decimais

*/


// Inserirndo o prompt para inserir as informações do usuário
let nome = window.prompt("Qual é o seu nome?", "Convidado");
let idade = parseInt(window.prompt("Qual é a sua idade?"));
let gastoDiario = parseFloat(window.prompt("Insira o gasto diário com locomoção (em R$):"));
let tempoSemanalEstudo = parseInt(window.prompt("Insira o tempo semanal de estudo extraclasse (em h):"));
let tempoSemanalLivre = parseInt(window.prompt("Insira o tempo semanal livre (em h):"));
let relacaoTempo = tempoSemanalLivre*100/(tempoSemanalLivre + tempoSemanalEstudo);

// Exibindo os resultados
let resultado = document.getElementById("resultado");
resultado.innerHTML = "<strong>Nome: </strong>" + nome + "<br>";
resultado.innerHTML += "<strong>Idade: </strong>" + idade + "<br>";
resultado.innerHTML += "<strong>Gasto diário com locomoção: </strong> R$" + gastoDiario.toFixed(2) + "<br>";
resultado.innerHTML += "<strong>Tempo semanal de estudo: </strong>" + tempoSemanalEstudo + "h<br>";
resultado.innerHTML += "<strong>Tempo semanal livre: </strong>" + tempoSemanalLivre + "h<br><br>";
resultado.innerHTML += "<strong>Relação entre o tempo livre com o tempo total: </strong>" + relacaoTempo.toFixed(2) + "%<br>";