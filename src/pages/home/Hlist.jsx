import React from "react";
import {Link} from "react-router-dom";

class Hlist extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.props = props;
        
        console.log(this.props)
    }

    
  

    hlistChange(arr) {
        if (arr==[]){
            return
        }
        let hlistHtml = arr.map((item,index)=>{
            /*console.log(item)*/
            return <li key={index} >
                <Link to="/xiangqing">
                <div>
                    <p>{item.name}</p>
                    <p>￥<span>{item.jumei_price}</span><span>￥{item.market_price}</span></p>
                    <p>{item.product_desc}</p>
                </div> 
                </Link>    
            </li>;
        })
        return hlistHtml;
    }


    
  




    render(){
        return(
            <div>
                <ul className="homelist2">

                    {this.hlistChange(this.props.data)}
                    
                </ul>
            </div>
        )
    }



}
export default Hlist;
 



    // getInfo(){
    //     React.axios.get('./data/hlist.json')
    //     .then((res)=>{
    //         console.log(res.data.data)
    //         this.setState({
    //             homelist:this.state.homelist.concat(res.data.data)  
    //         })
    //         // console.log(this.state.sliderlist)
         
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }




    // componentDidMount(){
    //     this.getInfo()
    // }
