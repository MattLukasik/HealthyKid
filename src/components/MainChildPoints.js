import React, {Component} from "react";
import ReactDOM from "react-dom";

import './mainChildPoints.scss';

class MainChildPoints extends Component {
    render() {
        return (
            <>
                <container className="mainChildPoints">
                    <div className="totalPoints">Aktualnie posiadasz ... punktów</div>
                    <h2 className="listHeader">Wybierz z listy</h2>
                    <ul className="listPoints">
                        <li className="liPoints">Zjedzona porcja warzyw - 5 punktów</li>
                        <li className="liPoints">Super pomysł na warzywo - 5 punktów</li>
                        <li className="liPoints">Przyrządzenie potrawy z warzyw - 20 punktów</li>
                    </ul>
                </container>
            </>
        )
    }
}


export default MainChildPoints;