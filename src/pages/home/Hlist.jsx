import React from "react";
class Hlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
            homelist:[]
        }
    }


    getInfo(){
        React.axios.get()
        .then((res)=>{
            this.setState({
                homelist:res.data.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
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
                    {this.hslistChange(this.state.homelist)}
                </ul>
            </div>
        )
    }
}
export default Hlist;

