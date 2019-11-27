import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParentRewardList.scss';

class MainParentRewardList extends Component {
    render() {
        return (
            <>
                <div className="mainParentRewardList">
                    <div onClick={this.props.showMainParent} className="parentReturn">Powrót</div>
                    <h2 className="rewardListHeader">Lista dostępnych nagród</h2>
                    <ul className="rewardsList">
                        <li className="itemRewards">
                            Dodatkowy czas na konsoli (30 minut)
                            <div className="priceBox">100</div>
                        </li>
                        <li className="itemRewards">
                            Dodatkowy czas na telefonie (30 minut)
                            <div className="priceBox">100</div>
                        </li>
                        <li className="itemRewards">
                            Wyjście do kina
                            <div className="priceBox">100</div>
                        </li>
                    </ul>
                </div>

            </>
        )
    }
}


export default MainParentRewardList;