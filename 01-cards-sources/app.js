let slideItems = [...document.querySelectorAll('.slide')]
console.log(slideItems)


slideItems.forEach( elem => {
    elem.onclick = function () {
        for(let i = 0; i < slideItems.length; i++) {
            slideItems[i].classList.remove('active')
        }
        elem.classList.add('active')
    }
})
