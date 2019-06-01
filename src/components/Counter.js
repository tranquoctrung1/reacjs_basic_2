import React , {Component} from 'react';


class Counter extends Component {
    constructor(props)
    {
        console.log('Tạo construtor của Counter')
        super(props);
        this.state ={
            count: 0
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    };

    increase() 
    {
        this.setState({
            count: this.state.count + 1
        })    
    };

    decrease() 
    {
        this.setState({
            count: this.state.count - 1
        })
    };

    componentDidMount()
    {
        console.log('Counter đã tạo ra')
    }

    componentDidUpdate()
    {
        console.log("Counter đã update")
    }

    //thằng này sẽ vô hiệu hóa chức năng update của component
    shouldComponentUpdate(nextProps, nextState)
    {
        if(this.state.count === nextState.count)
            return false;
        return true;
    }

    componentWillUnmount()
    {
        console.log("Counter sẽ xóa")
    };

    render() {
        console.log('Render ra thằng Counter')
        return (
            <div className="Counter">
                <button className="increase" onClick={this.increase}>+</button>
                <span className="count">{this.state.count}</span>
                <button className="decrease" onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;