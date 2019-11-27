import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChild.scss';

class MainChild extends Component {
    render() {
        return (
            <>
                <div className="mainChild">
                    <div className="totalPoints">Aktualnie posiadasz {this.props.points} punktów</div>
                    <div className="child_sec">
                        <div className="childAvatar"></div>
                        <h2 className="childName">Imię</h2>
                    </div>
                    <div className="widgets">
                        <div onClick={this.props.showPoints} className="widget gainPoints">Zbieraj punkty</div>
                        <div onClick={this.props.showReward} className="widget collectRewards">Odbieraj nagrody</div>
                    </div>
                </div>
            </>
        )
    }
}


export default MainChild;