import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParentRewardList.scss';

class MainParentRewardList extends Component {
    render() {
        return (
            <>
                <container className="mainParentRewardList">
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
                        <button className="addRewardBtn">Dodaj nagrodę</button>
                    </ul>
                    <NewReward/>
                </container>

            </>
        )
    }
}

class NewReward extends Component {

    render() {
        return(
            <form>
                <input type="text" name="name" placeholder="nazwa nagrody"/>
                <input type="number" name="price" placeholder="punkty"/>
                <button>Dodaj</button>
            </form>
        )
    }
}


export default MainParentRewardList;