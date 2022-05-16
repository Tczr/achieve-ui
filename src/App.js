import {Component} from "react";
import Tasks from "./component/Tasks";

class App extends Component{ 

    state={
        tasks:[
            {
                id:1,
                title:'Task number#1',
                date:'2022-04-1',
                reminder:true,
                completed: false
            },
            {
                id:2,
                title:'Task number#2',
                date:'2022-04-1',
                reminder:true,
                completed: false
            },
            {
                id:3,
                title:'Task number #3',
                date:'2022-04-1',
                reminder:true,
                completed: false
            },
            {
                id:4,
                title:'Task number #4',
                date:'2022-04-1',
                reminder:true,
                completed: true
            },
        ]
    }
    completed = (id) =>{
        this.setState(
            {
                tasks: this.state.tasks.map
                (
                    task=> 
                    {
                        if(task.id === id ) task.completed = ! task.completed  
                        return task;
                    }
                
                )
            }
        );
    }
    render(){
        return( 
            <div className="container">
                <h1 className="header">Todo</h1>
                <Tasks tasks={this.state.tasks} markComplete={this.completed}/>
                
            </div>
        ); 
    }
     
}
export default App;