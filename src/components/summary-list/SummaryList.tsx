import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const SummaryListRow: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('govuk-summary-list__row', className)} {...rest} />
);

const SummaryListKey: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dt className={classNames('govuk-summary-list__key', className)} {...rest} />
);

const SummaryListValue: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('govuk-summary-list__value', className)} {...rest} />
);

const SummaryListActions: React.FC<HTMLProps<HTMLDListElement>> = ({ className, ...rest }) => (
  <dd className={classNames('govuk-summary-list__actions', className)} {...rest} />
);

interface SummaryListProps extends HTMLProps<HTMLDListElement> {
  noBorder?: boolean;
}

interface SummaryList extends React.FC<SummaryListProps> {
  Row: React.FC<HTMLProps<HTMLDivElement>>;
  Key: React.FC<HTMLProps<HTMLDListElement>>;
  Value: React.FC<HTMLProps<HTMLDListElement>>;
  Actions: React.FC<HTMLProps<HTMLDListElement>>;
}

const SummaryList: SummaryList = ({ className, noBorder, ...rest }) => (
  <dl
    className={classNames(
      'govuk-summary-list',
      { 'govuk-summary-list--no-border': noBorder },
      className,
    )}
    {...rest}
  />
);

SummaryList.Row = SummaryListRow;
SummaryList.Key = SummaryListKey;
SummaryList.Value = SummaryListValue;
SummaryList.Actions = SummaryListActions;

export default SummaryList;
