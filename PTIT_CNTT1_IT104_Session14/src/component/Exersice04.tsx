import { Component } from "react";

type State = {
  slogan: string;
};

class Exersice04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm",
    };
  }

  changeState = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!",
    });
  };

  shouldComponentUpdate(_: object, nextState: State) {
    return this.state.slogan !== nextState.slogan;
  }

  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Exersice04;
