import React, {Component} from 'react';
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

        const byProf = this.state.books.filter(x => x.profName === (this.props.chosenCourseAndProf.name1)); 

        return (
            <div className="displayComment">
                {
                byProf.map((book) => (
                    <div style={{borderBottom: '2px solid black'}} key={book.id}>
                        <h2> Anon <small style={{fontSize: '15px'}}><i>Posted on {date} </i></small></h2>
                        <p>easiness: {book.easinessRating} helpfulness: {book.helpfulnessRating} clarity: {book.clarityRating} workload: {book.workloadRating} grading: {book.gradingRating}</p>
                        <p>{book.userComment}</p>
                        <button>Reply</button>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default DisplayComment