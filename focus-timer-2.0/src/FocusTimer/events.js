import * as elements from "./elements.js"
import * as actions from "./actions.js"
import state from "./state.js"

export function registerControlls(){
  elements.play.addEventListener('click', (event)=>{
    if(state.isRunning){
      actions.pause()
    }else{
      actions.play()
    }
  })

  elements.stop.addEventListener('click', (event)=>{
    actions.stop()
  })

  elements.increment.addEventListener('click', (event)=>{
    actions.incrementOneMinute()
  })

  elements.decrement.addEventListener('click', (event)=>{
    actions.decrementOneMinute()
  })

}