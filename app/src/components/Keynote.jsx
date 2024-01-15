import "../styles/keynote.css";

export default function Keynote({ title, description, icon, iconDescription }) {
    return (
        <div className="keynote-container">
            <img className="keynote__icon" src={icon} alt={iconDescription} />
            <h3 className="keynote__title">{title}</h3>
            <p className="keynote__description description__text">
                {description}
            </p>
        </div>
    );
}
