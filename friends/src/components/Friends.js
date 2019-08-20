import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
                console.log('This is inside getData PURE DATA', res.data)
                console.log('This is it set to State', this.state)
            })
            .catch(err => console.log('This is inside the 404 error on getData', err.response));
    };


    render() {
        return (
            <div className="gas-prices">
                <h1>Look it Rendered</h1>
                {this.props.fetchingData && (
                    <div className="key spinner">
                        <Loader type="Puff" color="#204963" height="60" width="60" />
                        <p>Loading Data</p>
                    </div>
                )}
                {this.state.friends.map(e => {
                    return (
                        <div>
                            <p> {e.name}</p>
                            <p> {e.age}</p>
                            <p> {e.email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Friends;
