
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
let comprar = document.getElementById ("form")

cantidadcafe.addEventListener("input",calc)
tipocafe.addEventListener ("change",switchC)
comprar.addEventListener ("submit",compracliente)

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

function switchC(){
    let amount  = document.getElementById ("cantidadcafe").value
    let rate = document.getElementById ("tipocafe").value
    
    let compute = amount * rate
    document.getElementById ("totalcompra").value = compute
}

function compracliente (e){
    e.preventdefault();
    let datos = e.target
    console.log(datos.children[6].value)
}

const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)};
guardarLocal("listaCafe",JSON.stringify(carrito));