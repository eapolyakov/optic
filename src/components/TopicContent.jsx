import React from "react";

class TopicContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={content: ""}
    }
    componentDidMount() {
        let endPath = window.location.pathname.split("/")[2];
        endPath = decodeURI(endPath);
        endPath = endPath.replaceAll("№", "#").replaceAll("_", " ");
            this.props.getTopic(endPath).then(
                topic => {
                    this.setState({content: topic.description})
                }
            )
        }
    render() {
        return <div>{this.state.content}</div>
    }
}

export default TopicContent;
