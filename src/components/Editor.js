import React from 'react'
import '../App.css'

function Editor(props) {
    return (
        <textarea id="editor" value={props.markdown} onChange={(event)=> props.updateMarkdown(event.target.value)}>
            {props.markdown}
        </textarea>
    )
}

export default Editor
