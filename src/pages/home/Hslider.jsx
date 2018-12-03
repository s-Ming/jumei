import React from "react";
import Hsearch from './Hsearch.jsx';

class Hslider extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
    };
    render(){
        return(
            <Hsearch></Hsearch>
             <ul v-show='show'>
                <li 
                v-for="(item,index) in navlist" 
                :key="index"
                @click='goPage(item.path)'
                >
                {{item.name}}
                    <!-- {{show}} -->
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                </li> 
            </ul>
            
        )
    }
}
export default Hslider;

