const input = document.querySelector('#datos');
const form = document.querySelector('.form')
const ul = document.querySelector('.datos-resividos');



let data = []

function delUser (){
    
    console.log('exe')
    
    // const userInList = e.target.parentElement

    // userInList.remove()
}



const addPlayer = ()=> {
    
    data.forEach(element => {
        const li = document.createElement('li')
        const user = document.createElement('span')

        const delBtn = document.createElement('button')
        delBtn.textContent = 'Remove User'
        delBtn.addEventListener('click', delUser)

        li.classList.add('player')

        user.textContent = '- ' + element.user
        

        li.appendChild(user)
        li.appendChild(delBtn)

        ul.appendChild(li)

    })

    
    
}

const clearData = ()=> {
    data = []
}


const getInputData = (e)=> {

    e.preventDefault()

    let user = e.target.value
    let id = Date.now()

    // data = [...data, {user, id}]

    addPlayer()

    form.reset()


}


input.addEventListener('change', getInputData)

form.addEventListener('submit', (e)=> {
    e.preventDefault()
})


