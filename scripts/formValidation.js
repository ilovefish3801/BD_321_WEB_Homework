const NameValidation = (element)=>{
    const VALUE = element.value
    
    if (VALUE.length >= 3){
        return VALUE
    }else{
        return null
    }
  }  

const clearData = (elements)=>{
    elements.map((el)=>{
        el.value = null
    })
}

const sendDataToTelegram = (data)=>{
    fetch(`https://api.telegram.org/bot6760843429:AAFhFl-reEv7BSIPG9jVJ1wTzJ1JrXhG_x8/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: '6148293963',
      text: `Name: ${data.name} \nEmail: ${data.email} \n Message: ${data.message}`,
        
})
})
}

  document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem('Data')){
        const MAIN = document.querySelector('main')
        const TEXT = document.querySelector('.formText')
        const FOOTER = document.querySelector('footer')

        MAIN.style.display = 'none'
        TEXT.style.display = 'flex'
        

        FOOTER.classList.add('formFilled')

    }

    const FORM = document.querySelector('#mainContainer__form')

    const NAME_INPUT = document.querySelector('#mainContainer__form_inputName')
    const EMAIL_INPUT = document.querySelector('#mainContainer__form_inputEmail')
    const TEXT_AREA = document.querySelector('#mainContainer__form_textArea')


    FORM.addEventListener('submit', (e)=>{
        e.preventDefault()

        let name = NameValidation(NAME_INPUT)
        let email = EMAIL_INPUT.value
        let message = TEXT_AREA.value

        if (name == null){
            alert('Name is too short')
        }else{
            const USER_DATA = {name, email, message}
            
            localStorage.setItem('Data', JSON.stringify(USER_DATA))

            clearData([NAME_INPUT, EMAIL_INPUT, TEXT_AREA])

            sendDataToTelegram(USER_DATA)
        }

    })
})
 