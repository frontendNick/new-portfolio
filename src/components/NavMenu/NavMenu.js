import React, { useState } from 'react'

//  styles
import './NavMenu.css'

//  views
import ListItem from "../../views/ListItem/ListItem";
import Button from "../../views/Bottom/Button";

export default props => {

    const [ menuItems, setMenuItems ] = useState([
        {name: 'Меню'},
        {name: 'Проекты'},
        {name: 'Мастерская'},
    ])

    const [ button, setButton ] = useState('')

    function toggleMenuItems(){
        setButton( () => {
            console.log('work')
            if ( button === ''){
                return 'activate'
            } else {
                return ''
            }
        } )
    }

    return (
        <div className={`sidebar ${button}`}>
            <Button
                toggleMenu = { () => toggleMenuItems }
            />
            <ul>
                {menuItems.map( (item, index) => {
                    return (
                        <ListItem
                            name={item.name}
                            key={index}
                        />
                    )
                } )}
            </ul>

        </div>
    )
}
