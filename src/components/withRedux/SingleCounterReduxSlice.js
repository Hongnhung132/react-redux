import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isCountingDown: false,
    quantity: 0,
    timerID: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += state.quantity
    },
    decrement: (state) => {
      if((state.value -  state.quantity) > 0)
        state.value -= state.quantity
      else
      {
        state.value = 0
      }
    },
    decrementDown: (state) => {
      if(state.value >  0 )
      state.value -= 1
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload
    },
    setCountingDown:(state, action) => {
      state.isCountingDown = action.payload  
    },
    setTimerID: (state, action) =>{
      state.timerID = action.payload
    }
  },
})
export const { increment, decrement, decrementDown, setCountingDown, setTimerID, changeQuantity } = counterSlice.actions

export default counterSlice.reducer