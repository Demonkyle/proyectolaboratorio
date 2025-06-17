
function comprararg () {
  window.location.href = 'paginas-remeras/Arg.html';
}

function comprarbr () {
  window.location.href = 'paginas-remeras/br.html';
}

function comprarch () {
  window.location.href = 'paginas-remeras/ch.html';
}

function comprarcol () {
  window.location.href = 'paginas-remeras/col.html';
}

function compraruru () {
  window.location.href = 'paginas-remeras/ur.html';
}

function comprarecu () {
  window.location.href = 'paginas-remeras/ec.html';
}

function comprarper () {
  window.location.href = 'paginas-remeras/per.html';
}

function comprarven () {
  window.location.href = 'paginas-remeras/ven.html';
}

function comprarbol () {
  window.location.href = 'paginas-remeras/bol.html';
}

function comprarpar () {
  window.location.href = 'paginas-remeras/par.html';
}




function realizarcompra(){
    window.location.href = "./form.html";
    
}

function validar(){

  let usuario=document.getElementById("usuario").value;
  let contraseña=document.getElementById("contraseña").value;

  if (usuario=="proyecto" && contraseña=="1234") {

    alert("Compra realizada");
    
  }else{
    alert ("Intente de nuevo");

  }
}