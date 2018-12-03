import React from "react";
class Hnav extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
    };
    render(){
        return(
            <div id="nav-inner" className="headerNav clearfix" style={{width: "385px"}}>
                <p className="navTitle nt_deal nav_select">
                    <a href="/">
                        <span>首页</span>
                        <span className="header-nav-line"></span>
                    </a>
                </p>
                <p className="navTitle nt_deal"><a href="/global/deals"><span>极速免税店</span><span className="header-nav-line"></span></a>
                </p>
                <p className="navTitle nt_deal"><a href="/muandbaby/index"><span>母婴</span><span className="header-nav-line"></span></a>
                </p>
                <p className="navTitle nt_deal"><a href="/luxury/index"><span>轻奢</span><span className="header-nav-line"></span></a>
                </p>
                <p className="navTitle nt_deal"><a href="/pop"><span>名品特卖</span><span className="header-nav-line"></span></a>
                </p>
            </div>
        )
    }
}
export default Hnav;

