import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import About1 from "../Components/About1";
import Keys from "../Components/Keys";
import EducationProgrames from "../Components/EducationProgrames";
import SlickSlider from "../Components/SlickSlider"
import Curricular from "../Components/Curricular";
import SpecialEducation from "../Components/SpecialEducation";
import Footer from "../Components/Footer"

function Education() {
    return( 
        <div className="education">
            
            <TopBar />
                <Navbar />
                <About1/>
                <Keys/>
                <EducationProgrames/>
                <SlickSlider/>
                <Curricular/>
                <SlickSlider/>
                <SpecialEducation/>
                <Footer/>

                
            
        </div>
    );
}
export default Education;