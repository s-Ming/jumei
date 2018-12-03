import React from "react";
class Hsearch extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };
    render(){
        return(
            <div className="search">
              <input placeholder="搜索商品  分类  功效"/>
                
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            )
    }
}


export default Hsearch;

//  <i className="fa fa-search" aria-hidden="true"></i>