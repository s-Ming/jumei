import React from "react";
import {connect} from 'react-redux';
import Hslider2 from "./Hslider2.jsx";

class Hslider extends React.Component{
    constructor(props){
        super(props);
        this.props = props; 
        this.state = {
            sliderlist:[],
            bool:false
        };
    };



    sliderlistChange(arr) {
        if(arr==[]){
            return
        }
        let sliderHtml = arr.map((item,index)=>{
            /*console.log(item);*/

            return <li key={index}>
            <p><span> {item.name}</span><i className="fa fa-angle-down" aria-hidden="true"
                        onClick={
                      this.props.toggleNav2.bind(this)
                    }
                    ></i></p>

                      <Hslider2 obj={item}></Hslider2>

                       
                   </li>;

        })
        return sliderHtml ;

    }



    getInfo(){
        React.axios.get('./data/hslider.json')
        .then((res)=>{
            console.log(res.data.data)
            this.setState({
                sliderlist:this.state.sliderlist.concat(res.data.data)  
            })
            // console.log(this.state.sliderlist)
         
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    render(){
        return(
            <div style={{"display":this.props.isShowNav?'block':'none'}}>
                <ul className="slider"> 

                    <div className="search">
                        <input placeholder="搜索商品、 分类 、功效"/>   
                        <span onClick={
                      this.props.toggleNav.bind(this)
                    }>返回</span>           
                    </div>

                     {this.sliderlistChange(this.state.sliderlist)}
                  
                </ul>

               
                    <div className="mask"></div>
            </div>
            
        )
    }

    componentDidMount(){
        this.getInfo()
    }
}


export default connect((state)=>{
    console.log(state)
    return state
},(dispatch)=>{
    return {
        onIncreaseClick() {
            dispatch("increaseAction")
        },
        toggleNav(){
          console.log(this)
          dispatch({
              type:"toggleNav",
              isShowNav:!this.props.isShowNav
          })
       },

       toggleNav2(arr){
          console.log(arr)
          dispatch({
              type:"toggleNav2",
              isShowNav2:!this.props.isShowNav2
          })
       }

    }
}) (Hslider);



// {title:'面部护肤',path:'tab-online'},{title:'彩妆',path:'tab-preshow'},{title:'身体护肤',path:'tab-online'},{title:'香水',path:'tab-preshow'},{title:'男士护理',path:'tab-online'},{title:'套装礼盒',path:'tab-preshow'}



//   http://localhost:12345

                // <transition
                //     enter-active-class="animated fadeIn"
                //     leave-active-class="animated fadeOut"
                // >
                //     <div className="mask"></div>
                // </transition>


   
 
// <ul className="slider2">
//     let sliderHtml2 = item.sub_categories.map((item,index)=>{
//     <li key={index}>{item.name} </li>}
// </ul>  



// sliderlistChange2(arr) {
//          let sliderHtml2 = arr.map((item2,index2)=>{
//             // console.log(item);

//             return <li key={index2}>{item2.name}
                        
//                    </li>;

//         })
//         return sliderHtml2 ;   
//     }

 // <img src={item.image_url_set.dx_image.url[320]} alt="" /> 