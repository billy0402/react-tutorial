export const addNews = (news) => {
  // let news = {};
  // setTimeout(() => {
  //   news = theNews;
  // }, 1000);
  return { type: 'ADD_NEWS', payload: { news } };
};
export const deleteNews = (id) => ({ type: 'DELETE_NEWS', payload: { id } });
