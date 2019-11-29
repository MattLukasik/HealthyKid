import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChildReward.scss';

class MainChildReward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoReward:"",

        }
    }


    //USTALAMY METODY KTÓRE DODADZĄ ZGŁOSZENIA NAGRÓD DO WYDANIA (URUCHAMIANE KLIKIEM)
    handleRewardXBox = () => {

        const childRequestReward = this.props.rewards;
        childRequestReward.push({
            description: "Dodatkowy czas na konsoli (30 minut) - 100 punktów",
            timestamp: new Date(),
            accepted: false
        });
        //Poniżej warunek, jeśli punktów jest za mało nagroda nie zostanie zgłoszona
        let result;
        if (this.props.points < 100) {
            result =  <h3 className="alert">Masz za mało punktów!</h3>
        }else {
            result =  <h3 className="alertOk">Nagroda zamówiona!</h3>;
            fetch("http://localhost:3000/parent/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({rewards: childRequestReward})
                })
                .then(data => {
                    console.log(data)
                }).catch(err => {
                console.log(err);
            });
            this.props.pointsUpdate();
//odjęcie punktów z puli dziecka
            fetch("http://localhost:3000/children/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({sum: this.props.points - 100})
                })
                .then(data => {
                    console.log(data);
                }).catch(err => {
                console.log(err);
            });

        }
        this.setState({
            infoReward: result,
        })

    };

    handleRewardPhone = () => {

        const childRequestReward = this.props.rewards;
        childRequestReward.push({
            description: "Dodatkowy czas na telefonie (30 minut) - 100 punktów",
            timestamp: new Date(),
            accepted: false
        });
//Poniżej warunek, jeśli punktów jest za mało nagroda nie zostanie zgłoszona
        let result;
        if (this.props.points < 100) {
            result =  <h3 className="alert">Masz za mało punktów!</h3>
        }else {
            result =  <h3 className="alertOk">Nagroda zamówiona!</h3>;
            fetch("http://localhost:3000/parent/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({rewards: childRequestReward})
                })
                .then(data => {
                    console.log(data)
                }).catch(err => {
                console.log(err);
            });
            this.props.pointsUpdate();
            //odjęcie punktów z puli dziecka
            fetch("http://localhost:3000/children/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({sum: this.props.points - 100})
                })
                .then(data => {
                    console.log(data);
                }).catch(err => {
                console.log(err);
            });
        }
        this.setState({
            infoReward: result,
        })

    };

    handleRewardCinema = () => {
        result =  <h3 className="alertOk">Nagroda zamówiona!</h3>;
        const childRequestReward = this.props.rewards;
        childRequestReward.push({
            description: "Wyjście do kina - 100 punktów",
            timestamp: new Date(),
            accepted: false
        });
//Poniżej warunek, jeśli punktów jest za mało nagroda nie zostanie zgłoszona
        let result;
        if (this.props.points < 100) {
            result =  <h3 className="alert">Masz za mało punktów!</h3>
        }else {
            result =  <h3 className="alertOk">Nagroda zamówiona!</h3>;
            fetch("http://localhost:3000/parent/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({rewards: childRequestReward})
                })
                .then(data => {
                    console.log(data)
                }).catch(err => {
                console.log(err);
            });
            this.props.pointsUpdate();
            //odjęcie punktów z puli dziecka
            fetch("http://localhost:3000/children/1",
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "PATCH",
                    body: JSON.stringify({sum: this.props.points - 100})
                })
                .then(data => {
                    console.log(data);
                }).catch(err => {
                console.log(err);
            });
        }
        this.setState({
            infoReward: result,
        })

    };
    render() {
        return (
            <>
                <div className="mainChildReward">
                    <div onClick={this.props.showMainChild} className="childReturn">Powrót</div>
                    <div className="child_sec">
                        <div className="childAvatar"></div>
                        <h2 className="childName">Zosia</h2>
                    </div>
                    <div className="totalPoints">Aktualnie posiadasz<div className="pointsResult">{this.props.points}</div>punktów</div>
                    <h2 className="listHeader">Wybierz nagrodę z listy</h2>

                    <ul className="listRewards">{this.state.infoReward}
                        <li onClick={this.handleRewardXBox} className="liRewards"><div className="liRewardsText">
                            Dodatkowy czas na konsoli (30 minut) - 100 punktów</div>
                        </li>
                        <li onClick={this.handleRewardPhone} className="liRewards"><div className="liRewardsText">
                            Dodatkowy czas na telefonie (30 minut) - 100 punktów</div>
                        </li>
                        <li onClick={this.handleRewardCinema} className="liRewards"><div className="liRewardsText">
                            Wyjście do kina - 100 punktów</div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}


export default MainChildReward;