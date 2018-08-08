import React from 'react';
import './app.css';
import Search from './Search';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     fetch("/api/stuff")
//       .then(res => res.json())
//       .then(user => this.setState({data: user.data}));

//     axios.get('/api/currentweather/11102')
//       .then(res => res.data)
//       .then(response => this.setState({
//         weather: response
//       }))
//   }

//   render() {
//     console.log(this.state, 'current state')
//     return (
//       <div>
//         {this.state.data ? (
//           <h1>Hello {this.state.data}</h1>
//         ) : (
//           <h1>Loading.. please wait!</h1>
//         )}
//         <img src={ReactImage} alt="react" />
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <header>
      <h1>
        Weather Finder
      </h1>
      <p>
        by Bruce Leong
      </p>
    </header>
    <div className="search-component">
      <h4>
        Get the latest weather in your area:&nbsp;
      </h4>
      <Search />
    </div>
  </div>
)

export default App;
