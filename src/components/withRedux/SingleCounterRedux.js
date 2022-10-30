import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, changeCount, setCountingDown, setTimerID } from './SingleCounterReduxSlice'

function SingleCounterRedux() {
    const count = useSelector((state) => state.counter.value)
    const timerID = useSelector((state) => state.counter.timerID)
    const isCountingDown = useSelector((state) => state.counter.isCountingDown)
    const dispatch = useDispatch()
   
    
    const handleChangeCount = (event) => {
        event.preventDefault();
        dispatch(changeCount((event.target.validity.valid) ? parseInt(event.target.value.length > 0 ? event.target.value: 0) : count))
    }
   


    const startCountDown = () =>{
        if (count>0){
            dispatch(setCountingDown(true))
            var timer = setInterval( () =>{
                dispatch(decrement())
            }, 1000)
            dispatch(setTimerID(timer))
        }
    }
    const stopCountDown =  () =>{
        clearInterval(timerID);
        dispatch(setCountingDown(false))
    }
    //React life cycle
    React.useEffect(()  => {
        if (count <= 0) {
          dispatch(setCountingDown(false));
          clearInterval(timerID);  
        }
    }, [count])
    return (
        <div>
            <div>
                <br/>
                <input type='text' pattern='[0-9]*' size='15' value={count}  onChange={handleChangeCount} name='countInput' />
                <br/>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}> + </button>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())} > - </button>
                <button onClick={() => isCountingDown? stopCountDown() : startCountDown()} className=''>
                        {isCountingDown ? `Stop` : `Start`}
                </button>
                <br/>
            </div>
        </div>
    )
}
export default SingleCounterRedux;