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
          <div id={"content-wrapper"} className={"flex row vertical-align horizontal-align"}>
            <h1>Multi Counter in React With Redux</h1>
            <button  id={"counter-add"} onClick={() => handelAddCounter()}> Add Counter</button>

            {arrCounter.map((item) => 
            (

            <div  id={"counter-wrapper"}  className={"flex column vertical-align justify-sp-ev"} >
                <h2>Single Counter</h2>
              <div className={"flex column vertical-align"}>
                <p>{item.value}</p>
              </div>
              <div>
                <h3>Add / substract custom quantity</h3>
                <div className={"flex row vertical-align horizontal-align "}>
                  <input pattern='[0-9]*' type="text" value={item.quantity}  onChange={(e) => handleChangeQuantity(e, item.counterID)} className={"mr-10  mb-10"}/>
                  <button className={"mr-5 width-40 "}  onClick={() => dispatch(decrement(item.counterID))} > - </button>
                  <button className={"width-40"}  onClick={() => dispatch(increment(item.counterID))}> + </button>
                </div>
              </div>

              <div className={"flex row vertical-align horizontal-align"}>
              <button onClick={() => item.isCountingDown ? stopCounter(item.counterID) : startCountDown(item.counterID)} id={"counter-start"} className="mr-10">
                         {item.isCountingDown ? `Stop Counter` : `Start Counter`}
              </button>
              {arrCounter.length > 1 && (
                    <button id={"counter-delete"} onClick={()=>dispatch(deleteCounter(item.counterID))}> Delete Counter</button>  
                    )}
              </div>
             

            </div>
            ))}
          </div>

    </div>
)
}
