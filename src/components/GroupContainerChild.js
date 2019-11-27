import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainChild from "./MainChild";
import MainChildPoints from "./MainChildPoints";
import MainChildReward from "./MainChildReward";


class GroupContainerChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible1: true,
            visible2: false,
            visible3: false,
            pointSum: 0,
            childRequest: [],
            childRewards: []
        };
    }


    componentDidMount() {
        // POPBIERAMY Z BAZY SALDO ZGROMADZONYCH PUNKTÓW za pomocą metody fetData zdefiniowanej poniżej
        this.fetchData();

        // POBIERAMY LISTĘ ZŁOSZEŃ DO ZATWIERDZENIA

        fetch("http://localhost:3000/parent").then(r =>{
            if (r.ok === true){
                return r.json();
            }  else {
                throw new Error("Błąd")
            }
        }).then(data => {
            this.setState({
                childRequest: data[0].requests,
            });
            console.log(data[0].requests);

        }).catch(err=>{
            console.log(err);
        });

        // POBIERAMY LISTĘ NAGRÓD DO ZATWIERDZENIA

        fetch("http://localhost:3000/parent").then(r =>{
            if (r.ok === true){
                return r.json();
            }  else {
                throw new Error("Błąd")
            }
        }).then(data => {
            this.setState({
                childRewards: data[0].rewards,
            });
            console.log(data[0].rewards);

        }).catch(err=>{
            console.log(err);
        });
    }

    fetchData = () => {

        fetch("http://localhost:3000/children").then(r =>{
            if (r.ok === true){
                return r.json();
            }  else {
                throw new Error("Błąd")
            }
        }).then(data => {
            this.setState({
                pointSum: data[0].sum,
            })
        }).catch(err=>{
            console.log(err);
        });

    };

    handleShowMainChild = () => {
        this.setState({
            visible1: true,
            visible2: false,
            visible3: false
        });
    };


    handleShowChildPoints = () => {
        this.setState({
            visible1: false,
            visible2: true,
            visible3: false
        });
    };

    handleShowChildReward = () => {
        this.setState({
            visible1: false,
            visible2: false,
            visible3: true
        });
    };


    render() {
        return (
            <>
                {this.state.visible1 && (
                    <MainChild
                        showReward={this.handleShowChildReward}
                        showPoints={this.handleShowChildPoints}
                        points={this.state.pointSum}    //ODDAJEMY W PROPSIE SUMĘ PUNKTÓW
                        request={this.state.childRequest} //ODDAJEMY W PROPSIE LISTĘ ZGŁOSZEŃ
                        rewards={this.state.childRewards} // ODDAJEMY W PROPSIE LISTE NAGRÓD


                    />
                )}
                {this.state.visible2 && (
                    <MainChildPoints
                        showMainChild={this.handleShowMainChild}
                        points={this.state.pointSum}
                        request={this.state.childRequest}
                        rewards={this.state.childRewards}
                    />
                )}
                {this.state.visible3 && (
                    <MainChildReward
                        showMainChild={this.handleShowMainChild}
                        points={this.state.pointSum}
                        request={this.state.childRequest}
                        rewards={this.state.childRewards}
                        pointsUpdate={this.fetchData}
                    />
                )}
            </>
        )
    }
}

export default GroupContainerChild;