import { IoIosPerson } from "react-icons/io";
import { FaFontAwesomeFlag } from "react-icons/fa";

const Player = ({ player, handleSelectPlayer, isAdded }) => {
    // console.log(player);
    const { name, region, img, role, price, batting_type, bowling_type, bowling_style } = player;
    return (
        <div className="space-y-4 p-4 border rounded-xl">
            <img className="w-80 h-60 object-cover rounded-xl mx-auto" src={img} alt="" />
            <div className="flex items-center gap-4">
                <IoIosPerson />
                <h3 className="text-xl font-bold">{name}</h3>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h3><FaFontAwesomeFlag /></h3>
                    <h3 className="text-lg">{region}</h3>
                </div>
                <h3 className="bg-gray-300 px-2 rounded-sm">{role}</h3>
            </div>
            <hr />
            <div className="flex justify-between">
                <h3 className="text-md font-semibold">Batting Type</h3>
                <h3>{batting_type}</h3>
            </div>
            <div className="flex justify-between">
                <h3 className="text-md font-semibold">Bowling Type</h3>
                <h3>{bowling_type}</h3>
            </div>
            <div className="flex justify-between">
                <h3 className="text-md font-semibold">Bowling Style</h3>
                <h3>{bowling_style}</h3>
            </div>
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold">Price : <span>{price}</span></h3>
                <button onClick={() => handleSelectPlayer(player)} disabled={isAdded}
                    className={`px-3 py-1 rounded ${isAdded
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-yellow-500 text-white hover:bg-yellow-600"
                        }`} >{isAdded ? "Added" : "Choose Player"}</button>
            </div>
        </div>
    );
};

export default Player;