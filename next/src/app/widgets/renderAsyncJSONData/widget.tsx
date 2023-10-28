'use client';

import React, { useState, useEffect } from 'react';
// import styles from './page.module.css'

export default function RenderAsyncJSONData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('component renders');

    useEffect(() => {
        console.log('useEffect with no dependencies runs');

        async function fetchData() {
            console.log('fetching data starts');

            try {
                const response = await fetch('/data.json');
                const data = await response.json();

                if (!response.ok) {
                    const message = `${response.status}`;
                    throw new Error(message);
                }

                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ul>
            {data.map((item) => (
                <li key={item._id}>{item.name}</li>
            ))}
        </ul>
    );
}
