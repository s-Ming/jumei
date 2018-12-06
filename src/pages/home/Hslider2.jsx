import React from "react";
import {connect} from "react-redux";

class Hslider2 extends React.Component{
    constructor(props){
        super(props);
        this.props = props; 
        this.state = {
            sliderlist:[],
            bool:false
        };
        /*console.log(this.props)*/
    };



    sliderlistChange(arr) {
        let sliderHtml2 = arr.map((item,index)=>{
           /* console.log(item);*/

            return   <li key={index}>{item.name} </li>


        })
        return sliderHtml2 ;
    }


    getInfo(){
        React.axios.get('./data/hslider.json')
        .then((res)=>{
            /*console.log(res.data.data)*/
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
            <div style={{"display":this.props.isShowNav2?"block":"none"}}>
                <ul className="slider2"> 

                     {this.sliderlistChange(this.props.obj.sub_categories)}
                  
                </ul>

            </div>
            
        )
    }

    componentDidMount(){
        this.getInfo()
    }
}


export default connect((state)=>{
    /*console.log(state)*/
    return state
},(dispatch)=>{
    return {
       
        toggleNav2(){
            console.log(this)
            dispatch({
                type:'toggleNav2',
                isShowNav2:!this.props.isShowNav2
                
            })
        }
    }
 })   (Hslider2);



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