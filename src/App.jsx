import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayerS from './Components/SelectedPlayerS/SelectedPlayerS'
import { ToastContainer, toast, Slide } from 'react-toastify';

function App() {
    let [coin, setCoin] = useState(0);
    let [selectedPlayer, setSelectedPlayer] = useState([]);
    let [activePage, setActivePage] = useState("Available-Page");


    const handleAddCoin = () => {
        // event.preventDefault();
        setCoin(coin + 1000);
        toast.success(`Congratulation ! Coin Add Succesfully.`);
    }

    const handleSelectPlayer = (player) => {
        if (selectedPlayer.length >= 6) {
            toast.info(`Doesn't Add more than 6 Player !`);
        } else if (coin < player.price) {
            toast.error(`You haven't enough Money !`);
        } else if (selectedPlayer.find(play => play.id === player.id)) {
            toast.warn(`Player already Add !`);
        } else {
            setCoin(coin - player.price);
            console.log(coin);
            setSelectedPlayer([...selectedPlayer, player]);
            toast.success(`Congratulation ! Player Add Succesfully.`);
        }
    }

    const handleRemovePlayer = (removePlayer) => {
        let newPlayer = selectedPlayer.filter(player => player.id !== removePlayer.id);
        setSelectedPlayer(newPlayer);
        toast.warn(`Player Removed !`);
    }

    const handleActivePage = (page) => {
        setActivePage(page);
        console.log(page);
    }


    return (
        <div>
            {/* Page Element  */}
            <div className='w-11/12 md:max-w-4xl lg:max-w-5xl mx-auto'>
                <Navbar coin={coin}></Navbar>
                <Banner handleAddCoin={handleAddCoin}></Banner>
                <AvailablePlayers selectedPlayer={selectedPlayer} handleActivePage={handleActivePage} activePage={activePage}>
                </AvailablePlayers>
                {
                    (activePage === "Available-Page" ?
                        <Players handleSelectPlayer={handleSelectPlayer} selectedPlayer={selectedPlayer}></Players> :
                        <SelectedPlayerS selectedPlayer={selectedPlayer} handleRemovePlayer={handleRemovePlayer} handleActivePage={handleActivePage}></SelectedPlayerS>)
                }
            </div>
            <Footer></Footer>

            {/* React Toastify  */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />

        </div>
    )
}

export default App
