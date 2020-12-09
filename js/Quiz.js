const respuestas = { // creo esta constante y añado SOLO las respuestas correctas
    r1: "huerto",
    r2:"azadón",
    r3: "tomates",
    r4:"ajo",
    r5:"allegados"
  
};



document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault()

let todo =document.getElementsByName("pregunta1");  // si pones esto en consola, ves que es un array
let aciertos=0; // let para conteo de aciertos y presentar en consola
let errores=0; // let para conteo de aciertos y presentar en consola
let contestadas = 0; // let para confirmar que se contestan todas las preguntas, sino saldrá un alert

for(i=0; i<todo.length;i++) {  // todo.length, itera sobre todos los parámetros que contenga TODO
    if(todo[i].checked==true) { // Al seer TODO un array, la i va iterando en cada acción comprobando (con checked) si se ha marcado el botón de respuesta, por eso es = a true
        contestadas=contestadas +1; // esta let sirve como conteo de si se ha contestado, ya que entra en el bucle. Al final let contestadas tiene que ser 5 (nº de preguntas que hay), sino salta alert
        if(todo[i].value == respuestas.r1){ // la i va iterando en cada acción comprobando (con value) si el valor es igual que la respuesta de CONST RESPUESTAS
            aciertos =aciertos +1 // esta let sirve como conteo de los aciertos 
            console.log("Perfecto, has acertado la pregunta 1!")
        }else { errores=errores +1 // esta let sirve como conteo de los errores
        console.log("Ohhh, esta no era la respuesta correcta para la pregunta 1")
        }
        
    }
}

todo= document.getElementsByName("pregunta2");

for(i=0; i<todo.length;i++) {
    if(todo[i].checked==true) {
        contestadas=contestadas +1;
        if(todo[i].value == respuestas.r2){
            aciertos =aciertos +1
            console.log("Perfecto, has acertado la pregunta 2!")
        }else { errores=errores +1
            console.log("Ohhh, esta no era la respuesta correcta para la pregunta 2")
        }

    }
}

todo= document.getElementsByName("pregunta3");

for(i=0; i<todo.length;i++) {
    if(todo[i].checked==true) {
        contestadas=contestadas +1;
        if(todo[i].value == respuestas.r3){
            aciertos =aciertos +1
            console.log("Perfecto, has acertado la pregunta 3!")
        }else { errores=errores +1
            console.log("Ohhh, esta no era la respuesta correcta para la pregunta 3")
        }

    }
}
todo= document.getElementsByName("pregunta4");


for(i=0; i<todo.length;i++) {
    if(todo[i].checked==true) {
        contestadas=contestadas +1;
        if(todo[i].value == respuestas.r4){
            aciertos =aciertos +1
            console.log("Perfecto, has acertado la pregunta 4!")
        }else { errores=errores +1
            console.log("Ohhh, esta no era la respuesta correcta para la pregunta 4")}

    }
}
todo= document.getElementsByName("pregunta5");



for(i=0; i<todo.length;i++) {
    if(todo[i].checked==true) {
        contestadas=contestadas +1;
        if(todo[i].value == respuestas.r5){
            aciertos =aciertos +1
            console.log("Perfecto, has acertado la pregunta 5!")
        }else { errores=errores +1
            console.log("Ohhh, esta no era la respuesta correctaa para la pregunta 5")}

    }
}

if (contestadas != 5){ // if fuera del for porque es solo para comparar el num de respuestas dadas (let CONTESTADAS) con 5 que son el total de preguntas formuladas, si no son 5, salta alert
    alert("Tienes que contestar todas las preguntas");
}

console.log("El total de respuestas acertadas han sido: " +aciertos);
console.log("El total de respuestas erróneas han sido: " +errores);
});


 

