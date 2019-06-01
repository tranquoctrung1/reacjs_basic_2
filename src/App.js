import React, {Component} from 'react';
import './App.css';

import Accordion from './components/Accordion.js';
import Counter from './components/Counter.js'

class App extends Component {
  constructor(props)
  {
    console.log("App tạo constructor")
    super(props);
    // dòng ref này có chức năng lấy tag khi truyền vào các tag
    this.inputElement = React.createRef();
    this.atag= React.createRef();
    this.accordion = React.createRef();

    this.state ={
      showCounter : true
    }

    this.RemoveCounter = this.RemoveCounter.bind(this)
  };
  
  componentDidMount() {
    // debugger;
    this.inputElement.current.focus()
    console.log(this.inputElement.current)
    this.atag.current.click()
    console.log(this.atag.current)
    console.log(this.accordion.current.props.children)
  }

  RemoveCounter () 
  {
    this.setState({
      showCounter: false
    })
  }
  render() {
    console.log("App đã render")
    return (
      <div className="App">
        <Accordion heading="Heading" ref={this.accordion}>
          <p >{`this is demo for children props`}</p>
        </Accordion>

        {/* lấy thằng tag nào thì đặt ref vào đó */}
        <input type="text" placeholder="Enter" ref={this.inputElement}></input>
        {/* eslint-disable-next-line */}
        <a href={`javascript:void(0)`} ref={this.atag}></a>

        {this.state.showCounter &&  <Counter/>}
        <button onClick={this.RemoveCounter}> Xóa Counter </button>
      </div>
    );
  }
}

export default App;
