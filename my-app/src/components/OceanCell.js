import React from 'react';

const OceanCell = (props) => {

    return (
        <>
            <button className='ocean-cell'>{ props.value }</button>
        </>
    )
}

export default OceanCell;