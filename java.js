let botonNegro =
document.querySelector("#Negro")

let botonInfo = 
document.querySelector("#info")

let botonBlanco =
document.querySelector("#Blanco")

let botonRojo = 
document.querySelector("#Rojo")

let Texto =
document.querySelector("#nombreColor")

let imagen0 =
document.querySelector("#fotoCronos")

botonNegro.onmouseover =
function (){
    imagen0.src = "cronosNegro.png"
    Texto.innerText = "NEGRO VULCANO"

} 

botonBlanco.onmouseover =
function (){
    imagen0.src = "cronosBlanco.png"
    Texto.innerText = "BLANCO"

} 

botonRojo.onmouseover =
function (){
    imagen0.src = "cronosRojo.png"
    Texto.innerText = "ROJO"

} 





botonInfo.onclick =
function edades (edad){
    edad = Number(prompt ('ingersa tu edad '))
       if ( edad>=18)
   {
       prompt ('danos tu correo')
       alert ("Estaremos al pendiente")
   
   
   } else {
       alert ("no tienes accseso a la informacion")
       
   }
   }
   