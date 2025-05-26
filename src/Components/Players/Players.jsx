import { useEffect, useState } from 'react';
import Player from '../Player/Player';


const Players = ({ handleSelectPlayer }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])
    return (
        <div className="mt-8">

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    players.map(player => <Player key={player.id} player={player} handleSelectPlayer={handleSelectPlayer}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;