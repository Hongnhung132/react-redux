import * as React from 'react';
import SingleCounter from './SingleCounter';

function MultiCounter() {

    const [arrCounter, setArrCounter] = React.useState([{ id: 0 }]);
    const [counterNumber, setCounterNumber] = React.useState(1);
    
    const addCounter = () => {
        setArrCounter([
            ...arrCounter, {
                id: counterNumber + 1,
                
            }
        ])
        setCounterNumber(counterNumber + 1) 
        
    }
    
    const deleteCounter = (id) =>{
        var newArray = arrCounter.filter(val => val.id !== id);
        setArrCounter(newArray);
    }
    return (
        <div>
            <button onClick={() => addCounter()}> Add Counter</button>
            {arrCounter.map((item) => (
               <SingleCounter key={'mt' + item.id} id={item.id}  deleteCounter={() => deleteCounter(item.id)} showDelete={arrCounter.length>1} />  
            ))}
            
        </div>
    )
}
export default MultiCounter;