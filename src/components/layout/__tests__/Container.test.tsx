import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('Container', () => {
  it('matches snapshot', () => {
    const component = shallow(<Container />);
    expect(component.hasClass('govuk-width-container-fluid')).toBeFalsy();
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('adds fluid classes', () => {
    const component = shallow(<Container fluid />);
    expect(component.hasClass('govuk-width-container-fluid')).toBeTruthy();
    component.unmount();
  });
});
