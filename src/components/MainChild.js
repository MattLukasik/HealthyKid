import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChild.scss';

class MainChild extends Component {
    render() {
        return (
            <>
                <container className="mainChild">
                    <div className="totalPoints">Aktualnie posiadasz ... punktów</div>
                    <div className="child_sec">
                        <div className="childAvatar"></div>
                        <h2 className="childName">Imię</h2>
                    </div>
                    <div className="widgets">
                        <div className="widget gainPoints">Zbieraj punkty</div>
                        <div className="widget collectRewards">Odbieraj nagrody</div>
                    </div>
                </container>
            </>
        )
    }
}


export default MainChild;