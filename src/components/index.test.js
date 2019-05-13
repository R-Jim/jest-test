import renderer from 'react-test-renderer';
import DivCustom from '.';

// NOTES: Reset snapshot with yarn jest --updateSnapshot 

// Test snapshot
it('renders correctly', () => {
  const tree = renderer
    .create(DivCustom)
    .toJSON();
  expect(tree).toMatchSnapshot();
});