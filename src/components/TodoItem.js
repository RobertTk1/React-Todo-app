import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() { 
        const {id, title} = this.props.todo

        const btnStyle = {
            background: 'red',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'

        } 

        return (
            <div style= {this.getStyle()} >
                <p>
                    <input type="checkbox" checked={this.props.todo.completed} onChange= {this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <button style= { btnStyle } onClick= {this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
