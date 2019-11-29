import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainParentChildInfo.scss';

class MainParentChildInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forceReRender: false,
            // newSum:0,
        }
    };


    //METODA AKTUALIZUJĄCA BAZĘ REQUESTÓW I ODŚWIEŻAJĄCA WIDOK (forceReRender)

    handleRequest = (index) => {

        const newData = this.props.request;
        newData[index].accepted = true;

        //TUTAJ ZMINIAMY "ACCEPTED" NA TRUE

        fetch("http://localhost:3000/parent/1/",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({requests: newData})
            })
            .then(data => {
                console.log(data);
                this.setState({
                    forceReRender: !this.state.forceReRender,
                })
            }).catch(err => {
            console.log(err);
        });

        // TUTAJ DODAWANIE PUNKTÓW NIE DZIAŁA NIE UMIEM USTALIĆ CZEMU...
        // to znaczy działa ale za każdym razem trzeba przeładować stronę

        // this.setState({
        //     newSum: this.props.points + 10,
        // });
        this.props.pointsUpdate();
        fetch("http://localhost:3000/children/1",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({sum: this.props.points + 10})
            })
            .then(data => {
                console.log(data);
            }).catch(err => {
            console.log(err);
        });

    };

    //METODA AKTUALIZUJĄ BAZĘ REWARDÓW I ODŚWIEŻAJĄCA WIDOK (forceReRender)

    handleReward = (index) => {
        const newData = this.props.rewards;
        newData[index].accepted = true;

        //TUTAJ ZMINIAMY "ACCEPTED" NA TRUE

        fetch("http://localhost:3000/parent/1/",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({rewards: newData})
            })
            .then(data => {
                console.log(data);
                this.setState({
                    forceReRender: !this.state.forceReRender,
                })
            }).catch(err => {
            console.log(err);
        });
    };

    render() {

        const childRequestList = this.props.request;
        const childRequestReward = this.props.rewards;
        return (
            <>
                <div className="mainParentChildInfo">
                    <div onClick={this.props.showMainParent} className="parentReturn">Powrót</div>
                    <div className="parent_child_sec">
                        <div className="avatar_sec">
                            <div className="child_1_circle"></div>
                            <h2 className="child_1_name">Zosia</h2>
                        </div>
                        <div className="totalPoints_sec">
                            <div className="totalPoints">Aktualny<br/>stan punktów</div>
                            <h2 className="points">{this.props.points}</h2>
                        </div>
                    </div>
                    <h3 className="requestListHeader">Lista zgłoszeń do zatwierdzenia</h3>
                    <ul className="requestList">
                        {childRequestList.map((req, index) => {
                            return (
                                !req.accepted &&<li className="liRequest" key={index}>
                                    <div>{req.description}</div>
                                    <button className="requestBtn" onClick={this.handleRequest.bind(this, index)}>Zatwierdź</button>
                                </li>
                            )
                        })}
                    </ul>
                    <h3 className="rewardsListHeader">Lista zakupionych nagród</h3>
                    <ul className="rewardsList">
                        {childRequestReward.map((req, index) => {
                            return (
                                !req.accepted && <li className="liReward" key={index}>
                                    <div>{req.description}</div>
                                    <button className="rewardBtn" onClick={this.handleReward.bind(this, index)}>Zrealizuj</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}


export default MainParentChildInfo;