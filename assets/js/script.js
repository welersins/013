$(document).ready(function(){
    //DECLARAR VARIABLES EN 0
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;


    //BOTON SUMAR
    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("debe agregar el primer numero");
            $("error1").css("color", "red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("debe agregar el segundo numero");
            $("error2").css("color", "red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();
    })
        
// BOTON LIMPIAR QUE DESPUES SE AGREGA DENTRO DE LAS FUNCIONES + - * /
    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }

    //BOTON RESTAR
    $("#btnRestar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 === ""){

            $("#error1").text("debe agregar el primer numero");
            $("error1").css("color", "red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){

            $("#error2").text("debe agregar el segundo numero");
            $("error2").css("color", "red");
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);
        $("#resultado").text(resultado);
        limpiar();
    })
});




// MAKING JAVASCRIPT
//    let numero1 = document.getElementById("numero1").value;
// let btnSumar = document.getElementById("btnSumar");
//         btnSumar.addEventListener("click", ()=> {
//             console.log("hola mundo");
//         });