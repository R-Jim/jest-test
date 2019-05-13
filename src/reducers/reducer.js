export const EXAMPLE_ACTION_TYPES = {
  GET_NEWS: 'GET_NEWS',
  NEWS_RECEIVED: 'NEWS_RECEIVED',
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION_TYPES.GET_NEWS:
      return { ...state, loading: true };
    case EXAMPLE_ACTION_TYPES.NEWS_RECEIVED:
      return { ...state, news: action.json[0], loading: false }
    default:
      return state;
  }
};
export default reducer;