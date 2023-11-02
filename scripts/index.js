// task 1
// document.addEventListener('DOMContentLoaded', ()=>{
//     const INPUT = document.querySelector('#text_input')


//     INPUT.addEventListener('input', (e)=>{
//         let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
//         if (e.data in array){
//             INPUT.value = INPUT.value.replace(e.data, '')
//         }
//     })
// })


// task 2
// document.addEventListener('DOMContentLoaded', ()=>{
//     const OPEN_BTN = document.querySelector('#openModal')
//     const CLOSE_BTN = document.querySelector('#closeModal')
//     const MODAL = document.querySelector('.modalContainer')

//     OPEN_BTN.addEventListener('click', ()=>{
//         MODAL.style.display = "flex"
//     })

//     CLOSE_BTN.addEventListener('click', ()=>{
//         MODAL.style.display = "none"
//     })
// })


// task 3
// document.addEventListener('DOMContentLoaded', ()=>{
//     const BODY = document.querySelector('body')
//     const BALL = document.querySelector('.ball')
//     const FIELD = document.querySelector('.field')

//     BODY.addEventListener('click', (e)=>{
//         if (e.clientX > FIELD.clientWidth-100){
//             BALL.style.left = e.clientX-200 + "px"
//             BALL.style.top = e.clientY-100 + "px"
//         }else if (e.clientX < (FIELD.clientWidth-100)-(Math.round((FIELD.clientWidth-200) / 100) *100) +20){
//             BALL.style.left = e.clientX + "px"
//             BALL.style.top = e.clientY-100 + "px"
//         }else if (e.clientY > FIELD.clientHeight-100){
//             BALL.style.left = e.clientX-100 + "px"
//             BALL.style.top = e.clientY-200 + "px"
//         }else if (e.clientY < (FIELD.clientHeight-100)-(Math.round((FIELD.clientHeight-200) / 100) *100) +20){
//             console.log("WORKS")
//             BALL.style.left = e.clientX-100 + "px"
//             BALL.style.top = e.clientY + "px"
//         }


//         else{
//             BALL.style.left = e.clientX-100 + "px"
//             BALL.style.top = e.clientY-100 + "px"
//         }
//     })
// })



// task 4
// document.addEventListener('DOMContentLoaded', ()=>{
//     const CHANGE_BTN = document.querySelector('.change')
//     const FIRST = document.querySelector('.red')
//     const SECOND = document.querySelector('.yellow')
//     const THIRD = document.querySelector('.green')

//     let count = 1
//     CHANGE_BTN.addEventListener('click', ()=>{
//         if (count == 1){
//             FIRST.classList.remove('active')
//             SECOND.classList.add('active')
//             count++
//         }else if(count == 2){
//             SECOND.classList.remove('active')
//             THIRD.classList.add('active')
//             count++
//         }else{
//             THIRD.classList.remove('active')
//             FIRST.classList.add('active')
//             count = 1
//         }
//     })
// })




// task 5
// let nowa_book
// let previous_book
// const clickOnBook = (book)=>{
//     const BOOK = document.querySelector(book)
//     previous_book = nowa_book

//     if(previous_book){
//         previous_book.classList.remove('clicked')
//     }

//     nowa_book = BOOK
//     BOOK.classList.add('clicked')
// }