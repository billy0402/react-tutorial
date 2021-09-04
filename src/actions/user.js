const setUser = (user) => ({
  type: 'SET_USER',
  payload: { user },
});

export const fetchUser = () => async (dispatch) => {
  const response = await fetch('https://httpbin.org/get');
  const user = await response.json();
  return dispatch(setUser(user));
};
