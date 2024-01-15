import "../styles/footer.css";

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer__section-one">
                <img
                    className="footer__logo--main"
                    src="../public/images/logo-white-text.svg"
                    alt="Easy Bank Logo"
                />
                <div className="footer__logo-container">
                    <img
                        className="footer__logo"
                        src="../../public/images/icon-facebook.svg"
                        alt="white facebook logo"
                    />
                    <img
                        className="footer__logo"
                        src="../../public/images/icon-youtube.svg"
                        alt="white youtube logo"
                    />
                    <img
                        className="footer__logo"
                        src="../../public/images/icon-twitter.svg"
                        alt="white twitter logo"
                    />
                    <img
                        className="footer__logo"
                        src="../../public/images/icon-pinterest.svg"
                        alt="white pinterest logo"
                    />
                    <img
                        className="footer__logo"
                        src="../../public/images/icon-instagram.svg"
                        alt="white instagram logo"
                    />
                </div>
            </div>
            <div className="footer__links-container">
                <a className="footer__link" href="">
                    About Us
                </a>
                <a className="footer__link" href="">
                    Contact
                </a>
                <a className="footer__link" href="">
                    Blog
                </a>
                <a className="footer__link" href="">
                    Careers
                </a>
                <a className="footer__link" href="">
                    Support
                </a>
                <a className="footer__link" href="">
                    Privacy Policy
                </a>
            </div>
            <div className="footer__section-three">
                <div className="footer__button button">Request Invite</div>
                <p className="footer__copyright">
                    &copy; Easybank. All Rights Reserved
                </p>
            </div>
        </div>
    );
}
