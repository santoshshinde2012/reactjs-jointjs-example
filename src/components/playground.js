import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs/index';
import { connect } from 'react-redux'
import Shapes from '../jointjs-configuration/Shapes'

class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
    }

    getInitialState(){
        this.state = {
            lastPosition: 0
        };
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: 1500,
            height: 700,
            model: this.graph
        });
    }

    addNode(title) {

        var a1 = new joint.shapes.devs.Atomic({
            position: { x: 360, y: 360 },
            inPorts: [''],
            outPorts: ['']
        });

        this.graph.addCells([a1]);
    }


    render() {
        if (this.props.newNodes[0] != null) {
            this.addNode(this.props.newNodes[0]);
        }

        return (
            <div id="playground" ref="placeholder">
            </div>);
    }
}

function mapStateToProps(state) {
    if (state.newNodes.length == undefined)
        return {newNodes : []};
    else
        return { newNodes : [state.newNodes] };
}

export default connect(mapStateToProps)(Graph)
