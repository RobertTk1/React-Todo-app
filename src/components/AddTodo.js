import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }

    uppdate = (e) => { this.setState({ title: e.target.value})

    }

    //To Submit a new item
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})

    }

    render() {
        return (
            <form onSubmit= { this.onSubmit} style={{ display: 'flex'}}>
                <input type="text" value= {this.state.title} name='title' onChange={this.uppdate} placeholder= 'Add Todo...' style={{flex: '10', padding: '5px'}}/>
                <input type="submit" value='Submit' className='btn' style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
