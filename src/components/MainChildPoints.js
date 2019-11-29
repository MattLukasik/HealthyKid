import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChildPoints.scss';


class MainChildPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoRequest:"",
        }
    }

    //USTALAMY METODY KTÓRA DODADZĄ ZGŁOSZENIA PUNKTÓW DO LISTY (URUCHAMIANE KLIKIEM)

    handleAddPoints_10_eat = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za zjedzenie warzywa",
            timestamp: new Date(),
            accepted: false
        });
        let result;
        result =  <h3 className="alertOk">Zgłoszenie wysłane!</h3>;

        fetch("http://localhost:3000/parent/1",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({requests: childRequestList})
            })
            .then(data => {
                console.log(data)
            }).catch(err => {
            console.log(err);
        });
        this.setState({
            infoRequest: result,
        })
    };

    handleAddPoints_10_idea = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za super pomysł",
            timestamp: new Date(),
            accepted: false,
        });
        let result;
        result =  <h3 className="alertOk">Zgłoszenie wysłane!</h3>;
        fetch("http://localhost:3000/parent/1",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({requests: childRequestList})
            })
            .then(data => {
                console.log(data)
            }).catch(err => {
            console.log(err);
        });
        this.setState({
            infoRequest: result,
        })
    };

    handleAddPoints_10_prepare = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za przygotowanie potrawy",
            timestamp: new Date(),
            accepted: false,
        });
        let result;
        result =  <h3 className="alertOk">Zgłoszenie wysłane!</h3>;
        fetch("http://localhost:3000/parent/1",
            {
                headers: {'Content-Type': 'application/json'},
                method: "PATCH",
                body: JSON.stringify({requests: childRequestList})
            })
            .then(data => {
                console.log(data)
            }).catch(err => {
            console.log(err);
        });
        this.setState({
            infoRequest: result,
        })
    };

    render() {
        return (
            <>
                <div className="mainChildPoints">
                    <div onClick={this.props.showMainChild} className="childReturn">Powrót</div>
                    <div className="child_sec">
                        <div className="childAvatar"></div>
                        <h2 className="childName">Zosia</h2>
                    </div>
                    <div className="totalPoints">Aktualnie posiadasz<div className="pointsResult">{this.props.points}</div>punktów</div>
                    <h2 className="listHeader">Zgłoś punkty do zatwierdzenia</h2>
                    <ul className="listPoints">{this.state.infoRequest}
                        <li onClick={this.handleAddPoints_10_eat} className="liPoints"><div className="liPointsText">Zjedzona porcja warzyw - 10
                            punktów</div>
                        </li>
                        <li onClick={this.handleAddPoints_10_idea} className="liPoints"><div className="liPointsText">Super pomysł na warzywo - 10
                            punktów</div>
                        </li>
                        <li onClick={this.handleAddPoints_10_prepare} className="liPoints"><div className="liPointsText">Przyrządzenie potrawy z
                            warzyw -
                            10 punktów</div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}


export default MainChildPoints;