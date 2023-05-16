
const btnAlterador = window.document.getElementById("btn-altera-tema");
const imgTrocaBotaoTema = window.document.getElementById("img-button")
const body = document.querySelector("body");
 

btnAlterador.addEventListener("click", () => {
  
    
   const modoEscuroAtivo = body.classList.contains("modo-escuro")
   
   if(modoEscuroAtivo){
    body.classList.remove("modo-escuro")
    imgTrocaBotaoTema.setAttribute("src", "imagens/sun.png")
   }else {
    body.classList.add("modo-escuro")
    imgTrocaBotaoTema.setAttribute("src", "imagens/moon.png")

   }

   

}) 

