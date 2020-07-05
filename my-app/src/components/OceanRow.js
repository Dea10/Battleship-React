import React from 'react';
import OceanCell from './OceanCell';

const OceanRow = ({ gameStatus, shipsToDeploy }) => {

    let randomCell = Array(10).fill('');

    let auxArray = Array.from(Array(10).keys());

    if (shipsToDeploy !== 0) {

        let randomShipsPosition = shuffle(auxArray).slice(0, shipsToDeploy);

        for(let position in randomShipsPosition) {
            randomCell[randomShipsPosition[position]] = '@';
        }
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    return (
        <>
            <div className="board-row">
                {
                    randomCell.map((cell, index) =>
                        <OceanCell
                            key={index}
                            gameStatus={gameStatus}
                            deployShip={cell}
                        />
                    )
                }
            </div>
        </>
    )
}

export default OceanRow;