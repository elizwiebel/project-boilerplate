'use client';

import styles from './widget.module.css';
import React, { useState, useEffect, useMemo } from 'react';

export default function Widget() {
    console.log('component starts');
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log('fetch starts');
            const response = await fetch('/data.json');
            const data = await response.json();

            setData(data);
        }

        fetchData();
    }, []);

    const filteredData = useMemo(() => {
        console.log('filter data');

        return data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, data]);

    return (
        <div className={styles.wrapper}>
            <h1>onInputChangeFilterRenderedData</h1>
            <input onChange={(e) => setQuery(e.target.value)}></input>
            {filteredData.length > 0 && (
                <ul>
                    {filteredData.map((item) => {
                        return <li key={item._id}>{item.name}</li>;
                    })}
                </ul>
            )}
        </div>
    );
}
