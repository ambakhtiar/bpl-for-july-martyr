import "./AvailablePlayers.css";

const AvailablePlayers = ({ selectedPlayer }) => {
    const selectedPlayerLength = selectedPlayer.length;
    return (
        <div className="sticky top-14 bg-[rgb(245,243,243)/80] backdrop-blur-sm z-40 shadow-sm flex justify-between my-4">
            <h2 className='text-lg md:text-3xl font-bold'>Available Player</h2>
            <div className="border border-black rounded-lg md:rounded-xl flex">
                <button className="text-sm md:text-xl px-2 py-1 md:px-4 md:py-2 font-semibold rounded-lg md:rounded-xl md:rounded-l-xl active">Available</button>
                <button className="text-sm md:text-xl px-2 py-1 md:px-4 md:py-2 font-semibold rounded-lg md:rounded-xl md:rounded-r-xl ">Selected (<span>{selectedPlayerLength}</span>)</button>
            </div>
        </div>
    );
};

export default AvailablePlayers;