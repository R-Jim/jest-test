import { put, takeLatest } from 'redux-saga/effects';
import { fetchNews, actionWatcher } from './index'
import { EXAMPLE_ACTION_TYPES } from '../reducers/reducer';

describe('SAGAS', () => {
  it('should dispatch action "GET_NEWS" ', () => {
    const generator = actionWatcher();
    expect(generator.next().value)
      .toEqual(takeLatest(EXAMPLE_ACTION_TYPES.GET_NEWS, fetchNews));
    expect(generator.next().done).toBeTruthy();
  })
  it('should dispatch action "NEWS_RECEIVED" with result from fetch News API', () => {
    const mockResponse = { "articles": "Some content" };
    const generator = fetchNews();
    generator.next();
    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: EXAMPLE_ACTION_TYPES.NEWS_RECEIVED, json: "Some content" }))
    expect(generator.next().done).toBeTruthy();
  })
});
