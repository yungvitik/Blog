const BASE_URL = 'https://bloggy-api.herokuapp.com';

export const request = async (url: string, options = {}) => {
  return fetch(`${BASE_URL}${url}`, options).then(response => response.json());
};
