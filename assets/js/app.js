const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
  // acá  guardo el comentario ingresado por el usuario
  let comments = document.getElementById('comment').value;

  // limpiar el textarea
  document.getElementById('comment'). value = " ";

  //contenedor donde dejare mis comentarios en html
  const cont = document.getElementById('cont');
  
  //crear un div contenedor
const newComments = document.createElement('div');

//nodos de texto del textarea
let textNewComment =  document.createTextNode(comments);// sin comilla porque es variable de js que llamamos

const contenedorElemento =  document.createElement('p')
  contenedorElemento.appendChild(textNewComment);// padre de p, hijo de html
  
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})

//deshabilitar boton twittear si el texto está vacío



// creando función para contador
function contar() {
  const max = "140";
  let cadena = document.getElementById("comment").value;
  let longitud = cadena.length;
 
    if(longitud <= max) {
         document.getElementById("contador").value = max-longitud;
    } else {
         document.getElementById("textArea").value = cadena.substr(0, max);
    }
 
  }
  
