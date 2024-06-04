import React, { Component } from 'react'

class Cnt extends Component {
 constructor(){
    super();
    this.state ={
        cnt : 0
    }
 }

 Inc(){
    this.setState({
        cnt: this.state.cnt +1
    })
 }

 render(){
    return(
        <>
        <h1>Counter App</h1>
        <h2>Count : {this.state.cnt}</h2>
        <button onClick={ () => this.Inc()}>+</button>
        </>
    )
 }

}

export default Cnt