import React, { Component } from 'react';

class TodoFilterControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        
        this.props.changeFilter(e);
    }
    render() {
        return (
            <div className={"todo-filter"}>
                <span>{this.props.numItems} items left</span>
                <div className={'button ' + (this.props.display === 'All' ? ' clicked' : '' )}
                    value={'All'}
                    onClick={() => this.handleClick('All')}>All</div>
                <div className={'button ' + (this.props.display === 'Active' ? ' clicked' : '' )}
                    value={'Active'}
                    onClick={() => this.handleClick('Active')}>Active</div>
                <div className={'button ' + (this.props.display === 'Completed' ? ' clicked' : '' )}
                    value={'Completed'}
                    onClick={() => this.handleClick('Completed')}>Completed</div>
            </div>
        );
    }
}

export default TodoFilterControl;
