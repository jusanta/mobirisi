
let btn, btn1;

window.onload = () => {
  btn = document.getElementById("btn_formulario");
  btn1 = document.getElementById("btn_login")
  btn1.addEventListener("click", autenticacion)
  btn.addEventListener("click", enviar);//Acción de presion de botón
  localStorage.setItem("usuario", "admin@gmail.com");

  localStorage.setItem("clave", "1234");

}



function enviar(event) {

  frm = document.getElementById("formulario");
  if (frm.checkValidity()) {
    let campo1 = document.getElementById("name-form02-6");
    campo1.value = "";
    let campo2 = document.getElementById("email-form02-6");
    campo2.value = "";
    let campo3 = document.getElementById("phone-form02-6");
    campo3.value = "";
    let campo4 = document.getElementById("textarea-form02-6")
    campo4.value = "";
    alert("¡Gracias por registrarte!");
    event.preventDefault();
  }


}



// function registrar(event) {


//   localStorage.setItem("usuario", txt_usuario.value);

//   localStorage.setItem("clave", txt_clave.value);

//   txt_usuario.value = "";

//   txt_clave.value = "";

//   event.preventDefault();

// }



function autenticacion(event) {
  let user = document.getElementById("user");
  let pass = document.getElementById("pass")


  let ls_usuario = localStorage.getItem("usuario");

  let ls_clave = localStorage.getItem("clave");

  console.log(user);

  if (user.value === ls_usuario && pass.value === ls_clave) {

    alert("login exito")

  }

  else {

    alert("Verifica los datos de acceso");

  }

  event.preventDefault();

}