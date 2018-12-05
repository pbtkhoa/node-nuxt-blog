export const setToken = token => {
  if (process.server) return;
  window.localStorage.setItem('token', token);
};

export const unsetToken = () => {
  if (process.server) return;
  window.localStorage.removeItem('token');
};

export const getToken = () => {
  if (process.server) return;
  if (
    window.localStorage.getItem('token') &&
    window.localStorage.getItem('token') !== 'undefined'
  ) {
    return window.localStorage.getItem('token');
  }
  return null;
};
