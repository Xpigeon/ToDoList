import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } =  this.props;
        return (        
            <div className="todoItem-items" onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;