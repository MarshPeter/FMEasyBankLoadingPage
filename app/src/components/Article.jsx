import "../styles/Article.css";

export default function Article({ author, title, brief, image, altText }) {
    return (
        <article className="article-container">
            <img className="article__image" src={image} alt={altText} />
            <div className="article__description-container">
                <p className="article__author">By {author}</p>
                <h4 className="article__title">{title}</h4>
                <p className="description__text article__description">
                    {brief}
                </p>
            </div>
        </article>
    );
}
