import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
      </div>
    )
  }
}
export default App;
