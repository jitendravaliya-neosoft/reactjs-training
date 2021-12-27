import React,{Component} from 'react';
class List extends Component{

    render(){
        return(
            <>
              <h3> Lists</h3>
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
                   {this.props.empList.map((emp,index)=>
                   <tr key={emp.id}>
                       <td>{index+1}</td>
                       <td>{emp.name}</td>
                       <td>{emp.age}</td>
                       <td>{emp.salary}</td>
                   </tr>)}
                  </tbody>
              </table>
            </>
        )
    }
}
export default List;