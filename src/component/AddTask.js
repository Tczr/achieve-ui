import React, {Component, useState }  from "react";

class AddTask extends Component { 
   
    state = {
        title : '',
        date : new Date().toDateString(),
        reminder : false,
    }
    
    
    setTitle({target}){
        this.setState({title:target.value})
    }

    setReminder({target}){
        this.setState({reminder: target.checked})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.date, this.state.reminder );
    
        this.state={
            title: '',
            date: new Date().toDateString(),
            reminder: false,
        };
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="formControl">
                    <label>Add Task</label>
                    <input id="task" type="text" name="text" placeholder="Add a task"                    
                    value={this.state.title} onChange={this.setTitle.bind(this)}
                    />
                </div>
                
                <div className="formControl">
                    <label >set reminder</label>
                    {' '}
                    <input id="reminde" type="checkbox" name="reminde"
                        checked={this.state.reminder} onChange={this.setReminder.bind(this)}
                    />
                </div>

                <input className="btn btn-black" type="submit" value="add" />
            </form>
        )
    }
}
export default AddTask;