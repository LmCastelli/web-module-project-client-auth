import React, {useState} from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../axiosWithAuth";

const initialValues = {
    name:'',
    age:'',
    email:''
};

function AddFriendForm() {
    const [formValues, setFormValues] = useState(initialValues);
    const {push } = useHistory();
    const handleChange = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value});
    };

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', formValues)
            .then(resp=> {
                push('/friends')
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h3>add a friend</h3>

            <form onSubmit={submit}>
                <label>name</label>
                <input 
                    id="name" 
                    name="name" 
                    value={formValues.name} 
                    onChange={handleChange} 
                />
                <label>age</label>
                <input 
                    id="age" 
                    name="age" 
                    value={formValues.age} 
                    onChange={handleChange} 
                />
                <label>email</label>
                <input 
                    id="email" 
                    name="email" 
                    value={formValues.email} 
                    onChange={handleChange} 
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm