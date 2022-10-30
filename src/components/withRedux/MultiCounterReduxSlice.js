import { createSlice } from '@reduxjs/toolkit'

export const multiCounterSlice = createSlice({
  name: 'multicounter',
  initialState: [{
    counterID: 0,
    value: 0,
    isCountingDown: false,
    timerID: 0,
  }],
  reducers: {
    increment: (state, action) => {
      var counter = state.find(x => x.counterID === action.payload);
      if (counter) {
        counter.value += 1
      }

    },

    decrement: (state, action) => {

      var counter = state.find(x => x.counterID === action.payload)
      if (counter && counter.value > 0) {
        counter.value -= 1
      }
    },
    addCounter: (state, action) => {
      state.push({
        counterID: action.payload,
        value: 0,
        isCountingDown: false,
        timerID: 0,
      }
      )
    },

    changeCount: (state, action) => {
      var val = state.find(x => x.counterID === action.payload.counterID);
      if (val) {
        val.value = action.payload.value;
      }
    },
    setCountingDown:(state, action) => {
      var val = state.find(x => x.counterID === action.payload.counterID)
      if(val){
        val.isCountingDown = action.payload.isCountingDown;
      }
    },
    setTimerID: (state, action) =>{
      var val = state.find(x => x.counterID === action.payload.counterID)
      if(val){
        val.timerID = action.payload.timerID;
      }
    },
    deleteCounter: (state, action) => {
      var item =  state.find(x=> x.counterID === action.payload)
      if(item){
        state.splice(state.indexOf(item), 1);
      }
    }
  },
})
export const { increment, decrement, addCounter, changeCount,setCountingDown, setTimerID, deleteCounter} = multiCounterSlice.actions

export default multiCounterSlice.reducer