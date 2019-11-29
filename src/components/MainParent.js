import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParent.scss';

class MainParent extends Component {
    render() {
        return (
            <>
                <div className="mainParent">
                    <h2 onClick={this.props.showRewardList} className="listHeader">Lista dostępnych nagród</h2>
                    <div className="child_1">
                        <div onClick={this.props.showChildInfo} className="child_1_circle"></div>
                        <h2 onClick={this.props.showChildInfo} className="child_1_name">Zosia</h2>
                    </div>
                    <div className="child_2">
                        <div onClick={this.props.showChildInfo} className="child_2_circle"></div>
                        <h2 onClick={this.props.showChildInfo} className="child_2_name">Staszek</h2>
                    </div>
                </div>
            </>
        )
    }
}


export default MainParent;