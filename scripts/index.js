let age = ()=>{
    let question = prompt("Скільки вам років ?")
    

    if (question > 0 && question <= 12){
        alert('Ви є дитиною')
        return question
    }else if(question > 12 && question <= 18){
        alert('Ви є підлітком')
        return question
    }else if(question > 18 && question < 60){
        alert('Ви є дорослим')
        return question
    }else if(question <= 0){
        alert("Введіть свій справжній вік")
        return question
    }else{
        alert('Ви є пенсіонером')
        return question
    }
}

let shiftNumber = ()=>{
    let question = prompt("Введіть число")
    let a = 7

    switch(question){
        case '1':
            alert('!')
            break
        case '2':
            alert('@')
            break
        case '3':
            alert('#')
            break
        case '4':
            alert('$')
            break
        case '5':
            alert('%')
            break
        case '6':
            alert('^')
            break
        case '7':
            alert("&")
            break
        case '8':
            alert("*")
            break
        case '9':
            alert("(")
            break
        default:
            alert('Введіть від 1 до 9')
            break
    }
}

let checkNumber = ()=>{
    let question = prompt("Введіть тризначне число")

    let counter = 0
    let quantity = 0
    for (i=0; i<3; i++) 
    {   
        if (counter != 2){
        counter++
        }else{
            counter = 0
        }
        console.log(i, counter)
        if (question[i] == question[counter]){
            quantity++
        }
    }
    if (quantity == 1){
        quantity++
    }

    alert(`Кількість повторених чисел: ${quantity}`)
    return quantity
}

let checkYear = ()=>{
    let question = prompt('Введіть рік')

    let check = parseInt(question)
    if(isNaN(check) || question <= 0){
        alert('Введіть нормальний рік')
        checkYear()
    }

    if (question % 400 == 0){
        alert('Рік є високосним')
        return true
    }else if(question % 4 == 0 && question % 100 != 0){
        alert('Рік є високосним')
        return true
    }else{
        alert('Рік не є високосним')
        return false
    }
}

let palindrom = ()=>{
    let question = prompt('Введіть п’ятирозрядне число: ')

    if (question == question.split('').reverse().join('')){
        alert('Число є паліндромом')
        return true
    }else{
        alert('Число не є паліндромом')
        return false
    }
}

let moneyexchange = ()=>{
    let money = prompt('Введіть кількість USD: ')
    let check = parseInt(money)

    if(isNaN(check)){
        alert('Введіть цифри, а не літери')
        return 0
    }else if(money <= 0){
        alert('Введіть суму більше від 0')
        moneyexchange()
    }


     let exchangeValue = prompt('Виберіть валюту (EUR, UAH, AZN): ')

     exchangeValue = exchangeValue.toLowerCase()

     if (exchangeValue == "eur"){
        const EUR_rate = 0.9161
        let sum = money*EUR_rate

        alert(`${sum} EUR`)
        return sum
     }else if(exchangeValue == "uah"){
        const UAH_rate = 37.65
        let sum = money*UAH_rate

        alert(`${sum} UAH`)
        return sum
     }else if(exchangeValue == "azn"){
        const AZN_rate = 1.6343
        let sum = money*AZN_rate

        alert(`${sum} AZN`)
        return sum
     }else{
        alert('Ви неправильно ввели')
        moneyexchange()
     }
}

let discount = ()=>{
    let money = prompt('Введіть суму оплати: 💵ДОСТУПНА ЗНИЖКА💵')
    let check = parseInt(money)

    if(isNaN(check)){
        alert('Введіть цифри, а не літери')
        return 0
    }else if(money <= 0){
        alert('Введіть суму більше від 0')
        discount()
    }

    if(money > 200 && money <= 300){
        alert('Вам доступна знижка 3% 🤑')
        return 3
    }else if (money > 300 && money <= 500){
        alert('Вам доступна знижка 5% 🤑🤑')
        return 5
    }else if(money > 500){
        alert('Вам доступна знижка 7% 🤑🤑🤑')
        return 7
    }else{
        alert('Вам недоступна знижка 😭')
        return 0
    }
}

let cirlceInSquare = ()=>{
    let circleLength = prompt('Введіть довжину кола: ')
    let squareP = prompt("Введіть периметр квадрата: ")
    let check = parseInt(circleLength)
    let squareCheck = parseInt(squareP)

    if(isNaN(check) || isNaN(squareCheck)){
        alert('Введіть цифри, а не літери')
        return 0
    }else if(circleLength <= 0 || squareP <=0){
        alert('Введіть суму більше від 0')
        cirlceInSquare()
    }

    let circleD = 2*circleLength
    let squareLength = squareP/4

    if(circleD <= squareLength){
        alert('Це коло можна помістити в квадрат')
        return true
    }else{
        alert('Це коло неможна помістити в квадрат')
        return false
    }

}

let questions = ()=>{
    let score = 0

    let questionOne = prompt("Питання 1 🥶(відповідь 2 правильна) \n 1. відповідь 1 \n 2. відповідь 2 \n 3. відповідь 3")
    let oneAnswers = ['відповідь 1', 'відповідь 2', 'відповідь 3']

    if(questionOne == oneAnswers[1]){
        score += 2
    }

    let questionTwo = prompt("Ви поставите мені хорошу оцінку ? 😏(відповідь 3 правильна) \n 1. ні \n 2. ні \n 3. так")
    let twoAnswers = ['ні', 'ні', 'так']

    if(questionTwo == twoAnswers[2]){
        score += 2
    }else{
        score = -999999
    }

    let questionThree = prompt("Як мене звати ?  \n 1. Кирило \n 2. Андрій \n 3. Сергій")
    let threeAnswers = ['Кирило', 'Андрій', 'Сергій']

    if(questionThree == threeAnswers[0]){
        score += 2
    }

    alert(`Ваші бали: ${score}`)
}