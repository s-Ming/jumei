import React from "react";


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
        let sliderHtml = arr.map((item,index)=>{
            // console.log(item);

            return <li key={index}>{item.name}
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="slider2">
                            
                            <li key={index}>{item.name} </li>
                        </ul> 
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
            <div>
                <ul className="slider"> 

                    <div className="search">
                        <input placeholder="搜索商品、 分类 、功效"/>   
                        <span>返回</span>           
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
export default Hslider;


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