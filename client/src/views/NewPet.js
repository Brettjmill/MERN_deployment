import React, { useState } from 'react';

import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NewPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        };

        axios
            .post('http://localhost:8000/api/pets', newPet)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div style = {{ width: '50%', margin: '0 auto' }}>
            <h1>Pet Shelter</h1>
            <Link to = '/'>Back to Home</Link>
            <p>Know a pet needing a home?</p>
            <form 
                onSubmit = {(event) => {
                    handleSubmit(event);
                }}
            >
                <div>
                    <label>Pet Name: </label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}>{errors?.name?.message}</span>
                    )}
                    <input
                        onChange = {(event) => {
                            setName(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <div>
                    <label>Pet Type: </label>
                    {errors?.type && (
                        <span style={{ color: 'red' }}>{errors?.type?.message}</span>
                    )}
                    <input
                        onChange = {(event) => {
                            setType(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <div>
                    <label>Pet Description: </label>
                    {errors?.description && (
                        <span style={{ color: 'red' }}>{errors?.description?.message}</span>
                    )}
                    <input
                        onChange = {(event) => {
                            setDescription(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <div>
                    <label>Skill 1: </label>
                    <input
                        onChange = {(event) => {
                            setSkill1(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <div>
                    <label>Skill 2: </label>
                    <input
                        onChange = {(event) => {
                            setSkill2(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <div>
                    <label>Skill 3: </label>
                    <input
                        onChange = {(event) => {
                            setSkill3(event.target.value);
                        }}
                        type = 'text'
                    />
                </div>
                <button>Add Pet</button>
            </form>
        </div>
    );
};

export default NewPet;