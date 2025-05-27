import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayer from './Components/SelectedPlayerS/SelectedPlayerS'
import SelectedPlayerS from './Components/SelectedPlayerS/SelectedPlayerS'


function App() {
    let [coin, setCoin] = useState(0);
    let [selectedPlayer, setSelectedPlayer] = useState([]);
    let [activePage, setActivePage] = useState("Available-Page");

    const handleActivePage = (page) => {
        setActivePage(page);
    }

    const handleAddCoin = () => {
        setCoin(coin + 1000);
    }

    const handleSelectPlayer = (player) => {
        if (selectedPlayer.length >= 6) {
            alert("tk ki gache dhore");
        } else if (coin < player.price) {
            alert("gorib");
        } else if (selectedPlayer.find(play => play.id === player.id)) {
            alert("vai 1 player koibar add korbe");
        } else {
            setCoin(coin - player.price);
            console.log(coin);
            setSelectedPlayer([...selectedPlayer, player]);
            alert("player add");
        }
    }

    const handleRemovePlayer = (removePlayer) => {
        let newPlayer = selectedPlayer.filter(player => player.id !== removePlayer.id);
        setSelectedPlayer(newPlayer);
    }

    return (
        <div>
            <div className='w-11/12 md:max-w-4xl lg:max-w-5xl mx-auto'>
                <Navbar coin={coin}></Navbar>
                <Banner handleAddCoin={handleAddCoin}></Banner>
                <AvailablePlayers selectedPlayer={selectedPlayer} handleActivePage={handleActivePage} activePage={activePage}>
                </AvailablePlayers>
                {
                    (activePage === "Available-Page" ? <Players handleSelectPlayer={handleSelectPlayer} selectedPlayer={selectedPlayer}></Players> : <SelectedPlayerS selectedPlayer={selectedPlayer} handleRemovePlayer={handleRemovePlayer}></SelectedPlayerS>)
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
