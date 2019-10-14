import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview';

describe('Overview component', () => {
  it('renders Overview', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper).toMatchSnapshot();
  });
});
