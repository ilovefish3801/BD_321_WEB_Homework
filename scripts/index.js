
document.addEventListener('DOMContentLoaded', ()=>{
    const LF_BTNS = document.querySelector('.jobSect__btns')
    const LF_WORK = document.querySelector('.jobSect__btns_babysitter')
    const LF_BABYSITTER = document.querySelector('.jobSect__btns_work')

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
})