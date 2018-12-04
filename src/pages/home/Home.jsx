import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import Hsearch from './Hsearch.jsx';
import Hnav from './Hnav.jsx';
import Hlist from './Hlist.jsx';


class Home extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
          tablist:[{title:'今日10点上新',path:'tab-online'},{title:'明日10点预告',path:'tab-preshow'}],
           
        };
    }

    tabChange(arr) {
        let tabHtml = arr.map((item,index)=>{
            console.log(item);
            return <li key={index}>{item.title}</li>;
        })
        return tabHtml;
    }

    render() {
        return (
            <div>
                <Hsearch></Hsearch>
                <Hnav></Hnav>     
                <ul className="tablist">
                    {this.tabChange(this.state.tablist)}
                </ul>  


                <Hlist></Hlist>        

            </div>
        );
    }
}

export default Home;