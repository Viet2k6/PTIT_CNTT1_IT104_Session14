import { Component } from "react";
import "../style/Exersice08.css";

type State = {
  email: string;
  password: string;
  message: string;
};

class Exersice08 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ message: "Email và Mật khẩu không được để trống" });
      return;
    }

    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        this.setState({ message: "Đăng nhập thành công" });
      } else {
        this.setState({ message: "Đăng nhập thất bại" });
      }
    } 
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h2>Đăng nhập tài khoản</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Đăng nhập</button>
        {message && <p className="message">{message}</p>}
      </form>
    );
  }
}

export default Exersice08;
