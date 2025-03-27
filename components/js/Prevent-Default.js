//Solo permite números y bloques de letras 
document.querySelector(".userId").addEventListener("keydown", function(e){
    if (e.key === "Backspace" ||
        e.key === "Tab" ||
        e.key === "Enter" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"){
            return; //No bloqueamos estas teclas 
    }
    //Bloquear cualquier tecla que No sea un número
    if(e.key < "0" || e.key > "9"){
        e.preventDefault(); 
        console.log("Solo se permiten numeros"); 
    }
})