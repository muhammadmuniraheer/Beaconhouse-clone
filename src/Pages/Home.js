import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import Slider from '../Components/Slider';
import Welcome from '../Components/Welcome';
import News from '../Components/News';
import Projects from '../Components/Projects';
import Location from '../Components/Location';
import Footer from '../Components/Footer';
function Home() {
    return (
        <>
            <div className="home">
                <TopBar />
                <Navbar />
                <Slider />
                <Welcome />
                <News />
                <Projects/>
                <Location/>
                <Footer/> 
            </div>

        </>
    );
}

export default Home;
