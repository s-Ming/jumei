import React from "react";
import Hslider from './Hslider.jsx';

class Hsearch extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };
    render(){
        return(
            <div>
               <div className="search">
                  <input placeholder="搜索商品  分类  功效"/>
                    
                  <i className="fa fa-bars" aria-hidden="true"></i>
               </div>
               
               <Hslider></Hslider> 
            </div>
            )
    }
}


export default Hsearch;

//  <i className="fa fa-search" aria-hidden="true"></i>