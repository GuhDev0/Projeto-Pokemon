
const btnAlterador = window.document.getElementById("btn-altera-tema");
const imgTrocaBotaoTema = window.document.getElementById("img-button")
const body = document.querySelector("body");
 

btnAlterador.addEventListener("click", () => {
  
    
   const modoEscuroAtivo = body.classList.contains("modo-escuro")
   
body.classList.toggle("modo-escuro") // Toggle ALternar entre colocar a class e tira a class

   if(modoEscuroAtivo){
    
    imgTrocaBotaoTema.setAttribute("src", "imagens/sun.png")
   }else {
    
    imgTrocaBotaoTema.setAttribute("src", "imagens/moon.png")

   }

   

}) 

