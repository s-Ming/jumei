import React from "react";


class Hslider extends React.Component{
    constructor(props){
        super(props);
        this.props = props; 
        this.state = {
            sliderlist:[]
        };
    };




    sliderlistChange(arr) {
        let sliderHtml = arr.map((item,index)=>{
            console.log(item);
            return <li key={index}>{item.title}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>  
                   </li>;
        })
        return sliderHtml;
    }


     getInfo(){
        React.axios.get('http://localhost:12345')
        .then((res)=>{
            console.log(res)
            
         
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





                // <transition
                //     enter-active-class="animated fadeIn"
                //     leave-active-class="animated fadeOut"
                // >
                //     <div className="mask"></div>
                // </transition>


   
 // {this.sliderlistChange(this.state.sliderlist)}


// this.setState({
//                 sliderlist:res.data.name   })