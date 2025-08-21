import { Component } from "react";
type State = {
  company: string;
}

class Exersice03 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      company: "Rikkei Academy",
    };
  }

  changeCompany = () => {
    this.setState({ company: "RikkeiSoft" });
  };

  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    );
  }
}

export default Exersice03;
