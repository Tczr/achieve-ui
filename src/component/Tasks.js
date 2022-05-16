import {Component} from "react";
import Task from './Task';

class Tasks extends Component{
    
    constructor(props){
        super(props);
        this.props=props;
     
    } 

    render(){
        
        return this.props.tasks.map((task)=>(
            <Task key={task.id} task={task} markComplete={this.props.markComplete}/>
           
        ));
    }
}
export default Tasks;