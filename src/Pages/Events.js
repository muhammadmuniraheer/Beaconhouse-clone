import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import About1 from "../Components/About1";
import Events1 from "../Components/Events1";
import Footer from "../Components/Footer";

function Events() {
    return( 
        <div className="events">
            
            <TopBar />
                <Navbar />
                <About1/>
                <Events1/>
                <Footer/>
        </div>
    );
}
export default Events;