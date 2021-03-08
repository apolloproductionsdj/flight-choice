import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

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

    const list = airlines.map(airline => {
        return (<li key={airline.attributes.name}>{airline.attributes.name}</li>)
    })

    return (
        <Fragment>
            <div>
                This is the Airlines#index view for our app.
        </div>
            <ul>{list}</ul>
        </Fragment>
    )
}

export default Airlines;
