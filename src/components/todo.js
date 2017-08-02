import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    toggle = (e) => {
        this.props.toggle(this.props.id);
        console.log('todo is toggling: ' + this.props.id);
        // this.setState({ completed: !this.state.completed });
    }
    del = (e) => {
        this.props.del(this.props.id);
    }
    render() {
        return (
            <div className={"todo " + (this.props.completed ? 'completed' : '')}>
                <input className="todo-toggle" type="checkbox" checked={this.props.completed} onChange={this.toggle}></input>
                <label>{this.props.content}</label>
                <div className='button delete' onClick={this.del}>Delete</div>
            </div>
        );
    }
}

export default Todo;
