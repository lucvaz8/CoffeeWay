/*
class Menu {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const prod1 = new Menu ("Espresso",360)
const prod2 = new Menu ("Americano", 380)
const prod3 = new Menu ("Cold Brew", 300)
const prod4 = new Menu ("Capuccino",400)
const prod5 = new Menu ("Lungo", 440)

const carrito = []

carrito.push (prod1, prod2, prod3, prod4, prod5)

let cantidadcafe = document.getElementById("cantidadcafe")
let tipocafe = document.getElementById("tipocafe")
/*let comprar = document.getElementById ("form")*/
/*
cantidadcafe.addEventListener("input",calc)
tipocafe.addEventListener ("change",switchC)
/*comprar.addEventListener ("submit",compracliente)*/

function calc(){
    let amount  = document.getElementById ("cantidadcafe").value
    let rate = document.getElementById ("tipocafe").value
    if(rate ==="select"){
        document.getElementById("totalcompra").setAttribute("placeholder","Por favor elegi tu cafe")
    }else{
    let compute = amount * rate
    document.getElementById ("totalcompra").value = compute  
    }
}
/*
function switchC(){
    let amount  = document.getElementById ("cantidadcafe").value
    let rate = document.getElementById ("tipocafe").value
    
    let compute = amount * rate
    document.getElementById ("totalcompra").value = compute
}

/*
function compracliente (e){
    e.preventdefault();
    let datos = e.target
    console.log(datos.children[6].value)
}
*/
/*
//Aplicacion de LocalStorage y JSON
const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)};
guardarLocal("listaCafe",JSON.stringify(carrito));

//Aplicando Libreria - Toastify

const btn = document.getElementById("agregarcarrito")
btn.addEventListener ("click", notificacion)

function notificacion(){
    Toastify({
        text: "Agregado al carrito",
        duration: 2500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4d2b1e, #9b8f8f)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

*/
//Aplicando Libreria - Sweet Alert
/*
const comprar = document.getElementById("comprar")
comprar.addEventListener ("click", notificacioncomprar)

function notificacioncomprar(){
    swal("Ingresa tu nombre para registrar el pedido:", {
        content: "input",
      })
      .then((value) => {
        swal(`Tu pedido se ha registrado a nombre de: ${value}.`);
      });
}

//utilizando fetch en el proyecto metodo get
*/
const lista = document.getElementById ("lista")

fetch ('https://api.sampleapis.com/coffee/hot')
    .then((res) =>res.json())
    .then ((data)=>data.forEach ((info)=>{
        const li = document.createElement("li")
        li.innerHTML = `
        <h2>Coffee Type: ${info.title}</h2>
        <p>Despcription: ${info.description}</p>
        <p>Ingredients: ${info.ingredients}</p>
        `
        lista.append(li)
    }))