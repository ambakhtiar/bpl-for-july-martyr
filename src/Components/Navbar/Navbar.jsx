import { CiCoinInsert } from "react-icons/ci";
import logo from '../../assets/logo.png';

const Navbar = ({ coin }) => {
    const availableCoin = coin;
    return (
        <div className="sticky top-0 bg-white backdrop-blur-md z-50 flex max-w-5xl mx-auto justify-between items-center py-2 mb-4">
            <img className="w-10 h-10" src={logo} alt="coin" />
            <div className="flex gap-8 items-center">
                <ul className="hidden md:flex gap-12 text-gray-500 text-xl">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixtures</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <div className="flex items-center gap-1 border px-2 rounded-lg">
                    <h2 className="text-2xl font-semibold"><span>{availableCoin}</span> Coin</h2>
                    <h2 className="text-4xl text-yellow-500"><CiCoinInsert /></h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;