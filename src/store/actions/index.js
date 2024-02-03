export const START= "START";
export const WORK = "WORK";
export const SHORT_BREAK = "SHORT_BREAK";
export const LONG_BREAK = "LONG_BREAK";
export const RESET = "RESET"
export const DECREASE_SECONDS = "DECREASE_SECONDS"
export const DECREASE_MINUTES = "DECREASE_MINUTES"

export const start = () =>({
    type:START,
})
export const work = () =>({
    type: WORK,
})
export const shortBreak = () =>({
    type: SHORT_BREAK
})
export const longBreak = () =>({
    type: LONG_BREAK
})
export const reset = ()=>({
    type: RESET,
})
export const decreaseSeconds = ()=>({
    type:DECREASE_SECONDS
})
export const decreaseMinutes = () =>({
    type:DECREASE_MINUTES
})
