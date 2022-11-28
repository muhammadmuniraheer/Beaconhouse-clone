function Slider() {
    return(
        <div>
            <div id="carouselExampleDark" className="carousel carousel-fade carousel-dark slide" data-bs-ride="carousel">    
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./education-program.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Education Pragrammes</h1>
                                <p>The Beaconhouse curriculum is designed to meet the needs of the 21st century, of individual students <br></br>as well as the needs of local and global communities.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./learner-program.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Beaconhouse Learner Profile</h1>
                                <p>The Beaconhouse Learner Profile translates our mission of benefitting students, the community and the wider world into a<br></br> set of attributes essential for holistic development.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./extracurricular-activities.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Co- and Extracurricular Activities</h1>
                                <p>Beaconhouse aims to provide a balance between academics and extracurricular activities to develop<br></br> well-rounded individuals.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./child-protection.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Child Protection Policy</h1>
                                <p>Beaconhouse is committed to providing a safe and secure environment for all its students.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./scholarships.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>University Placements and Scholarships</h1>
                                <p>Ranging from top IVY Schools to Russell Group Universities, Beaconhouse students are proving their<br></br> mettle in universities all over the world, especially in the US, UK, Australia and Canada.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./csr.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Corporate Social Responsibility</h1>
                                <p>Beaconhouse has always been a strong advocate of social responsibility and is committed to providing<br></br> public and community services through wide-ranging activities.</p>
                                <button>Read more</button>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
            
    );
}
 export default Slider;