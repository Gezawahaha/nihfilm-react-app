import React, {useEffect} from 'react';
import axios from 'axios';

const Database = () => {

    useEffect(() => {
        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
        console.log(res.data)
      })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Database;
