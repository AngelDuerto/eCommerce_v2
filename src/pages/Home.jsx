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
                    <h2 className="newTitle">The Fresh Garden</h2>
                    <p className="newText">At Angelic Garden, we believe that every space deserves a touch of natural elegance and serenity. Our carefully curated collection of plants transforms ordinary rooms into extraordinary sanctuaries, bringing life and vitality to your home or office. From lush indoor tropical plants to delicate flowering specimens, each plant in our selection is chosen not just for its beauty, but for its ability to create an atmosphere of tranquility and joy. </p>
                </div>
                <HomeSlider />
            </div>
        </main>
    );
};

export default Home;
