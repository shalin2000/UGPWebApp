import React, { Component } from 'react';
import './DisplayDept.css'

import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
//import MyToast from './MyToast';
import axios from 'axios';
import DisplayComment from './DisplayComment';

class CommentProf extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        name:'', comment:'',
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    submitBook = event => {
        event.preventDefault();

        const book = {
            userName: this.state.name,
            userComment: this.state.comment,
        };

        axios.post("http://localhost:8080/postgressApp/createEmp", book)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    window.location.reload();
                } else {
                    this.setState({"show":false});
                }
            });

        this.setState(this.initialState);

    }

    bookChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        const {name, comment,} = this.state;

        return (
            <div className="row">
                <div className="col-6 col-md-4">
                    <form onSubmit={this.submitBook}>
                        <input className="nameTag" type="text" name="name" required
                                value={name} onChange={this.bookChange}
                                placeholder="Enter Your Name"
                        />
                        <br />
                        <textarea className="commentTag" type="text" name="comment" required
                            value={comment} onChange={this.bookChange}
                            placeholder="Enter Your Comment"
                        >
                        </textarea>
                        <br />
                        <button>Comment</button>
                    </form>
                </div>

                <div className="col-12 col-md-8" style={{height: 500, overflowY:'auto'}}>
                    <DisplayComment />
                </div>
            </div>
        );
    }
}
    
export default CommentProf;
