import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChildPoints.scss';


class MainChildPoints extends Component {
    constructor(props) {
        super(props);
    }

    //USTALAMY METODY KTÓRA DODADZĄ ZGŁOSZENIA PUNKTÓW DO LISTY (URUCHAMIANE KLIKIEM)

    handleAddPoints_10_eat = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za zjedzenie warzywa",
            timestamp: new Date(),
            accepted: false
        });

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

    };

    handleAddPoints_10_idea = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za super pomysł",
            timestamp: new Date(),
            accepted: false,
        });

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
    };

    handleAddPoints_10_prepare = () => {

        const childRequestList = this.props.request;
        childRequestList.push({
            description: "10 punktów za przygotowanie potrawy",
            timestamp: new Date(),
            accepted: false,
        });

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

    };

    render() {
        return (
            <>
                <div className="mainChildPoints">
                    <div onClick={this.props.showMainChild} className="childReturn">Powrót</div>
                    <div className="totalPoints">Aktualnie posiadasz {this.props.points} punktów</div>
                    <h2 className="listHeader">Wybierz z listy</h2>
                    <ul className="listPoints">
                        <li onClick={this.handleAddPoints_10_eat} className="liPoints">Zjedzona porcja warzyw - 10
                            punktów
                        </li>
                        <li onClick={this.handleAddPoints_10_idea} className="liPoints">Super pomysł na warzywo - 10
                            punktów
                        </li>
                        <li onClick={this.handleAddPoints_10_prepare} className="liPoints">Przyrządzenie potrawy z
                            warzyw -
                            10 punktów
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}


export default MainChildPoints;