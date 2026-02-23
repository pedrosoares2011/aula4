//Pedir a Idade Do Usúario.
//Comparar a Idade Do Usúrio.
//Resposta

let idadeUser = prompt("Digite sua idade:");
let estadoUser = prompt("Digite seu estado").toUpperCase(); 

if (idadeUser >= 18 && estadoUser === "PR") {
    document.getElementById("lascou").innerText = "Uau";
    document.getElementById("uau").innerText = "Vc Tem a Idade";
    document.getElementById("ola").innerText = "Parabens";
    document.getElementById("eita").src = "https://s2-oglobo.glbimg.com/9ZhBOSojJWmr7r7tYtptNBhWwoo=/0x0:1600x1107/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/Z/R/HNX0JTSuaKPpQHSA28Rg/00000175-p.jpg";
} else {
       document.getElementById("lascou").innerText = "kkkk";
       document.getElementById("uau").innerText = "Vc Não Tem Idade";
       document.getElementById("ola").innerText = "hora de dar tchau";
       document.getElementById("eita").src = "https://i0.statig.com.br/bancodeimagens/04/gh/20/04gh20m4i4q6ensy5v8n7bfur.jpg"
}
