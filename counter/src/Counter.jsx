import { Component } from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            Count: 0
        }
    }
    Increment() {
        this.setState({
            Count: this.state.Count + 1
        })
    }
    Decrement() {
        this.setState({
            Count: this.state.Count - 1
        })
    }
    Reset() {
        this.setState({
            Count: this.state.Count = 0
        })
    }
    render() {
        return (
            <div align="center" className="count">
                <h1>Counter App</h1>
                <button className="plus" onClick={() => this.Increment()}> +</button>
                <button className="cnt"> {this.state.Count}</button>
                {
                    this.state.Count == 0 ? <button className="minus" disabled onClick={() => this.Decrement()}>-</button> : <button className="minus" onClick={() => this.Decrement()}>-</button>

                }

                <div><button className="reset " onClick={() => this.Reset()}>Reset</button></div>
            </div>


        )
    }
}
export default Counter;