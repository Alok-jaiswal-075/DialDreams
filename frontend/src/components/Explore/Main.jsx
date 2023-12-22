import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Mobiles from "./Mobiles";

const Explore = () => {
    const [mobiles, setMobiles] = useState([]);
    const [filteredMobiles, setFilteredMobiles] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [filterBox, setFilterBox] = useState(false);

    const getNewArrivals = () => {
        fetch('/api/general/all-mobiles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMobiles(data.mobiles);
                setFilteredMobiles(data.mobiles);
                setisloading(false);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        getNewArrivals();
    }, []);

    const handleFilterChange = (filteredData) => {
        setFilteredMobiles(filteredData);
    };

    const handleFilterBox = () => {
        setFilterBox(!filterBox);
    };

    return (
        <>
            <Filter
                filterBox={filterBox}
                handleFilterBox={handleFilterBox}
                handleFilterChange={handleFilterChange}
                mobiles={mobiles}
            />
            <Mobiles mobiles={filteredMobiles} />
        </>
    );
};

export default Explore;
