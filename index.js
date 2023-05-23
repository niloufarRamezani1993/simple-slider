const btnsControler = document.querySelectorAll('.btn')
const con = document.querySelector('.con')
const allcon = document.querySelector('.allcon')
const next =document.querySelector('.next-btn')
const previous =document.querySelector('.prev-btn')
const dots =document.querySelector('.dot')
const images =document.querySelectorAll('img')

let i = 1
const imgLoop = con.children.length
const nextBtnFn=(e)=>{
    i ++
    if(i <= imgLoop ){
        con.innerHTML= `<div class="images image--${i}"><img  src="./assets/${i}.jpg" alt="fida" /></div>`
    
    }else return
  
    
}
const prevBtnFn = (e)=>{
    if(i === 1 ){
        return
      
       }else {
           i--
           con.innerHTML= `<div class="images image--${i}"><img  src="./assets/${i}.jpg" alt="fida" /></div>`
           
       }
    }
    next.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight')
         nextBtnFn()
       })
    previous.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowLeft')
         prevBtnFn()
       })


btnsControler.forEach(btn=>{
    btn.addEventListener('click' ,(e)=>{
       
       if(e.target.classList.contains('next-btn')){
        nextBtnFn()
       
       
    }
     if(e.target.classList.contains('prev-btn')){
         prevBtnFn()
    }
       
    })
})



const currentSlide = 0
dots.addEventListener('click' , (e)=>{

    const dotBtn = e.closest("dot")
    console.log(dotBtn);
    
})