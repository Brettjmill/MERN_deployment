import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const PetDetail = (props) => {
    const [pet, setPet] = useState({});

    const deletePet = (petToDel) => {
        axios
            .delete('http://localhost:8000/api/pets/' + petToDel._id)
            .then((res) => {
                navigate('/');
                // const filteredPets = pets.filter((pet) => {
                //     return pet !== petToDel;
                // });
                
                // setPets(filteredPets);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets/" + props.id)
            .then((res) => {
                console.log(res);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    return (
        <div style = {{ width: '50%', margin: '0 auto' }}>
            <h1>Pet Shelter</h1>
            <Link to='/'>Back to Home</Link>
            <h3>Details about: {pet.name}</h3>
            <button onClick = {(event) => { deletePet(pet) }}>Adopt {pet.name}</button>
            <hr></hr>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills:</p>
            <ul>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
            </ul>
        </div>
    );
};

export default PetDetail;