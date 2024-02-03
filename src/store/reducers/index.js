// import { DECREASE_MINUTES, DECREASE_SECONDS, LONG_BREAK, SHORT_BREAK, START, WORK } from "../actions"

// const initialState = {
//     minutes: 25,
//     seconds: 0,
//     isPlaying: false
// }

// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case START:
//             return { ...state, isPlaying: !state.isPlaying, minutes: state.minutes - 1}
            
//         case WORK:
//             return { ...state, minutes: state.minutes = 25 }
//         case DECREASE_SECONDS: 
//         return{
//             ...state, seconds:state.seconds <= 0 ? (state.seconds = 59): state.seconds - 1
//         }
//         case DECREASE_MINUTES:
//             return{
//                 ...state,minutes:(state.minutes )
//             }  
//         case SHORT_BREAK:
//             return { ...state, minutes: state.minutes = 5 }
//         case LONG_BREAK:
//             return { ...state, minutes: state.minutes = 15 }
//         default:
//             return state;
//     }
// }


import {DECREASE_MINUTES,DECREASE_SECONDS,LONG_BREAK,SHORT_BREAK,START,WORK,RESET} from "../actions";
  
  const initialState = {
    minutes: 25,
    seconds: 0,
    isPlaying: false,
    
  };
 
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case START:
        if (state.isPlaying) {
          return { ...state, isPlaying: false };
        } else {
          if (state.seconds === 0) {
            return {
              ...state,
              isPlaying: true,
              // minutes: state.minutes - 1,
              seconds: 59,
              minutes: state.minutes <=0 ? (state.isPlaying = 0) : state.minutes -1
            };
          } else {
            return { ...state, isPlaying: true };
          }
        }
        case SHORT_BREAK:
          return { ...state, minutes: state.minutes = 5, seconds: state.seconds = 0, isPlaying: state.isPlaying= false }
      case LONG_BREAK:
          return { ...state, minutes: state.minutes = 15, seconds: state.seconds = 0, isPlaying: state.isPlaying= false }
        case WORK:
            return { ...state, minutes: state.minutes = 25, seconds: state.seconds = 0,isPlaying: state.isPlaying = false }
      case DECREASE_SECONDS:
        return {
          ...state,
          seconds: state.seconds <= 0 ? 59 : state.seconds - 1,
        };
      case DECREASE_MINUTES:
        return {
          // ...state,
          // minutes: state.minutes > 0 ? state.minutes - 1 : 0,
          ...state,
          minutes: state.minutes <= 0 ? 0 : state.minutes - 1,
          isPlaying: state.minutes <= 0 ? false : state.isPlaying,
          seconds: 0
        };
        case RESET:
            return initialState;
            default:
              return state
         }        
    }

  
   