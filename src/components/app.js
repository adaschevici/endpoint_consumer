import React from 'react';
import { Component } from 'react';


const App = (props) => {
  return (
      <div className="row">
        {props.children}
      </div>
  );
};

export default App;
