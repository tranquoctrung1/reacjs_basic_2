import React ,{Component } from 'react';


class Accordion extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            isCollapsed: true
        }
        this.onClick = this.onClick.bind(this);
        this.tag = React.createRef();
    };

    onClick() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
        console.log(`${this.tag.current}`)
    }

    render() {
        const {heading, children} = this.props;
        const {isCollapsed} = this.state;
        return (
            <div className="Accordion">
                <div className="Heading" onClick={this.onClick} ref={this.tag}>
                    <h2>{heading}</h2>
                </div>
                {!isCollapsed && <div className="Content">{children}</div>}
            </div>
        )
    };
}

export default Accordion