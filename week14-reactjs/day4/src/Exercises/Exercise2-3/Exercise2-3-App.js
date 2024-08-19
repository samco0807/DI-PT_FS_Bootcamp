import React from "react";
import Color from "./Exercise2-3-ColorComponent.js";
import Child from "./Exercise2-3-ChildComponent.js";

const App = () => {
  return (
    <div>
      <Color />
        <Child />
    </div>
  );
};

export default App;

      // const{(Color)}=this.state
      // <header>
      //   <h1>My {FavoriteColor} is {Color} </h1>
      //   <button onClick={this.FavoriteColor}>Change Color</button>
      //   <button onClick={this.ShowProperty}>Delete Header</button>
      // </header>