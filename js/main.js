//para embararalhar as frases dentro do array
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
minhasFrases = [
    "Não é a linguagem de programação que define o programador, mas sim sua lógica.",
    "Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.",
    "Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.",
    "O resultado do programa é relativo o nível de conhecimento do programador.",
    "Antes do software poder ser reutilizável ele primeiro tem de ser utilizável",
    "Falar é fácil. Mostre-me o código.",
    "Só existem dois tipos de pessoas no mundo: as que entendem código binário e as que não entendem."
]
//chamando a função
shuffle(minhasFrases)
console.log(minhasFrases)
lead = minhasFrases[0]
$(".lead").text(lead)

//calcula o tamanho da frase e imprime no console

var numPalavras = lead.split(" ").length;
tamanhoFrase.text(numPalavras)

var tempoJogo  = $("#tempo");
//armazenar o tempo inicial
var tempoInicial = tempoJogo.text();

// pega o tamanho da frase
var tamanhoFrase = $("#tamanho-frase");



//monitora o clique do campo de digitação
var campo = $("#campo-digitacao");
campo.on("input", function(){
    //pega o que tem dentro do campo de texto
    var frase = campo.val();
    //conta a quantidade de caracteres da frase digitada
    var nCaracteresDigitados = frase.length;
    //mostra a quantidade na tela
    $("#caracteres-digitados").text(nCaracteresDigitados);

    //quebra a frase em palavras e conta as palavras
    var nPalavrasDigitadas = frase.split(" ").length;
    //exibe a quantidade de palavras na tela
    $("#palavras-digitadas").text(nPalavrasDigitadas);
    //imprimir em cima também
});

//cronometrando o tempo
//quando clicar apenas uma vez na caixa
var running = false;
campo.on("focus", function(){
    if(running == true){
        return;
    }
    //criando uma variavel para o intervalo
    var cronometro = setInterval(function(){
        var tempoRestante = tempoJogo.text();
        //condicional para desabilitar a caixa de texto
        if (tempoRestante <= 0) {
            running = false;
            campo.attr("disabled", true);
            console.log(tempoRestante);
            //limpando o console
            clearInterval(cronometro);
            nome = $(".form-control").val()
            palavrasDigitadas = $("#palavras-digitadas").text()
            pontuacao = palavrasDigitadas/tempoInicial * 60
            $(".table").append('<tr><td>'+nome+'</td><td>'+pontuacao+'</td></tr>');
            $(".progress-bar").css("width", "100%");
        } else{
            running = true;
            tempoRestante--;
            tempoJogo.text(tempoRestante);
            porcentagem = (tempoRestante / tempoInicial * 100) + "%";
            console.log(porcentagem)
            $(".progress-bar").css("width", porcentagem);
            //decrementando o tempo
            

        }
      
    }, 1000);
})
//botao reset
$(".btn-restart").on("click", function(){
    //desbloquear a caixa de texto
    campo.attr("disabled", false);
    //limpa a caixa
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo").text(tempoInicial);


})


