import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import About1 from '../Components/About1';
import Keys from '../Components/Keys';
import Content from '../Components/AboutUs';
import Timeline from '../Components/Timeline';
import Footer from '../Components/Footer';
function About() {
    return (
        <>
            <div className="about">
                <TopBar />
                <Navbar />
                <About1/>
                <Keys/>
                <Content/>
                <Timeline/>
                <Footer/>
            </div>

        </>
    );
}

export default About;
