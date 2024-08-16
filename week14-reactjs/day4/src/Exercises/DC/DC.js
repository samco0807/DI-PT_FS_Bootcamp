import React from 'react';
import FormComponent from './DC-Component/DC-component';

class App extends React.Component {
  constructor() {
    super()
    this.state={}
    ;
  }

  handleChange = event => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input')

    for (const item of inputs) {
      console.log(item.value)

    }
  }

  render() {
    return (
      <div className="box" >
        <FormComponent handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;