import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isCountingDown: false,
    timerID: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 0 )
      state.value -= 1
    },
    changeCount: (state, action) => {
      state.value = action.payload
    },
    setCountingDown:(state, action) => {
      state.isCountingDown = action.payload  
    },
    setTimerID: (state, action) =>{
      state.timerID = action.payload
    }
  },
})
export const { increment, decrement, changeCount, setCountingDown, setTimerID } = counterSlice.actions

export default counterSlice.reducer