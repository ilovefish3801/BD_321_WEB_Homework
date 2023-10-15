
// Task 2
// $('.single-item').slick({
//     inifinte: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: '<img src="../slider_photos/prev_arrow.png" class="slick-arrow slick-prev"></img>',
//     nextArrow: '<img src="../slider_photos/next_arrow.png" class="slick-arrow slick-next"></img>',

// });



// Task3
// let clicked = false
// let clicked_btn

// const showDesc = (btn)=>{
//     const BTN = document.querySelector(btn)
//     const DESC = BTN.parentNode.querySelector('.desc')

//     if(!clicked){
//         clicked = true
//         clicked_btn = BTN
//         DESC.classList.add('active')
//     }else if(clicked && BTN == clicked_btn){
//         clicked = false
//         DESC.classList.remove('active')
//     }
// }



// Task 4

// const CONTAINER = document.querySelector('.news_container')
// let newsToAdd = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel leo eget nisl sollicitudin semper. Sed in sollicitudin nisi. Nullam tortor']

// document.addEventListener('scroll', ()=>{
//     let scroll = window.scrollY + 693
//     let scrollHeight = document.documentElement.scrollHeight

//     if(scroll == scrollHeight){
//         newsToAdd[0] += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel leo eget nisl sollicitudin semper. Sed in sollicitudin nisi. Nullam tortor'
//         CONTAINER.innerHTML += newsToAdd[0]
//     }
// })



// Task 6

// const LINKS = document.querySelectorAll('.a')

// LINKS.forEach((link)=>{
//     const LINK_VALUE = link.text

//     if(LINK_VALUE.includes('http')){
//         link.style.borderBottom = '2px dashed black'
//     }
// })



// Task 7
let nowa_book
let previous_book
const clickOnBook = (book)=>{
    const BOOK = document.querySelector(book)
    previous_book = nowa_book

    if(previous_book){
        previous_book.classList.remove('clicked')
    }

    nowa_book = BOOK
    BOOK.classList.add('clicked')
}

const ctrlOnBook = (book)=>{
    const BOOK = document.querySelector(book)

    BOOK.classList.toggle('checked')
}

let nowa_check
let previous_check
const shiftOnBook = (book)=>{
    const BOOK = document.querySelector(book)
    
    previous_check = nowa_check
    
    nowa_check = BOOK.classList[1]
    
    
    if(previous_check){
        let previousNum = previous_check[previous_check.length - 1]
        let nowaNum = nowa_check[nowa_check.length - 1]
        if(previousNum > nowaNum){
            for (let i = nowaNum; i <= previousNum; i++) {
                let element = document.querySelector(`.book${i}`)
                element.classList.add('checked')
            }
        }else{
            for (let i = previousNum; i <= nowaNum; i++) {
                let element = document.querySelector(`.book${i}`)
                element.classList.add('checked')
            }
        }
    }
}

const BOOKS = document.querySelectorAll('.book')


document.addEventListener('keydown', (e)=>{
     if(e.key == 'Control'){
        BOOKS.forEach((book)=>{
            book.setAttribute('onclick', `ctrlOnBook('.${book.classList[1]}')`)
    })
    }else if(e.key == 'Shift'){
        BOOKS.forEach((book)=>{
            book.setAttribute('onclick', `shiftOnBook('.${book.classList[1]}')`)
    })
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.key == 'Control'){
        BOOKS.forEach((book)=>{
            book.setAttribute('onclick', `clickOnBook('.${book.classList[1]}')`)
    })
    }else if(e.key == 'Shift'){
        BOOKS.forEach((book)=>{
            book.setAttribute('onclick', `clickOnBook('.${book.classList[1]}')`)
    })
    }
})
