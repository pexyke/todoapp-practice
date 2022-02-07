import React from 'react';
import { useState } from 'react';

const Blog = (props) => {
    const [editTitle, setEditTitle] = useState("");
    const [editText, setEditText] = useState("");

    return (
    <article>
    <h2>{props.post.title}</h2>
    <p>{props.post.date}</p>
    <p>{props.post.text}</p>
    <input type="text" placeholder="Title" value={editTitle} onChange={event => setEditTitle(event.target.value)}/>
    <input type="text" placeholder="Content" value={editText} onChange={event => setEditText(event.target.value)}/>
    <button onClick={() => props.editBlogPost(props.post.date, editTitle, editText)}>Edit</button>
    <button>Save</button>
    <button onClick={() => props.removeSelectedPost(props.post.date)}>Remove</button>
</article>
    )
};

export default Blog;
