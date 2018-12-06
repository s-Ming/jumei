import React from "react";
import {connect} from 'react-redux';


class Hlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
            homelist:[]
        }
    }



    hlistChange(arr) {
        if (arr==[]){
            return
        }
        let hlistHtml = arr.map((item,index)=>{
            /*console.log(item)*/
            return <li key={index}>

                <div>
                    <p>{item.name}</p>
                    <p>￥<span>{item.jumei_price}</span><span>￥{item.market_price}</span></p>
                    <p>{item.product_desc}</p>
                </div>     
            </li>;
        })
        return hlistHtml;
    }


    
    getInfo(){
        React.axios.get('./data/hlist.json')
        .then((res)=>{
            console.log(res.data)
            this.setState({
                homelist:res.data.item_list
            })
            // console.log(this.state.sliderlist)
            console.log(res.data.item_list[0].image_url_set.dx_image.url[320])
            // data.item_list[""0""].image_url_set.dx_image.url
         
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    componentDidMount(){
        this.getInfo()
    }

    render(){
        return(
            <div>
                <ul className="homelist">

                    {this.hlistChange(this.state.homelist)}
                    
                </ul>
            </div>
        )
    }



}
export default connect((state)=>{
    return state
},

(dispatch)=>{
    return {
       togglelist(){
          console.log(this)
          dispatch({
              type:"togglelist",
              isShowlist:!this.props.isShowlist
          })
       }
    }

}
)(Hlist) ;;
 



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
