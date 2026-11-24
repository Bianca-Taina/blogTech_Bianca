const botoes = document.querySelectorAll("button");

botoes.array.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado(){
        let texto = botao.querySelector("span");
        if (curtiu === false){
            texto.textContent++;
            curtiu = true;
        
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
})