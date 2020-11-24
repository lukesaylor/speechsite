import React from 'react'
import './NavButton.css';

function NavButton(props) {
    return (
        <div className="NavButton">
            {props.children}
        </div>
    )
}

export default NavButton
