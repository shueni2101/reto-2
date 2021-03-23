var cervezas= [
    {"marca": "aguila", "precio":5},
    {"marca": "aguilaDos", "precio":5},
    {"marca": "aguilaTres", "precio":5},
    {"marca": "alhambra", "precio":4},
    {"marca": "alhambraDos", "precio":4},
    {"marca": "alhambraTres", "precio":4},
    {"marca": "desperados", "precio":3},
    {"marca": "desperadosDos", "precio":3},
    {"marca": "desperadosTres", "precio":3},
    {"marca": "estrella", "precio":2.5},
    {"marca": "estrellaDos", "precio":2.5},
    {"marca": "estrellaTres", "precio":2.5},
    {"marca": "heineken", "precio":2},
    {"marca": "heinekenDos", "precio":2},
    {"marca": "heinekenTres", "precio":2},
    {"marca": "heineken0", "precio":2},
    {"marca": "heineken0Dos", "precio":2},
    {"marca": "heineken0Tres", "precio":2},
];
let contador=0;
var totalArray=[];
var suma_total=0;
function agarrar(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}
function dragover(ev) {
    ev.preventDefault();
}

function soltar(ev){
    contador++;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var cantidad= document.querySelector(".cantidad_cervezas_elegidas");
    cantidad.innerHTML= "Cantidad de cervezas: " + contador;
    pagar(data);
}

function devolver(ev){
    contador--;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var cantidad= document.querySelector(".cantidad_cervezas_elegidas");
    cantidad.innerHTML= "Cantidad de cervezas: " + contador;
    anularUltimoPago(data);
}    

function pagar(data){
    var pagar= document.querySelector(".pagar");
    for(var c of cervezas){
        if(data==c.marca){
            totalArray.push(c.precio);
            totalArray.forEach ((numero)=>{
                        suma_total += numero;
                        pagar.innerHTML="total a pagar " + suma_total + "€";
                        totalArray.shift();
            });
        } 
    } 
}

function anularUltimoPago(data){
    var pagar= document.querySelector(".pagar");
    for(var c of cervezas){
        if(data==c.marca){
            totalArray.push(c.precio);
            totalArray.forEach ((numero)=>{
                        suma_total -= numero;
                        pagar.innerHTML="total a pagar " + suma_total + "€";
                        totalArray.shift();
            });
        } 
    } 
}

var boton_carta=document.querySelector("#boton_carta");
boton_carta.addEventListener("click", mostrarMenu);

function mostrarMenu(){
let carta= document.querySelector("#carta_cervezas");

if(carta.hidden==true){
   carta.hidden= false;
   boton_carta.innerHTML="Ocultar Menu";
}
else if(carta.hidden==false){
    carta.hidden=true;
    boton_carta.innerHTML="Ver Menu";
}
}

