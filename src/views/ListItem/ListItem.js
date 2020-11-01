import React from 'react'

//  styles
import './ListItem.css'

export default props => {

    return (
        <li className='ListItem'>
            {props.name}
        </li>
    )
}
