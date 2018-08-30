let modal = document.querySelector('.modal')
let modalXButton = document.querySelector('#modalClose')
let modalSubscribeButton = document.querySelector('#modalSubscribe')

let slideIn = () => {
    if (document.cookie === "type=Don't Show Modal") {
        console.log('Pop up is not showing due to cookie')
    } else {
        setTimeout(() => {
            modal.classList.add('slideIn')
        }, 3000)  
    }
}

let addEventListeners = () => {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate();
    let threeDays = new Date(year, month, day + 3)
    let oneYear = new Date(year + 1, month, day)
    
    modalXButton.addEventListener('click', function(){
        document.cookie = `type = Don't Show Modal; expires = ${threeDays}`;
    })
    modalSubscribeButton.addEventListener('click', function(){
        document.cookie = `type = Don't Show Modal; expires = ${oneYear}`;
    })
}

let executeLoadFuntions = () => {
    addEventListeners()
    slideIn()
}

modal.onload = executeLoadFuntions()