import { useState } from 'react';
import './App.css';
import Blog from './Blog';


const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");



  const postBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      {title: titleInput, text: contentInput, date: new Date().toString()}
    ]);
    setTitleInput("");
    setContentInput("");
  }
  
  const deleteBlogPosts = () => {
    setBlogPosts([]);
  }

  const removeSelectedPost = (uID) => {
    console.log("törlés");
    console.log(uID);
    
   const filter = blogPosts.filter(b => b.date !== uID)
  
    /*  
    const lista = [];
    for (const blog of blogPosts) {
      if(blog.date !== uID) {
        lista.push(blog);
      }
    } 
    setBlogPosts(lista)
    */
  
  
    setBlogPosts(filter)
  }

  const editBlogPost = (uID, title, text) => {
    console.log(uID);
    const currentList = blogPosts;

    const nextList = [];
    //todo
    for (const post of currentList) {
      if(post.date !== uID){
        nextList.push(post);
      } else {
        nextList.push(
          {title: title, text: text, date: post.date} 
        )
      }
    }


    setBlogPosts(nextList);
  }

  return (
  <div>
      <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} type="text" placeholder="Title" required minLength={3} />
      <input value={contentInput} onChange={(e) => setContentInput(e.target.value)} type="text" placeholder="Content" required minLength={3}/>
      <button onClick={postBlogPost} >Post</button>
      <h1> Blokk Posztjaim</h1>
      <div>
        {blogPosts.map((post, key) => 
        <Blog key={key} post={post} editBlogPost={editBlogPost} removeSelectedPost={removeSelectedPost} />
      )}
        <button onClick={deleteBlogPosts}>Delete All</button>
      </div>
  </div>

      
  );
}

export default App;
