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

let citySpeed = ()=>{
    let distance = prompt("Введіть відстань між двома містами (У км): ")
    let time = prompt("Введіть час за який ви хочете дістатися другого міста: ")

    let speed = distance / time
    if(distance <= 0 || time <= 0){
        alert("Число повинне бути більше від 0 і не дорівнювати 0")
        citySpeed()
    }else if (isNaN(speed)){
        alert("Ви повинні ввести число, а не цифру")
        citySpeed()
    }else{
        alert(`${speed}км/год`)
    }
    
}

let converter = ()=>{
    let dollar = prompt("Введіть суму доларів: ")

    const RATE = 0.9128

    let sum = dollar * RATE

    if(dollar <= 0){
        alert("Число повинне бути більше від 0 і не дорівнювати 0")
        converter()
    }else if (isNaN(sum)){
        alert("Ви повинні ввести число, а не цифру")
        converter()
    }else{
        alert(`${sum.toFixed(2)} Євро`)

        return sum
    }
}

let usbdrive = ()=>{
    let size = prompt("Введіть обсяг флешки (у ГБ): ")

    let count = size / 0.82

    if(size <= 0){
        alert("Число повинне бути більше від 0 і не дорівнювати 0")
        usbdrive()
    }else if (isNaN(count)){
        alert("Ви повинні ввести число, а не цифру")
        usbdrive()
    }else{
        alert(`${Math.round(count)} файлів`)

        return count
    }
}

let chocolate = ()=>{
    let money = prompt("Введіть суму грощей: ")
    let cost = prompt("Введіть ціну однієї шоколадки: ")

    let count =  money / cost
    let remainder = money - (cost * Math.round(count))

    if(money <= 0 || cost <= 0){
        alert("Число повинне бути більше від 0 і не дорівнювати 0")
        chocolate()
    }else if (isNaN(count) || isNaN(remainder)){
        alert("Ви повинні ввести число, а не цифру")
        chocolate()
    }else if (remainder == 0){
        alert(`Ви зможете купити ${Math.round(count)} шоколадок без здачі`)
        return count, remainder
    }else{
        alert(`Ви зможете купити ${Math.round(count)} шоколадок і здача ${remainder}`)

        return count, remainder
    }
}
    
let oddeven = ()=>{
    let number = prompt("Введіть ціле число: ")

    let even = number % 2 == 0

    let result = even ? "Парне" : "Непарне"

    alert(result)
}

oddeven()