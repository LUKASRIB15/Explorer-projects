import { soundOfCoffeeShop, soundOfFirePlace, soundOfForest, sounfOfRain } from "./audios.js"
import * as elements from "./elements.js"
import states from "./state.js"

elements.forest.addEventListener('click', (event)=>{
  resetSound()
  
  typeSound("forest")

  soundOfForest.play()
  soundOfForest.loop = true


})

elements.rain.addEventListener('click', (event)=>{
  resetSound()
  
  typeSound("rain")

  sounfOfRain.play()
  sounfOfRain.loop = true


})

elements.coffeeShop.addEventListener('click', (event)=>{
  resetSound()
  
  typeSound("coffee-shop")

  soundOfCoffeeShop.play()
  soundOfCoffeeShop.loop = true


})

elements.firePlace.addEventListener('click', (event)=>{
  resetSound()
  
  typeSound("fire-place")

  soundOfFirePlace.play()
  soundOfFirePlace.loop = true


})

function typeSound(type){
  switch(type){
    case "forest":
      elements.forest.classList.add('button-active')
      break
    case "rain":
      elements.rain.classList.add('button-active')
      break
    case "coffee-shop":
      elements.coffeeShop.classList.add('button-active')
      break
    case "fire-place":
      elements.firePlace.classList.add('button-active')
      break
  }

  if(type === "forest"){
    elements.forest.classList.add('button-active')
  }

}

function resetSound(){
  states.isForest = false
  states.isCoffeeShop = false
  states.isFirePlace = false
  states.isRain = false

  elements.forest.classList.remove('button-active')
  elements.rain.classList.remove('button-active')
  elements.coffeeShop.classList.remove('button-active')
  elements.firePlace.classList.remove('button-active')

  soundOfForest.pause()
  sounfOfRain.pause()
  soundOfCoffeeShop.pause()
  soundOfFirePlace.pause()
}