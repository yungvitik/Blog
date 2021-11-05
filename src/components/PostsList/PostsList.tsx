import React, { useState, useEffect } from 'react';
import './PostsList.scss';

// type Props = {
//   selectedUserId: number;
//   detailsPostId: number;
//   onSelectPost: (postId :number) => void;
// };

export const PostsList = (props: any) => {
  const { posts, detailsPostId, setDetailsPostId, removePost, setEditPostId, editPostId} = props;
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   loadUserPosts(selectedUserId).then(lodedPosts => setPosts(lodedPosts));
  // }, [selectedUserId]);

  const chooseDetailedPost = (postId: number) => {
    setEditPostId(0);

    postId === detailsPostId
      ? setDetailsPostId(0)
      : setDetailsPostId(postId)
};

  const chooseEditPost = (postId: number) => {
    setDetailsPostId(0);
    setEditPostId(postId);
  };



  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">
        {posts.length > 0 ? (
          <>
            {posts.map((post: any) => (
              <li key={post.id} className="PostsList__item">
                <div>
                  <strong>{`[Post #${post.id}]: `}</strong>
                  {post.title}
                </div>
                <div>
                  <button
                      type="button"
                      className="PostDetails__remove-button button"
                      onClick={() => removePost(post.id)}
                    >
                      X
                    </button>

                  <button
                      type="button"
                      className="PostDetails__remove-button button"
                      onClick={() => chooseEditPost(post.id)}
                    >
                      Edit
                    </button>

                  <button
                    type="button"
                    className="PostsList__button button"
                    onClick={() => chooseDetailedPost(post.id)}
                  >
                    {detailsPostId === post.id
                      ? 'Close'
                      : 'Open'}
                  </button>
                </div>

              </li>
            ))}
          </>
        ) : 'No posts'}
      </ul>
    </div>
  );
};
