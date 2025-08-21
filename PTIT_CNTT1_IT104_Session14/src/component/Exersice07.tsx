import { Component, createRef } from "react";
import "../style/Exersice07.css";
type State = {
  name: string;
  email: string;
  password: string;
  phone: string;
  successMessage: string;
  emailList: string[];
};

class Exersice07 extends Component<object, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      successMessage: "",
      emailList: [],
    };
  }

  componentDidMount() {
    const storedEmails = localStorage.getItem("registeredEmails");
    if (storedEmails) {
      this.setState({ emailList: JSON.parse(storedEmails) });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, phone, emailList } = this.state;
    if (!name || !email || !password) {
      this.setState({ successMessage: "Tên sinh viên, Email và Mật khẩu không được để trống" });
      return;
    }

    if (emailList.includes(email)) {
      this.setState({ successMessage: "Email không được phép trùng" });
      return;
    }

    const newUser = { name, email, password, phone };
    localStorage.setItem("userData", JSON.stringify(newUser));
    const updatedEmailList = [...emailList, email];
    localStorage.setItem("registeredEmails", JSON.stringify(updatedEmailList));
    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
      successMessage: "Đăng ký tài khoản thành công",
      emailList: updatedEmailList,
    });
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    const { name, email, password, phone, successMessage } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h2>Đăng ký tài khoản</h2>
        <div className="form-group">
          <label>Tên sinh viên:</label>
          <input
            type="text"
            name="name"
            value={name}
            ref={this.nameInputRef}
            onChange={this.handleChange}
          />
        </div>
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
        <div className="form-group">
          <label>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Đăng ký</button>
        {successMessage && <p className="message">{successMessage}</p>}
      </form>
    );
  }
}

export default Exersice07;
