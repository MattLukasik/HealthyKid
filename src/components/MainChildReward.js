import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChildReward.scss';

class MainChildReward extends Component {
    render() {
        return (
            <>
                <container className="mainChildReward">
                    <div className="totalPoints">Aktualnie posiadasz ... punktów</div>
                    <h2 className="listHeader">Lista dostępnych nagród</h2>
                    <ul className="listRewards">
                        <li className="liRewards">
                            <button className="rewardBtn">100</button>
                            Dodatkowy czas na konsoli (30 minut)
                        </li>
                        <li className="liRewards">
                            <button className="rewardBtn">100</button>
                            Dodatkowy czas na telefonie (30 minut)
                        </li>
                        <li className="liRewards">
                            <button className="rewardBtn">100</button>
                            Wyjście do kina
                        </li>
                    </ul>
                </container>
            </>
        )
    }
}


export default MainChildReward;