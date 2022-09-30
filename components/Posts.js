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
        username: "@Samson-H",
        userImage: "https://tse2.explicit.bing.net/th?id=OIP.LEAJoBlmc6dzvKL-tCEx1wHaHa&pid=Api&P=0",
        img: "https://tse2.explicit.bing.net/th?id=OIP.LEAJoBlmc6dzvKL-tCEx1wHaHa&pid=Api&P=0",
        caption: "Hello Guys! cool dude has come back"
    },
    {
        id: 1,
        username: "@Commander",
        userImage: "https://yt3.ggpht.com/a/AATXAJyCblGT8JqdpzvvObORk3c4T_xUBx0d6U1dzA=s900-c-k-c0xffffffff-no-rj-mo",
        img: "https://yt3.ggpht.com/a/AATXAJyCblGT8JqdpzvvObORk3c4T_xUBx0d6U1dzA=s900-c-k-c0xffffffff-no-rj-mo",
        caption: "Hello Guys! cool dude has come back"
    },
    {
        id: 1,
        username: "@shanto_0000",
        userImage: "https://avatars.githubusercontent.com/u/97034683?v=4",
        img: "https://avatars.githubusercontent.com/u/97034683?v=4",
        caption: "Hello Guys! cool dude has come back"
    },
    {
        id: 1,
        username: "@HasanShanto",
        userImage: "https://tse2.mm.bing.net/th?id=OIP.cLdz-ArOuQIk5jM3wn9u0wHaHa&pid=Api&P=0",
        img: "https://tse2.mm.bing.net/th?id=OIP.cLdz-ArOuQIk5jM3wn9u0wHaHa&pid=Api&P=0",
        caption: "Hello Guys! cool dude has come back"
    },
    {
        id: 1,
        username: "@Andry_979",
        userImage: "https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg",
        img: "https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg",
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