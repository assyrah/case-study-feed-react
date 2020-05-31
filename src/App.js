import React, { Component } from 'react';
import data from './data/data.json'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/main.scss'
import List from './components/List'
import Details from './components/Details'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path='/' component={(props) => <List {...props} posts={this.state.data} />}/>
          <Route path='/details' component={Details} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
