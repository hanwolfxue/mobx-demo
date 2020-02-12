import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false;
        }
    }

    render() {
        console.log('child render')
        return <li onClick={this.deleteItem}>{this.props.content}</li>
    }

    deleteItem() {
        const { handleItemDelete, index } = this.props
        handleItemDelete(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleItemDelete: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem