import React from 'react';

class ShouldUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({ count: this.state.count + 1 });
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextState.count % 2 === 0) {
      console.log('SHOULD COMPONENT UPDATE???');
      console.log('YES ✅');
      return true;
    } else {
      console.log('SHOULD COMPONENT UPDATE???');
      console.log('NO ❌');
      return false;
    }
  }

  componentDidUpdate() {
    console.log('UPDATED 🔄');
  }

  render() {
    return (
      <div className="container__center">
        shouldComponentUpdate?
        <h2>RENDER ONLY EVEN NUMBERS</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.countUp}>+2</button>
      </div>
    );
  }
}

export default ShouldUpdate;
