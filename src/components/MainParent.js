import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParent.scss';

class MainParent extends Component {
    render() {
        return (
            <>
                <container className="mainParent">
                    <h2 className="listHeader">Lista dostępnych nagród</h2>
                    <div className="child_1">
                        <div className="child_1_circle"></div>
                        <h2 className="child_1_name">Zosia</h2>
                    </div>
                    <div className="child_2">
                        <div className="child_2_circle"></div>
                        <h2 className="child_2_name">Staszek</h2>
                    </div>
                </container>
            </>
        )
    }
}


export default MainParent;