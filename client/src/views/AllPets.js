import React, { useEffect, useState } from 'react';

import { Link } from '@reach/router';
import axios from 'axios';

const AllPets = (props) => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets')
            .then((res) => {
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style = {{ width: '50%', margin: '0 auto' }}>
            <h1>Pet Shelter</h1>
            <Link to = '/pets/new'>Add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <div key= { pets._id }>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    {pets.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0)).map((pet) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{ pet.name }</td>
                                    <td>{ pet.type }</td>
                                    <td>
                                        <Link to = {`/pets/${pet._id}`}>Details</Link>{" | "}
                                        <Link to = {`/pets/${pet._id}/edit`}>Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>
    )

};

export default AllPets;