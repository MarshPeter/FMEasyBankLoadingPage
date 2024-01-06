import Hamburger from './Hamburger';
import "../styles/header.css";
import "../styles/buttons.css";
import Navigation from './Navigation';

export default function Header() {
    const navigationItems = [
        {
            "name": "Home",
            "reference": "#Home"
        },
        {
            "name": "About",
            "reference": "#About"
        },
        {
            "name": "Contact",
            "reference": "#Contact"
        },
        {
            "name": "Blog",
            "reference": "#Blog"
        },
        {
            "name": "Careers",
            "reference": "#Careers"
        },
    ]
    return (
    <div className="header">
        <img className="header__logo" src="../../public/images/logo.svg" alt="easy bank logo" />
        <Navigation navItems={navigationItems} />
        <Hamburger navItems={navigationItems} />
        <button className="button header__button">Request Invite</button>
    </div>
    )
}