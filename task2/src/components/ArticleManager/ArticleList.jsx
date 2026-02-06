import React from "react";
import Articleitem from "./Articleitem";

const ArticleList = ({articles, onClickRemove}) => {
    return (
        <ul>
            {articles.map(article => (
                <Articleitem key = {article.id} article = {article} onClickRemove = {onClickRemove} />
            ))}
        </ul>
    );
};

export default ArticleList;