function Footer() {
    
        return(
        <div className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 col-sm-12 text-center">
                        <p className="icons mb-0">© 2020 - Beaconhouse - All Rights Reserved</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <p className="icons">Download Beaconhouse App Now!</p>
                        <img  src="./playstore.png" alt="" />
                        <img src="./appstore.png" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 text-center icons-p">
                        <i className="fa-brands fa-facebook-f m-1 icons"></i>
                        <i className="fa-brands fa-twitter m-1 icons"></i>
                        <i className="fa-brands fa-linkedin m-1 icons"></i>


                    </div>
                </div>
            </div>
        </div>
    );
} 
export default Footer;