
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
const OPEN_BTNS = document.querySelectorAll('.title')


OPEN_BTNS.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const DESC = btn.parentNode.querySelector('.desc')

        console.log(btn.classList[0])
    })
})