import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addCounter, setCountingDown, setTimerID, deleteCounter, changeQuantity, decrementDown } from './MultiCounterReduxSlice'

export default function MultiCounterRedux() {
    const dispatch = useDispatch()
    const [counterNumber, setCounterNumber] = React.useState(1);
    const arrCounter = useSelector((state) => state.multicounter)
    const handelAddCounter = () => {
        dispatch(addCounter(counterNumber))
        setCounterNumber(counterNumber + 1)

    }


    const handleChangeQuantity = (event, Id) => {
        event.preventDefault();
        var val = arrCounter.find(x => x.counterID === Id);

        let payload = event.target.validity.valid ? {
            counterID: Id,
            quantity:  parseInt(event.target.value.length > 0 ? event.target.value: 0),
        } : {
            counterID: Id,
            quantity: val.quantity
        };
        dispatch(changeQuantity(payload));
    }
    const startCountDown = (Id) => {
        if (Id >= 0) {
            dispatch(setCountingDown({
                counterID: Id,
                isCountingDown: true
            }))
            var timer = setInterval(() => {
                dispatch(decrementDown(Id))
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
        {arrCounter.map((item) => 
            (
                <div key={'mtRedux' + item.counterID} >
                    <br />
                    <p>Result: {item.value}</p>
                    <br />
                    <input type='text' pattern='[0-9]*' size='15' value={item.quantity} name='countQuantity'
                        onChange={(e) => handleChangeQuantity(e, item.counterID)}
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
            )
        )}

    </div>
)
}
