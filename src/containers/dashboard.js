import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="header">
                <h1><Link to="/design">Demo App with React & JointJS</Link></h1>
                {this.props.children}
            </div>
        );
    }
}

export default Dashboard;
