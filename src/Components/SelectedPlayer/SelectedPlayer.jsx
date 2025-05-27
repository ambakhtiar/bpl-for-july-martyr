const SelectedPlayer = ({ player, handleRemovePlayer }) => {
    const { img, name, role } = player;
    return (
        <div className="flex justify-between items-center p-4 border rounded-xl gap-8">
            <div className="flex gap-4">
                <img className="w-14 h-14 object-cover rounded-lg" src={img} alt="" />
                <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-500">{role}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemovePlayer(player)} >Remove</button>
            </div>
        </div>
    );
};

export default SelectedPlayer;