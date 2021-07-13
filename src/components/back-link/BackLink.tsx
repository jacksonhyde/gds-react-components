import React from 'react';
import classNames from 'classnames';
import { ChevronLeft } from '../icons';
import type { AsElementLink } from '../../util/types/LinkTypes';

const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <Component className={classNames('govuk-back-link', className)} {...rest}>
    {children}
  </Component>
);

export default BackLink;
