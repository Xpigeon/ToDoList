import React from "react";
// import autobind from "autobind-decorator";
import TodoItem from "./TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div className="todoList-container">
                    <label className="todoList-title" htmlFor="insert">
                        Input you message: 
                    </label>
                    <input
                        id="insert"
                        className="todoList-input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button className="todoList-button" onClick={this.handleBtnClick}>
                        submit
                    </button>
                </div>
                <div className="todoList-description">
                    Below is the information you added. Click to Delete !
                </div>
                <ul>
                    {this.getTodoItem()}
                    
                </ul>
            </React.Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    key={index}
                    content={item} 
                    index={index}
                    deleteItem={this.handleItemDelete}
                    />
            )
        })
    }

    handleInputChange(e){
        const currentValue = e.target.value;
        this.setState(() => ({ inputValue: currentValue }));
    }

    handleBtnClick(){
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index){
        // immutable
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoList;