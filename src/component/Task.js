import { Component } from "react"

class Task extends Component{
    task;
    
    constructor(props){
        super(props);
        this.task = props.task;
    }
    render(){
        return(
            <div className={(this.task.completed) ? 'task done' : 'task'} onClick={this.props.markComplete.bind(this, this.task.id)}>

                <p className="taskHeader">{this.task.title}</p>
                <p>{this.task.date}</p>
                
            </div>
        );
    }
}
export default Task;