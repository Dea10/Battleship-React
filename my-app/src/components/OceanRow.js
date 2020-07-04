import React from 'react';
import OceanCell from './OceanCell';

const OceanRow = () => {

    const ocean_row = Array.from(Array(10).keys());

    return (
        <>
            <div className="board-row">
            {
                ocean_row.map((cell) => 
                    <OceanCell
                        key = { cell }
                        value = { cell }  
                    />
                )
            }
            </div>
        </>
    )
}

export default OceanRow;