// script.js
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && assunto && mensagem) {
        alert('Mensagem enviada com sucesso!\nNome: ' + nome + '\nEmail: ' + email + '\nAssunto: ' + assunto + '\nMensagem: ' + mensagem);
        document.getElementById('contato-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function mostrarAba(abaSelecionada){
   
    // 1- apanhar todos os elementos com a classe "aba"
    const abas = document.querySelectorAll(".aba");
    
    // 2 - Remover a classe "ativa" dos elemetos com a classe "aba"
    abas.forEach((aba)=>aba.classList.remove("ativa"));
    // 3 - Adicionar a classe "ativa" ao elemento que se deseja ativar 
    // O elemento que se deseja ativar é passado para a função através do atributo "abaSelecionada"
    document.getElementById(abaSelecionada).classList.add("ativa");
    console.log("test"+ abas);
    //4 - apanhar todos os elementos com a classe "conteudo"
    const conteudos = document.querySelectorAll(".conteudo");
    console.log("conteudo"+ conteudos);
    // 5 - remover a classe "ativa" dos elementos com a classe "conteudo"
    conteudos.forEach((conteudo) => conteudo.classList.remove("ativa"));
    
    // 6 - apanhar o id do conteúdo que se deseja apresentar, através da propriedade "data-aba" do elemento referenciado pelo id abaSelecionada
    const abaConteudo = document.getElementById(abaSelecionada).getAttribute("data-aba");
    // 7 - adicona a classe "ativa" ao elemento que se deseja mostrar
    document.getElementById(abaConteudo).classList.add("ativa");
    


    //MODAL
    
}

function abrirModal(imgSrc, imgDescription){
    
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-description").innerHTML = imgDescription;
    document.getElementById("myModal").style.display="block";
}

window.onclick = function(event){
    if(event.target == document.getElementById("myModal")){
        document.getElementById("myModal").style.display =  "none";
    }
}