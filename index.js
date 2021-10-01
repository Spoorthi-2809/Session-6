import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

reportWebVitals();


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phonenumber: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let phonenumber = this.state.phonenumber;
    if (!Number(phonenumber)) {
      alert("Your phone number must be a number");
    }
    if(!Number == 10(phonenumber)) {
      alert("Your phone number should be 10 digits");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (!Number(val)) {
        alert("Your phone number must be a number");
      }
    if(!Number(val)) {
      alert("Your phone number should be 10 digits");
    }
      this.setState({[nam]: val});
    }
  render() {
    return (
      <form>
        <h1>User Form</h1>
        <p>Username:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
        <p>Email:</p>
        <input
        type="text"
        />
        <p>Phone Number:</p>
        <input
        type="text"
        onChange={this.myChangeHandler}
        />
        <br/>
        <br/>
        <input
        type="submit"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));