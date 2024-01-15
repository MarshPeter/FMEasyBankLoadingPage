import "../styles/navigation-styles.css";

export default function Navigation({navItems}) {
    return (
        <nav className="header__navigation header__navigation--desktop">
            {navItems.map((item) => {
                return <a className="navigation__item navigation__item--hover-effect navigation__item--desktop" key={item.reference}>{item.name}</a>;
            })}
        </nav>
    )
}