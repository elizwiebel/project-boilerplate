'use client';

import React, { useState } from 'react';
import styles from './widget.module.css';

export default function RenderInputOnChange() {
    const [inputText, setInputText] = useState(null);

    console.log('component renders');

    return (
        <div className={styles.wrapper}>
            <label>
                Input:{' '}
                <input
                    type='text'
                    onChange={(e) => setInputText(e.target.value)}
                />
            </label>
            <div>{inputText ?? 'Text will appear here'}</div>
        </div>
    );
}
