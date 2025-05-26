import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Test from './Components/Test/Test'


function App() {
    let [coin, setCoin] = useState(0);
    let [selectedPlayer, setSelectedPlayer] = useState([]);

    const handleAddCoin = () => {
        setCoin(coin + 1000);
    }

    const handleSelectPlayer = (player) => {
        // console.log(coin);
        if (selectedPlayer.length >= 6) {
            alert("tk ki gache dhore");
        } else if (coin < player.price) {
            alert("gorib");
        } else {
            setCoin(coin - player.price);
            console.log(coin);
            setSelectedPlayer([...selectedPlayer, player]);
            alert("player add");
        }
    }


    return (
        <div>
            <div className='w-11/12 md:max-w-4xl lg:max-w-5xl mx-auto'>
                <Navbar coin={coin}></Navbar>
                <Banner handleAddCoin={handleAddCoin}></Banner>
                <AvailablePlayers selectedPlayer={selectedPlayer}>
                </AvailablePlayers>
                <Players handleSelectPlayer={handleSelectPlayer}></Players>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
