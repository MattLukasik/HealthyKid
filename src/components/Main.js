import React, {Component} from "react";
import ReactDOM from "react-dom";

import './main.scss';

class Main extends Component {
  render() {
    return (
        <>
            <container className="main">
                  <div className="child">
                    <div className="childCircle">Dziecko</div>
                    <input className="childInput" type="text"/>
                    <button className="childBtn">Wejdź</button>
                  </div>
                  <div className="parent">
                    <div className="parentCircle">Rodzic</div>
                    <input className="parentInput" type="text"/>
                    <button className="parentBtn">Wejdź</button>
                  </div>
            </container>
        </>
  )
  }
}

export default Main;
