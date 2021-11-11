import axios from 'axios';
import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../axiosWithAuth';

function FriendsList (props)  {
    const [friends, setFriends] = useState([]);
  
    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>FRIENDS</h1>
            {friends.map((friend) => (
                <p key={friend.id}> {friend.name}</p>
            )
            )}
        </div>
        )
    }


export default FriendsList;