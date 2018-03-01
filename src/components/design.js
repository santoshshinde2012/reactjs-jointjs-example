import React from 'react';

import Dashboard from '../containers/dashboard';
import Footer from '../containers/footer';
import Menu from './menu';
import Playground from './playground';

class Design extends React.Component {

    render() {
        return (
            <div>
                <Dashboard />
                <div className="row">
                    <div className="col-md-2">
                        <Menu url={
                          [
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
                        }pollInterval={2000} />
                    </div>
                    <div className="col-md-10">
                        <Playground />
                    </div>
                </div>
            </div>
        );
    }
}

export default Design;
