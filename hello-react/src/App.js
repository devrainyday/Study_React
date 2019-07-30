import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

function App() {
  return (
      <Fragment>
        <div className="App">
          리액트
        </div>
        
        <MyName name="react"></MyName>

        <MyName></MyName>

        <Counter></Counter>
      </Fragment>
    );
}

export default App;
