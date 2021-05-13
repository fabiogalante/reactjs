import logo from './logo.svg';
import './App.css';
import {Component} from "react";


class App extends Component {
  state = {
    name: 'Fabio Galante',
    counter: 0
  };

  handleClick = () => { //sempre que precisar do this usar arrow function
    this.setState({name: 'Junior'})
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1})
  }


  render() {
    const {name, counter} = this.state; // ou const nome = this.state.name;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p onClick={this.handleClick}
            >
              {name} {counter}
            </p>
            <a onClick={this.handleAClick}
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <div>Olá mundo</div>
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
//   );
// }

export default App;
