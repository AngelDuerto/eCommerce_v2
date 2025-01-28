import '../styles/Home.css';
import slide1 from '../assets/images/slide1.webp'
import slide2 from '../assets/images/slide2.webp'
import slide3 from '../assets/images/slide3.webp'

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
                <section className="sliderHome">
                    <div className="sliderContainer">
                        <div className="slide">
                            <img src={slide1} alt="Slide 1" />
                        </div>
                        <div className="slide">
                            <img src={slide2} alt="Slide 2" />
                        </div>
                        <div className="slide">
                            <img src={slide3} alt="Slide 3" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
