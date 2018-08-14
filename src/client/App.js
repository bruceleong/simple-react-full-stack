import React from 'react';
import './app.css';
import Search from './Search';

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
