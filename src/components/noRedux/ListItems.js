import React from 'react'
import ListItem from './ListItem'

export default (props) => {

    return props.todos.map((todo) => (
        <ListItem 
            todo={todo} 
            key={todo.id} 
            markComplete={props.markComplete}
        >
        </ListItem>
    ));
    
}
