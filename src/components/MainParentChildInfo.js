import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParentChildInfo.scss';

class MainParentChildInfo extends Component {
    render() {
        return (
            <>
                <container className="mainParentChildInfo">
                    <div className="parent_child_sec">
                        <div className="avatar_sec">
                            <div className="child_1_circle"></div>
                            <h2 className="child_1_name">Zosia</h2>
                        </div>
                        <div className="totalPoints_sec">
                            <div className="totalPoints">Aktualny<br/>stan punktów</div>
                            <h2 className="points">40</h2>
                        </div>
                    </div>
                        <ul className="requestList">Lista zgłoszeń do zatwierdzenia
                            <li>data, dzień tygodnia, punkty<button>Zatwierdź</button></li>
                        </ul>
                        <ul className="rewardsList">Lista zakupionych nagród
                            <li>Pozycje kliknięte w sklepie<button>Zrealizowano</button></li>
                        </ul>
                </container>
            </>
        )
    }
}


export default MainParentChildInfo;