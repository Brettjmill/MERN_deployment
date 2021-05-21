import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditPet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets/' + props.id)
            .then((res) => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

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
            .put('http://localhost:8000/api/pets/' + props.id, newPet)
            .then((res) => {
                navigate('/pets/');
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
            <p>Edit {name}</p>
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
                        value = {name}
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
                        value = {type}
                    />
                </div>
                <div>
                    <label>Pet Description: </label>
                    {errors?.descrption && (
                        <span style={{ color: 'red' }}>{errors?.descrption?.message}</span>
                    )}
                    <input
                        onChange = {(event) => {
                            setDescription(event.target.value);
                        }}
                        type = 'text'
                        value = {description}
                    />
                </div>
                <div>
                    <label>Skill 1: </label>
                    <input
                        onChange = {(event) => {
                            setSkill1(event.target.value);
                        }}
                        type = 'text'
                        value = {skill1}
                    />
                </div>
                <div>
                    <label>Skill 2: </label>
                    <input
                        onChange = {(event) => {
                            setSkill2(event.target.value);
                        }}
                        type = 'text'
                        value = {skill2}
                    />
                </div>
                <div>
                    <label>Skill 3: </label>
                    <input
                        onChange = {(event) => {
                            setSkill3(event.target.value);
                        }}
                        type = 'text'
                        value = {skill3}
                    />
                </div>
                <button>Edit Pet</button>
            </form>
        </div>
    );
};

export default EditPet;