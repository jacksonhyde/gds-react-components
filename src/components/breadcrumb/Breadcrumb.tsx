import React, { HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { Container } from '../layout';
import type { AsElementLink } from '../../util/types/LinkTypes';

type Item = React.FC<AsElementLink<HTMLAnchorElement>>;

const Item: Item = ({
  className, children, asElement: Component = 'a', ...rest
}) => (
  <li className="govuk-breadcrumbs__list-item">
    <Component className={classNames('govuk-breadcrumbs__link', className)} {...rest}>
      {children}
    </Component>
  </li>
);

const Back: Item = ({ className, asElement: Component = 'a', ...rest }) => (
  <p className={classNames('govuk-breadcrumbs__back', className)}>
    <Component className="govuk-back-link" {...rest} />
  </p>
);

interface Breadcrumb extends React.FC<HTMLProps<HTMLDivElement>> {
  Item: Item;
  Back: Item;
}

type SplitChildren = {
  ItemChildren: Array<ReactNode>;
  OtherChildren: Array<ReactNode>;
};

const Breadcrumb: Breadcrumb = ({ className, children, ...rest }) => {
  // Split off any "Item" components
  const { ItemChildren, OtherChildren } = React.Children.toArray(children).reduce<SplitChildren>(
    (prev, child) => {
      if (child && typeof child === 'object' && 'type' in child && child.type === Item) {
        prev.ItemChildren.push(child);
      } else {
        prev.OtherChildren.push(child);
      }
      return prev;
    },
    {
      ItemChildren: [],
      OtherChildren: [],
    },
  );

  return (
    <nav className={classNames('govuk-breadcrumbs', className)} {...rest}>
        <ol className="govuk-breadcrumbs__list">{ItemChildren}</ol>
        {OtherChildren}
    </nav>
  );
};

Breadcrumb.Item = Item;
Breadcrumb.Back = Back;

Breadcrumb.defaultProps = {
  'aria-label': 'Breadcrumb',
};

export default Breadcrumb;
