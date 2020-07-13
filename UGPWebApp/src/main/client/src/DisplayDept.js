import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayDept.css';
import ListDept from './ListDept';
import Header from './Header';
import Footer from './Footer';

class DisplayDept extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="App">

        < Header />

        <div className="secHeader"><h2>Check Your Department</h2></div>
        <ListDept />
  
        <Footer />

      </div>
    );
  }
}
export default DisplayDept;