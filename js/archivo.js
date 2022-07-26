//Simulador log in al sitio web
function saludo(persona){
    alert(`Hola ${persona} Bienvenido a `)
}

function pedirNombre () {
    let nombre = prompt("Ingrese su nombre")
    saluda(nombre)
}


function usuarioContrasena () {
    let usuario = prompt("Ingrese su usuario")
    while (usuario = ""){
    alert( "Usuario incorrecto");
    usuario = prompt("Ingrese  su usuario")
    return usuario
} 

let contrasena = prompt("Ingrese la contraseña")

while (contrasena = "") {
    alert("Contraseña incorrecta")
    contrasena = prompt("Ingrese la contraseña")
}   

alert (`Hola ${usuario}, Bienvenido a Cake Shop`)

saluda(usuario);
}
const saluda=(usuario)=>{
    alert(`Bienvenido ${usuario}`)
    
}


pedirNombre()
usuarioContrasena()