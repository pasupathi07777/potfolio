let ccc=document.querySelector(".menu-btn")
let ddd=document.querySelector(".menu-box-2")
let eee=document.querySelector(".list-unstyled")

ccc.addEventListener('click',()=>{
    
    ddd.classList.toggle('d-block')


})
eee.addEventListener('click',()=>{
    
    ddd.classList.add('d-block')


})

