import './List.css';
import React, {useState, useEffect} from "react"


function List() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listings')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setListings(data);
            })
    }, []);

    return (
        <ul>
            {listings.map(item => (
                <li key={item._id}>N:{item.N_value}; O:{item.O_value}; Cell:{item.Cell_value}</li>
            ))}
        </ul>
    );
}

export default List;
