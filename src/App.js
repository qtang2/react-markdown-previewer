import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor'
import Previewer from './components/Previewer';
import ToolBar from './components/ToolBar';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      markdown: initialText,
      editorMaximized: false,
      previewerMaximized:false
    }
  }

  updateMarkdown = markdown =>{
    this.setState({
      markdown
    })
  }

  handleEditorMaximized = () =>{
    this.setState({
      editorMaximized: !this.state.editorMaximized
    })
  }

  handlePreviewerMaximized = () =>{
    this.setState({
      previewerMaximized: !this.state.previewerMaximized
    })
  }

  render(){
    const classes = this.state.editorMaximized?
      ['editor-maximized','hide','fa fa-compress']:
      this.state.previewerMaximized?
      ['hide','previewer-maximized','fa fa-compress']:
      ['editor-container','previewer-container','fa fa-arrows-alt']
    let markdown = this.state.markdown
    return (
      <div>
      <div className="title-container">
        <h2>Welcome to the Markdow Previewer</h2>
        <p>Input your HTML in the Editor and see what happened in the Previewer</p>
      </div>
      
        <div className={classes[0]}>
          <ToolBar title="Editor" sizeControlIcon={classes[2]} onClick={this.handleEditorMaximized} />
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
        </div>

        <div className={classes[1]}>
          <ToolBar title="Previewer" sizeControlIcon={classes[2]} onClick={this.handlePreviewerMaximized} />
          <Previewer markdown={markdown} />
        </div>
        <label style={{display:'flex',justifyContent:"center"}}>© Qian Tang 2020</label>
      </div>
    );
  }
  
}

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
