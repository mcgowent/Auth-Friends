import React, { Component } from 'react';
import moment from 'moment';
import { axiosWithAuth } from '../utils/axiosWithAuth';



class NewFriendsForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    };
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddFriend = () => {
        const { name, age, email } = this.state;
        const pass = this.newFriend({ name, age, email })
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', pass)
            .then(res => {
                console.log('Am I getting a response from newfriend', res)
            })
            .catch(err => console.log('Am I getting a response from newfriend', err.response));

        this.setState({ name: '', age: '', email: '' });
    };

    newFriend = ({ name, age, email }) => {
        return ({
            id: moment(),
            name: name,
            age: age,
            email: email
        })
    }

    render() {
        return (
            <form className="Column-Layout">
                <input
                    className="input"
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.age}
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.email}
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddFriend()} type="button">
                    Add New Friend
        </button>
            </form>
        );
    }
}

export default NewFriendsForm;