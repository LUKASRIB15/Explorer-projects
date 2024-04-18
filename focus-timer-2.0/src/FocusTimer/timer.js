import state from "./state.js"
import * as elements from "./elements.js"
import * as actions from "./actions.js"

export function countdown(){
  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds-- 

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    actions.pause()
    return
  }

  state.minutes = minutes
  state.seconds = seconds

  updateTimer()

  state.countdownId = setTimeout(()=>countdown(),1000)
}

export function updateTimer(){
  elements.minutes.textContent = state.minutes.toString().padStart(2, '0')
  elements.seconds.textContent = state.seconds.toString().padStart(2, '0')
}