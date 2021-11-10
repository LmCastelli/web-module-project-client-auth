import React from 'react';
import axiosWithAuth from '../axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        console.log('hi')
        axiosWithAuth()
        .get('/friends')
            .then(resp=> {
                console.log(resp)
                this.setState({
                    ...this.state,
                    friends: resp.data.data
                    
                })
            })
            .catch(err => {
                console.log(err);
            })

        console.log(this.state.friends)
    }

    render() {
        
        return (
            <div>
                <h1>FRIENDS</h1>
                {/* {friends.map(item => (
                    <div>
                        {item.name} is {item.age} years old
                    </div>
                ))} */}
            </div>
        )
    }
}

export default FriendsList;