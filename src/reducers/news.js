const initialState = {
  news: [
    { id: 1, name: '第一筆最新消息', description: '這是第一筆哦！' },
    { id: 2, name: '第二筆最新消息', description: '這是第二筆哦！' },
    { id: 3, name: '第三筆最新消息', description: '這是第三筆哦！' },
  ],
};

const news = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default news;
