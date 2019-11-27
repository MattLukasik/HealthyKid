import React, {Component} from "react";
import ReactDOM from "react-dom";

import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            infoChild: "",
            infoParent: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClickChild = e => {
        e.preventDefault();
        let result;
        if (this.state.name !== "Zosia" && this.state.name !== "Zofia") {
            result =  <span>Nieproawidłowe imię. Wpisz "Zosia" lub "Zofia"</span>
        }else {
            this.props.showGroupChild();
        }
        this.setState({
            infoChild: result,
        })

    };

    handleClickParent = e => {
        e.preventDefault();
        let result;

        if (this.state.password !== "a") {
            result =  <span>Nieprawidłowe hasło</span>
        } else {
            this.props.showGroupParent();
        }
        this.setState({
            infoParent: result,
        })

    };

    render() {
        return (
            <>
                <div className="main">
                    <div className="child">
                        <div className="childCircle">Dziecko</div>
                            <input className="childInput"
                                   placeholder="Podaj imię"
                                   type="text"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.handleChange}/>
                            <button onClick={this.handleClickChild} className="childBtn">Wejdź</button>
                            {this.state.infoChild}
                    </div>
                    <div className="parent">
                        <div className="parentCircle">Rodzic</div>
                            <input className="parentInput"
                                   placeholder="Podaj hasło"
                                   type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}/>
                            <button onClick={this.handleClickParent} className="parentBtn">Wejdź</button>
                            {this.state.infoParent}
                    </div>
                </div>
            </>
        )
    }
}

export default Main;
