import React from 'react'
import Post from './Post'

const posts = [
    {
        id: 1,
        username: "@shanto_0000",
        userImage: "https://avatars.githubusercontent.com/u/97034683?v=4",
        img: "https://avatars.githubusercontent.com/u/97034683?v=4",
        caption: "Hello Guys! cool dude has come back"
    },
    {
        id: 1,
        username: "@shanto_0000",
        userImage: "https://avatars.githubusercontent.com/u/97034683?v=4",
        img: "https://avatars.githubusercontent.com/u/97034683?v=4",
        caption: "Hello Guys! cool dude has come back"
    }
]

function Posts() {
  return (
    <div>
        {posts.map(post => (
             
        <Post 
        key={post.id}
        id={post.id}
        username={post.username}
        userImage={post.userImage}
        img={post.img}
        caption={post.caption}
        />
        ))}
        
    </div>
  )
}

export default Posts