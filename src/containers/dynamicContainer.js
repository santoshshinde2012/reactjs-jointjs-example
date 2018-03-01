import React from 'react';

class DynamicContainer extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Example for combining react.js with JointJS</h1>
          <h2>built with :</h2>
          <ul>
              <li>React</li>
              <li>JSX</li>
              <li>Redux</li>
              <li>React-router</li>
              <li>jQuery</li>
              <li>JointJS</li>
          </ul>
        <p><a className="btn btn-primary btn-lg" target="_blank" href="https://stackoverflow.com/questions/49043429/how-to-use-jointjs-with-reactjs/49043543#49043543">Learn more</a></p>
      </div>
    );
  }
}

export default DynamicContainer;
