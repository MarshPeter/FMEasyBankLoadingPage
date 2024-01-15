import "../styles/hero.css";
import "../styles/buttons.css";
import "../styles/text.css";
import "../index.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__backdrop">
                <img
                    className="hero__backsplash--mobile"
                    src="../../public/images/bg-intro-mobile.svg"
                    alt="backsplash for mobile hero"
                />
                <div className="backdrop-desktop-container">
                    <img
                        className="hero__backsplash--desktop"
                        src="../../public/images/bg-intro-desktop.svg"
                        alt="backsplash for mobile hero"
                    />
                </div>
                <img
                    className="hero__mockups-image"
                    src="../../public/images/image-mockups.png"
                    alt="on phone mockups of Easy Bank"
                />
            </div>
            <div className="hero__description section-container">
                <h1 className="hero__slogan">
                    Next generation digital banking
                </h1>
                <p className="description__text">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting, and much
                    more.
                </p>
                <button className="button">Request Invite</button>
            </div>
        </section>
    );
}
