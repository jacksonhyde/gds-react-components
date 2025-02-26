import React from 'react';
import { shallow } from 'enzyme';
import ListPanel from '..';

describe('ListPanel', () => {
  it('matches snapshot', () => {
    const component = shallow(<ListPanel />);
    expect(component.hasClass('govuk-list')).toBeTruthy();
    expect(component).toMatchSnapshot('ListPanel');
    component.unmount();
  });

  describe('ListPanel.Panel', () => {
    it('matches snapshot', () => {
      const component = shallow(<ListPanel.Panel />);
      expect(component).toMatchSnapshot('ListPanel.Panel');
      component.unmount();
    });

    it('renders label', () => {
      const component = shallow(<ListPanel.Panel label="Label" />);
      const label = component.find('.govuk-list-panel__label');
      expect(label.exists()).toBeTruthy();
      expect(label.text()).toBe('Label');
      expect(
        component.find('.govuk-list-panel__list').hasClass('govuk-list-panel__list--with-label'),
      ).toBeTruthy();
      component.unmount();
    });

    it('renders back to top button', () => {
      const component = shallow(<ListPanel.Panel backToTop />);
      expect(component.find('.govuk-back-to-top').exists()).toBeTruthy();
      component.unmount();
    });

    it('renders back to top button with custom text', () => {
      const component = shallow(<ListPanel.Panel backToTop backToTopButtonText="Custom" />);
      expect(component.find('.govuk-back-to-top__link').text()).toBe('Custom');
      component.unmount();
    });
  });

  describe('ListPanel.Item', () => {
    it('matches snapshot', () => {
      const component = shallow(<ListPanel.Item />);
      expect(component).toMatchSnapshot('ListPanel.Item');
      component.unmount();
    });
  });

  describe('ListPanel.LinkItem', () => {
    it('matches snapshot', () => {
      const component = shallow(<ListPanel.LinkItem />);
      expect(component).toMatchSnapshot('ListPanel.LinkItem');
      component.unmount();
    });
  });
});
