import React, {useState} from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const ArticleManager = () => {

    // State: array of articles
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    // Add new articles
    const onClickAdd = () => {
        if (!title || !summary) return;
        const newArticle = {
            id: Date.now(),
            title,
            summary
        };

        setArticles([newArticle, ...articles]);
        setTitle("");
        setSummary("");
    };

    // Remove article with id
    const onClickRemove = (id) => {
        setArticles(articles.filter(article => article.id !== id));
    };

    return (
        <div>
            <AddArticle
                name = "Articles"
                title = {title}
                summary = {summary}
                onChangeTitle = {(e) => setTitle(e.target.value)}
                onChangeSummary = {(e) => setSummary(e.target.value)}
                onClickAdd = {onClickAdd}
            />
            <ArticleList articles = {articles} onClickRemove = {onClickRemove} />
        </div>
    );
};

export default ArticleManager;
