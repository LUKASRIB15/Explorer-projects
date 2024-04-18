import * as events from "./events.js"
import * as timer from "./timer.js"
import state from "./state.js"

export function start(minutes, seconds){
  state.minutes = minutes
  state.seconds = seconds

  events.registerControlls()

  timer.updateTimer()
}