import { Component } from "react";
import "../style/Exersice06.css";
type State = {
  gender: string;
  submittedGender: string;
};

class Exersice06 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submittedGender: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedGender: this.state.gender });
  };

  render() {
    const { gender, submittedGender } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <div className="gender-line">
            <strong>Giới tính:</strong>
            {submittedGender && <span className="gender-value">{submittedGender}</span>}
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
        </div>
        <button type="submit" className="submit-button2">
          Submit
        </button>
      </form>
    );
  }
}

export default Exersice06;
