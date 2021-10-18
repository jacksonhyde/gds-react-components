import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends HTMLProps<HTMLAnchorElement> {
  current?: boolean;
}

const ContentsListItem: React.FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li className={classNames('govuk-contents-list__item', className)}>
    {current ? (
      <span className="govuk-contents-list__current" {...rest} />
    ) : (
      <a className="govuk-contents-list__link" {...rest} />
    )}
  </li>
);

interface ContentsListProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface ContentsList extends React.FC<ContentsListProps> {
  Item: React.FC<ContentsListItemProps>;
}

const ContentsList: ContentsList = ({
  className, children, visuallyHiddenText, ...rest
}) => (
  <nav className={classNames('govuk-contents-list', className)} {...rest}>
    {visuallyHiddenText !== false ? (
      <h2 className="govuk-u-visually-hidden">{visuallyHiddenText}</h2>
    ) : null}
    <ol className="govuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsList.defaultProps = {
  role: 'navigation',
  visuallyHiddenText: 'Contents',
};

ContentsList.Item = ContentsListItem;

export default ContentsList;
