let userName = ()=>{
    let question = prompt("Введіть ваше ім'я: ")
    
    if (question == null){
        alert("Ви повинні ввести своє ім'я")
        userName()
    }else{
        alert(`Привіт, ${question}!`)
        return question
    }
}
let userAge = ()=>{
    const YEAR = 2023
    let question = prompt("В якому році ви народились: ")

    if (question == null){
        userAge()
    }else if(question > YEAR || question < 0){
        alert("Введіть свою справжню дату народження")
        userAge()
    }else{
        
        let age = YEAR - question

        if (isNaN(age)){
            alert("Введіть рік вашого народження, а не число")
            userAge()
        }else{
            alert(`Вам ${age}`)
            return age
        }
    }
}

let square = ()=>{
    let question = prompt("Введіть довжину сторони крадрата: ")

    if (question < 0){
        alert("Введіть додатню довжину")
        square()
    }else{
        let S = question*question

        if (isNaN(S)){
            alert("Введіть цифру, а не число")
            square()
        }else{
            alert(`Площа квадрата ${S}`)
            return S
        }
    }
}

let circle = ()=>{
    let question = prompt("Введіть довжину радіуса кола: ")

    if (question < 0){
        alert("Введіть додатню довжину")
        square()
    }else{
        const P = 3.14
        let S = P*(question * question)

        if (isNaN(S)){
            alert("Введіть цифру, а не число")
            square()
        }else{
            alert(`Площа кола ${S}`)
            return S
        }
    }
}

let citySpeed = ()=>(
    distance = prompt("Введіть відстань між двома містами: ")
    time = prompt("Введіть час за який ви хочете дістатися другого міста: ")
    
)