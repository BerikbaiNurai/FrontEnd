import React, {useState} from "react";

const Articleitem = ({article, onClickRemove}) => {
    const [isOpened, setIsOpened] = useState (false);

    const onClickToggle = (e) => {
        e.preventDefault();
        setIsOpened(!isOpened);
    };

    return (
        <li>
            <a href = {`#${article.id}`} title = "Toggle Summary" onClick = {onClickToggle}>
                {article.title}
            </a>
            <button onClick = {() => onClickRemove(article.id)}>Delete</button>
            <p style = {{display: isOpened ? "block" : "none"}}>{article.summary}</p>
        </li>
    );
};

export default Articleitem;