import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      title: 'TITLE',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ userInput: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ title: this.state.userInput });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ title: this.state.userInput });
  }

  render() {
    return (
      <div className="container__center">
        <h1>{this.state.title}</h1>
        <form action="">
          <input
            type="text"
            placeholder="type your title here..."
            value={this.state.userInput}
            onChange={this.onChange}
          />
          <button onClick={this.onClick} onSubmit={this.onSubmit}>
            CHANGE
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
