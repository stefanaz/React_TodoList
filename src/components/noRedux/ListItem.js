import React from 'react'

export default (props) => {


    const getStyles = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '15px',
            borderBottom: '1px #ccc dotted',
        }
    }

    const decorationStyles = () => {
        return {
            textDecoration: props.todo.done ? 'line-through' : 'none',
        }
    }

    const inlineStyle = () => {
        return {
            display: 'inline-block',
            padding: '0px 25px',
        }
    }



    return (
        <div  style={getStyles()}>
            <input 
                type="checkbox" 
                onChange={props.markComplete.bind(this, props.todo.id)} 
                name="done"
                checked={props.todo.done}
                style={inlineStyle()}
            />
            <p style={{...inlineStyle(), ...decorationStyles()}}>{props.todo.title}</p>
        </div>
    )
}




const itemStyle = {
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
}
