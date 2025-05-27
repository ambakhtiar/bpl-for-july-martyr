import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";


const SelectedPlayerS = ({ selectedPlayer, handleRemovePlayer }) => {
    return (
        <div className="space-y-6">
            {
                selectedPlayer.map(player => <SelectedPlayer player={player} handleRemovePlayer={handleRemovePlayer}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayerS;