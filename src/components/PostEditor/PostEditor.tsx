import React, { useState, useEffect } from 'react';
import { loadPost} from '../../api/posts';
import './PostEditor.scss';

type Props = {
  editPost: (title: string, body: string) => void,
  editPostId: number,
};

export const PostEditor: React.FC<Props> = (props) => {
  const { editPostId, editPost } = props;
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    loadPost(editPostId).then(loadedPost => {
      setPostTitle(loadedPost.title || '');
      setPostBody(loadedPost.body || '');
    });
  }, [editPostId]);

  // const resetFormFields = () => {
  //   setPostTitle('');
  //   setPostBody('');
  // };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();

    editPost(postTitle, postBody);
  };

  return (
    <form
      className="NewForm"
      onSubmit={handleUpdate}
    >
      <div>
        <div className="form-field">
          <textarea
            name="title"
            placeholder="Type post title"
            className="NewForm__input"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
          <textarea
            name="body"
            placeholder=""
            className="NewForm__input"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="NewForm__submit-button button"
      >
        Save changes
      </button>
    </form>
  );
};
