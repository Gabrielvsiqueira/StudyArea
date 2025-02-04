import React from "react"
import PropTypes from "prop-types"

export default function Post (props) {
    return (
        <>
         <article>
            <strong>{props.post.title}</strong> <br/>
            <small>{props.post.subtitle}</small>
        </article>
        <span>Média: {props.likes / 2}</span>
        <br/>
        </>
    )
}

Post.PropTypes = {
    likes: PropTypes.number.isRequired,
    posst: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle:PropTypes.string.isRequired
    })
}