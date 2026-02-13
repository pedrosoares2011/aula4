//Pedir a Idade Do Usúario.
//Comparar a Idade Do Usúrio.
//Resposta

let idadeUser = prompt("Digite sua idade:");
let estadoUser = prompt("Digite seu estado").toUpperCase(); 

if (idadeUser <= 18 && estadoUser === "PR") {
    document.getElementById("lascou").innerText = "hora de dar tchau!";
    document.getElementById("Minecraft").innerText = "hora de dar tchau!";
    document.getElementById("Bem vindo").innerText = "hora de dar tchau!";
   


} else {
       document.getElementById("Olá").innerText = "O My God";
       document.getElementById("Meu nome é Pedro").innerText = "hora de dar tchau!";
       document.getElementById("Terra").innerText = "hora de dar tchau!";

      
}
   
    
