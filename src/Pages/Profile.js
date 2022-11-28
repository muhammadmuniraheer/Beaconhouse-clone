import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import About1 from "../Components/About1";
import Bnu from "../Components/Bnu";
import Footer from "../Components/Footer";

function Profile() {
    return( 
        <div className="profile">
            
            <TopBar />
                <Navbar />
                <About1/>
                <Bnu/>
                <Footer/>
        </div>
    );
}
export default Profile;