import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const SelectedPlayerS = ({ selectedPlayer, handleRemovePlayer, handleActivePage }) => {
    return (
        <div>
            <div className="space-y-6">
                {
                    selectedPlayer.map(player => <SelectedPlayer player={player} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)
                }
            </div>
            <div>
                <button onClick={() => handleActivePage("Available-Page")} className="mt-6 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500">Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayerS;