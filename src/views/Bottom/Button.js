import React from 'react'

//  styles
import './Button.css'

export default props => {

    return (
        <div
            className={`Button`}
            onClick={props.toggleMenu()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
