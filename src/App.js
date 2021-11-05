import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { loadAllPosts, deletePost, uploadPost, updatePost} from './api/posts';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { NewPostForm } from './components/NewPostForm';
import { PostEditor } from './components/PostEditor';
import './App.scss';
import './styles/general.scss';

const App = () => {
  const [detailsPostId, setDetailsPostId] = useState(0);
  const [editPostId, setEditPostId] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadAllPosts()
    .then(loadedPosts => setPosts(loadedPosts));
  }, []);

  
  const removePost = (postId) => {
    deletePost(postId)
      .then(() => {
        loadAllPosts().then(loadedPosts => setPosts(loadedPosts));
      });
  };

  const addPost = (newPost) => {
    uploadPost(newPost)
      .then(() => {
        loadAllPosts().then(loadedPosts => setPosts(loadedPosts));
      });
  };

  const editPost = (title, body) => {

    updatePost({
      id: editPostId,
      title,
      body,
    })
    .then(() => {
      loadAllPosts().then(loadedPosts => setPosts(loadedPosts));
    });

    setEditPostId(0)
  }
  

  console.log(posts);

  return (
    <div className="App">
      <div>
        <NewPostForm addPost={addPost}/>
      </div>
      <main className="App__main">
        <div className="App__sidebar">
          <PostsList
            posts={posts}
            detailsPostId={detailsPostId}
            setDetailsPostId={setDetailsPostId}
            setEditPostId={setEditPostId}
            editPostId={editPostId}
            removePost={removePost}
          />
        </div>

        {editPostId > 0 &&
          <div className="App__content">
            <PostEditor editPostId={editPostId} editPost={editPost} />
          </div>
         }
        {detailsPostId > 0 &&
          <div className="App__content">
            <PostDetails detailsPostId={detailsPostId} />
          </div>
        }

      </main>
    </div>
  );
}

export default App;
