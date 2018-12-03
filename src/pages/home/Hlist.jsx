import React from "react";
class Hlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
    };
    render(){
        return(
         <div class="movie_nav">
            <ul>
                <li
                    v-for="(item,index) in navlist" 
                    :key="index"
                    @click="toggle(item.path)"
                    :class='selInit==item.path?"sel":""'
                    >
                    {{item.title}}
                </li>
            </ul>
        </div>
        )
    }
}
export default Hlist;

