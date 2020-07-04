import React from 'react';
import OceanCell from './OceanCell';

const Ocean = () => {

    const ocean_row = Array(10).fill(<OceanCell />);

    return (
        <>
            <p>Ocean</p>

            <div className="board-row">
            {
                ocean_row
            }
            </div>
            
        </>
    )
}

export default Ocean;