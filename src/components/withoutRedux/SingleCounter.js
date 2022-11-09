import React, { Component } from 'react';
class SingleCounter extends Component {
    constructor(props){
        super(props);  
        this.state = {
            count: 0,
            quantity: 0,
            isActivate: false
        }
    }

   
    handleChangeQuantity = (event) => {
        event.preventDefault();
        this.setState({
            quantity: (event.target.validity.valid) ? parseInt(event.target.value.length > 0 ? event.target.value: 0)  : this.state.quantity
        })
    }
    handleIncrease = () => {
        this.setState({
            count: this.state.count + this.state.quantity
        });
    }
    handleDecrease = () => {
        if (this.state.count > 0){
            this.setState({
                // TestCase: Nếu - đi nhỏ hơn 0 thì sao\
                // Thay vì 
                //count: this.state.count - this.state.quantity  khi mà giá trị count trừ đi < 0 gán nó = 0 luôn
                // Thì check điều kiện
                count: this.state.count - this.state.quantity > 0 ?  this.state.count - this.state.quantity : 0
            });
        }
    }
    startTimer(){
        this.timerID = setInterval(()=>{
            this.setState({
                isActivate: true
            })
            if (this.state.count >0){
                this.setState({
                    count: this.state.count-1
                })
            }
            else
            {
                clearInterval(this.timerID);
                this.setState({
                    isActivate: false
                })
            } 
        },1000)
    }
    stopTimer(){
        clearInterval(this.timerID);
        this.setState({
            isActivate: false
        })
    }

    render() {
        return (
            <div>
                <p className='content'>Result: {this.state.count}</p>
                <br/>
                <input type='text' pattern='[0-9]*' size='15' onChange={this.handleChangeQuantity} value={this.state.quantity} name='quantityInput'/>
                <br/>
                <button onClick={this.handleIncrease} className=''>+</button>
                <button onClick={this.handleDecrease} className=''>-</button>
                <br/>
                <button onClick={this.state.isActivate? this.stopTimer.bind(this):
                    this.startTimer.bind(this)} className=''>
                        {this.state.isActivate ? `Stop` : `Start`}
                </button>
                <button 
                style={{display: this.props.showDelete? '' : 'none'}}
                onClick={()=>this.props.deleteCounter(this.props.id)}>
                Delete
                </button>
                <br/>
            </div>
        );
    }
}

export default SingleCounter;