import React,{Component} from 'react';
class List extends Component{

    render(){
        return(
            <table>
                <thead>
                    <tr>
                    <th> S.No</th>
                    <th> Name</th>
                    <th> Age</th>
                    <th> Salary</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.postListing.map((abc,index)=>
                <tr key={abc.id}>
                    <td>{index+1}</td>
                    <td>{abc.postname}</td>
                    <td>{abc.postdescription}</td>
                    <td>{abc.author}</td>
                    <td>{abc.date}</td>
                </tr>)}
                </tbody>
            </table>
        )
    }

}
export default List;