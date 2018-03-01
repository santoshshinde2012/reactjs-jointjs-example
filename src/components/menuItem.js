import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import {addComponent} from '../actions/index'

class MenuItem extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#" onClick={this.props.generateEvent}>{this.props.label}</a>
        );
    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch, props) {
    return {
        generateEvent : function() {
            dispatch(addComponent(props.label));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)
