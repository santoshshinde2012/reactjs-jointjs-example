import React from 'react';
import { render } from 'react-dom';

import Dashboard from './dashboard';
import Footer from './footer';
import DynamicContainer from './dynamicContainer';

class App extends React.Component {
    render() {
        return (
            <div className='container-narrow wrapper'>
                <Dashboard />
                <DynamicContainer />
                <Footer />
            </div>
        );
    }
}

export default App;
