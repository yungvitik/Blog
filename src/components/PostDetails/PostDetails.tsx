import React, { useState, useEffect } from 'react';
import { loadPost } from '../../api/posts';
import { loadPostComments, uploadComment, deleteComment } from '../../api/comments';
import { NewCommentForm } from '../NewCommentForm';
import './PostDetails.scss';


export const PostDetails = (props: any) => {
  const { detailsPostId } = props;
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isHiddenComments, setIsHiddenComments] = useState(false);

  useEffect(() => {
    loadPost(detailsPostId).then(loadedDetails => setSelectedPost(loadedDetails));
    loadPostComments(detailsPostId).then(loadedComments => setComments(loadedComments));
  }, [detailsPostId]);

  console.log(comments);
  console.log(selectedPost);


  const addComment = (newComment: Partial<Comment>) => {
    uploadComment(newComment)
      .then(() => {
        loadPostComments(detailsPostId).then(loadedComments => setComments(loadedComments));
      });
  };

  const removeComment = (commentId: number) => {
    deleteComment(commentId)
      .then(() => {
        loadPostComments(detailsPostId).then(loadedComments => setComments(loadedComments));
      });
  };

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>

      <section className="PostDetails__post">
        <strong>{selectedPost?.title}</strong>
        <p>{selectedPost?.body}</p>
      </section>

      {comments.length > 0 && (
        <section className="PostDetails__comments">
          <button
            type="button"
            className="button"
            onClick={() => setIsHiddenComments(!isHiddenComments)}
          >
            {`${!isHiddenComments ? 'Hide' : 'Show'} `
             + `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
          </button>

          <ul className="PostDetails__list">
            {isHiddenComments || (
              comments.map(comment => (
                <li
                  key={comment.id}
                  className="PostDetails__list-item"
                >
                  <button
                    type="button"
                    className="PostDetails__remove-button button"
                    onClick={() => removeComment(comment.id)}
                  >
                    X
                  </button>
                  <p>{comment.body}</p>
                </li>
              ))
            )}
          </ul>
        </section>
      )}

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            postId={detailsPostId}
            onAddComments={addComment}
          />
        </div>
      </section>
    </div>
  );
};
