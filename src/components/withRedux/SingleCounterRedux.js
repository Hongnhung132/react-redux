import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setCountingDown, setTimerID, changeQuantity, decrementDown} from './SingleCounterReduxSlice'

function SingleCounterRedux() {
    const count = useSelector((state) => state.counter.value)
    const quantity = useSelector((state) => state.counter.quantity)
    const timerID = useSelector((state) => state.counter.timerID)
    const isCountingDown = useSelector((state) => state.counter.isCountingDown)
    const dispatch = useDispatch()
   

    const handleChangeQuantity = (event) => {
        event.preventDefault();
        dispatch(changeQuantity((event.target.validity.valid) ? parseInt(event.target.value.length > 0 ? event.target.value: 0) : quantity))
    }
   
    const startCountDown = () =>{
        if (count>0){
            dispatch(setCountingDown(true))
            var timer = setInterval( () =>{
                dispatch(decrementDown())
            }, 1000)
            dispatch(setTimerID(timer))
        }
    }
    const stopCountDown =  () =>{
        clearInterval(timerID);
        dispatch(setCountingDown(false))
    }
    React.useEffect(()  => {
        if (count <= 0) {
          dispatch(setCountingDown(false));
          clearInterval(timerID);  
        }
    }, [count])
    return (
        <div id={"content-wrapper"} className={"flex column vertical-align horizontal-align"}>
            <h2>Simple Counter in React With Redux</h2>
            <div  id={"counter-wrapper"}  className={"flex column vertical-align justify-sp-ev"} >
              <div className={"flex column vertical-align"}>
                <p>{count}</p>
              </div>
              <div>
                <h3>Add / substract custom quantity</h3>
                <div className={"flex row vertical-align horizontal-align "}>
                  <input pattern='[0-9]*' type="text" value={quantity} onChange={handleChangeQuantity} className={"mr-10  mb-10"}/>
                  <button className={"mr-5 width-40 "}  onClick={() => dispatch(decrement())} > - </button>
                  <button className={"width-40"} onClick={() => dispatch(increment())}> + </button>
                </div>
              </div>

              <div className={"flex row vertical-align horizontal-align "}>
              <button onClick={() => isCountingDown? stopCountDown() : startCountDown()} id={"counter-start"} className= {"mr-5"}>
                         {isCountingDown ? `Stop Counter` : `Start Counter`}
              </button>
              </div>
            </div>
          </div>
    )
}
export default SingleCounterRedux;