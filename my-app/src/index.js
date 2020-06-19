import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Daniel';
const element = <h1>Hello, {name}</h1>;

class OceanSquare extends React.Component {
    render() {
        return (
            <button className="ocean-square">

            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <OceanSquare />
        );
    }

    renderRow(i) {
        let squaresArray = [];
        for (let index = i; index < i + 10; index++) {
            squaresArray.push(this.renderSquare(index))
        }
        return squaresArray;
    }

    render() {
        return (
            <div>
                <div className="status"></div>
                <div className="board-row">
                    {this.renderRow(0)}
                </div>
                <div className="board-row">
                    {this.renderRow(10)}
                </div>
                <div className="board-row">
                    {this.renderRow(20)}
                </div>
                <div className="board-row">
                    {this.renderRow(30)}
                </div>
                <div className="board-row">
                    {this.renderRow(40)}
                </div>
                <div className="board-row">
                    {this.renderRow(50)}
                </div>
                <div className="board-row">
                    {this.renderRow(60)}
                </div>
                <div className="board-row">
                    {this.renderRow(70)}
                </div>
                <div className="board-row">
                    {this.renderRow(80)}
                </div>
                <div className="board-row">
                    {this.renderRow(90)}
                </div>
            </div>
        );
    }
}


class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-settings">
                    <Settings />
                </div>
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">

                </div>
            </div>
        );
    }
}

class Settings extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><button>Add Carrier</button></li>
                    <li><button>Add Battleship</button></li>
                    <li><button>Add Crusier</button></li>
                    <li><button>Add Submarine</button></li>
                    <li><button>Add Destroyer</button></li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);