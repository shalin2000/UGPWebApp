import React, {Component} from 'react';

import {Card, Table, Image, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class DisplayComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/postgressApp/employeeList")
            .then(response => response.data)
            .then((data) => {
                this.setState({books: data});
            });
    }

    render() {
        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        console.log(this.state.books)

        return (
            <div className="displayComment">
                {
                this.state.books.map((book) => (
                    <p style={{borderBottom: '2px solid black'}} key={book.id}>
                        <h2>{book.userName} <small style={{fontSize: '15px'}}><i>Posted on {date} </i></small></h2>
                        <p>{book.userComment}</p>
                        <button>Reply</button>
                    </p>
                ))
                }
            </div>
        );
    }
}

export default DisplayComment