import React, { useState } from 'react';
import Ocean from './Ocean';

const GameBoard = () => {

    const [userTurn, setUserTurn] = useState(true);
    const [guestTurn, setGuestTurn] = useState(false);
    const [userDeploy, setUserDeploy] = useState(false);
    const [guestDeploy, setGuestDeploy] = useState(false);

    const [deployedShips, setDeployedShips] = useState(0);

    const [gameStatus, setGameStatus] = useState('init');

    const handleDeploy = () => {
        // setDeploy(true);
        setGameStatus('deploying');
    }

    const handleDeployPC = () => {
        setGuestDeploy(true);
    }


    const handleOceanOnClick = () => {
        setDeployedShips(deployedShips + 1);
        if (deployedShips === 5) {
            // setGuestDeploy(false);
            setGameStatus('playing')
        }
    }

    return (
        <>
            <h2>Game board</h2>

            <h3>Game menú</h3>
            <button onClick={ handleDeploy }>Start deploy</button>
            <button onClick={ handleDeployPC }>Deploy PC</button>
            <p>Game status: {gameStatus}</p>
            <p>Deployed ships: {deployedShips}</p>

            <div onClick={handleOceanOnClick}>
                <h3>User field</h3>
                <Ocean 
                    gameStatus={ gameStatus }
                    randomDeploy = { false }
                />
            </div>

            <div>
                <h3>Guest field</h3>
                <Ocean 
                    randomDeploy = { guestDeploy }
                />
            </div>



        </>
    )
}

export default GameBoard;