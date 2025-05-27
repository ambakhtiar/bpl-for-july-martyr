const AvailablePlayers = ({ selectedPlayer, handleActivePage, activePage }) => {

    const selectedPlayerLength = selectedPlayer.length;
    console.log(activePage);
    let activePageTitle;
    if (activePage === "Available-Page") {
        activePageTitle = "Available Player";
    } else {
        activePageTitle = `Selected Player (${selectedPlayerLength}/6)`;
    }

    return (
        <div className="sticky top-14 bg-[rgb(245,243,243)/80] backdrop-blur-sm z-40 shadow-sm flex justify-between my-4">
            <h2 className='text-lg md:text-3xl font-bold'>{activePageTitle}</h2>
            <div className="border border-black rounded-lg md:rounded-xl flex">
                <button onClick={() => handleActivePage("Available-Page")}
                    className={`text-sm md:text-xl px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl md:rounded-l-xl
                    ${activePage === "Available-Page"
                            ? "bg-gradient-to-r from-yellow-400 to-pink-400 font-semibold text-white"
                            : "bg-gray-100 text-black"
                        }`}>Available</button>

                <button onClick={() => handleActivePage("Selected-Page")}
                    className={`text-sm md:text-xl px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl md:rounded-r-xl 
                    ${activePage === "Selected-Page"
                            ? "bg-gradient-to-r from-yellow-400 to-pink-400 font-semibold text-white"
                            : "bg-gray-100 text-black"
                        }`}>Selected (<span>{selectedPlayerLength}</span>)</button>
            </div>
        </div>
    );
};

export default AvailablePlayers;