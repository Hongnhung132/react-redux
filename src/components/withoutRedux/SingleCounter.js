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
        },2000)
    }
    stopTimer(){
        clearInterval(this.timerID);
        this.setState({
            isActivate: false
        })
    }

    render() {
        return (
          <div id={"content-wrapper"} className={"flex column vertical-align horizontal-align"}>
            <h2>Simple Counter</h2>
            <div  id={"counter-wrapper"}  className={"flex column vertical-align justify-sp-ev"} >
              <div className={"flex column vertical-align"}>
                <p>{this.state.count}</p>
              </div>
              <div>
                <h3>Add / substract custom quantity</h3>
                <div className={"flex row vertical-align horizontal-align "}>
                  <input type="text" value={this.state.quantity}  onChange={this.handleChangeQuantity} className={"mr-10  mb-10"}/>
                  <button className={"mr-5 width-40 "} onClick={this.handleDecrease} > - </button>
                  <button className={"width-40"} onClick={this.handleIncrease}> + </button>
                </div>
              </div>

              <div className={"flex row vertical-align horizontal-align"}>
                <button id={"counter-start"} onClick={this.state.isActivate ? this.stopTimer.bind(this) : this.startTimer.bind(this)} className=" mr-5 ">
                  {this.state.isActivate ? `Stop Counter` : `Start Counter`}
                </button>
                <button  id={"counter-delete"} style={{ display: this.props.showDelete ? "" : "none" }} onClick={() => this.props.deleteCounter(this.props.id) } className=""> Delete Counter</button>
              </div>
            </div>
          </div>
        );
      }
}

export default SingleCounter;