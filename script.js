// Tomar los elementos en el DOM donde se renderizan los datos
const input = document.querySelector('#datos');
const form = document.querySelector('.form')
const ul = document.querySelector('.datos-resividos');



let data = ""
let users = []

/**
 * Crea un elemento li por cada usuario nuevo y crea un boton 
 * para eliminar el usuario de la lista  
 */
const addPlayer = ()=> {
    // Crea los elementos li y span
    const li = document.createElement('li')
    const user = document.createElement("span")

    // agregar clase player al li
    li.classList.add('player')

    user.textContent = '* ' + data
    
    // agrega los elementos nuevos al ul
    li.appendChild(user)
    ul.appendChild(li)

    // Del BTN

    const delBtn = document.createElement("span");
    delBtn.textContent = "Eliminar"
    li.appendChild(delBtn)

    // remueve el li del usuario que se pretende eliminar
    delBtn.onclick = () => {
        li.remove();
    }
    
}

/**
 * Se encarga de guardar los datos del usuario en el array users
 * llama a la funcion addPlayer que muestra en el UL en pantalla
 */
const getInputData = (e)=> {
    
    data = e.target.value

    // * La funcion que muestra a los usuarios registrados 
    // * en la UL
    addPlayer()

    // ! Captura los datos de los usuarios registrados
    // ! No es necesario por ahora
    users = [...users, {user: e.target.value, id: Date.now() }]

    // * Limpia el input una ves que se ingresa un usuario
    form.reset()

}


// * Se mantiene a la escucha de los cambios en el input y llama
// * a la funcion getInputData
input.addEventListener('change', getInputData)


// * Evita que la pagina se recargue cuando se envian los datos del formulario
form.addEventListener('submit', (e)=> {
    e.preventDefault()
})


