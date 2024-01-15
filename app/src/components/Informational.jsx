import Keynote from "./Keynote";
import "../styles/informational.css";

export default function Informational() {
    const notables = [
        {
            "section-title": "Online Banking",
            "section-description":
                "Our modern web and movile applications allow you to keep track of your finances wherever you are in the world.",
            "section-icon": "../../public/images/icon-online.svg",
            "section-alt-text": "Hand holding credit cards icon",
        },
        {
            "section-title": "Simple Budgeting",
            "section-description":
                "See exactly where your money goes each month. Receive notifications wher eyou're close to your hitting limits",
            "section-icon": "../../public/images/icon-budgeting.svg",
            "section-alt-text": "Money label on phone icon",
        },
        {
            "section-title": "Fast Onboarding",
            "section-description":
                "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
            "section-icon": "../../public/images/icon-onboarding.svg",
            "section-alt-text": "People around meeting table icon",
        },
        {
            "section-title": "Open API",
            "section-description":
                "Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.",
            "section-icon": "../../public/images/icon-api.svg",
            "section-alt-text": "computer chip icon",
        },
    ];
    return (
        <section className="informational-container section-container">
            <div className="informational__title-section">
                <h2 className="informational__title">Why choose Easybank?</h2>
                <p className="description__text">
                    We leverage Open Banking to turn your bank account in your
                    financial hum. Control finances like never before.
                </p>
            </div>
            <div className="informational__keynotes-section">
                {notables.map((notable) => {
                    return (
                        <Keynote
                            key={notable["section-title"]}
                            title={notable["section-title"]}
                            description={notable["section-description"]}
                            icon={notable["section-icon"]}
                            iconDescription={notable["section-alt-text"]}
                        />
                    );
                })}
            </div>
        </section>
    );
}
