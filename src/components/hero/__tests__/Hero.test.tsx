import React from 'react';
import { shallow, mount } from 'enzyme';
import Hero from '..';

describe('Hero', () => {
  it('matches snapshot', () => {
    const component = shallow(<Hero />);
    expect(component.hasClass('govuk-hero--image')).toBeFalsy();
    expect(component).toMatchSnapshot('Hero');
    component.unmount();
  });

  it('adds correct attributes when imageSrc is provided', () => {
    const component = shallow(<Hero imageSrc="image.png" />);
    expect(component.hasClass('govuk-hero--image')).toBeTruthy();
    expect(component.prop('style')).toEqual({ backgroundImage: "url('image.png')" });
    expect(component.find('.govuk-hero__overlay').exists()).toBeTruthy();
    component.unmount();
  });

  it('adds correct attributes when imageSrc and children are provided', () => {
    const component = shallow(<Hero imageSrc="image.png">Children</Hero>);
    expect(component.hasClass('govuk-hero--image')).toBeTruthy();
    expect(component.hasClass('govuk-hero--image-description')).toBeTruthy();
    expect(component.prop('style')).toEqual({ backgroundImage: "url('image.png')" });
    expect(component.find('.govuk-hero__overlay').exists()).toBeTruthy();
    component.unmount();
  });

  it('renders HeroContent when there are children', () => {
    const component = mount(<Hero>Children</Hero>);
    expect(component.find('.govuk-width-container').exists()).toBeTruthy();
    expect(component.find('.govuk-width-container').hasClass('govuk-hero--border')).toBeFalsy();
    expect(component.find('.govuk-hero-content').exists()).toBeFalsy();
    expect(component.find('.govuk-hero__arrow').exists()).toBeFalsy();
    expect(component.find('.govuk-hero__wrapper').exists()).toBeTruthy();
    component.unmount();
  });

  it('renders HeroContent when there are children and imageSrc', () => {
    const component = mount(<Hero imageSrc="image.png">Children</Hero>);
    expect(component.find('.govuk-width-container').exists()).toBeTruthy();
    expect(component.find('.govuk-width-container').hasClass('govuk-hero--border')).toBeTruthy();
    expect(component.find('.govuk-hero-content').exists()).toBeTruthy();
    expect(component.find('.govuk-hero__arrow').exists()).toBeTruthy();
    expect(component.find('.govuk-hero__wrapper').exists()).toBeFalsy();
    component.unmount();
  });

  it('HeroContent renders null with no children', () => {
    const component = mount(<Hero />);
    expect(component.find('.govuk-width-container').exists()).toBeFalsy();
    component.unmount();
  });

  describe('Hero.Text', () => {
    it('matches snapshot', () => {
      const component = mount(<Hero.Text>Text</Hero.Text>);
      expect(component.text()).toBe('Text');
      expect(component).toMatchSnapshot('Hero.Text');
      component.unmount();
    });
  });

  describe('Hero.Heading', () => {
    it('matches snapshot', () => {
      const component = mount(<Hero.Heading>Text</Hero.Heading>);
      expect(component.text()).toBe('Text');
      expect(component).toMatchSnapshot('Hero.Heading');
      component.unmount();
    });
  });
});
