import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }
    handleChange = function(e){
        this.setState({content: e.target.value});
    }
    handleSubmit = function(e){
        e.preventDefault();
        this.props.addTodo(this.state.content);
        this.setState({content: ''});
    }
    render() {
        return (
            <div className={"todo input"}>
                <input type="checkbox" className="hidden" />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.content}
                    onChange={this.handleChange.bind(this)} 
                    placeholder="Input something!" />
                </form>
            </div>
        );
    }
}

export default TodoInput;
