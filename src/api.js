const API_URL = 'https://official-joke-api.appspot.com';

export const getTenRandomJokes = () => {
  const url = `${API_URL}/jokes/ten`;
  return fetch(url)
    .then(res => res.status === 200 ? res.json() : new Error())
    .then(data => data)
    .catch(err => ({ error: 'Something went wrong!'}));
}