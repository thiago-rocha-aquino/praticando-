let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio.'

function verificarConsole(){
    console.log('foi clicado hihi')
}

function verificarAlert(){
    alert('EU amo JS')
}

function verificarPrompt(){
    let cidade = prompt('digite o nome de uma cidade do Brasil')
    alert(`estive em ${cidade} e lembrei de você`)
}

function verificarSoma(){
    let n1 = parseInt(prompt('digite um número'));
    let n2 = parseInt(prompt('digite outro número'));
    let soma = n1 + n2
    alert(`a soma é ${soma}`)  

}
