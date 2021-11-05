import { request } from './api';


export const loadAllPosts = () => {
  return request('/posts');
};

export const loadPost = (postId: number) => {
  return request(`/posts/${postId}`);
};

export const deletePost = (postId: number) => {
  return request(`/posts/${postId}`, {
    method: 'DELETE',
  });
};

export const uploadPost = (newPost: Partial<Post>) => {
  return request('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newPost),
  });
};

export const updatePost = (updatedPost: Partial<Post>) => {
  return request(`/posts/${updatedPost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(updatedPost),
  });
};