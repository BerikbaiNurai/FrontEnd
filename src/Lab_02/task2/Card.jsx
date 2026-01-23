import React from "react";

function Card ({title, children, className}) {
    return (
        <article className = {'card ${className || ""}'}>
            <h3>{title}</h3>
            <div>{children}</div>
        </article>
    );
}

export default Card;