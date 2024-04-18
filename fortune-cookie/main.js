const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')

const buttonOpenFortuneCookie = document.querySelector('.btn-open-fortune-cookie')
const buttonFortuneCookie = document.querySelector('.btn-fortune-cookie')

const messageOfFortuneCookies = document.querySelector('.message')

let randomIndex = Math.floor(Math.random() * 10) // 0 a 9
const fortuneCookiesTexts = [
  "Grandes oportunidades esperam por você ao virar da esquina. Esteja preparado para agarrá-las!",
  "Seja gentil consigo mesmo hoje. Lembre-se: o autocuidado é uma prioridade, não um luxo.",
  "Acredite no poder dos seus sonhos. Eles são os mapas do seu futuro.",
  "Não tema os desafios que estão por vir. Cada obstáculo é uma oportunidade de crescimento.",
  "Sorria para o mundo, e ele sorrirá de volta para você. A positividade é contagiosa!",
  "Seja corajoso o suficiente para seguir seu coração. O caminho para a felicidade começa dentro de você.",
  "O sucesso não é medido pelo destino, mas sim pela jornada. Aproveite cada passo do caminho.",
  "A gratidão transforma o comum em extraordinário. Encontre beleza nas pequenas coisas da vida.",
  "Lembre-se: é nas tempestades que as águias voam mais alto. Seja resiliente diante das adversidades.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
]

buttonFortuneCookie.addEventListener('click', handleDiscoverFortune)
buttonOpenFortuneCookie.addEventListener('click', handleOpenOtherFortuneCookie)
document.addEventListener('keydown', function(event){
  if(event.key === "Enter" && screen1.classList.contains('hidden')){
    handleOpenOtherFortuneCookie()
  }
})


function handleDiscoverFortune(){
  toogleScreens()
  messageOfFortuneCookies.innerText = fortuneCookiesTexts[randomIndex]
}

function handleOpenOtherFortuneCookie(){
  toogleScreens()
  randomIndex = Math.floor(Math.random() * 10) // 0 a 9
}

function toogleScreens(){
  screen1.classList.toggle('hidden')
  screen2.classList.toggle('hidden')
}

