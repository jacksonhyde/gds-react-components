import React from 'react';
import { shallow } from 'enzyme';
import Images from '..';

describe('Images', () => {
  it('matches snapshot', () => {
    const component = shallow(<Images />);
    expect(component.hasClass('govuk-image')).toBeTruthy();
    expect(component).toMatchSnapshot('Images');
    component.unmount();
  });

  it('renders caption', () => {
    const component = shallow(<Images caption="Caption" />);
    expect(component.find('figcaption').exists()).toBeTruthy();
    expect(component.find('figcaption').hasClass('govuk-image__caption')).toBeTruthy();
    expect(component.find('figcaption').text()).toBe('Caption');
    component.unmount();
  });
});
