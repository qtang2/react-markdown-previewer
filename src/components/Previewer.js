import React from 'react'
import '../App.css';


let marked = require('marked');
marked.setOptions({
    breaks:true
})
function Previewer(props) {
    return (
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown)}}>
          </div>
    )
}

export default Previewer
