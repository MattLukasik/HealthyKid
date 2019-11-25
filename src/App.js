import React, { Component } from 'react';
import Main from './components/Main';
import MainChild from './components/MainChild';
import MainChildPoints from "./components/MainChildPoints";
import MainChildReward from "./components/MainChildReward";
import MainParent from "./components/MainParent";
import MainParentChildInfo from "./components/MainParentChildInfo";
import MainParentRewardList from "./components/MainParentRewardList";


class App extends Component {
  render() {
    return (
        <>
        {/*<Main />*/}
        {/*<MainChild/>*/}
        {/*<MainChildPoints/>*/}
        {/*<MainChildReward/>*/}
        {/*<MainParent/>*/}
        {/*<MainParentChildInfo/>*/}
        <MainParentRewardList/>
        </>
    )
  }
}

export default App;
