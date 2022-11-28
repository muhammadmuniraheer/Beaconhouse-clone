import About1 from "../Components/About1";
import Cus from "../Components/Cus";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";

function Contact() {
    return(
        <div className="contact">
            <TopBar/>
            <Navbar/>
            <About1/>
            <Cus/>
            <Footer/>
           
        </div>
    );
}
export default Contact;