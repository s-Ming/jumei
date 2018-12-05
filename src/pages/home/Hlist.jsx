import React from "react";

class Hlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
            homelist:[{title:'面部护肤',path:'tab-online'},{title:'彩妆',path:'tab-preshow'},{title:'身体护肤',path:'tab-online'},{title:'香水',path:'tab-preshow'},{title:'男士护理',path:'tab-online'},{title:'套装礼盒',path:'tab-preshow'}]
        }
    }



    hlistChange(arr) {
        let hlistHtml = arr.map((item,index)=>{
            console.log(item);
            return <li key={index}>{item.title}</li>;
        })
        return hlistHtml;
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
