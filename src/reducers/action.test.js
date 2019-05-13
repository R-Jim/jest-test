// Test Action 
import { getNews } from './action';
import { EXAMPLE_ACTION_TYPES } from './reducer';


describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: EXAMPLE_ACTION_TYPES.GET_NEWS
    }
    expect(getNews()).toEqual(expectedAction)
  })
})