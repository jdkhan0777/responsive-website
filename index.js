
addEventListener('load', ()=>{

    const navBarButton = document.querySelector('nav button')
    const navBar = document.querySelector('ul')

    navBarButton.addEventListener('click' , () => {
        navBar.hidden = true
        if(navBar.style.display == 'none') {
            navBar.style.display = 'block'
        }else {
              navBar.style.display = 'none'
        }
    })
})