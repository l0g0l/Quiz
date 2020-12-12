const respuestas = { // creo esta constante y añado SOLO las respuestas correctas
    r1: "huerto",
    r2: "azadón",
    r3: "tomates",
    r4: "ajo",
    r5: "allegados"

};

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault()


    let aciertos = 0; // let para conteo de aciertos y presentar en consola
    let errores = 0; // let para conteo de aciertos y presentar en consola
    let contestadas = 0; // let para confirmar que se contestan todas las preguntas, sino saldrá un alert

    function chequea(num, respuesta) {
        let todo = document.getElementsByName("pregunta" + num);

        console.log(todo);


        for (i = 0; i < todo.length; i++) {  // todo.length, itera sobre todos los parámetros que contenga TODO
            if (todo[i].checked == true) { // Al seer TODO un array, la i va iterando en cada acción comprobando (con checked) si se ha marcado el botón de respuesta, por eso es = a true
                contestadas = contestadas + 1; 
                
                console.log(todo[i]);// esta let sirve como conteo de si se ha contestado, ya que entra en el bucle. Al final let contestadas tiene que ser 5 (nº de preguntas que hay), sino salta alert
                if (todo[i].value == respuesta) { // la i va iterando en cada acción comprobando (con value) si el valor es igual que la respuesta de CONST RESPUESTAS
                    aciertos = aciertos + 1; // esta let sirve como conteo de los aciertos 
                    if (todo[i].value == respuesta) {
                        todo[i].style.color = "#5ed367";

                    } else { todo[i].style.color = "#ff0000"; }
                    // esta let sirve como conteo de los errores
                } else {errores = errores + 1}
                

            }
            
        }
        

    }
    chequea(1, respuestas.r1);
    chequea(2, respuestas.r2);
    chequea(3, respuestas.r3);
    chequea(4, respuestas.r4);
    chequea(5, respuestas.r5);

    if (contestadas != 5) { // if fuera del for porque es solo para comparar el num de respuestas dadas (let CONTESTADAS) con 5 que son el total de preguntas formuladas, si no son 5, salta alert
        alert("Tienes que contestar todas las preguntas");
        
    }
    alert("El total de respuestas acertadas han sido: " + aciertos + "  " +
        "El total de respuestas erróneas han sido: " + errores);


});


  




