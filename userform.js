class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: null,
      phonenumber: null
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter your phone number:</p>
      <input
        type='text'
        name='phonenumber'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}