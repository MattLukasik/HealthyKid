import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import GroupContainerChild from "./GroupContainerChild";
import GroupContainerParent from "./GroupContainerParent";


class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible1: true,
            visible2: false,
            visible3: false,
        }
    }
    // handleShowMain = () => {
    //     this.setState({
    //         visible1: true,
    //         visible2: false,
    //         visible3: false,
    //     });
    // };


    handleShowGroupChild = () => {
        this.setState({
            visible1: false,
            visible2: true,
            visible3: false,
        });
    };

    handleShowGroupParent = () => {
        this.setState({
            visible1: false,
            visible2: false,
            visible3: true,
        });
    };

    render() {
        return (
            <>
                {this.state.visible1 && (
                    <Main
                        showGroupChild={this.handleShowGroupChild}
                        showGroupParent={this.handleShowGroupParent}
                    />
                )}
                {this.state.visible2 && (
                    <GroupContainerChild
                    />
                )}
                {this.state.visible3 && (
                    <GroupContainerParent
                    />
                )}
            </>
        )
    }
}

export default MainContainer;