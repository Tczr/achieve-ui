import React,{Component} from "react";

class Task extends Component{
    task;
    
    constructor(props){
        super(props);
        this.task = props.task;
    }
    render(){
        return(

            <div className={(this.task.completed) ? 'task done' : 'task'} >
                <div onClick={this.props.markComplete.bind(this, this.task.id)}>
                    <p className="taskHeader " >{this.task.title}</p>
                    <p>{this.task.date}</p>
                </div>
                
                <div>
                    <button onClick={this.props.delete.bind(this, this.task.id)} > delete </button>
                </div>
            </div>
            
        );
    }
}
export default Task;