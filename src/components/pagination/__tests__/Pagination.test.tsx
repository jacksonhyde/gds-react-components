import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '..';
import { ArrowLeft, ArrowRight } from '../../icons';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const element = shallow(<Pagination />);
    expect(element).toMatchSnapshot('Pagination');
    element.unmount();
  });

  describe('Pagination.Link', () => {
    it('matches snapshot', () => {
      const element = shallow(<Pagination.Link />);
      expect(element).toMatchSnapshot('Pagination.Link');
      element.unmount();
    });

    it('renders previous elements', () => {
      const element = shallow(<Pagination.Link previous>PreviousText</Pagination.Link>);
      const paginationLink = element.find('.govuk-pagination__link');
      expect(element.hasClass('govuk-pagination-item--previous')).toBeTruthy();
      expect(element.hasClass('govuk-pagination-item--next')).toBeFalsy();
      expect(element.find('.govuk-pagination__title').text()).toBe('Previous');
      expect(element.contains(<ArrowLeft />)).toBeTruthy();
      expect(element.contains(<ArrowRight />)).toBeFalsy();
      expect(element.find('.govuk-pagination__page').text()).toBe('PreviousText');
      expect(paginationLink.hasClass('govuk-pagination__link--prev')).toBeTruthy();
      expect(paginationLink.hasClass('govuk-pagination__link--next')).toBeFalsy();
      element.unmount();
    });

    it('renders next elements', () => {
      const element = shallow(<Pagination.Link next>NextText</Pagination.Link>);
      const paginationLink = element.find('.govuk-pagination__link');
      expect(element.hasClass('govuk-pagination-item--previous')).toBeFalsy();
      expect(element.hasClass('govuk-pagination-item--next')).toBeTruthy();
      expect(element.find('.govuk-pagination__title').text()).toBe('Next');
      expect(element.contains(<ArrowLeft />)).toBeFalsy();
      expect(element.contains(<ArrowRight />)).toBeTruthy();
      expect(element.find('.govuk-pagination__page').text()).toBe('NextText');
      expect(paginationLink.hasClass('govuk-pagination__link--prev')).toBeFalsy();
      expect(paginationLink.hasClass('govuk-pagination__link--next')).toBeTruthy();
      element.unmount();
    });
  });
});
