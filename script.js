//Section for default code
const defaultText =
  `#### There are different heading styles:
# Heading 1
## Heading 2
### Heading 3

There are different styles for text:
- Normal text
- *italics text* \\\(use 1 asterisk)
- **bold text** \\\(use 2 asterisk)
- ***bold and italics text*** \\\(use 3 asterisk)
- ~~striketrew~~ strikethrough text \\\(use 1 tilde)
-<u>underlined text</u> \\\(use the opening and closing u tags)
- <mark>highlight text</mark> \\\(use the opening and closing mark tags)
- Superscript<sup>text</sup> \\\(use the opening and closing sup tags)
- Subscript<sub>text</sub> \\\(use the opening and closing sub tags)

You can also add definitions for words:
**First Term**
: This is the definition of the first term.
: This is another definition of the first term.

<br></br>
You can also add code text:
\`inline code\`

\`\`\`
//code block
\`\`\`

There are also different types of lists:
Bullet lists: \\\(use 1 dashed line)
  - item 1
  - item 2
  
Ordered lists:
 1. item 1
 2. item 2
    1. item 2a
    2. item 2b
 20. item 3
 
Check box lists:
- [x] item 1
- [ ] item 2
- [x] item 3
- [x] item 4

***

> Single Block Quote <br>

> Block Quote with multiple paragraphs like this
> > Nested Block Quote

<hr />

You can also add tables with different text-alignment:

|  Just  |   Like   |  This  |
|:----------|:-------------:|------:|
| col 1 | is | left-aligned |
| col 2 | is | centered |
| col 3 | is | right-aligned |

<br></br>

See more of my work: [Open CodePen](https://codepen.io/your-work)

![CodePen Logo](https://cdn.icon-icons.com/icons2/2699/PNG/512/codepen_logo_icon_169360.png)

`;

//React component
class MyReactComponent extends React.Component {
  constructor(props) {
    super(props);
    //Load initial state
    this.state = {
      input: defaultText
     //get the default code
    };
    this.codeChanges = this.codeChanges.bind(this); //pass the data as an argument to the function of a class based component
  }
  //To get the input field value
  codeChanges = (event) => {
    this.setState({
      input: event.target.value //retrieve the value of the event 
    });
  }
  //use render(), the React engine process walking through the virtual DOM and collecting the current state, props, structure, desired changes in the UI.
  render() {
    //If true, add <br> on a single line break (copies GitHub behavior on comments, but not on rendered markdown files). Requires gfm be true.
    let markdownPreview = marked(this.state.input, { breaks: true });
    //dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM.
    const buildMarkup = () => {
      return {
        __html: markdownPreview
      };
    }
    return (
      <div>
        <div className="row text-center headerElem">
          <h1>Markdown Previewer</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Editor</h3>
            <p>Replace the default text below and observe the output</p>
            <textarea id="editor" className="form-control p-1" value={this.state.input} onChange={this.codeChanges}>
              {defaultText
            }
            </textarea>
          </div>
          <div className="col-md-6">
            <h3>Preview</h3>
            <p>The text is rendered as HTML below</p>
            <div id="preview" className="" dangerouslySetInnerHTML={buildMarkup
        ()}>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
ReactDOM.render(<MyReactComponent />, document.getElementById('MarkdownPreviewer'))
