import { Component } from "react";

class Notification extends Component<object, object> {
  constructor(props: object) {
    super(props);
  }

  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return null;
  }
}

export default Notification;
