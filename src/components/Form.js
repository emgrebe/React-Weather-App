import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="City..."></input>
        <input placeholder="Country..."></input>
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form;