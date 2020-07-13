import React, { Component } from 'react';
import './DisplayDept.css';
import ListDept from './ListDept';
import Header from './Header';
import Footer from './Footer';

class DisplayDept extends Component {

  // when component mounts, it will scroll to top
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="App">

        < Header />

        <div className="secHeader"><h2>Check Your Department</h2></div>
        {/* calls the list dept which displays all the dept by UIC */}
        <ListDept />
  
        <Footer />

      </div>
    );
  }
}
export default DisplayDept;