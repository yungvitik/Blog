import React, { useState } from 'react';
import './NewForm.scss';

type Props = {
  addPost: (newPost: Partial<Post>) => void,
};

export const NewPostForm: React.FC<Props> = (props) => {
  const { addPost } = props;
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const resetFormFields = () => {
    setPostTitle('');
    setPostBody('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addPost({
      title: postTitle,
      body: postBody,
    });

    resetFormFields();
  };

  return (
    <form
      className="NewPostForm"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="form-field">
          <textarea
            name="title"
            placeholder="Type post title"
            className="NewPostForm__input"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <textarea
            name="body"
            placeholder=""
            className="NewPostForm__input"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="NewPostForm__submit-button button"
      >
        Add post
      </button>
    </form>
  );
};
