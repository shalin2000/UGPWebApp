import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DisplayDept.css';
import ListDept from './ListDept';
import Logo from './logoImage.png'
import Header from './Header';
import Footer from './Footer';

class DisplayDept extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    const someSpace = ' ... '
    return (
      <div className="App">

        < Header />
        {/* <header className="Header"> <img className="logo" src={Logo} alt="logo" />UIC GradePal</header> */}

        <div className="secHeader"><h2>Check Your Department</h2></div>
        <div className='Table1'>
        {/* Using bootstrap to generate a 3 col layout and printing all the DEPT by using the ImportCsvFile class */}
        <div class="row">
          <div className="col-sm-4">
            <h2>A</h2>
            <p><ListDept letter = 'a'/></p>
          </div>
          
          <div className="col-sm-4">
            <h2>B</h2>
            <p><ListDept letter = 'b'/></p>
          </div>

          <div className="col-sm-4">
            <h2>C</h2>
            <p><ListDept letter = 'c'/></p>
          </div>

          <div className="col-sm-4">
            <h2>D</h2>
            <p><ListDept letter = 'd'/></p>
          </div>

          <div className="col-sm-4">
            <h2>E</h2>
            <p><ListDept letter = 'e'/></p>
          </div>

          <div className="col-sm-4">
            <h2>F</h2>
            <p><ListDept letter = 'f'/></p>
          </div>

          <div className="col-sm-4">
            <h2>G</h2>
            <p><ListDept letter = 'g'/></p>
          </div>

          <div className="col-sm-4">
            <h2>H</h2>
            <p><ListDept letter = 'h'/></p>
          </div>

          <div className="col-sm-4">
            <h2>I</h2>
            <p><ListDept letter = 'i'/></p>
          </div>

          <div className="col-sm-4">
            <h2>J</h2>
            <p><ListDept letter = 'j'/></p>
          </div>

          <div className="col-sm-4">
            <h2>K</h2>
            <p><ListDept letter = 'k'/></p>
          </div>

          <div className="col-sm-4">
            <h2>L</h2>
            <p><ListDept letter = 'l'/></p>
          </div>

          <div className="col-sm-4">
            <h2>M</h2>
            <p><ListDept letter = 'm'/></p>
          </div>

          <div className="col-sm-4">
            <h2>N</h2>
            <p><ListDept letter = 'n'/></p>
          </div>

          <div className="col-sm-4">
            <h2>O</h2>
            <p><ListDept letter = 'o'/></p>
          </div>

          <div className="col-sm-4">
            <h2>P</h2>
            <p><ListDept letter = 'p'/></p>
          </div>

          <div className="col-sm-4">
            <h2>R</h2>
            <p><ListDept letter = 'r'/></p>
          </div>

          <div className="col-sm-4">
            <h2>S</h2>
            <p><ListDept letter = 's'/></p>
          </div>

          <div className="col-sm-4">
            <h2>T</h2>
            <p><ListDept letter = 't'/></p>
          </div>

          <div className="col-sm-4">
            <h2>U</h2>
            <p><ListDept letter = 'u'/></p>
          </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}
export default DisplayDept;