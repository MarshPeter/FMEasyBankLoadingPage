import "../styles/navigation-styles.css";

export default function Navigation({navItems}) {
    return (
        <nav className="header__navigation">
            {navItems.map((item) => {
                return <a className="navigation__item navigation__item--hover-effect" key={item.reference}>{item.name}</a>;
            })}
        </nav>
    )
}