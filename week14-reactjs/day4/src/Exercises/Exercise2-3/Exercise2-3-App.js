import React, { Component } from "react"

class Child extends Component{
  render(){
return <header>Hello World</header>
      }
    }

class Color extends Component{
    constructor(propos){
  super(propos)
  this.state={
    color:"red",
    show:true
  }
    }
  

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.color!==this.state.color){
    return true;
}
return false
}

componentDidUpdate(prevPropos, prevState) {
    console.log("After update");

}

getSnapshotBeforeUpdate(prevPropos, prevState){
    console.log("in getSnapshotBeforeUpdate");
}

componentWillUnmount(){
console.log("Component will unmount");
}
  
  FavoriteColor=()=>{
    this.setState({color:"blue"})
  }

  ShowProperty=()=>{
    this.setState({show: false})
  }
};

  render(){
      <div>
    const{color, show}=this.state
  <header>My FavoriteColor is {color} 
  {show && <Child/>}
  <button onClick={this.FavoriteColor}>Change Color</button>
  <button onClick={this.ShowProperty}>Delete Header</button>
  </header>
  </div>
  
  };

  export default Color;