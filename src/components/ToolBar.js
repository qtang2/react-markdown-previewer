import React from 'react'
import '../App.css';

function ToolBar(props) {
    return (
        <div className="tool-bar">
            {props.title}
            <i className={props.sizeControlIcon} onClick={props.onClick} />
        </div>
    )
}

export default ToolBar
