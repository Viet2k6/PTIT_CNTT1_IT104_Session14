import { Component } from "react";
import "../style/Exersice05.css";
type State = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

class Exersice05 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 0,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product:", this.state);
  };

  render() {
    const { productCode, productName, price, quantity } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h2>Thêm sản phẩm mới</h2>
        <div className="form-group">
          <label>Mã sản phẩm:</label>
          <input
            type="text"
            name="productCode"
            value={productCode}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Số lượng:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Đăng ký
        </button>
      </form>
    );
  }
}

export default Exersice05;
