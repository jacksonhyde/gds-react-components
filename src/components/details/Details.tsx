import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface DetailsProps extends HTMLProps<HTMLDetailsElement> {
  expander?: boolean;
}

interface Details extends React.FC<DetailsProps> {
  Summary: React.FC<HTMLProps<HTMLDivElement>>;
  Text: React.FC<HTMLProps<HTMLDivElement>>;
  ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>>;
}

// TODO: Check if standard NHS.UK polyfill "details.polyfill.js" is required
const Details: Details = ({ className, expander, ...rest }) => (
  <details
    className={classNames('govuk-details', { 'govuk-expander': expander }, className)}
    {...rest}
  />
);

const DetailsSummary: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => (
  <summary className={classNames('govuk-details__summary', className)} {...rest}>
    <span className="govuk-details__summary-text">{children}</span>
  </summary>
);

const DetailsText: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-details__text', className)} {...rest} />
);

const ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-expander-group', className)} {...rest} />
);

Details.Summary = DetailsSummary;
Details.Text = DetailsText;
Details.ExpanderGroup = ExpanderGroup;

export default Details;
