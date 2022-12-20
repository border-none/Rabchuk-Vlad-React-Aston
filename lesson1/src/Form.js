import React from 'react';
import Title from './Title';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      title: 'TITLE',
      mount: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.mountForm = this.mountForm.bind(this);
    this.unmountForm = this.unmountForm.bind(this);
  }

  // Different types of props
  arr = [1, 2, 3, 4, 5];
  obj = { name: 'alex', age: 26 };
  func(message) {
    alert(message);
  }

  // Methods
  onChange(e) {
    this.setState({ userInput: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    if (this.state.userInput !== '') {
      this.setState({ title: this.state.userInput });
      this.setState({ userInput: '' });
    }
  }

  // Life cycle methods
  componentDidMount() {
    console.log('Component Did Mount ✅');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevProps =', prevProps);
    console.log('prevState =', prevState);
    console.log('Component Did Update 🔁');
  }

  componentWillUnmount() {
    console.log('Component Unmounted ❌');
  }

  /*
  Не рендерить компонент если в userInput есть 2. ((не получилось))
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update???');
    console.log(`nextState`, nextState.userInput);
    console.log('STATE', this.state.userInput);
    if (this.state.userInput.includes('2')) {
      return false;
    } else {
      return true;
    }
  }
  */

  // Mount - unmount methods
  mountForm() {
    this.setState({ mount: true });
  }

  unmountForm() {
    this.setState({ mount: false });
  }

  // Render
  render() {
    console.log('Render');

    if (this.state.mount) {
      return (
        <div className="container__center">
          <Title
            title={this.state.title}
            array={this.arr}
            obj={this.obj}
            function={this.func}
          />
          <form action="">
            <input
              type="text"
              placeholder="type your title here..."
              value={this.state.userInput}
              onChange={this.onChange}
            />
            <button onClick={this.onClick}>CHANGE</button>
          </form>
          <button
            onClick={this.state.mount ? this.unmountForm : this.mountForm}
          >
            {this.state.mount ? 'HIDE' : 'SHOW'}
          </button>
        </div>
      );
    } else {
      return (
        <>
          <div className="container__center">
            <button
              onClick={this.state.mount ? this.unmountForm : this.mountForm}
            >
              {this.state.mount ? 'HIDE' : 'SHOW'}
            </button>
          </div>
        </>
      );
    }
  }
}

export default Form;
