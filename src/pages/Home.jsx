import '../styles/Home.css';
import HomeSlider from '../components/HomeSlider';

function Home() {
    return (
        <main>
            <div className='mainContainer'>
                <h1 id="exploreTxt">Explore the Garden</h1>
                <p id='newDropTxt'>NEW DROP AVAILABLE</p>
                <a href="/catalog"><button id='btmDiscover'>Discover</button></a>
            </div>
            <div className="contentSection">
            <div className="textSection">
                    <h2 className="newTitle">Garden Fresh Ideas</h2>
                    <p className="newText">Discover the latest trends in gardening with our exclusive selection. Perfect for every garden lover!</p>
                </div>
                <HomeSlider />
            </div>
        </main>
    );
};

export default Home;
