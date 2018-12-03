import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import Hsearch from './Hsearch.jsx';
import Hnav from './Hnav.jsx';

class Home extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <Hsearch></Hsearch>
                <Hnav></Hnav>         
            </div>
        );
    }
}

export default Home;