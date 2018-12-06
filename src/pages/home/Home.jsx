import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import Hsearch from './Hsearch.jsx';
import Hnav from './Hnav.jsx';
import Hlist from './Hlist.jsx';
import {connect} from 'react-redux';



class Home extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
          tab:0,
          tablist:[{title:'今日10点上新',href:'tab-online',channel:""},{title:'明日10点预告',href:'tab-preshow',channel:""}],
          homelist:[]
           
        };
        console.log(this.state.homelist)
    }

    tabChange(arr) {
        let tabHtml = arr.map((item,index)=>{
            /*console.log(item);*/
            return <li key={index} 
               onClick={this.getInfo.bind(this,index)}
            >{item.title}</li>;
        })
        return tabHtml;
    }


  navigateTo(index, e) {
    this.setState({
      tab: index
    })
    this.props.history.push(this.state.tabs[index].href)
  }


  getInfo(index){
    if(index==0){
         React.axios.get('./data/hlist.json')
        .then((res)=>{
            console.log(res.data)
            this.setState({
                homelist:res.data.item_list
            })
           
            console.log(res.data.item_list[0].image_url_set.dx_image.url[320])
  
        })
        .catch((err)=>{
            console.log(err);
        })
    }else if(index==1){
        React.axios.get('./data/hlist2.json')
        .then((res)=>{
            console.log(res.data)
            this.setState({
                homelist:res.data.item_list
            })
           
            /*console.log(res.data.item_list[0].image_url_set.dx_image.url[320])*/
  
        })
        .catch((err)=>{
            console.log(err);
        })
    }
     
  }


    componentDidMount(){
        this.getInfo(0)
    }


    componentDidUpdate(){
        console.log(this.state.homelist)
    }


    render() {
        return (
            <div>
                <Hsearch></Hsearch>
                <Hnav></Hnav>     
                <ul className="tablist">
                    {this.tabChange(this.state.tablist)}
                </ul>  
                {
                  this.state.homelist === [] ? "111" : <Hlist data={this.state.homelist} />
                }
                

            </div>
        );
    }
    
}

export default connect((state)=>{
    return state
},

(dispatch)=>{
    return {
       toggleNav(){
          console.log(this)
          dispatch({
              type:"toggle",
              isShowNav:!this.props.isShowNav
          })
       },

    }

}
)(Home) ;




 // onClick={
 //                          this.props.togglelist.bind(this)
 //                        }



       // togglelist(){
       //    console.log(this)
       //    dispatch({
       //        type:"togglelist",
       //        isShowlist:!this.props.isShowlist
       //    })
       // }                       
