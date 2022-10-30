import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addCounter, changeCount, setCountingDown, setTimerID, deleteCounter } from './MultiCounterReduxSlice'

export default function MultiCounterRedux() {
    const dispatch = useDispatch()
    const [counterNumber, setCounterNumber] = React.useState(1);
    const arrCounter = useSelector((state) => state.multicounter)
    const handelAddCounter = () => {
        dispatch(addCounter(counterNumber))
        setCounterNumber(counterNumber + 1)

    }



    const handleChange = (event, Id) => {
        event.preventDefault();

        var val = arrCounter.find(x => x.counterID === Id)
        let payload = event.target.validity.valid ? {
            counterID: Id,
            value: parseInt(event.target.value.length > 0 ? event.target.value: 0) 
        } : {
            counterID: Id,
            value: val.counterValue
        };
        dispatch(changeCount(payload));
    }
    const startCountDown = (Id) => {
        if (Id >= 0) {
            dispatch(setCountingDown({
                counterID: Id,
                isCountingDown: true
            }))
            var timer = setInterval(() => {
                dispatch(decrement(Id))
            }, 1000)
            dispatch(setTimerID({
                timerID: timer,
                counterID: Id
            }))
        }
    }
    React.useEffect(() => {
        arrCounter.forEach(element => {
            if (element.value <= 0 && element.isCountingDown) {
                clearInterval(element.timerID);
                dispatch(setCountingDown({
                    counterID: element.counterID,
                    isCountingDown: false
                }))
            }
        });

    }, [arrCounter])
    const stopCounter = (Id) => {
        if (Id >= 0) {
            dispatch(setCountingDown({
                counterID: Id,
                isCountingDown: false
            }))
            var idClear = arrCounter.find(x => x.counterID === Id)
            if (idClear) {
                clearInterval(idClear.timerID);
                dispatch(setTimerID({
                    counterID: Id,
                    timerID: 0
                }))
            }
        }

    }
    


return (
    <div>
        <button onClick={() => handelAddCounter()}> Add Counter</button>
        {arrCounter.map((item, index) => (
            <div key={'mtRedux' + item.counterID} >
                <br />
                <input type='text' pattern='[0-9]*' size='15' value={item.value} name='countInput'
                    onChange={(e) => handleChange(e, item.counterID)}
                />
                <br />
                <button className='' onClick={() => dispatch(increment(item.counterID))}>+</button> &nbsp;
                <button className='' onClick={() => dispatch(decrement(item.counterID))}>-</button>
                <br />
                <button onClick={() => item.isCountingDown ? stopCounter(item.counterID) : startCountDown(item.counterID)} className=''>
                    {item.isCountingDown ? `Stop` : `Start`}
                </button>
                {arrCounter.length > 1 && (
                  <button  onClick={()=>dispatch(deleteCounter(item.counterID))}> Delete </button>  
                )}
            </div>
        ))}

    </div>
)
}
