import state from "./state.js"
import * as elements from "./elements.js"
import * as timer from "./timer.js"


export function play(){
  elements.play.classList.add('ph-pause-circle')
  elements.play.classList.remove('ph-play-circle')
  state.isRunning = true

  timer.countdown()
}

export function pause(){
  elements.play.classList.remove('ph-pause-circle')
  elements.play.classList.add('ph-play-circle')
  state.isRunning = false

}
export function stop(){
  pause()
  state.minutes = 0
  state.seconds = 0

  timer.updateTimer()
  state.isRunning = false
}

export function incrementOneMinute(){
  if(state.minutes<60){
    state.minutes++
    timer.updateTimer()
  }
}

export function decrementOneMinute(){
  if(state.minutes>0){
    state.minutes--
    timer.updateTimer()
  }
}