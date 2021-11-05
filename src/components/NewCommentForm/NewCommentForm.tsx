import React, { useState } from 'react';
import './NewCommentForm.scss';

type Props = {
  postId: number,
  onAddComments: (newComment: Partial<Comment>) => void,
};

export const NewCommentForm: React.FC<Props> = (props) => {
  const { postId, onAddComments } = props;
  const [userComment, setUserComment] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onAddComments({
      body: userComment,
      postId,
    });

    setUserComment('');
  };

  return (
    <form
      className="NewCommentForm"
      onSubmit={handleSubmit}
    >

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};
