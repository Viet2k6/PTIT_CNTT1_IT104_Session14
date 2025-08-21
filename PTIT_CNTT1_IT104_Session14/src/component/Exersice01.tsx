import { Component } from "react";
type State = {
  userName: string;
};

class Exersice01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: "Trần Đăng Việt", 
    };
  }

  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.userName}</p>
      </div>
    );
  }
}

export default Exersice01;

