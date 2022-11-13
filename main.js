 //valor general del ticket
const valorTicket = 200;

//validar si es un mail. 
const emailValido = mail => {
    return /^[^\$@]+@[^\$@]+\.[^\$@]+$/.test(mail);
} 

// porcentajes de descuentos para cada categorías
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");
let mail            = document.getElementById("mail");  

        


 function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i = 0; i< x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}
function resetTotalAPagar(){
  quitarClaseError();
  totalCompra.inmerHTML ="";

}





 btnResumen.addEventListener("click", function(){
 console.log(nombre.value);
 

   
if (nombre.value === ""){
  alert("Por favor, escriba su nombre.");
  nombre.classList.add("is-invalid");
  nombre.focus();
  return;
}


if (apellido.value ===""){
  alert("Por favor, escriba su apellido.");
  apellido.classList.add("is-invalid");
  apellido.focus();
  return;
}

if (!emailValido(mail.value)){
  alert("Por favor, escribe un correo electrónico válido.");
  mail.classList.add("is-invalid");
  mail.focus();
  return;
  
}



 //verificar si esta ingresando al menos un ticket.
if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ){
    alert ("Por favor, ingresá correctamente cantidad de tickets.");
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    return;
     
}
if (categoria.value == "")  {
    alert ("Por favor, ingrese una categoría");
    categoria.classList.add("is-invalid");
    categoria.focus();
    return; 
  }
})




  /*EL RESTO  NO PUDE RESOLVERLO NO ENTIENDO QUE ES LO QUE ME FALTA!!
// Multiplico cantidad de tickets por el valor.*/

/*let totalValorTickets = (cantidadTickets.value) * valorTicket;


 switch (totalValorTickets) {
case "S" :
    totalValorTickets = totalValorTickets 
    return ;
   console.log(totalValorTickets)
    
case "E" :
    totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets) ;
    totalValorTickets= (2*200)-(80/100*2*200)
    console.log(totalValorTickets)
    return;
    
case "T" :
    totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets) ;
    return ;

case "J" :
    totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets) ;
    return;
}
totalCompra . innerHTML = totalValorTickets ;


btnBorrar.addEventListener("click", resetTotalAPagar);*/







 