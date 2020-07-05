import React, { useState } from 'react';

const OceanCell = ({ gameStatus = 'playing' , deployShip }) => {

    const [cellStatus, setCellStatus] = useState(deployShip);

    const handleClick = () => {
        switch (gameStatus) {
            case 'deploying':
                setCellStatus('@');        
                break;

            case 'playing':
                setCellStatus('X');
                break;
        
            default:
                break;
        }
        
    }

    return (
        <>
            <button className='ocean-cell' onClick={handleClick} >{ deployShip }</button>
        </>
    )
}

export default OceanCell;