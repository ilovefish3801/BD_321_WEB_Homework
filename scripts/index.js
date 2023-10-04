const passwordTypeText = (selector, password, hidden)=>{
    const IMG = document.querySelector(hidden)

    const TARGET = document.querySelector(selector)
    const PASSWORD = document.querySelector(password)
    const TARGET_VALUE = PASSWORD.getAttribute('type')
    
    if (TARGET_VALUE == 'password'){
        IMG.style.display = 'block'
        PASSWORD.setAttribute('type', 'text')
        TARGET.style.display = 'none'
    }
}

const passwordTypePass = (selector, password, hidden)=>{
    const IMG = document.querySelector(hidden)

    const TARGET = document.querySelector(selector)
    const PASSWORD = document.querySelector(password)
    const TARGET_VALUE = PASSWORD.getAttribute('type')
    
    if (TARGET_VALUE == 'text'){
        IMG.style.display = 'block'
        PASSWORD.setAttribute('type', 'password')
        TARGET.style.display = 'none'
    }
}

const getUserRole = (element)=>{
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    
    return DATA
}

const getDataFromField = (element)=>{
    const VALUE = element.value
    const TYPE = element.getAttribute('name')

    if(TYPE == 'Surname'){
      if(VALUE.length >= 3){
        return VALUE
      }else{
        alert("Last name is to short")
        return null
      }
    }else if(TYPE == 'Name'){
        if(VALUE.length >= 3){
            return VALUE
          }else{
            alert("Name is to short")
            return null
          }
    }


    return VALUE
}

const passwordValue = (password, confirm)=>{
    const PASSWORD = document.querySelector(password)
    const CONFIRM = document.querySelector(confirm)

    if(PASSWORD.value.length == 0 || CONFIRM.value.length == 0){
        return false
    }else{
        if(PASSWORD.value == CONFIRM.value){
            return true
        }else{
            alert('Паролі не співпадають')
            return false
        }
    }
}

const cleanForm = ()=>{
    const INPUT_NAME = document.querySelector('#form__cid_name')
    const INPUT_SURNAME = document.querySelector('#form__cid_surname')
    const EMAIL = document.querySelector('#form__email')
    const INPUT_PASSWORD = document.querySelector('#form__password')
    const INPUT_PASSWORD_CONFIRM = document.querySelector('#form__passwordConfirm')

    INPUT_NAME.value = null
    INPUT_SURNAME.value = null
    EMAIL.value = null
    INPUT_PASSWORD.value = null
    INPUT_PASSWORD_CONFIRM.value = null
}


document.addEventListener('DOMContentLoaded', ()=>{
    const USER_DATA = JSON.parse(localStorage.getItem('data'))

    const FORM = document.querySelector('#form')
    const SUBMIT_BTN = document.querySelector('#form__submit')

    const LF_BTNS = document.querySelector('.jobSect__btns')
    const LF_WORK = document.querySelector('.jobSect__btns_babysitter')
    const LF_BABYSITTER = document.querySelector('.jobSect__btns_work')

    const INPUT_NAME = document.querySelector('#form__cid_name')
    const INPUT_SURNAME = document.querySelector('#form__cid_surname')
    const EMAIL = document.querySelector('#form__email')
    const CHECKBOX = document.querySelector('#form__checkbox')
    const INPUT_PASSWORD = document.querySelector('#form__password')
    
    if(USER_DATA){
        const {name, surname, email} = USER_DATA
        INPUT_NAME.value = name
        INPUT_SURNAME.value = surname
        EMAIL.value = email
      }
    
    LF_WORK.addEventListener('click', ()=>{
        if (LF_WORK.classList[1] != 'active' || LF_BABYSITTER.classList[1] == 'active'){
            LF_WORK.classList.toggle('active')
            LF_BABYSITTER.classList.toggle('active')
        }
    })

    LF_BABYSITTER.addEventListener('click', ()=>{
        if (LF_BABYSITTER.classList[1] != 'active' || LF_WORK.classList[1] == 'active'){
            LF_BABYSITTER.classList.toggle('active')
            LF_WORK.classList.toggle('active')
        }
    })

    CHECKBOX.addEventListener('click', ()=>{
        const CHECKBOX_VALUE = CHECKBOX.checked
        
        CHECKBOX_VALUE ? SUBMIT_BTN.disabled = !CHECKBOX_VALUE : SUBMIT_BTN.disabled = !CHECKBOX_VALUE
    })

    FORM.addEventListener('submit', (e)=>{
        e.preventDefault()
        const PASSWORD_VALUE = passwordValue('#form__password', '#form__passwordConfirm')
        
        if(PASSWORD_VALUE){
            let role = getUserRole(LF_BTNS)
            let name = getDataFromField(INPUT_NAME)
            let surname = getDataFromField(INPUT_SURNAME)
            let email = getDataFromField(EMAIL)
            let password = getDataFromField(INPUT_PASSWORD)


            const USER_DATA = {
                role, name, surname, email, password
            }

            console.log('Дані виписуються в консоль (та в LS) щоб вам було зручніше')
            console.log( USER_DATA)
            localStorage.setItem('data', JSON.stringify(USER_DATA))
            cleanForm()
        }
    })
})
