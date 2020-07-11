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
            <ListDept letter = 'a'/>
          </div>
          
          <div className="col-sm-4">
            <h2>B</h2>
            <ListDept letter = 'b'/>
          </div>

          <div className="col-sm-4">
            <h2>C</h2>
            <ListDept letter = 'c'/>
          </div>

          <div className="col-sm-4">
            <h2>D</h2>
            <ListDept letter = 'd'/>
          </div>

          <div className="col-sm-4">
            <h2>E</h2>
            <ListDept letter = 'e'/>
          </div>

          <div className="col-sm-4">
            <h2>F</h2>
            <ListDept letter = 'f'/>
          </div>

          <div className="col-sm-4">
            <h2>G</h2>
            <ListDept letter = 'g'/>
          </div>

          <div className="col-sm-4">
            <h2>H</h2>
            <ListDept letter = 'h'/>
          </div>

          <div className="col-sm-4">
            <h2>I</h2>
            <ListDept letter = 'i'/>
          </div>

          <div className="col-sm-4">
            <h2>J</h2>
            <ListDept letter = 'j'/>
          </div>

          <div className="col-sm-4">
            <h2>K</h2>
            <ListDept letter = 'k'/>
          </div>

          <div className="col-sm-4">
            <h2>L</h2>
            <ListDept letter = 'l'/>
          </div>

          <div className="col-sm-4">
            <h2>M</h2>
            <ListDept letter = 'm'/>
          </div>

          <div className="col-sm-4">
            <h2>N</h2>
            <ListDept letter = 'n'/>
          </div>

          <div className="col-sm-4">
            <h2>O</h2>
            <ListDept letter = 'o'/>
          </div>

          <div className="col-sm-4">
            <h2>P</h2>
            <ListDept letter = 'p'/>
          </div>

          <div className="col-sm-4">
            <h2>R</h2>
            <ListDept letter = 'r'/>
          </div>

          <div className="col-sm-4">
            <h2>S</h2>
            <ListDept letter = 's'/>
          </div>

          <div className="col-sm-4">
            <h2>T</h2>
            <ListDept letter = 't'/>
          </div>

          <div className="col-sm-4">
            <h2>U</h2>
            <ListDept letter = 'u'/>
          </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}
export default DisplayDept;