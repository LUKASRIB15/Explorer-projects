const cards = document.querySelectorAll('.card')

const observerCards = new IntersectionObserver((entries)=>{
  console.log(entries)
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      if(entry.boundingClientRect.y > 0){
        entry.target.classList.remove('show')
      }
    }
  })
})

cards.forEach((card)=>observerCards.observe(card))