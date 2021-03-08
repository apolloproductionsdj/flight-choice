import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Airline from './Airline';

function Airlines() {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        // get all airlines from api
        axios.get('/api/v1/airlines.json')
            .then(resp => {
                setAirlines(resp.data.data)
            })
            .catch(resp => console.log(resp))

        //update airlines in our state
    }, [airlines.length])

    const grid = airlines.map(airline => {
        return (
            <Airline
                key={airline.attributes.name}
                attributes={airline.attributes}
            />
        )
    })

    return (
        <div className="home">
            <div className="header">
                <h1>OpenFlights</h1>
                <div className="subheader">Honest, unbiased airline reviews.</div>
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Airlines;
