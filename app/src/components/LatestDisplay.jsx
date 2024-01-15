import Article from "./Article";
import "../styles/latestDisplay.css";

export default function LatestDisplay() {
    const articles = [
        {
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            brief: "The world is getting smaller and we're becomming more mobile. So why should you be forced to only receive money in a single...",
            image: "../../public/images/image-currency.jpg",
            "alt-text": "various dollar bills in a mountain image",
        },
        {
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            brief: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
            image: "../../public/images/image-restaurant.jpg",
            "alt-text": "restaurant dinner table image",
        },
        {
            author: "Wilson Hutton",
            title: "Take your easybank card wherever you go",
            brief: "We want you to enjoy your travesl. This is why we don't charge any fees on purchases while you're abroad. Wel'll even show you...",
            image: "../../public/images/image-plane.jpg",
            "alt-text": "looking out plane window image",
        },
        {
            author: "Clair Robinson",
            title: "Our invite-only Beta accounts are now live!",
            brief: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request and invite through the site ...",
            image: "../../public/images/image-confetti.jpg",
            "alt-text": "confetti on a blue background image",
        },
    ];
    return (
        <section className="latest-article-container section-container">
            <h2 className="latest-article-title">Latest Articles</h2>
            <div className="articles-container">
                {articles.map((article) => {
                    return (
                        <Article
                            key={article.title}
                            author={article.author}
                            title={article.title}
                            brief={article.brief}
                            image={article.image}
                            altText={article["alt-text"]}
                        />
                    );
                })}
            </div>
        </section>
    );
}
