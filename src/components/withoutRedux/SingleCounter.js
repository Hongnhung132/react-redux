import React, { Component } from 'react';
class SingleCounter extends Component {
    constructor(props){
        // props: Được truyền từ 1 component khác  sang component 
        super(props); // Nó như một cái object
        // props: {
        //     x : 3, 
        //     y : "u"
        //     }
        // props.x , props.y để gọi
        this.state = {
            count: 0,
            isActivate: false
        }
        
        // Không set trực tiếp dc nên dùng this.setSate

    }

    handleChangeCount = (event) => {
        // bind(this) hoặc dùng arrow function 
        //const <functionname> = ([<params>]) => {
        //}
        // this.state.count.bind(this)
        event.preventDefault();
        this.setState({
            count: (event.target.validity.valid) ? event.target.value : this.state.count
        })
    }
    handleIncrease = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    handleDecrease = () => {
        if (this.state.count>0){
            this.setState({
                count: this.state.count -1
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
                <br/>
                <input type='text' pattern='[0-9]*' size='15' onChange={this.handleChangeCount} value={this.state.count} name='countInput'/>
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