import React from 'react';
import OceanRow from './OceanRow';

const Ocean = ({ gameStatus, randomDeploy }) => {

    const ocean = Array.from(Array(10).keys());

    let randomRows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    if (randomDeploy) {
        let i = 0;
        while (i < 9 && (randomRows.reduce(reducer) <= 5)) {
            randomRows[i] = Math.floor(Math.random() * Math.floor(6 - randomRows.reduce(reducer)));
            i++;
        }

        if (randomRows.reduce(reducer) < 5) {
            randomRows = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
        }
    }

    return (
        <>

            {
                randomRows.map((cell, index) => {
                    return (
                        <OceanRow
                            key={index}
                            gameStatus={gameStatus}
                            shipsToDeploy={cell}
                        />
                    )
                }
                )
            }

        </>
    )
}

export default Ocean;