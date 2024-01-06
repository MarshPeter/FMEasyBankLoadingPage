import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX} from '@fortawesome/free-solid-svg-icons'
import "../styles/navigation-styles.css";
import "../styles/hamburger.css";

export default function Hamburger({navItems}) {
    const [showNavigationOnMobile, setShowNavigationOnMobile] = useState(false);
    const [classesForHamburgerNavBar, setClassesForHamburgerNavBar] = useState("hide");
    const [dimmerClass, setDimmerClass] = useState("hide");

    function handleHamburgerClick(e) {
        e.preventDefault();
        if (showNavigationOnMobile) {
            setClassesForHamburgerNavBar("hide");
            setDimmerClass("hide");
        } else {
            setClassesForHamburgerNavBar("header__navigation header__navigation--mobile");
            setDimmerClass("dimmer");
        }
        setShowNavigationOnMobile(!showNavigationOnMobile);
    }
    return (
        <>
            <a className="header__hamburger" onClick={handleHamburgerClick} href="">
                <FontAwesomeIcon className="fa-sm" icon={!showNavigationOnMobile? faBars : faX} />
            </a>
            <nav className={classesForHamburgerNavBar}>
                {navItems.map((item) => {
                    return (
                        <a className="navigation__item navigation__item--mobile" key={item.reference} href={item.reference}>{item.name}</a>
                    )
                })}
            </nav>
            <div className={dimmerClass}></div>
        </>
    )
}