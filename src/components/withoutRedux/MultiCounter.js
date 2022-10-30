import * as React from 'react';
import SingleCounter from './SingleCounter';

function MultiCounter() {

    const [arrCounter, setArrCounter] = React.useState([{
          
       //value:  <SingleCounter key={0} id={0}  deleteCounter= {() => deleteCounter(0)} />
    }   
    ]);
    const [counterNumber, setCounterNumber] = React.useState(1);
    
    const addCounter = () => {
        setArrCounter([
            ...arrCounter, {
                id: counterNumber + 1,
               // value: <SingleCounter key={counterNumber + 1} id={counterNumber + 1}  deleteCounter= {() => deleteCounter(counterNumber + 1)} />
            }
        ])

        setCounterNumber(counterNumber + 1) 
        
    }
    
    const deleteCounter = (id) =>{
        var newArray = arrCounter.filter(val => val.id !== id);
        setArrCounter(newArray);
    }
//Props/ State 
//Funtonal/ class


    return (

        <div>
            <button onClick={() => addCounter()}> Add Counter</button>
            {arrCounter.map((item, index) => (
               <SingleCounter key={'mt' + item.id} id={item.id}  deleteCounter= {() => deleteCounter(item.id)} showDelete={arrCounter.length>1} />  
            ))}
            
        </div>
    )

}
export default MultiCounter; // 