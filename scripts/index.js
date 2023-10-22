const BURGER_BTN = document.querySelector(".headerContainer__headerMenu_headerNav_burger")
BURGER_BTN.addEventListener("click", ()=>{
    BURGER_BTN.classList.toggle('active')
    
    // const MOB_MENU = document.querySelector(".mobile_menu")
    // MOB_MENU.classList.toggle('active')

    const BODY = document.querySelector(".body")
    BODY.classList.toggle('fixed')
})


const SCROLL_BTN = document.querySelector('.headerContainer__scrollDown_btn_img')
const FOOTER = document.querySelector('footer')

SCROLL_BTN.addEventListener('click', ()=>{
    FOOTER.scrollIntoView({behavior: 'smooth'})
})