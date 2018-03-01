import React from 'react';
import ReactDOM from 'react-dom';

import MenuItem from './menuItem';

class MenuList extends React.Component{
    render() {
        var menuItems = this.props.data.map(function(menuItem) {
            return (
                <li role="presentation" key={menuItem.id}>
                    <MenuItem label={menuItem.componentName} />
                </li>
            );
        });
        return (
            <ul className="wrapper">
                {menuItems}
            </ul>
        )
    }
}

export default MenuList;
