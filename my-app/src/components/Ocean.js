import React from 'react';
import OceanRow from './OceanRow';

const Ocean = () => {

    const ocean = Array.from(Array(10).keys());

    return (
        <>
            <p>Ocean</p>

            {
                ocean.map((cell) => 
                    <OceanRow
                        key = { cell }
                    />
                )
            }
            
        </>
    )
}

export default Ocean;