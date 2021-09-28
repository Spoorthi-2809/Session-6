import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const animals = ["Dog", "Cat", "Elephant"];
const listItems = animals.map((item) =>
  <li>
    {item}
  </li>
);
 
ReactDOM.render(
	<ul>{listItems}</ul>,
	document.getElementById('main'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
