import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MenuList from './menuList';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
              {
                  "id": 1,
                  "componentName": "Base"
              },
              {
                  "id": 2,
                  "componentName": "Red"
              },
              {
                  "id": 3,
                  "componentName": "Green"
              }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Menu</h1>
                <MenuList data={this.state.data} />
            </div>
        );
    }
}

export default Menu;
