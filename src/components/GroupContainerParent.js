import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainParent from "./MainParent";
import MainParentChildInfo from "./MainParentChildInfo";
import MainParentRewardList from "./MainParentRewardList";
import MainChild from "./MainChild";


class GroupContainerParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible1: true,
            visible2: false,
            visible3: false,
            pointSum: 0,
            childRequest: [],
            childRewards: []
        }
    }

    componentDidMount() {

        // POPBIERAMY Z BAZY SALDO ZGROMADZONYCH PUNKTÓW - zdefiniowane poniżej

        this.fetchData();

        // POBIERAMY LISTĘ ZŁOSZEŃ DO ZATWIERDZENIA

        fetch("http://localhost:3000/parent").then(r => {
            if (r.ok === true) {
                return r.json();
            } else {
                throw new Error("Błąd")
            }
        }).then(data => {
            this.setState({
                childRequest: data[0].requests,
            });
            console.log(data[0].requests);

        }).catch(err => {
            console.log(err);
        });

        // POBIERAMY LISTĘ NAGRÓD DO ZATWIERDZENIA

        fetch("http://localhost:3000/parent").then(r => {
            if (r.ok === true) {
                return r.json();
            } else {
                throw new Error("Błąd")
            }
        }).then(data => {
            this.setState({
                childRewards: data[0].rewards,
            });
            console.log(data[0].rewards);

        }).catch(err => {
            console.log(err);
        });

    }

    //metoda pobierająca punkty

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


    handleShowMainParent = () => {
        this.setState({
            visible1: true,
            visible2: false,
            visible3: false
        });
    };


    handleShowChildInfo = () => {
        this.setState({
            visible1: false,
            visible2: true,
            visible3: false
        });
    };

    handleShowRewardList = () => {
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
                    <MainParent
                        showRewardList={this.handleShowRewardList}
                        showChildInfo={this.handleShowChildInfo}
                    />
                )}
                {this.state.visible2 && (
                    <MainParentChildInfo
                        showMainParent={this.handleShowMainParent}
                        request={this.state.childRequest}   //ODDAJEMY W PROPSIE LISTĘ ZGŁOSZEŃ
                        points={this.state.pointSum}    //ODDAJEMY W PROPSIE SUMĘ PUNKTÓW
                        pointsUpdate={this.fetchData}
                        rewards={this.state.childRewards} // ODDAJEMY W PROPSIE LISTE NAGRÓD

                    />
                )}
                {this.state.visible3 && (
                    <MainParentRewardList
                        showMainParent={this.handleShowMainParent}
                    />
                )}
            </>
        )
    }
}

export default GroupContainerParent;