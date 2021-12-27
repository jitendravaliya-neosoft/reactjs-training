import React,{Component} from 'react';
class Home extends Component{

    render(){
        return(
            <>
                <h2> {this.props.mytitle}</h2>
                <ul>
                    {this.props.mycourses.map((val,index)=>
                        <li key={index}> {val} </li>
                    )}
                </ul>
            </>
        )
    }
}
export default Home;