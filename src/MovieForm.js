import React, { Component } from 'react';

export default class MovieForm extends Component {
  state = {
    text: ''
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <form data-testid="movie-form">
        <label htmlFor="text">
          Text
          <input
            onChange={e => this.setState({ text: e.target.value })}
            type="text"
            id="text"
          />
        </label>

        <button onClick={() => submitForm({ text })}>Submit</button>
      </form>
    );
  }
}
