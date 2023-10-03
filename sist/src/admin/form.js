import React, { Component } from 'react';
import './form.css'; 

class ProductRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variant: '',
      category: '',
      price: '',
      image: '',
      description: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted Data:');
    console.log('Variant:', this.state.variant);
    console.log('Category:', this.state.category);
    console.log('Price:', this.state.price);
    console.log('Image:', this.state.image);
    console.log('Description:', this.state.description);
  };

  render() {
    return (
        <div className='form-pad' style={{paddingTop:"80px"}}>
            <div className="product-registration-form">
                <h2>Pets For Sale</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="variant">Variant:</label>
                    <input
                    type="text"
                    id="variant"
                    name="variant"
                    value={this.state.variant}
                    onChange={this.handleInputChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                    type="text"
                    id="category"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    id="price"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input
                    type="url"
                    id="image"
                    name="image"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required
                    ></textarea>
                </div>

                <button type="submit">Register Product</button>
                </form>
            </div>
      </div>
    );
  }
}

export default ProductRegistrationForm;