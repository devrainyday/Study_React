import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number : 0
    }

    handleIncrease = () => {
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        const {number} = this.state; // 왜 this.state.number 가 아닐까?
        this.setState({
            number: number - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter