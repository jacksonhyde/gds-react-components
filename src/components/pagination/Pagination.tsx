import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '../icons';

interface PaginationLinkProps extends HTMLProps<HTMLAnchorElement> {
  previous?: boolean;
  next?: boolean;
}

const PaginationLink: React.FC<PaginationLinkProps> = ({
  className,
  children,
  previous,
  next,
  ...rest
}) => (
  <li
    className={classNames(
      { 'govuk-pagination-item--previous': previous },
      { 'govuk-pagination-item--next': next },
    )}
  >
    <a
      className={classNames(
        'govuk-pagination__link',
        { 'govuk-pagination__link--prev': previous },
        { 'govuk-pagination__link--next': next },
        className,
      )}
      {...rest}
    >
      <span className="govuk-pagination__title">
        {previous ? 'Previous' : null}
        {next ? 'Next' : null}
      </span>
      <span className="govuk-u-visually-hidden">:</span>
      <span className="govuk-pagination__page">{children}</span>
      {previous ? <ArrowLeft /> : null}
      {next ? <ArrowRight /> : null}
    </a>
  </li>
);

interface Pagination extends React.FC<HTMLProps<HTMLDivElement>> {
  Link: React.FC<PaginationLinkProps>;
}

const Pagination: Pagination = ({ className, children, ...rest }) => (
  <nav className={classNames('govuk-pagination', className)} {...rest}>
    <ul className="govuk-list govuk-pagination__list">{children}</ul>
  </nav>
);

Pagination.defaultProps = {
  role: 'navigation',
  'aria-label': 'Pagination',
};

Pagination.Link = PaginationLink;

export default Pagination;
